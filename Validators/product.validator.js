const {check} = require('express-validator')

const errors = require('../const/errors')


module.exports = {
    create: [
        check('title', errors.incorectTitle.key).isString().isLength({ min: 3, max: 16 }),
        check('desc', errors.incorectDesc.key).isString().isLength({ min: 10, max: 1600 }),
        check('price', errors.incorectPrice.key).isFloat({min: 0, max: 10000000})
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
            catch(err) { throw errors.incorectProp }
        })
    },
    validateMaterial: (prop) => {
        return prop.map((item) => {
            try {
                if(typeof item.id !== "string" || item.id.length < 1) { throw errors.incorectValue }
                if(typeof item.title !== "string" || item.title.length < 3) { throw errors.incorectValue }

                return { id: item.id, title: item.title }
            }
            catch(err) { throw errors.incorectMaterial }
        })
    },
    validateColors: (prop) => {
        return prop.map((item) => {
            try {
                if(typeof item.title !== "string" || item.title.length < 3) { throw errors.incorectValue }
                if(item.src && typeof item.src !== "string") { throw errors.incorectValue }
                if(item.file && typeof item.file !== "string") { throw errors.incorectValue }

                item.design = item.design.map((item) => {
                    if(typeof item.title !== "string" || item.title.length < 3) { throw errors.incorectValue }
                    if(item.src && typeof item.src !== "string") { throw errors.incorectValue }
                    if(item.file && typeof item.file !== "string") { throw errors.incorectValue }

                    return item
                })

                return item
            }
            catch(err) { throw errors.incorectColors }
        })
    }
}