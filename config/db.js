const mongoose = require('mongoose');
const config = require('config');
const db = config.get('mongoURI');

connectDB = async () => {
    try {
       await mongoose.connect(db)
        console.log('MongoDB Connceted');
    }
    catch(err) {
        console.error(err.message);
        process.exit(1);
    }
}

module.exports = connectDB