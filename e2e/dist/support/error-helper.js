"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.parseErrorMessage = exports.handleError = exports.getErrorSummary = void 0;
var _logger = require("../logger");
const getErrorSummary = errDetail => {
  return errDetail.split('\n')[0];
};
exports.getErrorSummary = getErrorSummary;
const parseErrorMessage = (errList, errorSummary, targetName, targetType) => {
  const targetErrorIndex = errList.map(err => RegExp(err.originalErrMsgRegexString)).findIndex(errRegex => errRegex.test(errorSummary));
  return targetErrorIndex > -1 ? errList[targetErrorIndex].parsedErrMsg.replace(/{}/g, targetName).replace(/<>/g, targetType) : errorSummary;
};
exports.parseErrorMessage = parseErrorMessage;
const handleError = (errList, err, target, type) => {
  const errorDetail = err?.message ?? '';
  const errorSummary = getErrorSummary(errorDetail);
  const targetName = target ?? '';
  const targetType = type ?? '';
  if (!errList || !errorSummary) {
    _logger.logger.error(errorDetail);
    throw new Error(errorDetail);
  }
  const parsedErrorMessage = parseErrorMessage(errList, errorSummary, targetName, targetType);
  _logger.logger.error(parsedErrorMessage);
  throw new Error(parsedErrorMessage);
};
exports.handleError = handleError;