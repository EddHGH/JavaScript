# Método `map()` no JavaScript

## O que é?

O método `map()` percorre todos os elementos de um array e cria **um
novo array** com os valores retornados pela função de callback.

> O array original **não é alterado**.

## Sintaxe

``` javascript
array.map((elemento, indice, array) => {
    return novoValor;
});
```

-   `elemento`: valor atual.
-   `indice`: posição do elemento (opcional).
-   `array`: array original (opcional).

## Exemplo básico

``` javascript
const numeros = [1,2,3,4];

const dobrados = numeros.map(numero => numero * 2);

console.log(dobrados);
```

Saída:

``` text
[2, 4, 6, 8]
```

## Convertendo tipos

``` javascript
const textos = ["10","20","30"];
const numeros = textos.map(Number);

console.log(numeros);
```

Saída:

``` text
[10,20,30]
```

## Trabalhando com objetos

``` javascript
const pessoas = [
  { nome: "Ana", idade: 20 },
  { nome: "Carlos", idade: 25 }
];

const nomes = pessoas.map(p => p.nome);

console.log(nomes);
```

Saída:

``` text
["Ana", "Carlos"]
```

## Diferença entre `map()` e `forEach()`

  -----------------------------------------------------------------------
  `map()`                       `forEach()`
  ----------------------------- -----------------------------------------
  Retorna um novo array         Não retorna um novo array

  Ideal para transformar dados  Ideal para executar ações

  Não modifica o array original Pode modificar elementos se você fizer
                                isso manualmente
  -----------------------------------------------------------------------

## Quando usar

Use `map()` quando precisar: - Converter valores. - Alterar o formato
dos dados. - Criar um novo array baseado em outro.

## Resumo

-   Percorre todos os elementos.
-   Retorna um **novo array**.
-   Não altera o array original.
-   Muito usado com funções de seta (`=>`) e programação funcional.
