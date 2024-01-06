function bmi(){
var h = document.getElementById("height").value;
var w = document.getElementById("weight").value;


var bmi = w / (h / 100 * h / 100);
var total = bmi.toFixed(2);
document.getElementById('result').innerHTML = "Your bmi is " + total
}