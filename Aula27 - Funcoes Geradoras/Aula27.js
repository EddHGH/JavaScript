// Uma função geradora ela tem seu retorno adiado até o momento que for preciso dele.
// A própria função tem o controle quando quer retornar algo.
// Chamei uma função geradora eu não preciso de todo o processamento para retornar algo no final.
// A função geradora eu posso ir retornando coisas ao longo da execução.
// Funções geradoras costumam retornar um ITERATOR, então usa-se bastante LOOPs.

function* cores() {
  yield "Verde";
  yield "Vermelho";
  yield "Azul";
}

let itc = cores();
console.log(itc.next().value); // Sempre irá chamar a próxima iteração.
console.log(itc.next().value);
console.log(itc.next().value);

function* Perguntas() {
  const nome = yield "Qual o seu nome? ";
  const esporte = yield "Seu esporte favorito? ";
  return "Seu nome é " + nome + " e seu esporte favorito é " + esporte;
}

const itp = Perguntas();
console.log(itp.next().value);
console.log(itp.next("Edd").value);
console.log(itp.next("Airsoft").value);

// Função Geradora com LOOP.

function* Contador() {
  // Esta função é um loop eterno.
  let i = 0;
  while (true) {
    yield i++;
  }
}
const itcc = Contador(); // Funções geradoras sempre precisam de criar um const iterator para armazenar seu retorno.
// Neste caso temos um loop infinito que sempre conta um cada vez que a função é chamada.
console.log(itcc.next().value); //Pode ser feito um loop for tbm para chamar a função quantas vezes quiser e ai ela vira um contador mesmo.
console.log(itcc.next().value);
console.log(itcc.next().value);
console.log(itcc.next().value);
 