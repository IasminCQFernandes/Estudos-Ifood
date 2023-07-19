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






//callback = função que recebe como argumento outra função
const imprimirNome = (nome) =>{
    console.log(nome);
}


//setTimeout - cria um dalay antes de chamar a função

setTimeout(imprimirNome('iasmin'), 2000)
//é possivel chamar uma função dentro de outra

setTimeout(() =>{
    console.log('teste');
}, 1000)
//tambem é possivel criar uma arrow função dentro da outra

setTimeout(function teste(){
    console.log('teste');
}, 1000)
//tambem é possivel criar uma função comum



//every testa todos os elementos e se todos os elementos condizer com o parametro passado ele retorna true, caso algum não condiza retorna false
const frutas = ['abacaxi', 'maça', 'banana', 'melancia']

const resultado = frutas.every(function resultado(elemento) {
    return elemento === 'banana';
    
})

console.log(resultado);

//setInterval = chama a função diversas vezes durante um tempo definido
setInterval(function saudacao(){
    console.log('ola');
}, 2000)


//exercicio
const usuarios = [
    {nome: "Ian", 
    idade:25},

    {nome: "Iasmin", 
    idade:21},

    {nome: "Ana", 
    idade:18},

    {nome: "Lara", 
    idade:18},

]

const fiscalizarFesta = (arrayObj) => {
    const resultado = arrayObj.every((elemento) => {
        return elemento.idade> 17
    });

    if(resultado){
        console.log('Festa liberada!');
    }else{
        console.log("Não podemos festar");
    }
}

fiscalizarFesta(usuarios)



//some testa todos os elementos e se pelo menos um dos elementos condizer com o parametro passado ele retorna true, caso algum não condiza retorna false
const frutas2 = ['abacaxi', 'maça', 'banana', 'melancia']

const resultadoSome = frutas2.some(function resultado(elemento) {
    return elemento === 'banana';
    
})
console.log(resultadoSome)

//exercicio
const arquivos =[
    'teste.txt',
    'foto.png',
    'contrato.doc',
    'instalador.bat'
]

const antiVirus = (arrayArquivos) =>{
    const resultado = arrayArquivos.some((arquivo)=>{
        const existeExtensao = arquivo.indexOf('.bat')

        return existeExtensao !== -1 
    })

    if (resultado) {
        console.log('virus detectado');
    }else{
        console.log('sem virus');
    }
}
antiVirus(arquivos)


//find retorna os dados de uma ocorrencia ou seja retorna o mesmo se encontrar caso não encontre retorna um undefined
const novosUsuarios = [
    {nome: "Ian", 
    idade:25},

    {nome: "Iasmin", 
    idade:21},

    {nome: "Ana", 
    idade:18},

    {nome: "Lara", 
    idade:18},

]

const novoResultado = novosUsuarios.find((novosUsuarios) => {
    return novosUsuarios.nome === 'Ian'
})
console.log(novoResultado);

//findIndex - encontra e retorna o index onde encontrar 
const novoResultado2 = novosUsuarios.findIndex((novosUsuarios) => {
    return novosUsuarios.nome === 'Ian'
})
console.log(novoResultado2);


//filter - cria um novo array sem alterar o original, com os elementos com base na condição callback passada no argumento
const numerosArray = [1,2,3,4,5,6,7,8,9,0]

const resultadoNumeros = numerosArray.filter((numero)=>{
    return numero <= 3;
})

console.log(resultadoNumeros);

//map = para cada elemento do array retorna um novo array, com os resultados da função passada como parâmetro
const numerosMap = [2,4,6]
const novoArray = numerosMap.map((numero)=>{
    return numero*2
})
console.log(novoArray);