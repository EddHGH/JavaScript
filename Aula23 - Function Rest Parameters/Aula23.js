

function soma(n1 = 0, n2 = 0) {
  return n1 + n2;
}

//console.log(soma(3,5)) // Para funções co parâmetros definidos, perceba que eu não posso usar mais do que duas variáveis aqui.
//A função só funciona com 2, e é ai que entra os REST PARAMETERS.

//Veja abaixo:

function SomaCorreta(...valores) {
  //Valores é um array com método spread
  return valores.length; //Retornará o tamanho o array valores.
} //O correto aqui é se usar um FOR e mais correto ainda FOR OF, terminar depois.

function SomaCorretaReal(...valores) {
  let tam = valores.length;
  let res = 0;
  for (let i = 0; i < tam; i++) {
    //O contador está justamente percorrendo o Array valores, e somando os resultados que foram postos no array.

    res += valores[i];
  }

  return res;
}
// console.log(SomaCorretaReal(10,15,30,40))

//Veja agora uma boa prática com o FOR, usando FOR OF

function SomaCorretaReal2(...valores) {
  let tam = valores.length;
  let res = 0;
  for (let v of valores) { //Construção mais simples com FOR OF e retornando mesmo resultado.
    res += v;
  }

  return res;
}
console.log(SomaCorretaReal2(10,5,13,2,4,3,3))