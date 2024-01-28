const mongoose = require("mongoose")

const roomTypeSchema = new mongoose.Schema({
    name:{
        type: String,
        required: true,
        trim: true
    }
    //,rates: [{ type: mongoose.Schema.Types.ObjectId, ref: 'RoomRate' }]
})
roomTypeSchema.virtual('possibleRates', {
    ref: 'RoomTypeRate',
    localField:'_id',
    foreignField:'roomTypeId'
})




const RoomType = mongoose.model('RoomType', roomTypeSchema)

module.exports = RoomType