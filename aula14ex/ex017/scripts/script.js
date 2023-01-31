function tabuada() {
    let num = document.getElementById('num')
    let tab = document.getElementById('tab')

    let n = Number(num.value)

    if (n == 0) {
        alert('Digite um número maior do que zero!')
    } else {
        tab.innerHTML = ""
        for (let x = 1; x <= 10; x++) {
            let item = document.createElement('option')
            item.text = `${n} x ${x} = ${n*x}`
            tab.appendChild(item)
        }
    }
}