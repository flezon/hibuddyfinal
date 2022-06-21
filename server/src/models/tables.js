const { Schema, model } = require('mongoose')
const { ObjectId } = Schema.Types

const tableSchema = Schema({
    number: {type: Number, required: true},
    orders: [{ type: ObjectId, ref: 'Orders', default: [] }],
    bill : { type: Number},
    state: {type: Boolean}
})

module.exports = model('Table',tableSchema);