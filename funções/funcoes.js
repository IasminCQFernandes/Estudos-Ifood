
//um bloco de codigo que executa uma tarefa especifica, podendo ser reutilizado

function imprimeOla() {//declarar
    console.log('olá!');
}

imprimeOla()//chamar


//função com parametro
function pessoa(pessoa) {//declarar
    console.log('olá, ' + pessoa);
}

pessoa('jose!')//chamar
pessoa('maria!')
pessoa('ana!')

//funçãoes com mais de um parametro
function olaIdade(nome, idade) {//declarar
    console.log(nome + idade);
}

olaIdade('iasmin: ', 20)//chamar


//função com retorno
function verificarIdade(idade) {
    if (idade>=18) {
        return true;//para aqui, nada depois é executadol
    }else{
        return false;
    }
}
const valorRetornadoDaFuncao = verificarIdade(20)
console.log(valorRetornadoDaFuncao);



//escopo - uma variavel só funcionar dentro do seu proprio escopo ou seja dentro das {}onde ela foi declarada



//arrow function
function soma(x, y) { //padrão
    //codigo
    const resultado = x+y
    return resultado
}

const soma = (x, y) => { //arrow function
    const resultado = x+y
    return resultado
}

//hoisting - içamento das funções tradicionais, por isso não há problema em chamar a função antes de declarar

//DRY - não repetir o mesmo codigo, o mais aconselhado colocar numa função para reutilizar quando necessario


//metodo - função dentro de um objeto
const pessoa2 = {
    nome: 'jose',
    saudacao: function () { 
        //sem nome pois o nome da função passa a ser o nome no objeto
        
        console.log('olá, ' + this.nome);//puxa os dados do objeto em que a função está
    }
}

pessoa2.saudacao()