/* EXERCICIOS DE INTERPRETAÇÃO DE CODIGO

1. Função para converter de dólar para real, 
o console log ira mostrar o valor 100 multiplicado pelo valor da cotação que deve ser informada pelo usuário.

2. Função para retornar valor investido em determinado produto financeiro, informando o tipo de produto seguido da quantia a ser investida.
o primeiro console log irá mostrar o resultado de 150 * 1,1 = 165
o segundo  console log irá mostrar tipo de investimento informado incorreto

3. O loop irá formar dois novos arrays  a partir do array números, um constando os números pares e outro de números ímpares.
os console logs irão mostrar a quantidade total de elementos em cada um dos arrays.

4. O loop irá armazenar em duas variáveis o menor e maior elemento do array respectivamente.
o console log irá imprimir -10 e 1590 respectivamente.

*/

// EXERCICIOS DE LOGICA DE PROGRAMAÇÃO

//1.
// let lista = ["caneca", "copo", "celular", "carteira", "carro"]
// let i = 0

// while (i < lista.length ) {
//     console.log(lista[i])
//     i++
// }


// for (let index = 0; index < lista.length; index++) {
//     console.log(lista[index])
    
// }


// for (let i of lista) {
//     console.log(i)   // no for of o i é o elemento do array
// }

//2.
//a. false 
//b. true
//c. true
//d. true
//e. true

//3.
// para o codigo funcionar foi necessário declarar a variavel N (quantidadeDeNumerosPares), no caso adicionei o prompt,
// Adicionalmente mudei <= para < para que retornasse quantidade de numeros de acordo com o enunciado
// Adicionado também incremento no while para previnir loop infinito
// const quantidadeDeNumerosPares = Number(prompt("informe um numero"))
// let i = 0
// while(i < quantidadeDeNumerosPares) {
//   console.log(i*2)
//   i++
// }

const quantidadeDeNumerosPares
let i = 0
while(i <= quantidadeDeNumerosPares) {
  console.log(i*2)
}




//4.
// let ladoA = Number(prompt("informe primeiro angulo do triangulo"))
// let ladoB = Number(prompt("informe segundo angulo do triangulo"))
// let ladoC = 180 - (ladoA + ladoB)

// if (ladoA && ladoB && ladoC === 60) {
//     console.log(`Os angulos do triangulo são: ${ladoA}, ${ladoB}, ${ladoC}. É um triangulo equilatero.`)
// } else if (ladoA === ladoB && ladoC !== ladoA && ladoC !== ladoB ) {
//     console.log(`Os angulos do triangulo são: ${ladoA}, ${ladoB}, ${ladoC}. É um triangulo isoceles.`)
// } else if (ladoA === ladoC && ladoB !== ladoA && ladoB !== ladoC) {
//     console.log(`Os angulos do triangulo são: ${ladoA}, ${ladoB}, ${ladoC}. É um triangulo isoceles.`)
// } else if (ladoB === ladoC && ladoA !== ladoB && ladoA !==  ladoC) {
//     console.log(`Os angulos do triangulo são: ${ladoA}, ${ladoB}, ${ladoC}. É um triangulo isoceles.`)
// } else {
//     console.log(`Os angulos do triangulo são: ${ladoA}, ${ladoB}, ${ladoC}. É um triangulo escaleno.`)
// }

//5.

// function comparaNumero(numero1, numero2) {
//     if (numero1 > numero2) {
//         console.log(`o maior numero é ${numero1}`)
//     } else {
//         console.log(`o maior numero é ${numero2}`)
//     }
//     if (numero1 % numero2 === 0) {
//         console.log(`${numero1} é divisivel por ${numero2}`)
//     } else {
//         console.log(`${numero1} não é divisivel por ${numero2}`)
//     }
//     if (numero2 % numero1 === 0) {
//         console.log(`${numero2} é divisivel por ${numero1}`)
//     } else {
//         console.log(`${numero2} não é divisivel por ${numero1}`)
//     }
//     if (numero1 - numero2 < 0) {
//         console.log(`a diferença entre eles é ${(numero1 - numero2) * (-1)}`)
//     } else {
//         console.log(`a diferença entre eles é ${(numero1 - numero2)}`)
//     }
// }

