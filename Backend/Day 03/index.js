const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const server = express();
const userRouter = require("./routers/userRouter")
server.use(express.json());
server.use(cors({
    origin: ["http://localhost:5173", "https://www.wscubetech.com"]
}))

server.use("/user", userRouter)




mongoose.connect("mongodb://localhost:27017/",
    { dbName: "wsjp72" }
).then(
    () => {
        console.log("DataBase connected");
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
