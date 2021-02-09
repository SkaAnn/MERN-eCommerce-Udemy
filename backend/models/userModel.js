import mongoose from 'mongoose'

// Create User schema
const userSchema = mongoose.Schema({
    // Fields for user
    name: {
        type: String,
        required: true,
    },
    email: {
        type: String,
        required: true,
        unique: true,
    },
    password: {
        type: String,
        required: true,
    },
    isAdmin: {
        type: Boolean,
        required: true,
        default: false,
    },

}, { timestamps: true} )

const User = mongoose.model('User', userSchema)

export default User
