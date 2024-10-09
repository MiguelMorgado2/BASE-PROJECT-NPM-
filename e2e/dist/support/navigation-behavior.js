"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.reloadPage = exports.navigateToPage = exports.getCurrentPageId = exports.currentPathMatchesPageId = void 0;
var _waitForBehavior = require("./wait-for-behavior");
const navigateToPage = async (page, pageId, _ref) => {
  let {
    pagesConfig,
    hostsConfig
  } = _ref;
  const {
    UI_AUTOMATION_HOST: hostName = 'localhost'
  } = process.env;
  const hostPath = hostsConfig[`${hostName}`];
  const url = new URL(hostPath);
  const pageConfigItem = pagesConfig[pageId];
  url.pathname = pageConfigItem.route;
  await page.goto(url.href);
};
exports.navigateToPage = navigateToPage;
const pathMatchesPageId = (path, pageId, _ref2) => {
  let {
    pagesConfig
  } = _ref2;
  const pageRegexString = pagesConfig[pageId].regex;
  const pageRegex = new RegExp(pageRegexString);
  return pageRegex.test(path);
};
const currentPathMatchesPageId = (page, pageId, globalConfig) => {
  const {
    pathname: currentPath
  } = new URL(page.url());
  if (pathMatchesPageId(currentPath, pageId, globalConfig)) {
    return _waitForBehavior.waitForResult.PASS;
  }
  return _waitForBehavior.waitForResult.ELEMENT_NOT_AVAILABLE;
};
exports.currentPathMatchesPageId = currentPathMatchesPageId;
const getCurrentPageId = (page, globalConfig) => {
  const {
    pagesConfig
  } = globalConfig;
  const pageConfigPageIds = Object.keys(pagesConfig);
  const {
    pathname: currentPath
  } = new URL(page.url());
  const currentPageId = pageConfigPageIds.find(pageId => pathMatchesPageId(currentPath, pageId, globalConfig));
  if (!currentPageId) {
    throw Error(`Failed to get page name from current route ${currentPath}, \
      possible pages: ${JSON.stringify(pagesConfig)}`);
  }
  return currentPageId;
};
exports.getCurrentPageId = getCurrentPageId;
const reloadPage = async page => {
  await page.reload();
};
exports.reloadPage = reloadPage;