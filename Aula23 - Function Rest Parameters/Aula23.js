function soma(n1=0,n2 = 0){
    return n1 + n2
}

//console.log(soma(3,5)) // Para funções co parâmetros definidos, perceba que eu não posso usar mais do que duas variáveis aqui.
//A função só funciona com 2, e é ai que entra os REST PARAMETERS.

//Veja abaixo:

function SomaCorreta(...valores){ //Valores é um array com método spread
    return valores.length //Retornará o tamanho o array valores.
} //O correto aqui é se usar um FOR e mais correto ainda FOR OF, terminar depois.

console.log(SomaCorreta[5,6,5])