const {check} = require('express-validator')

const errors = require('../const/errors')


module.exports = {
    create: [
        check('title', errors.incorectValue.key).isString().isLength({ min: 3, max: 16 }),
        check('desc', errors.incorectValue.key).isString().isLength({ min: 10, max: 1600 }),
        check('price', errors.incorectValue.key).isFloat({min: 0, max: 10000000})
    ],
    validateProp: (prop) => {
        prop.forEach((item) => {
            try {
                if(typeof item.id !== "string" || item.id.length < 1) { 
                    console.log('-0');
                    throw errors.incorectValue 
                }
                if(typeof item.title !== "string" || item.title.length < 3) { 
                    console.log('-1');
                    throw errors.incorectValue 
                }
                if(parseFloat(item.min) < 0) { 
                    console.log(item);
                    console.log('-2');
                    throw errors.incorectValue 
                }
                if(parseFloat(item.max) < 0) { 
                    console.log('-3');
                    throw errors.incorectValue 
                }
                if(item.type !== 'range' && item.type !== 'list') { 
                    console.log('-4');
                    throw errors.incorectValue 
                }
                if(!Array.isArray(item.list)) { 
                    console.log('-5');
                    throw errors.incorectValue 
                }

                item.list.forEach((val) => {
                    if(typeof val !== "string" || val.length < 1) { 
                        console.log('-n');
                        throw errors.incorectValue 
                    }
                })
            }
            catch(err) {
                throw errors.incorectValue 
            }
        })
    }
}