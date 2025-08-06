const bcrypt = require('bcrypt')

const Admin = require('../models/Admin.model')

const errors = require('../const/errors')


async function signup(email, password) {
    const candidate = await Admin.findOne({ email })
    if(candidate) { throw errors.isExist }

    const hashedPassword = await bcrypt.hash(password, 12)
    const admin = new Admin({ email, password: hashedPassword })
    await admin.save()

    return admin
}

async function login(email, password) {
    const admin = await Admin.findOne({ email })
    if(!admin) { throw errors.notAccess }

    const isMatch = await bcrypt.compare(password, admin.password)
    if(!isMatch) { throw errors.notAuth }

    return admin
}

async function get(_id) {
    const admin = await Admin.findOne({ _id })
    if(!admin) { throw errors.notFind }

    return admin
}


module.exports = { 
    signup,
    login,
    get
}