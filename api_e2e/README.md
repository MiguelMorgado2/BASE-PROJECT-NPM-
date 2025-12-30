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

2. [api_e2e-Folders](#folders-and-files-explanation)

   2.1 [Config-Folder](#e2e-config-folder)

   - [json_payloads](#json-payloads)

     2.2 [SRC folder](#api-e2e-src-folder)

   - [Env-Folder](#env-folder)

     - [ParsEnv.ts](#parsenv-ts-file)
     - [Global.ts](#global-ts-file)

   - [Features Folder](#features-folder)

     - [GET Feature](#get-feature-file)

   - [Reporter](#cucumber-report-ts-file)

   - [Step Definitions](#e2e-src-step-definitions-folder)

     - [assertions](#e2e-src-assertions-folder)

       - [response steps](#e2e-src-response-steps-file)

     - [setup](#e2e-src-setup-folder)

       - [hooks](#e2e-src-hooks-file)
       - [world](#e2e-src-world-file)

     - [delete steps](#e2e-src-delete-steps-file)
     - [get steps](#e2e-src-get-steps-file)
     - [patch steps](#e2e-src-patch-steps-file)
     - [post steps](#e2e-src-post-steps-file)
     - [put steps](#e2e-src-put-steps-file)

   - [Support](#e2e-src-support-folder)

     - [host helper](#e2e-src-host-helper-file)
     - [payload-helper](#e2e-src-payload-helper-file)
     - [rest helper](#e2e-src-rest-helper-file)

     - [index](#e2e-src-index-file)

       2.3 [run tests bat](#e2e-src-run-test-bat-file)

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

### E2E CONFIG FOLDER:

### api_e2e \> config folder:

The config folder contains the following folder and files:

- json payloads folder;
  - new post.json file;
  - new title.json file;
  - updated posts.jsons file;
- hosts.json file.

The config folder serves as the centralized repository for non-code resources required to execute the API tests. It separates the "what" (data and environment) from the "how" (the test logic).

Here is the purpose of the components inside this folder:

1. ### json payloads:
   This folder acts as a Data Bank for the API requests.

Request Templates: It stores the JSON bodies used for POST, PUT, or PATCH requests, such as new post.json and updated post.json.

Maintenance: Instead of hardcoding large JSON objects inside the Step Definitions, we import these files. This makes the code cleaner and allows us to update a request structure in one single place.

#### new post

```ts
{
    "title" : "New Post",
    "body" : "This is a new post",
    "userId" : 1
  }
```

<details>
<summary>Click to open new post code description</summary>
<br>

#### What is this file?

This is a JSON (JavaScript Object Notation) file. It is the standard format used by APIs to exchange data between a client (our test script) and a server.

Breakdown of the Fields:

- "title": This is a Key. Its Value is "New Post". It tells the API what the heading of the post should be.

- "body": This contains the actual content or message of the post.

- "userId": This is a numerical ID that identifies which user is "creating" this post.

#### What does it do?

The primary purpose of this file in your automation project is to serve as Test Data.

- Input Data: When your test runs a POST request (the command used to create something new on a server), your code reads this file and sends these specific details to the API.

- Consistency: By keeping this in a separate file, you ensure that every time you run the "Create Post" test, it uses the exact same data, making your tests predictable and reliable.

#### Why put it in the config folder?

to have as separation of Concerns:

- The Code: Stays in your src or steps folder (tells the test how to run).

- The Data: Stays in the config/json_payloads folder (tells the test what to send).

- This way, if you want to change the title of your test post, you don't have to touch the complex code; you just edit this simple text file.

### NOTE: The same logic applies for the other jason files inside the json_payload folder.

</details>
<br>

[Back to Index](#index)

#### host

```ts
{
    "localhost" : "https://localhost:5000",
    "production" : "https://jsonplaceholder.typicode.com"
  }
```

<details>
<summary>Click to open host code description</summary>
<br>

#### What is this file?

The hosts.json file acts as a GPS for your tests. It stores the Base URLs (addresses) of the different servers where your API might be running.

Instead of typing the full URL (e.g., https://jsonplaceholder.typicode.com/posts) inside every single test, we just tell the test to look here to find the right "home address."

### Data Structure

The file maps environment nicknames to their actual web addresses:

- localhost: Points to your own computer. This is used when a developer is writing new code and testing it locally before sharing it.

- production: Points to the live, public API. In this project, it points to JSONPlaceholder, a common fake API used for testing.

### What does this do in our tests?

This file allows our automation to be Dynamic.

- Switching Environments: If you want to run tests against your local machine, you tell the code to use the localhost key. If you want to test the real site, you switch to production.

- Centralized Control: If the API address ever changes (e.g., moving from version1.com to version2.com), you only have to change it once in this file, and every single test in your project is automatically updated.

- Concatenation: The test script takes the base URL from this file and adds the specific "endpoint" to the end of it.

Example: production address + /posts = https://jsonplaceholder.typicode.com/posts

### Why do we use this separate file?

This is the first step toward Professional DevOps practices:

- Security: It keeps environment-specific details out of the core logic.

- Portability: It allows the same test suite to run on your laptop, a colleague's laptop, or a specialized server (like a Jenkins or GitHub Actions runner) without changing the code.

- Efficiency: It prevents "Hardcoding." Hardcoding (writing the URL directly in the test) is a common beginner mistake that makes tests very difficult to maintain as the project grows.

</details>
<br>

[Back to Index](#index)

## API E2E SRC FOLDER:

In an automation framework, the src (source) folder is the Engine Room. While the config folder holds the data, the src folder contains the actual logic, code, and test scenarios that drive the automation.

- Location: api_e2e/src/

- The src folder contains the "Source Code" of your project. This is where the actual testing happens. It is organized into sub-folders to keep the logic separated from the test descriptions, making the project easier to scale and debug.

#### What does the SRC folder contain:

1. features/

- Purpose: Contains .feature files written in Gherkin (Given/When/Then).

- Role: This is the "Human-Readable" part of your tests. It describes what the test does in plain English so that non-developers can understand the test scenarios.

2. step-definitions/

- Purpose: The bridge between Gherkin and Code.

- Role: Every line written in a .feature file has a corresponding function here. When the test says "Given I have a new post," the code in this folder tells the computer exactly how to find that JSON file and prepare it.

3. support/

- Purpose: Helper functions and shared logic.

- Role: Contains reusable code used across many tests, such as custom API clients, authentication handlers, or specialized loggers. Think of this as your "Toolbox."

4. tests/

- Purpose: Low-level test scripts.

- Role: While features are for high-level scenarios, this folder often contains the specific Playwright or TypeScript logic that interacts directly with the API endpoints.

5. reporter/

- Purpose: Customizing test results.

- Role: Contains the logic for how your test results are formatted (e.g., generating HTML dashboards or sending results to Slack).

6. env/

- Purpose: Technical environment variables.

- Role: Stores configuration files (like .env) that handle sensitive or technical settings like timeouts, API keys, or secret tokens.

### ENV Folder:

This folder contains:

- global.ts file;
- parseEnv.ts file;

#### Global TS file:

```ts
import { APIResponse } from "@playwright/test";

export type GlobalAPIResponseVariables = { [key: string]: APIResponse };
export type HostsConfig = Record<string, string>;
export type JsonPayloadMappings = Record<string, string>;
export type JsonPayloadName = string;

export type GlobalConfig = {
  hostsConfig: HostsConfig;
  jsonPayloadMappings: JsonPayloadMappings;
};
```

<details>
<summary>Click to open global code description</summary>
<br>

- Location: api_e2e/src/env/global.ts

#### What is this file?

In technical terms, this is a TypeScript Definition File. Think of it as a "Rulebook" or a "Dictionary" for your project’s data.

In TypeScript, we don't just use data; we define the "shape" that data must take. This file defines the Types (blueprints) that the rest of the automation code must follow.

#### What it does

This file ensures that different parts of your automation "speak the same language" and don't make mistakes. Here is a breakdown of the definitions inside:

- GlobalAPIResponseVariables: It tells the system that when we store a response from the API (like a "Success" message), it must be a valid Playwright APIResponse. This prevents the code from accidentally trying to read a "Response" that doesn't exist.

- HostsConfig & JsonPayloadMappings: These define that our configurations (like the ones in hosts.json) must be a "Record" consisting of a Key (the name) and a String (the value/address).

- GlobalConfig: This is the "Master Blueprint." It tells the automation that whenever it loads the project configuration, it must include two things: a list of Hosts and a list of JSON Payloads.

#### Why is this important:

- Error Prevention: If you try to use a host that isn't a text string, or a payload that doesn't fit the mapping, the code editor will highlight it in red before you even run the test.

- Auto-Complete: Because these types are defined here, when you start typing code in other files, your editor (like VS Code) will suggest the correct options to you.

- Organization: It acts as a table of contents for the data structures used in the entire project.

</details>
<br>

[Back to Index](#index)

#### ParsEnv TS file:

```ts
export const env = (key: string): string => {
  const value = process.env[key];
  if (!value) {
    throw Error(`🧨 No environment variable found for ${key} 🧨`);
  }
  return value;
};

export const getJsonFromFile = <T = Record<string, string>>(
  path: string
): T => {
  return require(`${process.cwd()}${path}`);
};
```

<details>
<summary>Click to open parsEnv code description</summary>
<br>

- Location: api_e2e/src/env/parseEnv.ts

#### What is this file?

This file is a Utility Helper. If global.ts was the "Rulebook," parseEnv.ts is the "Translator" or "Fetcher." It contains small, reusable functions (tools) that know exactly how to go into your folders or your computer's system to grab the information your tests need to run.

#### What it does

It provides two main "tools" (functions) to the rest of your project:

1. The env tool (Variable Fetcher)

- Purpose: It searches your computer's "Environment Variables" for a specific name (key).

- The "Safety Net": If you ask for a variable that doesn't exist (like a missing API Key), instead of the test crashing quietly or acting weirdly, this tool throws a loud error: 🧨 No environment variable found for... 🧨.

- It forces you to fix configuration mistakes immediately rather than wasting time wondering why a test failed.

2. The getJsonFromFile tool (File Loader)

- Purpose: It knows how to find and open the JSON files we talked about earlier (like your new post.json).

- How it works: It takes the "path" (the address of the file) and combines it with process.cwd() (which is just code-speak for "the folder where this project is currently running").

- Result: It turns a text file on your hard drive into an actual JavaScript object that your test can send to an API.

#### Why is this important:

- Don't Repeat Yourself (DRY): Without this file, you would have to write complex code to "find and open files" inside every single test. Now, you just call getJsonFromFile and it’s done in one line.

- Error Handling: Beginners often struggle with "Undefined" errors. The 🧨 emoji error message makes it very clear what went wrong—you simply forgot to set a variable!

- Dynamic Paths: You don't have to worry about whether your project is running on a Mac, Windows, or a Linux server; process.cwd() handles the pathing logic for you automatically.

</details>
<br>

[Back to Index](#index)

### Features Folder:

### Get Feature File:

```ts
Feature: As an API I can retrieve posts

  @smoke @regression @dev
  Scenario: As an API I can retrieve all the posts
    Given I retrieve "posts"
    And the response was successful
    Then the response status code is 200

  @smoke @regression
  Scenario: As an API I can retrieve a single post
    Given I retrieve the 1st "posts"
    And the response was successful
    Then the response status code is 200
    And the response json contains the attributes:
      | id     | 1 |
      | userId | 1 |

  @smoke @regression
  Scenario: As an API I cannot retrieve animals
    Given I retrieve "animals"
    And the response was unsuccessful
    Then the response status code is 404
```

<details>
<summary>Click to open GET feature code description</summary>
<br>

Location: api_e2e/src/features/GET.feature

#### What it is

This is a Gherkin file. Gherkin is a plain-English language that allows anyone—developers, testers, or business managers—to read and understand what the automation is testing without needing to look at code. It uses a structured syntax called Given/When/Then.

#### What it does

It defines the Behavior of your API. Each part of this file has a specific job:

1. The Feature Header

- Feature: As an API I can retrieve posts: This is the high-level goal. It tells you that every test (Scenario) inside this file is related to fetching data from the API.

2. Tags (@smoke, @regression, @dev)

- Purpose: These are labels used to organize and filter your tests.

- How they work: Remember the command .\run_tests.bat @smoke? That command tells the system to only run the scenarios that have that specific tag.

3. Scenarios (The Test Cases)

- Each Scenario represents one specific thing you want to verify:

  - Scenario 1 (Retrieve all): Checks if the API can return a full list of posts.

  - Scenario 2 (Retrieve single): Checks if the API can find one specific post (ID #1) and verifies that the data inside (ID and UserID) is correct.

  - Scenario 3 (Error handling): Checks what happens when you ask for something that doesn't exist (animals). It verifies that the API is smart enough to say "Not Found" (404).

4. The Steps (The "Gherkin" Keywords)

- Given: Sets up the initial state (e.g., "I am looking for posts").

- And: Adds more conditions to the previous step.

- Then: This is the Assertion. This is where the test passes or fails based on the outcome (e.g., "Is the status code 200?").

#### Why is this important:

- Documentation that executes: This isn't just a text file; it is the actual "manual" for your API. If the API changes, the "manual" will fail, letting you know immediately.

- Focus on Logic: Beginners can write a Scenario without knowing how to code yet. You focus on what to test, and the step-definitions (which we will see next) handle how to do it.

- Data Tables: Notice the | id | 1 | section. This is a DataTable. It’s a clean way to check many different pieces of information at once without writing multiple lines of text.

### NOTE: The same logic applies for the other feature files inside the Features folder.

</details>
<br>

[Back to Index](#index)

### Cucumber report ts file:

```ts
import reporter, { Options } from "cucumber-html-reporter";
import { env } from "../env/parseEnv";
import dotenv from "dotenv";

dotenv.config({ path: env("COMMON_CONFIG_FILE") });

const options: Options = {
  theme: "bootstrap",
  jsonFile: env("JSON_REPORT_FILE"),
  output: env("HTML_REPORT_FILE"),
  reportSuiteAsScenarios: true,
  launchReport: false,
};

reporter.generate(options);
```

<details>
<summary>Click to open cucumber-report code description</summary>
<br>

Location: api_e2e/src/reporter/cucumber-report.ts

#### What it is

This is the Presentation Layer of your project. While the tests are running, they generate messy, technical data that is hard for humans to read. This file acts as a "Graphic Designer"—it takes those technical results and transforms them into a beautiful, professional HTML dashboard.

#### What it does

This script automates the creation of your post-test reports using three main steps:

1. Loading Configurations

- dotenv.config: It uses the env tool we discussed earlier to find the COMMON_CONFIG_FILE. This tells the reporter where to look for important settings, like file paths.

2. Setting the "Look and Feel" (options)

- This section defines exactly how the final report will look:

  - theme: 'bootstrap': It applies a modern, clean web design to the report.

  - jsonFile: It tells the reporter where the "raw" test data is hidden.

  - output: It defines the final name and location of the readable HTML file.

- launchReport: false: It tells the computer not to automatically pop open your web browser every single time a test finishes (which can be annoying during development).

3. Generating the Report

- reporter.generate(options): This is the final command that executes the transformation. It gathers the raw data, applies the theme, and saves the file to your disk.

#### Why is this important:

- Visual Feedback: Instead of staring at a black terminal screen with white text, you get colorful charts (Green for Pass, Red for Fail).

- Evidence: If a test fails, this report provides a clear record of exactly what went wrong, which you can share with your team or developers to prove there is a bug.

- Professionalism: Using a structured reporter shows that your automation framework is "Production Ready." It makes it easy for managers or stakeholders to see the health of the API at a glance.

</details>
<br>

[Back to Index](#index)
