"use strict";

var _cucumber = require("@cucumber/cucumber");
var _htmlBehavior = require("../../support/html-behavior");
var _webElementHelper = require("../../support/web-element-helper");
var _waitForBehavior = require("../../support/wait-for-behavior");
var _logger = require("../../logger");
(0, _cucumber.Then)(/^the "([^"]*)" should( not)? contain the text "(.*)"$/, async function (elementKey, negate, expectedElementText) {
  const {
    screen: {
      page
    },
    globalConfig
  } = this;
  _logger.logger.log(`the ${elementKey} should ${negate ? 'not' : ''} contain the text ${expectedElementText}`);
  const elementIdentifier = (0, _webElementHelper.getElementLocator)(page, elementKey, globalConfig);
  await (0, _waitForBehavior.waitFor)(async () => {
    const elementStable = await (0, _waitForBehavior.waitForSelector)(page, elementIdentifier);
    if (elementStable) {
      const elementText = await (0, _htmlBehavior.getElementText)(page, elementIdentifier);
      _logger.logger.debug("elementText ", elementText);
      _logger.logger.debug("expectedElementText ", expectedElementText);
      if (elementText?.includes(expectedElementText) === !negate) {
        return _waitForBehavior.waitForResult.PASS;
      } else {
        return _waitForBehavior.waitForResult.FAIL;
      }
    } else {
      return _waitForBehavior.waitForResult.ELEMENT_NOT_AVAILABLE;
    }
  }, globalConfig, {
    target: elementKey,
    failureMessage: `🧨 Expected ${elementKey} to ${negate ? 'not ' : ''}contain the text ${expectedElementText} 🧨`
  });
});
(0, _cucumber.Then)(/^the "([^"]*)" should( not)? equal the text "(.*)"$/, async function (elementKey, negate, expectedElementText) {
  const {
    screen: {
      page
    },
    globalConfig
  } = this;
  _logger.logger.log(`the ${elementKey} should ${negate ? 'not' : ''}equal the text ${expectedElementText}`);
  const elementIdentifier = (0, _webElementHelper.getElementLocator)(page, elementKey, globalConfig);
  await (0, _waitForBehavior.waitFor)(async () => {
    const elementStable = await (0, _waitForBehavior.waitForSelector)(page, elementIdentifier);
    if (elementStable) {
      const elementText = await (0, _htmlBehavior.getElementText)(page, elementIdentifier);
      if (elementText === expectedElementText === !negate) {
        return _waitForBehavior.waitForResult.PASS;
      } else {
        return _waitForBehavior.waitForResult.FAIL;
      }
    } else {
      return _waitForBehavior.waitForResult.ELEMENT_NOT_AVAILABLE;
    }
  }, globalConfig, {
    target: elementKey,
    failureMessage: `🧨 Expected ${elementKey} to ${negate ? 'not ' : ''}equal the text ${expectedElementText} 🧨`
  });
});
(0, _cucumber.Then)(/^the "([^"]*)" should( not)? contain the value "(.*)"$/, async function (elementKey, negate, expectedElementValue) {
  const {
    screen: {
      page
    },
    globalConfig
  } = this;
  _logger.logger.log(`the ${elementKey} should ${negate ? 'not' : ''}contain the value ${expectedElementValue}`);
  const elementIdentifier = (0, _webElementHelper.getElementLocator)(page, elementKey, globalConfig);
  await (0, _waitForBehavior.waitFor)(async () => {
    const elementStable = await (0, _waitForBehavior.waitForSelector)(page, elementIdentifier);
    if (elementStable) {
      const elementAttribute = await (0, _htmlBehavior.getElementValue)(page, elementIdentifier);
      if (elementAttribute?.includes(expectedElementValue) === !negate) {
        return _waitForBehavior.waitForResult.PASS;
      } else {
        return _waitForBehavior.waitForResult.FAIL;
      }
    } else {
      return _waitForBehavior.waitForResult.ELEMENT_NOT_AVAILABLE;
    }
  }, globalConfig, {
    target: elementKey,
    failureMessage: `🧨 Expected ${elementKey} to ${negate ? 'not ' : ''}contain the value ${expectedElementValue} 🧨`
  });
});
(0, _cucumber.Then)(/^the "([^"]*)" should( not)? equal the value "(.*)"$/, async function (elementKey, negate, expectedElementValue) {
  const {
    screen: {
      page
    },
    globalConfig
  } = this;
  _logger.logger.log(`the ${elementKey} should ${negate ? 'not ' : ''}equal the value ${expectedElementValue}`);
  const elementIdentifier = (0, _webElementHelper.getElementLocator)(page, elementKey, globalConfig);
  await (0, _waitForBehavior.waitFor)(async () => {
    const elementStable = await (0, _waitForBehavior.waitForSelector)(page, elementIdentifier);
    if (elementStable) {
      const elementAttribute = await (0, _htmlBehavior.getElementValue)(page, elementIdentifier);
      if (elementAttribute === expectedElementValue === !negate) {
        return _waitForBehavior.waitForResult.PASS;
      } else {
        return _waitForBehavior.waitForResult.FAIL;
      }
    } else {
      return _waitForBehavior.waitForResult.ELEMENT_NOT_AVAILABLE;
    }
  }, globalConfig, {
    target: elementKey,
    failureMessage: `🧨 Expected ${elementKey} to ${negate ? 'not ' : ''}equal the value ${expectedElementValue} 🧨`
  });
});
(0, _cucumber.Then)(/^the "([^"]*)" should( not)? be enabled$/, async function (elementKey, negate) {
  const {
    screen: {
      page
    },
    globalConfig
  } = this;
  _logger.logger.log(`the ${elementKey} should ${negate ? 'not ' : ''}be enabled`);
  const elementIdentifier = (0, _webElementHelper.getElementLocator)(page, elementKey, globalConfig);
  await (0, _waitForBehavior.waitFor)(async () => {
    const elementStable = await (0, _waitForBehavior.waitForSelector)(page, elementIdentifier);
    if (elementStable) {
      const isElementEnabled = await (0, _htmlBehavior.elementEnabled)(page, elementIdentifier);
      if (isElementEnabled === !negate) {
        return _waitForBehavior.waitForResult.PASS;
      } else {
        return _waitForBehavior.waitForResult.FAIL;
      }
    } else {
      return _waitForBehavior.waitForResult.ELEMENT_NOT_AVAILABLE;
    }
  }, globalConfig, {
    target: elementKey,
    failureMessage: `🧨 Expected ${elementKey} should ${negate ? 'not ' : ''}be enabled 🧨`
  });
});
(0, _cucumber.Then)(/^the "([0-9]+th|[0-9]+st|[0-9]+nd|[0-9]+rd)" "([^"]*)" should( not)? contain the text "(.*)"$/, async function (elementPosition, elementKey, negate, expectedElementText) {
  const {
    screen: {
      page
    },
    globalConfig
  } = this;
  _logger.logger.log(`the ${elementPosition} ${elementKey} should ${negate ? 'not ' : ''}contain the text ${expectedElementText}`);
  const elementIdentifier = (0, _webElementHelper.getElementLocator)(page, elementKey, globalConfig);
  const index = Number(elementPosition.match(/\d/g)?.join('')) - 1;
  await (0, _waitForBehavior.waitFor)(async () => {
    const elementStable = await (0, _waitForBehavior.waitForSelector)(page, elementIdentifier);
    if (elementStable) {
      const elementText = await (0, _htmlBehavior.getElementTextAtIndex)(page, elementIdentifier, index);
      if (elementText?.includes(expectedElementText) === !negate) {
        return _waitForBehavior.waitForResult.PASS;
      } else {
        return _waitForBehavior.waitForResult.FAIL;
      }
    } else {
      return _waitForBehavior.waitForResult.ELEMENT_NOT_AVAILABLE;
    }
  }, globalConfig, {
    target: elementKey,
    failureMessage: `🧨 Expected ${elementPosition} ${elementKey} to ${negate ? 'not ' : ''}contain the text ${expectedElementText} 🧨`
  });
});
(0, _cucumber.Then)(/^the "([^"]*)" "([^"]*)" attribute should( not)? contain the text "(.*)"$/, async function (elementKey, attribute, negate, expectedElementText) {
  const {
    screen: {
      page
    },
    globalConfig
  } = this;
  _logger.logger.log(`the ${elementKey} ${attribute} attribute should ${negate ? 'not ' : ''}contain the text ${expectedElementText}`);
  const elementIdentifier = (0, _webElementHelper.getElementLocator)(page, elementKey, globalConfig);
  await (0, _waitForBehavior.waitFor)(async () => {
    const elementStable = await (0, _waitForBehavior.waitForSelector)(page, elementIdentifier);
    if (elementStable) {
      const attributeText = await (0, _htmlBehavior.getAttributeText)(page, elementIdentifier, attribute);
      if (attributeText?.includes(expectedElementText) === !negate) {
        return _waitForBehavior.waitForResult.PASS;
      } else {
        return _waitForBehavior.waitForResult.FAIL;
      }
    } else {
      return _waitForBehavior.waitForResult.ELEMENT_NOT_AVAILABLE;
    }
  }, globalConfig, {
    target: elementKey,
    failureMessage: `🧨 Expected ${elementKey} ${attribute} to ${negate ? 'not ' : ''}contain the text ${expectedElementText} 🧨`
  });
});