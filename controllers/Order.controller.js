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

async function listAll(page, limit, sort, filter) {    
    const skip = (page - 1) * limit   

    return {
        list: await Order.find(filter).sort(sort).skip(skip).limit(limit),
        count: await Order.countDocuments(filter)
    }
}

async function next(id) {
    const order = await get(id)

    if(order.status === 'CREATE') { throw errors.notFind }
    else if(order.status === 'PAID') { order.status = 'WORK' }
    else if(order.status === 'WORK') { order.status = 'SEND' }
    else if(order.status === 'SEND') { order.status = 'DONE' }
    else if(order.status === 'DONE') { throw errors.notFind }
    else if(order.status === 'CANCEL') { throw errors.notFind }
    else { throw errors.notFind }
    
    return await order.save()
}

async function setStatus(id, status) {
    const order = await get(id)

    order.status = status

    return await order.save()
}

async function setTTH(id, tth) {
    const order = await get(id)

    order.delivery.tth = tth

    return await order.save()
}

module.exports = { 
    create,
    pay,
    get,
    list,
    listAll,
    setStatus,
    setTTH,
    next
}