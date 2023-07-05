const valor = 100
const parcelas = -12

if (parcelas === 1) {
    const desconto = valor*0.1
    console.log(`sua compra será a vista e terá 10% de desconto, ficando ${valor - desconto} total!`);
}else if (parcelas>=2 && parcelas<=6){
    //parcelas sem juros
    const total = valor/parcelas
    console.log(`serão ${parcelas} parcelas, no valor de ${total.toFixed(2)} cada sem juros!`);
}
else if(parcelas>=7 && parcelas<=12){
    const valorJuros = (valor * (1+1/100)**parcelas).toFixed(2);
    let precoParcela = (valorJuros / parcelas).toFixed(2)
    console.log(`ira pagar ${parcelas}x de ${precoParcela} devido aos juros`)
}else{
    console.log("Invalido");
}