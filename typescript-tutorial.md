# TypeScript Tutorial — QA Automation
> Documento de estudo progressivo. Atualizado ao longo das sessões de tutoria.

---

## Plano de Ensino Completo

### Módulo 1 — Fundamentos ✅
1. ✅ Variables e Types (`string`, `number`, `boolean`)
2. ✅ `const` vs `let`
3. ✅ Functions e `if/else`
4. ✅ Operadores (`===`, `!==`, `>`, `<`, `&&`, `||`)
5. ✅ Objects e Interfaces
6. ✅ Arrays e `for` loop
7. ✅ Optional properties `?`
8. ✅ Union types `|` e `typeof`
9. ✅ Type aliases (`type`)

### Módulo 2 — Tipos e Estruturas
10. Enums
11. `any`, `unknown`, `void`, `never` — types especiais
12. `null` e `undefined` — valores em falta
13. Type assertions (`as`)
14. Generics — introdução

### Módulo 3 — Functions Avançadas
15. Arrow functions (`=>`)
16. Parâmetros opcionais e valores por defeito
17. Rest parameters (`...args`)
18. Overloads

### Módulo 4 — Array Methods
19. `.filter()` — filtrar elementos
20. `.map()` — transformar elementos
21. `.find()` — encontrar um elemento
22. `.some()` e `.every()` — verificar condições
23. `.reduce()` — agregar valores

### Módulo 5 — Classes e OOP
24. Classes e constructors
25. Properties e methods
26. `public`, `private`, `protected`
27. Herança (`extends`)
28. Interfaces com classes (`implements`)
29. Decorators — introdução (uso em frameworks)

### Módulo 6 — Async TypeScript
30. `Promise` — o que é e como funciona
31. `async` / `await`
32. Tratamento de erros com `try/catch`
33. Tipar respostas assíncronas

### Módulo 7 — Módulos e Organização de Código
34. `import` e `export`
35. Organização de ficheiros e pastas
36. `tsconfig.json` — configuração do compilador
37. Namespaces vs módulos

### Módulo 8 — QA Automation Aplicado
38. Como tipar respostas de API com Playwright
39. Criar helpers e utilitários reutilizáveis
40. Page Objects com classes TypeScript
41. Cucumber step definitions em TypeScript
42. Tipar fixtures e configurações do Playwright
43. Criar uma framework de API testing de raiz
44. Criar uma framework de UI testing de raiz
45. AI Regression Testing — camada de integração

---

> **Nota:** Os módulos 1-4 são os fundamentos que precisas para trabalhar de forma independente. Os módulos 5-7 dão-te fluência completa na linguagem. O módulo 8 é a aplicação prática ao teu contexto de QA Automation.

---

## Sessão 1 — Fundamentos
 
---
 
### Conceito 1 — Variables e Types
 
Em TypeScript cada variable tem um **type** que define o que pode conter.
Sem types (JavaScript puro), podes colocar qualquer valor em qualquer variable e só descobres erros quando o código corre.
Com types, o editor sublinha os erros **antes de correres** uma única linha.
 
#### Sintaxe
 
```typescript
let nomeDaVariable: type = valor;
```
 
#### Os tipos básicos (primitive types)
 
| Type | O que representa | Exemplo |
|---|---|---|
| `string` | Texto | `"Login Test"` |
| `number` | Número (inteiro ou decimal) | `200`, `3.14` |
| `boolean` | Verdadeiro ou falso | `true`, `false` |
 
#### Exemplos
 
```typescript
let testName: string = "Login Test";
let statusCode: number = 200;
let testPassed: boolean = true;
```
 
#### Declaration vs Assignment
 
- **Declaration** — dizes que a variable existe, qual o nome e qual o type
- **Assignment** — dás um valor à variable
 
```typescript
let statusCode: number;   // declaration
statusCode = 200;         // assignment
```
 
Podes fazer os dois na mesma linha:
 
