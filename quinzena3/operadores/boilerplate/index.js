console.log("Oie, eu só sirvo pra saber se as coisas funcionaram!")

/***Exercícios de interpretação de código**
 
1. 
a. false
b. false
c. true
e. boolean

2. 
a. undefined
b. null
c. 10
d, 3
e. array = [3, 19, 5, 6, 7, 8, 9, 10, 11, 12, 13]
f. 9
*/

//1.
let userAge = Number(prompt("Sua idade?"));
let friendAge = Number(prompt("Idade do amigo?"));
console.log("Sua idade é maior do que a do seu melhor amigo?");
console.log(userAge > friendAge);
console.log(userAge - friendAge);

//2.
let numPar = prompt("insira nº par");
console.log(numPar%2);
//resto igual a zero quando inserido número par, ou seja, o número é divisível por 2, logo, é par.
// se inserir número ímpar, o resultado é o resto da divisão

//3.
let listaDeTarefas = [];
listaDeTarefas.push(prompt("informe tarefa 0?"));
listaDeTarefas.push(prompt("informe tarefa 1?"));
listaDeTarefas.push(prompt("informe tarefa 2?"));
console.log(listaDeTarefas);
tarefaRealizada = listaDeTarefas[prompt("informe índice da tarefa realizada; 0; 1 ou 2?")];
listaDeTarefas.splice(tarefaRealizada, 1);
console.log(listaDeTarefas);

//4.
let userName = prompt("seu nome");
let userMail = prompt("Informe email");
console.log("O e-mail " + userMail + " foi cadastrado com sucesso. Seja bem-vinda(o), " + userName + "!");



//desafios
//1.
let kelvin
let fahrenheit
let celcius

fahrenheit = 77
kelvin = ((fahrenheit - 32)*5)/9 + 273.15
console.log(kelvin)


fahrenheit = celcius*9/5 + 32


