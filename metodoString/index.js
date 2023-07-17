//metodo string

const texto = ' ola mundo bonito! '

//metodo length - tamanho do string
console.log(texto.length)



//metodo includes - procura algo dentro do string, retorna true ou false
console.log(texto.includes('bola'))
console.log(texto.includes('ola'))

//indexOf - retorna onde está o que procura e retorna o indice, caso não encontre ele retorna -1
console.log(texto.indexOf('a'))
console.log(texto.indexOf('b'))

//exercicio email
const email = 'iasmingmail.com'

  if(email.includes('@') && email.includes('.')){
    console.log('email cadastrado!')
  }else{
    console.log('email invalido!')
  }

//lastIndexOf - procura um item dentro da string de tras para frente, ou seja encontra o ultimo ao inves do primeiro
console.log(texto.lastIndexOf('o'))

//slice - retorna parte de um string, de uma parte ate outra ou de um inicio determinado em diante
console.log(texto.slice(2,6))

//exercicio slice

const cidade = 'belo horizonte - MG'

const penultimo = cidade.length-2
const estado = cidade.slice(penultimo)

console.log(estado)


//replace - substitui algo or outro
console.log(texto.replace('mundo', 'mundinho!'))


//exercicio replace
const valor = '100.75'
const virgula = valor.replace('.', ',')

console.log(virgula)

//exercicio replaceAll, altera todos as virgulas por pontos
const outroValor = '1,350,000'
const ponto = outroValor.replaceAll(',', '.')
console.log(ponto)

//toUpperCase - transforma tudo em maiuscula
console.log(texto.toUpperCase())


//toLowercase - transforma tudo em minuscula
console.log(texto.toLowerCase())


//trim - remove espaçoes em branco no inicio e fim de uma string
console.log(texto.trim())


//padStart - preenche o inicio da string com  o caractere determinado ate que atinja o tamanho determinado
console.log(texto.padStart(30, 'abc'))


//exercicio  

function imprimirData(dia, mes, ano){
  
const diaFormatado = String(dia).padStart(2, '0')

const mesFormatado = String(mes).padStart(2, '0')

  console.log(`${diaFormatado}/${mesFormatado}/${ano}`)
}

imprimirData(1,1,2001)

//split - transforma string em array
const split = texto.split(' ')
console.log(split)



//exercicio
const nomes = 'jose messsias junior'

const arrayNomes = nomes.split(' ')

let formatado = ''
for(let item of arrayNomes){
  let primeiraLetra = item.slice(0,1)

  let restante = item.slice(1)

  formatado += primeiraLetra.toUpperCase() + restante + ' '
}

  console.log(formatado)
