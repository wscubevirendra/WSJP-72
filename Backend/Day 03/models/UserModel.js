const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
        maxLength: 100
    },
    email: {
        type: String,
        required: true,
        unique: true
    },
    password: {
        type: String,
        required: true,
        minLength: 6
    },
    contact: {
        type: String,
        default: null
    },
    status: {
        type: Boolean,
        default: true  //true-Activated  false-\Deactivated
    }

})

const UserModel = mongoose.model("User", userSchema);

module.exports = UserModel
