"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.navigateToPage = void 0;
const navigateToPage = async (page, pageId, _ref) => {
  let {
    pagesConfig,
    hostsConfig
  } = _ref;
  const {
    UI_AUTOMATION_HOST: hostName = 'homepage'
  } = process.env;
  const hostPath = hostsConfig[`${hostName}`];
  const url = new URL(hostPath);
  const pageConfigItem = pagesConfig[pageId];
  url.pathname = pageConfigItem.route;
  await page.goto(url.href);
};
exports.navigateToPage = navigateToPage;