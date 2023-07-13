
//exercicio1
const pessoaObj = {
    nome:'Ana',
    idade: 25,
    profissao: 'professora',
    altura: 1.65
}

function pessoaDados(pessoa) {
    console.log(`Ola! Meu nome é ${pessoa.nome}, sou uma jovem de ${pessoa.idade} anos, ${pessoa.altura}m de altura e sou ${pessoa.profissao}`);
}

pessoaDados(pessoaObj)


// //exercicio2
function idades(idade) {

    if (idade<=18) {
        return 'jovem'
    }else if (idade<=65) {
        return 'adulto(a)'
    }else{
        return 'idoso(a)'
    }
}

const imprimirIdades = idades(66)

console.log(imprimirIdades);

//exercicio3
const pessoa1 = {
    nome:'Ana',
    idade: 25,
    profissao: 'professora',
    altura: 1.65
}

const idadePessoa = pessoa1.idade
function faixa() {
    if (idadePessoa <=18) {
        return 'jovem'
    }else if (idadePessoa<=65) {
        return 'adulto(a)'
    }else{
        return 'idoso(a)'
    }
}

const retornoFaixaEtaria = faixa()

function faixaEtaria() {
    return `Ola! Meu nome é ${pessoa1.nome}, sou um(a) ${retornoFaixaEtaria} de ${pessoa1.idade} anos, ${pessoa1.altura}m de altura e sou ${pessoa1.profissao}`
}

const imprimir = faixaEtaria()
console.log(imprimir);