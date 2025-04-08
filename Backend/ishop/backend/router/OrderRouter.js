const express = require("express");
const OrderController = require("../controller/OrderController");
const OrderRouter = express.Router();


OrderRouter.post(
    "/place-order",
    (req, res) => {
        const result = new OrderController().placeOrder(req.body);
        result.then(
            (response) => {
                res.send(response)
            }
        ).catch(
            (error) => {
                res.send(error)
            }
        )

    })


OrderRouter.post(
    "/payment-success",
    (req, res) => {
        const result = new OrderController().paymentSuccess(req.body);
        result.then(
            (response) => {
                res.send(response)
            }
        ).catch(
            (error) => {
                res.send(error)
            }
        )

    })








module.exports = OrderRouter