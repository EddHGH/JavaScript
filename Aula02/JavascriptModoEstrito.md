Serve para deixar o código mais limpo por exemplo:
    
    Quando se utiliza o modo estrito não é possível usar usar variável que não tenha sido
    declarada, ou seja, deve-se tomar cuidado ao criá-las.

O modo estrito deixa o JavaScript mais rigoroso. Ele ajuda a evitar erros comuns, por exemplo: não permite usar variável sem declarar.

Exemplo sem modo estrito:

nome = "Edd";
console.log(nome);
Isso pode funcionar, mas cria uma variável global sem querer.

Com modo estrito:

"use strict";

nome = "Edd"; // Erro: variável não declarada
O correto é:

"use strict";

let nome = "Edd";
console.log("CFB cursos");
console.log("Seu nome é " + nome);
Resumo: use "use strict"; no início do arquivo para escrever um JavaScript mais seguro e organizado.

