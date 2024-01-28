const validateInputs = function (req, res, next) {
    //to check that data is provided
    if (!req.body || !req.body.numOfAdults || !req.body.roomType || !req.body.mealPlan || !req.body.checkInDate || !req.body.checkOutDate) {
        return res.status(400).send()
    }
    //to check that the dates are semantically correct according to order!
    if (new Date(req.body.checkInDate).getTime() >= new Date(req.body.checkOutDate).getTime()) {
        
        return res.status(400).send()
    }
    //to check that dates cannot be before the current day 
    if (new Date(req.body.checkInDate).getTime() <= new Date().getTime() - 24 * 60 * 60 * 1000) {
        return res.status(400).send()
    }
    next()
}
module.exports = validateInputs