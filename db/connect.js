const mongoose = require('mongoose');

const MONGODB_URL = process.env.MONGODB_URL || "mongodb+srv://emad:1234560md@cluster0.j7vutur.mongodb.net/?retryWrites=true&w=majority"//"mongodb://127.0.0.1:27017/hotel"
try {
    mongoose.connect(MONGODB_URL)
} catch (error) {
    console.log(error.message)
}
