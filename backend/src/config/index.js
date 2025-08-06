const keys = require('./keys');
const config = require('config');

// Merge environment variables with config files
const mergedConfig = {
    // From keys.js (environment variables)
    ...keys,
    
    // From config files (default.json, production.json)
    ...(config.util ? config.util.toObject() : {})
};

module.exports = mergedConfig;