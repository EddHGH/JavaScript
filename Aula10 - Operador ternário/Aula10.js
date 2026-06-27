// É uma forma de reduzir o IF comum.
let num = 11

let res = num%2

    if(res ==0){
        console.log("Par")
    } else {
        console.log("Impar")
    }

//Transformando em uma operação ternária
let num2 = 10
let res2 = (!(num2%2) ? "Par": "Impar") //Estrutura do IF ternário
console.log(res2) // Neste caso como o modulo num2%2 retorna zero e zero é lido como falso, ele retorna impar.
// Para que essa operação funcione da maneira correta, é preciso negar o módulo.
// let res2 = (!(num2%2) ? "Par": "Impar")
