const {Router} = require('express')

const trappiner = require('../utils/trappiner.utils')
const consts = require('../const/consts')
const errors = require('../const/errors')

const Collection = require('../controllers/collection.controller')

const router = Router()


router.post('/categories', trappiner(async (req, res) => {     
    res.status(200).json(consts.categories)
})) 

router.post('/collections', trappiner(async (req, res) => {     
    const list = await Collection.list()

    res.status(200).json(list)
})) 

router.post('/create-collection', trappiner(async (req, res) => {     
    const { title } = req.body

    const collection = await Collection.create(title)

    res.status(201).json(collection)
})) 

module.exports = router