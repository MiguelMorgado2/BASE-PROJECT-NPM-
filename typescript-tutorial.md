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

### Módulo 2 — Tipos e Estruturas ✅
10. ✅ Enums
11. ✅ `any`, `unknown`, `void`, `never` — types especiais
12. ✅ `null` e `undefined` — valores em falta
13. ✅ Type assertions (`as`)
14. ✅ Generics — introdução

### Módulo 3 — Functions Avançadas ✅
15. ✅ Arrow functions (`=>`)
16. ✅ Parâmetros opcionais e valores por defeito
17. ✅ Rest parameters (`...args`)
18. ✅ Overloads

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

## Módulo 1 — Fundamentos

---

### Conceito 1 — Variables e Types

Em TypeScript cada variável tem um **type** que define o que pode conter.
Sem types (JavaScript puro), só descobres erros quando o código corre.
Com types, o editor sublinha os erros **antes de correres** uma única linha.

#### Anatomia

```
let nomeDaVariavel: type = valor;
 ↑        ↑          ↑      ↑
keyword  nome       type   valor
```

- `let` ou `const` — keyword que declara a variável
- `nomeDaVariavel` — o nome que escolhes
- `: type` — o type annotation (o que pode conter)
- `= valor` — o valor inicial

#### Os tipos básicos (primitive types)

| Type | O que representa | Exemplo |
|---|---|---|
| `string` | Texto | `"Login Test"` |
| `number` | Número (inteiro ou decimal) | `200`, `3.14` |
| `boolean` | Verdadeiro ou falso | `true`, `false` |

#### Declaration vs Assignment

```typescript
let statusCode: number;   // declaration — dizes que existe e qual o type
statusCode = 200;         // assignment — dás um valor

let statusCode: number = 200;  // os dois na mesma linha
```

#### Type Inference

O TypeScript infere o type automaticamente quando atribuis um valor na declaration:

```typescript
let statusCode = 200;   // TypeScript infere: number
let testName = "Login"; // TypeScript infere: string
```

Nos primeiros tempos, **escreve sempre o type explicitamente**.

#### Exercício realizado

```typescript
let testName: string = "Login Test";
let statusCode: number = 200;
let testPassed: boolean = true;

console.log(testName);    // [LOG]: Login Test
console.log(statusCode);  // [LOG]: 200
console.log(testPassed);  // [LOG]: true
```

---

### Conceito 2 — `const` vs `let`

| Keyword | Quando usar |
|---|---|
| `let` | O valor pode ser **reatribuído** (alterado) mais tarde |
| `const` | O valor é atribuído uma vez e **nunca muda** |

#### Anatomia

```
const nomeDaVariavel: type = valor;
  ↑                              ↑
não pode ser reatribuída       valor fixo

let nomeDaVariavel: type = valor;
 ↑
pode ser reatribuída mais tarde
```

#### Exemplos

```typescript
let retryCount: number = 0;
retryCount = 1;   // ✅ reatribuição permitida

const apiUrl: string = "https://api.example.com";
apiUrl = "https://outro.com";   // ❌ ERRO — não podes mudar um const
```

> **Regra de ouro:** Usa sempre `const` por defeito. Só mudas para `let` quando precisares de reatribuir.

#### Exercício realizado

```typescript
const endpointUrl: string = "https://api.example.com/actions";  // nunca muda
const expectedStatusCode: number = 200;                          // nunca muda

let retryCount: number = 0;    // vai sendo incrementado
let actualStatusCode: number;  // vai receber o valor da resposta
```

---

### Conceito 3 — Functions e `if/else`

Uma **function** é um bloco de código com nome que podes reutilizar.

#### Anatomia

```
function nomeDaFunction(parameter: type): returnType {
    ↑           ↑              ↑      ↑        ↑
keyword       nome         parâmetro type   o que devolve
  // código aqui
}
```

- `parameter` — valor que a função recebe para trabalhar
- `returnType` — type do valor que a função devolve
- `{}` — delimitam o corpo da função

