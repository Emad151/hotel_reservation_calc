//setting express
const express = require('express')
const app = express()
const port = 3000

//The models
const RoomType = require('./db/models/RoomType')
const MealPlan = require('./db/models/MealPlan')
const MealPlanRate = require('./db/models/MealPlanRate')
const RoomTypeRate = require('./db/models/RoomTypeRate')

//Helper Functions and middlewares
const calculateTotal = require('./utils/calculateTotal')
const validateInputs = require('./middlewares/validateInputs')

//connect to database
require('./db/connect')


//setting the client side (public files)
const path = require('path')
const publicWebsitePath = path.join(__dirname, './website')
app.use(express.static(publicWebsitePath))

app.use(express.json())

app.get('/', (req, res) => res.send('index.html'))

app.get('/mainInfo', async(req, res)=>{
    const mealPlans = await (await MealPlan.find()).map(mealPlan => mealPlan.name)
    const roomTypes = await (await RoomType.find()).map(roomType => roomType.name)
    res.send({
        mealPlans,
        roomTypes
    })
})

app.post('/totalPrice', validateInputs, async(req, res)=>{
    try {
        const submittedInfo = req.body

        //fetch the arrays of possible rates for the specified meal plan and room type from the database
        const roomType = await RoomType.findOne({name:submittedInfo.roomType}).populate('possibleRates')
        const mealPlan = await MealPlan.findOne({name: submittedInfo.mealPlan}).populate('possibleRates')
        
        const total = calculateTotal(submittedInfo.numOfAdults, submittedInfo.numOfChildren, submittedInfo.checkInDate, submittedInfo.checkOutDate, mealPlan.possibleRates, roomType.possibleRates)
        console.log(total)
        if (total.error) {
            res.status(400).send(total.error)
        }
        res.send({
            totalPrice: total
        })
    } catch (err) {
        res.send({
        error: 'Server Error, kindly try again later!'
        })
    }
    
    
})
app.listen(port, () => console.log(`Example app listening on port ${port}!`))