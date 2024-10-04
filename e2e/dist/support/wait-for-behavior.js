"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.waitForSelectorOnPage = exports.waitForSelectorInIframe = exports.waitForSelector = exports.waitFor = void 0;
var _parseEnv = require("../env/parseEnv");
var _logger = require("../logger");
const waitFor = async (predicate, options) => {
  const {
    timeout = 20000,
    wait = 2000
  } = options || {};
  const sleep = ms => new Promise(resolve => setTimeout(resolve, ms));
  const startDate = new Date();
  while (new Date().getTime() - startDate.getTime() < timeout) {
    const result = await predicate();
    if (result) return result;
    await sleep(wait);
    _logger.logger.log(`Waiting ${wait}ms`);
  }
  throw new Error(`Wait time of ${timeout}ms exceeded`);
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