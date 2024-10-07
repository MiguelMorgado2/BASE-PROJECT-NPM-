"use strict";

var _cucumber = require("@cucumber/cucumber");
var _waitForBehavior = require("../../support/wait-for-behavior");
var _webElementHelper = require("../../support/web-element-helper");
var _htmlBehavior = require("../../support/html-behavior");
var _logger = require("../../logger");
(0, _cucumber.Then)(/^the "([^"]*)" on the "([^"]*)" iframe should( not)? be displayed$/, async function (elementKey, iframeKey, negate) {
  const {
    screen: {
      page
    },
    globalConfig
  } = this;
  _logger.logger.log(`the ${elementKey} on the ${iframeKey} iframe should ${negate ? 'not ' : ''}be displayed`);
  const elementIdentifier = (0, _webElementHelper.getElementLocator)(page, elementKey, globalConfig);
  const iframeIdentifier = (0, _webElementHelper.getElementLocator)(page, iframeKey, globalConfig);
  await (0, _waitForBehavior.waitFor)(async () => {
    const elementIframe = await (0, _htmlBehavior.getIframeElement)(page, iframeIdentifier);
    if (elementIframe) {
      const isElementVisible = (await (0, _htmlBehavior.getElementWithinIframe)(elementIframe, elementIdentifier)) != null;
      if (isElementVisible === !negate) {
        return {
          result: _waitForBehavior.waitForResult.PASS
        };
      } else {
        return {
          result: _waitForBehavior.waitForResult.FAIL,
          replace: elementKey
        };
      }
    } else {
      return {
        result: _waitForBehavior.waitForResult.ELEMENT_NOT_AVAILABLE,
        replace: iframeKey
      };
    }
  }, globalConfig, {
    target: elementKey,
    failureMessage: `🧨 Expected ${elementKey} to ${negate ? 'not ' : ''}be displayed 🧨`
  });
});
(0, _cucumber.Then)(/^the "([^"]*)" on the "([^"]*)" iframe should( not)? contain the text "(.*)"$/, async function (elementKey, iframeKey, negate, expectedElementText) {
  const {
    screen: {
      page
    },
    globalConfig
  } = this;
  _logger.logger.log(`the ${elementKey} on the ${iframeKey} should ${negate ? 'not ' : ''}contain the text ${expectedElementText}`);
  const elementIdentifier = (0, _webElementHelper.getElementLocator)(page, elementKey, globalConfig);
  const iframeIdentifier = (0, _webElementHelper.getElementLocator)(page, iframeKey, globalConfig);
  await (0, _waitForBehavior.waitFor)(async () => {
    const elementIframe = await (0, _htmlBehavior.getIframeElement)(page, iframeIdentifier);
    if (elementIframe) {
      const elementStable = await (0, _waitForBehavior.waitForSelectorInIframe)(elementIframe, elementIdentifier);
      if (elementStable) {
        const elementText = await (0, _htmlBehavior.getTextWithinIframeElement)(elementIframe, elementIdentifier);
        if (elementText?.includes(expectedElementText) === !negate) {
          return {
            result: _waitForBehavior.waitForResult.PASS
          };
        } else {
          return {
            result: _waitForBehavior.waitForResult.FAIL,
            replace: elementKey
          };
        }
      } else {
        return {
          result: _waitForBehavior.waitForResult.ELEMENT_NOT_AVAILABLE,
          replace: elementKey
        };
      }
    } else {
      return {
        result: _waitForBehavior.waitForResult.ELEMENT_NOT_AVAILABLE,
        replace: iframeKey
      };
    }
  }, globalConfig, {
    target: elementKey,
    failureMessage: `🧨 Expected ${elementKey} to ${negate ? 'not ' : ''}contain the text ${expectedElementText} 🧨`
  });
});
(0, _cucumber.Then)(/^the "([^"]*)" on the "([^"]*)" iframe should( not)? equal the text "(.*)"$/, async function (elementKey, iframeKey, negate, expectedElementText) {
  const {
    screen: {
      page
    },
    globalConfig
  } = this;
  _logger.logger.log(`the ${elementKey} on the ${iframeKey} should ${negate ? 'not ' : ''}equal the text ${expectedElementText}`);
  const elementIdentifier = (0, _webElementHelper.getElementLocator)(page, elementKey, globalConfig);
  const iframeIdentifier = (0, _webElementHelper.getElementLocator)(page, iframeKey, globalConfig);
  await (0, _waitForBehavior.waitFor)(async () => {
    const elementIframe = await (0, _htmlBehavior.getIframeElement)(page, iframeIdentifier);
    if (elementIframe) {
      const elementStable = await (0, _waitForBehavior.waitForSelectorInIframe)(elementIframe, elementIdentifier);
      if (elementStable) {
        const elementText = await (0, _htmlBehavior.getTextWithinIframeElement)(elementIframe, elementIdentifier);
        if (elementText === expectedElementText === !negate) {
          return {
            result: _waitForBehavior.waitForResult.PASS
          };
        } else {
          return {
            result: _waitForBehavior.waitForResult.FAIL,
            replace: elementKey
          };
        }
      } else {
        return {
          result: _waitForBehavior.waitForResult.ELEMENT_NOT_AVAILABLE,
          replace: elementKey
        };
      }
    } else {
      return {
        result: _waitForBehavior.waitForResult.ELEMENT_NOT_AVAILABLE,
        replace: iframeKey
      };
    }
  }, globalConfig, {
    target: elementKey,
    failureMessage: `🧨 Expected ${elementKey} to ${negate ? 'not ' : ''}equal the text ${expectedElementText} 🧨`
  });
});