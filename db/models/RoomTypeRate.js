const mongoose = require("mongoose")

const roomTypeRateSchema = new mongoose.Schema({
    roomTypeId:{
        type:  mongoose.Schema.Types.ObjectId,
        ref:'RoomType',
        required:true
    },
    pricePerRoom:{
        type: Number,
        required: true
    },
    dateFrom:{
        type:Date,
        required: true
    },
    dateTo:{
        type:Date,
        required: true
    }
})

const RoomTypeRate = mongoose.model('RoomTypeRate', roomTypeRateSchema)

module.exports = RoomTypeRate