# TypeScript Syntax Map — QA Automation
> Referência rápida de sintaxe. Atualizado ao longo das sessões de tutoria.

---

## Arrays

```typescript
const nomeDoArray: type[] = [valor1, valor2, valor3];
```

- Índice começa em **0** → `array[0]` é o primeiro elemento
- Aceder a um elemento: `array[2]`
- Array de objects: `ApiResponse[]`

**`for` loop:**

```typescript
for (const nomeTemporario of nomeDoArray) {
  console.log(nomeTemporario);
}
```

- `nomeTemporario` é uma variável local — em cada volta tem o valor do elemento atual
- Com objects: `nomeTemporario.propriedade`

---

## Interface

Define a "forma" de um object — quais as propriedades e os seus types.

```typescript
interface NomeInterface {
  propriedade1: type;
  propriedade2: type;
  propriedade3: type;
}
```

- Nome com **PascalCase** → `ApiResponse`, `LoginResponse`
- Separador entre propriedades: `;`
- Definida uma vez, reutilizada em vários objects e functions

---

## Object

Cria um valor concreto que segue a forma de uma interface.

```typescript
const nomeObject: NomeInterface = {
  propriedade1: valor,
  propriedade2: valor,
  propriedade3: valor,
};
```

- Nome com **camelCase** → `responseSuccess`, `apiIsHealthy`
- Separador entre propriedades: `,`
- Aceder a propriedades: `nomeObject.propriedade`

---

## Function

Bloco de código reutilizável com nome.

```typescript
function nomeFuncao(parameter: NomeInterface): returnType {
  if (condicao) {
    return true;
  } else {
    return false;
  }
}
```

- Nome com **camelCase** → `isLoginValid`, `isApiHealthy`
- O parameter é **local** — só existe dentro da função
- Sem `,` nem `;` na assinatura — só `()`e `{}`

---

## Chamar uma função

```typescript
const resultado: boolean = nomeFuncao(nomeObject);
console.log(resultado);
```

Ou diretamente sem variável intermédia:

```typescript
console.log(nomeFuncao(nomeObject));
```

---

## Types básicos (Primitive Types)

| Type | O que representa | Exemplo |
|---|---|---|
| `string` | Texto | `"Login Test"` |
| `number` | Número inteiro ou decimal | `200`, `3.14` |
| `boolean` | Verdadeiro ou falso | `true`, `false` |

---

## Operadores de comparação

| Símbolo | Significado | Exemplo |
|---|---|---|
| `===` | igual a | `statusCode === 200` |
| `!==` | diferente de | `body !== ""` |
| `>` | maior que | `responseTime > 500` |
| `<` | menor que | `responseTime < 500` |
| `>=` | maior ou igual | `attempts >= 3` |
| `<=` | menor ou igual | `attempts <= 3` |

---

## Operadores lógicos

| Símbolo | Significado | Exemplo |
|---|---|---|
| `&&` | E (as duas condições têm de ser verdadeiras) | `statusCode === 200 && body !== ""` |
| `\|\|` | OU (pelo menos uma condição tem de ser verdadeira) | `statusCode === 200 \|\| statusCode === 201` |
| `!` | NÃO (inverte o boolean) | `!isBlocked` |

---

## Onde usar os dois pontos `:`

```typescript
let nome: string                    // depois do nome de uma variable
function f(x: number)               // depois do nome de um parameter
function f(): boolean               // depois dos parênteses (return type)
const obj: NomeInterface = { ... }  // depois do nome de um object
```

Em todo o resto — `if`, `return`, `=` — **não há `:`**

---

## Convenções de nomes

| O quê | Convenção | Exemplo |
|---|---|---|
| Interface | PascalCase | `ApiResponse` |
| Object (const) | camelCase | `responseSuccess` |
| Function | camelCase | `isLoginValid` |
| Variable | camelCase | `statusCode` |
