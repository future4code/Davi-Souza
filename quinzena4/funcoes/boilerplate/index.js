console.log("Oie, eu só sirvo pra saber se as coisas funcionaram!")

/*
1.
a. 10 e 50
b. A função continuaria a fazer o que ela se propõe a fazer porem nada seria impresso no console, visto que não foi dado comando para isso.

2.
a. Darvas e Goli
b. Amanda e caio

3. A função metodo armazena em um array os quadrados de números pares. Poderia ser chama de quadradoDosPares, não sei para que seria a utilidade dela.
*/

//4.a.
function apresentacao() {
    console.log("Davi, 34 anos, moro em vitória-ES, aspirante a front-end dev")
}

apresentacao()

//4.b.
function novaApresentacao(nome,idade,cidade,estudando) {
    if (estudando) {
        console.log(`Sou ${nome}, tenho ${idade} anos, moro em ${cidade}, sou estudante`)
    } else {
        console.log(`Sou ${nome}, tenho ${idade} anos, moro em ${cidade},  não sou estudante`)
    }
}

novaApresentacao("Jubiscleusa", 3, "casa du supai", true)

//5.a.
function somaDoisNumeros(numero1, numero2) {
    const resultado = numero1 + numero2
    return resultado
}

console.log(somaDoisNumeros(1, 10))

//5.b.
function maiorOuIgual(numero1, numero2) {
    if (numero1 > numero2) {
        console.log(`${numero1} é maior que ${numero2}`)
    } else if (numero1 === numero2) {
        console.log(`${numero1} é igual a ${numero2}`)
    } else {
        console.log(`${numero1} é menor que ${numero2}`)
    }  
}

maiorOuIgual(2, 4)
maiorOuIgual(4, 4)
maiorOuIgual(8, 4)

//5.c.
function repeticaoChata(suaFraseChata) {
    for (let repeticao = 0; repeticao < 10; repeticao++) {
        console.log(suaFraseChata)
    }
}

repeticaoChata("serio que tem q repetir isso 10x?")

//6.a.

const arrayDoExercicio = [10, 23, 45, 78, 90, 52, 35, 67, 84, 22]

function quantidadeElementos(array) {
    console.log(array.length)
}

quantidadeElementos(arrayDoExercicio)

//6.b.

function numeroPar(numero) {
    return numero % 2 === 0
}

numeroPar(2)
numeroPar(3)

//6.c.

function elementospares(array) {
    let numerosPares = []
    for (const elemento of array) {
        if (elemento % 2 === 0) {
            numerosPares.push(elemento)
        }  
    }
    console.log(numerosPares.length)
}

elementospares(arrayDoExercicio)

//6.d.

function funcaopares(array) {
    let numerosPares = []
    for (const elemento of array) {
        if (numeroPar(elemento)) {
            numerosPares.push(elemento)
        }
    }
    console.log(numerosPares.length)
}

funcaopares(arrayDoExercicio)