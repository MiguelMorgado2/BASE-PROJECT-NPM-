"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.getResponse = exports.deleteResponse = void 0;
var _hostHelper = require("./host-helper");
const getResponse = async (request, route, globalConfig, globalAPIResponseVariables) => {
  const url = (0, _hostHelper.retrieveHostURL)(globalConfig);
  const response = await request.get(url.href + route);
  globalAPIResponseVariables.response = response;
  return response;
};
exports.getResponse = getResponse;
const deleteResponse = async (request, route, globalConfig, globalAPIResponseVariables) => {
  const url = (0, _hostHelper.retrieveHostURL)(globalConfig);
  const response = await request.delete(url.href + route);
  globalAPIResponseVariables.response = response;
  return response;
};
exports.deleteResponse = deleteResponse;