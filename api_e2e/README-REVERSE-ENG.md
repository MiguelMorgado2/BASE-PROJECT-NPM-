# Projeto api_e2e - Reverse Engineering Completo

Este README foi criado para explicar o projeto `api_e2e` do primeiro ficheiro ao último, com a lógica em ordem e explicações tipo "linha a linha" para aprender TypeScript/Cucumber/Playwright.

## 1) Visão geral do fluxo

1. O ponto de entrada principal é `src/index.ts`, que monta os comandos Cucumber (dev/smoke/regression) e injeta configurações globais.
2. O `npm run cucumber` transpila TypeScript usando Babel e executa o Cucumber.
3. O `ScenarioWorld` (em `src/step-definitions/setup/world.ts`) instancia um contexto Playwright para requisições API.
4. Os hooks (`Before`) inicializam o mundo e criam `request` antes de cada cenário.
5. Os step-definitions leem os steps dos ficheiros `.feature` e usam helpers (`rest-helper`, `host-helper`, `payload-helper`) para executar get/post/patch/put/delete.
6. As asserções em `src/step-definitions/assertions/response-steps.ts` validam status, JSON e texto.
7. O reporter em `src/reporter/cucumber-report.ts` gera HTML a partir de `reports/report.json`.

---

## 2) Ordem dos ficheiros e propósito (passo a passo)

### 2.1 Ficheiros de configuração do projeto (raiz)

- `package.json` - define dependências e scripts. Usado para instalar libs e correr testes.
- `tsconfig.json` - configura compilador TypeScript.
- `playwright.config.ts` - configurações globais Playwright (baseURL, headers).
- `.eslintrc` / `.eslintignore` - regras lint.
- `.babelrc` - presets Babel para transpilar TypeScript.
- `cucumber.js` - expõe o resultante JS compilado de `dist` que executa Cucumber.
- `run_tests.bat` - script Windows para correr testes (pode invocar `npm test` ou comandos personalizados).

### 2.2 Configuração de ambiente e payloads

- `env/common.env` - variáveis de ambiente principais.
- `config/hosts.json` - mapeamento de host `localhost` e `production`.
- `config/json_payloads/*.json` - payloads JSON usados em POST/PATCH/PUT.

### 2.3 Código fonte (`src/`)

Ordem lida na execução:

1. `src/index.ts` (entry point) monta os comandos Cucumber.
2. `src/env/parseEnv.ts` e `src/env/global.ts` definem tipos/func helpers.
3. `src/support/host-helper.ts`, `payload-helper.ts`, `rest-helper.ts` fazem requests API.
4. `src/step-definitions/setup/world.ts` e `hooks.ts` inicializam o context API.
5. `src/step-definitions/*.ts` definem steps Given + helpers.
6. `src/step-definitions/assertions/response-steps.ts` valida respostas.
7. `src/features/*.feature` descrevem cenários BDD.
8. `src/reporter/cucumber-report.ts` gera relatório HTML.

### 2.4 Saídas e artefatos

- `dist/` - JS gerado pelo `npm run transpile`.
- `reports/report.json` - JSON de resultados Cucumber.
- `reports/cucumber-html-report.html` - HTML final de relatório.
- `playwright-report/` - relatórios Playwright.

---

## 3) Ordem completa dos ficheiros (relativa) com propósito rápido

