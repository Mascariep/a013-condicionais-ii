/*
# Exercício 1
Crie um código que receba um número por **prompt** e verifique se um número é divisível por 2 **ou** por 3.
*/

let num = Number(prompt("Digite seu numero:"))
    console.log("Numero digitado é:", num)

//1. Utilizando ifs aninhados

if (num % 2 === 0){
        console.log("seu numero é divisivel por 2")}
    else {
        if(num % 3 === 0) {
        console.log("Seu numero é divisivel por 3")}
    else {
        console.log("Seu numero não é divisil por 2 e nem por 3")}
}


/*2. Utilizando um operador lógico para unir duas operações relacionais

if (num % 2 === 0 || num % 3 === 0) {
    console.log("Seu numero é divisivel por 2 ou 3")
} else {
    console.log("Seu numero NÃO é divisivel por 2 ou 3")
}
*/