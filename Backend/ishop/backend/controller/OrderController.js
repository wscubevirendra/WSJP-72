require("dotenv").config()
const { encrypted, decrypted, generateToken } = require("../helper");
const Razorpay = require('razorpay');
const CartModel = require("../model/cartModel");
const OrderModel = require("../model/OrderModel");
const crypto = require("crypto");

var instancePayment = new Razorpay({
    key_id: process.env.RAZORPAY_KEY_ID,
    key_secret: process.env.RAZORPAY_KEY_SECRET,
});




class OrderController {
    placeOrder(data) {
        return new Promise(
            async (resolve, reject) => {
                try {
                    const { user_id, order_total, payment_mode, shipping_details } = data;
                    // if (!user_id || !order_total || !payment_mode || !shipping_details) {
                    //     reject({
                    //         msg: "All fields are required",
                    //         status: 0
                    //     })
                    // }

                    const cart = await CartModel.find({ user_id: user_id }).populate("product_id", "_id finalPrice");
                    const product_details = cart.map((cd) => {
                        return {
                            product_id: cd.product_id._id,
                            qty: cd.qty,
                            price: cd.product_id.finalPrice,
                            total: (cd.product_id.finalPrice * cd.qty)
                        }
                    })



                    const order = new OrderModel({
                        user_id: user_id,
                        product_details: product_details,
                        order_total: order_total,
                        payment_mode: payment_mode,
                        shipping_details: shipping_details
                    })

                    order.save().then(
                        async () => {
                            await CartModel.deleteMany({ user_id: user_id })
                            if (payment_mode == 0) {

                                resolve({
                                    msg: "Order placed successfully",
                                    status: 1,
                                    orderId: order._id
                                })

                            } else {
                                this.instancePaymentGateway(order._id, order_total).then(
                                    (order) => {
                                        resolve({
                                            msg: "Order placed successfully",
                                            status: 1,
                                            order
                                        })
                                    }

                                ).catch(
                                    (error) => {
                                        console.log(error)
                                        reject({
                                            msg: "Payment gateway error",
                                            status: 0
                                        })
                                    }
                                )


                            }

                        }
                    ).catch(
                        (error) => {
                            console.log(err)

                            reject({
                                msg: "Order not created",
                                status: 0
                            })
                        }
                    )




                }
                catch (error) {
                    console.log(error)

                    reject({
                        msg: "Internal server error",
                        status: 0
                    })

                }

            }
        )

    }

    instancePaymentGateway(order_id, order_total) {
        return new Promise(
            (resolve, reject) => {
                try {
                    var options = {
                        amount: order_total * 100,  // Amount is in currency subunits. Default currency is INR. Hence, 50000 refers to 50000 paise
                        currency: "INR",
                        receipt: order_id
                    };
                    instancePayment.orders.create(options, async function (err, order) {
                        if (err) {

                            reject({
                                msg: "Payment gateway error",
                                status: 0
                            })
                        } else {
                            await OrderModel.updateOne(
                                { _id: order_id },
                                {
                                    razorpay_order_id: order.id
                                }
                            )
                            resolve(
                                {
                                    msg: "Order created successfully",
                                    status: 1,
                                    order_id: order_id,
                                    razorpay_order_id: order.id
                                }
                            )
                        }
                    });

                } catch (error) {
                    console.log(error)
                    reject({
                        msg: "Internal server error",
                        status: 0
                    })

                }

            }
        )
    }

    async paymentSuccess(order_data) {
        return new Promise(async (resolve, reject) => {
            try {
                const { order_id, user_id, razorpay_response } = order_data;

                // Create data string for signature verification
                const data = `${razorpay_response.razorpay_order_id}|${razorpay_response.razorpay_payment_id}`;

                // Generate HMAC-SHA256 signature using secret key
                const generatedSignature = crypto
                    .createHmac('sha256', process.env.RAZORPAY_KEY_SECRET)
                    .update(data)
                    .digest('hex');

                // Compare signatures
                if (generatedSignature === razorpay_response.razorpay_signature) {
                    await CartModel.deleteMany({ user_id });

                    // ✅ Fix: Query using `razorpay_order_id`, NOT `_id`
                    await OrderModel.updateOne(
                        { razorpay_order_id: razorpay_response.razorpay_order_id },
                        {
                            razorpay_payment_id: razorpay_response.razorpay_payment_id,
                            order_status: 1
                        }
                    );

                    resolve({ status: 1, msg: 'Order placed' });
                } else {
                    reject({ status: 0, msg: 'Payment verification failed' });
                }
            } catch (error) {
                console.log(error);
                reject({ msg: "Internal server error", status: 0 });
            }
        });
    }
}





module.exports = OrderController