"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.smoke = exports.regression = exports.dev = void 0;
var _dotenv = _interopRequireDefault(require("dotenv"));
var _parseEnv = require("./env/parseEnv");
var _tagHelper = require("./support/tag-helper");
var _fs = _interopRequireDefault(require("fs"));
function _interopRequireDefault(e) { return e && e.__esModule ? e : { default: e }; }
const environment = (0, _parseEnv.env)('NODE_ENV');
_dotenv.default.config({
  path: (0, _parseEnv.env)('COMMON_CONFIG_FILE')
});
_dotenv.default.config({
  path: `${(0, _parseEnv.env)('ENV_PATH')}${environment}.env`
});
const hostsConfig = (0, _parseEnv.getJsonFromFile)((0, _parseEnv.env)('HOSTS_URLS_PATH'));
const pagesConfig = (0, _parseEnv.getJsonFromFile)((0, _parseEnv.env)('PAGE_URLS_PATH'));
const emailsConfig = (0, _parseEnv.getJsonFromFile)((0, _parseEnv.env)('EMAILS_URLS_PATH'));
const errorsConfig = (0, _parseEnv.getJsonFromFile)((0, _parseEnv.env)('ERRORS_URLS_PATH'));
const mocksConfig = (0, _parseEnv.getJsonFromFile)((0, _parseEnv.env)('MOCKS_URLS_PATH'));
const mappingFiles = _fs.default.readdirSync(`${process.cwd()}${(0, _parseEnv.env)('PAGE_ELEMENTS_PATH')}`);
const payloadFiles = _fs.default.readdirSync(`${process.cwd()}${(0, _parseEnv.env)('MOCK_PAYLOAD_PATH')}`);
const getEnvList = () => {
  const envList = Object.keys(hostsConfig);
  if (envList.length === 0) {
    throw Error(`🧨 No environments mapped in your ${(0, _parseEnv.env)('HOSTS_URL_PATH')}`);
  }
  return envList;
};
const pageElementMappings = mappingFiles.reduce((pageElementConfigAcc, file) => {
  const key = file.replace('.json', '');
  const elementMappings = (0, _parseEnv.getJsonFromFile)(`${(0, _parseEnv.env)('PAGE_ELEMENTS_PATH')}${file}`);
  return {
    ...pageElementConfigAcc,
    [key]: elementMappings
  };
}, {});
const mockPayloadMappings = payloadFiles.reduce((payloadConfigAcc, file) => {
  const key = file.replace('.json', '');
  const payloadMappings = (0, _parseEnv.getJsonFromFile)(`${(0, _parseEnv.env)('MOCK_PAYLOAD_PATH')}${file}`);
  return {
    ...payloadConfigAcc,
    [key]: payloadMappings
  };
}, {});
const worldParameters = {
  hostsConfig,
  pagesConfig,
  emailsConfig,
  errorsConfig,
  mocksConfig,
  pageElementMappings,
  mockPayloadMappings
};
const common = `./src/features/**/*.feature \
                --require-module ts-node/register \
                --require ./src/step-definitions/**/**/*.ts \
                -f json:./reports/report.json \
                --world-parameters ${JSON.stringify(worldParameters)} \
                --format progress-bar \
                --parallel ${(0, _parseEnv.env)('PARALLEL')} \
                --retry ${(0, _parseEnv.env)('RETRY')}`;
const dev = exports.dev = (0, _tagHelper.generateCucumberRuntimeTag)(common, environment, getEnvList(), 'dev');
const smoke = exports.smoke = (0, _tagHelper.generateCucumberRuntimeTag)(common, environment, getEnvList(), 'smoke');
const regression = exports.regression = (0, _tagHelper.generateCucumberRuntimeTag)(common, environment, getEnvList(), 'regression');