const Collection = require('../models/Collection.model')

const errors = require('../const/errors')


async function create(title) {
    const collection = new Collection({ title })
    await collection.save()

    return collection
}

async function list() {
    const collections = await Collection.find()

    return collections
}

module.exports = { 
    create,
    list
}