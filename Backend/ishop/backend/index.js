const express = require('express');
const mongoose = require("mongoose");
const cors = require("cors")
const categoryRouter = require("./router/CategoryRouter");
const ColorRouter = require('./router/ColorRouter');
const productRouter = require('./router/ProductRouter');
const server = express();
server.use(express.json())
server.use(express.static("public"))
server.use(cors({
    origin: ["http://localhost:5173"]
}))


server.use("/category", categoryRouter);
server.use("/color", ColorRouter);
server.use("/product", productRouter);



mongoose.connect("mongodb://localhost:27017/", {
    dbName: "ishop_72"
}).then(
    () => {
        console.log("DataBase connected")
        server.listen(
            5000,
            () => {
                console.log("Server started")
            }

        )

    }
).catch(
    () => {
        console.log("Unable to connect dataBase")

    }
)


