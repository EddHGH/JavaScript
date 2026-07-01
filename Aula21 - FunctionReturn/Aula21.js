"use strict";
console.clear();

function Eddy() {
  //Não precisa de return em todas as funções, mas algumas são obrigatórias.
  console.log("1");
  return "Eddy"; // Neste caso aqui o return é indiferente, mas se na chamada da função fosse Console.log(Eddy()) ai sim funcionaria.
}
//console.log(Eddy())

// Retorno: [Running] node c:\Users\PC EDUARDO\Desktop\Java Script CFB\Aula21 - FunctionReturn\Aula21.js'
// 1
// Eddy

// [Done] exited with code=0 in 0.061 seconds

function Eddy2() {
  let n1 = 10;
  let n2 = 2;
  let result = n1 * n2;

  return result; // Return nada mais é do que o retorno de valores para quem fez a chamada.
}

//console.log(Eddy2()) //Neste caso ele retorna result, perceba que se o return estiver comentado, retorna UNDEFINED
//E se o console.log vier depois também retorna UNDEFINED.

function Exemplo3() {
  let num1 = 10;
  let num2 = 5;
  let calc = num1 * num2;
  let parimpar;

  if (calc % 2 === 0) {
    parimpar = "Par";
  } else {
    parimpar = "Impar";
  }
  console.log(parimpar);

  return calc; //Não pode ter mais de um RETURN para evitar conflitos.
}

console.log(Exemplo3());
