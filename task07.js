function convertCelsiusToFahrenheit(degCelsius){
    var degFahrenreit = 0;
    degFahrenreit= (degCelsius * 9/5) + 32;
    return degFahrenreit;
}
convertCelsiusToFahrenheit(10);
function convertFahrenheitToCelsius(degFahrenreit){
    var degCelsius = 0;
    degCelsius= (degFahrenreit - 32) * 5/9;
    return degCelsius;
}