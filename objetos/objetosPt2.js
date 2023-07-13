//criando objeto dentro de outro objeto
const pessoa = {
    nome: "Ana Paula",
    altura: 1.65,
    peso:60,
    carro:{
        marca:"Honda Civic",
        modelo:"HRV",
        cor:"Prata",
        ano:2018
    }
};

//mostrar o objeto carro
console.log(pessoa.carro);

//mostrar uma propriedade de carro
console.log(pessoa.carro.ano);

// outra forma de escrever um objeto dentro de outro é armazenar em variaveis diferentes e chama-la dentro do objeto
const cores={
    vermelho:'#FF473A',
    amarelo:'#FFD900',
    azul:'#0D47A1'
};

const outrasCores = {
    branco : '#FFFFFF',
    preto   :'#000000',
    cinza   :'#CCCCCC',
    maisCores : cores
}
//ira mostrar os dois objetos
console.log(outrasCores);

//para criar um atalho poderia ser escrito assim
const maisCores = {
    branco : '#FFFFFF',
    preto   :'#000000',
    cinza   :'#CCCCCC',
    cores
}
//mostrará o mesmo resultado
console.log(maisCores);