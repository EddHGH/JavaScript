//Spread simplifica diversas operações quando se trata de arrays
//Ele quebra um array.



let n1 = [10,22,30]
let n2 = [11,22,33,44,55]
let n3 = [...n1] //Copia o array n1 na variável n3
let n4 = [...n1,...n2] // Espalha os arrays n1 e n2 na n3 (coloca números repetidos)
console.log("n1: " + n1)
console.log("n2: " + n2)
console.log("n3: " + n3)
console.log("n4: " + n4)

//É possivel utilizar o spread para clonar objetos tbm.

const jogador1 = {nome: "Bruno", energia: 100, vidas : 3,magia : 150}
const jogador2 = {nome: "Deck", energia: 100, vidas : 5,velocidade : 80}
const jogador3 = {...jogador1,...jogador2}
console.log(jogador3)