const {check} = require('express-validator')

const errors = require('../const/errors')


module.exports = {
    create: [
        check('title', errors.incorectValue.key).isString().isLength({ min: 3, max: 16 }),
        check('desc', errors.incorectValue.key).isString().isLength({ min: 10, max: 1600 }),
        check('price', errors.incorectValue.key).isFloat({min: 0, max: 10000000})
    ],
    validateProp: (prop) => {
        return prop.map((item) => {
            try {
                if(typeof item.id !== "string" || item.id.length < 1) { throw errors.incorectValue }
                if(typeof item.title !== "string" || item.title.length < 3) { throw errors.incorectValue }
                if(parseFloat(item.min) < 0) { throw errors.incorectValue }
                if(parseFloat(item.max) < 0) { throw errors.incorectValue }
                if(item.type !== 'range' && item.type !== 'list') { throw errors.incorectValue }
                if(!Array.isArray(item.list)) { throw errors.incorectValue }

                item.list.forEach((val) => {
                    if(typeof val !== "string" || val.length < 1) { throw errors.incorectValue }
                })

                return {
                    id: item.id,
                    title: item.title,
                    type: item.type,
                    list: item.list,
                    min: parseFloat(item.min),
                    max: parseFloat(item.max),  
                }
            }
            catch(err) { throw errors.incorectValue }
        })
    },
    validateMaterial: (prop) => {
        return prop.map((item) => {
            try {
                if(typeof item.id !== "string" || item.id.length < 1) { throw errors.incorectValue }
                if(typeof item.title !== "string" || item.title.length < 3) { throw errors.incorectValue }

                return { id: item.id, title: item.title }
            }
            catch(err) { throw errors.incorectValue }
        })
    }
}