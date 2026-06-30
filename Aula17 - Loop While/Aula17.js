// While é um LOOP indefinido ou seja, usado quando não se sabe quantas vezes o bloco de comandos se repetirá.

// let num = 100
// //Contador de 100 a zero indo de 2 em 2
// while (num >= 0){ //Enquanto a condição for True, execute o bloco de código.
//     console.log(num)
//     num-=1 // Diferente do FOR é preciso ter o controle dentro do bloco While para que não gere loop infinito.
// }

// Exemplo prático com FATORIAL 
console.clear()
let fatorial = 1
let cont = 5
    while( cont >=1){
        
        fatorial *= cont 
        cont--
        
    }
console.log(fatorial)