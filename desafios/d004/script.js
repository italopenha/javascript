function comprarProduto() {
    let produto = prompt(`Que produto você está comprando?`)
    let preco = prompt(`Quanto custa ${produto} que você está comprando?`)
    let pagamento = prompt(`Qual foi o valor que você deu para pagar ${produto}?`)
    alert(`Você comprou ${produto} que custou R$${preco}.
    Deu R$${pagamento} em dinheiro e vai receber R$${pagamento-preco} de troco.
    Volte sempre!`)
}