#### `if / else` — anatomia

```
if (condicao) {
 ↑      ↑
keyword condição entre ()

  // código se true
} else {
  // código se false
}
```

#### `console.log()` — anatomia

```
console.log(valor);
    ↑          ↑
objeto       o que imprimir
```

Guardar um valor numa variável não o mostra automaticamente — tens de usar `console.log`.

#### Exercícios realizados

```typescript
// Exercício 1 — isResponseFast
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

// Exercício 2 — isValidStatusCode
function isValidStatusCode(statusCode: number): boolean {
  if (statusCode === 200) {
    return true;
  } else {
    return false;
  }
}

console.log(isValidStatusCode(200));  // [LOG]: true
console.log(isValidStatusCode(404));  // [LOG]: false
```

---

### Conceito 4 — Operadores

#### Assignment vs Comparison

| Símbolo | Nome | O que faz | Quando usar |
|---|---|---|---|
| `=` | assignment | Guarda um valor | `let x = 5` |
| `===` | strict equality | Compara se iguais | Dentro de `if` |
| `!==` | strict inequality | Compara se diferentes | Dentro de `if` |

> **Regra:** Um `=` → estás a **dar** um valor. Dois ou três `=` → estás a **comparar** valores.

#### Operadores de comparação

| Símbolo | Significado | Exemplo QA |
|---|---|---|
| `===` | igual a | `statusCode === 200` |
| `!==` | diferente de | `statusCode !== 404` |
| `>` | maior que | `responseTime > 500` |
| `<` | menor que | `responseTime < 500` |
| `>=` | maior ou igual | `points >= 100` |
| `<=` | menor ou igual | `points <= 100` |

#### Operadores lógicos

| Símbolo | Significado | Exemplo |
|---|---|---|
| `&&` | E — as duas condições têm de ser verdadeiras | `statusCode === 200 && body !== ""` |
| `\|\|` | OU — pelo menos uma tem de ser verdadeira | `code === 200 \|\| code === 201` |
| `!` | NÃO — inverte o boolean | `!isBlocked` |

#### `==` vs `===`

```typescript
200 == "200"    // true  — converte o tipo antes de comparar ⚠️
200 === "200"   // false — compara tipo E valor ✅
```

Usa sempre `===` em TypeScript.

#### Onde usar os dois pontos `:`

```
let nome: string               // depois do nome de uma variável
function f(x: number)          // depois do nome de um parâmetro
function f(): boolean          // depois dos parênteses (return type)
const obj: NomeInterface = {}  // depois do nome de um object
```

Em `if`, `return`, `=` — **não há `:`**.

```typescript
return true;    // ✅
return: true;   // ❌ erro de sintaxe
```

---

### Conceito 5 — Objects e Interfaces

Um **object** agrupa propriedades relacionadas numa única estrutura.

#### Anatomia — Object

```
const nomeObject: NomeInterface = {
    ↑        ↑           ↑
  keyword   nome     type (interface)

  propriedade1: valor,   ← separador é vírgula ,
  propriedade2: valor,
};
```

#### Anatomia — Interface

```
interface NomeInterface {
    ↑           ↑
 keyword       nome (PascalCase)

  propriedade1: type;   ← separador é ponto e vírgula ;
  propriedade2: type;
  propriedade3?: type;  ← ? torna a propriedade opcional
}
```

#### Dot notation — aceder a propriedades

```
nomeObject.propriedade
     ↑    ↑      ↑
   object ponto  nome da propriedade
```

#### Convenções de nomes

| O quê | Convenção | Exemplo |
|---|---|---|
| Interface | PascalCase | `ApiResponse` |
| Object | camelCase | `responseSuccess` |
| Function | camelCase | `isLoginValid` |
| Variable | camelCase | `statusCode` |

#### Exercício realizado

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

