const express = require('express');
const mongoose = require("mongoose")
const cors = require("cors")
const categoryRouter = require("./router/CategoryRouter")
const server = express();
server.use(express.json())
server.use(cors({
    origin: ["http://localhost:5173"]
}))


server.use("/category", categoryRouter)



mongoose.connect("mongodb://localhost:27017", {
    dbName: "ishop"
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


