const mongoose = require('mongoose');

const MONGODB_URL = process.env.MONGODB_URL || "mongodb://127.0.0.1:27017/hotel"
try {
    mongoose.connect(MONGODB_URL)
} catch (error) {
    console.log(error.message)
}
