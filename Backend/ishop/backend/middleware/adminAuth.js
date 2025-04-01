const { verifyToken } = require("../helper");

const adminAuth = (req, res, next) => {
    const token = req?.headers?.authorization;
    if (token) {
        if (verifyToken(token)) {
            next();

        } else {
            res.send(
                {
                    msg: "Invalid token",
                    status: 0
                }
            )

        }

    } else {
        res.send(
            {
                msg: "token required ",
                status: 0
            }
        )
    }

}

module.exports = adminAuth;