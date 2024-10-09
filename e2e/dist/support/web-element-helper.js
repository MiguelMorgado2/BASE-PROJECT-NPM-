"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.getElementLocator = void 0;
var _navigationBehavior = require("./navigation-behavior");
const getElementLocator = (page, elementKey, globalConfig) => {
  const {
    pageElementMappings
  } = globalConfig;
  const currentPage = (0, _navigationBehavior.getCurrentPageId)(page, globalConfig);
  const elementIdentifier = pageElementMappings[currentPage]?.[elementKey] || pageElementMappings.common?.[elementKey];
  if (!elementIdentifier) {
    throw Error(`🧨 Unable to find the ${elementKey} mapping 🧨`);
  }
  return elementIdentifier;
};
exports.getElementLocator = getElementLocator;