// Break, literalmente para o comando(loop) naquele escopo.
// Continue, para a interação atual e roda o próximo comando do código.
"use strict"
console.clear()

function Break(n,max){

    while(n<max){ //Contador básico de 0 a 1000 em While.
        console.log(n)
        if (n>=1000){ //Condição para exemplificar o break; ele para de contar quando contador maior que 10. 
            break
        }
        n++
    }
            return n;
}

function Continue(n,max,pares){ // Contador até 1000 com condição IF de números pares.
    n = 0
    max = 1000
    pares = 0
    for(let i = n; i < max; i++){
        if(i%2!=0){ // Exemplificação do continue, para números ímpares usamos essa lógica. 
            continue //Caso ele não atenda a expressão lógica, ele continua o código.
        }
        pares++ //Exemplo do mesmo código, porém usando CONTINUE
        console.log(pares)
        

    }
    

    return n;
}

    //let resultado = Break(0,1000);'
    let resultado2 = Continue()
        console.log("Fim do programa")
