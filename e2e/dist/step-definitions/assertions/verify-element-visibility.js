"use strict";

var _cucumber = require("@cucumber/cucumber");
var _htmlBehavior = require("../../support/html-behavior");
var _webElementHelper = require("../../support/web-element-helper");
var _waitForBehavior = require("../../support/wait-for-behavior");
var _logger = require("../../logger");
(0, _cucumber.Then)(/^the "([^"]*)" should( not)? be displayed$/, async function (elementKey, negate) {
  const {
    screen: {
      page
    },
    globalConfig
  } = this;
  _logger.logger.log(`the ${elementKey} should ${negate ? 'not ' : ''} be displayed`);
  const elementIdentifier = (0, _webElementHelper.getElementLocator)(page, elementKey, globalConfig);
  await (0, _waitForBehavior.waitFor)(async () => {
    const isElementVisible = (await (0, _htmlBehavior.getElement)(page, elementIdentifier)) != null;
    if (isElementVisible === !negate) {
      return _waitForBehavior.waitForResult.PASS;
    } else {
      return _waitForBehavior.waitForResult.ELEMENT_NOT_AVAILABLE;
    }
  }, globalConfig, {
    target: elementKey,
    failureMessage: `🧨 Expected ${elementKey} to ${negate ? 'not ' : ''}be displayed 🧨`
  });
});
(0, _cucumber.Then)(/^the "([0-9]+th|[0-9]+st|[0-9]+nd|[0-9]+rd)" "([^"]*)" should( not)? be displayed$/, async function (elementPosition, elementKey, negate) {
  const {
    screen: {
      page
    },
    globalConfig
  } = this;
  _logger.logger.log(`the ${elementPosition} ${elementKey} should ${negate ? 'not ' : ''}be displayed`);
  const elementIdentifier = (0, _webElementHelper.getElementLocator)(page, elementKey, globalConfig);
  const index = Number(elementPosition.match(/\d/g)?.join('')) - 1;
  await (0, _waitForBehavior.waitFor)(async () => {
    const isElementVisible = (await (0, _htmlBehavior.getElementAtIndex)(page, elementIdentifier, index)) != null;
    if (isElementVisible === !negate) {
      return _waitForBehavior.waitForResult.PASS;
    } else {
      return _waitForBehavior.waitForResult.ELEMENT_NOT_AVAILABLE;
    }
  }, globalConfig, {
    target: elementKey,
    failureMessage: `🧨 Expected ${elementPosition} ${elementKey} to ${negate ? 'not ' : ''}be displayed 🧨`
  });
});
(0, _cucumber.Then)(/^I should( not)? see "(\d*)" "([^"]*)" displayed$/, async function (negate, count, elementKey) {
  const {
    screen: {
      page
    },
    globalConfig
  } = this;
  _logger.logger.log(`I should ${negate ? 'not ' : ''}see ${count} ${elementKey} displayed`);
  const elementIdentifier = (0, _webElementHelper.getElementLocator)(page, elementKey, globalConfig);
  await (0, _waitForBehavior.waitFor)(async () => {
    const element = await (0, _htmlBehavior.getElements)(page, elementIdentifier);
    if (Number(count) === element.length === !negate) {
      return _waitForBehavior.waitForResult.PASS;
    } else {
      return _waitForBehavior.waitForResult.ELEMENT_NOT_AVAILABLE;
    }
  }, globalConfig, {
    target: elementKey,
    failureMessage: `🧨 Expected ${count} ${elementKey} to ${negate ? 'not ' : ''}be displayed 🧨`
  });
});