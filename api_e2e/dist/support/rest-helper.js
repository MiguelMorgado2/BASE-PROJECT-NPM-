"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.putResponse = exports.postResponse = exports.patchResponse = exports.getResponse = exports.deleteResponse = void 0;
var _hostHelper = require("./host-helper");
var _payloadHelper = require("./payload-helper");
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
const postResponse = async (request, route, jsonPayloadName, globalConfig, globalAPIResponseVariables) => {
  const url = (0, _hostHelper.retrieveHostURL)(globalConfig);
  const payload = (0, _payloadHelper.payloadExists)(globalConfig.jsonPayloadMappings[jsonPayloadName]);
  const response = await request.post(url.href + route, {
    data: payload
  });
  globalAPIResponseVariables.response = response;
  return response;
};
exports.postResponse = postResponse;
const patchResponse = async (request, route, jsonPayloadName, globalConfig, globalAPIResponseVariables) => {
  const url = (0, _hostHelper.retrieveHostURL)(globalConfig);
  const payload = (0, _payloadHelper.payloadExists)(globalConfig.jsonPayloadMappings[jsonPayloadName]);
  const response = await request.patch(url.href + route, {
    data: payload
  });
  globalAPIResponseVariables.response = response;
  return response;
};
exports.patchResponse = patchResponse;
const putResponse = async (request, route, jsonPayloadName, globalConfig, globalAPIResponseVariables) => {
  const url = (0, _hostHelper.retrieveHostURL)(globalConfig);
  const payload = (0, _payloadHelper.payloadExists)(globalConfig.jsonPayloadMappings[jsonPayloadName]);
  const response = await request.put(url.href + route, {
    data: payload
  });
  globalAPIResponseVariables.response = response;
  return response;
};
exports.putResponse = putResponse;