/* 
exercício 1 
a = 10
b = 10

console.log(b)
R: 10

b = 5
console.log(a, b)
R: 10 5

exercício 2
a = 10
b = 20
c = a
b = c
a = b

console.log(a, b, c)
R: 10 10 10
*/


//exercicio 1
let nome
let idade
console.log(typeof(nome, idade))
// variável indefinida pois não foi atribuído nenhum dado a elas

nome = prompt("Qual seu nome?")
idade = prompt ("qual sua idade?")
console.log(nome, idade)
console.log(typeof(nome, idade))
// notei que as duas variáveis são identificadas como string
console.log("Olá", nome, ", você tem ", idade, " anos")


//exercicio 2
let aposento
let corCamisa
let fazendoAgora
let gostariaDeFazer
let consequencia

aposento = prompt ("Em qual comodo da casa você esta?")
corCamisa = prompt ("Qual é a cor da blusa que esta vestindo agora?")
fazendoAgora = prompt ("O que você esta fazendo agora?")
gostariaDeFazer = prompt ("Mas gostaria de estar fazendo o que?")
consequencia = prompt ("E qual seria a consequência se deixasse de fazer o que está fazendo agora para fazer o que gostaria fazer?")

console.log("1.Em qual comodo da casa você esta?")
console.log("Resposta: ", aposento )
console.log("2.Qual é a cor da blusa que esta vestindo agora? ")
console.log("Resposta: ", corCamisa)
console.log("3.O que você esta fazendo agora? ")
console.log("Resposta: ", fazendoAgora)
console.log("4.Mas gostaria de estar fazendo o que?")
console.log("Resposta: ", gostariaDeFazer)
console.log("5.E qual seria a consequência se deixasse de fazer o que está fazendo agora para fazer o que gostaria fazer?")
console.log("Resposta: ", consequencia)
console.log("Estou no(a)", aposento, "vestindo uma blusa", corCamisa, "fazendo", fazendoAgora, "mas gostaria de estar", gostariaDeFazer, "porém sei que isso iria", consequencia )


//exercicio 3
let comidaFavorita = ["macarrão", "lasanha", "pizza", "sushi", "hamburguer", "churrasco"]

console.log(comidaFavorita)
console.log("Essas são minhas comidas favoritas")
console.log(comidaFavorita[0])
console.log(comidaFavorita[1])
console.log(comidaFavorita[2])
console.log(comidaFavorita[3])
console.log(comidaFavorita[4])
console.log(comidaFavorita[5])

comidaFavorita[1] = prompt ("Qual a sua comida favorita?")

console.log(comidaFavorita)

//exercicio 4
let perguntas = ["O sol é azul?", "Você tem carro?", "Você usa óculos?"]
let respostas = [false, false, true]

respostas[0] = prompt (perguntas[0])
respostas[2] = prompt (perguntas[1])
respostas[1] = prompt (perguntas[2])

console.log(perguntas[0], respostas[0])
console.log(perguntas[1], respostas[1])
console.log(perguntas[2], respostas[2])
console.log(typeof (respostas))

