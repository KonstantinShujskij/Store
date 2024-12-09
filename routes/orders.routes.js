const {Router} = require('express')
const { auth, isUser } = require('../middleware/auth.middleware')
const trappiner = require('../utils/trappiner.utils')
const Validator = require('../Validators/order.validator')
const Order = require('../controllers/Order.controller')


const router = Router()


router.post('/create', auth, isUser, Validator.create,
    trappiner(async (req, res) => {     
        const { products, delivery, contacts } = req.body
        const { price, list } = await Validator.validateProducts(products)

        const order = await Order.create(list, price, delivery, contacts, req.user._id)    

        res.status(201).json(order)
    })
) 

router.post('/create-public', Validator.create,
    trappiner(async (req, res) => {     
        const { products, delivery, contacts } = req.body
        const {price, list} = await Validator.validateProducts(products)

        const order = await Order.create(list, price, delivery, contacts)    

        res.status(201).json(order)
    })
) 

router.post('/pay', trappiner(async (req, res) => {     
    const { id } = req.body    

    const order = await Order.pay(id)

    res.status(200).json(order)
})) 

router.post('/get', trappiner(async (req, res) => {     
    const { id } = req.body    

    const order = await Order.get(id)

    res.status(200).json(order)
})) 

router.post('/list', auth, isUser, 
    trappiner(async (req, res) => {     
        const list = await Order.list(req.user._id)

        res.status(200).json(list)
    })
) 


module.exports = router