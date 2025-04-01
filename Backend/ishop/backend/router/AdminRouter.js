const express = require("express");
const AdminController = require("../controller/AdminController");
const AdminRouter = express.Router();


AdminRouter.post(
    "/register",
    (req, res) => {
        const result = new AdminController().register(req.body);
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

AdminRouter.post(
    "/login",
    (req, res) => {
        const result = new AdminController().login(req.body);
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







module.exports = AdminRouter