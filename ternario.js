const saldo = 1;

if (saldo===1) {
    console.log(`Voce tem ${saldo} real`);
}else{
    console.log(`Voce tem ${saldo} reais`);
}

//simplificando com ternario
const novoSaldo = 10
const unidade = (novoSaldo === 1 ? "real" : "reais");

console.log(`Voce tem ${novoSaldo} ${unidade}`);
