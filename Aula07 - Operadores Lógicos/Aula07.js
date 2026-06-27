"use strict"

// && - > And ou E
// || -> OR ou OU
// ! -> Not ou Não

// Tabela verdade

// And --> Só é verdadeiro se todas as sentenças forem verdadeiras.
// OR  --> Só retorna falso se ambas forem falsas, se apenas uma for verdadeira, retorna true.

let n1,n2,n3,n4
n1 = 10
n2 = 5
n3 = 15
n4 = 2

console.log(n1 > n2) //Retorna true
console.log(n3 == n2 && n1 > n3) //Retorna false

if(n1 < n2 || n3 > n4){
    console.log("É maior")
} else{
    console.log("É menor")
}