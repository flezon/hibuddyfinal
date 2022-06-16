const productsCtrl = {}

const Product = require('../models/products')

productsCtrl.getProducts = async (req, res) => {
    const products = await Product.find()
    res.json(products)
}
productsCtrl.createProducts = async (req, res) => {
    const newProduct = new Product(req.body)
    await newProduct.save()
    res.send({message: 'Product created'})
}
productsCtrl.getProduct = async (req, res) => {
    const product = await Product.findById(req.params.id)
    res.send(product)
}
productsCtrl.editProducts = async (req, res) => {
    await Product.findByIdAndUpdate(req.params.id, req.body)
    res.json({status: 'Product update'})
}
productsCtrl.deleteProducts = async (req, res) => {
    await Product.findByIdAndDelete(req.params.id)
    res.json({status: 'Product deleted'})
}

module.exports = productsCtrl;