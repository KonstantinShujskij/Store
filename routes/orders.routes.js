const {Router} = require('express')
const express = require('express')
const {check} = require('express-validator')
const { auth, isUser, isAdmin } = require('../middleware/auth.middleware')
const trappiner = require('../utils/trappiner.utils')
const Validator = require('../Validators/order.validator')
const Order = require('../controllers/Order.controller')
const Filter = require('../utils/filter.utils')
const { verifyMonoSignature } = require('../utils/mono')

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

router.post('/webhook/:orderId',
  express.raw({ type: 'application/json' }),  
  trappiner(async (req, res) => {
    try {
        console.log('Get Mono Hook')
        console.log(req.params.orderId)
        
        const orderId = req.params.orderId

        const rawBody = req.body
        const sigHeader = req.headers['x-sign']

        console.log(rawBody);

        const { invoiceId, status, paymentDate } = rawBody //JSON.parse(rawBody.toString('utf8'))

        console.log(orderId, invoiceId, status, paymentDate);
        

        const ok = verifyMonoSignature(rawBody, sigHeader)
        if(!ok) {
            console.warn('Invalid Mono signature')
            return res.sendStatus(400)
        }

        console.log('correct');

        const order = await Order.webhook(orderId, invoiceId, status, paymentDate)

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