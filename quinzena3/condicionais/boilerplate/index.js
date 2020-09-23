console.log("Oie, eu só sirvo pra saber se as coisas funcionaram!")

/*
1. Testa se o número é par. 
Números com resto igual a zero recebem a mensagem "Passou no teste". 
Número com resto diferente de zero recebem a mensagem "Não passou no teste".

2.
a. Código serve para consultar preço de frutas do supermercado.
b. O preço da fruta Maçã é R$2.25
c. O console iria imprimir o preço determinado em default(5),
pois o código iria continuar rodando até chegar a linha com break ou o fim do código.

3.
a. Transforma o prompt do usuário que é uma string em number.
b. Resposta 10, o console imprime "Esse número passou no teste". 
Resposta -10, nada acontece pois a variável mensagem esta em um bloco filho, e não pode ser acessado.
c. Erro de referencia, mensagem não é definida. 
Isso acontece pois os blocos pais não acessam o conteúdo dentro dos filhos.

*/

/*


//4.
let idade = Number(prompt("Qual a sua idade?"));

if (idade >= 18) {
    console.log("Você pode dirigir!")
} else {
    console.log("Você não pode dirigir!")
}

//5.
let turnoAluno = prompt("Qual turno você estuda? Responda M para matutino, V para vespertino e N para noturno.")

if (turnoAluno === "M") {
    console.log("Bom dia!")
} else if (turnoAluno === "V"){
    console.log("Boa tarde!")
} else if (turnoAluno === "N"){
    console.log("Boa noite!")
} else {
    console.log("Informe turno válido")
}



//6.
let turnoAluno = prompt("Qual turno você estuda? Responda M para matutino, V para vespertino e N para noturno.")

switch (turnoAluno) {
    case "M":
        console.log("Bom dia!")
        break;
    case "V":
        console.log("Boa tarde!")
        break;
    case "N":
        console.log("Boa noite!")
        break;
    default:
        console.log("Informe turno válido")
        break;
}

//7.
let generoFilme = prompt("O Filme é de fantasia?")
let precoIngresso = Number(prompt("Qual o preço do ingresso?"))

if (generoFilme === "Sim") {
    if (precoIngresso <= 15) {
        console.log("Bom filme!")
    } else {
    console.log("Escolha outro filme!")
    }
} else {
    console.log("Escolha outro filme!")
}

//desafio 1
let generoFilme = prompt("O Filme é de fantasia?")
let precoIngresso = Number(prompt("Qual o preço do ingresso?"))

if (generoFilme === "Sim") {
    if (precoIngresso <= 15) {
        let snack = prompt("Qual snack vai comprar?")
        console.log("Bom filme!", "... com ", snack, "!")
    } else {
    console.log("Escolha outro filme!")
    }
} else {
    console.log("Escolha outro filme!")
}

*/

//desafio 2

let nomeCompleto = prompt("Informe seu nome completo")
let tipoJogo =  prompt("Informe tipo do jogo: IN(internacional) DO(domestico)")
let etapaJogo = prompt("Informe etapa do jogo: SF(semi final) DT(decisão 3ºlugar) FN(final)")
let categoria = Number(prompt("Informe categoria: de 1 ao 4"))
let quantIngressos = Number(prompt("Quantos ingressos deseja?"))

let jogoSF = [1320, 880, 550, 220]
let jogoDT = [660, 440, 330, 170]
let jogoFN = [1980, 1320, 880, 330]

let compra = []
compra.push(nomeCompleto)


