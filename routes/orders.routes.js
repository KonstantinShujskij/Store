const {Router} = require('express')
const {check} = require('express-validator')

const trappiner = require('../utils/trappiner.utils')
const { validateProducts } = require('../Validators/order.validator')

const Order = require('../controllers/Order.controller')

const router = Router()


router.post('/create',
    [
        check('products', 'incorectValue').isArray(),
        check('delivery.type', 'incorectValue').isIn(['department', 'address', 'terminal']),
        check('delivery.town', 'incorectValue').isString(),
        check('delivery.data', 'incorectValue').isString(),
        check('delivery.note', 'incorectValue').isString(),
        check('contacts.name', 'incorectValue').isString(),
        check('contacts.surname', 'incorectValue').isString(),
        check('contacts.email', 'incorectValue').isEmail(),
        check('contacts.phone', 'incorectValue').isMobilePhone(),
        check('contacts.instagram', 'incorectValue').isString()
    ],
    trappiner(async (req, res) => {     
        const { products, delivery, contacts } = req.body
        const {price, list} = await validateProducts(products)

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


module.exports = router