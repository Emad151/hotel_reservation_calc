const computeOverlappingDays  = require('./computeOverlappingDays')

/**
 * 
 * @param {Number} numOfGuests 
 * @param {Date} startDate 
 * @param {Date} endDate
 * @param {Array} ChosenPlanRates array of rates for a specific meal plan
 * @returns {Number} Meal plan total fees
 */
const calculateMealPlanFees = function (numOfGuests, startDate, endDate, ChosenPlanRates) {
    
    let totalFees = 0
    const overlaps = computeOverlappingDays({startDate, endDate}, ChosenPlanRates)
    
    for (const overlap of overlaps) {
        totalFees += (overlap.overlapDays * numOfGuests * overlap.rate.pricePerPerson)
    }

    return totalFees
}




module.exports = calculateMealPlanFees