console.log(isRequestSuccessful(responseSuccess));               // [LOG]: true
console.log(isRequestSuccessful(responseFailure));               // [LOG]: false
console.log(isRequestSuccessful({ statusCode: 200, body: "" })); // [LOG]: false
```

#### Exercícios de consolidação

```typescript
// isApiHealthy
interface ApiHealthCheck {
  endpoint: string;
  responseTime: number;
  isOnline: boolean;
}

function isApiHealthy(response: ApiHealthCheck): boolean {
  if (response.endpoint !== "" && response.responseTime < 500 && response.isOnline === true) {
    return true;
  } else {
    return false;
  }
}

// canUserLogin
interface LoginPermission {
  userName: string;
  loginAttemptsNumber: number;
  isAccountBlocked: boolean;
}

function canUserLogin(response: LoginPermission): boolean {
  if (response.loginAttemptsNumber < 3 && response.isAccountBlocked === false) {
    return true;
  } else {
    return false;
  }
}
```

> **Notas:**
> - **Erro de sintaxe** — o TypeScript sublinha e não deixa correr
> - **Erro de lógica** — o código corre mas devolve resultados errados — tens de detetar pelo resultado
> - O parâmetro de uma função é **local** — só existe dentro das `{}`
> - Nos exercícios criamos objects à mão (**mock data**). Numa framework real, os dados chegam da API

---

### Conceito 6 — Arrays e `for` loop

Um **array** guarda vários valores numa única variável, em ordem.

#### Anatomia — Array

```
const nomeDoArray: type[] = [valor1, valor2, valor3];
    ↑       ↑        ↑               ↑
  keyword  nome    type[]        elementos
                    ↑
              [] significa "array de"
```

#### Anatomia — `for` loop

```
for (const nomeTemporario of nomeDoArray) {
  ↑          ↑                   ↑
keyword   variável            o array
          temporária        a percorrer

  console.log(nomeTemporario);  // código executado em cada volta
}
```

- `nomeTemporario` — variável local que em cada volta tem o valor do elemento atual
- O nome é escolhido por ti — deve fazer sentido para o contexto

#### Como funciona por dentro

```
array: [200, 404, 500]

Volta 1 → nomeTemporario = 200 → executa o código
Volta 2 → nomeTemporario = 404 → executa o código
Volta 3 → nomeTemporario = 500 → executa o código
Acabou → para
```

#### Aceder a elementos — índice começa em 0

```typescript
const codes: number[] = [200, 404, 500];
//  índice:               0    1    2

console.log(codes[0]);  // [LOG]: 200
console.log(codes[2]);  // [LOG]: 500
```

#### Exercício realizado — Arrays + Functions

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

---

### Conceito 7 — Optional Properties `?`

O `?` torna uma propriedade da interface opcional — pode existir ou não.

#### Anatomia

```
interface NomeInterface {
  propriedade1: type;    // obrigatória — tem de existir sempre
  propriedade2?: type;   // opcional — pode não existir
                  ↑
                  ? = opcional
}
```

#### Exemplo

```typescript
interface ApiResponse {
  statusCode: number;
  body: string;
  errorMessage?: string;  // opcional
}

// ambos válidos:
const success: ApiResponse = { statusCode: 200, body: "ok" };
const error: ApiResponse   = { statusCode: 404, body: "not found", errorMessage: "Resource not found" };
```

#### Exercício realizado

```typescript
interface ErrorDetails {
  errorName: string;
  errorCode: number;
  errorMessage?: string;
}

const errors: ErrorDetails[] = [
  { errorName: "Not found",    errorCode: 404 },
  { errorName: "Server Error", errorCode: 500, errorMessage: "Critical, the server failed" },
  { errorName: "Access Error", errorCode: 401 },
];

function isErrorCritical(typeOfError: ErrorDetails): boolean {
  if (typeOfError.errorCode === 500) {
    return true;
  } else {
    return false;
  }
}

for (const errorType of errors) {
  console.log(isErrorCritical(errorType));
}
// [LOG]: false
// [LOG]: true
// [LOG]: false
```

---

### Conceito 8 — Union Types `|` e `typeof`

#### Union Types — Anatomia

```
propriedade: type1 | type2
                  ↑
                  | significa "ou"
