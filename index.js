/*
1 meter = 3.281 feet
1 liter = 0.264 gallon
1 kilogram = 2.204 pound
*/


const inputArea = document.getElementById("input-area")
const paraForLength = document.getElementById("for-length")
const paraForVolume = document.getElementById("for-volume")
const paraForMass = document.getElementById("for-mass")
const conVert = document.getElementById("convert")

conVert.addEventListener("click",convert)
inputArea.value = ""
function convert(){
    let inputValue = inputArea.value 
    let amount = Number(inputValue)
    console.log(amount)
    const feet = amount * 3.281 // it placement goes to where you see the conversion of amount from meters to feet
    const meters= amount / 3.281// it placement goes to where you see the conversion of amount from feets to meters
    const gallons = amount* 0.264// same logic as above
    const liters = amount / 0.264
    const pounds = amount*2.204
    const kilos = amount / 2.204


    paraForLength.textContent=`${amount} meters = ${feet.toFixed(3)} feet | ${amount} feet = ${meters.toFixed(3)} meters`
    paraForVolume.textContent= `${amount} liters = ${gallons.toFixed(3)} gallons | ${amount} gallons = ${liters.toFixed(3)} liters`
    paraForMass.textContent= `${amount} kilos = ${pounds.toFixed(3)} pounds| ${amount} pounds = ${kilos.toFixed(3)} kilos`
}
