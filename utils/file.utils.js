const fs = require('fs')


function removeFile(src) { fs.unlink(src, (err) => {}) }


module.exports = {
    removeFile
}