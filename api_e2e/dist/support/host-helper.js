"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.retrieveHostURL = void 0;
const retrieveHostURL = _ref => {
  let {
    hostsConfig
  } = _ref;
  const {
    API_AUTOMATION_HOST: hostname = 'production'
  } = process.env;
  const hostPath = hostsConfig[hostname];
  const url = new URL(hostPath);
  return url;
};
exports.retrieveHostURL = retrieveHostURL;