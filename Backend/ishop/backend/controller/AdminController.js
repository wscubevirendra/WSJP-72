const { encrypted, decrypted, generateToken } = require("../helper");
const AdminModel = require("../model/AdminModel")

class AdminController {
    register(data) {
        return new Promise(
            async (resolve, reject) => {
                try {
                    const adminCheck = await AdminModel.findOne({
                        $or: [{ email: data.email, contact: data.contact }]
                    });
                    if (adminCheck) {
                        reject(
                            {
                                msg: "Try with diffrence email id",
                                status: 0
                            }
                        )

                    } else {
                        const admin = new AdminModel(
                            {
                                name: data.name,
                                email: data.email,
                                contact: data.contact,
                                password: encrypted(data.password)
                            }
                        )


                        admin.save().then(
                            () => {
                                resolve(
                                    {
                                        msg: "Admin create",
                                        status: 1

                                    }
                                )

                            }
                        ).catch(
                            () => {
                                reject(
                                    {
                                        msg: "Unable to creat admin",
                                        status: 0

                                    }
                                )

                            }
                        )

                    }
                }
                catch (error) {
                    console.log(error)
                    reject({
                        msg: "Internal server error",
                        status: 0
                    })

                }

            }
        )

    }

    login(data) {
        return new Promise(
            async (resolve, reject) => {
                try {
                    const admin = await AdminModel.findOne({ email: data.email });
                    if (admin) {
                        if (data.password == decrypted(admin.password)) {
                            resolve(
                                {
                                    msg: "Login succesfully",
                                    status: 1,
                                    admin: { ...admin.toJSON(), password: null },
                                    token: generateToken(admin.toJSON())
                                }
                            )

                        } else {
                            reject(
                                {
                                    msg: "Incorrect passowrd",
                                    status: 0
                                }
                            )
                        }

                    } else {
                        reject(
                            {
                                msg: "Account not exist",
                                status: 0
                            }
                        )

                    }
                }
                catch (error) {
                    console.log(error)
                    reject({
                        msg: "Internal server error",
                        status: 0
                    })

                }

            }
        )
    }

}

module.exports = AdminController