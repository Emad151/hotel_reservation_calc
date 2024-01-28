const mongoose = require("mongoose")

const mealPlanRateSchema = new mongoose.Schema({
    mealPlanId:{
        type:  mongoose.Schema.Types.ObjectId,
        ref:'MealPlan',
        required:true
    },
    pricePerPerson:{ //price per person regardless whether an adult or child
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

const MealPlanRate = mongoose.model('MealPlanRate', mealPlanRateSchema)

module.exports = MealPlanRate