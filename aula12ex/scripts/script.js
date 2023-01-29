setInterval(carregar, 1000)

function carregar() {
    var msg = document.getElementById('msg')
    var img = document.getElementById('imagem')
    var data = new Date()
    var horas = String(data.getHours()).padStart(2, "0")
    var minutos = String(data.getMinutes()).padStart(2, "0")
    var segundos = String(data.getSeconds()).padStart(2, "0")
    msg.innerHTML = (`${horas}:${minutos}:${segundos}`)

    if (horas >= 0 && horas < 12) {
        img.src = 'imgs/manha.jpg'
        document.body.style.background = '#4585cc'
    } else if (horas >= 12 && horas < 18) {
        img.src = 'imgs/tarde.jpg'
        document.body.style.background = '#fc9a3f'
    } else {
        img.src = 'imgs/noite.jpg'
        document.body.style.background = '#112641'
    }
}