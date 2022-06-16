const { Router } = require('express')
const router = Router()

const productsCtrl = require('../controllers/products.js')

router.get('/', productsCtrl.getProducts)

router.post('/', productsCtrl.createProducts)

router.get('/:id', productsCtrl.getProduct)

router.put('/:id', productsCtrl.editProducts)

router.delete('/:id', productsCtrl.deleteProducts)

module.exports = router