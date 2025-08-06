const Collection = require('../models/Collection.model')

const errors = require('../const/errors')


async function create(title) {
    const collection = new Collection({ title })
    await collection.save()

    return collection
}

async function remove(ids) {
    await Collection.deleteMany({ _id: {$in: ids} })

    return true
}

async function get(_id) {
    const collection = await Collection.findOne({_id})
    if(!collection) { throw errors.notFind }

    return collection
}

async function list() {
    const collections = await Collection.find()

    return collections
}

module.exports = { 
    create,
    remove, 
    get,
    list
}