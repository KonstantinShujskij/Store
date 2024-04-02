const Product = require('../models/Product.model')
const Filter = require('../utils/filter.utils')

const errors = require('../const/errors')


async function create(title, desc, price, category, collection) {
    const product = new Product({ title, desc, price, category, collection })
    await product.save()

    return product
}

async function list(filter) {
    const options = {...Filter.client(filter)}
    console.log(options);
    const products = await Product.find(options)
    console.log(products);
    return products
}

module.exports = { 
    create,
    list
}