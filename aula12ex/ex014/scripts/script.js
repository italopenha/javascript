setInterval(carregar, 1000)

function carregar() {
    var titulo = document.querySelector("h1")
    var msg = document.getElementById('msg')
    var img = document.getElementById('imagem')
    var data = new Date()
    var horas = String(data.getHours()).padStart(2, "0")
    var minutos = String(data.getMinutes()).padStart(2, "0")
    var segundos = String(data.getSeconds()).padStart(2, "0")
    msg.innerHTML = (`${horas}:${minutos}:${segundos}`)

    if (horas >= 6 && horas < 12) {
        img.src = 'imgs/manha.jpg'
        document.body.style.backgroundImage = 'linear-gradient(to bottom, #387ac4, #73a2d3)'
        titulo.innerHTML = 'BOM DIA!'
        titulo.style.fontFamily = 'Belanosima, sans-serif'
        msg.style.fontFamily = 'Belanosima, sans-serif'
    } else if (horas >= 12 && horas < 18) {
        img.src = 'imgs/tarde.jpg'
        document.body.style.backgroundImage = 'linear-gradient(to bottom, #f9eb00, #f18b44)'
        titulo.innerHTML = 'BOA TARDE!'
        titulo.style.color = 'black'
        titulo.style.fontFamily = 'Concert One, cursive'
        msg.style.fontFamily = 'Concert One, cursive'
    } else {
        img.src = 'imgs/noite.jpg'
        document.body.style.backgroundImage = 'linear-gradient(to bottom, #08223e, #0e59b8)'
        titulo.innerHTML = 'BOA NOITE!'
        titulo.style.fontFamily = 'Play, sans-serif'
        msg.style.fontFamily = 'Play, sans-serif'
    }
}