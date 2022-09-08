/*
# Exercício 2

Recrie o exercício 3 da aula anterior (A012) de condicionais I, utilizando switch-case. 
No arquivo `script,js` existe uma versão do código já escrita, mas você pode colar o exercício que você fez na última prática!

let nacionalidade = prompt("digite aqui a nacionalidade").toLowerCase();

if(nacionalidade === "brasileira"){
    console.log("a pessoa é do Brasil!");
} else if(nacionalidade === "argentina"){
    console.log("a pessoa é da Argentina!");
} else if(nacionalidade === "uruguaia"){
    console.log("a pessoa é do Uruguai!");
} else if(nacionalidade === "chilena"){
    console.log("a pessoa é do Chile!");
} else if(nacionalidade === "colombiana"){
    console.log("a pessoa é da Colômbia!");
} else{
    console.log("nacionalidade não encontrada")
}
*/

let nacionalidade = prompt("Escreva aqui sua nacionalidade?").toLocaleLowerCase()
console.log("Sua nacionalidade é:", nacionalidade)

//switch case
switch(nacionalidade) {
    case "brasileira":
        console.log("Nacionalidade escolhida: Brasileira")
        break
    case "argentina":
        console.log("Nacionalidade escolhida: Argentina")
        break
    case "uruguaia":
        console.log("Nacionalidade escolhida: Uruguaia")
        break
    case "chilena":
        console.log("Nacionalidade escolhida: Chilena")
        break
    case "colombiana":
        console.log("Nacionalidade escolhida: Colombiana")
        break
    default:
        console.log("Nacionalidade não encontrada")
    }