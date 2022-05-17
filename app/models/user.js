const mongoose = require('mongoose')

const Schema = mongoose.Schema
const userSchema = new Schema({
    userName: {
        type: String,
        required: true,
        lowercase: true, 
        trim: true,
        unique: true
    },
    password:{
        type: String,
        required: true
    },
    userType: {
        enum: ['buyer','seller'],
        type: String,
        required: true
    }
},{ 
    timestamps: true,
    toJSON: {
        transform(doc, ret) {
            ret.id = ret._id;
            delete ret._id;
            delete ret.__v
        },
    } 
})
const User = mongoose.model('User', userSchema)
module.exports = User