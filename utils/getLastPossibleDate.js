const getLastPossibleDate = function (arrayOfObjects) {
    if (!arrayOfObjects || arrayOfObjects.length === 0) {
      return null // Return null or handle accordingly for empty array
    }
    const dateToValues = arrayOfObjects.map(obj => obj.dateTo)
    // Find the maximum date among the extracted values
    const maxDate = Math.max.apply(null, dateToValues)
  
    return new Date(maxDate)
  }
  
  

module.exports = getLastPossibleDate