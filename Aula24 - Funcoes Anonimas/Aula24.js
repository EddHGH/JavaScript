//Basicamente funcoes anonimas nao possuem um nome associado ao seu conteudo, são chamadas em tempo de execução
//Ou seja ela só vai ser criada no momento da execução, pode ser parametrizada ou não.
//Ela não está instanciada na memória como uma função normal.

const ex1 = function (v1, v2) {
  //É necessário, por não ter nome, associá-la a uma variável.

  return v1 + v2;
};

const ex2 = function (...valores) {
  //Function com FOR normal.
  let res = 0;
  let tam = valores.length;
  for (let i = 0; i < tam; i++) {
    res += valores[i];
  }
  return res;
};

//console.log(ex2(15,10,20))

const ex3 = function (...valores) {
  // Exemplo com FOR OF mais adequado.
  let res3 = 0;
  for (v of valores) {
    res3 += v;
  }
  return res3;
};
//console.log(ex3(15, 10, 20));

const ex4 = new Function("v1", "v2", "return v1+ v2"); // Exemplo de função construtora anônima.
//Serve para funções mais simples e curtas.
console.log(ex4(10, 5));
