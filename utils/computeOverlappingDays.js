/**
 * @param {Object} period object having startDate and endDate of accommodation
 * @param {Array} arrayOfRates Rate documents having dateFrom and dateTo for the price
 * @returns {Array} array of objects containing overlapping days with each rate documents
 */
function computeOverlappingDays(period, arrayOfRates) {
    const contradictionDays = [];
  
    for (const rate of arrayOfRates) {
      const startDateOverlap = new Date(Math.max(rate.dateFrom, period.startDate));
      const endDateOverlap = new Date(Math.min(rate.dateTo, period.endDate));
  
      // Check if there is an overlap
      if (startDateOverlap <= endDateOverlap) {
        const oneDay = 24 * 60 * 60 * 1000; // hours * minutes * seconds * milliseconds
        const overlapDays = (endDateOverlap.getTime() === period.endDate.getTime()) ? Math.floor((endDateOverlap - startDateOverlap) / oneDay) : Math.floor((endDateOverlap - startDateOverlap) / oneDay) +1
  
        contradictionDays.push({
          rate,
          overlapDays: overlapDays
        });
      }
    }
    //console.log(contradictionDays)
    return contradictionDays;
  }
  

  
module.exports = computeOverlappingDays