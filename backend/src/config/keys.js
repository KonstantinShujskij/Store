require('dotenv').config();

module.exports = {
    // Database
    mongoUri: process.env.MONGO_URI || 'mongodb://localhost:27017/store',
    
    // Server
    port: process.env.PORT || 3001,
    sslPort: process.env.SSL_PORT || 443,
    
    // JWT
    jwtSecret: process.env.JWT_SECRET || 'your-secret-key',
    jwtExpiration: process.env.JWT_EXPIRATION || '1h',
    
    // Environment
    nodeEnv: process.env.NODE_ENV || 'development',
    
    // File uploads
    maxFileSize: process.env.MAX_FILE_SIZE || 5242880, // 5MB
    uploadPath: process.env.UPLOAD_PATH || './uploads',
    
    // CORS
    frontendUrl: process.env.FRONTEND_URL || 'http://localhost:3000'
};