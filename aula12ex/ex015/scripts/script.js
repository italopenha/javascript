function verificar() {
    var data = new Date()
    var ano = data.getFullYear()
    var fano = document.getElementById('iano-nasc')
    var res = document.getElementById('res')

    if (fano.value.length == 0 || fano.value > ano) {
        alert('[ERRO] Verifique os dados e tente novamente!')
    } else {
        var fsex = document.getElementsByName('radsex')
        var idade = ano - Number(fano.value)
        res.innerHTML = `Idade calculada: ${idade}`
        var genero = ''
        var img = document.createElement('img')
        img.setAttribute('id', 'foto')
        if (fsex[0].checked) {
            genero = 'homem'
            if (idade >= 0 && idade < 10) {
                img.setAttribute('src', 'imgs/foto-bebe-m.png')
            } else if (idade < 21) {
                img.setAttribute('src', 'imgs/foto-jovem-m.png')
            } else if (idade < 60) {
                img.setAttribute('src', 'imgs/foto-adulto-m.png')
            } else {
                img.setAttribute('src', 'imgs/foto-idoso-m.png')
            }
        } else if (fsex[1].checked) {
            genero = 'mulher'
            if (idade >= 0 && idade < 10) {
                img.setAttribute('src', 'imgs/foto-bebe-f.png')
            } else if (idade < 21) {
                img.setAttribute('src', 'imgs/foto-jovem-f.png')
            } else if (idade < 60) {
                img.setAttribute('src', 'imgs/foto-adulto-f.png')
            } else {
                img.setAttribute('src', 'imgs/foto-idoso-f.png')
            }
        }
        res.innerHTML = `Detectamos ${genero} com ${idade} anos.`
        res.appendChild(img)
    }
}