```typescript
let statusCode: number = 200;   // declaration + assignment
```
 
#### Type Inference
 
O TypeScript consegue inferir o type automaticamente quando atribuis um valor logo na declaration:
 
```typescript
let statusCode = 200;   // TypeScript infere: number
let testName = "Login"; // TypeScript infere: string
```
 
Nos primeiros tempos, **escreve sempre o type explicitamente** — ajuda a pensar no que cada variable deve conter.
 
---
 
### Conceito 2 — `const` vs `let`
 
| Keyword | Quando usar |
|---|---|
| `let` | O valor pode ser **reatribuído** (alterado) mais tarde |
| `const` | O valor é atribuído uma vez e **nunca muda** |
 
**Reatribuir** significa dar um novo valor a uma variable que já tinha um valor:
 
```typescript
let retryCount: number = 0;
retryCount = 1;   // reatribuição — o valor mudou
retryCount = 2;   // reatribuição novamente
```
 
Com `const` isso não é possível:
 
```typescript
const apiUrl: string = "https://api.example.com";
apiUrl = "https://outro-url.com";   // ❌ ERRO — não podes mudar um const
```
 
#### Regra de ouro
 
> Usa sempre `const` por defeito. Só mudas para `let` quando precisares de reatribuir.
 
#### Exemplos em QA Automation
 
```typescript
const endpointUrl: string = "https://api.example.com/actions";  // nunca muda — const
const expectedStatusCode: number = 200;                          // nunca muda — const
 
let retryCount: number = 0;    // vai sendo incrementado — let
let actualStatusCode: number;  // vai receber o valor da resposta — let
```
 
---
 
### Conceito 3 — Functions
 
Uma **function** é um bloco de código com nome que podes reutilizar.
 
#### Sintaxe
 
```typescript
function nomeDaFunction(parameter: type): returnType {
  // código aqui
}
```
 
- **parameter** — valor que a function recebe para trabalhar
- **returnType** — type do valor que a function devolve
 
#### Exemplo
 
```typescript
function checkStatusCode(actual: number, expected: number): boolean {
  return actual === expected;
}
```
 
Esta function recebe dois numbers e devolve `true` se forem iguais, `false` se não forem.
 
#### Chamar uma function
 
**Definir** uma function é criar a receita. **Chamar** uma function é usá-la:
 
```typescript
checkStatusCode(200, 200);   // chama a function com os valores 200 e 200
```
 
Para guardar o resultado numa variable:
 
```typescript
const result: boolean = checkStatusCode(200, 200);
console.log(result);   // [LOG]: true
```
 
#### `if / else`
 
Usado dentro de functions (e não só) para executar código consoante uma condição:
 
```typescript
function isResponseFast(responseTime: number): boolean {
  if (responseTime < 500) {
    return true;
  } else {
    return false;
  }
}
```
 
#### `console.log()`
 
Usado para imprimir valores no output. Guardar um valor numa variable não o mostra automaticamente — tens de usar `console.log`:
 
```typescript
const result: boolean = isResponseFast(300);
console.log(result);   // [LOG]: true
```
 
---
 
### Conceito 4 — Operadores
 
#### Assignment vs Comparison
 
| Símbolo | Nome | O que faz | Quando usar |
|---|---|---|---|
| `=` | assignment | Guarda um valor numa variable | `let x = 5` |
| `===` | strict equality | Compara se dois valores são iguais | Dentro de `if` |
| `!==` | strict inequality | Compara se dois valores são diferentes | Dentro de `if` |
 
> **Regra:** Um `=` → estás a **dar** um valor. Dois ou três `=` → estás a **comparar** valores.
 
```typescript
let retryCount: number = 0;         // = assignment — dá o valor 0
 
if (retryCount === 3) { ... }       // === comparação — pergunta "é igual a 3?"
if (retryCount !== 0) { ... }       // !== comparação — pergunta "é diferente de 0?"
```
 
#### Operadores de comparação completos
 
