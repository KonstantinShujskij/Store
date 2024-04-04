const Product = require('../models/Product.model')
const Category = require('./Category.controller')
const Collection = require('./Collection.controller')

const Filter = require('../utils/filter.utils')

const errors = require('../const/errors')


async function create(title, desc, price, categoryId, collectionId, parametrs, colorSchema) {
    const category = await Category.get(categoryId)
    const collection = await Collection.get(collectionId)

    const product = new Product({ 
        title, 
        desc, 
        price, 
        category: category._id,
        categoryTitle: category.title,
        collection: collection._id,
        collectionTitle: collection.title,
        parametrs,
        colorSchema
    })

    await product.save()

    return product
}

async function list(filter) {
    const options = {...Filter.client(filter)}
    const products = await Product.find(options)

    return products
}

module.exports = { 
    create,
    list
}