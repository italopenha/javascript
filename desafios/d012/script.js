function verificar() {
    let res = document.getElementById('resultado')
    let precoAntigo = Number(prompt(`Qual era o preço anterior do produto?`))
    let precoNovo = Number(prompt(`Qual é o preço atual do produto?`))
    
    res.innerHTML = `<h3>Analisando os valores informados...</h3>`
    res.innerHTML += `<p>O produto custava R$ ${precoAntigo} e agora custa R$ ${precoNovo}.</p>`

    if (precoNovo > precoAntigo) {
        let diferenca = precoNovo - precoAntigo
        let variacao = diferenca / precoAntigo * 100
        res.innerHTML += `<p>Hoje o produto está mais caro.</p>`
        res.innerHTML += `<p>O preço subiu R$ ${diferenca.toFixed(2)} em relação ao preço anterior.</p>`
        res.innerHTML += `<p>Uma variação de ${variacao.toFixed(2)}% pra cima.</p>`
    } else {
        let diferenca = precoAntigo - precoNovo
        let variacao = diferenca / precoNovo * 100
        res.innerHTML += `<p>Hoje o produto está mais barato.</p>`
        res.innerHTML += `<p>O preço caiu R$ ${diferenca.toFixed(2)} em relação ao preço anterior.</p>`
        res.innerHTML += `<p>Uma variação de ${variacao.toFixed(2)}% pra baixo.</p>`
    }
}