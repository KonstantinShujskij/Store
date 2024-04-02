const {Router} = require('express')

const trappiner = require('../utils/trappiner.utils')

const Category = require('../controllers/Category.controller')
const Collection = require('../controllers/collection.controller')
const Product = require('../controllers/Product.controller')


const router = Router()


router.post('/create-collection', trappiner(async (req, res) => {     
    const { title } = req.body

    await Collection.create(title)

    res.status(201).json(true)
})) 

router.post('/create-category', trappiner(async (req, res) => {     
    const { title } = req.body

    await Category.create(title)

    res.status(201).json(true)
})) 

router.post('/categories', trappiner(async (req, res) => {   
    const list = await Category.list()

    res.status(200).json(list)
})) 

router.post('/collections', trappiner(async (req, res) => {     
    const list = await Collection.list()

    res.status(200).json(list)
})) 

router.post('/products', trappiner(async (req, res) => {     
    const { filter } = req.body

    const list = await Product.list(filter)

    res.status(200).json(list)
})) 

router.post('/create', trappiner(async (req, res) => {   
    const { title, desc, price, category, collection } = req.body
  
    const product = await Product.create(title, desc, price, category, collection)

    res.status(201).json(product)
})) 


module.exports = router