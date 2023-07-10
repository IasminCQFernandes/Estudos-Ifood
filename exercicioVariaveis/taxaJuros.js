const montante = 90.000;
const capital = 60.000;

const tempo = 24;

const taxa = (montante/capital)**(1/tempo) -1;

console.log(`a taxa foi: ${taxa*100}%`);