| Símbolo | Significado | Exemplo QA |
|---|---|---|
| `===` | igual a | `statusCode === 200` |
| `!==` | diferente de | `statusCode !== 404` |
| `>` | maior que | `responseTime > 500` |
| `<` | menor que | `responseTime < 500` |
| `>=` | maior ou igual | `points >= 100` |
| `<=` | menor ou igual | `points <= 100` |
 
#### `==` vs `===`
 
Em TypeScript usa sempre `===` (strict equality):
 
```typescript
200 == "200"    // true  — == converte o tipo antes de comparar ⚠️
200 === "200"   // false — === compara tipo e valor ✅
```
 
O `===` é mais seguro porque não faz conversões automáticas de tipo.
 
---
 
### Onde usar os dois pontos `:`
 
Os `:` em TypeScript servem **apenas** para type annotations:
 
```typescript
let nome: string               // depois do nome de uma variable
function f(x: number)          // depois do nome de um parameter
function f(): boolean          // depois dos parênteses da function (return type)
```
 
Em todo o resto — `if`, `return`, `=` — **não há `:`**.
 
```typescript
return true;    // ✅ sem :
return: true;   // ❌ erro de sintaxe
```
 
---
 
### Exercícios realizados
 
#### Exercício 1 — `isResponseFast`
 
Escreve uma function que recebe um `responseTime: number` e retorna `true` se for menor que 500.
 
```typescript
function isResponseFast(responseTime: number): boolean {
  if (responseTime < 500) {
    return true;
  } else {
    return false;
  }
}
 
const result1: boolean = isResponseFast(300);
const result2: boolean = isResponseFast(600);
 
console.log(result1);  // [LOG]: true
console.log(result2);  // [LOG]: false
```
 
#### Exercício 2 — `isValidStatusCode`
 
Escreve uma function que recebe um `statusCode: number` e retorna `true` apenas se for igual a 200.
 
```typescript
function isValidStatusCode(statusCode: number): boolean {
  if (statusCode === 200) {
    return true;
  } else {
    return false;
  }
}
 
const result1: boolean = isValidStatusCode(200);
const result2: boolean = isValidStatusCode(300);
const result3: boolean = isValidStatusCode(404);
 
console.log(result1);  // [LOG]: true
console.log(result2);  // [LOG]: false
console.log(result3);  // [LOG]: false
```
 
---
 
*Próximo conceito: **Objects** — como modelar respostas de APIs em TypeScript.*

---

## Sessão 2 — Objects

---

### Conceito 5 — Objects

Um **object** agrupa propriedades relacionadas numa única estrutura.

Em vez de variáveis soltas:

```typescript
let statusCode: number = 200;
let responseTime: number = 340;
let success: boolean = true;
```

Podes agrupar tudo num object:

```typescript
const response = {
  statusCode: 200,
  responseTime: 340,
  success: true
};
```

Para aceder a uma propriedade usa-se o `.` (dot notation):

```typescript
console.log(response.statusCode);  // [LOG]: 200
console.log(response.success);     // [LOG]: true
```

---

#### Type annotation com `interface`

Para objects, o TypeScript usa uma **interface** — define a "forma" esperada antes de criar o object:

```typescript
interface ApiResponse {
  statusCode: number;
  body: string;
}
```

Depois usas a interface como type:

```typescript
const response: ApiResponse = {
  statusCode: 200,
  body: "ok"
};
```

A interface é um contrato. Se quebrares o contrato, o TypeScript avisa:

```typescript
const response: ApiResponse = {
  statusCode: "200",  // ❌ ERRO — devia ser number, não string
  body: "ok"
};
```

#### Convenção de nomes

- Interfaces e classes → `PascalCase` → `ApiResponse`
- Variables e functions → `camelCase` → `response`, `myResponse`

---

#### Vários objects do mesmo type

Podes criar quantos objects quiseres com a mesma interface — cada um precisa do seu próprio nome:

