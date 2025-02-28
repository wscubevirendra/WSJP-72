const mongoose = require('mongoose')
const CategorySchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
        unique: true
    },
    slug: {
        type: String,
        required: true,
        unique: true
    },
    categoryImage: {
        type: String,
        default: null
    },
    status: {
        type: Boolean,
        default: true

    }
}, {
    timestamps: true
}
)


const CategoryModel = mongoose.model("Category", CategorySchema)
module.exports = CategoryModel