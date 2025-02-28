const UserModel = require("../models/UserModel")

class userController {
    create(data) {
        return new Promise(
            (resolve, reject) => {
                try {

                    const user = new UserModel({
                        name: data.name,
                        email: data.email,
                        password: data.password,
                        contact: data.contact
                    })



                    user.save().then(
                        () => {
                            resolve({
                                msg: "User created",
                                status: 1
                            })
                        }
                    ).catch(
                        (err) => {

                            reject({
                                msg: "Unable to create user",
                                status: 0,
                                errmsg: err.errmsg
                            })

                        }
                    )

                } catch (error) {
                    reject(
                        {
                            msg: "Internal Server Error",
                            status: 0
                        }
                    )

                }
            }
        )

    }
    login(data) {
        return new Promise(
            async (resolve, reject) => {
                try {
                    const userExist = await UserModel.findOne({ email: data.email });
                    if (userExist) {
                        if (userExist.password == data.password) {
                            resolve(
                                {
                                    msg: "Login succesfully",
                                    status: 1
                                }
                            )
                        } else {
                            reject(
                                {
                                    msg: "Wrong Password",
                                    status: 0
                                }
                            )
                        }

                    } else {
                        resolve(
                            {
                                msg: "unable to find this email",
                                status: 0
                            }
                        )
                    }

                } catch (error) {
                    res.send(
                        {
                            msg: "Internal Server Error",
                            status: 0
                        }
                    )

                }
            }
        )

    }
    get(userId) {
        return new Promise(
            async (resolve, reject) => {
                try {

                    let user;
                    if (userId) {
                        user = await UserModel.findById(userId)
                    } else {
                        user = await UserModel.find();
                    }

                    resolve(
                        {
                            msg: Array.isArray(user) ? user.length + " User Found" : 1 + " User Found",
                            status: 1,
                            users: user
                        }
                    )

                } catch (error) {
                    reject(
                        {
                            msg: "Internal Server Error",
                            status: 0

                        })

                }
            }
        )

    }

    statusUpdate(userId) {
        return new Promise(
            async (resolve, reject) => {
                try {
                    const user = await UserModel.findById(userId);
                    if (user) {
                        UserModel.updateOne(
                            { _id: userId },
                            {
                                $set: {
                                    status: !user.status
                                }
                            }
                        ).then(
                            () => {
                                resolve(
                                    {
                                        msg: "User status update",
                                        status: 1
                                    }
                                )

                            }

                        ).catch(
                            () => {
                                reject(
                                    {
                                        msg: "Unable to update user status ",
                                        status: 0
                                    }
                                )
                            }

                        )

                    }

                } catch (error) {
                    reject(
                        {
                            msg: "Internal Server Error",
                            status: 0

                        })
                }
            }
        )

    }

    update() {

    }

    delete() {

    }
}

module.exports = userController