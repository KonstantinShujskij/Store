const Client = require('../models/Client.model')

const errors = require('../const/errors')


async function signup(email, password) {
    const candidate = await Client.findOne({ email })
    if(candidate) { throw errors.isExist }

    const hashedPassword = await bcrypt.hash(password, 12)
    const user = new Client({ email, password: hashedPassword })
    await user.save()

    return user
}

async function login(title) {
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


module.exports = { 
    signup,
    login,
    get
}