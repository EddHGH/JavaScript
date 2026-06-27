console.clear()
let num = [10,20,30,40,50]

for(n in num){ // Cria-se uma variável que vai receber os elementos retornados do array
console.log(num[n])
}
// for(let i = 0; i<num.length; i++){
//     console.log(num[i])
// }

for (n of num){ //Pega os elementos e for in pega as posições
    console.log(n)
}