const temIngresso = true;
const censura = 16;
const idade =  16;

if (temIngresso === true && idade>=censura ) {
    console.log("Pode entrar!");
}else{
    console.log("Não pode entrar!");
}

//outro cinema
const ingresso = true;
const idadeCensura = 16;
const novaIdade = 15;
const acompanhado = false;

if(temIngresso && novaIdade >= idadeCensura || acompanhado === true){
    console.log('Você poderá assistir ao filme!');
}else{
    console.log('Infelizmente você não terá direito de assitir.');
}

//negação
if (!ingresso) {
    console.log("sem ingresso");
}else{
    console.log("tem ingresso");
}
