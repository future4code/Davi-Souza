//------------------------------------EXEMPLOS------------------------------------

// EXEMPLO 1 - DECLARACAO DE UM OBJETO

// const prof = {
//     nome: "Severo",
//     linguagens: ["javascript", "Java", "C++"],
//     front: true,
//     back: false,
//     idade: 25,
// }

// Acessando uma chave com a sintaxe de ponto 
// console.log(prof.nome)

// Acessando uma chave com a sintaxe de colchete 
// console.log(prof["nome"])


// prof.nome = "Pedro Severo"
// prof.idade += 1
// prof.tempoDeCasa = 1



// console.log(prof)



// EXEMPLO 2 - DESESTRETURACAO DE OBJETOS


// const novaProf = {
//     ...prof,
//     nome: "Amanda"
// }

// console.log(novaProf)
// console.log(prof)


// EXEMPLO 3 - FUNCOES DENTRO DE OBJETOS

// function darAula() {
//     console.log("Dei aula")
// }


// const prof = {
//     nome: "Severo",
//     linguagens: ["javascript", "Java", "C++"],
//     front: true,
//     back: false,
//     idade: 25,
//     aula: darAula
// }


// prof.aula()



// EXEMPLO 4 - USO DO EVENT EM FUNCOES

// function teclar(evento) {
//     if (evento.key === "Enter") {
//         console.log("Cliquei no enter")
//     }
// }


// EXEMPLO 5 - PROTÓTIPO DE STRINGS

// const minhaString = "Oi, MUNDO! Tudo bem?"


// console.log(minhaString.length)
// console.log(minhaString.includes("MUNDO"))
// console.log(minhaString.split(""))
// console.log(minhaString.toLowerCase())
// console.log(minhaString.toUpperCase())


// EXEMPLO 6 - PROTÓTIPO DE ARRAY

// const meuArray = ["Pernalonga", "Michael Jordan", "Charles Barkley", "Bill Murray"]


// meuArray.push("Patolino")


// // console.log(meuArray.length)
// // console.log(meuArray)
// // console.log(meuArray.indexOf("Pernalonga"))
// // meuArray.pop()

// console.log(meuArray)


// meuArray.splice(1, 3)

// console.log(meuArray)



// EXEMPLO EXTRA - ARRAY DE OBJETOS


// const arrayDeObjetos = [
//     {
//         nome: "Severo",
//         linguagens: ["javascript", "Java"],
//         front: true,
//         back: false,
//         idade: 25,
//     },
//     {
//         nome: "Amanda",
//         linguagens: ["javascript", "Java"],
//         front: true,
//         back: true,
//         idade: 25
//     }
// ]



//------------------------------------EXERCÍCIOS----------------------------------


// EXERCÍCIO 1 - OBJETO

// const filme = {
//     nome: "Space Jam",
//     direcao: "Joe Pytka",
//     ano: 1996,
//     elenco: ["Pernalonga", "Michael Jordan", "Charles Barkley", "Bill Murray"],
//     jaViu: true
// }


// console.log(filme)


// EXERCICIO 2 - USANDO O EVENT DOS EVENTOS DO 

// function criarNovoElemento () {
//     const valorDoInput = document.getElementById("texto")
//     const listaDeCompras = document.getElementById("container")

//     listaDeCompras.innerHTML += `<p>${valorDoInput.value}</p>`

//     valorDoInput.value = ""
// }

// function clicarNoBotao() {
//     criarNovoElemento()
// }


// function clicarNoEnter(evento) {
//     // o nome evento é arbitrário, já o "event" no HTML não

//     if(evento.key === "Enter") {
//         console.log(evento)
//         criarNovoElemento()
//     }
// }


// EXERCÍCIO 3 

function inserirNovaImagem() {
    
    const valorDoInput = document.getElementById("texto")
    const containerDeImagem = document.getElementById("container")

    if (valorDoInput.value.includes(".jpg") || valorDoInput.value.includes(".png")) {
        containerDeImagem.innerHTML += `<img src="${valorDoInput.value}" href="Alguma imagem" />`
    } else {
        alert("Coloque uma imagem válida")
    }

}

function clicarNoBotao() {
    inserirNovaImagem()
}


function clicarNoEnter(evento) {
    // o nome evento é arbitrário, já o "event" no HTML não

    if(evento.key === "Enter") {
        inserirNovaImagem()
    }
}