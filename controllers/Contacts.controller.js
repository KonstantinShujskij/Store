const Contacts = require('../models/Contacts.model')

const errors = require('../const/errors')


async function create(title, link) {
    const contacts = new Contacts({ title, link })
    await contacts.save()

    return contacts
}

// async function create(title, link) {
//     const contacts = new Contacts({ title, link })
//     await contacts.save()

//     return contacts
// }

async function remove(ids) {
    await Contacts.deleteMany({ _id: {$in: ids} })

    return true
}

async function get(_id) {
    const contacts = await Contacts.findOne({ _id })
    if(!contacts) { throw errors.notFind }

    return contacts
}

async function list() {
    const contactsList = await Contacts.find()

    return contactsList
}

module.exports = { 
    create,
    remove,
    get,
    list
}