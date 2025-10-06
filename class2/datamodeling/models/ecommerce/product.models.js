import mongoose from "mongoose";

const productSchema = new mongoose.Schema(
    {
        name: {
            type: String,
            requried: true,
        },
        descreption: {
            type: String,
            requried: true,
        },
        productImage: {
            type: String,
            requried: true
        },
        price: {
            type: Number,
            default: 0
        },
        stock: {
            type: Number,
            default: 0
        },
        category: {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'Category',
            requried: true
        },
        owner: {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'User',
        }

    }, { timestamps: true })

export const Product = mongoose.model('Product', productSchema)