// comparaNumero(Number(prompt("informe primeiro numero")),Number(prompt("informe segundo numero")) )

// EXERCICIO DE FUNÇÕES

//1.
//melhore o codigo desse exercicio
// console.log("melhore essa resposta")

// const numeros = [10 , 222 , 30, 4 , 5 , 6]
// let segundoMaior = 0
// let segundoMenor = 999999999
// let maiorNumero = 0
// let menorNumero = 999999999

// function segundoMaiorEMEnor(array) {
//     for (let index = 0; index < array.length; index++) {
//         if (maiorNumero < array[index]) {
//             maiorNumero = array[index]
//         }
//         if (segundoMaior < array[index - 1] && array[index - 1] !== maiorNumero) {
//             segundoMaior = array[index - 1]
//         }
//     }
//     console.log(maiorNumero, segundoMaior)

//     for (let index = 0; index < array.length; index++) {
//         if (menorNumero > array[index]) {
//             menorNumero = array[index]
//         }
//         if (segundoMenor > array[index - 1] && array[index - 1] !== menorNumero) {
//             segundoMenor = array[index - 1]
//         }
//     }
//     console.log(menorNumero, segundoMenor)

// }

// segundoMaiorEMEnor(numeros)

// function segundoMaiorEMEnor(array) {
//     console.log(array)
//     for (let index = 0; index < array.length; index++) {
//         if (maiorNumero < array[index]) {   // pega maior elemento do array
//             maiorNumero = array[index]
//             array.splice(index, 1)     // remove maior elemento
//             if (segundoMaior < array[index]) {  // pega o segundo maior elemento
//                 segundoMaior = array[index] 
//             }
//             array.push(maiorNumero)  // adiciona o maior elemento de volta ao array
//         }
//         if (menorNumero > array[index]) {   // pega menor elemento do array
//             menorNumero = array[index]
//             array.splice(index, 1)     // remove menor elemento
//             if (segundoMenor > array[index]) {  // pega o segundo menor elemento
//                 segundoMenor = array[index] 
//             }
//             array.push(menorNumero)  // adiciona o menor elemento de volta ao array
//         }
//     }
//     console.log(segundoMaior)
//     console.log(segundoMenor)
//     console.log(array)
// }

// segundoMaiorEMEnor(numeros)

//2.

// let helloWorld = () => {
//     return alert("Hello World!")
// }

// helloWorld()

// EXERCICIOS DE OBJETOS

//1. Utillizamos arrays para guardar uma lista de elementos, quando queremos guardar caracteristicas de um elemento usamos objetos.

//2.

// function criaRetangulo(lado1, lado2) {
//     return retangulo = {
//         largura: lado1,
//         altura: lado2,
//         perimetro: 2*(lado1 + lado2),
//         area: lado1 * lado2
//     }
// }

// criaRetangulo(Number(prompt("informe largura")), Number(prompt("informe altura")))

// console.log(retangulo)

//3.

// let filmeFavoritoAtual = {
//     titulo: "Interestelar",
//     diretor: "Christopher Nolan",
//     elenco: ["Anna Hathaway", "Mathew McConaughey", "Michael Caine", "Matt Damon"]
// }

// console.log(`Venha assistir ao filme ${filmeFavoritoAtual.titulo}, dirigido por ${filmeFavoritoAtual.diretor}, estrelado por: ${filmeFavoritoAtual.elenco}.`)

// //4.

// let pessoa = {
//     nome: "Fulano da Silva Sauro",
//     idade: "33",
//     email: "fulano@seila.com",
//     endereco: "onde judas perdeu as botas"
// }

// let pessoaAnonima = {
//     ... pessoa,
//     nome: "Anonimo"
// }

// console.log(pessoaAnonima)
// console.log(pessoa)

//EXERCICIOS DE FUNÇÃO DE ARRAY

//1.

// let pessoas = [
//     { nome: "Pedro", idade: 20 },
// 	{ nome: "João", idade: 10 },
// 	{ nome: "Paula", idade: 12 },
// 	{ nome: "Artur", idade: 89 } 
// ]

