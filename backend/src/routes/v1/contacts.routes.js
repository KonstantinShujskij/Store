const {Router} = require('express')

const trappiner = require('../../utils/trappiner.utils')

const { auth, isAdmin } = require('../../middleware/auth.middleware')
const { create } = require('../../validators/contacts.validator.js')

const Contacts = require('../../controllers/Contacts.controller.js')
const Format = require('../../formats/contacts.format.js')


const router = Router()


router.post('/create', auth, isAdmin, create, trappiner(async (req, res) => {  
    const { title, link } = req.body 

    const contacts = await Contacts.create(title, link)

    res.status(201).json(Format.client(contacts))
})) 

router.post('/remove', auth, isAdmin, trappiner(async (req, res) => {     
    const { ids } = req.body

    await Contacts.remove(ids)

    res.status(200).json(true)
})) 

router.post('/list', trappiner(async (req, res) => {   
    const list = await Contacts.list()

    res.status(200).json(list.map((item) => Format.client(item)))
})) 

module.exports = router