```

```typescript
interface ApiResponse {
  statusCode: number | string;  // pode ser number OU string
  body: string;
}

const r1: ApiResponse = { statusCode: 200,   body: "ok" };  // number ✅
const r2: ApiResponse = { statusCode: "200", body: "ok" };  // string ✅
```

#### `typeof` — verificar o type em runtime

```
typeof valor
   ↑     ↑
keyword  variável a verificar
→ devolve "number", "string", ou "boolean"
```

```typescript
typeof 200      // → "number"
typeof "hello"  // → "string"
typeof true     // → "boolean"
```

Usado quando uma propriedade é union type — tens de saber com qual estás a trabalhar antes de usar:

```typescript
if (typeof valor === "number") {
  // aqui o TypeScript sabe que é number
} else if (typeof valor === "string") {
  // aqui o TypeScript sabe que é string
} else {
  // safety net
}
```

#### Exercício realizado

```typescript
interface ApiLegacy {
  statusCode: string | number;
  endpoint: string;
}

const responses: ApiLegacy[] = [
  { endpoint: "endpoint 1", statusCode: 200 },
  { endpoint: "endpoint 2", statusCode: "200" },
  { endpoint: "endpoint 3", statusCode: 400 },
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

### Conceito 9 — Type Aliases (`type`)

#### Anatomia

```
type NomeDoType = valor1 | valor2 | valor3;
  ↑       ↑           ↑
keyword  nome      valores possíveis separados por |
```

```typescript
type HttpMethod  = "GET" | "POST" | "PUT" | "DELETE";
type Environment = "staging" | "production" | "development";
type StatusCode  = number | string;
```

Só os valores definidos são permitidos:

```typescript
let method: HttpMethod = "GET";    // ✅
let method2: HttpMethod = "PATCH"; // ❌ ERRO — não está na lista
```

#### `interface` vs `type`

| | `interface` | `type` |
|---|---|---|
| Forma de um object | ✅ preferido | ✅ funciona |
| Union types / valores fixos | ❌ | ✅ |

**Regra prática:**
- Estrutura de uma resposta de API → `interface`
- Lista de valores possíveis → `type`

#### Exercício realizado

```typescript
type HttpMethod = "GET" | "POST" | "PUT" | "DELETE";

let method1: HttpMethod = "GET";    // ✅
let method2: HttpMethod = "PATCH";  // ❌ ERRO
```

---

## Módulo 2 — Tipos e Estruturas

---

### Conceito 10 — Enums

Um **enum** define uma lista de valores válidos com nomes legíveis — o editor sugere as opções automaticamente.

#### Anatomia

```
enum NomeDoEnum {
  ↑       ↑
keyword  nome (PascalCase)

  NomeLegivel = "valor",   ← separador é vírgula ,
  NomeLegivel2 = "valor2",
}
```

#### Ordem de definição — enum antes da interface

```typescript
// 1. enum — define os valores possíveis
enum HttpMethod {
  Get    = "GET",
  Post   = "POST",
  Patch  = "PATCH",
  Put    = "PUT",
  Delete = "DELETE",
}

// 2. interface — usa o enum como type
interface HttpRequest {
  endpoint: string;
  method: HttpMethod;   // ← o type é o enum
}

// 3. array — usa o enum para preencher os valores
const requests: HttpRequest[] = [
  { endpoint: "endpoint1", method: HttpMethod.Get },
  { endpoint: "endpoint2", method: HttpMethod.Post },
];

// 4. função — compara com o enum, não com a string direta
function isReadRequest(result: HttpRequest): boolean {
  if (result.method === HttpMethod.Get) {
    return true;
  } else {
    return false;
  }
}

// 5. for loop
for (const request of requests) {
  console.log(isReadRequest(request));
}
// [LOG]: true
// [LOG]: false
```

#### O que o enum acrescenta

- **Segurança** — só os valores definidos são permitidos
- **Legibilidade** — `HttpMethod.Get` é mais claro que `"GET"`
- **Autocomplete** — o editor sugere as opções quando escreves `HttpMethod.`

---

### Conceito 11 — Types Especiais

#### `any` — desativa a verificação de types

```typescript
let valor: any = 200;
valor = "hello";   // ✅ sem erro — mas perdes a proteção do TypeScript
```

> Evita `any` sempre que possível.

#### `unknown` — any seguro

```typescript
// anatomia
function nomeFuncao(data: unknown): string {
                          ↑
                    aceita qualquer valor
                    mas obriga a verificar antes de usar

  if (typeof data === "string") {
    return data.toUpperCase();  // ✅ só usa depois de verificar
  } else {
    return "not a string";
  }
}
```

#### `void` — funções que não devolvem nada

```typescript
// anatomia
function nomeFuncao(param: string): void {
                                     ↑
                              não devolve nada — só executa ações

  console.log(param);  // sem return
}

nomeFuncao("hello");  // chama diretamente — sem guardar resultado
```

Diferença prática:
- Função com `boolean` → **calcula** algo → guardas em `const`
- Função com `void` → **faz** algo → chamas diretamente

#### `never` — funções que nunca terminam normalmente

```typescript
function throwError(message: string): never {
  throw new Error(message);  // lança sempre um erro — nunca devolve
}
```

#### Exercícios realizados

```typescript
// void — logTestResult
function logTestResult(testName: string, passed: boolean): void {
  if (passed === true) {
    console.log(`${testName}: passed`);
  } else {
    console.log(`${testName}: failed`);
  }
}

logTestResult("Login Test", true);   // [LOG]: Login Test: passed
logTestResult("Logout Test", false); // [LOG]: Logout Test: failed

// unknown — parseApiResponse
function parseApiResponse(data: unknown): string {
  if (typeof data === "string") {
    return data.toUpperCase();
  } else {
    return "not a string";
  }
}

console.log(parseApiResponse("hello")); // [LOG]: "HELLO"
console.log(parseApiResponse(200));     // [LOG]: "not a string"

// unknown + union return type
function validateStatusCode(parameter: unknown): boolean | string {
  if (typeof parameter === "number") {
    return parameter < 400;
  } else {
    return "invalid data";
  }
}

console.log(validateStatusCode(200));     // [LOG]: true
console.log(validateStatusCode(500));     // [LOG]: false
console.log(validateStatusCode("hello")); // [LOG]: "invalid data"
```

---

### Conceito 12 — `null` e `undefined`

| | Significa |
|---|---|
| `undefined` | Ninguém atribuiu nada — a variável existe mas está vazia |
| `null` | Foi explicitamente definido como "sem valor" |

#### Anatomia

```typescript
let valor: string | undefined;        // não atribuído → undefined
let valor2: string | null = null;     // explicitamente vazio → null
```

#### Verificar antes de usar

```typescript
// forma explícita
if (response.errorMessage !== null) {
  console.log(response.errorMessage.toUpperCase());  // ✅ seguro
}

// forma curta — "truthy check"
if (response.errorMessage) {
  console.log(response.errorMessage.toUpperCase());  // ✅ só entra se existir
}
```

#### `.toUpperCase()` — normalizar strings

Converte para maiúsculas — útil para comparações independentes do formato:

```typescript
"staging".toUpperCase()  // → "STAGING"
"Staging".toUpperCase()  // → "STAGING"
"STAGING".toUpperCase()  // → "STAGING"

if (env.toUpperCase() === "STAGING") { ... }  // aceita qualquer formato
```

#### Exercício realizado

```typescript
interface ApiResponseRules {
  statusCode: number;
  errorMessage: string | null;
}

const apiResponses: ApiResponseRules[] = [
  { statusCode: 500, errorMessage: "server error" },
  { statusCode: 400, errorMessage: "wrong url" },
  { statusCode: 200, errorMessage: null },
];

function actualApiResponse(responses: ApiResponseRules): string {
  if (responses.errorMessage !== null) {
    return responses.errorMessage.toUpperCase();
  } else {
    return "no error";
  }
}

for (const response of apiResponses) {
  console.log(actualApiResponse(response));
}
// [LOG]: "SERVER ERROR"
// [LOG]: "WRONG URL"
// [LOG]: "no error"
```

---

### Conceito 13 — Type Assertions (`as`)

O `as` diz ao TypeScript o type de um valor quando ele não consegue inferir.

#### Anatomia

```
const variavel = outraVariavel as NomeDoType;
                              ↑
                              as = "confia em mim, é este type"
```

```typescript
const data: unknown = "hello";
const message = data as string;       // assumes que é string
console.log(message.toUpperCase());   // ✅ funciona
```

#### `typeof` vs `as`

| | `typeof` | `as` |
|---|---|---|
| O que faz | Verifica o type em runtime | Assume o type sem verificar |
| Segurança | ✅ seguro | ⚠️ perigoso se estiveres errado |
| Quando usar | Dados `unknown` | Quando tens a certeza mas o TS não sabe |

```typescript
// perigoso — assumes errado
const data: unknown = 200;
const message = data as string;
console.log(message.toUpperCase());  // 💥 erro em runtime

// uso real em Playwright
const body = await response.json() as UserProfile;
```

---

### Conceito 14 — Generics

Um **Generic** é um placeholder de type — escreves a função uma vez e funciona com qualquer type.

#### Anatomia

```
function nomeFuncao<T>(parametro: T[]): T {
                    ↑              ↑    ↑
                    T = placeholder  usa T como type
                    (pode ser qualquer nome)
  return parametro[0];
}
```

O `T` substitui-se pelo type real na chamada:

```typescript
getFirst([200, 404, 500]);         // T = number → devolve number
getFirst(["GET", "POST", "PUT"]);  // T = string → devolve string
```

Em QA Automation vês Generics no Playwright:

```typescript
const body = await response.json<UserProfile>();  // T = UserProfile
```

> O `T` é só uma convenção — o importante é reconhecê-lo quando aparece.

---

## Módulo 3 — Functions Avançadas

---

### Conceito 15 — Arrow Functions

Uma forma mais compacta de escrever funções.

#### Anatomia — comparação das três versões

```typescript
// versão clássica
function nomeFuncao(param: type): returnType {
  return valor;
}

// arrow function com {}
const nomeFuncao = (param: type): returnType => {
                                              ↑
                                              => substitui a palavra "function"
  return valor;
}

// arrow function sem {} — só uma linha
const nomeFuncao = (param: type): returnType => valor;
//                                              ↑
//                          sem {} e sem return — TypeScript assume o return
```

**Regra:** quando a função tem só uma linha que devolve um valor, podes omitir `{}` e `return`.

#### Exercício realizado

```typescript
const isStatusSuccess    = (code: number): boolean  => code < 400;
const getEnvironmentUrl  = (env: string): string    => "https://" + env + ".api.com";
const isTestPassed       = (passed: boolean): boolean => passed === true;
```

---

### Conceito 16 — Parâmetros Opcionais e Valores por Defeito

#### Parâmetro opcional com `?`

```
const nomeFuncao = (param1: type, param2?: type): returnType => { ... }
                                          ↑
                                          ? = pode não ser passado
                                              se não for → valor é undefined
```

```typescript
const getBaseUrl = (env: string, port?: number): string => {
  if (port) {                         // se port existe (não é undefined)
    return `https://${env}:${port}`;
  } else {
    return `https://${env}`;
  }
}