1. `package.json` - base do projeto e scripts.
2. `tsconfig.json` - configura TypeScript.
3. `playwright.config.ts` - baseURL + headers.
4. `.babelrc` - Babel preset env + typescript.
5. `cucumber.js` - entry que importa dist.
6. `env/common.env` - env variables.
7. `config/hosts.json` - host URL mapping.
8. `config/json_payloads/new post.json` - payload para POST.
9. `config/json_payloads/new title.json` - payload para PATCH.
10. `config/json_payloads/updated post.json` - payload para PUT.
11. `src/index.ts` - monta comando cucumber com world-parameters.
12. `src/env/parseEnv.ts` - helpers para env + JSON load.
13. `src/env/global.ts` - tipos globais para host/payload.
14. `src/support/host-helper.ts` - define URL de host.
15. `src/support/payload-helper.ts` - valida payload.
16. `src/support/rest-helper.ts` - get/post/patch/put/delete + guard.
17. `src/step-definitions/setup/world.ts` - inicializa request context.
18. `src/step-definitions/setup/hooks.ts` - Before hook para cada cenário.
19. `src/step-definitions/get-steps.ts` - Given retrieve.
20. `src/step-definitions/post-steps.ts` - Given create.
21. `src/step-definitions/patch-steps.ts` - Given patch.
22. `src/step-definitions/put-steps.ts` - Given update.
23. `src/step-definitions/delete-steps.ts` - Given delete.
24. `src/step-definitions/assertions/response-steps.ts` - Then validations.
25. `src/features/GET.feature`, `POST.feature`, `PATCH.feature`, `PUT.feature`, `DELETE.feature` - cenários BDD.
26. `src/reporter/cucumber-report.ts` - gera relatório.

---

## 4) Explicação linha-a-linha de cada ficheiro principal

### 4.1 `package.json`

```json
{
  "name": "e2e",
  "version": "1.0.0",
  "description": "",
  "main": "index.js",
  "scripts": {
    "lint": "eslint . --ext .ts", // executa ESLint em todos .ts
    "test": "rimraf dist && npx playwright test --reporter=html", // limpa dist e executa playwright
    "transpile": "rimraf dist && babel --extensions .ts --out-dir dist src", // transpila TS de src para dist
    "precucumber": "rimraf reports && mkdir reports && echo {} > reports/report.json", // reinicia reports
    "cucumber": "npm run transpile && cucumber-js", // transpila e corre cucumber
    "postcucumber" : "ts-node ./src/reporter/cucumber-report.ts" // gera relatório html
  },
  "dependencies": { ... } // libs necessárias
}
```

### 4.2 `playwright.config.ts`

```ts
import { PlaywrightTestConfig } from "@playwright/test";

const config: PlaywrightTestConfig = {
  use: {
    baseURL: "https://jsonplaceholder.typicode.com", // host base para requests
    extraHTTPHeaders: {
      "Content-type": "application/json; charset=UTF-8", // cabeçalho padrão
    },
  },
};

export default config;
```

### 4.3 `src/index.ts` (fluxo principal que cria flags)

