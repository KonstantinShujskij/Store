const Order = require('../models/Order.model')

const errors = require('../const/errors')
const { createMonoInvoice } = require('../utils/mono')


async function create(list, price, delivery, contacts, client=null) {    
    const order = new Order({client, delivery, contacts, list, price, count: list.length})

    return await order.save()
}

async function pay(id) {
    const order = await get(id)
    if(order.status !== 'CREATE') { throw errors.notFind }

    const invoice = await createMonoInvoice(id, order.price)
    if(invoice) {
        order.invoiceId = invoice.invoiceId
        order.pageUrl = invoice.pageUrl

        return await order.save()
    }

    return order
}

async function webhook(id, invoiceId, status) {
    console.log(id, invoiceId, status);
    
    const order = await get(id)
    if(order.status !== 'CREATE') { return }
    if(order.invoiceId !== invoiceId) { return }

    //created processing success failed expired
    order.invoiceStatus = status
    if(status === 'success') { 
        order.status = 'PAID'
        order.paid = true
    }

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
    next,
    webhook
}