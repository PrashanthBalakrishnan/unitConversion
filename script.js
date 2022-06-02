let conversionNum = 0;

function myFunction() {

    conversionNum = document.getElementById("unit");
    let num = conversionNum.value;

    let metersToFeet = document.getElementById("meters--feet");
    let feetToMeters = document.getElementById("feet--meters");


    metersToFeet.innerHTML = (num + " Meters = " + (num * 3.28084).toFixed(3) + " feet " + " | ");
    feetToMeters.innerText = (num + " feet = " + (num * .3048).toFixed(3) + " meters");

    let litersToGallon = document.getElementById("liters--gallons");
    let gallonToLiters = document.getElementById("gallons--liters");

    litersToGallon.innerHTML = (num + " liters = " + (num * 0.264172).toFixed(3) + " gallon")
    gallonToLiters.innerHTML = (num + " gallons = " + (num * 3.78541).toFixed(3) + " liters");


    let killosToPounds = document.getElementById("kilograms--pounds");
    let poundsToKillos = document.getElementById("pounds--kilograms");

    killosToPounds.innerHTML = (num + " kilograms = " + (num * 2.20462).toFixed(3) + " pounds")
    poundsToKillos.innerHTML = (num + " pounds = " + (num * 0.453592).toFixed(3) + " liters");



}




