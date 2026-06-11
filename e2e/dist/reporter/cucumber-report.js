"use strict";

var _dotenv = _interopRequireDefault(require("dotenv"));
var _cucumberHtmlReporter = _interopRequireDefault(require("cucumber-html-reporter"));
var _parseEnv = require("../env/parseEnv");
var _fs = _interopRequireDefault(require("fs"));
function _interopRequireDefault(e) { return e && e.__esModule ? e : { "default": e }; }
_dotenv["default"].config({
  path: (0, _parseEnv.env)('COMMON_CONFIG_FILE')
});
var jsonFile = (0, _parseEnv.env)('JSON_REPORT_FILE');

// Skip report generation if the JSON report is empty or has no test results
var rawContent = _fs["default"].readFileSync(jsonFile, 'utf-8').trim();
if (!rawContent || rawContent === '{}' || rawContent === '[]') {
  console.log('No test results found in report.json — skipping HTML report generation.');
  process.exit(0);
}
var options = {
  theme: 'bootstrap',
  jsonFile: jsonFile,
  output: (0, _parseEnv.env)('HTML_REPORT_FILE'),
  screenshotsDirectory: (0, _parseEnv.env)('SCREENSHOT_PATH'),
  storeScreenshots: true,
  reportSuiteAsScenarios: true,
  launchReport: false
};
_cucumberHtmlReporter["default"].generate(options);