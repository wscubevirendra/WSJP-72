const express = require("express");
const categoryRouter = express.Router();
const fileUpload = require("express-fileupload")
const CategoryController = require("../controller/CategoryController")


categoryRouter.post("/create", fileUpload({ createParentPath: true }), (req, res) => {
    const result = new CategoryController().create(req.body, req.files.categoryImage);
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

categoryRouter.delete(
    "/delete/:id", // localhost:5000/category/delete/:id
    (req, res) => {
        const result = new CategoryController().delete(req.params.id);
        result.then(
            (response) => {
                res.send(response)
            }
        ).catch(
            (error) => {
                res.send(error)
            }
        )
    }
)

categoryRouter.put(
    "/update/:id",
    fileUpload(
        {
            createParentPath: true
        }
    ),
    (req, res) => {
        const result = new CategoryController().update(req.body, req.params.id, req.files?.categoryImage ?? null);
        result.then(
            (response) => {
                res.send(response)
            }
        ).catch(
            (error) => {
                res.send(error)
            }
        )
    }
)





module.exports = categoryRouter