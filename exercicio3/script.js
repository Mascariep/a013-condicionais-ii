/*# Exercício 3
Reescreva os códigos do arquivo script.js utilizando o if ternário.

//código a ser reescrito
/*
if(nome === "José"){
	console.log("Oi, Zé!");
} else {
	console.log("Olá, "+nome);
}

if(idade >= 18){
	console.log("pode tirar carteira de motorista!");
} else {
	console.log("Ainda não pode tirar carteira de motorista");
}
*/
let nome = prompt("Qual seu nome?")
let idade = Number(prompt("Qual sua idade?"))

//condição         ?      expressão 1 (true)   : expressão 2 (false)
nome === "José"    ?    console.log("Oi, Zé!") : console.log("Olá", nome)
idade >= 18        ?    console.log("Pode tirar carteira de motorista!")  :  console.log("Ainda não pode tirar carteira de motorista")
