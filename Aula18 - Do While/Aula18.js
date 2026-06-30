//O loop indefinido Do While usa-se quando não se sabe a quantidade de vezes que se vai repetir.
// Estrutura> Do {.. 

//} while()

//No While vc testa primeiro a expressão, já no Do While vc executa primeiro, depois vem o teste lógico. 
console.clear()
let i = 1; //Contador de 1 a 5 com o While básico.

while (i <= 5) {
    console.log(i);
    i++;}

let u = 10 //Perceba que para essa inicialização o contador não conta nada, pois a expressão lógica já se satisfez.
while (u <= 5) { //Porém se fosse com Do While funcionaria.
    console.log(u);
    u++;}

let q = 1; //Contador do 1 ao 10 com Do While, expressão se satisfazendo no final, depois da execução dos blocos de código.

do {
    console.log(q);
    q++;
} while (q <= 10);