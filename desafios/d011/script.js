function verificar() {
    let res = document.getElementById('resultado')
    let ano = Number(prompt(`Qual ano você quer verificar?`)) 

    if (ano % 4 == 0) {
        res.innerHTML = `<h3>Analisando o ano de ${ano}...</h3>`
        res.innerHTML += `<p>O ano de ${ano} <strong>É BISSEXTO</strong>✅</p>`
    } else {
        res.innerHTML = `<h3>Analisando o ano de ${ano}...</h3>`
        res.innerHTML += `<p>O ano de ${ano} <strong>NÃO É BISSEXTO</strong>❌</p>`
    }
}