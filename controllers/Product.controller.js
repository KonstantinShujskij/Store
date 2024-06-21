const Product = require('../models/Product.model')

const Filter = require('../utils/filter.utils')

const errors = require('../const/errors')


async function create(title, desc, price, photos, categoryId, collectionId) {
    // const category = await Category.get(categoryId)
    // const collection = await Collection.get(collectionId)

    const product = new Product({ 
        title, 
        desc, 
        price, 
        photos
        // category: category._id,
        // categoryTitle: category.title,
        // collection: collection._id,
        // collectionTitle: collection.title
    })

    await product.save()

    return product
}

async function update(id, title, desc, price, photos, existPhotos, categoryId, collectionId) {
    const product = await get(id)

    const newPhotos = [...photos, ...product.photos.filter((photo) => (existPhotos.includes(photo)))]
    const trashPhotos = product.photos.filter((photo) => (!existPhotos.includes(photo)))

    // clear photos

    product.photos = newPhotos
    product.title = title
    product.desc = desc
    product.price = price

    await product.save()

    return product
}

async function validate(productData) {
    const product = await get(productData._id)
    
    if(product.title !== productData.title) { throw errors.incorectValue }
    if(product.price !== productData.price) { throw errors.incorectValue }

    let falseColors = true
    product.colorSchema.forEach((item) => {
        if(item.main === productData.mainColor) { 
            if(item.styles.includes(productData.styleColor)) { falseColors = false } 
        }
    })
    if(falseColors) { throw errors.incorectValue } 

    product.parametrs.forEach((item) => {
        const value = parseFloat(productData.parametrs[item.title])

        if(value === undefined) { throw errors.incorectValue }
        if(value < item.min || value > item.max) { throw errors.incorectValue }
    })

    return product.price
}

async function get(_id) {
    const product = await Product.findOne({_id})
    if(!product) { throw errors.notFind }

    return product
}

async function remove(_id) {
    const product = await get(_id)
    await Product.deleteOne(product._id)

    return true
}

async function list(filter) {
    const options = {...Filter.client(filter)}
    const products = await Product.find(options)

    return products
}

module.exports = { 
    create,
    validate,
    update,
    remove,
    get,
    list
}