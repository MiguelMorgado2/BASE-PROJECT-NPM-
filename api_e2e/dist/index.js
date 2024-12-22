"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.smoke = exports.regression = exports.dev = void 0;
var _dotenv = _interopRequireDefault(require("dotenv"));
var _parseEnv = require("./env/parseEnv");
function _interopRequireDefault(e) { return e && e.__esModule ? e : { default: e }; }
_dotenv.default.config({
  path: (0, _parseEnv.env)('COMMON_CONFIG_FILE')
});
const hostsConfig = (0, _parseEnv.getJsonFromFile)((0, _parseEnv.env)('HOSTS_URLS_PATH'));
const worldParameters = {
  hostsConfig
};
const common = "./src/features/**/*.feature           --require-module ts-node/register           --require ./src/step-definitions/**/**/*.ts           --world-parameters ".concat(JSON.stringify(worldParameters), "\n          -f json:./reports/report.json           --format progress-bar");
const dev = exports.dev = "".concat(common, " --tags '@dev'");
const smoke = exports.smoke = "".concat(common, " --tags '@smoke'");
const regression = exports.regression = "".concat(common, " --tags '@regression'");
console.log("\n \uD83D\uDC7E \uD83D\uDC7E \uD83D\uDC7E \uD83D\uDC7E \uD83D\uDC7E \uD83D\uDC7E \uD83D\uDC7E \uD83D\uDC7E \uD83D\uDC7E \uD83D\uDC7E \n");