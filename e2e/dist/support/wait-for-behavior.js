"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.waitForSelectorOnPage = exports.waitForSelectorInIframe = exports.waitForSelector = exports.waitForResult = exports.waitFor = void 0;
var _parseEnv = require("../env/parseEnv");
var _errorHelper = require("./error-helper");
var _logger = require("../logger");
let waitForResult = exports.waitForResult = /*#__PURE__*/function (waitForResult) {
  waitForResult[waitForResult["PASS"] = 1] = "PASS";
  waitForResult[waitForResult["FAIL"] = 2] = "FAIL";
  waitForResult[waitForResult["ELEMENT_NOT_AVAILABLE"] = 3] = "ELEMENT_NOT_AVAILABLE";
  return waitForResult;
}({});
const waitFor = async (predicate, globalConfig, options) => {
  const {
    timeout = 10000,
    wait = 2000,
    target = '',
    type = 'element'
  } = options || {};
  const sleep = ms => new Promise(resolve => setTimeout(resolve, ms));
  const startDate = new Date();
  let notAvailableContext;
  try {
    while (new Date().getTime() - startDate.getTime() < timeout) {
      const result = await predicate();
      let resultAs;
      if (result.result) {
        notAvailableContext = result.replace;
        resultAs = result.result;
      } else {
        resultAs = result;
      }
      if (resultAs === waitForResult.PASS) {
        return;
      } else if (resultAs === waitForResult.FAIL) {
        throw new Error(options?.failureMessage || "Test assertion failed");
      }
      await sleep(wait);
      _logger.logger.debug(`Waiting ${wait}ms`);
    }
    throw new Error(`Wait time of ${timeout}ms for ${notAvailableContext || target} exceeded`);
  } catch (error) {
    (0, _errorHelper.handleError)(globalConfig.errorsConfig, error, target, type);
  }
};
exports.waitFor = waitFor;
const waitForSelector = async (page, elementIdentifier) => {
  try {
    await page.waitForSelector(elementIdentifier, {
      state: 'visible',
      timeout: (0, _parseEnv.envNumber)('SELECTOR_TIMEOUT')
    });
    return true;
  } catch (e) {
    return false;
  }
};
exports.waitForSelector = waitForSelector;
const waitForSelectorOnPage = async (page, elementIdentifier, pages, pageIndex) => {
  try {
    await pages[pageIndex].waitForSelector(elementIdentifier, {
      state: 'visible',
      timeout: (0, _parseEnv.envNumber)('SELECTOR_TIMEOUT')
    });
    return true;
  } catch (e) {
    return false;
  }
};
exports.waitForSelectorOnPage = waitForSelectorOnPage;
const waitForSelectorInIframe = async (elementIframe, elementIdentifier) => {
  try {
    await elementIframe?.waitForSelector(elementIdentifier, {
      state: 'visible',
      timeout: (0, _parseEnv.envNumber)('SELECTOR_TIMEOUT')
    });
    return true;
  } catch (e) {
    return false;
  }
};
exports.waitForSelectorInIframe = waitForSelectorInIframe;