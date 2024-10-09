"use strict";

function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
var _cucumber = require("@cucumber/cucumber");
var _htmlBehavior = require("../../support/html-behavior");
var _webElementHelper = require("../../support/web-element-helper");
var _waitForBehavior = require("../../support/wait-for-behavior");
var _logger = require("../../logger");
function _regeneratorRuntime() { "use strict"; /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/facebook/regenerator/blob/main/LICENSE */ _regeneratorRuntime = function _regeneratorRuntime() { return e; }; var t, e = {}, r = Object.prototype, n = r.hasOwnProperty, o = Object.defineProperty || function (t, e, r) { t[e] = r.value; }, i = "function" == typeof Symbol ? Symbol : {}, a = i.iterator || "@@iterator", c = i.asyncIterator || "@@asyncIterator", u = i.toStringTag || "@@toStringTag"; function define(t, e, r) { return Object.defineProperty(t, e, { value: r, enumerable: !0, configurable: !0, writable: !0 }), t[e]; } try { define({}, ""); } catch (t) { define = function define(t, e, r) { return t[e] = r; }; } function wrap(t, e, r, n) { var i = e && e.prototype instanceof Generator ? e : Generator, a = Object.create(i.prototype), c = new Context(n || []); return o(a, "_invoke", { value: makeInvokeMethod(t, r, c) }), a; } function tryCatch(t, e, r) { try { return { type: "normal", arg: t.call(e, r) }; } catch (t) { return { type: "throw", arg: t }; } } e.wrap = wrap; var h = "suspendedStart", l = "suspendedYield", f = "executing", s = "completed", y = {}; function Generator() {} function GeneratorFunction() {} function GeneratorFunctionPrototype() {} var p = {}; define(p, a, function () { return this; }); var d = Object.getPrototypeOf, v = d && d(d(values([]))); v && v !== r && n.call(v, a) && (p = v); var g = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(p); function defineIteratorMethods(t) { ["next", "throw", "return"].forEach(function (e) { define(t, e, function (t) { return this._invoke(e, t); }); }); } function AsyncIterator(t, e) { function invoke(r, o, i, a) { var c = tryCatch(t[r], t, o); if ("throw" !== c.type) { var u = c.arg, h = u.value; return h && "object" == _typeof(h) && n.call(h, "__await") ? e.resolve(h.__await).then(function (t) { invoke("next", t, i, a); }, function (t) { invoke("throw", t, i, a); }) : e.resolve(h).then(function (t) { u.value = t, i(u); }, function (t) { return invoke("throw", t, i, a); }); } a(c.arg); } var r; o(this, "_invoke", { value: function value(t, n) { function callInvokeWithMethodAndArg() { return new e(function (e, r) { invoke(t, n, e, r); }); } return r = r ? r.then(callInvokeWithMethodAndArg, callInvokeWithMethodAndArg) : callInvokeWithMethodAndArg(); } }); } function makeInvokeMethod(e, r, n) { var o = h; return function (i, a) { if (o === f) throw Error("Generator is already running"); if (o === s) { if ("throw" === i) throw a; return { value: t, done: !0 }; } for (n.method = i, n.arg = a;;) { var c = n.delegate; if (c) { var u = maybeInvokeDelegate(c, n); if (u) { if (u === y) continue; return u; } } if ("next" === n.method) n.sent = n._sent = n.arg;else if ("throw" === n.method) { if (o === h) throw o = s, n.arg; n.dispatchException(n.arg); } else "return" === n.method && n.abrupt("return", n.arg); o = f; var p = tryCatch(e, r, n); if ("normal" === p.type) { if (o = n.done ? s : l, p.arg === y) continue; return { value: p.arg, done: n.done }; } "throw" === p.type && (o = s, n.method = "throw", n.arg = p.arg); } }; } function maybeInvokeDelegate(e, r) { var n = r.method, o = e.iterator[n]; if (o === t) return r.delegate = null, "throw" === n && e.iterator["return"] && (r.method = "return", r.arg = t, maybeInvokeDelegate(e, r), "throw" === r.method) || "return" !== n && (r.method = "throw", r.arg = new TypeError("The iterator does not provide a '" + n + "' method")), y; var i = tryCatch(o, e.iterator, r.arg); if ("throw" === i.type) return r.method = "throw", r.arg = i.arg, r.delegate = null, y; var a = i.arg; return a ? a.done ? (r[e.resultName] = a.value, r.next = e.nextLoc, "return" !== r.method && (r.method = "next", r.arg = t), r.delegate = null, y) : a : (r.method = "throw", r.arg = new TypeError("iterator result is not an object"), r.delegate = null, y); } function pushTryEntry(t) { var e = { tryLoc: t[0] }; 1 in t && (e.catchLoc = t[1]), 2 in t && (e.finallyLoc = t[2], e.afterLoc = t[3]), this.tryEntries.push(e); } function resetTryEntry(t) { var e = t.completion || {}; e.type = "normal", delete e.arg, t.completion = e; } function Context(t) { this.tryEntries = [{ tryLoc: "root" }], t.forEach(pushTryEntry, this), this.reset(!0); } function values(e) { if (e || "" === e) { var r = e[a]; if (r) return r.call(e); if ("function" == typeof e.next) return e; if (!isNaN(e.length)) { var o = -1, i = function next() { for (; ++o < e.length;) if (n.call(e, o)) return next.value = e[o], next.done = !1, next; return next.value = t, next.done = !0, next; }; return i.next = i; } } throw new TypeError(_typeof(e) + " is not iterable"); } return GeneratorFunction.prototype = GeneratorFunctionPrototype, o(g, "constructor", { value: GeneratorFunctionPrototype, configurable: !0 }), o(GeneratorFunctionPrototype, "constructor", { value: GeneratorFunction, configurable: !0 }), GeneratorFunction.displayName = define(GeneratorFunctionPrototype, u, "GeneratorFunction"), e.isGeneratorFunction = function (t) { var e = "function" == typeof t && t.constructor; return !!e && (e === GeneratorFunction || "GeneratorFunction" === (e.displayName || e.name)); }, e.mark = function (t) { return Object.setPrototypeOf ? Object.setPrototypeOf(t, GeneratorFunctionPrototype) : (t.__proto__ = GeneratorFunctionPrototype, define(t, u, "GeneratorFunction")), t.prototype = Object.create(g), t; }, e.awrap = function (t) { return { __await: t }; }, defineIteratorMethods(AsyncIterator.prototype), define(AsyncIterator.prototype, c, function () { return this; }), e.AsyncIterator = AsyncIterator, e.async = function (t, r, n, o, i) { void 0 === i && (i = Promise); var a = new AsyncIterator(wrap(t, r, n, o), i); return e.isGeneratorFunction(r) ? a : a.next().then(function (t) { return t.done ? t.value : a.next(); }); }, defineIteratorMethods(g), define(g, u, "Generator"), define(g, a, function () { return this; }), define(g, "toString", function () { return "[object Generator]"; }), e.keys = function (t) { var e = Object(t), r = []; for (var n in e) r.push(n); return r.reverse(), function next() { for (; r.length;) { var t = r.pop(); if (t in e) return next.value = t, next.done = !1, next; } return next.done = !0, next; }; }, e.values = values, Context.prototype = { constructor: Context, reset: function reset(e) { if (this.prev = 0, this.next = 0, this.sent = this._sent = t, this.done = !1, this.delegate = null, this.method = "next", this.arg = t, this.tryEntries.forEach(resetTryEntry), !e) for (var r in this) "t" === r.charAt(0) && n.call(this, r) && !isNaN(+r.slice(1)) && (this[r] = t); }, stop: function stop() { this.done = !0; var t = this.tryEntries[0].completion; if ("throw" === t.type) throw t.arg; return this.rval; }, dispatchException: function dispatchException(e) { if (this.done) throw e; var r = this; function handle(n, o) { return a.type = "throw", a.arg = e, r.next = n, o && (r.method = "next", r.arg = t), !!o; } for (var o = this.tryEntries.length - 1; o >= 0; --o) { var i = this.tryEntries[o], a = i.completion; if ("root" === i.tryLoc) return handle("end"); if (i.tryLoc <= this.prev) { var c = n.call(i, "catchLoc"), u = n.call(i, "finallyLoc"); if (c && u) { if (this.prev < i.catchLoc) return handle(i.catchLoc, !0); if (this.prev < i.finallyLoc) return handle(i.finallyLoc); } else if (c) { if (this.prev < i.catchLoc) return handle(i.catchLoc, !0); } else { if (!u) throw Error("try statement without catch or finally"); if (this.prev < i.finallyLoc) return handle(i.finallyLoc); } } } }, abrupt: function abrupt(t, e) { for (var r = this.tryEntries.length - 1; r >= 0; --r) { var o = this.tryEntries[r]; if (o.tryLoc <= this.prev && n.call(o, "finallyLoc") && this.prev < o.finallyLoc) { var i = o; break; } } i && ("break" === t || "continue" === t) && i.tryLoc <= e && e <= i.finallyLoc && (i = null); var a = i ? i.completion : {}; return a.type = t, a.arg = e, i ? (this.method = "next", this.next = i.finallyLoc, y) : this.complete(a); }, complete: function complete(t, e) { if ("throw" === t.type) throw t.arg; return "break" === t.type || "continue" === t.type ? this.next = t.arg : "return" === t.type ? (this.rval = this.arg = t.arg, this.method = "return", this.next = "end") : "normal" === t.type && e && (this.next = e), y; }, finish: function finish(t) { for (var e = this.tryEntries.length - 1; e >= 0; --e) { var r = this.tryEntries[e]; if (r.finallyLoc === t) return this.complete(r.completion, r.afterLoc), resetTryEntry(r), y; } }, "catch": function _catch(t) { for (var e = this.tryEntries.length - 1; e >= 0; --e) { var r = this.tryEntries[e]; if (r.tryLoc === t) { var n = r.completion; if ("throw" === n.type) { var o = n.arg; resetTryEntry(r); } return o; } } throw Error("illegal catch attempt"); }, delegateYield: function delegateYield(e, r, n) { return this.delegate = { iterator: values(e), resultName: r, nextLoc: n }, "next" === this.method && (this.arg = t), y; } }, e; }
function asyncGeneratorStep(n, t, e, r, o, a, c) { try { var i = n[a](c), u = i.value; } catch (n) { return void e(n); } i.done ? t(u) : Promise.resolve(u).then(r, o); }
function _asyncToGenerator(n) { return function () { var t = this, e = arguments; return new Promise(function (r, o) { var a = n.apply(t, e); function _next(n) { asyncGeneratorStep(a, r, o, _next, _throw, "next", n); } function _throw(n) { asyncGeneratorStep(a, r, o, _next, _throw, "throw", n); } _next(void 0); }); }; }
(0, _cucumber.Then)(/^the "([^"]*)" should( not)? contain the text "(.*)"$/, /*#__PURE__*/function () {
  var _ref = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee2(elementKey, negate, expectedElementText) {
    var page, globalConfig, elementIdentifier;
    return _regeneratorRuntime().wrap(function _callee2$(_context2) {
      while (1) switch (_context2.prev = _context2.next) {
        case 0:
          page = this.screen.page, globalConfig = this.globalConfig;
          _logger.logger.log("the ".concat(elementKey, " should ").concat(negate ? 'not' : '', " contain the text ").concat(expectedElementText));
          elementIdentifier = (0, _webElementHelper.getElementLocator)(page, elementKey, globalConfig);
          _context2.next = 5;
          return (0, _waitForBehavior.waitFor)( /*#__PURE__*/_asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee() {
            var elementStable, elementText;
            return _regeneratorRuntime().wrap(function _callee$(_context) {
              while (1) switch (_context.prev = _context.next) {
                case 0:
                  _context.next = 2;
                  return (0, _waitForBehavior.waitForSelector)(page, elementIdentifier);
                case 2:
                  elementStable = _context.sent;
                  if (!elementStable) {
                    _context.next = 16;
                    break;
                  }
                  _context.next = 6;
                  return (0, _htmlBehavior.getElementText)(page, elementIdentifier);
                case 6:
                  elementText = _context.sent;
                  _logger.logger.debug("elementText ", elementText);
                  _logger.logger.debug("expectedElementText ", expectedElementText);
                  if (!((elementText === null || elementText === void 0 ? void 0 : elementText.includes(expectedElementText)) === !negate)) {
                    _context.next = 13;
                    break;
                  }
                  return _context.abrupt("return", _waitForBehavior.waitForResult.PASS);
                case 13:
                  return _context.abrupt("return", _waitForBehavior.waitForResult.FAIL);
                case 14:
                  _context.next = 17;
                  break;
                case 16:
                  return _context.abrupt("return", _waitForBehavior.waitForResult.ELEMENT_NOT_AVAILABLE);
                case 17:
                case "end":
                  return _context.stop();
              }
            }, _callee);
          })), globalConfig, {
            target: elementKey,
            failureMessage: "\uD83E\uDDE8 Expected ".concat(elementKey, " to ").concat(negate ? 'not ' : '', "contain the text ").concat(expectedElementText, " \uD83E\uDDE8")
          });
        case 5:
        case "end":
          return _context2.stop();
      }
    }, _callee2, this);
  }));
  return function (_x, _x2, _x3, _x4) {
    return _ref.apply(this, arguments);
  };
}());
(0, _cucumber.Then)(/^the "([^"]*)" should( not)? equal the text "(.*)"$/, /*#__PURE__*/function () {
  var _ref3 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee4(elementKey, negate, expectedElementText) {
    var page, globalConfig, elementIdentifier;
    return _regeneratorRuntime().wrap(function _callee4$(_context4) {
      while (1) switch (_context4.prev = _context4.next) {
        case 0:
          page = this.screen.page, globalConfig = this.globalConfig;
          _logger.logger.log("the ".concat(elementKey, " should ").concat(negate ? 'not' : '', "equal the text ").concat(expectedElementText));
          elementIdentifier = (0, _webElementHelper.getElementLocator)(page, elementKey, globalConfig);
          _context4.next = 5;
          return (0, _waitForBehavior.waitFor)( /*#__PURE__*/_asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee3() {
            var elementStable, elementText;
            return _regeneratorRuntime().wrap(function _callee3$(_context3) {
              while (1) switch (_context3.prev = _context3.next) {
                case 0:
                  _context3.next = 2;
                  return (0, _waitForBehavior.waitForSelector)(page, elementIdentifier);
                case 2:
                  elementStable = _context3.sent;
                  if (!elementStable) {
                    _context3.next = 14;
                    break;
                  }
                  _context3.next = 6;
                  return (0, _htmlBehavior.getElementText)(page, elementIdentifier);
                case 6:
                  elementText = _context3.sent;
                  if (!(elementText === expectedElementText === !negate)) {
                    _context3.next = 11;
                    break;
                  }
                  return _context3.abrupt("return", _waitForBehavior.waitForResult.PASS);
                case 11:
                  return _context3.abrupt("return", _waitForBehavior.waitForResult.FAIL);
                case 12:
                  _context3.next = 15;
                  break;
                case 14:
                  return _context3.abrupt("return", _waitForBehavior.waitForResult.ELEMENT_NOT_AVAILABLE);
                case 15:
                case "end":
                  return _context3.stop();
              }
            }, _callee3);
          })), globalConfig, {
            target: elementKey,
            failureMessage: "\uD83E\uDDE8 Expected ".concat(elementKey, " to ").concat(negate ? 'not ' : '', "equal the text ").concat(expectedElementText, " \uD83E\uDDE8")
          });
        case 5:
        case "end":
          return _context4.stop();
      }
    }, _callee4, this);
  }));
  return function (_x5, _x6, _x7, _x8) {
    return _ref3.apply(this, arguments);
  };
}());
(0, _cucumber.Then)(/^the "([^"]*)" should( not)? contain the value "(.*)"$/, /*#__PURE__*/function () {
  var _ref5 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee6(elementKey, negate, expectedElementValue) {
    var page, globalConfig, elementIdentifier;
    return _regeneratorRuntime().wrap(function _callee6$(_context6) {
      while (1) switch (_context6.prev = _context6.next) {
        case 0:
          page = this.screen.page, globalConfig = this.globalConfig;
          _logger.logger.log("the ".concat(elementKey, " should ").concat(negate ? 'not' : '', "contain the value ").concat(expectedElementValue));
          elementIdentifier = (0, _webElementHelper.getElementLocator)(page, elementKey, globalConfig);
          _context6.next = 5;
          return (0, _waitForBehavior.waitFor)( /*#__PURE__*/_asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee5() {
            var elementStable, elementAttribute;
            return _regeneratorRuntime().wrap(function _callee5$(_context5) {
              while (1) switch (_context5.prev = _context5.next) {
                case 0:
                  _context5.next = 2;
                  return (0, _waitForBehavior.waitForSelector)(page, elementIdentifier);
                case 2:
                  elementStable = _context5.sent;
                  if (!elementStable) {
                    _context5.next = 14;
                    break;
                  }
                  _context5.next = 6;
                  return (0, _htmlBehavior.getElementValue)(page, elementIdentifier);
                case 6:
                  elementAttribute = _context5.sent;
                  if (!((elementAttribute === null || elementAttribute === void 0 ? void 0 : elementAttribute.includes(expectedElementValue)) === !negate)) {
                    _context5.next = 11;
                    break;
                  }
                  return _context5.abrupt("return", _waitForBehavior.waitForResult.PASS);
                case 11:
                  return _context5.abrupt("return", _waitForBehavior.waitForResult.FAIL);
                case 12:
                  _context5.next = 15;
                  break;
                case 14:
                  return _context5.abrupt("return", _waitForBehavior.waitForResult.ELEMENT_NOT_AVAILABLE);
                case 15:
                case "end":
                  return _context5.stop();
              }
            }, _callee5);
          })), globalConfig, {
            target: elementKey,
            failureMessage: "\uD83E\uDDE8 Expected ".concat(elementKey, " to ").concat(negate ? 'not ' : '', "contain the value ").concat(expectedElementValue, " \uD83E\uDDE8")
          });
        case 5:
        case "end":
          return _context6.stop();
      }
    }, _callee6, this);
  }));
  return function (_x9, _x10, _x11, _x12) {
    return _ref5.apply(this, arguments);
  };
}());
(0, _cucumber.Then)(/^the "([^"]*)" should( not)? equal the value "(.*)"$/, /*#__PURE__*/function () {
  var _ref7 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee8(elementKey, negate, expectedElementValue) {
    var page, globalConfig, elementIdentifier;
    return _regeneratorRuntime().wrap(function _callee8$(_context8) {
      while (1) switch (_context8.prev = _context8.next) {
        case 0:
          page = this.screen.page, globalConfig = this.globalConfig;
          _logger.logger.log("the ".concat(elementKey, " should ").concat(negate ? 'not ' : '', "equal the value ").concat(expectedElementValue));
          elementIdentifier = (0, _webElementHelper.getElementLocator)(page, elementKey, globalConfig);
          _context8.next = 5;
          return (0, _waitForBehavior.waitFor)( /*#__PURE__*/_asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee7() {
            var elementStable, elementAttribute;
            return _regeneratorRuntime().wrap(function _callee7$(_context7) {
              while (1) switch (_context7.prev = _context7.next) {
                case 0:
                  _context7.next = 2;
                  return (0, _waitForBehavior.waitForSelector)(page, elementIdentifier);
                case 2:
                  elementStable = _context7.sent;
                  if (!elementStable) {
                    _context7.next = 14;
                    break;
                  }
                  _context7.next = 6;
                  return (0, _htmlBehavior.getElementValue)(page, elementIdentifier);
                case 6:
                  elementAttribute = _context7.sent;
                  if (!(elementAttribute === expectedElementValue === !negate)) {
                    _context7.next = 11;
                    break;
                  }
                  return _context7.abrupt("return", _waitForBehavior.waitForResult.PASS);
                case 11:
                  return _context7.abrupt("return", _waitForBehavior.waitForResult.FAIL);
                case 12:
                  _context7.next = 15;
                  break;
                case 14:
                  return _context7.abrupt("return", _waitForBehavior.waitForResult.ELEMENT_NOT_AVAILABLE);
                case 15:
                case "end":
                  return _context7.stop();
              }
            }, _callee7);
          })), globalConfig, {
            target: elementKey,
            failureMessage: "\uD83E\uDDE8 Expected ".concat(elementKey, " to ").concat(negate ? 'not ' : '', "equal the value ").concat(expectedElementValue, " \uD83E\uDDE8")
          });
        case 5:
        case "end":
          return _context8.stop();
      }
    }, _callee8, this);
  }));
  return function (_x13, _x14, _x15, _x16) {
    return _ref7.apply(this, arguments);
  };
}());
(0, _cucumber.Then)(/^the "([^"]*)" should( not)? be enabled$/, /*#__PURE__*/function () {
  var _ref9 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee10(elementKey, negate) {
    var page, globalConfig, elementIdentifier;
    return _regeneratorRuntime().wrap(function _callee10$(_context10) {
      while (1) switch (_context10.prev = _context10.next) {
        case 0:
          page = this.screen.page, globalConfig = this.globalConfig;
          _logger.logger.log("the ".concat(elementKey, " should ").concat(negate ? 'not ' : '', "be enabled"));
          elementIdentifier = (0, _webElementHelper.getElementLocator)(page, elementKey, globalConfig);
          _context10.next = 5;
          return (0, _waitForBehavior.waitFor)( /*#__PURE__*/_asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee9() {
            var elementStable, isElementEnabled;
            return _regeneratorRuntime().wrap(function _callee9$(_context9) {
              while (1) switch (_context9.prev = _context9.next) {
                case 0:
                  _context9.next = 2;
                  return (0, _waitForBehavior.waitForSelector)(page, elementIdentifier);
                case 2:
                  elementStable = _context9.sent;
                  if (!elementStable) {
                    _context9.next = 14;
                    break;
                  }
                  _context9.next = 6;
                  return (0, _htmlBehavior.elementEnabled)(page, elementIdentifier);
                case 6:
                  isElementEnabled = _context9.sent;
                  if (!(isElementEnabled === !negate)) {
                    _context9.next = 11;
                    break;
                  }
                  return _context9.abrupt("return", _waitForBehavior.waitForResult.PASS);
                case 11:
                  return _context9.abrupt("return", _waitForBehavior.waitForResult.FAIL);
                case 12:
                  _context9.next = 15;
                  break;
                case 14:
                  return _context9.abrupt("return", _waitForBehavior.waitForResult.ELEMENT_NOT_AVAILABLE);
                case 15:
                case "end":
                  return _context9.stop();
              }
            }, _callee9);
          })), globalConfig, {
            target: elementKey,
            failureMessage: "\uD83E\uDDE8 Expected ".concat(elementKey, " should ").concat(negate ? 'not ' : '', "be enabled \uD83E\uDDE8")
          });
        case 5:
        case "end":
          return _context10.stop();
      }
    }, _callee10, this);
  }));
  return function (_x17, _x18, _x19) {
    return _ref9.apply(this, arguments);
  };
}());
(0, _cucumber.Then)(/^the "([0-9]+th|[0-9]+st|[0-9]+nd|[0-9]+rd)" "([^"]*)" should( not)? contain the text "(.*)"$/, /*#__PURE__*/function () {
  var _ref11 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee12(elementPosition, elementKey, negate, expectedElementText) {
    var _elementPosition$matc;
    var page, globalConfig, elementIdentifier, index;
    return _regeneratorRuntime().wrap(function _callee12$(_context12) {
      while (1) switch (_context12.prev = _context12.next) {
        case 0:
          page = this.screen.page, globalConfig = this.globalConfig;
          _logger.logger.log("the ".concat(elementPosition, " ").concat(elementKey, " should ").concat(negate ? 'not ' : '', "contain the text ").concat(expectedElementText));
          elementIdentifier = (0, _webElementHelper.getElementLocator)(page, elementKey, globalConfig);
          index = Number((_elementPosition$matc = elementPosition.match(/\d/g)) === null || _elementPosition$matc === void 0 ? void 0 : _elementPosition$matc.join('')) - 1;
          _context12.next = 6;
          return (0, _waitForBehavior.waitFor)( /*#__PURE__*/_asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee11() {
            var elementStable, elementText;
            return _regeneratorRuntime().wrap(function _callee11$(_context11) {
              while (1) switch (_context11.prev = _context11.next) {
                case 0:
                  _context11.next = 2;
                  return (0, _waitForBehavior.waitForSelector)(page, elementIdentifier);
                case 2:
                  elementStable = _context11.sent;
                  if (!elementStable) {
                    _context11.next = 14;
                    break;
                  }
                  _context11.next = 6;
                  return (0, _htmlBehavior.getElementTextAtIndex)(page, elementIdentifier, index);
                case 6:
                  elementText = _context11.sent;
                  if (!((elementText === null || elementText === void 0 ? void 0 : elementText.includes(expectedElementText)) === !negate)) {
                    _context11.next = 11;
                    break;
                  }
                  return _context11.abrupt("return", _waitForBehavior.waitForResult.PASS);
                case 11:
                  return _context11.abrupt("return", _waitForBehavior.waitForResult.FAIL);
                case 12:
                  _context11.next = 15;
                  break;
                case 14:
                  return _context11.abrupt("return", _waitForBehavior.waitForResult.ELEMENT_NOT_AVAILABLE);
                case 15:
                case "end":
                  return _context11.stop();
              }
            }, _callee11);
          })), globalConfig, {
            target: elementKey,
            failureMessage: "\uD83E\uDDE8 Expected ".concat(elementPosition, " ").concat(elementKey, " to ").concat(negate ? 'not ' : '', "contain the text ").concat(expectedElementText, " \uD83E\uDDE8")
          });
        case 6:
        case "end":
          return _context12.stop();
      }
    }, _callee12, this);
  }));
  return function (_x20, _x21, _x22, _x23, _x24) {
    return _ref11.apply(this, arguments);
  };
}());
(0, _cucumber.Then)(/^the "([^"]*)" "([^"]*)" attribute should( not)? contain the text "(.*)"$/, /*#__PURE__*/function () {
  var _ref13 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee14(elementKey, attribute, negate, expectedElementText) {
    var page, globalConfig, elementIdentifier;
    return _regeneratorRuntime().wrap(function _callee14$(_context14) {
      while (1) switch (_context14.prev = _context14.next) {
        case 0:
          page = this.screen.page, globalConfig = this.globalConfig;
          _logger.logger.log("the ".concat(elementKey, " ").concat(attribute, " attribute should ").concat(negate ? 'not ' : '', "contain the text ").concat(expectedElementText));
          elementIdentifier = (0, _webElementHelper.getElementLocator)(page, elementKey, globalConfig);
          _context14.next = 5;
          return (0, _waitForBehavior.waitFor)( /*#__PURE__*/_asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee13() {
            var elementStable, attributeText;
            return _regeneratorRuntime().wrap(function _callee13$(_context13) {
              while (1) switch (_context13.prev = _context13.next) {
                case 0:
                  _context13.next = 2;
                  return (0, _waitForBehavior.waitForSelector)(page, elementIdentifier);
                case 2:
                  elementStable = _context13.sent;
                  if (!elementStable) {
                    _context13.next = 14;
                    break;
                  }
                  _context13.next = 6;
                  return (0, _htmlBehavior.getAttributeText)(page, elementIdentifier, attribute);
                case 6:
                  attributeText = _context13.sent;
                  if (!((attributeText === null || attributeText === void 0 ? void 0 : attributeText.includes(expectedElementText)) === !negate)) {
                    _context13.next = 11;
                    break;
                  }
                  return _context13.abrupt("return", _waitForBehavior.waitForResult.PASS);
                case 11:
                  return _context13.abrupt("return", _waitForBehavior.waitForResult.FAIL);
                case 12:
                  _context13.next = 15;
                  break;
                case 14:
                  return _context13.abrupt("return", _waitForBehavior.waitForResult.ELEMENT_NOT_AVAILABLE);
                case 15:
                case "end":
                  return _context13.stop();
              }
            }, _callee13);
          })), globalConfig, {
            target: elementKey,
            failureMessage: "\uD83E\uDDE8 Expected ".concat(elementKey, " ").concat(attribute, " to ").concat(negate ? 'not ' : '', "contain the text ").concat(expectedElementText, " \uD83E\uDDE8")
          });
        case 5:
        case "end":
          return _context14.stop();
      }
    }, _callee14, this);
  }));
  return function (_x25, _x26, _x27, _x28, _x29) {
    return _ref13.apply(this, arguments);
  };
}());