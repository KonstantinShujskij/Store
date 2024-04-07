const {Router} = require('express')
const {check} = require('express-validator')

const trappiner = require('../utils/trappiner.utils')

const Order = require('../controllers/Order.controller')

const router = Router()


router.post('/create',
    [
        check('products', 'incorectValue').isArray(),
        check('delivery.country', 'incorectValue').isString(),
        check('delivery.index', 'incorectValue').isString(),
        check('delivery.town', 'incorectValue').isString(),
        check('delivery.adres', 'incorectValue').isString(),
        check('delivery.note', 'incorectValue').isString(),
        check('contacts.name', 'incorectValue').isString(),
        check('contacts.lastname', 'incorectValue').isString(),
        check('contacts.email', 'incorectValue').isEmail(),
        check('contacts.phone', 'incorectValue').isMobilePhone(),
    ],
    trappiner(async (req, res) => {     
        const { products, delivery, contacts } = req.body

        const order = await Order.create(null, products, delivery, contacts)

        res.status(201).json(order._id)
    })
) 

router.post('/get', trappiner(async (req, res) => {     
    const { id } = req.body

    const order = await Order.get(id)

    res.status(200).json(order)
})) 


module.exports = router