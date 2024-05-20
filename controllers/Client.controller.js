const bcrypt = require('bcrypt')

const Client = require('../models/Client.model')

const errors = require('../const/errors')


async function signup(email, password, {name, surname}) {
    const candidate = await Client.findOne({ email })
    if(candidate) { throw errors.isExist }

    const hashedPassword = await bcrypt.hash(password, 12)
    const user = new Client({ email, password: hashedPassword, name, surname })
    await user.save()

    return user
}

async function login(email, password) {
    const user = await Client.findOne({ email })
    if(!user) { throw errors.notAccess }

    const isMatch = await bcrypt.compare(password, user.password)
    if(!isMatch) { throw errors.notAuth }

    return user
}

async function get(_id) {
    const user = await Client.findOne({ _id })
    if(!user) { throw errors.notFind }

    return user
}

async function changeEmail(id, email) {
    const user = await get(id)

    user.email = email
    await user.save()

    return true
}

async function changePassword(id, password, newPassword) {
    const user = await get(id)

    const isMatch = await bcrypt.compare(password, user.password)
    if(!isMatch) { throw errors.notAuth }

    user.password = await bcrypt.hash(newPassword, 12)
    await user.save()

    return true
}

async function changeInfo(id, {name, surname, phone, instagram, town}) {
    const user = await get(id)

    if(name) { user.name = name }
    if(surname) { user.surname = surname }
    if(phone) { user.phone = phone }
    if(instagram) { user.instagram = instagram }
    if(town) { user.town = town }

    await user.save()

    return true
}


module.exports = { 
    signup,
    login,
    get,
    changeEmail,
    changePassword,
    changeInfo
}