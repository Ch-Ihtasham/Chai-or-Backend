import mongoose, { Mongoose } from "mongoose";

const patientSchema = new mongoose.Schema(
    {
        name: {
            type: String,
            requried: true,
        },
        disease: {
            type: String,
            requried: true,
        },
        age: {
            type: Number,
            requried: true,
        },
        address: {
            type: String,
            requried: true
        },
        bloodGroup: {
            type: String,
            requried: true
        },
        gender: {
            type: String,
            requried: true,
            enum: ['M', 'F', 'O']
        },
        admitedIn: {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'Hospital'
        }
    }, { timestamps: true })

export const Patient = mongoose.model('Patient', patientSchema)