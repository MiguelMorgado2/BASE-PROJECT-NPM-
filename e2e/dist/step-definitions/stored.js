"use strict";

var _cucumber = require("@cucumber/cucumber");
var _webElementHelper = require("../support/web-element-helper");
var _waitForBehavior = require("../support/wait-for-behavior");
var _logger = require("../logger");
var _htmlBehavior = require("../support/html-behavior");
(0, _cucumber.Then)(/^I retrieve the "([^"]*)" text and store it as "([^"]*)" in global variables$/, async function (elementKey, variableKey) {
  const {
    screen: {
      page
    },
    globalConfig,
    globalVariables
  } = this;
  _logger.logger.log(`I retrieve the ${elementKey} text and store it as ${variableKey} in global variables`);
  const elementIdentifier = (0, _webElementHelper.getElementLocator)(page, elementKey, globalConfig);
  await (0, _waitForBehavior.waitFor)(async () => {
    const elementStable = await (0, _waitForBehavior.waitForSelector)(page, elementIdentifier);
    if (elementStable) {
      const elementText = await (0, _htmlBehavior.getElementText)(page, elementIdentifier);
      if (elementText != null) {
        globalVariables[variableKey] = elementText;
        return _waitForBehavior.waitForResult.PASS;
      }
    }
    return _waitForBehavior.waitForResult.ELEMENT_NOT_AVAILABLE;
  }, globalConfig, {
    target: elementKey
  });
});