```ts
import dotenv from "dotenv"; // biblioteca para .env
import { env, getJsonFromFile } from "./env/parseEnv"; // utilitários de environment
import { GlobalConfig, HostsConfig, JsonPayloadMappings } from "./env/global"; // tipos TS
import * as fs from "fs"; // filesystem

dotenv.config({ path: env("COMMON_CONFIG_FILE") }); // lê ficheiro .env definido em COMMON_CONFIG_FILE

const hostsConfig: HostsConfig = getJsonFromFile(env("HOSTS_URLS_PATH")); // lê hosts.json
const payloadFiles = fs.readdirSync(
  `${process.cwd()}${env("JSON_PAYLOAD_PATH")}`,
); // lista payload JSON

const jsonPayloadMappings: JsonPayloadMappings = payloadFiles.reduce(
  (payloadConfigAcc, file) => {
    const key = file.replace(".json", ""); // remove .json para chave simples
    const payloadMappings = getJsonFromFile(
      `${env("JSON_PAYLOAD_PATH")}${file}`,
    ); // lê payload
    return { ...payloadConfigAcc, [key]: payloadMappings };
  },
  {},
);

const worldParameters: GlobalConfig = {
  hostsConfig,
  jsonPayloadMappings,
};

const common = `./src/features/**/*.feature \
          --require-module ts-node/register \
          --require ./src/step-definitions/**/**/*.ts \
          --world-parameters ${JSON.stringify(worldParameters)}
          -f json:./reports/report.json \
          --parallel ${env("PARALLEL")} \
          --retry ${env("RETRY")} \
          --format progress-bar`;

const dev = `${common} --tags '@dev'`;
const smoke = `${common} --tags '@smoke'`;
const regression = `${common} --tags '@regression'`;

console.log(`\n 👾 👾 👾 👾 👾 👾 👾 👾 👾 👾 \n`);

export { dev, smoke, regression };
```

### 4.4 `src/env/parseEnv.ts`

```ts
export const env = (key: string): string => {
  const value = process.env[key];
  if (!value) {
    throw Error(`🧨 No environment variable found for ${key} 🧨`); // falha rápido se não estiver definido
  }
  return value;
};

export const getJsonFromFile = <T = Record<string, string>>(
  path: string,
): T => {
  return require(`${process.cwd()}${path}`); // require JSON com caminho absoluto do project
};
```

### 4.5 `src/env/global.ts`

```ts
import { APIResponse } from "@playwright/test";

export type GlobalAPIResponseVariables = { [key: string]: APIResponse }; // guarda resposta da API
export type HostsConfig = Record<string, string>; // nome -> URL
export type JsonPayloadMappings = Record<string, string>; // nomePayload -> JSON
export type JsonPayloadName = string;

export type GlobalConfig = {
  hostsConfig: HostsConfig;
  jsonPayloadMappings: JsonPayloadMappings;
};
```

### 4.6 `src/support/host-helper.ts`

```ts
import { GlobalConfig } from "../env/global";

export const retrieveHostURL = ({ hostsConfig }: GlobalConfig): URL => {
  const { API_AUTOMATION_HOST: hostname = "production" } = process.env;

  const hostPath = hostsConfig[hostname]; // escolhe URL pelo nome

  const url = new URL(hostPath);

  return url;
};
```

### 4.7 `src/support/payload-helper.ts`

```ts
import { env } from "../env/parseEnv";

export const payloadExists = (jsonPayload: any): void => {
  if (jsonPayload === undefined) {
    throw Error(
      `🧨 JSON Payload not defined in ${env("JSON_PAYLOAD_PATH")} 🧨`,
    );
  }
  return jsonPayload;
};
```

### 4.8 `src/support/rest-helper.ts` (requests reais)

```ts
import { APIRequestContext, APIResponse } from "playwright";
import {
  GlobalConfig,
  GlobalAPIResponseVariables,
  JsonPayloadName,
} from "../env/global";
import { retrieveHostURL } from "./host-helper";
import { payloadExists } from "./payload-helper";

export const getResponse = async (
  request: APIRequestContext,
  route: string,
  globalConfig: GlobalConfig,
  globalAPIResponseVariables: GlobalAPIResponseVariables,
): Promise<APIResponse> => {
  const url = retrieveHostURL(globalConfig);

  const response = await request.get(url.href + route);

  globalAPIResponseVariables.response = response;

  return response;
};

// ... deleteResponse, postResponse, patchResponse, putResponse
// funcionam de forma muito semelhante:
// - recuperam host
// - constroem route
// - para body: verificam payloadExists(globalConfig.jsonPayloadMappings[jsonPayloadName])
// - chamam request.post/patch/put
// - guardam response em globalAPIResponseVariables.response
```

### 4.9 `src/step-definitions/setup/world.ts`

```ts
import playwright, { APIRequestContext } from "playwright";
import { World, IWorldOptions, setWorldConstructor } from "@cucumber/cucumber";
import { GlobalAPIResponseVariables, GlobalConfig } from "../../env/global";

export type Api = {
  request: APIRequestContext;
};

export class ScenarioWorld extends World {
  constructor(options: IWorldOptions) {
    super(options);
    this.globalAPIResponseVariables = {};
    this.globalConfig = options.parameters as GlobalConfig; // parametros vindos do src/index.ts
  }

  globalConfig: GlobalConfig;
  globalAPIResponseVariables: GlobalAPIResponseVariables;
  api!: Api;

  async init(): Promise<Api> {
    const request = await this.newRequest();
    this.api = { request };
    return this.api;
  }

  private newRequest = async (): Promise<APIRequestContext> => {
    const request = await playwright.request.newContext({
      extraHTTPHeaders: {
        "Content-type": "application/json; charset=UTF-8",
      },
    });
    return request;
  };
}

setWorldConstructor(ScenarioWorld);
```

### 4.10 `src/step-definitions/setup/hooks.ts`

```ts
import { Before } from "@cucumber/cucumber";
import { ScenarioWorld } from "./world";

Before(async function (this: ScenarioWorld, scenario) {
  console.log(`Running cucumber scenario ${scenario.pickle.name}`);
  const ready = await this.init(); // inicializa API request context
  return ready;
});
```

### 4.11 `src/step-definitions/get-steps.ts`

```ts
Given(
  /^I retrieve "([^"]*)"$/,
  async function (this: ScenarioWorld, route: string) {
    const {
      api: { request },
      globalAPIResponseVariables,
      globalConfig,
    } = this;
    await getResponse(request, route, globalConfig, globalAPIResponseVariables);
  },
);

Given(
  /^I retrieve the ... "([^"]*)"$/,
  async function (this: ScenarioWorld, index: string, route: string) {
    const currentIndex = Number(index.match(/\d/g)?.join(""));
    const routeAtIndex = `${route}/${currentIndex}`;
    await getResponse(
      request,
      routeAtIndex,
      globalConfig,
      globalAPIResponseVariables,
    );
  },
);
```

### 4.12 `src/step-definitions/post-steps.ts` (cria)

```ts
Given(
  /^I create a new "([^"]*)" with "([^"]*)"$/,
  async function (
    this: ScenarioWorld,
    route: string,
    jsonPayloadName: JsonPayloadName,
  ) {
    await postResponse(
      request,
      route,
      jsonPayloadName,
      globalConfig,
      globalAPIResponseVariables,
    );
  },
);
```

### 4.13 `src/step-definitions/patch-steps.ts`, `put-steps.ts`, `delete-steps.ts` (semelhante)

- Cada um extrai índice com regex, monta `routeAtIndex`, chama `patchResponse/putResponse/deleteResponse`.

### 4.14 `src/step-definitions/assertions/response-steps.ts` (validações)

- `the response was successful` → `response.ok()` true/false.
- `status code` → `response.status()` exato.
- `response json contains attributes` → `response.json()` e `expect(JSON.stringify(response)).toContain(... )`.
- `response text contains attributes` → `response.text()` e `toContain(... )`.

### 4.15 `src/features/*.feature`

Cada cenário BDD mapeia os steps com regex. Exemplo em GET:

```gherkin
Given I retrieve "posts"
And the response was successful
Then the response status code is 200
```

### 4.16 `src/reporter/cucumber-report.ts`

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

---

## 5) Como executar e entender execução

1. `cd api_e2e`
2. `npm install`
3. `cp env/common.env .env` (ou garantir env PATH traga COMMON_CONFIG_FILE)
4. `npm run cucumber` (transpila + cucumber)
5. `npm run postcucumber` para gerar HTML extra se necessário.

> Nota: os arquivos JSON de payload em `config/json_payloads` são carregados automaticamente em `src/index.ts` e usados nos steps que recebem nomes como `new post`, `new title`, `updated post`.

---

## 6) Conclusão rápida para “montar de raíz”

1. Comece definindo `package.json`, TS, Playwright config.
2. Defina `.env` + `hosts.json` + payloads.
3. Crie `src/index.ts` para montar world-parameters.
4. Crie classes world/hook e helpers de request.
5. Crie step-definitions para mapear frases Gherkin.
6. Crie features BDD com Given/Then.
7. Execute com Cucumber e gere relatório.

---

## 7) Lista de ficheiros de cima para baixo com relação de uso

- `src/index.ts` usa `src/env/parseEnv.ts` + `src/env/global.ts` + `config/*`.
- `src/step-definitions/setup/world.ts` usa Playwright e `@cucumber/cucumber`.
- `src/step-definitions/setup/hooks.ts` vincula `Before` com world.
- `src/support/*.ts` são usados pelos step-definitions CRUD.
- `src/step-definitions/*.ts` são carregados por `--require ./src/step-definitions/**/**/*.ts` em index.
- `src/features/*.feature` via `--require-module ts-node/register` e Cucumber.
- `src/reporter/cucumber-report.ts` usa env variables e gera html.

---

## 8) Versão literal (linha a linha) - o mais literal possível

### 8.1 `src/index.ts` linha a linha

```ts
import dotenv from "dotenv"; // importa dotenv para ler ficheiros .env
import { env, getJsonFromFile } from "./env/parseEnv"; // importa helpers de env/JSON
import { GlobalConfig, HostsConfig, JsonPayloadMappings } from "./env/global"; // importa tipos TS
import * as fs from "fs"; // importa filesystem

dotenv.config({ path: env("COMMON_CONFIG_FILE") }); // carrega ficheiro de ambiente apontado por COMMON_CONFIG_FILE

const hostsConfig: HostsConfig = getJsonFromFile(env("HOSTS_URLS_PATH")); // lê host config (e.g. /config/hosts.json)
const payloadFiles = fs.readdirSync(
  `${process.cwd()}${env("JSON_PAYLOAD_PATH")}`,
); // obtém nomes dos ficheiros de payload

const jsonPayloadMappings: JsonPayloadMappings = payloadFiles.reduce(
  // transforma lista de ficheiros em objecto de payloads
  (payloadConfigAcc, file) => {
    const key = file.replace(".json", ""); // cria chave sem .json
    const payloadMappings = getJsonFromFile(
      `${env("JSON_PAYLOAD_PATH")}${file}`,
    ); // lê o JSON do payload
    return { ...payloadConfigAcc, [key]: payloadMappings }; // adiciona ao acumulador
  },
  {},
);

const worldParameters: GlobalConfig = {
  hostsConfig,
  jsonPayloadMappings,
};

const common = `./src/features/**/*.feature \
          --require-module ts-node/register \
          --require ./src/step-definitions/**/**/*.ts \
          --world-parameters ${JSON.stringify(worldParameters)}
          -f json:./reports/report.json \
          --parallel ${env("PARALLEL")} \
          --retry ${env("RETRY")} \
          --format progress-bar`;

const dev = `${common} --tags '@dev'`; // comando de dev
const smoke = `${common} --tags '@smoke'`; // comando smoke
const regression = `${common} --tags '@regression'`; // comando regression

console.log(`\n 👾 👾 👾 👾 👾 👾 👾 👾 👾 👾 \n`); // print divertido

export { dev, smoke, regression }; // exporta para Cucumber
```

### 8.2 `src/support/rest-helper.ts` linha a linha parcial (cada função)

```ts
import { APIRequestContext, APIResponse} from "playwright" // tipos Playwright
import {GlobalConfig, GlobalAPIResponseVariables, JsonPayloadName} from "../env/global"; // tipos globais
import {retrieveHostURL} from "./host-helper"; // util host
import {payloadExists} from "./payload-helper"; // valida payload

export const getResponse = async (request, route, globalConfig, globalAPIResponseVariables) => {
    const url = retrieveHostURL(globalConfig) // URL base (production/localhost)
    const response = await request.get(url.href+route) // GET request
    globalAPIResponseVariables.response = response // guarda resposta
    return response // retorna resposta para uso
}

export const deleteResponse = async (...) => {
    const url = retrieveHostURL(globalConfig)
    const response = await request.delete(url.href+route)
    globalAPIResponseVariables.response = response
    return response
}

export const postResponse = async (...) => {
    const url = retrieveHostURL(globalConfig)
    const payload = payloadExists(globalConfig.jsonPayloadMappings[jsonPayloadName]) // valida e retorna payload
    const response = await request.post(url.href+route, { data: payload})
    globalAPIResponseVariables.response = response
    return response
}

// patchResponse e putResponse são idênticos ao post, mas usam request.patch / request.put.
```

### 8.3 Features - Linha a linha literal exemplos

`src/features/GET.feature`:

```gherkin
Feature: As an API I can retrieve posts

  @smoke @regression @dev
  Scenario: As an API I can retrieve all the posts
    Given I retrieve "posts"             # chama etapa GET no step-definition
    And the response was successful      # valida response.ok() true
    Then the response status code is 200 # valida status 200
```

`src/features/POST.feature`:

```gherkin
Feature: As an API I can create posts

  @smoke
  @regression
  Scenario: As an API I can create a new post
    Given I create a new "posts" with "new post" # chama postResponse com payload "new post"
    And the response was successful                 # valida OK
    Then the response status code is 201           # valida status 201
```

### 8.4 `src/step-definitions/assertions/response-steps.ts` literal

```ts
Then(
  /^the response was (successful)?(unsuccessful)?$/,
  async function (
    this: ScenarioWorld,
    success: boolean,
    unsuccessful: boolean,
  ) {
    const { globalAPIResponseVariables } = this;
    const response = globalAPIResponseVariables.response;
    if (unsuccessful) {
      expect(response.ok()).toBeFalsy(); // se diz unsuccessful, espera false
    } else {
      expect(response.ok()).toBeTruthy(); // caso contrario espera true
    }
  },
);

Then(
  /^the response status code is (\d*)$/,
  async function (this: ScenarioWorld, statusCode: string) {
    const response = globalAPIResponseVariables.response;
    expect(response.status()).toBe(Number(statusCode)); // valida valor do status
  },
);

Then(
  /^the response json contains the attributes:$/,
  async function (this: ScenarioWorld, dataTable: DataTable) {
    const response = await globalAPIResponseVariables.response.json();
    const expected_response = dataTable.raw();
    for (let i = 0; i < expected_response.length; i++) {
      for (let j = 0; j < expected_response[i].length; j++) {
        expect(JSON.stringify(response)).toContain(expected_response[i][j]);
      }
    }
  },
);
```

### 8.5 `src/step-definitions/setup/world.ts` literal

```ts
export class ScenarioWorld extends World {
  constructor(options) {
    super(options);
    this.globalAPIResponseVariables = {}; // local para armazenar response
    this.globalConfig = options.parameters as GlobalConfig; // parâmetros do world
  }
  async init() {
    const request = await playwright.request.newContext({
      extraHTTPHeaders: { "Content-type": "application/json; charset=UTF-8" },
    });
    this.api = { request };
    return this.api;
  }
}

setWorldConstructor(ScenarioWorld);
```

---

### 8.6 Ficheiros de payload JSON (literal)

`config/json_payloads/new post.json`:

```json
{
  "title": "New Post",
  "body": "This is a new post",
  "userId": 1
}
```

`config/json_payloads/new title.json`:

```json
{
  "title": "Just an edited title"
}
```

`config/json_payloads/updated post.json`:

```json
{
  "title": "Replacement post",
  "body": "This is completely updated post",
  "userId": 1
}
```

---

### 8.7 Comentário final literal

Isto é o mais literal possível com as linhas principais do projeto. Se quiser, posso criar uma versão ainda mais literal com todas as linhas de todos os `.feature` e `.ts` pequenos restantes de forma totalmente expandida.
