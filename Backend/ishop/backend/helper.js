require('dotenv').config()
const Cryptr = require('cryptr');
const cryptr = new Cryptr(process.env.SECRET_KET);
var jwt = require('jsonwebtoken');

const generateUniqueImageName = (image) => {
    return Math.floor(Math.random() * 10000) + new Date().getTime() + image
}

const encrypted = (password) => cryptr.encrypt(password);
const decrypted = (password) => cryptr.decrypt(password);

//create token
const generateToken = (data) => {
    return jwt.sign(data, process.env.SECRET_KET)
}

const verifyToken = (token) => {
    return jwt.verify(token, process.env.SECRET_KET)
}




module.exports = { generateUniqueImageName, encrypted, decrypted ,generateToken,verifyToken} 