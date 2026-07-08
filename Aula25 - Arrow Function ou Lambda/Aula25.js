const soma = function(v1,v2){return v1+v2}
//Construção do Arrow Function. (Usa-se a seta "Arrow Function")
const soma2 = (v1,v2)=>{return v1+v2} // Pega o que está no parêntese e envia pra chave.
console.log(soma2(10,5))

//Detalhes sobre arrow function:
//Se for apenas um parâmetro não precisa por parenteses:
const nome = n => {return n}
console.log(nome("Edd"))
