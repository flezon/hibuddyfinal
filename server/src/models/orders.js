const { Schema, model } = require('mongoose')
const { ObjectId } = Schema.Types

const orderSchema = new Schema({
    products: [{ type: ObjectId, ref: 'Products', default: [] }],
    cost: {type: Number}
})

module.exports = model('Orders',orderSchema);