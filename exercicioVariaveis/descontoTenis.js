const precoTenis = 129.99;

const dinheiro = 80.00;

const desconto = precoTenis - dinheiro;

const cupom = 100 * desconto / precoTenis;

console.log(`${cupom.toFixed(2)}% de desconto`);