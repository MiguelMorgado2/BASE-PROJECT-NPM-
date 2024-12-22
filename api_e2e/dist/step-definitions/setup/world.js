"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.ScenarioWorld = void 0;
var _playwright = _interopRequireDefault(require("playwright"));
var _cucumber = require("@cucumber/cucumber");
function _interopRequireDefault(e) { return e && e.__esModule ? e : { default: e }; }
function _defineProperty(e, r, t) { return (r = _toPropertyKey(r)) in e ? Object.defineProperty(e, r, { value: t, enumerable: !0, configurable: !0, writable: !0 }) : e[r] = t, e; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == typeof i ? i : i + ""; }
function _toPrimitive(t, r) { if ("object" != typeof t || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != typeof i) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }
class ScenarioWorld extends _cucumber.World {
  constructor(options) {
    super(options);
    _defineProperty(this, "globalConfig", void 0);
    _defineProperty(this, "globalAPIResponseVariables", void 0);
    _defineProperty(this, "api", void 0);
    _defineProperty(this, "newRequest", async () => {
      const request = await _playwright.default.request.newContext({
        extraHTTPHeaders: {
          'Content-type': 'application/json; charset=UTF-8'
        }
      });
      return request;
    });
    this.globalAPIResponseVariables = {};
    this.globalConfig = options.parameters;
  }
  async init() {
    const request = await this.newRequest();
    this.api = {
      request
    };
    return this.api;
  }
}
exports.ScenarioWorld = ScenarioWorld;
(0, _cucumber.setWorldConstructor)(ScenarioWorld);