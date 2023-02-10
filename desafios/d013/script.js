function lancarNotas() {
    let res = document.getElementById('resultado')
    let aluno = prompt(`Qual é o nome do aluno?`)
    let nota1 = Number(prompt(`Primeira nota de ${aluno}:`))
    let nota2 = Number(prompt(`Segunda nota de ${aluno}:`))
    let media = (nota1 + nota2) / 2

    res.innerHTML = `<h3>Analisando a situação de ${aluno}...</h3>`

    if (media > 6 && media <= 10) {
        res.innerHTML += `<p>Com as notas ${nota1.toFixed(2)} e ${nota2.toFixed(2)}, a média é ${media.toFixed(2)}.</p>`
        res.innerHTML += `<p>Com média acima de 6, o aluno está <strong>APROVADO.</strong></p>`
    } else if (media >= 3 && media <= 6) {
        res.innerHTML += `<p>Com as notas ${nota1.toFixed(2)} e ${nota2.toFixed(2)}, a média é ${media.toFixed(2)}.</p>`
        res.innerHTML += `<p>Com média entre 3 e 6, o aluno está em <strong>RECUPERAÇÃO.</strong></p>`
    } else {
        res.innerHTML += `<p>Com as notas ${nota1.toFixed(2)} e ${nota2.toFixed(2)}, a média é ${media.toFixed(2)}.</p>`
        res.innerHTML += `<p>Com média abaixo de 3, o aluno está <strong>REPROVADO.</strong></p>`
    }
}