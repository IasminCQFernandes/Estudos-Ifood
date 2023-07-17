//metodo indexOf encontra um item dentro de um array, retorna o indice do primeiro item correspondente encontrado

const texto = ['ola', 'mundo', '!'];

console.log(texto.indexOf('ola'));

//includes - retorna true ou false caso exista ou não o item dentro do array

console.log(texto.includes('ola'));//true
console.log(texto.includes('teste'));//false

//reverse - inverte a ordem do array, modificando o original ou seja se tornam o mesmo
console.log(texto.reverse());

//exercicio
function reverte(texto) {
    const arrayLetras = texto.split("");
    arrayLetras.reverse()


    let textoInvertido = "";
    for(let letra of arrayLetras){
        textoInvertido += letra;
    }
    console.log(textoInvertido);
}

reverte('Amor')



//join - coloca o elemento desejado entre os itens do arrays
console.log(texto.join('-'));

//se colocar somente "" vazias ele une os elementos do array transformando ele numa string
console.log(texto.join(""));

//se usar sem nada, é colocado virgula automaticamente
console.log(texto.join());

//concat - retorna um novo array com a união dos arrays
const a = [1,30]
const b= ["olá", "tudo"]
const c = a.concat(b)
console.log(c);

//slice - pega uma parte sem alterar o original

console.log(c.slice(0,3));



function filtrarDados(numeros) {
    dadosInicio = Math.round(numeros.length * 10/100)
    dadosFim = Math.round(numeros.length * 90/100)
    const resultado = numeros.slice(dadosInicio, dadosFim)

    console.log(resultado);
}
const numeros = [14, 52, 8, 36, 71, 19, 63, 45, 10, 57, 3, 28, 91, 64, 39, 22, 50, 76, 17, 42, 87, 31, 68, 95, 12]

filtrarDados(numeros)


//splice - altera indices de um determinado item do array, modificando o original

const lista = ['a', 'b', 'c', 'd']
lista.splice(1,2,'f')
//altera indice 1, remove 2 posições(o indice 1 e o proximo) e insere o f na nova

console.log(lista);