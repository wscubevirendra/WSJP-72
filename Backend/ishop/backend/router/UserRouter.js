const express = require("express");
const UserController = require("../controller/UserController");
const UserRouter = express.Router();


UserRouter.post(
    "/register",
    (req, res) => {
        const result = new UserController().register(req.body);
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

UserRouter.post(
    "/login",
    (req, res) => {
        const result = new UserController().login(req.body);
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

UserRouter.post(
    "/move-to-db/:userId",
    (req, res) => {
        
        const result = new UserController().moveToDB(req.params.userId, req.body);
        result.then(
            (response) => {
                res.send(response)
            }
        ).catch(
            (error) => {
                res.send(error)

            })

    }
)







module.exports = UserRouter