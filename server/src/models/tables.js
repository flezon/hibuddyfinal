const { Schema, model } = require('mongoose')

const tableSchema = new Schema({
    number: {type: Number, required: true},
    order: {type: String, required: true},
    bill: {type: Number, required: true}
}, {
    timestamps: true,
    versionKey: false
})

module.exports = model('tableSchema',tableSchema);