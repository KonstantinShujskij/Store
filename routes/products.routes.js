const {Router} = require('express')

const trappiner = require('../utils/trappiner.utils')

const { auth, isAdmin } = require('../middleware/auth.middleware')
const { create, validateProp, validateMaterial } = require('../Validators/product.validator')
const file = require('../middleware/file.middleware')

const Product = require('../controllers/Product.controller')
const Format = require('../formats/product.format')

const router = Router()

//create,
router.post('/create', auth, isAdmin, 
    file.array('photos', 6), 
    trappiner(async (req, res) => {   
        const { title, desc, price, prop, materials, category, collection } = req.body

        const materialsData = validateMaterial(JSON.parse(materials))
        const properties = validateProp(JSON.parse(prop))

        const photos = req.files.map((file) => file.filename)

        const product = await Product.create(title, desc, price, photos, properties, materialsData, category, collection)

        res.status(201).json(Format.admin(product))
    })
) 

//create,
router.post('/update', auth, isAdmin, 
    file.array('photos', 6), 
    trappiner(async (req, res) => {   
        const { id, title, desc, price, prop, materials, category, collection, existPhotos } = req.body

        const materialsData = validateMaterial(JSON.parse(materials))
        const properties = validateProp(JSON.parse(prop))

        const photos = req.files.map((file) => file.filename)

        const product = await Product.update(id, title, desc, price, photos, existPhotos, properties, materialsData, category, collection)

        res.status(201).json(Format.admin(product))
    })
) 

router.post('/list', trappiner(async (req, res) => {     
    const { filter } = req.body

    const list = await Product.list(filter)

    res.status(200).json(list.map(Format.client))
})) 

router.post('/get', trappiner(async (req, res) => {     
    const { id } = req.body

    const product = await Product.get(id)

    res.status(200).json(Format.admin(product))
})) 

router.post('/remove', auth, isAdmin, trappiner(async (req, res) => {     
    const { id } = req.body
    
    await Product.remove(id)

    res.status(200).json(true)
})) 


module.exports = router