$submitButton = document.getElementById("submitButton")
$mealPlanSelect = document.getElementById('mealPlan')
$roomType = document.getElementById('roomType')
$checkInDate = document.getElementById('checkInDate')
$checkOutDate = document.getElementById('checkOutDate')
$numOfAdults = document.getElementById('numOfAdults')
$numOfChildren = document.getElementById('numOfChildren')

$submitButton.addEventListener("click", async(e)=>{ 
    e.preventDefault()

    //restrictions for data provided by the user
    if (!($numOfAdults.value) || !($roomType.value) || !($mealPlanSelect.value) || !($checkInDate.value) || !($checkOutDate.value)) {
        return alert('Please fill all fields!')
    }
    
    if (new Date($checkOutDate.value).getTime() <= new Date($checkInDate.value).getTime()) {
        return alert("Checkout date must be after the check in date!")
    }

    //save the data provided into an object to send it in the request body
    const reservationInfo = {
        numOfAdults : parseInt($numOfAdults.value),
        numOfChildren : parseInt($numOfChildren.value),
        roomType : $roomType.value,
        mealPlan : $mealPlanSelect.value,
        checkInDate : new Date($checkInDate.value),
        checkOutDate : new Date($checkOutDate.value)
    }   
    
    const response = await (await fetch(`${location.origin}/totalPrice`, {
                    method: 'POST', 
                    credentials: 'same-origin', 
                    headers: {
                                'Content-Type': 'application/json',
                             },
                    body: JSON.stringify(reservationInfo)
                    })).json()
    
                    
    if (response.error) {
        return alert(response.error)
    }
    document.getElementById('total').innerHTML= `Total is: ${response.totalPrice} <b>$</b>`
})

//fetching available meal plans and room types to render in the form
fetch(`${location.origin}/mainInfo`).then(mainInfo => mainInfo.json() ).then(({mealPlans, roomTypes})=>{
    for (const mealPlan of mealPlans) {
        const optionElement = document.createElement('option')
        optionElement.setAttribute('value', mealPlan)
        optionElement.textContent = mealPlan
        $mealPlanSelect.appendChild(optionElement)
    }
    for (const roomType of roomTypes) {
        const optionElement = document.createElement('option')
        optionElement.setAttribute('value', roomType)
        optionElement.textContent = roomType
        $roomType.appendChild(optionElement)
    }
})
