const mongoose = require('mongoose');
const config = require('./index');

const connectDB = async () => {
    try {
        const mongoUri = config.mongoUri;
        await mongoose.connect(mongoUri, {
            useNewUrlParser: true,
            useUnifiedTopology: true
        });
        console.log('MongoDB connected successfully');
    } catch (error) {
        console.error('Database connection error:', error.message);
        process.exit(1);
    }
};

module.exports = connectDB;