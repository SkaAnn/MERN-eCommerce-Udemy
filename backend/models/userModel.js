import mongoose from 'mongoose'
import bcrypt from 'bcryptjs'

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

userSchema.methods.matchPassword = async function(enteredPassword){
    return await bcrypt.compare(enteredPassword, this.password)
}

// Hashing middleware
// pred ulozenim zasifruj password
// vykona sa ked zavolame create
userSchema.pre('save', async function(next){
    if (!this.isModified('password')){
        next()
    }
    const salt = await bcrypt.genSalt(10)
    this.password = await bcrypt.hash(this.password, salt)
})

const User = mongoose.model('User', userSchema)

export default User
