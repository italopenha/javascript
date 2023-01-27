function qualPais() {
    var txtPais = document.querySelector('input#ipais')
    var res = document.querySelector('div#res')
    var pais = (txtPais.value)
    res.innerHTML = `<p>Seu país de origem é ${pais}!</p>`
    if (pais == 'Brasil' || pais == 'brasil') {
        res.innerHTML += `<p>Você é brasileiro(a)!</p>`
    } else {
        res.innerHTML += `<p>Você é estrangeiro(a)!</p>`
    }
}