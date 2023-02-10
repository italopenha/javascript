function calcular() {
    let res = document.getElementById('resultado')
    let a = Number(prompt(`Qual é o valor de A?`))
    let b = Number(prompt(`Qual é o valor de B?`))
    let c = Number(prompt(`Qual é o valor de C?`))
    let bhaskara = b ** 2 - 4 * a * c

    res.innerHTML = `<p>A equação atual é <strong>${a}x² + ${b}x + ${c} = 0</strong></p>`
    res.innerHTML += `<p>O cálculo realizado será <strong>Δ = ${b}² - 4 . ${a} . ${c}</strong></p>`
    res.innerHTML += `<p>O valor calculado foi <strong>Δ = ${bhaskara}</strong></p>`
}