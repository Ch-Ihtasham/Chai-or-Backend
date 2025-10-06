import mongoose from 'mongoose'

// 1. first method for data modeling 

// const userSchema = new mongoose.Schema(
//     {
//         username: String,
//         email: String,
//         isActive: Boolean
//     }
// )

// 2. Second method for modeling 

const userSchema = mongoose.Schema(
    {
        username: {
            type: String,
            unique: true,
            required: true,
            lowercase: true,
        },
        email: {
            type: String,
            unique: true,
            required: true,
            lowercase: true,
        },
        password: {
            type: true,
            required: [true, 'Password is requrie'],
            minlength: [8, 'Password length must be Eight'],

        }
    }, { timestamps: true }
)

export const User = mongoose.model('User', userSchema)