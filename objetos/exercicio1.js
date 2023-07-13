let pessoa = {
    nome: 'José',
    idade: 30,
    altura:1.73,
    cnh:false,
    apelidos: 'Jr, Juninho'
}

if(pessoa.cnh == true) {
    console.log(`${pessoa.nome} tem ${pessoa.idade} anos, ${pessoa.altura} de altura, possui CNH e os seguintes apelidos ${pessoa.apelidos}`);
}else{
    console.log(`${pessoa.nome} tem ${pessoa.idade} anos, ${pessoa.altura} de altura, não possui CNH e os seguintes apelidos: ${pessoa.apelidos}`);
}