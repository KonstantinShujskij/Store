const {check} = require('express-validator')
const Product = require('../controllers/Product.controller')

const errors = require('../const/errors')


module.exports = {
    validateProducts: async (products) => {
        const resault = { list: [], price: 0 }

        for (const index in products) {
            const product = products[index]
            
            const modelProduct = await Product.get(product._id)     
            if(!modelProduct) { throw errors.notFind }

            if(modelProduct.title !== product.title) { throw errors.notFind }
            if(modelProduct.price !== product.price) { throw errors.notFind }

            let falseMaterial = true
            modelProduct.materials.forEach((item) => {
                if(item.title === product.material) { falseMaterial = false }
            })
            if(falseMaterial) { throw errors.incorectValue } 

            let falseColors = true
            modelProduct.colors.forEach((item) => {                               
                if(item.title === product.color) { 
                    item.design.forEach((item) => {
                        if(item.title === product.design) { falseColors = false } 
                    })
                }
            })
            if(falseColors) { throw errors.incorectValue } 
            
            modelProduct.prop.forEach((item) => {                
                const value = parseFloat(product.parametrs[item.title])
        
                if(value === undefined) { throw errors.incorectValue }
                if(item.type == 'range') { if(value < item.min || value > item.max) { throw errors.incorectValue }}
                else if(item.type == 'list') { if(!item.list.includes(value)) { throw errors.incorectValue }}
                else { throw errors.incorectValue }
            })

            resault.price += modelProduct.price
            resault.list.push({
                productId: modelProduct.id,
                photo: product.photo,
                title: modelProduct.title,
                price: modelProduct.price,
                color: product.color,
                design: product.design,
                material: product.material,
                parametrs: product.parametrs
            })
        } 

        return resault
    }
}