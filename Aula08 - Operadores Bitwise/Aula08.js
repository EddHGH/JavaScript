
//Operadores Bitwise - Números Binários
// 


let n1 = 10
let n2 = 11

let res = n1 & n2 //O operador & Bitwise, o cálculo é o seguinte:
// Onde houver equivalência de bits 1 o retorno será 1, divergência retorna zero.
// Exemplo o Binário 10 = 00001010 e 11 = 00001011 logo:
//   00001010 (10)
// & 00001011 (11)
// ----------------
// Res: 00001010 = Binário 10
// Perceba que onde houve equivalência de 1, retornou 1 gerando o binário 10

console.log(res) // retorna 10

let res1 = n1 ^ n2 //O operador ^ Bitwise, o cálculo é o seguinte:
// Onde houver divergencia de bits 1 o retorno será 1, equivalência retorna zero.
// Exemplo o Binário 10 = 00001010 e 11 = 00001011 logo:
//   00001010 (10)
// ^ 00001011 (11)
// ----------------
// Res: 00000001 (1)  
// 

console.log(res1) // retorna 1

//--------------------------------------------
// Operações de Deslocamento de Bits
let x = 10

let res2 = x << 1 //Desloca um bit para esquerda e >> para direita.
//Caso queira mais de um bit só aumentar ">> 2 ou << 2"
//Uma operação de bitwise para esquerda em 1 dobra o valor e para direita divide na metade.
console.log(res2)
