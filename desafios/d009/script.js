function reajuste() {
    let res = document.getElementById('resultado')
    let funcionario = prompt(`Qual é nome do funcionário?`)
    let salarioAtual = Number(prompt(`Qual é o salário de ${funcionario}?`))
    let porcentagemDeAumento = Number(prompt(`O salário de ${funcionario} vai ser reajustado em qual porcentagem?`))
    let aumento = salarioAtual * porcentagemDeAumento / 100
    let salarioNovo = salarioAtual + aumento

    res.innerHTML = `<h3>${funcionario} recebeu um aumento salarial!</h3>`
    res.innerHTML += `<p>O salário atual era R$ ${salarioAtual.toFixed(2)}.</p>`
    res.innerHTML += `<p>Com um aumento de ${porcentagemDeAumento}%, o salário vai aumentar em R$ ${aumento.toFixed(2)} no próximo mês.</p>`
    res.innerHTML += `<p>E a partir daí, ${funcionario} vai passar a ganhar R$ ${salarioNovo.toFixed(2)}.</p>`
}