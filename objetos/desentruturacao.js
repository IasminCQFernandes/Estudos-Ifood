const pessoa = {
    nome: 'José',
    idade: 30,
    cidade: 'Salvador',
    profissao: 'Medico',
}

//pegar dados de parte do objeto
const {nome, idade, ...outros} = pessoa;

console.log(nome, idade);
console.log(outros);


//spread ...
const endereco = {
    rua: 'Av. Brasil',
    numero: 1254,
    bairro:'Centro'
}


//fundir objetos com spread
const fundir = {
    ...pessoa,
    ...endereco
};

console.log(fundir);


//desestruturação de array

const array = [1,2,3,4,5,6]

const [a, b, ...resto] = array; //resto deve ser o ultimo

console.log(a,b, resto);