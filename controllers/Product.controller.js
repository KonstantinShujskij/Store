const Product = require('../models/Product.model')

const {removeFile} = require('../utils/file.utils')
const Filter = require('../utils/filter.utils')

const Category = require('./Category.controller')
const Collection = require('./Collection.controller')

const errors = require('../const/errors')


async function create(title, desc, price, photos, prop, materials, colors, categoryId, collectionId) {
    const category = await Category.get(categoryId)
    const collection = await Collection.get(collectionId)

    const product = new Product({ 
        title, 
        desc, 
        price, 
        photos,
        prop,
        materials,
        colors: colors.colors,
        colorsList: colors.list,
        category: category._id,
        categoryTitle: category.title,
        collection: collection._id,
        collectionTitle: collection.title
    })

    await product.save()

    return product
}

async function update(id, title, desc, price, photos, existPhotos, prop, materials, colors, categoryId, collectionId) {    
    const product = await get(id)    

    const category = await Category.get(categoryId)
    const collection = await Collection.get(collectionId)

    const newPhotos = [...photos, ...product.photos.filter((photo) => (existPhotos.includes(photo)))]
    const trashPhotos = product.photos.filter((photo) => (!existPhotos.includes(photo)))
    trashPhotos.forEach((item) => removeFile(`static/images/${item}`))
        
    product.colorsList.forEach((item) => {
        if(colors.list.includes(item)) { return }
        removeFile(`static/images/${item}`)
    })

    product.photos = newPhotos
    product.title = title
    product.desc = desc
    product.price = price
    product.prop = prop
    product.materials = materials
    product.colors = colors.colors,
    product.colorsList = colors.list

    product.category = category._id
    product.categoryTitle = category.title
    product.collection = collection._id
    product.collectionTitle = collection.title

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
        if(value < item.min || value > item.max) { throw errors.incorectValue } // list ??
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

    product.photos.forEach((item) => { removeFile(`static/images/${item}`) })
    product.colorsList.forEach((item) => { removeFile(`static/images/${item}`) })

    await Product.deleteOne(product._id)

    return true
}

async function recomend(size=3) {
    const products = await Product.aggregate([{ $sample: { size } }])
    
    return products
}
    

async function list(filter) {
    try {
        const options = {...Filter.client(filter)}
        console.log(options);
        const products = await Product.find(options)
        console.log(products);
        
        return products
    }
    catch(err) {
        console.log(err);        
    }
}

module.exports = { 
    create,
    validate,
    update,
    remove,
    recomend,
    get,
    list
}