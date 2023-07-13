let pessoa = {
    nome: 'José',
    idade: 30,
    altura:1.73,
    cnh:true,
    apelidos: 'Jr, Juninho'
}

let textoCNH = (pessoa.cnh ? "Possui CNH" : "Não possui CNH")

if(pessoa.cnh == true) {
    console.log(`${pessoa.nome} tem ${pessoa.idade} anos, ${pessoa.altura} de altura, ${textoCNH} e os seguintes apelidos ${pessoa.apelidos}`);
}else{
    console.log(`${pessoa.nome} tem ${pessoa.idade} anos, ${pessoa.altura} de altura, ${textoCNH} e os seguintes apelidos: ${pessoa.apelidos}`);
}