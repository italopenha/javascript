/* Acessando elementos no DOM */

/* Por marca (TAG):

var p1 = document.getElementsByTagName('p')[1]
document.write("Este é o meu segundo parágrafo: " + p1.innerHTML)

Por ID:
var d = document.getElementById('msg')
d.style.background = 'green'
d.innerText(`Estou aguardando...`)

Por Nome:
var d2 = document.getElementsByName('msg2')[0]
d2.innerText = 'Olá'

Por classe: 
var d3 = document.getElementsByClassName('msg3')[0]
d3.style.color = 'green' */

var d4 = document.querySelector('div#teste')
d4.style.color = 'blue'
