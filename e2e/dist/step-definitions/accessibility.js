"use strict";

var _cucumber = require("@cucumber/cucumber");
var _axePlaywright = require("axe-playwright");
var _navigationBehavior = require("../support/navigation-behavior");
var _axeHtmlReporter = require("axe-html-reporter");
var _parseEnv = require("../env/parseEnv");
var _logger = require("../logger");
(0, _cucumber.Then)(/^I inject axe accessibility engine$/, async function () {
  const {
    screen: {
      page
    }
  } = this;
  _logger.logger.log(`I inject axe accessibility engine`);
  await (0, _axePlaywright.injectAxe)(page);
});
(0, _cucumber.Then)(/^I generate an accessibility analysis report$/, async function () {
  const {
    screen: {
      page
    },
    globalConfig
  } = this;
  const pageId = (0, _navigationBehavior.getCurrentPageId)(page, globalConfig);
  _logger.logger.log(`I generate a ${pageId} page accessibility analysis report`);
  (0, _axeHtmlReporter.createHtmlReport)({
    results: {
      violations: await (0, _axePlaywright.getViolations)(page)
    },
    options: {
      outputDir: `${(0, _parseEnv.env)('ACCESSIBILITY_REPORT_PATH')}`,
      reportFileName: `${pageId}_${(0, _parseEnv.env)('HTML_ACCESSIBILITY_FILE')}`
    }
  });
});