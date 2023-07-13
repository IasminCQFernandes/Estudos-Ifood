//criando objeto, conjunto de variaveis
const pessoa = {
    nome: "Ana Paula",
    altura: 1.65,
    peso:60
};
console.log(pessoa);

//exibir apenas uma propriedade desse objeto
console.log(pessoa.peso);

//pode alterar a propriedade de um objeto
pessoa.peso = 65

console.log(pessoa.peso);

console.log(`meu nome é: ${pessoa.nome}, tenho ${pessoa.altura}m de altura e peso ${pessoa.peso}kg`);


//outra forma de acessar a propriedade do objeto
pessoa['nome'] = 'vinicius'
console.log(pessoa.nome);