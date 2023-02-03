let vet = []
let num = document.getElementById('num')
let sel = document.getElementById('valAdd')
let res = document.getElementById('res')

function numeroInvalido(n) {
    if (Number(n) <= 0 || Number(n) > 100 ) {
        return true 
    } else {
        return false
    }
}

function numeroExistente(n, v) {
    if (v.indexOf(Number(n)) != -1) {
        return true
    } else {
        return false
    }
}

function addValores() {
    if (numeroInvalido(num.value) || numeroExistente(num.value, vet)) {
        alert('Número inválido ou já existente na lista!')
    } else {
        sel.innerHTML = ""
        vet.push(Number(num.value))
        for (pos in vet) {
            let item = document.createElement('option')
            item.text = `Valor ${vet[pos]} adicionado`
            sel.appendChild(item)
            res.innerHTML = ''
        }
    }
    num.value = ''
    num.focus()
}

function finalizar() {
    let maiorVal = Math.max.apply(res, vet)
    let menorVal = Math.min.apply(res, vet)
    let soma = 0

    if (vet == '') {
        alert('Insira números antes de finalizar!')
    } else {
        for (let pos in vet) {
            soma += vet[pos]
        }
        res.innerHTML = `<p>Ao todo, temos ${vet.length} números cadastrados.</p>`
        res.innerHTML += `<p>O maior valor informado foi ${maiorVal}.</p>`
        res.innerHTML += `<p>O menor valor informado foi ${menorVal}.</p>`
        res.innerHTML += `<p>Somando todos os valores, temos ${soma}.</p>`
        res.innerHTML += `<p>A média dos valores digitados é ${soma/vet.length}.</p>`
    }
}

function limparDados() {
    vet = []
    num.innerHTML = ''
    sel.innerText = ''
    res.innerHTML = ''
}

function handle(e) {
    if (e.keyCode == 13) {
        addValores()
    }
}