```typescript
const responseSuccess: ApiResponse = { statusCode: 200, body: "ok" };
const responseFailure: ApiResponse = { statusCode: 400, body: "not found" };
```

---

#### Objects em functions

Podes passar um object como parameter de uma function:

```typescript
function isRequestSuccessful(response: ApiResponse): boolean {
  if (response.statusCode === 200 && response.body !== "") {
    return true;
  } else {
    return false;
  }
}
```

O parameter `response` é local — existe apenas dentro da função. Cá fora só tens acesso às variáveis que criaste nesse scope.

Para usar o resultado cá fora:

```typescript
const result: boolean = isRequestSuccessful(responseSuccess);
console.log(result);  // [LOG]: true
```

Ou diretamente, sem variável intermédia:

```typescript
console.log(isRequestSuccessful(responseSuccess));  // [LOG]: true
```

---

### Exercício realizado — `isRequestSuccessful`

```typescript
interface ApiResponse {
  statusCode: number;
  body: string;
}

const responseSuccess: ApiResponse = { statusCode: 200, body: "response" };
const responseFailure: ApiResponse = { statusCode: 400, body: "response" };

function isRequestSuccessful(response: ApiResponse): boolean {
  if (response.statusCode === 200 && response.body !== "") {
    return true;
  } else {
    return false;
  }
}

console.log(isRequestSuccessful(responseSuccess));              // [LOG]: true
console.log(isRequestSuccessful(responseFailure));              // [LOG]: false
console.log(isRequestSuccessful({ statusCode: 200, body: "" })); // [LOG]: false
```

---

### Exercícios de consolidação

#### Exercício — `isApiHealthy`

```typescript
interface ApiHealthCheck {
  endpoint: string;
  responseTime: number;
  isOnline: boolean;
}

const apiIsHealthy: ApiHealthCheck = {
  endpoint: "httpblablabla.com",
  responseTime: 100,
  isOnline: true,
};

const apiIsUnhealthy: ApiHealthCheck = {
  endpoint: "httpblablabla.com",
  responseTime: 600,
  isOnline: false,
};

function isApiHealthy(response: ApiHealthCheck): boolean {
  if (response.endpoint !== "" && response.responseTime < 500 && response.isOnline === true) {
    return true;
  } else {
    return false;
  }
}

console.log(isApiHealthy(apiIsHealthy));    // [LOG]: true
console.log(isApiHealthy(apiIsUnhealthy));  // [LOG]: false
```

#### Exercício — `canUserLogin`

```typescript
interface LoginPermission {
  userName: string;
  loginAttemptsNumber: number;
  isAccountBlocked: boolean;
}

const userCanLogin: LoginPermission = {
  userName: "Miguel",
  loginAttemptsNumber: 2,
  isAccountBlocked: false,
};

const userCannotLogin: LoginPermission = {
  userName: "Miguel",
  loginAttemptsNumber: 4,
  isAccountBlocked: true,
};

function canUserLogin(response: LoginPermission): boolean {
  if (response.loginAttemptsNumber < 3 && response.isAccountBlocked === false) {
    return true;
  } else {
    return false;
  }
}

console.log(canUserLogin(userCanLogin));    // [LOG]: true
console.log(canUserLogin(userCannotLogin)); // [LOG]: false
```

---

### Notas importantes

- **Erro de sintaxe** — o TypeScript sublinha e não deixa correr. Ex: esquecer `{` ou usar `,` em vez de `;` na interface.
- **Erro de lógica** — o código corre mas devolve resultados errados. Ex: `> 2` em vez de `< 3`. Não há aviso — tens de detetar pelo resultado.
- O parameter de uma função é **local** — só existe dentro das `{}` da função. Cá fora usa as variáveis que criaste.
- Nos exercícios criamos objects à mão (**mock data**). Numa framework real, os dados chegam da API via Playwright.

---

*Próximo conceito: **Arrays** — como guardar listas de valores (e de objects) em TypeScript.*

---

