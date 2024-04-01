const Product = require('../models/Product.model')

const errors = require('../const/errors')


async function create(title, desc, price, category, collection) {
    const product = new Product({ title, desc, price, category, collection })
    await product.save()

    return product
}

async function list() {
    const products = await Product.find()

    return products
}

module.exports = { 
    create,
    list
}