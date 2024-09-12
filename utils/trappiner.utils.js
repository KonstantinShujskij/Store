const { validationResult } = require('express-validator')

const errors = require('../const/errors')
const { removeFile } = require('./file.utils')


const trappiner = (handler) => {
    return async (req, res) => {
        try { 
            const error = validationResult(req).array().pop()
            if(error) { throw errors[error.msg] }

            await handler(req, res) 
        } 
        catch(error) {
            if(req?.files) {
                for(const field in req.files) {
                    req.files[field].forEach((file) => removeFile(`static/images/${file.filename}`))
                }
            }

            if(error?.custom) { res.status(400).json(error.answer) }
            else { res.status(500).json(errors.unknown.answer) }
        }
    }
}

module.exports = trappiner