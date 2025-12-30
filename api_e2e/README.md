# Playwright + cucumber + typescript

<details>
<summary>Generic description of Playwright, cucumber and typescript</summary>
<br>

The purpose of this documentation is to explain how we can use an existing automation base structure, in any web automation project.
Its important to know that there are multiple ways of structuring a playwright + cucumber automation, and this is just one of them.

What is playwright: (put link to documentation)

What is cucumber:(put link to documentation)

What is typescript: (put link to documentation)

**Project Structure:**

<details>
  <summary>Click to open project structure images</summary>
  
![ProjectStructure2](./assets/readme-images/projectStructure2.png)
![ProjectStructure3](./assets/readme-images/ProjectStructure3.png)
  
</details>

For the purposes of this documentation tutorial, we will be using a test website:

(https://hub.testingtalks.com.au/ )

<details>
  <summary>Click to open testing website image</summary>

![TestSite](./assets/readme-images/TestSite.png)

</details>

</details>
<br>

<details>
<summary>Typescript constructs</summary>
<br>

Each construct in TypeScript serves a distinct purpose, but they complement each other to create robust, type-safe, and maintainable applications. The choice of which to use depends on the problem you're solving. Together, these constructs form the backbone of TypeScript development.

1. Functions

**Definition**

- A function is a block of code that performs a specific task and can be reused throughout the program.

- Functions can take inputs (parameters) and return outputs (return values).

**Syntax:**

```ts
function functionName(param1: Type, param2: Type): ReturnType {
  // Function body
  return value;
}
```

**Example:**

```ts
function add(a: number, b: number): number {
  return a + b;
}
console.log(add(2, 3)); // Output: 5
```

**Purpose:**

- Encapsulate logic for reusability.
- Improve code organization and readability.

2. Types

**Definition:**

- A type in TypeScript describes the structure of data, including the shape, attributes, and their types.
- Types ensure type safety by enforcing the expected structure of data.

**Syntax:**

```ts
type TypeName = {
  property: Type;
  method: (param: Type) => ReturnType;
};
```

**Example:**

```ts
type Person = {
  name: string;
  age: number;
};

const john: Person = { name: "John", age: 30 };
```

**Purpose:**

- Enforce a consistent structure for objects, arrays, or other data types.
- Avoid runtime errors by catching type mismatches at compile time.

3. Interfaces

**Definition:**

- An interface is similar to a type but is specifically used to define the structure of objects.
- Interfaces can be extended or implemented by classes.

**Syntax:**

```ts
interface InterfaceName {
  property: Type;
  method(param: Type): ReturnType;
}
```

**Example:**

```ts
interface Animal {
  name: string;
  makeSound(): void;
}

const dog: Animal = {
  name: "Dog",
  makeSound: () => console.log("Woof!"),
};
```

**Purpose:**

- Define contracts for object shapes or class implementations.
- Promote consistent object design in larger projects.

4. Classes

**Definition:**

- A class is a blueprint for creating objects.
- It encapsulates data (properties) and methods that operate on that data.

**Syntax:**

```ts
class ClassName {
  property: Type;

  constructor(param: Type) {
    this.property = param;
  }

  method(): ReturnType {
    // Method body
  }
}
```

**Example:**

```ts
class Car {
  make: string;

  constructor(make: string) {
    this.make = make;
  }

  drive(): void {
    console.log(`${this.make} is driving.`);
  }
}

const myCar = new Car("Toyota");
myCar.drive(); // Output: Toyota is driving.
```

**Purpose:**

- Model real-world entities with properties and behaviors.
- Encourage object-oriented programming (OOP) principles like encapsulation, inheritance, and polymorphism.

5. Enums

**Definition:**

- An enum defines a set of named constants that represent a fixed range of values.

```ts
enum EnumName {
  VALUE1,
  VALUE2,
  VALUE3,
}
```

**Example:**

```ts
enum Direction {
  Up,
  Down,
  Left,
  Right,
}

console.log(Direction.Up); // Output: 0
```

**Purpose:**

- Group related constants for readability and maintainability.
- Ensure variables can only take one of a predefined set of values.

6. Modules

**Definition:**

- A module is a file containing code that can be exported and imported into other files.

```ts
// Export
export const value = 42;
export function greet() {
  console.log("Hello!");
}

// Import
import { value, greet } from "./moduleName";
```

**Purpose:**

- Organize code into reusable and maintainable chunks.
- Avoid name collisions and promote modular development.

7. Decorators

**Definition:**

- A decorator is a special kind of function used to modify or annotate classes, methods, properties, or parameters.
- Decorators are a feature of TypeScript when using metadata reflection (used in frameworks like Angular).

```ts
function DecoratorName(
  target: any,
  propertyKey?: string,
  descriptor?: PropertyDescriptor
) {
  // Decoration logic
}
```

**Example:**

```ts
function Log(target: any, propertyName: string) {
  console.log(`Property ${propertyName} was accessed.`);
}

class Example {
  @Log
  property: string = "Hello";
}
```

**Purpose:**

- Extend or enhance the behavior of existing components.
- Provide metadata or functionality to classes or methods.

8. Generics

**Definition:**

- Generics allow functions, classes, or interfaces to work with any type, providing flexibility while maintaining type safety.

```ts
function functionName<T>(param: T): T {
  return param;
}
```

**Example:**

```ts
function identity<T>(arg: T): T {
  return arg;
}

console.log(identity<number>(42)); // Output: 42
console.log(identity<string>("Hello")); // Output: Hello
```

**Purpose:**

- Reuse code for multiple types without sacrificing type safety.

#### How They Link Together

**Types & Interfaces:**

- Define the structure of data used in functions, classes, or objects.

**Classes:**

- Implement interfaces to guarantee a certain structure.
- Use types for method parameters or properties.

**Enums:**

- Provide fixed options for properties or parameters in functions, types, or classes.

**Functions:**

- Use types or interfaces for parameters and return types to ensure type safety.

**Modules:**

- Organize and share functions, classes, types, and other constructs across files.

**Decorators:**

- Enhance the behavior of classes and methods, often linked to metadata.

**Generics:**

- Provide flexibility and type safety in functions, classes, and interfaces, especially for reusable components.

**Conclusion:**

- Each construct in TypeScript serves a distinct purpose, but they complement each other to create robust, type-safe, and maintainable applications.
- The choice of which to use depends on the problem you're solving. Together, these constructs form the backbone of TypeScript development.

</details>
<br>

<a name="index"></a>

## Index

1. [Installation](#installation)

   1.1 [VisualStudioCodeSettings](#visual-studio-code-settings)

2. [e2e-Folder-Level](#folders-and-files-explanation)

   2.1 [Config-Folder](#e2e--config-folder)

   - [Mapings-folder](#e2e--config--mappings-folder)

     - [Common.json](#common-json)
     - [Create-Contact.json](#create-contact-json)
     - [Home.json](#home-json)
     - [Playground.json](#playground-json)

   - [Emails.json](#e2e--config--emails-json-file)
   - [Errors.json](#e2e--config--errors-json-file)
   - [Hosts.json](#e2e--config--hosts-json-file)
   - [Mocks.json](#e2e--config--mocks-json-file)
   - [Pages.json](#e2e--config--pages-json-file)

     2.2 [Env-Folder](#e2e--src--env-folder)

     - [ParsEnv.ts](#parsenv-ts-file)
     - [Global.ts](#global-ts-file)

       2.3 [SRC-Folder](#e2e--src-folder)

     - [Step-Definitions-Folder](#e2e--src--step-definitions-folder)

       - [Setup-Folder](#e2e--src--step-definitions--setup-folder)
         - [World.ts](#world-ts-file)

     - [Support-Folder](#e2e--src--support-folder)
       - [Browser-behavior.ts](#browser-behavior-ts-file)
       - [Error-helper.ts](#error-helper-ts-file)
       - [Html-behavior.ts](#html-behavior-ts-file)
       - [Input-helper.ts](#input-helper-ts-file)
       - [Mock-behavior.ts](#mock-behavior-ts-file)
       - [Wait-for-behavior.ts](#wait-for-behavior-ts-file)
       - [Navigation-behavior.ts](#navigation-behavior-ts-file)

## Installation

Save the project:

Save the project folder “BASE-PROJECT-NPM” in the local disk of your computer and rename it if necessary.

Install Node JS recomended version - (https://nodejs.org/en/download/)

Install Visual Studio Code - (https://code.visualstudio.com)

Open Visual Studio Code:

<details>
<summary>Click to open Visual Studio image</summary>

![VsCode](/assets/readme-images-api/VSCODE1.png)

</details>
<br>

Go to Extensions and install the Cucumber (Gherkin) Full Support:

<details>
<summary>Click to open Cucumber extension image</summary>

![Gherkin](/assets/readme-images/Gherkin.png)

</details>
<br>

On Visual Studio Code, click on the option "Open Folder" and open the project folder you saved on the previous step.

<details>
<summary>Click to open Visual Studio Code with project</summary>

![VsCode](../assets/readme-images-api/project-opened.png)

</details>
<br>

The following dependencies are already created in the Package.json file:

```ts
{
  "name": "e2e",
  "version": "1.0.0",
  "description": "",
  "main": "index.js",
  "scripts": {
    "lint": "eslint . --ext .ts",
    "test": "rimraf dist && npx playwright test --reporter=html",
    "transpile": "rimraf dist && babel --extensions .ts --out-dir dist src",
    "precucumber": "rimraf reports && mkdir reports && echo {} > reports/report.json",
    "cucumber": "npm run transpile && cucumber-js",
    "postcucumber" : "ts-node ./src/reporter/cucumber-report.ts"
  },
  "author": "",
  "license": "ISC",
  "dependencies": {
    "@babel/cli": "^7.20.7",
    "@babel/core": "^7.20.7",
    "@babel/preset-env": "^7.20.2",
    "@babel/preset-typescript": "^7.18.6",
    "@cucumber/cucumber": "^11.1.1",
    "@playwright/test": "^1.29.1",
    "@typescript-eslint/eslint-plugin": "^5.48.0",
    "@typescript-eslint/parser": "^5.48.0",
    "cucumber-html-reporter": "^6.0.0",
    "dotenv": "^16.4.7",
    "eslint": "^8.31.0",
    "playwright": "^1.29.1",
    "ts-node": "^10.9.1",
    "typescript": "^4.9.4"
  }
}
```

These are all the dependencies that we need in the framework structure, to create and execute the test cases and the reports.

Open the Terminal in VS Code:

<details>
<summary>Click to open Terminal access image</summary>

![OpenTerminal](/assets/readme-images-api/new-terminal.png)

</details>
<br>
 
 The terminal is opened:

<details>
<summary>Click to open Terminal image</summary>

![TerminalOpened](/assets/readme-images-api/terminal-opened.png)

</details>
<br>
 
Navigate to the api_e2e folder, which is where our end to end project structure is created.

To do this, type “cd api_e2e” and enter.

The route is now pointing to the api_e2e folder:

<details>
<summary>Click to open Route image</summary>

![RouteE2e](/assets/readme-images-api/project-opened-on-terminal.png)

</details>
<br>
 
The dependencies are already in the package.json file, however, they are not installed yet.

Install the dependencies by writing the following command in the terminal:

To do this, run the command: **npm install** and click **enter**

All the dependencies are now installed.

The project structure inside the e2e folder, looks like this:

<details>
<summary>Click to open Project Structure image</summary>

![ProjectStructure1](/assets/readme-images-api/project-structure.png)

</details>
<br>

## Visual Studio Code settings

Configure the Visual Studio settings.json file, so the cucumber features and the cucumber glue are pointing correctly to our Test Cases features folder and Step definitions.

**Note: Without this configuration, it will not be possible to execute the test cases.**

• Open Visual Studio code settings:

<details>
<summary>Click to open Cucumber Settings image</summary>

![CucumberSettings](/assets/readme-images-api/open-settings.png)

</details>
<br>
  
•	Search for cucumber:
 
<details>
<summary>Click to open Cucumber Search image</summary>

![CucumberSearch](/assets/readme-images-api/search-cucumber.png)

</details>
<br>
 
•	Click in "Editing settings" and define where the feature file is, in Cucumber.Features:

<details>
<summary>Click to open Edit Settings image</summary>

![EditSettings](/assets/readme-images-api/cucumber-settings-open.png)

</details>
<br>
  
•	Define where the steps file is in cucumber features and in cucumber.features:

```ts
"api_e2e/src/features/*.feature"],
```

<details>
<summary>Click to open Cucumber Feature image</summary>

![CucumberFeature](/assets/readme-images-api/folder-point.png)

</details>
<br>
 
•	Define where the steps definitions file is, in cucumber.glue:

```ts
"api_e2e/src/step-definitions/**/*.ts",;
```

<details>
<summary>Click to open Cucumber Glue image</summary>

![CucumberGlue](/assets/readme-images-api/step-definitions.png)

</details>
<br>

### The installation and visual studio configurations are completed.

#### Note: This base template project is already packed with example features tests.

- To guarantee that the npm install correctly installed all the dependencies, select one of the example tests in the features tests folder:

for example, choose the "GET.feature" test

Path:

src > features > GET.feature.

- Instert a @dev tag on the test scenario to be executed and save:

<details>
<summary>Click to open The test image</summary>

![FirstTestExecution](/assets/readme-images-api/get-feature-test.png)

</details>
<br>

- On the terminal, Execute the test with the command ".\run_tests.bat dev"

<details>
<summary>Click to open the execution command</summary>

![Execution command](/assets/readme-images-api/ter-run.png)

</details>
<br>

- After the execution, the tests will pass and a test report will be created automatically:

<details>
<summary>Click to open the execution result</summary>

![Execution command](/assets/readme-images-api/test-pass-terminal.png)

</details>
<br>

To open the cucumber report, go to the folder "Reports > right click on "cucumber-html-report.html" and select "reveal on file explorer".

<details>
<summary>Click to open the cucumber report page</summary>

![Execution command](/assets/readme-images-api/cucumber-report.png)

</details>
<br>

[Back to Index](#index)

## FOLDERS AND FILES EXPLANATION:
