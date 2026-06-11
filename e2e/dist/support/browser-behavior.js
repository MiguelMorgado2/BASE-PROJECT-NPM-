"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.getViewPort = void 0;
var _playwright = require("playwright");
var _parseEnv = require("../env/parseEnv");
var getViewPort = exports.getViewPort = function getViewPort() {
  var viewPort;
  var emulation = process.env.EMULATION || "browser";
  if (emulation != "browser") {
    var device = _playwright.devices[emulation];
    viewPort = {
      width: device.viewport.width,
      height: device.viewport.height
    };
  } else {
    viewPort = {
      width: (0, _parseEnv.envNumber)('BROWSER_WIDTH'),
      height: (0, _parseEnv.envNumber)('BROWSER_HEIGHT')
    };
  }
  return viewPort;
};