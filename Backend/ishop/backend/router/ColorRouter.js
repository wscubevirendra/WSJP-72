const express = require("express");
const ColorController = require("../controller/ColorController");
const ColorRouter = express.Router();

ColorRouter.post(
    "/create",
    (req, res) => {
        const result = new ColorController().create(req.body);
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

ColorRouter.get(
    "/:id?",
    (req, res) => {
        const result = new ColorController().get(req.params.id);
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

// categoryRouter.patch("/status/:id", (req, res) => {
//     const result = new CategoryController().status(req.params.id);
//     result.then(
//         (response) => {
//             res.send(response)
//         }
//     ).catch(
//         (error) => {
//             res.send(error)

//         }
//     )
// })

// categoryRouter.delete(
//     "/delete/:id", // localhost:5000/category/delete/:id
//     (req, res) => {
//         const result = new CategoryController().delete(req.params.id);
//         result.then(
//             (response) => {
//                 res.send(response)
//             }
//         ).catch(
//             (error) => {
//                 res.send(error)
//             }
//         )
//     }
// )

// categoryRouter.put(
//     "/update/:id",
//     fileUpload(
//         {
//             createParentPath: true
//         }
//     ),
//     (req, res) => {
//         const result = new CategoryController().update(req.body, req.params.id, req.files?.categoryImage ?? null);
//         result.then(
//             (response) => {
//                 res.send(response)
//             }
//         ).catch(
//             (error) => {
//                 res.send(error)
//             }
//         )
//     }
// )





module.exports = ColorRouter