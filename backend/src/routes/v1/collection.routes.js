const {Router} = require('express')

const trappiner = require('../../utils/trappiner.utils')

const { auth, isAdmin } = require('../../middleware/auth.middleware')
const { create } = require('../../validators/collection.validator')

const Collection = require('../../controllers/Collection.controller')
const Format = require('../../formats/collection.format')


const router = Router()

// , auth, isAdmin
router.post('/create', create, trappiner(async (req, res) => {     
    const { title } = req.body

    const collection = await Collection.create(title)

    res.status(201).json(Format.client(collection))
})) 

// , auth, isAdmin
router.post('/remove', trappiner(async (req, res) => {     
    const { ids } = req.body

    await Collection.remove(ids)

    res.status(200).json(true)
})) 

router.post('/list', trappiner(async (req, res) => {   
    const list = await Collection.list()

    res.status(200).json(list.map((item) => Format.client(item)))
})) 


module.exports = router