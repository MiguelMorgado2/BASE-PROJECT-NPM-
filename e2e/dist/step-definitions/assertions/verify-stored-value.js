"use strict";

var _cucumber = require("@cucumber/cucumber");
var _webElementHelper = require("../../support/web-element-helper");
var _waitForBehavior = require("../../support/wait-for-behavior");
var _logger = require("../../logger");
var _htmlBehavior = require("../../support/html-behavior");
(0, _cucumber.Then)(/^the "([^"]*)" should( not)? equal the "([^"]*)" stored in global variables$/, async function (elementKey, negate, variableKey) {
  const {
    screen: {
      page
    },
    globalConfig,
    globalVariables
  } = this;
  _logger.logger.log(`the ${elementKey} should ${negate ? 'not ' : ''}equal the ${globalVariables[variableKey]} stored in global variables`);
  const elementIdentifier = (0, _webElementHelper.getElementLocator)(page, elementKey, globalConfig);
  await (0, _waitForBehavior.waitFor)(async () => {
    const elementStable = await (0, _waitForBehavior.waitForSelector)(page, elementIdentifier);
    const variableValue = globalVariables[variableKey];
    if (elementStable) {
      const elementText = await (0, _htmlBehavior.getElementText)(page, elementIdentifier);
      if (elementText === variableValue === !negate) {
        return _waitForBehavior.waitForResult.PASS;
      } else {
        return _waitForBehavior.waitForResult.FAIL;
      }
    } else {
      return _waitForBehavior.waitForResult.ELEMENT_NOT_AVAILABLE;
    }
  }, globalConfig, {
    target: elementKey,
    failureMessage: `🧨 Expected ${elementKey} to ${negate ? 'not ' : ''}contain the ${variableKey} in global variables 🧨`
  });
});
(0, _cucumber.Then)(/^the "([^"]*)" should( not)? contain the "([^"]*)" stored in global variables$/, async function (elementKey, negate, variableKey) {
  const {
    screen: {
      page
    },
    globalConfig,
    globalVariables
  } = this;
  _logger.logger.log(`the ${elementKey} should ${negate ? 'not ' : ''}contain the ${globalVariables[variableKey]} stored in global variables`);
  const elementIdentifier = (0, _webElementHelper.getElementLocator)(page, elementKey, globalConfig);
  await (0, _waitForBehavior.waitFor)(async () => {
    const elementStable = await (0, _waitForBehavior.waitForSelector)(page, elementIdentifier);
    const variableValue = globalVariables[variableKey];
    if (elementStable) {
      const elementText = await (0, _htmlBehavior.getElementText)(page, elementIdentifier);
      if (elementText?.includes(variableValue) === !negate) {
        return _waitForBehavior.waitForResult.PASS;
      } else {
        return _waitForBehavior.waitForResult.FAIL;
      }
    } else {
      return _waitForBehavior.waitForResult.ELEMENT_NOT_AVAILABLE;
    }
  }, globalConfig, {
    target: elementKey,
    failureMessage: `🧨 Expected ${elementKey} to ${negate ? 'not ' : ''}contain the ${variableKey} in global variables0 🧨`
  });
});