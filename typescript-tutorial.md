# TypeScript Tutorial 1 — QA Automation
> Documento de estudo progressivo. Atualizado ao longo das sessões de tutoria.
 
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

*Próximo conceito: a definir na próxima sessão.*