## Sessão 3 — Arrays

---

### Conceito 6 — Arrays

Um **array** guarda vários valores numa única variável, em ordem.

```typescript
const statusCodes: number[] = [200, 404, 500];
```

O `number[]` significa "array de numbers". Funciona com qualquer type:

```typescript
const testNames: string[] = ["Login Test", "Logout Test", "Register Test"];
const results: boolean[] = [true, false, true];
```

---

#### Aceder a elementos — índice começa em 0

```typescript
const statusCodes: number[] = [200, 404, 500];

console.log(statusCodes[0]);  // [LOG]: 200
console.log(statusCodes[1]);  // [LOG]: 404
console.log(statusCodes[2]);  // [LOG]: 500
```

---

#### Percorrer um array — `for` loop

Em vez de aceder elemento a elemento, o `for` loop faz isso automaticamente:

```typescript
for (const code of statusCodes) {
  console.log(code);
}
// [LOG]: 200
// [LOG]: 404
// [LOG]: 500
```

O `code` é uma variável temporária — em cada volta tem o valor do elemento atual. O nome é escolhido por ti.

**Como funciona por dentro:**
- Volta 1 → `code = 200` → executa o código dentro de `{}`
- Volta 2 → `code = 404` → executa o código dentro de `{}`
- Volta 3 → `code = 500` → executa o código dentro de `{}`
- Acabou o array → para

---

#### Arrays de objects

```typescript
interface ApiResponse {
  statusCode: number;
  body: string;
}

const apiResponses: ApiResponse[] = [
  { statusCode: 200, body: "ok" },
  { statusCode: 404, body: "not found" },
  { statusCode: 500, body: "server error" },
];

for (const response of apiResponses) {
  console.log(response.statusCode);  // acede à propriedade com dot notation
}
// [LOG]: 200
// [LOG]: 404
// [LOG]: 500
```

---

#### Arrays + functions — o padrão completo

```typescript
interface ApiResponse {
  statusCode: number;
  body: string;
}

const apiResponses: ApiResponse[] = [
  { statusCode: 200, body: "ok" },
  { statusCode: 404, body: "not found" },
  { statusCode: 500, body: "server error" },
];

function isRequestSuccessful(response: ApiResponse): boolean {
  if (response.statusCode === 200) {
    return true;
  } else {
    return false;
  }
}

for (const response of apiResponses) {
  console.log(isRequestSuccessful(response));
}
// [LOG]: true
// [LOG]: false
// [LOG]: false
```

Dentro do `for` loop, o `response` é um object individual em cada volta — passa-se diretamente à função como argumento.

---

### Exercícios de consolidação

#### Exercício — lista de resultados de testes

```typescript
interface Tests {
  testName: string;
  passed: boolean;
}

const allTests: Tests[] = [
  { testName: "test1", passed: true },
  { testName: "test2", passed: false },
  { testName: "test3", passed: false },
];

function testResults(response: Tests): boolean {
  if (response.passed === true) {
    return true;
  } else {
    return false;
  }
}

for (const result of allTests) {
  console.log(testResults(result));
}
// [LOG]: true
// [LOG]: false
// [LOG]: false
```

#### Exercício — endpoints e tempo de resposta

```typescript
interface ApiList {
  endpoints: string;
  time: number;
}

const endpointsWithTime: ApiList[] = [
  { endpoints: "endpoint1", time: 200 },
  { endpoints: "endpoint2", time: 100 },
  { endpoints: "endpoint3", time: 400 },
  { endpoints: "endpoint4", time: 600 },
];

function isApiFast(response: ApiList): boolean {
  if (response.time < 300) {
    return true;
  } else {
    return false;
  }
}

for (const fastApis of endpointsWithTime) {
  console.log(isApiFast(fastApis));
}
// [LOG]: true
// [LOG]: true
// [LOG]: false
// [LOG]: false
```

#### Exercício — produtos disponíveis para compra

