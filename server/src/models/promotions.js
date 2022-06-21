const { Schema, model } = require('mongoose')
const { ObjectId } = Schema.Types

const promotionSchema = new Schema({
    products: [{ type: ObjectId, ref: 'Products', default: [] }],
    cost: {type: Number, required: true}
}, {
    timestamps: true,
    versionKey: false
})

module.exports = model('Promotion',promotionSchema);