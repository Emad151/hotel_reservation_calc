const getFirstPossibleDate = function (arrayOfObjects) {
    if (!arrayOfObjects || arrayOfObjects.length === 0) {
      return null; // Return null or handle accordingly for empty array
    }
    const dateToValues = arrayOfObjects.map(obj => obj.dateFrom)
    // Find the maximum date among the extracted values
    const minDate = new Date(Math.min.apply(null, dateToValues))
  
    return new Date(minDate)
  }
  
  // Example usage:
  // const arrayOfObjects = [
  //   new Date('2022-01-30'),
  //   new Date('2022-11-30'),
  //   new Date('2022-02-15'),
  //   new Date('2023-01-20')
  // ]
  
  // const firstDate = getFirstPossibleDate(arrayOfObjects)
  // console.log('first Possible Date:', firstDate)
  

module.exports = getFirstPossibleDate