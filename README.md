# Playwright + cucumber + typescript

The purpose of this documentation is to explain how we can use an existing automation base structure, in any web automation project.
Its important to know that there are multiple ways of structuring a playwright + cucumber automation, and this is just one of them.

Project Structure:
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

<a name="index"></a>

## Index
1. [Installation](#installation)

    1.1 [VisualStudioCodeSettings](#visual-studio-code-settings)

2. [e2eFolderLevel](#e2e-folder-level)

    2.1 [ConfigFolder](#config-folder)

    2.1.1 [Mapings](#mappings-folder)



## Installation

Save the project:

Save the project folder “BASE-PROJECT-NPM” in the local disk of your computer and rename it if necessary.


Install Node JS recomended version - (https://nodejs.org/en/download/)

Install Visual Studio Code - (https://code.visualstudio.com)

Open Visual Studio Code:

<details>
<summary>Click to open Visual Studio image</summary>

![VsCode](./assets/readme-images/vscode1.png)

</details>
<br>

Go to Extensions and install the Cucumber (Gherkin) Full Support:

<details>
<summary>Click to open Cucumber extension image</summary>

![Gherkin](./assets/readme-images/Gherkin.png)

</details>
<br>
 
The following dependencies are already created in the Package.json file:

<details>
<summary>Click to open package.json image</summary>

![Package.json](./assets/readme-images/package.json.png)

</details>
<br>
 
These are all the dependencies that we need in the framework structure, to create and execute the test cases and the reports.

Open the Terminal in VS Code:

<details>
<summary>Click to open Terminal access image</summary>

![OpenTerminal](./assets/readme-images/OpenTerminal.png)

</details>
<br>
 
 The terminal is opened:

<details>
<summary>Click to open Terminal image</summary>

![TerminalOpened](./assets/readme-images/TerminalOpened.png)

</details>
<br>
 
Navigate to the e2e folder, which is where our end to end project structure is created.

To do this, type “cd e2e” and enter.

The route is now pointing to the e2e folder:

<details>
<summary>Click to open Route image</summary>

![RouteE2e](./assets/readme-images/RouteE2e.png)

</details>
<br>
 
The dependencies are already in the package.json file, however, they are not installed yet. 

Install the dependencies by writing the following command in the terminal:

To do this, run the command: **npm install** and click **enter**

All the dependencies are now installed.

The project structure inside the e2e folder, looks like this:

<details>
<summary>Click to open Project Structure image</summary>

![ProjectStructure1](./assets/readme-images/ProjectStructure1.png)

</details>
<br>

## Visual Studio Code settings

Configure the Visual Studio settings.json file, so the cucumber features and the cucumber glue are pointing correctly to our Test Cases features folder and Step definitions.

**Note: Without this configuration, it will not be possible to execute the test cases.**

•	Click CTRL + , to open the settings:
 
<details>
<summary>Click to open Cucumber Settings image</summary>

![CucumberSettings](./assets/readme-images/OpenSettings.png)

</details>
<br>
  
•	Search for cucumber:
 
<details>
<summary>Click to open Cucumber Search image</summary>

![CucumberSearch](./assets/readme-images/CucumberSearch.png)

</details>
<br>
 
•	Click in "Editing settings" and define where the feature file is, in Cucumber.Features:

<details>
<summary>Click to open Edit Settings image</summary>

![EditSettings](./assets/readme-images/EditSettings.png)

</details>
<br>
  
•	Define where the steps file is in cucumber features and in cucumber.features:


``` ts
"e2e/src/features/*.feature"],
```
<details>
<summary>Click to open Cucumber Feature image</summary>

![CucumberFeature](./assets/readme-images/CucumberFeature.png)

</details>
<br>
 
•	Define where the steps definitions file is, in cucumber.glue:

``` ts
"e2e/src/step-definitions/*.ts",
"e2e/src/step-definitions/assertions/*.ts"
```
<details>
<summary>Click to open Cucumber Glue image</summary>

![CucumberGlue](./assets/readme-images/CucumberGlue.png)

</details>
<br>

### The installation and visual studio configurations are completed.

[Back to Index](#index)


## e2e folder level:

### e2e > Config folder:

The config folder holds various configuration files that are used to define and manage the behavior, settings, and environment parameters for our test automation project, and it contains:

#### 1 - e2e > Config > Mappings folder:

* Inside the Config folder, we have the Mappings folder, which contains configuration files that map different components, data, or behavior of our automation framework.

**Files of the Mappings folder:**

    A) common.json:

This file contains mappings of various UI elements to their corresponding selectors. It provides a centralized way to reference elements across different tests and different pages on the website, thus the name “common”. 

Each key is a descriptive label, and each value is a CSS selector (or other selector type) that identifies the corresponding element on the web page.

**Purpose:**
To simplify and standardize the way UI elements are accessed in tests.
Facilitates easier maintenance, as changes to selectors only need to be updated in one place.

<details>
<summary>Click to open Common.json image</summary>

![Common.json](./assets/readme-images/common.json.png)

</details>
<br>

    B) create-contact.json:
This file focus specifically on elements related to creating a new contact.

**Purpose:**
To provide selectors for elements involved in the contact creation process, such as the header of the create contact form.

<details>
<summary>Click to open Create-contact.json image</summary>

![Create-contact.json](./assets/readme-images/create-contact.json.png)

</details>
<br>

These selectors are going to be found in the create contact page:

<details>
<summary>Click to open Create-contact-web images</summary>

![Create-contact-web](./assets/readme-images/create-contact-web.png)
![Create-contact-web](./assets/readme-images/Create-contact-web-2.png)

</details>
<br>

    C) home.json:
This file includes selectors relevant to the home page, for managing or displaying contacts inside the home page.

**Purpose:**
To define selectors for elements on the home page, such as headers, buttons for creating contacts, and fields for contact details. This helps in testing functionalities specific to the home view.

<details>
<summary>Click to open Home.json image</summary>

![Home.json](./assets/readme-images/Home.json.png)

</details>
<br>

These selectors are going to be found in the Home page:

<details>
<summary>Click to open Home-web image</summary>

![Home-web](./assets/readme-images/Home-web.png)

</details>
<br>

    D) playground.json:
This file contains a broader set of selectors, for a variety of UI components that may be used across multiple tests, such as radio buttons, input fields, alerts, and more, inside the page “playground”.

**Purpose:**
To provide a comprehensive set of selectors for various interactive elements within a playground environment.
It supports a range of test scenarios inside the playground page.

<details>
<summary>Click to open Playground.json image</summary>

![Playground.json](./assets/readme-images/Playground.json.png)

</details>
<br>

These selectors are going to be found in the Home page:

<details>
<summary>Click to open Playground-web images</summary>

![Playground-web](./assets/readme-images/Playground-web.png)

![Playground-web-2](./assets/readme-images/Playground-web-2.png)

</details>
<br>

**Observations:**

**Centralized Management:** By using these JSON files for mappings, the project allows for centralized management of selectors, which simplifies testing and reduces the risk of errors caused by changes in the UI.

**Readability:** The descriptive keys make it easy to understand what each selector corresponds to, improving the readability of test scripts.

#### 2 - e2e > Config > emails.json file:

This file contains email-related configurations, specifically for testing purposes (to be used ahead in our tests).

**Purpose:** It provides a designated email address to be used in tests, ensuring consistency and reliability in scenarios that require email interactions.

<details>
<summary>Click to open emails.json image</summary>

![emails.json](./assets/readme-images/emails.json.png)

</details>
<br>

#### 3 - e2e > Config > errors.json file:

This file defines error messages to be used in the automation tests.

**Purpose:** It maps original error message patterns (using regex) to more user-friendly messages. This aids in debugging by making errors clearer and easier to understand during test failures.

<details>
<summary>Click to open errors.json image</summary>

![errors.json](./assets/readme-images/errors.json.png)

</details>
<br>

#### 4 - e2e > Config > hosts.json file:

This file defines different host URLs for various environments.

**Purpose:** It centralizes the URLs for different environments, enabling easy switching between local development and production environments, as well as providing an API endpoint for tests. (For now, ignore the api)

<details>
<summary>Click to open hosts.json image</summary>

![hosts.json](./assets/readme-images/hosts.json.png)

</details>
<br>

#### 5 - e2e > Config > mocks.json file:

This file is used for mocking data in tests.

**Purpose:** It specifies entities to be mocked during tests. In this case, its referring to a "users" object, which will be used to simulate user-related data in various scenarios.

<details>
<summary>Click to open mocks.json image</summary>

![mocks.json](./assets/readme-images/mocks.json.png)

</details>
<br>

#### 6 - e2e > Config > pages.json file:

This file defines application routes and corresponding regex patterns for different pages.

**Purpose:** It helps in identifying the structure and navigation of the application. Each entry contains a route to navigate to and a regex to match the URL pattern, which will be useful for assertions in tests.

<details>
<summary>Click to open pages.json image</summary>

![pages.json](./assets/readme-images/pages.json.png)

</details>
<br>

Ex:

Home page:

<details>
<summary>Click to open home-page-example image</summary>

![home-page-example](./assets/readme-images/home-page-example.png)

</details>
<br>

Playground page:

<details>
<summary>Click to open playground-page-example image</summary>

![playground-page](./assets/readme-images/playground-page.png)

</details>
<br>

# END OF CONFIG FOLDER SECTION!!!


























