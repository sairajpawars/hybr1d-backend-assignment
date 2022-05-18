const mongoose = require('mongoose')

const Schema = mongoose.Schema
const orderSchema = new Schema({
    userId: {
        type: Schema.Types.ObjectId,
        ref: 'User',
        required: true
    },
    sellerId: {
        type: Schema.Types.ObjectId,
        ref: 'User',
        required: true,
        index: true,
    },
    products: [{
        type: Schema.Types.ObjectId,
        ref: 'Product'
    }]
}, {
    timestamps: true,
    toJSON: {
        transform(doc, ret) {
            ret.id = ret._id;
            delete ret._id;
            delete ret.__v
        },
    }
})
const Order = mongoose.model('Order', orderSchema)
module.exports = Order