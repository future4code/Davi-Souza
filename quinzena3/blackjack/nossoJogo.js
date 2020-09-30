/**
 * EXEMPLO DE UTILIZAÇÃO DA 'comprarCarta'
 * 
 * 
    const carta = comprarCarta(); // Sorteia uma carta. Por exemplo, o rei de ouros
    
    console.log(carta.texto) // imprime o texto da carta. Exemplo: "K♦️" (indica "K" de ouros)
    console.log(carta.valor) // imprime o valor da carta (um número). Exemplo: 10 (dado que "K" vale 10)
 * 
 * 
 * 
 */


let cartasJogador = []
let pontosJogador = []
let totalJogador = 0
let cartasComputador = []
let pontosComputador = []
let totalComputador = 0



//inicio do jogo
console.log("Bem vindo ao jogo de Blackjack!")

if(confirm("Quer iniciar uma rodada?")) {
   for (let index = 0; index < 2; index++) {
      const carta = comprarCarta(); 
      cartasJogador.push(carta.texto)
      pontosJogador.push(carta.valor)  
   }
   for (let index = 0; index < 2; index++) {
      const carta = comprarCarta(); 
      cartasComputador.push(carta.texto)
      pontosComputador.push(carta.valor)     
   }
   for (let index = 0; index < pontosJogador.length; index++) {
      totalJogador += pontosJogador[index];
   }  
   for (let index = 0; index < pontosComputador.length; index++) {
      totalComputador += pontosComputador[index];
   }  
   console.log(`Suas cartas foram ${cartasJogador} e sua pontuação foi ${totalJogador} `)
   console.log(`As cartas do computador foram ${cartasComputador} e a pontuação dele foi ${totalComputador} `)
   if (totalJogador > totalComputador) {
      console.log("Você ganha ê...Você ganha ê... Você ganha!")
   } else if (totalJogador === totalComputador){
      console.log("Empatou!") 
   } else {
      console.log("Loooooseeeer!!!")
   }

} else {
   console.log("O jogo acabou!")
}
