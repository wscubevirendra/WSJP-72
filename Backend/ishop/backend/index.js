require('dotenv').config()
const express = require('express');
const mongoose = require("mongoose");
const cors = require("cors")
const categoryRouter = require("./router/CategoryRouter");
const ColorRouter = require('./router/ColorRouter');
const productRouter = require('./router/ProductRouter');
const AdminRouter = require('./router/AdminRouter');
const UserRouter = require('./router/UserRouter');
const OrderRouter = require('./router/OrderRouter');
const server = express();
server.use(express.json())
server.use(express.static("public"))
server.use(cors())


server.use("/category", categoryRouter);
server.use("/color", ColorRouter);
server.use("/product", productRouter);
server.use("/admin", AdminRouter);
server.use("/user", UserRouter);
server.use("/order", OrderRouter);



mongoose.connect(process.env.MONGODB_URL, {
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


