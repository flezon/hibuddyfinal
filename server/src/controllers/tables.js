const tablesCtrl = {}

const Tables = require('../models/tables')

tablesCtrl.getTables = async (req, res) => {
    const tables = await Tables.find()
    res.json(tables)
}
tablesCtrl.createTables = async (req, res) => {
    const newTable = new Tables(req.body)
    await newTable.save()
    res.send({message: 'Table created'})
}
tablesCtrl.getTable = async (req, res) => {
    const table = await Tables.findById(req.params.id)
    res.send(table)
}
tablesCtrl.editTables = async (req, res) => {
    await Tables.findByIdAndUpdate(req.params.id, req.body)
    res.json({status: 'Tables update'})
}
tablesCtrl.deleteTables = async (req, res) => {
    await Tables.findByIdAndDelete(req.params.id)
    res.json({status: 'Tables deleted'})
}

module.exports = tablesCtrl;