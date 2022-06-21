const tablesCtrl = {}

const Tables = require('../models/tables')
const Orders = require('../models/orders')

tablesCtrl.getTables = async (req, res) => {
    const tables = await Tables.find()
    res.json(tables)
}
tablesCtrl.createTables = async (req, res) => {
    const newTable = new Tables(req.body)
    await newTable.save()
    res.send({message: 'Table created'})
}
tablesCtrl.createNewOrder = async (req, res) => {
    const c = req.body
    const q = await Tables.findById(req.params.id)
    const orders = new Orders(c)
    console.log(c)
    console.log(q)
    const savedOrder = await orders.save()
    console.log("/////////////")
    console.log(savedOrder)
    console.log("/////////////")
    console.log(q.orders)
    q.orders.push(savedOrder)
    await q.save()
    res.send({message: 'Table created'})
}
tablesCtrl.getTable = async (req, res) => {
    const table = await Tables.findById(req.params.id)
    res.send(table)
}
tablesCtrl.getNewOrder = async (req, res) => {
    const q = await Orders.findById(req.params.id)
    res.send(q)
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