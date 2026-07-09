# `break` e `continue` no JavaScript

## `break`

O comando `break` interrompe imediatamente um laço (`for`, `while`,
`do...while`) ou um `switch`.

### Exemplo com `for`

``` javascript
for (let i = 1; i <= 10; i++) {
    if (i === 6) {
        break;
    }

    console.log(i);
}
```

**Saída:**

    1
    2
    3
    4
    5

Quando `i` chega a `6`, o laço é encerrado.

------------------------------------------------------------------------

## `continue`

O comando `continue` não encerra o laço. Ele apenas ignora o restante da
iteração atual e passa para a próxima.

### Exemplo com `for`

``` javascript
for (let i = 1; i <= 10; i++) {
    if (i === 6) {
        continue;
    }

    console.log(i);
}
```

**Saída:**

    1
    2
    3
    4
    5
    7
    8
    9
    10

O número `6` não é exibido porque aquela iteração foi ignorada.

------------------------------------------------------------------------

## Exemplo com `while`

``` javascript
let i = 0;

while (i < 10) {
    i++;

    if (i === 5) {
        continue;
    }

    if (i === 8) {
        break;
    }

    console.log(i);
}
```

**Saída:**

    1
    2
    3
    4
    6
    7

-   O `continue` pula a impressão do número `5`.
-   O `break` encerra o laço quando `i` vale `8`.

------------------------------------------------------------------------

## Quando usar cada um?

  Comando      Função
  ------------ ---------------------------------------------------
  `break`      Encerra completamente o laço ou `switch`.
  `continue`   Ignora apenas a iteração atual e continua o laço.

### Regra prática

Use **`break`** quando o objetivo já foi atingido e não faz sentido
continuar o laço.

Exemplos: - Encontrar um elemento em um vetor. - Parar uma busca. -
Encerrar um menu.

Use **`continue`** quando você quer apenas ignorar determinados casos.

Exemplos: - Pular números pares. - Ignorar valores inválidos. -
Desconsiderar registros incompletos.

## Resumo

-   `break` → **para tudo**.
-   `continue` → **pula apenas a iteração atual**.
-   Ambos funcionam com `for`, `while` e `do...while`.
