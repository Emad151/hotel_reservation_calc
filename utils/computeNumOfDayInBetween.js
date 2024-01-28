/**
     * A function to count the number days between two dates
     * @param {Date} startDate 
     * @param {Date} endDate 
     * @returns {Number} number of days in between
     */
function numberOfDaysInBetween(startDate, endDate){
    return Math.abs((endDate.getTime() - startDate.getTime())/(1000 * 60 * 60 * 24));
}


//console.log(numberOfDaysInBetween(new Date('2023-12-31'), new Date('2024-02-27'))) //58

module.exports = numberOfDaysInBetween