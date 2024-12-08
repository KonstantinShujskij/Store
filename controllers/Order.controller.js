const Order = require('../models/Order.model')

const Product = require('./Product.controller')
const Category = require('./Category.controller')
const Collection = require('./Collection.controller')

const Filter = require('../utils/filter.utils')

const errors = require('../const/errors')


async function create(list, price, delivery, contacts, client=null) {
    const order = new Order({client, delivery, contacts, list, price, count: list.length})

    return await order.save()
}

async function pay(id) {
    const order = await get(id)
    if(order.status !== 'CREATE') { throw errors.notFind }

    order.status = "PAID"

    return await order.save()
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
    pay,
    get,
    list
}