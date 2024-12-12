const {Router} = require('express')

const trappiner = require('../utils/trappiner.utils')

const Also = require('../controllers/Also.controller')


const router = Router()

router.post('/set', trappiner(async (req, res) => {
    const { id, productId } = req.body    

    let also = null

    if(id) { also = await Also.update(id, productId) }
    else { also = await Also.create(productId) }

    return res.status(201).json(also)
})) 

router.post('/get', trappiner(async (req, res) => {
    const { count } = req.body   

    const list = await Also.list(count)
    
    return res.status(201).json(list)
})) 


module.exports = router