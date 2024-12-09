const Order = require('../models/Order.model')

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

async function list(client) {
    const orders = await Order.find({ client })

    return orders
}

module.exports = { 
    create,
    pay,
    get,
    list
}