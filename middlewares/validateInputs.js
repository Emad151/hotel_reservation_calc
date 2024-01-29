const validateInputs = function (req, res, next) {
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
    
    next()
}
module.exports = validateInputs