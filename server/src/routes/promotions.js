const { Router } = require('express')
const router = Router()

const promotionsCtrl = require('../controllers/promotions')

router.get('/', promotionsCtrl.getPromotions)

router.post('/', promotionsCtrl.createPromotions)

router.get('/:id', promotionsCtrl.getPromotion)

router.put('/:id', promotionsCtrl.editPromotions)

router.delete('/:id', promotionsCtrl.deletePromotions)

module.exports = router