"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.getLogger = void 0;
var _parseEnv = require("../env/parseEnv");
var _optionsHelper = require("../support/options-helper");
const DEBUG = 'debug';
const LOG = 'log';
const ERROR = 'error';
const OFF = 'off';
const LOG_LEVELS = [DEBUG, LOG, ERROR, OFF];
const logFuncAtLevels = function (logLevels) {
  let logFunction = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : console;
  return function (logLevel) {
    for (var _len = arguments.length, msg = new Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
      msg[_key - 1] = arguments[_key];
    }
    if (logLevel !== OFF && logLevels.indexOf(logLevel) !== -1 && msg.length > 0) {
      logFunction[logLevel](...msg);
    }
  };
};
const getLogLevel = logLevel => {
  const dynamicLogLevelIndex = LOG_LEVELS.indexOf(logLevel);
  return LOG_LEVELS.slice(dynamicLogLevelIndex);
};
const createLogger = logLevel => {
  const activeLogLevels = getLogLevel(logLevel);
  const logger = logFuncAtLevels(activeLogLevels);
  return LOG_LEVELS.reduce((accumulator, level) => ({
    ...accumulator,
    [level]: function () {
      for (var _len2 = arguments.length, msg = new Array(_len2), _key2 = 0; _key2 < _len2; _key2++) {
        msg[_key2] = arguments[_key2];
      }
      return logger(level, ...msg);
    }
  }), {});
};
let loggerSingleton = null;
const getLogger = () => {
  if (!loggerSingleton) {
    const logLevel = (0, _parseEnv.env)('LOG_LEVEL');
    const validLogLevel = (0, _optionsHelper.stringIsOfOptions)(logLevel, LOG_LEVELS);
    loggerSingleton = createLogger(validLogLevel);
  }
  return loggerSingleton;
};
exports.getLogger = getLogger;