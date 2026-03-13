# 📘 TUTORIAL COMPLETO DE TYPESCRIPT - Do Zero ao Avançado

## Índice

1. [Introdução ao TypeScript](#introdução-ao-typescript)
2. [Instalação e Configuração](#instalação-e-configuração)
3. [Tipos Básicos](#tipos-básicos)
4. [Variáveis e Constantes](#variáveis-e-constantes)
5. [Funções](#funções)
6. [Arrays e Tuplas](#arrays-e-tuplas)
7. [Objetos](#objetos)
8. [Interfaces](#interfaces)
9. [Types vs Interfaces](#types-vs-interfaces)
10. [Classes](#classes)
11. [Enums](#enums)
12. [Generics](#generics)
13. [Union e Intersection Types](#union-e-intersection-types)
14. [Type Assertions](#type-assertions)
15. [Módulos (Import/Export)](#módulos-importexport)
16. [Async/Await e Promises](#asyncawait-e-promises)
17. [Decorators](#decorators)
18. [Utility Types](#utility-types)
19. [Boas Práticas](#boas-práticas)
20. [Exercícios Práticos](#exercícios-práticos)

---

## Introdução ao TypeScript

### O que é TypeScript?

TypeScript é uma linguagem de programação criada pela Microsoft que é um "superset" do JavaScript. Isto significa que:

- ✅ Todo o código JavaScript válido é também TypeScript válido
- ✅ Adiciona **tipos** ao JavaScript
- ✅ Ajuda a encontrar erros **antes** de executar o código
- ✅ Torna o código mais **seguro** e **fácil de manter**

### JavaScript vs TypeScript

**JavaScript:**

```javascript
function somar(a, b) {
  return a + b;
}

somar(5, 3); // 8 ✅
somar(5, "3"); // "53" ❌ (concatena em vez de somar!)
somar(5); // NaN ❌ (b é undefined)
```

**TypeScript:**

```typescript
function somar(a: number, b: number): number {
  return a + b;
}

somar(5, 3); // 8 ✅
somar(5, "3"); // ERRO! ❌ TypeScript avisa antes de executar
somar(5); // ERRO! ❌ Falta o segundo parâmetro
```

### Porquê usar TypeScript?

1. **Menos bugs** - Erros são detetados durante a escrita do código
2. **Melhor autocompletar** - O editor sabe que métodos/propriedades existem
3. **Refactoring seguro** - Podes renomear variáveis com confiança
4. **Documentação automática** - Os tipos servem como documentação
5. **Código mais legível** - Sabes que tipo de dados esperar

---

## Instalação e Configuração

### Instalar Node.js

1. Ir a https://nodejs.org/
2. Descarregar a versão LTS (recomendada)
3. Instalar

### Instalar TypeScript

Abrir terminal e executar:

```bash
npm install -g typescript
```

Verificar instalação:

```bash
tsc --version
```

### Criar Projeto TypeScript

```bash
# Criar pasta do projeto
mkdir meu-projeto-typescript
cd meu-projeto-typescript

# Inicializar projeto Node.js
npm init -y

# Instalar TypeScript localmente
npm install --save-dev typescript

# Criar ficheiro de configuração
npx tsc --init
```

### Ficheiro tsconfig.json

Este ficheiro configura o TypeScript:

```json
{
  "compilerOptions": {
    "target": "ES2020", // Versão JavaScript de saída
    "module": "commonjs", // Sistema de módulos
    "outDir": "./dist", // Pasta para ficheiros compilados
    "rootDir": "./src", // Pasta com código fonte
    "strict": true, // Ativa verificações estritas
    "esModuleInterop": true, // Compatibilidade com módulos
    "skipLibCheck": true // Ignora erros em bibliotecas
  }
}
```

### Compilar TypeScript

```bash
# Compilar um ficheiro
tsc meu-ficheiro.ts

# Compilar todos os ficheiros do projeto
tsc

# Compilar e observar mudanças
tsc --watch
```

---

## Tipos Básicos

TypeScript tem vários tipos primitivos:

### 1. Number (Números)

```typescript
let idade: number = 25;
let preco: number = 19.99;
let temperatura: number = -5;
let hexadecimal: number = 0xff;
let binario: number = 0b1010;

// ERRO - não pode ser string
let numero: number = "25"; // ❌
```

### 2. String (Texto)

```typescript
let nome: string = "João";
let apelido: string = "Silva";
let frase: string = `Olá, ${nome}!`; // Template string

// Métodos de string
let maiusculas: string = nome.toUpperCase(); // "JOÃO"
let tamanho: number = nome.length; // 4
```

### 3. Boolean (Verdadeiro/Falso)

```typescript
let ativo: boolean = true;
let completo: boolean = false;

// Operações lógicas
let resultado: boolean = ativo && completo; // false
let outra: boolean = ativo || completo; // true
let negacao: boolean = !ativo; // false
```

### 4. Any (Qualquer tipo)

```typescript
let qualquerCoisa: any = 5;
qualquerCoisa = "texto"; // OK
qualquerCoisa = true; // OK
qualquerCoisa = { x: 10 }; // OK

// ⚠️ EVITAR usar 'any' - perde as vantagens do TypeScript!
```

### 5. Unknown (Desconhecido)

```typescript
let valor: unknown = 5;

// Não podes usar diretamente
let numero: number = valor; // ❌ ERRO

// Tens de verificar o tipo primeiro
if (typeof valor === "number") {
  let numero: number = valor; // ✅ OK
}
```

### 6. Void (Sem retorno)

```typescript
function mostrarMensagem(): void {
  console.log("Olá!");
  // Não retorna nada
}

// Função que retorna void não pode retornar valor
function erro(): void {
  return 5; // ❌ ERRO
}
```

### 7. Null e Undefined

```typescript
let nulo: null = null;
let indefinido: undefined = undefined;

// Útil para valores opcionais
let nome: string | null = null;
nome = "João"; // OK
```

### 8. Never (Nunca retorna)

```typescript
// Função que lança erro (nunca retorna)
function lancarErro(mensagem: string): never {
  throw new Error(mensagem);
}

// Loop infinito (nunca retorna)
function loopInfinito(): never {
  while (true) {
    // ...
  }
}
```

---

## Variáveis e Constantes

### let (Variável)

```typescript
let idade: number = 25;
idade = 26; // ✅ Pode mudar

let nome: string;
nome = "João"; // ✅ Pode atribuir depois
```

### const (Constante)

```typescript
const PI: number = 3.14159;
PI = 3.14; // ❌ ERRO - não pode mudar

const nome: string = "João";
nome = "Maria"; // ❌ ERRO

// Mas objetos const podem ter propriedades alteradas
const pessoa = { nome: "João", idade: 25 };
pessoa.idade = 26; // ✅ OK
pessoa = { nome: "Maria", idade: 30 }; // ❌ ERRO
```

### var (Evitar!)

```typescript
var x = 10; // ⚠️ Não usar! Usar 'let' ou 'const'
```

### Inferência de Tipos

TypeScript pode deduzir o tipo automaticamente:

```typescript
let numero = 5; // TypeScript sabe que é number
let texto = "Olá"; // TypeScript sabe que é string
let ativo = true; // TypeScript sabe que é boolean

numero = "texto"; // ❌ ERRO - TypeScript sabe que é number
```

---

## Funções

### Declaração Básica

```typescript
// Função com tipos explícitos
function somar(a: number, b: number): number {
  return a + b;
}

let resultado: number = somar(5, 3); // 8
```

### Parâmetros Opcionais

```typescript
function saudar(nome: string, titulo?: string): string {
  if (titulo) {
    return `Olá, ${titulo} ${nome}!`;
  }
  return `Olá, ${nome}!`;
}

saudar("João"); // "Olá, João!"
saudar("João", "Dr."); // "Olá, Dr. João!"
```

### Parâmetros com Valor Padrão

```typescript
function criarUsuario(nome: string, idade: number = 18): object {
  return { nome, idade };
}

criarUsuario("João"); // { nome: "João", idade: 18 }
criarUsuario("Maria", 25); // { nome: "Maria", idade: 25 }
```

### Rest Parameters (Parâmetros Variáveis)

```typescript
function somarTodos(...numeros: number[]): number {
  return numeros.reduce((total, num) => total + num, 0);
}

somarTodos(1, 2, 3); // 6
somarTodos(1, 2, 3, 4, 5); // 15
```

### Arrow Functions (Funções Seta)

```typescript
// Sintaxe tradicional
function multiplicar(a: number, b: number): number {
  return a * b;
}

// Arrow function
const multiplicar = (a: number, b: number): number => {
  return a * b;
};

// Arrow function simplificada (retorno implícito)
const multiplicar = (a: number, b: number): number => a * b;

// Com um parâmetro (parênteses opcionais)
const dobrar = (x: number): number => x * 2;
```

### Function Types (Tipos de Função)

```typescript
// Definir tipo de função
type Operacao = (a: number, b: number) => number;

const somar: Operacao = (a, b) => a + b;
const subtrair: Operacao = (a, b) => a - b;
const multiplicar: Operacao = (a, b) => a * b;

// Usar como parâmetro
function calcular(a: number, b: number, operacao: Operacao): number {
  return operacao(a, b);
}

calcular(5, 3, somar); // 8
calcular(5, 3, subtrair); // 2
calcular(5, 3, multiplicar); // 15
```

### Overloading (Sobrecarga)

```typescript
// Declarações
function processar(valor: string): string;
function processar(valor: number): number;
function processar(valor: boolean): boolean;

// Implementação
function processar(
  valor: string | number | boolean,
): string | number | boolean {
  if (typeof valor === "string") {
    return valor.toUpperCase();
  }
  if (typeof valor === "number") {
    return valor * 2;
  }
  return !valor;
}

processar("olá"); // "OLÁ"
processar(5); // 10
processar(true); // false
```

---

## Arrays e Tuplas

### Arrays (Listas)

```typescript
// Array de números
let numeros: number[] = [1, 2, 3, 4, 5];
let outrosNumeros: Array<number> = [6, 7, 8, 9];

// Array de strings
let nomes: string[] = ["João", "Maria", "Pedro"];

// Array de qualquer tipo (evitar!)
let misturado: any[] = [1, "texto", true];

// Métodos de array
numeros.push(6); // Adiciona no fim
numeros.pop(); // Remove do fim
numeros.unshift(0); // Adiciona no início
numeros.shift(); // Remove do início
let tamanho: number = numeros.length;

// Iterar sobre array
numeros.forEach((num) => {
  console.log(num);
});

// Map (transformar)
let dobrados: number[] = numeros.map((num) => num * 2);

// Filter (filtrar)
let pares: number[] = numeros.filter((num) => num % 2 === 0);

// Find (encontrar)
let primeiro: number | undefined = numeros.find((num) => num > 3);

// Reduce (reduzir)
let soma: number = numeros.reduce((total, num) => total + num, 0);
```

### Arrays Multidimensionais

```typescript
// Matriz 2D
let matriz: number[][] = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9],
];

console.log(matriz[0][0]); // 1
console.log(matriz[1][2]); // 6
```

### Tuplas (Arrays com tipos fixos)

```typescript
// Tupla com 2 elementos: string e number
let pessoa: [string, number] = ["João", 25];

console.log(pessoa[0]); // "João"
console.log(pessoa[1]); // 25

// ERRO - ordem errada
let outra: [string, number] = [25, "João"]; // ❌

// Tupla com 3 elementos
let coordenadas: [number, number, number] = [10, 20, 30];

// Desestruturação
let [nome, idade] = pessoa;
console.log(nome); // "João"
console.log(idade); // 25
```

### Readonly Arrays

```typescript
let numeros: readonly number[] = [1, 2, 3];

numeros.push(4); // ❌ ERRO - não pode modificar
numeros[0] = 10; // ❌ ERRO - não pode modificar

// Alternativa
let outrosNumeros: ReadonlyArray<number> = [1, 2, 3];
```

---

## Objetos

### Objetos Básicos

```typescript
// Objeto simples
let pessoa = {
  nome: "João",
  idade: 25,
  ativo: true,
};

// Aceder propriedades
console.log(pessoa.nome); // "João"
console.log(pessoa["idade"]); // 25

// Modificar propriedades
pessoa.idade = 26;
pessoa.nome = "João Silva";
```

### Objetos com Tipos Explícitos

```typescript
let pessoa: {
  nome: string;
  idade: number;
  ativo: boolean;
} = {
  nome: "João",
  idade: 25,
  ativo: true,
};
```

### Propriedades Opcionais

```typescript
let pessoa: {
  nome: string;
  idade: number;
  email?: string; // Opcional
} = {
  nome: "João",
  idade: 25,
  // email não é obrigatório
};

pessoa.email = "joao@example.com"; // OK
```

### Propriedades Readonly

```typescript
let pessoa: {
  readonly id: number;
  nome: string;
} = {
  id: 1,
  nome: "João",
};

pessoa.nome = "Maria"; // ✅ OK
pessoa.id = 2; // ❌ ERRO - readonly
```

### Index Signatures (Propriedades Dinâmicas)

```typescript
// Objeto com propriedades dinâmicas
let dicionario: {
  [chave: string]: string;
} = {
  pt: "Olá",
  en: "Hello",
  es: "Hola",
};

dicionario["fr"] = "Bonjour"; // OK
console.log(dicionario["pt"]); // "Olá"
```

### Métodos em Objetos

```typescript
let calculadora = {
  somar(a: number, b: number): number {
    return a + b;
  },
  subtrair(a: number, b: number): number {
    return a - b;
  },
};

calculadora.somar(5, 3); // 8
calculadora.subtrair(5, 3); // 2
```

### Desestruturação de Objetos

```typescript
let pessoa = {
  nome: "João",
  idade: 25,
  cidade: "Lisboa",
};

// Extrair propriedades
let { nome, idade } = pessoa;
console.log(nome); // "João"
console.log(idade); // 25

// Renomear ao extrair
let { nome: nomeCompleto, idade: anos } = pessoa;
console.log(nomeCompleto); // "João"
console.log(anos); // 25

// Valores padrão
let { nome, pais = "Portugal" } = pessoa;
console.log(pais); // "Portugal"
```

---

## Interfaces

Interfaces definem a estrutura de objetos.

### Interface Básica

```typescript
interface Pessoa {
  nome: string;
  idade: number;
  email?: string; // Opcional
}

let joao: Pessoa = {
  nome: "João",
  idade: 25,
};

let maria: Pessoa = {
  nome: "Maria",
  idade: 30,
  email: "maria@example.com",
};
```

### Interface com Métodos

```typescript
interface Calculadora {
  somar(a: number, b: number): number;
  subtrair(a: number, b: number): number;
}

let calc: Calculadora = {
  somar(a, b) {
    return a + b;
  },
  subtrair(a, b) {
    return a - b;
  },
};
```

### Interface com Readonly

```typescript
interface Usuario {
  readonly id: number;
  nome: string;
  email: string;
}

let usuario: Usuario = {
  id: 1,
  nome: "João",
  email: "joao@example.com",
};

usuario.nome = "João Silva"; // ✅ OK
usuario.id = 2; // ❌ ERRO - readonly
```

### Extending Interfaces (Herança)

```typescript
interface Animal {
  nome: string;
  idade: number;
}

interface Cachorro extends Animal {
  raca: string;
  latir(): void;
}

let rex: Cachorro = {
  nome: "Rex",
  idade: 3,
  raca: "Labrador",
  latir() {
    console.log("Au au!");
  },
};
```

### Múltipla Herança

```typescript
interface Nadador {
  nadar(): void;
}

interface Voador {
  voar(): void;
}

interface Pato extends Nadador, Voador {
  nome: string;
}

let donald: Pato = {
  nome: "Donald",
  nadar() {
    console.log("Nadando...");
  },
  voar() {
    console.log("Voando...");
  },
};
```

### Interface para Funções

```typescript
interface Operacao {
  (a: number, b: number): number;
}

let somar: Operacao = (a, b) => a + b;
let multiplicar: Operacao = (a, b) => a * b;
```

### Interface para Arrays

```typescript
interface ListaNumeros {
  [index: number]: number;
}

let numeros: ListaNumeros = [1, 2, 3, 4, 5];
console.log(numeros[0]); // 1
```

### Interface para Classes

```typescript
interface FormaGeometrica {
  calcularArea(): number;
  calcularPerimetro(): number;
}

class Retangulo implements FormaGeometrica {
  constructor(
    private largura: number,
    private altura: number,
  ) {}

  calcularArea(): number {
    return this.largura * this.altura;
  }

  calcularPerimetro(): number {
    return 2 * (this.largura + this.altura);
  }
}
```

---

## Types vs Interfaces

### Quando usar Type

```typescript
// 1. Union types
type ID = string | number;

// 2. Intersection types
type Pessoa = { nome: string };
type Empregado = { empresa: string };
type PessoaEmpregada = Pessoa & Empregado;

// 3. Tipos primitivos
type Nome = string;
type Idade = number;

// 4. Tuplas
type Coordenadas = [number, number];

// 5. Tipos de função
type Operacao = (a: number, b: number) => number;
```

### Quando usar Interface

```typescript
// 1. Definir estrutura de objetos
interface Usuario {
  nome: string;
  email: string;
}

// 2. Quando precisas de herança
interface Admin extends Usuario {
  permissoes: string[];
}

// 3. Declaration merging (juntar declarações)
interface Janela {
  titulo: string;
}

interface Janela {
  largura: number;
}

// Resultado: Janela tem titulo e largura
```

### Diferenças Principais

```typescript
// Type pode usar union
type Status = "ativo" | "inativo" | "pendente";

// Interface não pode
interface Status {
  // ❌ Não funciona assim
  // ...
}

// Interface pode ser extendida múltiplas vezes
interface Animal {
  nome: string;
}

interface Animal {
  idade: number;
}
// Resultado: Animal tem nome e idade

// Type não pode ser redeclarado
type Animal = {
  nome: string;
};

type Animal = {
  // ❌ ERRO - já existe
  idade: number;
};
```

### Recomendação

- **Use Interface** para objetos e classes
- **Use Type** para unions, intersections, e tipos complexos

---

## Classes

### Classe Básica

```typescript
class Pessoa {
  // Propriedades
  nome: string;
  idade: number;

  // Construtor
  constructor(nome: string, idade: number) {
    this.nome = nome;
    this.idade = idade;
  }

  // Método
  apresentar(): string {
    return `Olá, sou ${this.nome} e tenho ${this.idade} anos.`;
  }
}

// Criar instância
let joao = new Pessoa("João", 25);
console.log(joao.apresentar()); // "Olá, sou João e tenho 25 anos."
```

### Modificadores de Acesso

```typescript
class ContaBancaria {
  public titular: string; // Acessível de qualquer lugar
  private saldo: number; // Apenas dentro da classe
  protected banco: string; // Classe e subclasses

  constructor(titular: string, saldoInicial: number) {
    this.titular = titular;
    this.saldo = saldoInicial;
    this.banco = "Banco XYZ";
  }

  public depositar(valor: number): void {
    this.saldo += valor;
  }

  public getSaldo(): number {
    return this.saldo;
  }
}

let conta = new ContaBancaria("João", 1000);
console.log(conta.titular); // ✅ OK - public
console.log(conta.saldo); // ❌ ERRO - private
console.log(conta.getSaldo()); // ✅ OK - método public
```

### Sintaxe Curta (Constructor Shorthand)

```typescript
// Em vez de:
class Pessoa {
  nome: string;
  idade: number;

  constructor(nome: string, idade: number) {
    this.nome = nome;
    this.idade = idade;
  }
}

// Podes escrever:
class Pessoa {
  constructor(
    public nome: string,
    public idade: number,
  ) {}
}
```

### Getters e Setters

```typescript
class Temperatura {
  private _celsius: number = 0;

  get celsius(): number {
    return this._celsius;
  }

  set celsius(valor: number) {
    if (valor < -273.15) {
      throw new Error("Temperatura abaixo do zero absoluto!");
    }
    this._celsius = valor;
  }

  get fahrenheit(): number {
    return (this._celsius * 9) / 5 + 32;
  }

  set fahrenheit(valor: number) {
    this._celsius = ((valor - 32) * 5) / 9;
  }
}

let temp = new Temperatura();
temp.celsius = 25;
console.log(temp.fahrenheit); // 77

temp.fahrenheit = 32;
console.log(temp.celsius); // 0
```

### Herança (Inheritance)

```typescript
class Animal {
  constructor(public nome: string) {}

  mover(distancia: number): void {
    console.log(`${this.nome} moveu ${distancia}m.`);
  }
}

class Cachorro extends Animal {
  latir(): void {
    console.log("Au au!");
  }
}

class Passaro extends Animal {
  voar(distancia: number): void {
    console.log(`${this.nome} voou ${distancia}m.`);
  }
}

let rex = new Cachorro("Rex");
rex.mover(10); // "Rex moveu 10m."
rex.latir(); // "Au au!"

let tweety = new Passaro("Tweety");
tweety.mover(5); // "Tweety moveu 5m."
tweety.voar(100); // "Tweety voou 100m."
```

### Sobrescrever Métodos (Override)

```typescript
class Animal {
  constructor(public nome: string) {}

  fazerSom(): void {
    console.log("Som genérico");
  }
}

class Cachorro extends Animal {
  fazerSom(): void {
    console.log("Au au!");
  }
}

class Gato extends Animal {
  fazerSom(): void {
    console.log("Miau!");
  }
}

let rex = new Cachorro("Rex");
rex.fazerSom(); // "Au au!"

let felix = new Gato("Felix");
felix.fazerSom(); // "Miau!"
```

### Super (Chamar método da classe pai)

```typescript
class Veiculo {
  constructor(public marca: string) {}

  info(): string {
    return `Veículo da marca ${this.marca}`;
  }
}

class Carro extends Veiculo {
  constructor(
    marca: string,
    public modelo: string,
  ) {
    super(marca); // Chama construtor da classe pai
  }

  info(): string {
    return `${super.info()}, modelo ${this.modelo}`;
  }
}

let carro = new Carro("Toyota", "Corolla");
console.log(carro.info()); // "Veículo da marca Toyota, modelo Corolla"
```

### Classes Abstratas

```typescript
abstract class FormaGeometrica {
  constructor(public nome: string) {}

  // Método abstrato (deve ser implementado nas subclasses)
  abstract calcularArea(): number;

  // Método concreto
  descrever(): string {
    return `Esta é uma ${this.nome}`;
  }
}

class Circulo extends FormaGeometrica {
  constructor(public raio: number) {
    super("círculo");
  }

  calcularArea(): number {
    return Math.PI * this.raio ** 2;
  }
}

class Retangulo extends FormaGeometrica {
  constructor(
    public largura: number,
    public altura: number,
  ) {
    super("retângulo");
  }

  calcularArea(): number {
    return this.largura * this.altura;
  }
}

// let forma = new FormaGeometrica("forma"); // ❌ ERRO - classe abstrata
let circulo = new Circulo(5);
console.log(circulo.calcularArea()); // 78.54
```

### Propriedades e Métodos Estáticos

```typescript
class Matematica {
  static PI: number = 3.14159;

  static calcularCircunferencia(raio: number): number {
    return 2 * Matematica.PI * raio;
  }

  static max(a: number, b: number): number {
    return a > b ? a : b;
  }
}

// Usar sem criar instância
console.log(Matematica.PI); // 3.14159
console.log(Matematica.calcularCircunferencia(5)); // 31.4159
console.log(Matematica.max(10, 20)); // 20
```

---

## Enums

Enums permitem definir um conjunto de constantes nomeadas.

### Enum Numérico

```typescript
enum DiaDaSemana {
  Segunda, // 0
  Terca, // 1
  Quarta, // 2
  Quinta, // 3
  Sexta, // 4
  Sabado, // 5
  Domingo, // 6
}

let hoje: DiaDaSemana = DiaDaSemana.Segunda;
console.log(hoje); // 0

// Verificar
if (hoje === DiaDaSemana.Segunda) {
  console.log("É segunda-feira!");
}
```

### Enum com Valores Personalizados

```typescript
enum StatusPedido {
  Pendente = 1,
  Processando = 2,
  Enviado = 3,
  Entregue = 4,
  Cancelado = 5,
}

let status: StatusPedido = StatusPedido.Enviado;
console.log(status); // 3
```

### Enum de Strings

```typescript
enum Direcao {
  Cima = "UP",
  Baixo = "DOWN",
  Esquerda = "LEFT",
  Direita = "RIGHT",
}

let movimento: Direcao = Direcao.Cima;
console.log(movimento); // "UP"

function mover(direcao: Direcao): void {
  console.log(`Movendo para ${direcao}`);
}

mover(Direcao.Direita); // "Movendo para RIGHT"
```

### Enum Heterogéneo (Misturado)

```typescript
enum Resposta {
  Nao = 0,
  Sim = "SIM",
}

// ⚠️ Não recomendado - confuso!
```

### Const Enum (Otimizado)

```typescript
const enum Cor {
  Vermelho,
  Verde,
  Azul,
}

let corFavorita: Cor = Cor.Azul;

// No JavaScript compilado, é substituído pelo valor direto
// let corFavorita = 2;
```

### Reverse Mapping (Mapeamento Reverso)

```typescript
enum Status {
  Ativo = 1,
  Inativo = 2,
}

console.log(Status.Ativo); // 1
console.log(Status[1]); // "Ativo"
console.log(Status[2]); // "Inativo"
```

---

## Generics

Generics permitem criar componentes reutilizáveis que funcionam com vários tipos.

### Função Genérica Básica

```typescript
// Sem generics (repetitivo)
function identidadeNumero(valor: number): number {
  return valor;
}

function identidadeString(valor: string): string {
  return valor;
}

// Com generics (reutilizável)
function identidade<T>(valor: T): T {
  return valor;
}

let numero = identidade<number>(5); // tipo: number
let texto = identidade<string>("Olá"); // tipo: string
let booleano = identidade<boolean>(true); // tipo: boolean

// TypeScript pode inferir o tipo
let inferido = identidade(42); // tipo: number (inferido)
```

### Array Genérico

```typescript
function primeiroElemento<T>(array: T[]): T | undefined {
  return array[0];
}

let numeros = [1, 2, 3];
let primeiro = primeiroElemento(numeros); // tipo: number | undefined

let nomes = ["João", "Maria"];
let primeiroNome = primeiroElemento(nomes); // tipo: string | undefined
```

### Múltiplos Tipos Genéricos

```typescript
function par<T, U>(primeiro: T, segundo: U): [T, U] {
  return [primeiro, segundo];
}

let resultado1 = par<string, number>("idade", 25);
// tipo: [string, number]

let resultado2 = par<boolean, string>(true, "ativo");
// tipo: [boolean, string]
```

### Interface Genérica

```typescript
interface Caixa<T> {
  conteudo: T;
}

let caixaNumero: Caixa<number> = { conteudo: 42 };
let caixaTexto: Caixa<string> = { conteudo: "Olá" };
let caixaArray: Caixa<number[]> = { conteudo: [1, 2, 3] };
```

### Classe Genérica

```typescript
class Pilha<T> {
  private items: T[] = [];

  push(item: T): void {
    this.items.push(item);
  }

  pop(): T | undefined {
    return this.items.pop();
  }

  peek(): T | undefined {
    return this.items[this.items.length - 1];
  }

  isEmpty(): boolean {
    return this.items.length === 0;
  }
}

let pilhaNumeros = new Pilha<number>();
pilhaNumeros.push(1);
pilhaNumeros.push(2);
console.log(pilhaNumeros.pop()); // 2

let pilhaStrings = new Pilha<string>();
pilhaStrings.push("a");
pilhaStrings.push("b");
console.log(pilhaStrings.pop()); // "b"
```

### Constraints (Restrições)

```typescript
// T deve ter propriedade 'length'
function tamanho<T extends { length: number }>(item: T): number {
  return item.length;
}

tamanho("Olá"); // 3 ✅
tamanho([1, 2, 3]); // 3 ✅
tamanho({ length: 5 }); // 5 ✅
tamanho(42); // ❌ ERRO - number não tem 'length'
```

### Keyof Constraint

```typescript
function getPropriedade<T, K extends keyof T>(obj: T, chave: K): T[K] {
  return obj[chave];
}

let pessoa = {
  nome: "João",
  idade: 25,
};

let nome = getPropriedade(pessoa, "nome"); // tipo: string
let idade = getPropriedade(pessoa, "idade"); // tipo: number
// getPropriedade(pessoa, "email"); // ❌ ERRO - 'email' não existe
```

### Generic com Valor Padrão

```typescript
interface Resposta<T = string> {
  dados: T;
  sucesso: boolean;
}

let resposta1: Resposta = {
  dados: "OK", // tipo padrão: string
  sucesso: true,
};

let resposta2: Resposta<number> = {
  dados: 42,
  sucesso: true,
};
```

---

## Union e Intersection Types

### Union Types (OU)

```typescript
// Variável pode ser string OU number
let id: string | number;

id = "abc123"; // ✅ OK
id = 123; // ✅ OK
id = true; // ❌ ERRO

// Função com union type
function formatarId(id: string | number): string {
  if (typeof id === "string") {
    return id.toUpperCase();
  }
  return id.toString();
}

formatarId("abc"); // "ABC"
formatarId(123); // "123"
```

### Union com Tipos Literais

```typescript
type Status = "ativo" | "inativo" | "pendente";

let statusUsuario: Status = "ativo"; // ✅ OK
statusUsuario = "inativo"; // ✅ OK
statusUsuario = "cancelado"; // ❌ ERRO

function mudarStatus(status: Status): void {
  console.log(`Status mudou para: ${status}`);
}

mudarStatus("ativo"); // ✅ OK
mudarStatus("pausado"); // ❌ ERRO
```

### Discriminated Unions (Unions Discriminadas)

```typescript
interface Circulo {
  tipo: "circulo";
  raio: number;
}

interface Retangulo {
  tipo: "retangulo";
  largura: number;
  altura: number;
}

interface Triangulo {
  tipo: "triangulo";
  base: number;
  altura: number;
}

type Forma = Circulo | Retangulo | Triangulo;

function calcularArea(forma: Forma): number {
  switch (forma.tipo) {
    case "circulo":
      return Math.PI * forma.raio ** 2;
    case "retangulo":
      return forma.largura * forma.altura;
    case "triangulo":
      return (forma.base * forma.altura) / 2;
  }
}

let circulo: Forma = { tipo: "circulo", raio: 5 };
console.log(calcularArea(circulo)); // 78.54
```

### Intersection Types (E)

```typescript
// Combina múltiplos tipos
interface Pessoa {
  nome: string;
  idade: number;
}

interface Empregado {
  empresa: string;
  salario: number;
}

type PessoaEmpregada = Pessoa & Empregado;

let funcionario: PessoaEmpregada = {
  nome: "João",
  idade: 25,
  empresa: "Tech Corp",
  salario: 3000,
};
```

### Mixins com Intersection

```typescript
interface Nadador {
  nadar(): void;
}

interface Voador {
  voar(): void;
}

type PatoSuper = Nadador & Voador;

let pato: PatoSuper = {
  nadar() {
    console.log("Nadando...");
  },
  voar() {
    console.log("Voando...");
  },
};

pato.nadar(); // "Nadando..."
pato.voar(); // "Voando..."
```

---

## Type Assertions

Type assertions dizem ao TypeScript "confia em mim, eu sei o tipo".

### Sintaxe "as"

```typescript
let valor: any = "Isto é uma string";

// Dizer ao TypeScript que é string
let tamanho: number = (valor as string).length;

// Sem assertion (erro)
// let tamanho: number = valor.length; // ❌ ERRO
```

### Sintaxe com <>

```typescript
let valor: any = "Olá";
let tamanho: number = (<string>valor).length;

// ⚠️ Não funciona em JSX/React - usar 'as'
```

### Assertion com Interfaces

```typescript
interface Usuario {
  nome: string;
  email: string;
}

let dados: any = {
  nome: "João",
  email: "joao@example.com",
};

let usuario = dados as Usuario;
console.log(usuario.nome); // "João"
```

### Non-null Assertion (!)

```typescript
function processar(texto: string | null): void {
  // Dizer ao TypeScript que texto não é null
  console.log(texto!.toUpperCase());
}

// ⚠️ Usar com cuidado - pode causar erro em runtime!
```

### Const Assertions

```typescript
// Sem const assertion
let cores1 = ["vermelho", "verde", "azul"];
// tipo: string[]

// Com const assertion
let cores2 = ["vermelho", "verde", "azul"] as const;
// tipo: readonly ["vermelho", "verde", "azul"]

cores1.push("amarelo"); // ✅ OK
cores2.push("amarelo"); // ❌ ERRO - readonly
```

---

## Módulos (Import/Export)

### Export (Exportar)

```typescript
// matematica.ts

// Exportar função
export function somar(a: number, b: number): number {
  return a + b;
}

// Exportar constante
export const PI = 3.14159;

// Exportar classe
export class Calculadora {
  multiplicar(a: number, b: number): number {
    return a * b;
  }
}

// Exportar interface
export interface Pessoa {
  nome: string;
  idade: number;
}

// Export default (apenas um por ficheiro)
export default function dividir(a: number, b: number): number {
  return a / b;
}
```

### Import (Importar)

```typescript
// app.ts

// Importar itens específicos
import { somar, PI, Calculadora } from "./matematica";

console.log(somar(5, 3)); // 8
console.log(PI); // 3.14159

let calc = new Calculadora();
console.log(calc.multiplicar(4, 5)); // 20

// Importar default
import dividir from "./matematica";
console.log(dividir(10, 2)); // 5

// Importar tudo
import * as Mat from "./matematica";
console.log(Mat.somar(2, 3)); // 5
console.log(Mat.PI); // 3.14159

// Renomear ao importar
import { somar as adicionar } from "./matematica";
console.log(adicionar(1, 2)); // 3
```

### Re-export (Re-exportar)

```typescript
// utilitarios.ts
export { somar, subtrair } from "./matematica";
export { formatar, validar } from "./strings";

// Agora podes importar tudo de um lugar
import { somar, formatar } from "./utilitarios";
```

### Import de Tipos

```typescript
// tipos.ts
export interface Usuario {
  nome: string;
  email: string;
}

export type ID = string | number;

// app.ts
import type { Usuario, ID } from "./tipos";

let usuario: Usuario = {
  nome: "João",
  email: "joao@example.com",
};

let id: ID = 123;
```

---

## Async/Await e Promises

### Promises Básicas

```typescript
// Criar uma Promise
function esperar(ms: number): Promise<void> {
  return new Promise((resolve) => {
    setTimeout(resolve, ms);
  });
}

// Usar com .then()
esperar(1000).then(() => {
  console.log("Passou 1 segundo!");
});
```

### Async/Await

```typescript
// Função assíncrona
async function buscarDados(): Promise<string> {
  await esperar(1000);
  return "Dados carregados!";
}

// Usar async/await
async function executar() {
  console.log("Buscando dados...");
  let resultado = await buscarDados();
  console.log(resultado); // "Dados carregados!"
}

executar();
```

### Try/Catch com Async

```typescript
async function buscarUsuario(id: number): Promise<Usuario> {
  try {
    let resposta = await fetch(`/api/usuarios/${id}`);

    if (!resposta.ok) {
      throw new Error("Usuário não encontrado");
    }

    let dados = await resposta.json();
    return dados;
  } catch (erro) {
    console.error("Erro:", erro);
    throw erro;
  }
}
```

### Promise.all (Executar em Paralelo)

```typescript
async function buscarTudo() {
  let [usuarios, produtos, pedidos] = await Promise.all([
    fetch("/api/usuarios").then((r) => r.json()),
    fetch("/api/produtos").then((r) => r.json()),
    fetch("/api/pedidos").then((r) => r.json()),
  ]);

  return { usuarios, produtos, pedidos };
}
```

### Promise com Tipos

```typescript
interface Usuario {
  id: number;
  nome: string;
  email: string;
}

async function buscarUsuario(id: number): Promise<Usuario> {
  let resposta = await fetch(`/api/usuarios/${id}`);
  let usuario: Usuario = await resposta.json();
  return usuario;
}

// Usar
async function exemplo() {
  let usuario = await buscarUsuario(1);
  console.log(usuario.nome); // TypeScript sabe que é string
}
```

---

## Decorators

Decorators são funções especiais que modificam classes, métodos ou propriedades.

**Nota:** Precisas ativar no tsconfig.json:

```json
{
  "compilerOptions": {
    "experimentalDecorators": true
  }
}
```

### Class Decorator

```typescript
function Logar(constructor: Function) {
  console.log(`Classe ${constructor.name} foi criada`);
}

@Logar
class Usuario {
  constructor(public nome: string) {}
}

let usuario = new Usuario("João");
// Output: "Classe Usuario foi criada"
```

### Method Decorator

```typescript
function Medir(
  target: any,
  propertyKey: string,
  descriptor: PropertyDescriptor,
) {
  let metodoOriginal = descriptor.value;

  descriptor.value = function (...args: any[]) {
    let inicio = Date.now();
    let resultado = metodoOriginal.apply(this, args);
    let fim = Date.now();
    console.log(`${propertyKey} levou ${fim - inicio}ms`);
    return resultado;
  };
}

class Calculadora {
  @Medir
  calcular(n: number): number {
    let soma = 0;
    for (let i = 0; i < n; i++) {
      soma += i;
    }
    return soma;
  }
}
```

### Property Decorator

```typescript
function Readonly(target: any, propertyKey: string) {
  Object.defineProperty(target, propertyKey, {
    writable: false,
  });
}

class Pessoa {
  @Readonly
  nome: string = "João";
}
```

---

## Utility Types

TypeScript fornece tipos utilitários para transformar tipos.

### Partial<T>

Torna todas as propriedades opcionais.

```typescript
interface Usuario {
  nome: string;
  email: string;
  idade: number;
}

function atualizarUsuario(usuario: Usuario, atualizacao: Partial<Usuario>) {
  return { ...usuario, ...atualizacao };
}

let usuario: Usuario = {
  nome: "João",
  email: "joao@example.com",
  idade: 25,
};

// Atualizar apenas email
let atualizado = atualizarUsuario(usuario, { email: "novo@example.com" });
```

### Required<T>

Torna todas as propriedades obrigatórias.

```typescript
interface Config {
  host?: string;
  porta?: number;
}

let config1: Config = {}; // ✅ OK

let config2: Required<Config> = {}; // ❌ ERRO - faltam propriedades
let config3: Required<Config> = {
  host: "localhost",
  porta: 3000,
}; // ✅ OK
```

### Readonly<T>

Torna todas as propriedades readonly.

```typescript
interface Usuario {
  nome: string;
  email: string;
}

let usuario: Readonly<Usuario> = {
  nome: "João",
  email: "joao@example.com",
};

usuario.nome = "Maria"; // ❌ ERRO - readonly
```

### Pick<T, K>

Seleciona apenas algumas propriedades.

```typescript
interface Usuario {
  id: number;
  nome: string;
  email: string;
  senha: string;
}

type UsuarioPublico = Pick<Usuario, "id" | "nome" | "email">;

let usuario: UsuarioPublico = {
  id: 1,
  nome: "João",
  email: "joao@example.com",
  // senha não é incluída
};
```

### Omit<T, K>

Remove algumas propriedades.

```typescript
interface Usuario {
  id: number;
  nome: string;
  email: string;
  senha: string;
}

type UsuarioSemSenha = Omit<Usuario, "senha">;

let usuario: UsuarioSemSenha = {
  id: 1,
  nome: "João",
  email: "joao@example.com",
  // senha não pode ser incluída
};
```

### Record<K, T>

Cria objeto com chaves K e valores T.

```typescript
type Pagina = "home" | "sobre" | "contato";

let rotas: Record<Pagina, string> = {
  home: "/",
  sobre: "/sobre",
  contato: "/contato",
};
```

### Exclude<T, U>

Remove tipos de uma union.

```typescript
type Todos = "a" | "b" | "c" | "d";
type Alguns = Exclude<Todos, "a" | "c">;
// Resultado: "b" | "d"
```

### Extract<T, U>

Extrai tipos de uma union.

```typescript
type Todos = "a" | "b" | "c" | "d";
type Alguns = Extract<Todos, "a" | "c">;
// Resultado: "a" | "c"
```

### NonNullable<T>

Remove null e undefined.

```typescript
type Valor = string | number | null | undefined;
type ValorNaoNulo = NonNullable<Valor>;
// Resultado: string | number
```

### ReturnType<T>

Obtém o tipo de retorno de uma função.

```typescript
function criarUsuario() {
  return {
    id: 1,
    nome: "João",
  };
}

type Usuario = ReturnType<typeof criarUsuario>;
// Resultado: { id: number; nome: string; }
```

---

## Boas Práticas

### 1. Usar Strict Mode

```json
// tsconfig.json
{
  "compilerOptions": {
    "strict": true
  }
}
```

### 2. Evitar 'any'

```typescript
// ❌ Mau
function processar(dados: any) {
  return dados.valor;
}

// ✅ Bom
function processar(dados: { valor: number }) {
  return dados.valor;
}

// ✅ Melhor ainda
interface Dados {
  valor: number;
}

function processar(dados: Dados) {
  return dados.valor;
}
```

### 3. Usar Interfaces para Objetos

```typescript
// ❌ Mau
function criarUsuario(nome: string, email: string, idade: number) {
  // ...
}

// ✅ Bom
interface Usuario {
  nome: string;
  email: string;
  idade: number;
}

function criarUsuario(usuario: Usuario) {
  // ...
}
```

### 4. Usar Enums para Constantes

```typescript
// ❌ Mau
const STATUS_ATIVO = 1;
const STATUS_INATIVO = 2;

// ✅ Bom
enum Status {
  Ativo = 1,
  Inativo = 2,
}
```

### 5. Usar Readonly quando Apropriado

```typescript
interface Config {
  readonly apiUrl: string;
  readonly timeout: number;
}

let config: Config = {
  apiUrl: "https://api.example.com",
  timeout: 5000,
};

// config.apiUrl = "outra-url"; // ❌ ERRO
```

### 6. Usar Union Types em vez de Any

```typescript
// ❌ Mau
function processar(valor: any) {
  // ...
}

// ✅ Bom
function processar(valor: string | number | boolean) {
  // ...
}
```

### 7. Nomear Tipos e Interfaces Claramente

```typescript
// ❌ Mau
interface D {
  n: string;
  e: string;
}

// ✅ Bom
interface Usuario {
  nome: string;
  email: string;
}
```

### 8. Usar Optional Chaining

```typescript
interface Usuario {
  nome: string;
  endereco?: {
    rua: string;
    cidade: string;
  };
}

let usuario: Usuario = { nome: "João" };

// ❌ Mau
let cidade = usuario.endereco ? usuario.endereco.cidade : undefined;

// ✅ Bom
let cidade = usuario.endereco?.cidade;
```

### 9. Usar Nullish Coalescing

```typescript
// ❌ Mau
let valor = input || "padrão"; // Problema: 0 e "" são falsy

// ✅ Bom
let valor = input ?? "padrão"; // Apenas null/undefined usam padrão
```

### 10. Documentar com JSDoc

```typescript
/**
 * Calcula a área de um círculo
 * @param raio - O raio do círculo
 * @returns A área do círculo
 */
function calcularArea(raio: number): number {
  return Math.PI * raio ** 2;
}
```

---

## Exercícios Práticos

### Exercício 1: Tipos Básicos

Cria variáveis com os tipos corretos:

```typescript
// Completa o código
let nome: _____ = "João";
let idade: _____ = 25;
let ativo: _____ = true;
let hobbies: _____ = ["ler", "correr", "programar"];
```

<details>
<summary>Solução</summary>

```typescript
let nome: string = "João";
let idade: number = 25;
let ativo: boolean = true;
let hobbies: string[] = ["ler", "correr", "programar"];
```

</details>

---

### Exercício 2: Funções

Cria uma função que calcula o IMC (peso / altura²):

```typescript
// Completa a função
function calcularIMC(peso: _____, altura: _____): _____ {
  // Teu código aqui
}

console.log(calcularIMC(70, 1.75)); // Deve retornar ~22.86
```

<details>
<summary>Solução</summary>

```typescript
function calcularIMC(peso: number, altura: number): number {
  return peso / altura ** 2;
}

console.log(calcularIMC(70, 1.75)); // 22.857142857142858
```

</details>

---

### Exercício 3: Interfaces

Cria uma interface para um livro e uma função que o descreve:

```typescript
// Cria a interface
interface Livro {
  // Propriedades: titulo, autor, ano, paginas
}

// Cria a função
function descreverLivro(livro: Livro): string {
  // Retorna: "Título por Autor (Ano) - X páginas"
}

let livro: Livro = {
  titulo: "1984",
  autor: "George Orwell",
  ano: 1949,
  paginas: 328,
};

console.log(descreverLivro(livro));
// "1984 por George Orwell (1949) - 328 páginas"
```

<details>
<summary>Solução</summary>

```typescript
interface Livro {
  titulo: string;
  autor: string;
  ano: number;
  paginas: number;
}

function descreverLivro(livro: Livro): string {
  return `${livro.titulo} por ${livro.autor} (${livro.ano}) - ${livro.paginas} páginas`;
}

let livro: Livro = {
  titulo: "1984",
  autor: "George Orwell",
  ano: 1949,
  paginas: 328,
};

console.log(descreverLivro(livro));
```

</details>

---

### Exercício 4: Classes

Cria uma classe ContaBancaria com métodos depositar e levantar:

```typescript
class ContaBancaria {
  // Propriedades privadas: titular, saldo

  constructor(titular: string, saldoInicial: number) {
    // Teu código
  }

  depositar(valor: number): void {
    // Teu código
  }

  levantar(valor: number): boolean {
    // Retorna true se conseguiu, false se saldo insuficiente
  }

  getSaldo(): number {
    // Teu código
  }
}

let conta = new ContaBancaria("João", 1000);
conta.depositar(500);
console.log(conta.getSaldo()); // 1500
conta.levantar(200);
console.log(conta.getSaldo()); // 1300
```

<details>
<summary>Solução</summary>

```typescript
class ContaBancaria {
  private titular: string;
  private saldo: number;

  constructor(titular: string, saldoInicial: number) {
    this.titular = titular;
    this.saldo = saldoInicial;
  }

  depositar(valor: number): void {
    if (valor > 0) {
      this.saldo += valor;
    }
  }

  levantar(valor: number): boolean {
    if (valor > 0 && valor <= this.saldo) {
      this.saldo -= valor;
      return true;
    }
    return false;
  }

  getSaldo(): number {
    return this.saldo;
  }
}

let conta = new ContaBancaria("João", 1000);
conta.depositar(500);
console.log(conta.getSaldo()); // 1500
conta.levantar(200);
console.log(conta.getSaldo()); // 1300
```

</details>

---

### Exercício 5: Generics

Cria uma função genérica que inverte um array:

```typescript
function inverter<T>(array: T[]): T[] {
  // Teu código
}

console.log(inverter([1, 2, 3, 4, 5]));
// [5, 4, 3, 2, 1]

console.log(inverter(["a", "b", "c"]));
// ["c", "b", "a"]
```

<details>
<summary>Solução</summary>

```typescript
function inverter<T>(array: T[]): T[] {
  return array.reverse();
}

// Ou sem modificar o array original:
function inverter<T>(array: T[]): T[] {
  return [...array].reverse();
}

console.log(inverter([1, 2, 3, 4, 5]));
console.log(inverter(["a", "b", "c"]));
```

</details>

---

### Exercício 6: Union Types

Cria uma função que formata um valor como moeda:

```typescript
function formatarMoeda(
  valor: number | string,
  moeda: "EUR" | "USD" | "GBP",
): string {
  // Converte para número se for string
  // Formata com símbolo da moeda
}

console.log(formatarMoeda(100, "EUR")); // "€100.00"
console.log(formatarMoeda("50", "USD")); // "$50.00"
console.log(formatarMoeda(75.5, "GBP")); // "£75.50"
```

<details>
<summary>Solução</summary>

```typescript
function formatarMoeda(
  valor: number | string,
  moeda: "EUR" | "USD" | "GBP",
): string {
  let numero = typeof valor === "string" ? parseFloat(valor) : valor;

  let simbolos = {
    EUR: "€",
    USD: "$",
    GBP: "£",
  };

  return `${simbolos[moeda]}${numero.toFixed(2)}`;
}

console.log(formatarMoeda(100, "EUR"));
console.log(formatarMoeda("50", "USD"));
console.log(formatarMoeda(75.5, "GBP"));
```

</details>

---

### Exercício 7: Async/Await

Cria uma função assíncrona que simula buscar dados de uma API:

```typescript
interface Usuario {
  id: number;
  nome: string;
  email: string;
}

async function buscarUsuario(id: number): Promise<Usuario> {
  // Simula delay de 1 segundo
  // Retorna um usuário fictício
}

// Usar a função
async function exemplo() {
  console.log("Buscando usuário...");
  let usuario = await buscarUsuario(1);
  console.log(usuario);
}

exemplo();
```

<details>
<summary>Solução</summary>

```typescript
interface Usuario {
  id: number;
  nome: string;
  email: string;
}

function esperar(ms: number): Promise<void> {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

async function buscarUsuario(id: number): Promise<Usuario> {
  await esperar(1000);

  return {
    id: id,
    nome: "João Silva",
    email: "joao@example.com",
  };
}

async function exemplo() {
  console.log("Buscando usuário...");
  let usuario = await buscarUsuario(1);
  console.log(usuario);
}

exemplo();
```

</details>

---

### Exercício 8: Projeto Completo - Sistema de Tarefas

Cria um sistema completo de gestão de tarefas:

```typescript
// 1. Enum para status
enum StatusTarefa {
  // Pendente, EmProgresso, Concluida
}

// 2. Interface para Tarefa
interface Tarefa {
  // id, titulo, descricao, status, dataCriacao
}

// 3. Classe GestorTarefas
class GestorTarefas {
  // Propriedades e métodos:
  // - adicionar(titulo, descricao)
  // - listar()
  // - mudarStatus(id, novoStatus)
  // - remover(id)
  // - buscarPorStatus(status)
}

// 4. Testar
let gestor = new GestorTarefas();
gestor.adicionar("Estudar TypeScript", "Completar tutorial");
gestor.adicionar("Fazer exercícios", "Praticar código");
console.log(gestor.listar());
```

<details>
<summary>Solução</summary>

```typescript
enum StatusTarefa {
  Pendente = "PENDENTE",
  EmProgresso = "EM_PROGRESSO",
  Concluida = "CONCLUIDA",
}

interface Tarefa {
  id: number;
  titulo: string;
  descricao: string;
  status: StatusTarefa;
  dataCriacao: Date;
}

class GestorTarefas {
  private tarefas: Tarefa[] = [];
  private proximoId: number = 1;

  adicionar(titulo: string, descricao: string): Tarefa {
    let tarefa: Tarefa = {
      id: this.proximoId++,
      titulo,
      descricao,
      status: StatusTarefa.Pendente,
      dataCriacao: new Date(),
    };

    this.tarefas.push(tarefa);
    return tarefa;
  }

  listar(): Tarefa[] {
    return this.tarefas;
  }

  mudarStatus(id: number, novoStatus: StatusTarefa): boolean {
    let tarefa = this.tarefas.find((t) => t.id === id);

    if (tarefa) {
      tarefa.status = novoStatus;
      return true;
    }

    return false;
  }

  remover(id: number): boolean {
    let indice = this.tarefas.findIndex((t) => t.id === id);

    if (indice !== -1) {
      this.tarefas.splice(indice, 1);
      return true;
    }

    return false;
  }

  buscarPorStatus(status: StatusTarefa): Tarefa[] {
    return this.tarefas.filter((t) => t.status === status);
  }
}

// Testar
let gestor = new GestorTarefas();
gestor.adicionar("Estudar TypeScript", "Completar tutorial");
gestor.adicionar("Fazer exercícios", "Praticar código");

console.log("Todas as tarefas:", gestor.listar());

gestor.mudarStatus(1, StatusTarefa.EmProgresso);
console.log(
  "Tarefas em progresso:",
  gestor.buscarPorStatus(StatusTarefa.EmProgresso),
);

gestor.mudarStatus(1, StatusTarefa.Concluida);
console.log(
  "Tarefas concluídas:",
  gestor.buscarPorStatus(StatusTarefa.Concluida),
);
```

</details>

---

## Recursos Adicionais

### Documentação Oficial

- https://www.typescriptlang.org/docs/

### Playground Online

- https://www.typescriptlang.org/play

### Tutoriais

- TypeScript Handbook: https://www.typescriptlang.org/docs/handbook/intro.html
- TypeScript Deep Dive: https://basarat.gitbook.io/typescript/

### Ferramentas

- VS Code (melhor editor para TypeScript)
- TSLint / ESLint (linting)
- Prettier (formatação)

---

## Conclusão

Parabéns por completares este tutorial! Agora sabes:

✅ Tipos básicos e avançados
✅ Funções e arrow functions
✅ Interfaces e types
✅ Classes e herança
✅ Generics
✅ Async/await
✅ Módulos
✅ Boas práticas

### Próximos Passos

1. **Praticar** - Faz os exercícios várias vezes
2. **Projetos** - Cria projetos pequenos em TypeScript
3. **Frameworks** - Aprende React, Angular ou Node.js com TypeScript
4. **Código aberto** - Lê código TypeScript de projetos populares
5. **Continua a aprender** - TypeScript está sempre a evoluir!

Boa sorte na tua jornada com TypeScript! 🚀

---

**Criado em:** 2026
**Versão:** 1.0
**Autor:** Tutorial Completo TypeScript
