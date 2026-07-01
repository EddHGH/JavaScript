//Função parametrada nada mais é do que colocar indices de entrada e retorno da função.

function Exemple1(a, b) {
  return a + b;
}

function Dobro() {
  //Método "Function" + nome da função + (parâmetros) + {}
  let d1 = document.getElementById("d1");
  let valor = Number(d1.innerHTML);
  d1.innerHTML = valor * 2;
}

function Metade() {
  //Método "Function" + nome da função + (parâmetros) + {}
  let d1 = document.getElementById("d1");
  let valor = Number(d1.innerHTML);
  d1.innerHTML = valor / 2;
}

console.log(Exemple1(5, 6)); // 5 & 6 são respectivamente os parametros que serão usados na função a & b.

