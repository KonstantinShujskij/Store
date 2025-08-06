const {Router} = require('express')
const express = require('express')
const {check} = require('express-validator')
const { auth, isUser, isAdmin } = require('../../middleware/auth.middleware')
const trappiner = require('../../utils/trappiner.utils')
const Validator = require('../../validators/order.validator')
const Order = require('../../controllers/Order.controller')
const Filter = require('../../utils/filter.utils')
const { verifyMonoSignature } = require('../../utils/mono')
const { verifeOrderToken } = require('../../utils/jwt.utils')

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

router.post('/webhook/:orderId', trappiner(async (req, res) => {
    try {
        const orderIdHash = req.params.orderId
        console.log(orderIdHash)
        
        const orderId = verifeOrderToken(orderIdHash)
        console.log(orderId)
        
        const { invoiceId, status } = req.body

        const rawBody = req.body
        const sigHeader = req.headers['x-sign']
        
        console.log('correct');

        const order = await Order.webhook(orderId, invoiceId, status)

        res.sendStatus(200);
    } catch (err) {
        console.log(err)
        res.sendStatus(500);
    }
  })
)

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

router.post('/list-all', auth, isAdmin, Validator.paginate,
    trappiner(async (req, res) => {     
        const { page, limit, filter } = req.body    
        
        const sort = { createdAt: -1 }

        const { list, count } = await Order.listAll(page, limit, sort, Filter.order(filter))

        res.status(200).json({list, count})
    })
) 

router.post('/next', auth, isAdmin,
    [
        check('id', 'incorectValue').isString(),
    ],
    trappiner(async (req, res) => {     
        const { id } = req.body    
    
        const order = await Order.next(id)

        res.status(200).json(order)
    })
) 

router.post('/set-status', auth, isAdmin,
    [
        check('id', 'incorectValue').isString(),
        check('status', 'incorectValue').isIn(['CREATE', 'PAID', 'WORK', 'SEND', 'DONE', 'CANCEL'])
    ],
    trappiner(async (req, res) => {     
        const { id, status } = req.body   
            
        const order = await Order.setStatus(id, status)

        res.status(200).json(order)
    })
) 

router.post('/set-tth', auth, isAdmin,
    [
        check('id', 'incorectValue').isString(),
        check('tth', 'incorectValue').isString()
    ],
    trappiner(async (req, res) => {     
        const { id, tth } = req.body   
            
        const order = await Order.setTTH(id, tth)

        res.status(200).json(order)
    })
) 


module.exports = router