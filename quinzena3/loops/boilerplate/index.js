console.log("Oie, eu só sirvo pra saber se as coisas funcionaram!")

/*
1. o código esta somando i a variavel valor isso se repete enquanto i for menor que 5, no final é mostrado o valor total da soma.
resultado impresso é 10.

2. a. Será impresso todos numeros maiores que 18
b. sim, for of é suficiente.
*/

//1.
const array = [80, 30, 130, 40, 60, 21, 70, 120, 90, 103, 110, 55]

//a.
for (let numero of array) {
    console.log(numero)
}

//b.
for (let numero of array) {
    console.log(numero/10)
}

//c.
let pares = []
for (let verificador of array) {
    if (verificador % 2 === 0) {
        pares.push(verificador)
    }
}
console.log(pares)

//d.
let frases = []
for (let i = 0; i < array.length; i++) {
    let palavra = String(array[i])
    frases.push("O elemento do index " + i + " é: " + palavra)
}
console.log(frases)

//e.
let valorMax = 0
let valorMin = 1000
for (let i = 0; i < array.length; i++) {
    if (valorMax < array[i]) {
        valorMax = array[i]
    }
    if (valorMin > array[i]) {
        valorMin = array[i]
    }
}
console.log("o mario numero é ", valorMax, " e o menor numero é ", valorMin)
