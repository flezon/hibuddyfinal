const { Schema, model } = require('mongoose')

const productSchema = new Schema({
    name: {type: String, required: true},
    price: {type: Number, required: true},
    stock: {type: Number, required: true},
    entry: {type: Number, required: true},
    exit: {type: Number, required: true}
}, {
    timestamps: true,
    versionKey: false
})

module.exports = model('productSchema',productSchema);