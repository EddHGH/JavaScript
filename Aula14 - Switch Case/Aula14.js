let colocacao = 1

switch(colocacao){
    case 1 :
        console.log("Primeiro lugar")
        break //Deve ser usado a cada final de bloco no case.
    case 2 :
        console.log("Segundo lugar")
        break 
    
    case 3: case 4: case 5: //Outra forma de fazer case
        console.log("Prêmio de participação")
        break
    default:
        console.log("Não classificou")
        break

}   
