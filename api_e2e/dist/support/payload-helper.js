"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.payloadExists = void 0;
var _parseEnv = require("../env/parseEnv");
const payloadExists = jsonPayload => {
  if (jsonPayload === undefined) {
    throw Error("\uD83E\uDDE8 JSON Payload not defined in ".concat((0, _parseEnv.env)('JSON_PAYLOAD_PATH'), " \uD83E\uDDE8"));
  }
  return jsonPayload;
};
exports.payloadExists = payloadExists;