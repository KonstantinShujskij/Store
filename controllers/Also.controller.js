const Product = require('./Product.controller')
const Also = require('../models/Also.model')

const errors = require('../const/errors')


async function create(productId) {    
    const product = await Product.get(productId)

    const color = product.colors?.length? product.colors[0]?.title : ''
    const design = product.colors?.length && product.colors.design?.length? product.colors[0]?.design[0]?.title : ''
    const photo = product.photos?.length? product.photos[0] : ''

    const also = new Also({ productId, title: product.title, color, design, photo })

    return await also.save()
}

async function update(id, productId) {    
    const product = await Product.get(productId)
    const also = await get(id)

    also.title = title
    also.productId = productId
    also.color = product.colors?.length? product.colors[0]?.title : ''
    also.design = product.colors?.length && product.colors.design?.length? product.colors[0]?.design[0]?.title : ''
    also.photo = product.photos?.length? product.photos[0] : ''

    return await also.save()
}

async function get(_id) {
    const also = await Also.findOne({_id})
    if(!also) { throw errors.notFind }

    return also
}

async function list(count) {
    return await Also.find().limit(count)
}

module.exports = { 
    create,
    update,
    get,
    list
}