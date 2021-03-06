const { Schema, model } = require('mongoose')

const productSchema = new Schema({
    name: {type: String, required: true},
    price: {type: Number, required: true},
    stock: {type: Number, required: true},
    entry: {type: Number},
    exit: {type: Number}
})

module.exports = model('Products',productSchema);