```typescript
interface CelularPhones {
  productName: string;
  productPrice: number;
  stock: boolean;
}

const productInformation: CelularPhones[] = [
  { productName: "iphone 15", productPrice: 90, stock: true },
  { productName: "iphone 16", productPrice: 700, stock: false },
  { productName: "iphone 17", productPrice: 1000, stock: true },
  { productName: "iphone 17 pro", productPrice: 1400, stock: false },
];

function availablePhones(product: CelularPhones): boolean {
  if (product.stock === true && product.productPrice < 100) {
    return true;
  } else {
    return false;
  }
}

for (const phone of productInformation) {
  console.log(availablePhones(phone));
}
// [LOG]: true
// [LOG]: false
// [LOG]: false
// [LOG]: false
```

#### Exercício — voos prontos para embarque

```typescript
interface Flights {
  destination: string;
  seats: number;
  isDelayed: boolean;
}

const flightsDetails: Flights[] = [
  { destination: "Madrid", seats: 200, isDelayed: true },
  { destination: "London", seats: 300, isDelayed: false },
  { destination: "Lisbon", seats: 150, isDelayed: true },
  { destination: "Dubai", seats: 350, isDelayed: false },
];

function isFlightReadyForDeparture(flight: Flights): boolean {
  if (flight.seats > 0 && flight.isDelayed === false) {
    return true;
  } else {
    return false;
  }
}

for (const readyFlights of flightsDetails) {
  console.log(isFlightReadyForDeparture(readyFlights));
}
// [LOG]: false
// [LOG]: true
// [LOG]: false
// [LOG]: true
```

---

### Notas importantes

- A interface modela os **dados que chegam** — não os resultados da tua avaliação. A lógica de avaliação vive na função.
- O nome do parameter da função é escolha tua — `response`, `product`, `flight`, etc. O que importa é ser consistente dentro da função.
- **Erro de lógica em arrays:** `> 200` (mais de 200 lugares) é diferente de `> 0` (tem lugares disponíveis). O enunciado define a regra — lê com atenção.

---

*Próximo conceito: a definir na próxima sessão.*

---

## Sessão 4 — Optional Properties e Union Types

---

### Conceito 7 — Optional Properties

Por defeito todas as propriedades de uma interface são obrigatórias. O `?` torna uma propriedade opcional:

```typescript
interface ApiResponse {
  statusCode: number;
  body: string;
  errorMessage?: string;  // opcional — pode existir ou não
}
```

Objects com e sem a propriedade opcional são ambos válidos:

```typescript
const success: ApiResponse = { statusCode: 200, body: "ok" };                          // ✅ sem errorMessage
const error: ApiResponse = { statusCode: 404, body: "not found", errorMessage: "..." }; // ✅ com errorMessage
```

A interface modela os **dados que chegam** — se um campo só aparece em certos casos, usa `?`.

---

### Conceito 8 — Union Types

O `|` significa "ou" — uma propriedade pode ser de mais do que um type:

```typescript
interface ApiResponse {
  statusCode: number | string;  // pode ser number OU string
  body: string;
}

const r1: ApiResponse = { statusCode: 200, body: "ok" };    // number ✅
const r2: ApiResponse = { statusCode: "200", body: "ok" };  // string ✅
```

---

#### `typeof` — verificar o type em runtime

Quando uma propriedade é `number | string`, tens de verificar o type antes de comparar:

```typescript
typeof 200      // → "number"
typeof "hello"  // → "string"
typeof true     // → "boolean"
```

Usado numa função:

```typescript
function isResponseSuccessful(response: ApiResponse): boolean {
  if (typeof response.statusCode === "number") {
    return response.statusCode === 200;   // compara como number
  } else {
    return response.statusCode === "200"; // compara como string
  }
}
```

---

### Exercício realizado — API legacy com union types

