const { Schema, model } = require('mongoose')

const promotionSchema = new Schema({
    type: {type: Number, required: true},
    products: {type: String, required: true},
    cost: {type: Number, required: true}
}, {
    timestamps: true,
    versionKey: false
})

module.exports = model('promotionSchema',promotionSchema);