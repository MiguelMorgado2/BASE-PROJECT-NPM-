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
  propriedade1: type;           // obrigatória
  propriedade2: type;           // obrigatória
  propriedade3?: type;          // opcional — o ? torna-a opcional
  propriedade4: type1 | type2;  // union type — pode ser type1 OU type2
}
```

- Nome com **PascalCase** → `ApiResponse`, `LoginResponse`
- Separador entre propriedades: `;`
- Definida uma vez, reutilizada em vários objects e functions
- A interface modela os **dados que chegam** — não os resultados da tua avaliação

---

## `typeof` — verificar o type em runtime

Usado quando uma propriedade é union type (`number | string`) e precisas de saber com qual estás a trabalhar:

```typescript
typeof 200      // → "number"
typeof "hello"  // → "string"
typeof true     // → "boolean"
```

Padrão de uso:

```typescript
if (typeof valor === "number") {
  // trata como number
} else if (typeof valor === "string") {
  // trata como string
} else {
  // safety net
}
```

---

## Type Aliases

```typescript
// Para valores fixos — usa type
type HttpMethod = "GET" | "POST" | "PUT" | "DELETE";
type Environment = "staging" | "production" | "development";

// Para objects — usa interface (preferido)
interface ApiResponse {
  statusCode: number;
  body: string;
}
```

| | `interface` | `type` |
|---|---|---|
| Forma de um object | ✅ preferido | ✅ funciona |
| Union types / valores fixos | ❌ | ✅ |

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

---

## Types Especiais

| Type | Quando usar |
|---|---|
| `any` | Evitar — desativa a verificação de types |
| `unknown` | Dados de origem desconhecida — obriga a verificar o type antes de usar |
| `void` | Funções que não devolvem nada — só executam ações |
| `never` | Funções que nunca terminam normalmente (ex: lançam sempre um erro) |

---

## Funções com `void`

```typescript
function nomeFuncao(param1: string, param2: boolean): void {
  console.log(`${param1}: ${param2}`);
  // sem return
}

nomeFuncao("Login Test", true);  // chama diretamente, sem guardar resultado
```

---

## Funções com `unknown`

```typescript
function nomeFuncao(data: unknown): string | boolean {
  if (typeof data === "string") {
    return data.toUpperCase();
  } else {
    return "invalid data";
  }
}
```

---

## Concatenar strings

```typescript
// com +
console.log(nome + ": passed");

// com template literal (preferido)
console.log(`${nome}: passed`);
```

---

## `null` e `undefined`

```typescript
let valor: string | null = null;       // explicitamente vazio
let valor2: string | undefined;        // não atribuído

// verificar antes de usar
if (valor !== null) {
  console.log(valor.toUpperCase());    // ✅ seguro
}

// forma curta
if (valor) {
  console.log(valor.toUpperCase());    // ✅ só entra se não for null/undefined
}
```

---

## Métodos de string úteis

```typescript
"hello".toUpperCase()    // → "HELLO"
"HELLO".toLowerCase()    // → "hello"
"hello world".includes("world")  // → true
"hello".length           // → 5
```

---

## Type Assertions (`as`)

```typescript
const data: unknown = "hello";
const message = data as string;  // assumes o type
```

- Usa `typeof` para **verificar** o type com segurança
- Usa `as` quando tens a certeza do type mas o TypeScript não consegue inferir
- Cuidado — se o type estiver errado, dá erro em runtime

---

## Generics

```typescript
function nomeFuncao<T>(parametro: T[]): T {
  return parametro[0];
}

// o T substitui-se pelo type real na chamada
nomeFuncao([200, 404]);       // T = number
nomeFuncao(["GET", "POST"]);  // T = string
```

- `T` é um placeholder de type — muda consoante o que passas
- Comum no Playwright: `response.json<NomeInterface>()`

---

## Arrow Functions

```typescript
// clássica
function nomeFuncao(param: type): returnType {
  return valor;
}

// arrow com {}
const nomeFuncao = (param: type): returnType => {
  return valor;
}

// arrow sem {} — só uma linha
const nomeFuncao = (param: type): returnType => valor;
```
