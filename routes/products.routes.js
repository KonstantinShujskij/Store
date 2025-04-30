const {Router} = require('express')

const trappiner = require('../utils/trappiner.utils')

const { auth, isAdmin } = require('../middleware/auth.middleware')
const { create, validateProp, validateMaterial, validateColors } = require('../Validators/product.validator')
const file = require('../middleware/file.middleware')

const Product = require('../controllers/Product.controller')
const Format = require('../formats/product.format')

const router = Router()


function prepareColors(colorsData, files) {
    const dict = {}
    const list = []

    files?.forEach((file) => { dict[file.originalname.substr(0, file.originalname.lastIndexOf('.'))] = file.filename })

    const colors = colorsData.map((color) => {     
        const handler = (item) => {
            if(item.file && dict[item.file]) { item.src = dict[item.file] }
            list.push(item.src)
    
            return { title: item.title, src: item.src }
        }    
    
        const newColor = handler(color)  
        newColor.design = color.design.map(handler)

        return newColor
    })

    return { colors, list }
}

router.post('/create', auth, isAdmin, 
    file.fields([  
        { name: 'photos', maxCount: 25 },
        { name: 'photosColor', maxCount: 100 }
    ]),
    create, 
    trappiner(async (req, res) => {   
        const { title, desc, price, prop, materials, category, collection, colors } = req.body
       
        const materialsData = validateMaterial(JSON.parse(materials))
        const properties = validateProp(JSON.parse(prop))
        const colorsData = validateColors(JSON.parse(colors))

        const photos = req.files.photos?.map((file) => file.filename) || []  
        const Colors = prepareColors(colorsData, req.files.photosColor)

        const product = await Product.create(title, desc, price, photos, properties, materialsData, Colors, category, collection)

        res.status(201).json(Format.admin(product))
    })
) 

router.post('/update', auth, isAdmin, 
    file.fields([  
        { name: 'photos', maxCount: 25 },
        { name: 'photosColor', maxCount: 100 }
    ]),
    create, 
    trappiner(async (req, res) => {   
        const { id, title, desc, price, prop, materials, category, collection, colors, existPhotos } = req.body

        const materialsData = validateMaterial(JSON.parse(materials))
        const properties = validateProp(JSON.parse(prop))
        const colorsData = validateColors(JSON.parse(colors))   
        
        const photos = req.files.photos?.map((file) => file.filename) || []        
        const Colors = prepareColors(colorsData, req.files.photosColor)        

        const product = await Product.update(id, title, desc, price, photos, existPhotos, properties, materialsData, Colors, category, collection)

        res.status(201).json(Format.admin(product))
    })
) 

router.post('/list', auth, isAdmin,
    trappiner(async (req, res) => {     
        const { filter } = req.body
        
        const list = await Product.list(filter)

        res.status(200).json(list.map(Format.admin))
    })
) 

router.post('/client-list', trappiner(async (req, res) => {     
    const { filter } = req.body   
    
    const list = await Product.list({...filter, soldOut: false})

    res.status(200).json(list.map(Format.client))
})) 

router.post('/recomend', trappiner(async (req, res) => {        
    const list = await Product.recomend()
    res.status(200).json(list.map(Format.client))
})) 

router.post('/set-soldout', trappiner(async (req, res) => {     
    const { id, soldOut } = req.body  

    const product = await Product.setSoldOut(id, soldOut)

    res.status(200).json(Format.admin(product))
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