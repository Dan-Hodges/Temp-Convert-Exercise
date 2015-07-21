var valueGiven = document.getElementById("value").value;
var printValueArea = document.getElementById("converted-banner");
var convertedVaue;
function toCelsius(degreesFar) {
  return (degreesFar  -  32)  *  5/9;
}
function toFahrenheit(degreesCel) {
  return (degreesCel  *  9/5 + 32);
}
function convertIt() {
  if(document.getElementById('celsius').checked) {
    printValueArea.innerHTML = toFahrenheit(valueGiven) + "&deg; Fahrenheit";
  } else {
    printValueArea.innerHTML = toCelsius(valueGiven) + "&deg; Celsius";
  }  
}