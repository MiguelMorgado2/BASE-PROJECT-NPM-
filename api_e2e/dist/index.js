"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.smoke = exports.regression = exports.dev = void 0;
var _dotenv = _interopRequireDefault(require("dotenv"));
var _parseEnv = require("./env/parseEnv");
var fs = _interopRequireWildcard(require("fs"));
function _getRequireWildcardCache(e) { if ("function" != typeof WeakMap) return null; var r = new WeakMap(), t = new WeakMap(); return (_getRequireWildcardCache = function (e) { return e ? t : r; })(e); }
function _interopRequireWildcard(e, r) { if (!r && e && e.__esModule) return e; if (null === e || "object" != typeof e && "function" != typeof e) return { default: e }; var t = _getRequireWildcardCache(r); if (t && t.has(e)) return t.get(e); var n = { __proto__: null }, a = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var u in e) if ("default" !== u && {}.hasOwnProperty.call(e, u)) { var i = a ? Object.getOwnPropertyDescriptor(e, u) : null; i && (i.get || i.set) ? Object.defineProperty(n, u, i) : n[u] = e[u]; } return n.default = e, t && t.set(e, n), n; }
function _interopRequireDefault(e) { return e && e.__esModule ? e : { default: e }; }
function ownKeys(e, r) { var t = Object.keys(e); if (Object.getOwnPropertySymbols) { var o = Object.getOwnPropertySymbols(e); r && (o = o.filter(function (r) { return Object.getOwnPropertyDescriptor(e, r).enumerable; })), t.push.apply(t, o); } return t; }
function _objectSpread(e) { for (var r = 1; r < arguments.length; r++) { var t = null != arguments[r] ? arguments[r] : {}; r % 2 ? ownKeys(Object(t), !0).forEach(function (r) { _defineProperty(e, r, t[r]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys(Object(t)).forEach(function (r) { Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r)); }); } return e; }
function _defineProperty(e, r, t) { return (r = _toPropertyKey(r)) in e ? Object.defineProperty(e, r, { value: t, enumerable: !0, configurable: !0, writable: !0 }) : e[r] = t, e; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == typeof i ? i : i + ""; }
function _toPrimitive(t, r) { if ("object" != typeof t || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != typeof i) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }
_dotenv.default.config({
  path: (0, _parseEnv.env)('COMMON_CONFIG_FILE')
});
const hostsConfig = (0, _parseEnv.getJsonFromFile)((0, _parseEnv.env)('HOSTS_URLS_PATH'));
const payloadFiles = fs.readdirSync("".concat(process.cwd()).concat((0, _parseEnv.env)('JSON_PAYLOAD_PATH')));
const jsonPayloadMappings = payloadFiles.reduce((payloadConfigAcc, file) => {
  const key = file.replace('.json', '');
  const payloadMappings = (0, _parseEnv.getJsonFromFile)("".concat((0, _parseEnv.env)('JSON_PAYLOAD_PATH')).concat(file));
  return _objectSpread(_objectSpread({}, payloadConfigAcc), {}, {
    [key]: payloadMappings
  });
}, {});
const worldParameters = {
  hostsConfig,
  jsonPayloadMappings
};
const common = "./src/features/**/*.feature           --require-module ts-node/register           --require ./src/step-definitions/**/**/*.ts           --world-parameters ".concat(JSON.stringify(worldParameters), "\n          -f json:./reports/report.json           --parallel ").concat((0, _parseEnv.env)('PARALLEL'), "           --retry ").concat((0, _parseEnv.env)('RETRY'), "           --format progress-bar");
const dev = exports.dev = "".concat(common, " --tags '@dev'");
const smoke = exports.smoke = "".concat(common, " --tags '@smoke'");
const regression = exports.regression = "".concat(common, " --tags '@regression'");
console.log("\n \uD83D\uDC7E \uD83D\uDC7E \uD83D\uDC7E \uD83D\uDC7E \uD83D\uDC7E \uD83D\uDC7E \uD83D\uDC7E \uD83D\uDC7E \uD83D\uDC7E \uD83D\uDC7E \n");