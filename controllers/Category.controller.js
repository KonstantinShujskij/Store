const Category = require('../models/Category.model')

const errors = require('../const/errors')


async function create(title) {
    const category = new Category({ title })
    await category.save()

    return category
}

async function list() {
    const categories = await Category.find()

    return categories
}

module.exports = { 
    create,
    list
}