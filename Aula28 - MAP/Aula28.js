// Percorrer arrays/colecoes.
// Utilizar trabalhar com elementos por elemento de uma coleção.
// Ele vai iterar com uma coleção.

const cursos = ["HTML", "CSS", "JAVA SCRIPT", "PHP", "REACT"];
let c = cursos.map((el, i) => {
  //console.log("Curso: " + el + " posição do curso: " + i);
  return el; // Desta forma ele retorna > [ 'HTML', 'CSS', 'JAVA SCRIPT', 'PHP', 'REACT' ] no console.
}); // Pode passar parâmetros o 1ª é o elemento da coleção que ele ta iterando.
//O segundo parâmetro é o indice desse elemento ou seja posição.
//MAP é um método mais otimizado para percorrer arrays.
//console.log(c)

const cursos2 = ["HTML", "CSS", "JAVA SCRIPT", "PHP", "REACT"]; //Outro exemplo.
let c2 = cursos2.map((el2, i2) => {
  return el2;
});
console.log(c2)


const el = document.getElementsByTagName("div")
console.log(el)

//Não terminou o código.