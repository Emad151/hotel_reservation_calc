/**
 * 
 * @param {Number} numOfAdults 
 * @param {Number} numOfChildren 
 * @returns {Number} Number of rooms needed
 */
const computeNumOfRooms = function (numOfAdults, numOfChildren) {
    
    return ((numOfAdults >= numOfChildren)? Math.round(numOfAdults / 2) : Math.round(numOfChildren / 2) )
}

// (2,2) => 1
// (3,2) => 2
// (2,3) => 2

module.exports = computeNumOfRooms