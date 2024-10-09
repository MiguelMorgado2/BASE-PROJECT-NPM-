"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.stringIsOfOptions = void 0;
const stringLevelIsT = (string, options) => {
  return options.includes(string);
};
const stringIsOfOptions = (stringLevel, options) => {
  if (stringLevelIsT(stringLevel, options)) {
    return stringLevel;
  }
  throw Error(`🧨 String '${stringLevel}' needs to be one of ${options} 🧨`);
};
exports.stringIsOfOptions = stringIsOfOptions;