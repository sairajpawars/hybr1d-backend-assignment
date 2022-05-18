const mongoose = require('mongoose')

const Schema = mongoose.Schema
const catalogSchema = new Schema({
    userId: {
        type: Schema.Types.ObjectId,
        ref: 'User',
        index: true
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
const Catalog = mongoose.model('Catalog', catalogSchema)
module.exports = Catalog