getBaseUrl("localhost", 3000)  // port=3000   → "https://localhost:3000"
getBaseUrl("localhost")        // port=undefined → "https://localhost"
```

#### Valor por defeito

```
const nomeFuncao = (param1: type, param2: type = "valor"): returnType => { ... }
                                                   ↑
                                          = define o valor a usar
                                            quando nada é passado
```

```typescript
const createTestName = (feature: string, scenario: string = "default"): string => {
  return `${feature}: ${scenario}`;
}

createTestName("Login", "valid credentials")  // → "Login: valid credentials"
createTestName("Login")                       // → "Login: default"
```

#### Diferença entre `?` e valor por defeito

| | `?` | valor por defeito |
|---|---|---|
| Valor quando não passado | `undefined` | o valor que definiste |
| Precisas de `if/else`? | sim | não |
| Quando usar | quando a ausência tem significado | quando há um valor sensato |

#### Template literals — concatenar strings

```
`texto ${variavel} texto`
 ↑          ↑
backtick   ${ } insere o valor da variável
```

```typescript
const name = "Miguel";
const code = 200;

`Hello ${name}`              // → "Hello Miguel"
`Status: ${code}`            // → "Status: 200"
`${name} got ${code}`        // → "Miguel got 200"
`Total: ${price * 2}`        // → operação dentro de ${}
`Result: ${isValid(200)}`    // → chamada de função dentro de ${}
```

---

*Próximo conceito: **Rest parameters (`...args`)***

---

### Conceito 17 — Rest Parameters (`...args`)

Permite que uma função aceite qualquer número de argumentos diretamente, sem precisar de passar um array.

#### Anatomia

```
function nomeFuncao(...nomeDoArray: type[]): returnType {
                    ↑                 ↑
                    ... agrupa        é sempre um array
                    tudo num array    dentro da função
}
```

- O `...` antes do nome agrupa todos os argumentos num array
- Dentro da função tratas como um array normal
- Tem de ser **sempre o último parâmetro**

#### Diferença prática

```typescript
// sem rest parameters — tens de passar um array com []
function hasErrors(codes: number[]): boolean { ... }
hasErrors([200, 404, 500]);

