# `while` vs `do...while` em JavaScript

Essa é uma dúvida muito comum. Na prática, **o `while` é usado muito
mais que o `do...while`**. Existem programadores que passam meses ou
anos sem precisar escrever um `do...while`.

A diferença principal é esta:

-   **`while`** → verifica a condição **antes** de executar.
-   **`do...while`** → executa **uma vez** e só depois verifica a
    condição.

## while

Imagine que você quer imprimir os números de 1 a 5.

``` javascript
let i = 1;

while (i <= 5) {
    console.log(i);
    i++;
}
```

Fluxo:

``` text
Condição?
↓
Sim → executa
↓
Condição?
↓
Sim → executa
↓
...
```

Se `i` já começar em 10:

``` javascript
let i = 10;

while (i <= 5) {
    console.log(i);
}
```

Resultado:

``` text
(nada acontece)
```

Porque a condição já era falsa.

## do...while

``` javascript
let i = 10;

do {
    console.log(i);
    i++;
} while (i <= 5);
```

Resultado:

``` text
10
```

Ele executou uma vez antes de verificar.

Fluxo:

``` text
Executa
↓
Condição?
↓
Se verdadeira → executa novamente
```

## Quando isso é útil?

A regra é:

> Quando você **precisa que o código execute pelo menos uma vez**.

### Exemplo: Menu

``` javascript
let opcao;

do {
    opcao = Number(prompt(`
1 - Jogar
2 - Configurações
0 - Sair
`));

    console.log("Você escolheu:", opcao);

} while (opcao !== 0);
```

O menu precisa aparecer pelo menos uma vez.

### Exemplo: Validação de entrada

``` javascript
let numero;

do {
    numero = Number(prompt("Digite um número maior que 0"));
} while (numero <= 0);

console.log("Número válido:", numero);
```

A pessoa obrigatoriamente precisa digitar pelo menos uma vez.

## Poderia fazer com `while`?

Sim.

``` javascript
let numero = Number(prompt("Digite um número maior que 0"));

while (numero <= 0) {
    numero = Number(prompt("Digite novamente"));
}
```

Nesse caso, o `prompt()` precisou ser escrito duas vezes.

## Exemplo do mundo real

Um caixa eletrônico precisa sempre mostrar o menu antes de verificar se
o usuário deseja sair.

``` javascript
let opcao;

do {
    console.log("1 - Saldo");
    console.log("2 - Saque");
    console.log("0 - Sair");

    opcao = Number(prompt("Escolha:"));

} while (opcao !== 0);
```

## Como decidir?

Faça esta pergunta:

> **A primeira execução deve acontecer independentemente da condição?**

**Use `while` quando a resposta for NÃO.**

``` javascript
while (usuarioLogado) {
    // executa somente se estiver logado
}
```

**Use `do...while` quando a resposta for SIM.**

``` javascript
do {
    // mostra o menu pelo menos uma vez
} while (usuarioNaoSaiu);
```

## Resumo

-   **`for`** → quando você sabe quantas vezes vai repetir.
-   **`while`** → quando pode acontecer de o bloco nunca ser executado.
-   **`do...while`** → quando o bloco precisa executar pelo menos uma
    vez.
