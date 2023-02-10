function converter() {
    let res = document.getElementById('resultado')
    let metros = prompt(`Digite uma distância em metros (m):`)
    let mToKm = metros * 0.001
    let mToHec = metros * 0.01
    let mToDec = metros * 0.1
    let mToDeci = metros * 10
    let mToCen = metros * 100
    let mToMil = metros * 1000

    res.innerHTML = `<h2>A distância de ${metros} metros, corresponde a...</h2>`

    res.innerHTML += `${mToKm} quilômetros (Km)`
    res.innerHTML += `<p>${mToHec} hectômetros (Hm)</p>`
    res.innerHTML += `<p>${mToDec} decâmetros (Dam)</p>`
    res.innerHTML += `<p>${mToDeci} decímetros (dm)</p>`
    res.innerHTML += `<p>${mToCen} centímetros (cm)</p>`
    res.innerHTML += `${mToMil} milímetros (mm)`
}