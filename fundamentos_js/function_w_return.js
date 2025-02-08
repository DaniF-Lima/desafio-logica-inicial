let resultado = soma(5, 5)

console.log("O resultado da soma é " + resultado)

function soma(numA, numB){
    let somatorio = numA + numB
    return somatorio
}

let userName = getFirstName("Daniel Ferreira de Lima")

console.log("Seja bem vindo, " + userName)

function getFirstName(name){
    let firstName = name.split(" ")[0]
    return firstName 
}
//exemplo para funcionar independente da forma de separação de palavras
let nickname = returnName("Ephyren-Morgs-Solant")

console.log("Seja bem vindo, " + nickname)

//passando metode de separação para o código identificar
function returnName(name, splitChar = "-"){
    let firstName = name.split(splitChar)[0]
    return firstName 
}