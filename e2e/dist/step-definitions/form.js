"use strict";

var _cucumber = require("@cucumber/cucumber");
var _htmlBehavior = require("../support/html-behavior");
var _inputHelper = require("../support/input-helper");
var _waitForBehavior = require("../support/wait-for-behavior");
var _webElementHelper = require("../support/web-element-helper");
var _logger = require("../logger");
(0, _cucumber.Then)(/^I fill in the "([^"]*)" input with "([^"]*)"$/, async function (elementKey, input) {
  const {
    screen: {
      page
    },
    globalConfig
  } = this;
  _logger.logger.log(`I fill in the ${elementKey} input with ${input}`);
  const elementIdentifier = (0, _webElementHelper.getElementLocator)(page, elementKey, globalConfig);
  await (0, _waitForBehavior.waitFor)(async () => {
    const elementStable = await (0, _waitForBehavior.waitForSelector)(page, elementIdentifier);
    if (elementStable) {
      const parsedInput = (0, _inputHelper.parseInput)(input, globalConfig);
      await (0, _htmlBehavior.inputElementValue)(page, elementIdentifier, parsedInput);
    }
    return elementStable;
  });
});
(0, _cucumber.Then)(/^I select the "([^"]*)" option from the "([^"]*)"$/, async function (option, elementKey) {
  const {
    screen: {
      page
    },
    globalConfig
  } = this;
  _logger.logger.log(`I select the ${option} option from the ${elementKey}`);
  const elementIdentifier = (0, _webElementHelper.getElementLocator)(page, elementKey, globalConfig);
  await (0, _waitForBehavior.waitFor)(async () => {
    const elementStable = await (0, _waitForBehavior.waitForSelector)(page, elementIdentifier);
    if (elementStable) {
      await (0, _htmlBehavior.selectElementValue)(page, elementIdentifier, option);
    }
    return elementStable;
  });
});