// //a.

// let maioresDe20 = pessoas.filter((elemento) => {
//     return elemento.idade >= 20
// })

// console.log(maioresDe20)

// //b.

// let menoresDe20 = pessoas.filter((elemento) => {
//     return elemento.idade < 20
// })

// console.log(menoresDe20)

// //2. 
// //a.
// let array = [1, 2, 3, 4, 5, 6]


// const multiplicaPor2 = array.map((elemento) => {
//     return elemento = elemento * 2
// })

//  console.log(multiplicaPor2)

// //b.
// const stringsPor3 = array.map((elemento) => {
//     return String(elemento * 3)
// })

//  console.log(stringsPor3)

// //c.
// const parOuImpar = array.map((elemento) => {
//     if (elemento % 2 === 0) {
//         return `${elemento} é par`
//     } else {
//         return `${elemento} é impar`
//     }
// })

// console.log(parOuImpar)

//3.
// const pessoas = [
// 	{ nome: "Paula", idade: 12, altura: 1.8},
// 	{ nome: "João", idade: 20, altura: 1.3},
// 	{ nome: "Pedro", idade: 15, altura: 1.9},
// 	{ nome: "Luciano", idade: 22, altura: 1.8},
// 	{ nome: "Artur", idade: 10, altura: 1.2},
// 	{ nome: "Soter", idade: 70, altura: 1.9}
// ]

// //a.
// const autorizados = pessoas.filter ((elemento) => {
//     return elemento.altura >= 1.5 && elemento.idade > 14 && elemento.idade < 60
// })

// console.log(autorizados)

// //b.
// const barrados = pessoas.filter ((elemento) => {
//     return elemento.altura < 1.5 || elemento.idade <= 14 || elemento.idade >= 60
// })

// console.log(barrados)

// //4.
// const consultas = [
// 	{ nome: "João", genero: "masculino", cancelada: true, dataDaConsulta: "01/10/2019" },
// 	{ nome: "Pedro", genero: "masculino", cancelada: false, dataDaConsulta: "02/10/2019" },
// 	{ nome: "Paula", genero: "feminino", cancelada: true, dataDaConsulta: "03/11/2019" },
// 	{ nome: "Márcia", genero: "feminino", cancelada: false, dataDaConsulta: "04/11/2019" }
// ]

// let tratamento = []
// let emails = []

// function tratamentoGenero(genero) {
//     tratamento = []
//     if (genero === "masculino") {
//         tratamento.push("Sr.", "lembrá-lo") 
//     } else {
//         tratamento.push("Sra.", "lembrá-la")         
//     }
// }

// function emailTemplate(array) {
//     if (array.cancelada === false) {
//         emails.push(`Olá, ${tratamento[0]} ${array.nome}. Estamos enviando esta mensagem para ${tratamento[1]} da sua consulta no dia ${array.dataDaConsulta}. Favor confirmar recebimento.`)
//     } else {
//         emails.push(`Olá, ${tratamento[0]} ${array.nome}. Sua consulta no dia ${array.dataDaConsulta} foi cancelada. Gentileza entrar em contato para remarcar.`)        
//     }
// }

// for (const elemento of consultas) {
//     tratamentoGenero(elemento.genero)
//     emailTemplate(elemento)
// }

// console.log(emails)

// //5.
// const contas = [
// 	{ cliente: "João", saldoTotal: 1000, compras: [100, 200, 300] },
// 	{ cliente: "Paula", saldoTotal: 7500, compras: [200, 1040] },
// 	{ cliente: "Pedro", saldoTotal: 10000, compras: [5140, 6100, 100, 2000] },
// 	{ cliente: "Luciano", saldoTotal: 100, compras: [100, 200, 1700] },
// 	{ cliente: "Artur", saldoTotal: 1800, compras: [200, 300] },
// 	{ cliente: "Soter", saldoTotal: 1200, compras: [] }
// ]

// contas.forEach(element => {
//     let debito = 0
//     for (const compra of element.compras) {
//         debito += compra
//     }
//     element.saldoTotal -= debito 
// });

// console.log(contas)