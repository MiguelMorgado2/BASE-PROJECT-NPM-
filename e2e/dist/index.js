"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.smoke = exports.regression = exports.dev = void 0;
var _dotenv = _interopRequireDefault(require("dotenv"));
var _parsEnv = require("./env/parsEnv");
function _interopRequireDefault(e) { return e && e.__esModule ? e : { default: e }; }
_dotenv.default.config({
  path: (0, _parsEnv.env)('COMMON_CONFIG_FILE')
});
const hostsConfig = (0, _parsEnv.getJsonFromFile)((0, _parsEnv.env)('HOSTS_URLS_PATH'));
const pagesConfig = (0, _parsEnv.getJsonFromFile)((0, _parsEnv.env)('PAGE_URLS_PATH'));
const worldParameters = {
  hostsConfig,
  pagesConfig
};
const common = `./src/features/**/*.feature \
                --require-module ts-node/register \
                --require ./src/step-definitions/**/**/*.ts \
                --world-parameters ${JSON.stringify(worldParameters)} \
                -f json:./reports/report.json \
                --format progress-bar`;
const dev = exports.dev = `${common} --tags '@dev'`;
const smoke = exports.smoke = `${common} --tags '@smoke'`;
const regression = exports.regression = `${common} --tags '@regression'`;