switch (tipoJogo) {
    case "DO":
        compra.push("domestico")
        compra.push("R$")
        switch (etapaJogo) {
            case "SF":
                compra.push("semifinal")
                switch (categoria) {
                    case 1:
                        compra.push(categoria)
                        compra.push(quantIngressos)
                        compra.push(jogoSF[0])
                        compra.push(jogoSF[0] * quantIngressos)
                        break;
                    case 2:
                        compra.push(categoria)
                        compra.push(quantIngressos)
                        compra.push(jogoSF[1])
                        compra.push(jogoSF[1] * quantIngressos)
                        break;
                    case 3:
                        compra.push(categoria)
                        compra.push(quantIngressos)
                        compra.push(jogoSF[2])
                        compra.push(jogoSF[2] * quantIngressos)
                        break;
                    case 4:
                        compra.push(categoria)
                        compra.push(quantIngressos)
                        compra.push(jogoSF[3])
                        compra.push(jogoSF[3] * quantIngressos)
                        break;
                    default:
                        console.log("Categoria invalida.")
                        break;
                }
                break;
            case "DT":
                compra.push("Decisão 3ºlugar")
                switch (categoria) {
                    case 1:
                        compra.push(categoria)
                        compra.push(quantIngressos)
                        compra.push(jogoSF[0])
                        compra.push(jogoSF[0] * quantIngressos)
                        break;
                    case 2:
                        compra.push(categoria)
                        compra.push(quantIngressos)
                        compra.push(jogoSF[1])
                        compra.push(jogoSF[1] * quantIngressos)
                        break;
                    case 3:
                        compra.push(categoria)
                        compra.push(quantIngressos)
                        compra.push(jogoSF[2])
                        compra.push(jogoSF[2] * quantIngressos)
                        break;
                    case 4:
                        compra.push(categoria)
                        compra.push(quantIngressos)
                        compra.push(jogoSF[3])
                        compra.push(jogoSF[3] * quantIngressos)
                        break;
                    default:
                        console.log("Categoria invalida.")
                        break;
                }
                break;
            case "FN":
                compra.push("Final")
                switch (categoria) {
                    case 1:
                        compra.push(categoria)
                        compra.push(quantIngressos)
                        compra.push(jogoSF[0])
                        compra.push(jogoSF[0] * quantIngressos)
                        break;
                    case 2:
                        compra.push(categoria)
                        compra.push(quantIngressos)
                        compra.push(jogoSF[1])
                        compra.push(jogoSF[1] * quantIngressos)
                        break;
                    case 3:
                        compra.push(categoria)
                        compra.push(quantIngressos)
                        compra.push(jogoSF[2])
                        compra.push(jogoSF[2] * quantIngressos)
                        break;
                    case 4:
                        compra.push(categoria)
                        compra.push(quantIngressos)
                        compra.push(jogoSF[3])
                        compra.push(jogoSF[3] * quantIngressos)
                        break;
                    default:
                        console.log("Categoria invalida.")
                        break;
                }            
                break;
            default:
                console.log("Etapa de jogo não identificada.")
                break;
        }
        break;
    case "IN":
        compra.push("internacional")
        compra.push("USD")
        switch (etapaJogo) {
            case "SF":
                compra.push("semifinal")
                switch (categoria) {
                    case 1:
                        compra.push(categoria)
                        compra.push(quantIngressos)
                        compra.push(jogoSF[0])
                        compra.push(jogoSF[0] * quantIngressos)
                        break;
                    case 2:
                        compra.push(categoria)
                        compra.push(quantIngressos)
                        compra.push(jogoSF[1])
                        compra.push(jogoSF[1] * quantIngressos)
                        break;
                    case 3:
                        compra.push(categoria)
                        compra.push(quantIngressos)
                        compra.push(jogoSF[2])
                        compra.push(jogoSF[2] * quantIngressos)
                        break;
                    case 4:
                        compra.push(categoria)
                        compra.push(quantIngressos)
                        compra.push(jogoSF[3])
                        compra.push(jogoSF[3] * quantIngressos)
                        break;
                    default:
                        console.log("Categoria invalida.")
                        break;
                }
                break;
            case "DT":
                compra.push("Decisão 3ºlugar")
                switch (categoria) {
                    case 1:
                        compra.push(categoria)
                        compra.push(quantIngressos)
                        compra.push(jogoSF[0])
                        compra.push(jogoSF[0] * quantIngressos)
                        break;
                    case 2:
                        compra.push(categoria)
                        compra.push(quantIngressos)
                        compra.push(jogoSF[1])
                        compra.push(jogoSF[1] * quantIngressos)
                        break;
                    case 3:
                        compra.push(categoria)
                        compra.push(quantIngressos)
                        compra.push(jogoSF[2])
                        compra.push(jogoSF[2] * quantIngressos)
                        break;
                    case 4:
                        compra.push(categoria)
                        compra.push(quantIngressos)
                        compra.push(jogoSF[3])
                        compra.push(jogoSF[3] * quantIngressos)
                        break;
                    default:
                        console.log("Categoria invalida.")
                        break;
                }
                break;
            case "FN":
                compra.push("Final")
                switch (categoria) {
                    case 1:
                        compra.push(categoria)
                        compra.push(quantIngressos)
                        compra.push(jogoSF[0]/4.1)
                        compra.push((jogoSF[0]/4.1) * quantIngressos)
                        break;
                    case 2:
                        compra.push(categoria)
                        compra.push(quantIngressos)
                        compra.push(jogoSF[1]/4.1)
                        compra.push((jogoSF[1]/4.1) * quantIngressos)
                        break;
                    case 3:
                        compra.push(categoria)
                        compra.push(quantIngressos)
                        compra.push(jogoSF[2]/4.1)
                        compra.push((jogoSF[2]/4.1) * quantIngressos)
                        break;
                    case 4:
                        compra.push(categoria)
                        compra.push(quantIngressos)
                        compra.push(jogoSF[3]/4.1)
                        compra.push((jogoSF[3]/4.1) * quantIngressos)
                        break;
                    default:
                        console.log("Categoria invalida.")
                        break;
                }            
                break;
            default:
                console.log("Etapa de jogo não identificada.")
                break;
        }    
        break;    
    default:
        console.log("Tipo de jogo não identificado.")
        break;
}

console.log("---DADOS DA COMPRA---")
console.log("COMPRADOR: ", compra[0])
console.log("TIPO DE JOGO: ", compra[1])
console.log("ETAPA DO JOGO: ", compra[3])
console.log("CATEGORIA: ", compra[4])
console.log("QUANTIDADE DE INGRESSOS: ", compra[5])
console.log("---VALORES---")
console.log("VALOR DO INGRESSO: ", compra[6])
console.log("VALOR TOTAL: ", compra[2],compra[7])

