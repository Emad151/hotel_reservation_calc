const mongoose = require("mongoose")

const mealPlanSchema = mongoose.Schema({
    name:{
        type: String,
        required:true,
        trim: true
    }
})

mealPlanSchema.virtual('possibleRates', {
    ref: 'MealPlanRate',
    localField: '_id',
    foreignField: 'mealPlanId'
})

const MealPlan = mongoose.model('MealPlan', mealPlanSchema)
module.exports = MealPlan