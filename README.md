# Playwright + cucumber + typescript

The purpose of this documentation is to explain how we can use an existing automation base structure, in any web automation project.
Its important to know that there are multiple ways of structuring a playwright + cucumber automation, and this is just one of them.

<a name="index"></a>

## Index
1. [Installation](#installation)

    1.1 [VisualStudioCodeSettings](#visual-studio-code-settings)

<details>
<summary>Click to expand Installation section</summary>

## Installation

Save the project:

Save the project folder “BASE-PROJECT-NPM” in the local disk of your computer and rename it if necessary.


Install Node JS recomended version - (https://nodejs.org/en/download/)

Install Visual Studio Code - (https://code.visualstudio.com)

Open Visual Studio Code:

![VsCode](./assets/readme-images/vscode1.png)
  
Go to Extensions and install the Cucumber (Gherkin) Full Support:

![Gherkin](./assets/readme-images/Gherkin.png)
 
The following dependencies are already created in the Package.json file:

![Package.json](./assets/readme-images/package.json.png)

 
These are all the dependencies that we need in the framework structure, to create and execute the test cases and the reports.

Open the Terminal in VS Code:

![OpenTerminal](./assets/readme-images/OpenTerminal.png)
 
 The terminal is opened:

![TerminalOpened](./assets/readme-images/TerminalOpened.png)
 
Navigate to the e2e folder, which is where our end to end project structure is created.

To do this, type “cd e2e” and enter.

The route is now pointing to the e2e folder:

![RouteE2e](./assets/readme-images/RouteE2e.png)
 
The dependencies are already in the package.json file, however, they are not installed yet. 

Install the dependencies by writing the following command in the terminal:

To do this, run the command: **npm install** and click **enter**

All the dependencies are now installed.

The project structure inside the e2e folder, looks like this:

![ProjectStructure1](./assets/readme-images/ProjectStructure1.png)

## Visual Studio Code settings

Configure the Visual Studio settings.json file, so the cucumber features and the cucumber glue are pointing correctly to our Test Cases features folder and Step definitions.

**Note: Without this configuration, it will not be possible to execute the test cases.**

•	Click CTRL + , to open the settings:
 
![CucumberSettings](./assets/readme-images/OpenSettings.png)
  
•	Search for cucumber:
 
![CucumberSearch](./assets/readme-images/CucumberSearch.png)
 
•	Click in "Editing settings" and define where the feature file is, in Cucumber.Features:
 
![EditSettings](./assets/readme-images/EditSettings.png)
  
•	Define where the steps file is in cucumber features and in cucumber.features:


``` ts
"e2e/src/features/*.feature"],
```

![CucumberFeature](./assets/readme-images/CucumberFeature.png)
 
•	Define where the steps definitions file is, in cucumber.glue:

``` ts
"e2e/src/step-definitions/*.ts",
"e2e/src/step-definitions/assertions/*.ts"
```

![CucumberGlue](./assets/readme-images/CucumberGlue.png)

 

### The installation and visual studio configurations are completed.

[Back to Index](#index)









