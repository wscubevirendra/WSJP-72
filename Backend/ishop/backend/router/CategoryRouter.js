const express = require("express");
const categoryRouter = express.Router();
const CategoryController = require("../controller/CategoryController")


categoryRouter.post("/create", (req, res) => {
    const result = new CategoryController().create(req.body);
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

categoryRouter.get("/:id?", (req, res) => {
    const result = new CategoryController().get(req.params.id);
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

categoryRouter.patch("/status/:id", (req, res) => {
    const result = new CategoryController().status(req.params.id);
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



module.exports = categoryRouter