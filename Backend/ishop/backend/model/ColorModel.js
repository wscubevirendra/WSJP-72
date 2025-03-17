const mongoose = require('mongoose')
const ColorSchema = new mongoose.Schema({
    colorName: {
        type: String,
        required: true,
        unique: true
    },
    colorCode: {
        type: String,
        required: true,
        unique: true
    },

    status: {
        type: Boolean,
        default: true
    }
}, {
    timestamps: true
}
)


const ColorModel = mongoose.model("Colors", ColorSchema)
module.exports = ColorModel