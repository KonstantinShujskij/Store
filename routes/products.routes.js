const {Router} = require('express')
const {check} = require('express-validator')

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

router.post('/get', trappiner(async (req, res) => {     
    const { id } = req.body

    const product = await Product.get(id)

    res.status(200).json(product)
})) 

router.post('/create', 
    [
        check('prop', 'incorectValue').optional().isArray(),
        check('prop.*.title', 'incorectValue').isString(),
        check('prop.*.min', 'incorectValue').isFloat({ min: 0, max: 10000 }),
        check('prop.*.max', 'incorectValue').isFloat({ min: 0, max: 10000 }),
        check('colors', 'incorectValue').optional().isArray(),
        check('colors.*.value', 'incorectValue').isHexColor(),
        check('colors.*.styles', 'incorectValue').optional().isArray(),
        check('colors.*.styles.*', 'incorectValue').isHexColor()
    ],
    trappiner(async (req, res) => {   
        const { title, desc, price, category, collection, prop, colors } = req.body

        const parametrs = prop.map((item) => ({ title: item.title, min: item.min, max: item.max }))
        const colorSchema = colors.map((item) => ({ main: item.value, styles: item.styles }))

        const product = await Product.create(title, desc, price, category, collection, parametrs, colorSchema)

        res.status(201).json(product)
    })
) 


module.exports = router