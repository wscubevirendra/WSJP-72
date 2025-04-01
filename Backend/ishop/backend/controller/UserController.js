const { encrypted, decrypted, generateToken } = require("../helper");
const CartModel = require("../model/cartModel");
const UserModel = require("../model/UserModel");


class UserController {
    register(data) {
        return new Promise(
            async (resolve, reject) => {
                try {
                    if (!data.name || !data.email || !data.password) {
                        reject(
                            {
                                msg: "All Field is Required",
                                status: 0
                            }
                        )
                    }
                    const user = await UserModel.findOne({ email: data.email });
                    if (user) {
                        reject(
                            {
                                msg: "Email Already exist",
                                status: 0
                            }
                        )

                    } else {
                        const user = new UserModel(
                            {
                                name: data.name,
                                email: data.email,
                                contact: data.contact,
                                password: encrypted(data.password)
                            }
                        )


                        user.save().then(
                            () => {
                                resolve(
                                    {
                                        msg: "User Accound create",
                                        status: 1,
                                        user: { ...user.toJSON(), password: null },
                                        token: generateToken(user.toJSON())

                                    }
                                )

                            }
                        ).catch(
                            () => {
                                reject(
                                    {
                                        msg: "Unable to creat user",
                                        status: 0

                                    }
                                )

                            }
                        )

                    }
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

    login(data) {
        return new Promise(
            async (resolve, reject) => {
                try {
                    const user = await UserModel.findOne({ email: data.email });
                    if (user) {
                        if (data.password == decrypted(user.password)) {
                            resolve(
                                {
                                    msg: "Login succesfully",
                                    status: 1,
                                    user: { ...user.toJSON(), password: null },
                                    token: generateToken(user.toJSON())
                                }
                            )

                        } else {
                            reject(
                                {
                                    msg: "Incorrect passowrd",
                                    status: 0
                                }
                            )
                        }

                    } else {
                        reject(
                            {
                                msg: "Account not exist",
                                status: 0
                            }
                        )

                    }
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

    moveToDB(userId, data) {
        return new Promise(
            async (resolve, reject) => {
                try {
                    const cartData = data ? JSON.parse(data.cart) : null;
                    if (cartData != null) {
                        const allPromise = cartData.map(
                            async (cd) => {
                                const d = await CartModel.findOne({ user_id: userId, product_id: cd.productId })

                                if (d) {
                                    //qty increase
                                    await CartModel.updateOne(
                                        { _id: d._id },
                                        {
                                            $inc: {
                                                qty: Number(cd.qty)
                                            }
                                        }
                                    )

                                } else {
                                    new CartModel({
                                        user_id: userId,
                                        product_id: cd.productId,
                                        qty: cd.qty
                                    }).save()

                                }

                            }
                        )

                        await Promise.all(allPromise)
                    
                        resolve(
                            {
                                msg: "move to DB",
                                status: 1,
                            }
                        )
                    } 

                } catch (error) {
                    console.log(error)
                    reject(
                        {
                            msg: "Internal server error",
                            status: 0
                        }
                    )
                }
            }
        )

    }

}

module.exports = UserController