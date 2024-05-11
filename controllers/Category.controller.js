const Category = require('../models/Category.model')

const errors = require('../const/errors')
const {Types} = require('mongoose')


async function create(title) {
    const category = new Category({ title })
    await category.save()

    return category
}

async function remove(ids) {
    await Category.deleteMany({ _id: {$in: ids} })

    return true
}

async function get(_id) {
    const category = await Category.findOne({ _id })
    if(!category) { throw errors.notFind }

    return category
}

async function list() {
    const categories = await Category.find()

    return categories
}

module.exports = { 
    create,
    remove,
    get,
    list
}