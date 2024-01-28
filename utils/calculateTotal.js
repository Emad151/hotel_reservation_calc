const calculateMealPlanFees = require('./calculateMealPlanFees')
const calculateRoomFees = require('./calculateRoomFees')


const calculateTotal = function (numOfAdults, numOfChildren, checkInDate, checkOutDate, possibleMealPlanRates, possibleRoomTypeRates) {
    try {
    if (!possibleMealPlanRates || !possibleRoomTypeRates) {
        throw new Error("possibleRoomTypeRates and possibleMealPlanRates must be an array containing rates!")
    }
    if (!checkInDate || !checkOutDate) {
        throw new Error("start date and end date must be provided!")
    }

    
    const roomsFees = calculateMealPlanFees((numOfAdults + numOfChildren), new Date(checkInDate), new Date(checkOutDate), possibleMealPlanRates)
    const mealPlansFees = calculateRoomFees(numOfAdults, numOfChildren, new Date(checkInDate), new Date(checkOutDate), possibleRoomTypeRates)
    return roomsFees + mealPlansFees 
    } catch (error) {
       console.log(error.message) 
    }
}

module.exports = calculateTotal