```typescript
interface ApiLegacy {
  statusCode: string | number;
  endpoint: string;
}

const responses: ApiLegacy[] = [
  { endpoint: "endpoint 1", statusCode: 200 },    // number
  { endpoint: "endpoint 2", statusCode: "200" },  // string
  { endpoint: "endpoint 3", statusCode: 400 },    // falha
];

function isResponseSuccessful(response: ApiLegacy): boolean {
  if (typeof response.statusCode === "number") {
    return response.statusCode === 200;
  } else {
    return response.statusCode === "200";
  }
}

for (const result of responses) {
  console.log(isResponseSuccessful(result));
}
// [LOG]: true
// [LOG]: true
// [LOG]: false
```

---

*Próximo conceito: a definir na próxima sessão.*

---

## Sessão 5 — Type Aliases

---

### Conceito 9 — Type Aliases

O `type` é uma alternativa à `interface` — mas serve para casos diferentes.

#### Para objects — funciona igual à interface

```typescript
type ApiResponse = {
  statusCode: number;
  body: string;
};
```

#### Para union types — onde o `type` brilha

```typescript
type HttpMethod = "GET" | "POST" | "PUT" | "DELETE";
type Environment = "staging" | "production" | "development";
type StatusCode = number | string;
```

Só os valores definidos são permitidos — qualquer outro valor dá erro:

```typescript
let method: HttpMethod = "GET";    // ✅
let method2: HttpMethod = "PATCH"; // ❌ ERRO — não está na lista
```

---

#### `interface` vs `type` — quando usar

| | `interface` | `type` |
|---|---|---|
| Forma de um object | ✅ preferido | ✅ funciona |
| Union types | ❌ | ✅ |
| Valores fixos | ❌ | ✅ |

**Regra prática:**
- Estrutura de uma resposta de API → `interface`
- Lista de valores possíveis (métodos HTTP, ambientes, status) → `type`

---

## Sessão 6 — Enums

---

### Conceito 10 — Enums

Um **enum** define uma lista de valores válidos com nomes legíveis — semelhante ao `type` mas com melhor autocomplete no editor.

```typescript
enum HttpMethod {
  Get = "GET",
  Post = "POST",
  Patch = "PATCH",
  Put = "PUT",
  Delete = "DELETE",
}
```

Para usar o enum:

```typescript
console.log(HttpMethod.Get);  // [LOG]: "GET"
```

---

#### Enum + Interface + Array — o padrão completo

O enum define-se **antes** da interface porque a interface o usa como type:

```typescript
// 1. enum — lista de valores válidos
enum HttpMethod {
  Get = "GET",
  Post = "POST",
  Patch = "PATCH",
  Put = "PUT",
  Delete = "DELETE",
}

// 2. interface — usa o enum como type
interface HttpRequest {
  endpoint: string;
  method: HttpMethod;
}

// 3. array — usa o enum para preencher os valores
const methodTypes: HttpRequest[] = [
  { endpoint: "endpoint1", method: HttpMethod.Get },
  { endpoint: "endpoint2", method: HttpMethod.Patch },
  { endpoint: "endpoint3", method: HttpMethod.Delete },
  { endpoint: "endpoint4", method: HttpMethod.Post },
];

// 4. função — compara com o enum, não com a string direta
function isMethodReadable(result: HttpRequest): boolean {
  if (result.method === HttpMethod.Get) {
    return true;
  } else {
    return false;
  }
}

// 5. for loop
for (const readableMethod of methodTypes) {
  console.log(isMethodReadable(readableMethod));
}
// [LOG]: true
// [LOG]: false
// [LOG]: false
// [LOG]: false
```

---

#### O que o enum acrescenta

- **Segurança** — só os valores definidos são permitidos
- **Legibilidade** — `HttpMethod.Get` é mais claro que `"GET"`
- **Autocomplete** — o editor sugere as opções quando escreves `HttpMethod.`
- **Manutenção** — se mudares o valor do enum, atualiza em todo o lado automaticamente

---

*Próximo conceito: **`any`, `unknown`, `void`, `never`** — types especiais.*
