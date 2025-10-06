import mongoose from "mongoose";

const userSchema = new mongoose.Schema(
    {
        username: {
            type: String,
            unique: true,
            lowecase: true,
            requried: true
        },
        email: {
            type: String,
            unique: true,
            lowecase: true,
            requried: true
        },
        password: {
            type: String,
            unique: true,
            lowecase: true,
            requried: true
        }
    }, { timestamps: true })

export const User = mongoose.model('User', userSchema)