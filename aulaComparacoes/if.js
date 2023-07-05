const idade = 15;
const maior = "É maior de idade"
const menor = "É menor de idade"

if (idade >=18) {
    console.log(maior);
}else{
    console.log(menor);
}

//sem as chaves, não aconselhado
const novaIdade = 18;
if (novaIdade>=18) 
    console.log(maior);
else 
    console.log(menor);

//if else
const outraIdade = 12;
if (outraIdade < 18) {
    console.log("menor de idade");
}else if(outraIdade <= 65){
    console.log("adulta");
}else{
    console.log("idoso") ;
}