// com rest parameters — passas os valores diretamente
function hasErrors(...codes: number[]): boolean { ... }
hasErrors(200, 404, 500);  // sem []
hasErrors(200, 201);       // qualquer número de argumentos
hasErrors(400);
```

O resultado dentro da função é o mesmo — `codes` é sempre um array. A diferença é só como chamas a função.

#### Combinação com outros parâmetros

```typescript
function logResults(testSuite: string, ...codes: number[]): void {
  console.log(`Suite: ${testSuite}`);
  for (const code of codes) {
    console.log(code);
  }
}

logResults("Login Suite", 200, 404, 500);
// [LOG]: Suite: Login Suite
// [LOG]: 200
// [LOG]: 404
// [LOG]: 500
```

> **Nota:** Rest parameters são raros em QA Automation — mais importante reconhecê-los quando aparecem do que usá-los ativamente.

---

*Próximo conceito: **Overloads***

---

### Conceito 18 — Overloads

Permitem que uma função tenha assinaturas diferentes dependendo dos tipos de argumentos.

#### Anatomia

```
// 1. declaras as assinaturas possíveis — sem corpo
function nomeFuncao(param: type1): returnType1;
function nomeFuncao(param: type2): returnType2;

// 2. implementas com union type — com corpo
function nomeFuncao(param: type1 | type2): returnType1 | returnType2 {
  // lógica aqui
}
```

#### Exemplo

```typescript
// assinaturas
function formatStatus(code: number): string;
function formatStatus(code: string): string;

// implementação
function formatStatus(code: number | string): string {
  if (typeof code === "number") {
    return `Status: ${code}`;
  } else {
    return `Status: ${code.toUpperCase()}`;
  }
}

console.log(formatStatus(200));   // [LOG]: "Status: 200"
console.log(formatStatus("ok"));  // [LOG]: "Status: OK"
```

A vantagem sobre union type simples é o **intellisense** — o editor sabe exatamente qual a assinatura correta para cada tipo de argumento.

> **Nota:** Overloads são raros em QA Automation — mais importante reconhecê-los quando aparecem.

---

*Próximo módulo: **Array Methods** — `.filter()`, `.map()`, `.find()`, `.some()`, `.every()`, `.reduce()`*
