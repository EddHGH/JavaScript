O tipo VAR pode ser um problema. (Ele tem falhas)

A váriavel nome foi criada dentro do escopo do IF, mas mesmo assim ele funciona fora, o que não deveria acontecer.

"use strict"

    if(true){
        var nome = "Edd" 
    }

Então temos que VAR pode ser usada de forma global e também 
como o nome sugere pode mudar.
LET tem um controle maior.

No JS você consegue alterar os tipos de valores de uma variável sem typecasts()conversões.

CONST é um tipo de valor que como o nome sugere não muda.