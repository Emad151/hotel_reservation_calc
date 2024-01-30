const MealPlanRate = require('../db/models/MealPlanRate')
const RoomTypeRate = require('../db/models/RoomTypeRate')
const getLastPossibleDate = require('../utils/getLastPossibleDate')
const getFirstPossibleDate = require('../utils/getFirstPossibleDate')


const validateInputs = function () {
    return async(req, res, next)=>{
        //default values for number of children and check in date if not provided
        if (!req.body.numOfChildren) {
            req.body.numOfChildren = 0
        }
        //to check that data is provided
        if (!req.body || !req.body.numOfAdults || !req.body.roomType || !req.body.mealPlan || !req.body.checkOutDate || !req.body.checkInDate) {
            return res.status(400).send({error: 'Incomplete information'})
        }
        //to check that check-in date is before checkout date  
        if (new Date(req.body.checkInDate).getTime() >= new Date(req.body.checkOutDate).getTime()) {
            return res.status(400).send({error: 'Check-in Date cannot precede or be in the same day as check-out date'})
        }
        const mealPlanRates = await MealPlanRate.find()
        const roomTypeRates = await RoomTypeRate.find()

        //Math min and max methods return the dates in milliseconds
        const lastPossibleDate = Math.min(getLastPossibleDate(mealPlanRates), getLastPossibleDate(roomTypeRates))
        const firstPossibleDate = Math.max(getFirstPossibleDate(mealPlanRates), getFirstPossibleDate(roomTypeRates))

        //check if there are prices available for the period between check-in and checkout dates
        if (new Date(req.body.checkOutDate).getTime() > lastPossibleDate + (1000*60*60*24) || new Date(req.body.checkInDate).getTime() < firstPossibleDate) {
            return res.status(400).send({error: 'No Prices specified for some days in your accommodation!'})
        }
        next()
    }
    
}
module.exports = validateInputs