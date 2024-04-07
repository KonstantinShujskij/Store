const Order = require('../models/Order.model')

const Product = require('./Product.controller')
const Category = require('./Category.controller')
const Collection = require('./Collection.controller')

const Filter = require('../utils/filter.utils')

const errors = require('../const/errors')


async function create(client, products, delivery, contacts) {
    let totalPrice = 0
    for(let i = 0; i < products.length; i++) { 
        const product = products[i]
        const price = await Product.validate(product)

        totalPrice += price
    }

    const order = new Order({ client, products, delivery, contacts, price: totalPrice })
    await order.save()

    return order
}

async function get(_id) {
    const order = await Order.findOne({_id})
    if(!order) { throw errors.notFind }

    return order
}

async function list(filter) {
    const options = {...Filter.client(filter)}
    const orders = await Order.find(options)

    return orders
}

module.exports = { 
    create,
    get,
    list
}