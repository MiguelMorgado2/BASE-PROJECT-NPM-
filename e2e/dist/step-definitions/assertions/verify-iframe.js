"use strict";

var _cucumber = require("@cucumber/cucumber");
var _waitForBehavior = require("../../support/wait-for-behavior");
var _webElementHelper = require("../../support/web-element-helper");
var _htmlBehavior = require("../../support/html-behavior");
var _logger = require("../../logger");
(0, _cucumber.Then)(/^the "([^"]*)" on the "([^"]*)" iframe should( not)? be displayed$/, async function (elementKey, iframeName, negate) {
  const {
    screen: {
      page
    },
    globalConfig
  } = this;
  _logger.logger.log(`the ${elementKey} on the ${iframeName} iframe should ${negate ? 'not ' : ''}be displayed`);
  const elementIdentifier = (0, _webElementHelper.getElementLocator)(page, elementKey, globalConfig);
  const iframeIdentifier = (0, _webElementHelper.getElementLocator)(page, iframeName, globalConfig);
  await (0, _waitForBehavior.waitFor)(async () => {
    const elementIframe = await (0, _htmlBehavior.getIframeElement)(page, iframeIdentifier);
    if (elementIframe) {
      const elementStable = await (0, _waitForBehavior.waitForSelectorInIframe)(elementIframe, elementIdentifier);
      if (elementStable) {
        const isElementVisible = (await (0, _htmlBehavior.getElementWithinIframe)(elementIframe, elementIdentifier)) != null;
        return isElementVisible === !negate;
      } else {
        return elementStable;
      }
    }
  });
});
(0, _cucumber.Then)(/^the "([^"]*)" on the "([^"]*)" iframe should( not)? contain the text "(.*)"$/, async function (elementKey, iframeName, negate, expectedElementText) {
  const {
    screen: {
      page
    },
    globalConfig
  } = this;
  _logger.logger.log(`the ${elementKey} should ${negate ? 'not ' : ''}contain the text ${expectedElementText}`);
  const elementIdentifier = (0, _webElementHelper.getElementLocator)(page, elementKey, globalConfig);
  const iframeIdentifier = (0, _webElementHelper.getElementLocator)(page, iframeName, globalConfig);
  await (0, _waitForBehavior.waitFor)(async () => {
    const elementIframe = await (0, _htmlBehavior.getIframeElement)(page, iframeIdentifier);
    if (elementIframe) {
      const elementStable = await (0, _waitForBehavior.waitForSelectorInIframe)(elementIframe, elementIdentifier);
      if (elementStable) {
        const elementText = await (0, _htmlBehavior.getTextWithinIframeElement)(elementIframe, elementIdentifier);
        return elementText?.includes(expectedElementText) === !negate;
      } else {
        return elementStable;
      }
    }
  });
});
(0, _cucumber.Then)(/^the "([^"]*)" on the "([^"]*)" iframe should( not)? equal the text "(.*)"$/, async function (elementKey, iframeName, negate, expectedElementText) {
  const {
    screen: {
      page
    },
    globalConfig
  } = this;
  _logger.logger.log(`the ${elementKey} should ${negate ? 'not ' : ''}equal the text ${expectedElementText}`);
  const elementIdentifier = (0, _webElementHelper.getElementLocator)(page, elementKey, globalConfig);
  const iframeIdentifier = (0, _webElementHelper.getElementLocator)(page, iframeName, globalConfig);
  await (0, _waitForBehavior.waitFor)(async () => {
    const elementIframe = await (0, _htmlBehavior.getIframeElement)(page, iframeIdentifier);
    if (elementIframe) {
      const elementStable = await (0, _waitForBehavior.waitForSelectorInIframe)(elementIframe, elementIdentifier);
      if (elementStable) {
        const elementText = await (0, _htmlBehavior.getTextWithinIframeElement)(elementIframe, elementIdentifier);
        return elementText === expectedElementText === !negate;
      } else {
        return elementStable;
      }
    }
  });
});