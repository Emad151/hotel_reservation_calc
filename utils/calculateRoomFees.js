const computeNumOfRoomsNeeded = require('./computeNumOfRoomsNeeded')
const computeOverlappingDays = require('./computeOverlappingDays')


/**
 * 
 * @param {Number} numOfAdults 
 * @param {Number} numOfChildren 
 * @param {Object} startDate 
 * @param {Object} endDate checkout date
 * @param {Array} possibleRates 
 * 
 * @returns {Number} total fees for rooms
 */
const calculateRoomFees = function (numOfAdults, numOfChildren, startDate, endDate, possibleRates) {
    const numOfRooms = computeNumOfRoomsNeeded(numOfAdults, numOfChildren)
    
    const overlaps = computeOverlappingDays({startDate, endDate}, possibleRates)
    //console.log(overlaps)
    let total = 0
    for (const overlap of overlaps) {
        total += (overlap.overlapDays * overlap.rate.pricePerRoom * numOfRooms)
    }

    return total
}

module.exports = calculateRoomFees