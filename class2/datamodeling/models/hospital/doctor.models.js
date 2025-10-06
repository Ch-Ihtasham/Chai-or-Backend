import mongoose, { Mongoose } from "mongoose";

const doctorSchema = new mongoose.Schema(
    {
        name: {
            type: String,
            required: true,
        },
        specialization: {
            type: String,
            required: true,
        },
        salary: {
            type: Number,
            required: true,
        },
        phoneNo: {
            type: String,
            required: true,
        },
        shift: [
            {
                _id: {
                    type: mongoose.Schema.Types.ObjectId,
                    auto: true
                },
                shiftNumber: {
                    type: Number,
                    required: true,
                },
                type: {
                    type: String,
                    enum: ['Morning', 'Evening', 'Night'],
                    required: true,
                },
                startTime: {
                    type: String,
                    required: true,
                },
                endTime: {
                    type: String,
                    required: true,
                },
                days: {
                    type: [String],
                    enum: ['Mon', 'Tue', 'Wed', 'Thur', 'Fri', 'Sat', 'Sun'],
                    required: true,
                }

            }
        ],
        offDays: {
            type: [String],
            enum: ['Mon', 'Tue', 'Wed', 'Thur', 'Fri', 'Sat', 'Sun'],
            required: true,
        }

    }, { timestamps: true })

export const Doctor = mongoose.model('Doctor', doctorSchema)