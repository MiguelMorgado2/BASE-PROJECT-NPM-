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

## Enums

```typescript
enum NomeDoEnum {
  NomeLegivel  = "valor",
  NomeLegivel2 = "valor2",
}
```

- Nome com **PascalCase** → `HttpMethod`, `TestStatus`
- Separador entre valores: `,`
- Ordem de definição: **enum → interface → array → função → for loop**

```typescript
enum HttpMethod {
  Get    = "GET",
  Post   = "POST",
  Delete = "DELETE",
}

// usar o enum
let method: HttpMethod = HttpMethod.Get;  // → "GET"

// comparar com o enum (não com a string direta)
if (result.method === HttpMethod.Get) { ... }
```

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

**Object simples sem interface** — quando é pontual e não precisas de reutilizar o type:

```typescript
const response = {
  statusCode: 200,
  body: "ok",
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

Duas formas de juntar strings com variáveis:

**Com `+`** — forma clássica:
```typescript
const name = "Miguel";
const code = 200;

"Hello " + name           // → "Hello Miguel"
"Status: " + code         // → "Status: 200"
"Hello " + name + " got " + code  // → "Hello Miguel got 200"
```

**Com template literals** — forma moderna e preferida:
```typescript
`Hello ${name}`           // → "Hello Miguel"
`Status: ${code}`         // → "Status: 200"
`Hello ${name} got ${code}` // → "Hello Miguel got 200"
```

**Anatomia do template literal:**
```
`texto antes ${variavel} texto depois`
 ↑                ↑                ↑
backtick        ${}            backtick
(abre)      (variável         (fecha)
            ou expressão)
```

- Usa `` ` `` (backtick) em vez de `"` ou `'`
- As variáveis ficam dentro de `${}`
- Podes ter quantos `${}` quiseres na mesma string
- O `${}` aceita variáveis, operações e chamadas de funções

```typescript
`Total: ${price * 2}`           // operação matemática
`Result: ${isValid(200)}`        // chamada de função
`${testName}: ${passed ? "passed" : "failed"}`  // condição
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

---

## Parâmetros Opcionais e Valores por Defeito

**Parâmetro opcional com `?`:**
```typescript
const nomeFuncao = (param1: string, param2?: number): string => {
  if (param2) {
    return `${param1}:${param2}`;
  } else {
    return param1;
  }
}

nomeFuncao("texto", 3000)  // param2 existe
nomeFuncao("texto")        // param2 é undefined
```

**Valor por defeito:**
```typescript
const nomeFuncao = (param1: string, param2: string = "default"): string => {
  return `${param1}: ${param2}`;
}

nomeFuncao("texto", "valor")  // param2 = "valor"
nomeFuncao("texto")           // param2 = "default"
```

- Os argumentos ligam-se pela **ordem** — primeiro valor → primeiro parâmetro
- Com `?` precisas de verificar se existe antes de usar
- Com valor por defeito o parâmetro sempre tem um valor — sem verificações

---

## Rest Parameters (`...args`)

```typescript
function nomeFuncao(...nomeDoArray: type[]): returnType {
  for (const item of nomeDoArray) {
    console.log(item);
  }
}

nomeFuncao(200, 404, 500);  // sem [] — qualquer número de argumentos
```

- `...` agrupa todos os argumentos num array dentro da função
- Tem de ser sempre o último parâmetro
- Raro em QA Automation — importante reconhecer quando aparece

---

## Overloads

```typescript
// assinaturas — sem corpo
function nomeFuncao(param: type1): returnType1;
function nomeFuncao(param: type2): returnType2;

// implementação — com corpo
function nomeFuncao(param: type1 | type2): returnType1 | returnType2 {
  if (typeof param === "type1") {
    // lógica para type1
  } else {
    // lógica para type2
  }
}
```

- Dá ao editor informação precisa sobre o return type para cada caso
- Raro em QA Automation — importante reconhecer quando aparece

---

## Array Methods

### `.filter()` — filtrar elementos

```typescript
const novoArray = arrayOriginal.filter((elemento) => condição);

// exemplo
const passing = tests.filter((test) => test.passed === true);
const slow    = requests.filter((req) => req.responseTime >= 500);
```

- Devolve novo array com elementos onde a condição é `true`
- O array original não é modificado
- O tamanho do resultado é igual ou menor que o original

### `.map()` — transformar elementos

```typescript
const novoArray = arrayOriginal.map((elemento) => transformação);

// exemplo
const endpoints = requests.map((req) => req.endpoint);
const names     = tests.map((test) => test.testName.toUpperCase());
```

- Devolve novo array com o **mesmo número** de elementos
- Cada elemento é transformado

### `.filter()` + `.map()` encadeados

```typescript
const resultado = array
  .filter((elemento) => condição)
  .map((elemento) => transformação);
```

### `.find()` — encontrar um elemento

```typescript
const elemento = arrayOriginal.find((elemento) => condição);

// exemplo
const firstError = responses.find((response) => response.statusCode >= 400);

// verificar antes de usar — pode ser undefined
if (firstError) {
  console.log(firstError.body);
}
```

- Devolve **um único elemento** (não um array)
- Se não encontrar → devolve `undefined`
- É quase sempre a última operação de uma cadeia

### `.some()` e `.every()` — verificar condições

```typescript
// some — existe pelo menos um?
const hasErrors = responses.some((res) => res.statusCode >= 400);

// every — todos passam?
const allSuccess = responses.every((res) => res.statusCode < 400);
```

- Devolvem sempre `boolean` — sem necessidade de `if`
- `.some()` → `true` se pelo menos um passar
- `.every()` → `true` só se todos passarem

### `.reduce()` — acumular um valor

```typescript
// somar valores
const total = array.reduce((acc, elemento) => acc + elemento.propriedade, 0);

// contar elementos
const count = array.reduce((acc, _item) => acc + 1, 0);
```

- `acc` — acumulador, guarda o resultado até ao momento
- `_item` com `_` — convenção para parâmetro não usado
- Último argumento `0` — valor inicial do acumulador

---

## Classes

```typescript
class NomeDaClass {
  propriedade1: type;
  propriedade2: type;

  constructor(propriedade1: type, propriedade2: type) {
    this.propriedade1 = propriedade1;
    this.propriedade2 = propriedade2;
  }

  nomeDoMetodo(): returnType {
    return this.propriedade1;
  }
}

// criar object — usa new
const obj = new NomeDaClass(valor1, valor2);

// chamar método — com ()
obj.nomeDoMetodo();

// aceder a propriedade — sem ()
obj.propriedade1;
```

**Forma curta do constructor (parameter properties):**

```typescript
class NomeDaClass {
  constructor(public propriedade1: type, public propriedade2: type) {}
  // public cria e preenche a propriedade automaticamente
}
```

**Interface vs Class:**
- Interface → descreve **dados**, desaparece em runtime, cria com `{ }`
- Class → cria **ferramentas com comportamento**, existe em runtime, cria com `new`

**`this`** → refere-se ao object que está a ser criado/usado

**Constructor:**
- Forma longa → quando precisas de lógica extra (transformar/validar)
- Forma curta → quando só guardas os valores diretamente
