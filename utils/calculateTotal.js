const calculateMealPlanFees = require('./calculateMealPlanFees')
const calculateRoomFees = require('./calculateRoomFees')

const calculateTotal = function (numOfAdults, numOfChildren, checkInDate, checkOutDate, possibleMealPlanRates, possibleRoomTypeRates) {
    try {
    if (!possibleMealPlanRates || !possibleRoomTypeRates) {
        return {error: 'We are updating some information please try again later'}
        //throw new Error("possibleRoomTypeRates and possibleMealPlanRates must be an array containing rates for different periods of time!")
    }
        
    const roomsFees = calculateMealPlanFees((numOfAdults + numOfChildren), new Date(checkInDate), new Date(checkOutDate), possibleMealPlanRates)
    const mealPlansFees = calculateRoomFees(numOfAdults, numOfChildren, new Date(checkInDate), new Date(checkOutDate), possibleRoomTypeRates)
    return roomsFees + mealPlansFees 
    } catch (error) {
       console.log(error.message) 
       return {error: 'Server Error, kindly try again later!'}
    }
}

module.exports = calculateTotal