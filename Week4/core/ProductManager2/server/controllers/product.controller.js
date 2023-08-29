const Product = require('../models/product.model');

module.exports.createProduct = (req, res) => {
    Product.create(req.body)
        .then(product => res.json(product))
        .catch(err => response.json(err));
}
module.exports.FindAllProduct = (req, res) => {
    Product.find()
        .then(products => res.json(products))
        .catch(err => response.json(err));
}
module.exports.FindOneProduct = (req, res) => {
    Product.findOne({_id:req.params.id})
        .then(product => res.json(product))
        .catch(err => response.json(err));
}