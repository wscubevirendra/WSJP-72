const express = require('express');
const userRouter = express.Router()
const userController = require("../controllers/userController")


userRouter.post("/register", (req, res) => {
    const result = new userController().create(req.body)
    result.then(
        (sucess) => {
            res.send(sucess)

        }
    ).catch(
        (error) => {
            res.send(error)

        }
    )

})



userRouter.post("/login", async (req, res) => {
    const result = new userController().login(req.body)
    result.then(
        (sucess) => {
            res.send(sucess)

        }
    ).catch(
        (error) => {
            res.send(error)

        }
    )

})

//User read

userRouter.get("/:id?", async (req, res) => {
    const result = new userController().get(req.params.id)
    result.then(
        (sucess) => {
            res.send(sucess)

        }
    ).catch(
        (error) => {
            res.send(error)

        }
    )

})



module.exports = userRouter

