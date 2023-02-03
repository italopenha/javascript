var vet = []

function addValores() {
    let num = document.getElementById('num')
    let val = Number(num.value)
    let sel = document.getElementById('valAdd')

    if (val <= 0 || val > 100) {
        alert('Número inválido! Insira um número entre 1 e 100')
    } else {
        sel.innerHTML = ""
        vet.push(val)
        for (pos in vet) {
            let item = document.createElement('option')
            item.text = `Valor ${vet[pos]} adicionado`
            sel.appendChild(item)
        }
    }
}

function finalizar() {
    let num = document.getElementById('num')
    let val = Number(num.value)
    let res = document.getElementById('res')
    let maiorVal = Math.max.apply(res, vet)
    let menorVal = Math.min.apply(res, vet)
    let soma = 0

    if (val <= 0 || val > 100) {
        alert('Número inválido! Insira um número entre 1 e 100')
    } else {
        for (var i = 0; i < vet.length; i++) {
            soma += vet[i]
        }
        res.innerHTML = `Ao todo, temos ${vet.length} números cadastrados.<br>`
        res.innerHTML += `O maior valor informado foi ${maiorVal}.<br>`
        res.innerHTML += `O menor valor informado foi ${menorVal}.<br>`
        res.innerHTML += `Somando todos os valores temos ${soma}.<br>`
        res.innerHTML += `A média dos valores digitados é ${soma/vet.length}.`
    }
}

