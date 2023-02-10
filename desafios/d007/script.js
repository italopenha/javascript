function converter() {
    let res = document.getElementById('resultado')
    let cotacaoDolar = Number(prompt(`Quanto está a cotação do dólar agora?`))
    let reais = Number(prompt(`Digite o valor em R$ que você quer converter:`))
    let dolares = reais / cotacaoDolar
    
    res.innerHTML = `<p>R$ ${reais} equivalem a US$ ${dolares}.</p>`
}