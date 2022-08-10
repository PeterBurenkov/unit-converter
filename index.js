/*
1 meter = 3.281 feet
1 liter = 0.264 gallon
1 kilogram = 2.204 pound
*/
const decimalPoints = 3
const lenghtConst = 3.281
const volumeConst = 0.264
const massConst = 2.204

const numberEl = document.getElementById("number")
const convertBtn = document.getElementById("convert-btn")
const lenghtEl = document.getElementById("lenght-el")
const volumeEl = document.getElementById("volume-el")
const massEl = document.getElementById("mass-el")

function meter_to_feet(value){
    return value*lenghtConst
}

function feet_to_meter(value){
    return value/lenghtConst
}

function liter_to_gallon(value){
    return value*volumeConst
}

function gallon_to_liter(value){
    return value/volumeConst
}

function kilogram_to_pound(value){
    return value*massConst
}

function pound_to_kilogram(value){
    return value/massConst
}

function getLenghtOutput(number) {
    // Number.parseFloat(number).toFixed(2)
    const feet = meter_to_feet(number).toFixed(decimalPoints)
    const meters = feet_to_meter(number).toFixed(decimalPoints)
    return `${number} meters = ${feet} feet | ${number}  feet = ${meters} meters`
}

function geVolumeOutput(number) {
    const gallons = liter_to_gallon(number).toFixed(decimalPoints)
    const liters = gallon_to_liter(number).toFixed(decimalPoints)
    return `${number} liters  = ${gallons} gallons  | ${number}  gallons  = ${liters} liters `
}

function getMassOutput(number) {
    const pounds = kilogram_to_pound(number).toFixed(decimalPoints)
    const kilos = pound_to_kilogram(number).toFixed(decimalPoints)
    return `${number} kilos  = ${pounds} pounds  | ${number}  pounds  = ${kilos} kilos `
}

function renderPage(number){
    numberEl.value = number
    lenghtEl.innerText = getLenghtOutput(number)
    volumeEl.innerText = geVolumeOutput(number)
    massEl.innerText = getMassOutput(number)
}

convertBtn.addEventListener("click", function(){
    number = Number.parseFloat(numberEl.value)
    renderPage(number)
})

renderPage(10)