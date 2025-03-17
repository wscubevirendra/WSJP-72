const mongoose = require("mongoose");

const productSchema = new mongoose.Schema(
    {
        name: {
            type: String,
            maxLength: 100,
            unique: true
        },
        slug: {
            type: String,
            maxLength: 200,
            unique: true

        },
        shortDescription: {
            type: String,
        },
        longDescription: {
            type: String,
        },
        originalPrice: {
            type: Number,
            default: 1
        },
        discountPercentage: {
            type: Number,
            default: 0
        },
        finalPrice: {
            type: Number,
            min: 1
        },
        categoryId: {
            type: mongoose.Schema.ObjectId,
            ref: "Category"
        },
        colors: [
            {
                type: mongoose.Schema.ObjectId,
                ref: "Colors"
            }
        ],
        thumbnail: {
            type: String,
            default: null
        },
        images: [
            {
                type: String,
            }
        ],
        stock: {
            type: Boolean,
            default: true
        },
        topSelling: {
            type: Boolean,
            default: false
        },
        status: {
            type: Boolean,
            default: true
        },
    },
    {
        timestamps: true
    }
)

const ProductModel = mongoose.model("product", productSchema);
module.exports = ProductModel