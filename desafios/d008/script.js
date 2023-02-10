function desconto10() {
    let res = document.getElementById('resultado')
    let produto = prompt(`Qual é o produto que você está comprando?`)
    let preco = Number(prompt(`Qual é o preço de ${produto}?`))
    let desconto = preco * 0.1
    let precoFinal = preco - desconto

    res.innerHTML = `<h3>Calculando o desconto de 10% para ${produto}...</h3>`
    res.innerHTML += `<p>O preço original era R$ ${preco.toFixed(2)}.</p>`
    res.innerHTML += `<p>Você acaba de ganhar R$ ${desconto.toFixed(2)} de desconto (-10%).</p>`
    res.innerHTML += `<p>Você vai pagar R$ ${precoFinal.toFixed(2)} no produto ${produto}.</p>`
}