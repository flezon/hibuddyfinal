const { Router } = require('express')
const router = Router()

const ordersCtrl = require('../controllers/orders.js')

router.get('/', ordersCtrl.getOrders)

router.post('/', ordersCtrl.createOrders)

router.get('/:id', ordersCtrl.getOrder)

router.put('/:id', ordersCtrl.editOrders)

router.delete('/:id', ordersCtrl.deleteOrders)

module.exports = router