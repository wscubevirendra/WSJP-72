const express = require("express");
const productRouter = express.Router();
const fileUpload = require("express-fileupload");
const ProductController = require("../controller/ProductController")

productRouter.get("/:id?", (req, res) => {
    // console.log(req.query)
    const result = new ProductController().get(req.params.id,req.query)
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


productRouter.post("/create", fileUpload({ createParentPath: true }), (req, res) => {
    const result = new ProductController().create(req.body, req.files.thumbnail)
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


productRouter.patch("/status", (req, res) => {
    const result = new ProductController().status(req.body.id, req.body.flag)
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

productRouter.post("/:id", fileUpload({ createParentPath: true }),(req, res) => {
    const result = new ProductController().multipleImage(req.params.id, req.files.image)
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


module.exports = productRouter