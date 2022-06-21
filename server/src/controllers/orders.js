const OrdersCtrl = {}

const Order = require('../models/orders')

OrdersCtrl.getOrders = async (req, res) => {
    const orders = await Order.find()
    res.json(orders)
}
OrdersCtrl.createOrders = async (req, res) => {
    const newOrder = new Order(req.body)
    await newOrder.save()
    res.send({message: 'Order created'})
}
OrdersCtrl.getOrder = async (req, res) => {
    const order = await Order.findById(req.params.id)
    res.send(order)
}
OrdersCtrl.editOrders = async (req, res) => {
    await Order.findByIdAndUpdate(req.params.id, req.body)
    res.json({status: 'Order update'})
}
OrdersCtrl.deleteOrders = async (req, res) => {
    await Order.findByIdAndDelete(req.params.id)
    res.json({status: 'Order deleted'})
}

module.exports = OrdersCtrl;