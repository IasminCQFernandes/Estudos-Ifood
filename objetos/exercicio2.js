const produtos = [
    {
        nomeProduto:'Livro',
        valorUnidade: 25.90,
        quantidade:5
    },

    {
        nomeProduto: 'Almoço',
        valorUnidade: 40.90,
        quantidade:1
    }, 
        
    {
        nomeProduto: 'Calça',
        valorUnidade: 75.75,
        quantidade:1
    }
]
const cartao = {
    nome: "Mauricio",
    idade: 25,
    produtos
        
    
};

console.log(cartao);

//manipular esse objeto
//nome cliente
console.log(cartao.nome);

//idade
console.log(cartao.idade);

cartao.idade = 35
console.log(cartao.idade);

//nome do primeiro produto
console.log(produtos[0].nomeProduto);

//preco do ultimo produto
console.log(produtos[2].valorUnidade);



let totalPagar = 0;
for (let produto of produtos){
    totalPagar += produto.valorUnidade * produto.quantidade;
}

console.log(`Sr(a): ${cartao.nome}, o total a pagar é ${totalPagar.toFixed(2)}`);