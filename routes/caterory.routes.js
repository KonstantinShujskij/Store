const {Router} = require('express')

const trappiner = require('../utils/trappiner.utils')

const { auth, isAdmin } = require('../middleware/auth.middleware')
const { create } = require('../Validators/category.validator')

const Category = require('../controllers/Category.controller')
const Format = require('../formats/category.format')


const router = Router()


router.post('/create', auth, isAdmin, create, trappiner(async (req, res) => {     
    const { title } = req.body

    const category = await Category.create(title)

    res.status(201).json(Format.client(category))
})) 

router.post('/remove', auth, isAdmin, trappiner(async (req, res) => {     
    const { ids } = req.body

    await Category.remove(ids)

    res.status(200).json(true)
})) 

router.post('/list', trappiner(async (req, res) => {   
    const list = await Category.list()

    res.status(200).json(list.map((item) => Format.client(item)))
})) 

module.exports = router