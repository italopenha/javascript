function converter() {
    let res = document.getElementById('resultado')
    let celsius = Number(prompt(`Digite uma temperatura em °C (Celsius)`))
    let celsiusToKelvin = celsius + 273
    let celsiusToFahrenheit = (1.8 * celsius) + 32

    res.innerHTML = `<p>A temperatura de ${celsius}°C, corresponde a...</p>`
    res.innerHTML += `<p>${celsiusToKelvin}°K (Kelvin)</p>`
    res.innerHTML += `<p>${celsiusToFahrenheit}°F (Fahrenheit)</p>`
}