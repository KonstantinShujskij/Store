const {Router} = require('express')

const trappiner = require('../utils/trappiner.utils')
const consts = require('../const/consts')
const errors = require('../const/errors')


const router = Router()


router.post('/categories', trappiner(async (req, res) => {     
    res.status(200).json(consts.categories)
})) 


module.exports = router