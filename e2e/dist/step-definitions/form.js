"use strict";

var _cucumber = require("@cucumber/cucumber");
var _htmlBehavior = require("../support/html-behavior");
var _inputHelper = require("../support/input-helper");
var _waitForBehavior = require("../support/wait-for-behavior");
var _randomDataHelper = require("../support/random-data-helper");
var _webElementHelper = require("../support/web-element-helper");
var _logger = require("../logger");
var _optionsHelper = require("../support/options-helper");
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
      return _waitForBehavior.waitForResult.PASS;
    }
    return _waitForBehavior.waitForResult.ELEMENT_NOT_AVAILABLE;
  }, globalConfig, {
    target: elementKey
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
      return _waitForBehavior.waitForResult.PASS;
    }
    return _waitForBehavior.waitForResult.ELEMENT_NOT_AVAILABLE;
  }, globalConfig, {
    target: elementKey
  });
});
(0, _cucumber.Then)(/^I fill in the "([^"]*)" input with random "([^"]*)"$/, async function (elementKey, randomInputType) {
  const {
    screen: {
      page
    },
    globalConfig
  } = this;
  _logger.logger.log(`I fill in the ${elementKey} input with random ${randomInputType}`);
  const elementIdentifier = (0, _webElementHelper.getElementLocator)(page, elementKey, globalConfig);
  const validRandomInputType = (0, _optionsHelper.stringIsOfOptions)(randomInputType, _randomDataHelper.randomInputTypes);
  await (0, _waitForBehavior.waitFor)(async () => {
    const elementStable = await (0, _waitForBehavior.waitForSelector)(page, elementIdentifier);
    if (elementStable) {
      const randomContent = (0, _randomDataHelper.getRandomData)(validRandomInputType);
      await (0, _htmlBehavior.inputElementValue)(page, elementIdentifier, randomContent);
      return _waitForBehavior.waitForResult.PASS;
    }
    return _waitForBehavior.waitForResult.ELEMENT_NOT_AVAILABLE;
  }, globalConfig, {
    target: elementKey
  });
});