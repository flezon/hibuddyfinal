const promotionsCtrl = {}

const Promotions = require('../models/promotions')

promotionsCtrl.getPromotions = async (req, res) => {
    const promotions = await Promotions.find()
    res.json(promotions)
}
promotionsCtrl.createPromotions = async (req, res) => {
    const newPromotion = new Promotions(req.body)
    await newPromotion.save()
    res.send({message: 'Promotion created'})
}
promotionsCtrl.getPromotion = async (req, res) => {
    const promotion = await Promotions.findById(req.params.id)
    res.send(promotion)
}
promotionsCtrl.editPromotions = async (req, res) => {
    await Promotions.findByIdAndUpdate(req.params.id, req.body)
    res.json({status: 'Promotions update'})
}
promotionsCtrl.deletePromotions = async (req, res) => {
    await Promotions.findByIdAndDelete(req.params.id)
    res.json({status: 'Promotions deleted'})
}

module.exports = promotionsCtrl;