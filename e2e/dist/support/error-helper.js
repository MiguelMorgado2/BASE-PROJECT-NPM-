"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.parseErrorMessage = exports.handleError = exports.getErrorSummary = void 0;
var _logger = require("../logger");
var getErrorSummary = exports.getErrorSummary = function getErrorSummary(errDetail) {
  return errDetail.split('\n')[0];
};
var parseErrorMessage = exports.parseErrorMessage = function parseErrorMessage(errList, errorSummary, targetName, targetType) {
  var targetErrorIndex = errList.map(function (err) {
    return RegExp(err.originalErrMsgRegexString);
  }).findIndex(function (errRegex) {
    return errRegex.test(errorSummary);
  });
  return targetErrorIndex > -1 ? errList[targetErrorIndex].parsedErrMsg.replace(/{}/g, targetName).replace(/<>/g, targetType) : errorSummary;
};
var handleError = exports.handleError = function handleError(errList, err, target, type) {
  var _err$message;
  var errorDetail = (_err$message = err === null || err === void 0 ? void 0 : err.message) !== null && _err$message !== void 0 ? _err$message : '';
  var errorSummary = getErrorSummary(errorDetail);
  var targetName = target !== null && target !== void 0 ? target : '';
  var targetType = type !== null && type !== void 0 ? type : '';
  if (!errList || !errorSummary) {
    _logger.logger.error(errorDetail);
    throw new Error(errorDetail);
  }
  var parsedErrorMessage = parseErrorMessage(errList, errorSummary, targetName, targetType);
  _logger.logger.error(parsedErrorMessage);
  throw new Error(parsedErrorMessage);
};