"use strict";

function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.uncheckElement = exports.selectElementValue = exports.scrollElementIntoView = exports.inputValueOnPage = exports.inputValueOnIframe = exports.inputElementValue = exports.getTitleWithinPage = exports.getTextWithinIframeElement = exports.getTableData = exports.getIframeElement = exports.getElements = exports.getElementWithinIframe = exports.getElementValue = exports.getElementTextWithinPage = exports.getElementTextAtIndex = exports.getElementText = exports.getElementOnPage = exports.getElementAtIndex = exports.getElement = exports.getAttributeText = exports.elementEnabled = exports.elementChecked = exports.clickElementAtIndex = exports.clickElement = exports.checkElement = void 0;
function _regeneratorRuntime() { "use strict"; /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/facebook/regenerator/blob/main/LICENSE */ _regeneratorRuntime = function _regeneratorRuntime() { return e; }; var t, e = {}, r = Object.prototype, n = r.hasOwnProperty, o = Object.defineProperty || function (t, e, r) { t[e] = r.value; }, i = "function" == typeof Symbol ? Symbol : {}, a = i.iterator || "@@iterator", c = i.asyncIterator || "@@asyncIterator", u = i.toStringTag || "@@toStringTag"; function define(t, e, r) { return Object.defineProperty(t, e, { value: r, enumerable: !0, configurable: !0, writable: !0 }), t[e]; } try { define({}, ""); } catch (t) { define = function define(t, e, r) { return t[e] = r; }; } function wrap(t, e, r, n) { var i = e && e.prototype instanceof Generator ? e : Generator, a = Object.create(i.prototype), c = new Context(n || []); return o(a, "_invoke", { value: makeInvokeMethod(t, r, c) }), a; } function tryCatch(t, e, r) { try { return { type: "normal", arg: t.call(e, r) }; } catch (t) { return { type: "throw", arg: t }; } } e.wrap = wrap; var h = "suspendedStart", l = "suspendedYield", f = "executing", s = "completed", y = {}; function Generator() {} function GeneratorFunction() {} function GeneratorFunctionPrototype() {} var p = {}; define(p, a, function () { return this; }); var d = Object.getPrototypeOf, v = d && d(d(values([]))); v && v !== r && n.call(v, a) && (p = v); var g = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(p); function defineIteratorMethods(t) { ["next", "throw", "return"].forEach(function (e) { define(t, e, function (t) { return this._invoke(e, t); }); }); } function AsyncIterator(t, e) { function invoke(r, o, i, a) { var c = tryCatch(t[r], t, o); if ("throw" !== c.type) { var u = c.arg, h = u.value; return h && "object" == _typeof(h) && n.call(h, "__await") ? e.resolve(h.__await).then(function (t) { invoke("next", t, i, a); }, function (t) { invoke("throw", t, i, a); }) : e.resolve(h).then(function (t) { u.value = t, i(u); }, function (t) { return invoke("throw", t, i, a); }); } a(c.arg); } var r; o(this, "_invoke", { value: function value(t, n) { function callInvokeWithMethodAndArg() { return new e(function (e, r) { invoke(t, n, e, r); }); } return r = r ? r.then(callInvokeWithMethodAndArg, callInvokeWithMethodAndArg) : callInvokeWithMethodAndArg(); } }); } function makeInvokeMethod(e, r, n) { var o = h; return function (i, a) { if (o === f) throw Error("Generator is already running"); if (o === s) { if ("throw" === i) throw a; return { value: t, done: !0 }; } for (n.method = i, n.arg = a;;) { var c = n.delegate; if (c) { var u = maybeInvokeDelegate(c, n); if (u) { if (u === y) continue; return u; } } if ("next" === n.method) n.sent = n._sent = n.arg;else if ("throw" === n.method) { if (o === h) throw o = s, n.arg; n.dispatchException(n.arg); } else "return" === n.method && n.abrupt("return", n.arg); o = f; var p = tryCatch(e, r, n); if ("normal" === p.type) { if (o = n.done ? s : l, p.arg === y) continue; return { value: p.arg, done: n.done }; } "throw" === p.type && (o = s, n.method = "throw", n.arg = p.arg); } }; } function maybeInvokeDelegate(e, r) { var n = r.method, o = e.iterator[n]; if (o === t) return r.delegate = null, "throw" === n && e.iterator["return"] && (r.method = "return", r.arg = t, maybeInvokeDelegate(e, r), "throw" === r.method) || "return" !== n && (r.method = "throw", r.arg = new TypeError("The iterator does not provide a '" + n + "' method")), y; var i = tryCatch(o, e.iterator, r.arg); if ("throw" === i.type) return r.method = "throw", r.arg = i.arg, r.delegate = null, y; var a = i.arg; return a ? a.done ? (r[e.resultName] = a.value, r.next = e.nextLoc, "return" !== r.method && (r.method = "next", r.arg = t), r.delegate = null, y) : a : (r.method = "throw", r.arg = new TypeError("iterator result is not an object"), r.delegate = null, y); } function pushTryEntry(t) { var e = { tryLoc: t[0] }; 1 in t && (e.catchLoc = t[1]), 2 in t && (e.finallyLoc = t[2], e.afterLoc = t[3]), this.tryEntries.push(e); } function resetTryEntry(t) { var e = t.completion || {}; e.type = "normal", delete e.arg, t.completion = e; } function Context(t) { this.tryEntries = [{ tryLoc: "root" }], t.forEach(pushTryEntry, this), this.reset(!0); } function values(e) { if (e || "" === e) { var r = e[a]; if (r) return r.call(e); if ("function" == typeof e.next) return e; if (!isNaN(e.length)) { var o = -1, i = function next() { for (; ++o < e.length;) if (n.call(e, o)) return next.value = e[o], next.done = !1, next; return next.value = t, next.done = !0, next; }; return i.next = i; } } throw new TypeError(_typeof(e) + " is not iterable"); } return GeneratorFunction.prototype = GeneratorFunctionPrototype, o(g, "constructor", { value: GeneratorFunctionPrototype, configurable: !0 }), o(GeneratorFunctionPrototype, "constructor", { value: GeneratorFunction, configurable: !0 }), GeneratorFunction.displayName = define(GeneratorFunctionPrototype, u, "GeneratorFunction"), e.isGeneratorFunction = function (t) { var e = "function" == typeof t && t.constructor; return !!e && (e === GeneratorFunction || "GeneratorFunction" === (e.displayName || e.name)); }, e.mark = function (t) { return Object.setPrototypeOf ? Object.setPrototypeOf(t, GeneratorFunctionPrototype) : (t.__proto__ = GeneratorFunctionPrototype, define(t, u, "GeneratorFunction")), t.prototype = Object.create(g), t; }, e.awrap = function (t) { return { __await: t }; }, defineIteratorMethods(AsyncIterator.prototype), define(AsyncIterator.prototype, c, function () { return this; }), e.AsyncIterator = AsyncIterator, e.async = function (t, r, n, o, i) { void 0 === i && (i = Promise); var a = new AsyncIterator(wrap(t, r, n, o), i); return e.isGeneratorFunction(r) ? a : a.next().then(function (t) { return t.done ? t.value : a.next(); }); }, defineIteratorMethods(g), define(g, u, "Generator"), define(g, a, function () { return this; }), define(g, "toString", function () { return "[object Generator]"; }), e.keys = function (t) { var e = Object(t), r = []; for (var n in e) r.push(n); return r.reverse(), function next() { for (; r.length;) { var t = r.pop(); if (t in e) return next.value = t, next.done = !1, next; } return next.done = !0, next; }; }, e.values = values, Context.prototype = { constructor: Context, reset: function reset(e) { if (this.prev = 0, this.next = 0, this.sent = this._sent = t, this.done = !1, this.delegate = null, this.method = "next", this.arg = t, this.tryEntries.forEach(resetTryEntry), !e) for (var r in this) "t" === r.charAt(0) && n.call(this, r) && !isNaN(+r.slice(1)) && (this[r] = t); }, stop: function stop() { this.done = !0; var t = this.tryEntries[0].completion; if ("throw" === t.type) throw t.arg; return this.rval; }, dispatchException: function dispatchException(e) { if (this.done) throw e; var r = this; function handle(n, o) { return a.type = "throw", a.arg = e, r.next = n, o && (r.method = "next", r.arg = t), !!o; } for (var o = this.tryEntries.length - 1; o >= 0; --o) { var i = this.tryEntries[o], a = i.completion; if ("root" === i.tryLoc) return handle("end"); if (i.tryLoc <= this.prev) { var c = n.call(i, "catchLoc"), u = n.call(i, "finallyLoc"); if (c && u) { if (this.prev < i.catchLoc) return handle(i.catchLoc, !0); if (this.prev < i.finallyLoc) return handle(i.finallyLoc); } else if (c) { if (this.prev < i.catchLoc) return handle(i.catchLoc, !0); } else { if (!u) throw Error("try statement without catch or finally"); if (this.prev < i.finallyLoc) return handle(i.finallyLoc); } } } }, abrupt: function abrupt(t, e) { for (var r = this.tryEntries.length - 1; r >= 0; --r) { var o = this.tryEntries[r]; if (o.tryLoc <= this.prev && n.call(o, "finallyLoc") && this.prev < o.finallyLoc) { var i = o; break; } } i && ("break" === t || "continue" === t) && i.tryLoc <= e && e <= i.finallyLoc && (i = null); var a = i ? i.completion : {}; return a.type = t, a.arg = e, i ? (this.method = "next", this.next = i.finallyLoc, y) : this.complete(a); }, complete: function complete(t, e) { if ("throw" === t.type) throw t.arg; return "break" === t.type || "continue" === t.type ? this.next = t.arg : "return" === t.type ? (this.rval = this.arg = t.arg, this.method = "return", this.next = "end") : "normal" === t.type && e && (this.next = e), y; }, finish: function finish(t) { for (var e = this.tryEntries.length - 1; e >= 0; --e) { var r = this.tryEntries[e]; if (r.finallyLoc === t) return this.complete(r.completion, r.afterLoc), resetTryEntry(r), y; } }, "catch": function _catch(t) { for (var e = this.tryEntries.length - 1; e >= 0; --e) { var r = this.tryEntries[e]; if (r.tryLoc === t) { var n = r.completion; if ("throw" === n.type) { var o = n.arg; resetTryEntry(r); } return o; } } throw Error("illegal catch attempt"); }, delegateYield: function delegateYield(e, r, n) { return this.delegate = { iterator: values(e), resultName: r, nextLoc: n }, "next" === this.method && (this.arg = t), y; } }, e; }
function asyncGeneratorStep(n, t, e, r, o, a, c) { try { var i = n[a](c), u = i.value; } catch (n) { return void e(n); } i.done ? t(u) : Promise.resolve(u).then(r, o); }
function _asyncToGenerator(n) { return function () { var t = this, e = arguments; return new Promise(function (r, o) { var a = n.apply(t, e); function _next(n) { asyncGeneratorStep(a, r, o, _next, _throw, "next", n); } function _throw(n) { asyncGeneratorStep(a, r, o, _next, _throw, "throw", n); } _next(void 0); }); }; }
var clickElement = exports.clickElement = /*#__PURE__*/function () {
  var _ref = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee(page, elementIdentifier) {
    return _regeneratorRuntime().wrap(function _callee$(_context) {
      while (1) switch (_context.prev = _context.next) {
        case 0:
          _context.next = 2;
          return page.click(elementIdentifier);
        case 2:
        case "end":
          return _context.stop();
      }
    }, _callee);
  }));
  return function clickElement(_x, _x2) {
    return _ref.apply(this, arguments);
  };
}();
var clickElementAtIndex = exports.clickElementAtIndex = /*#__PURE__*/function () {
  var _ref2 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee2(page, elementIdentifier, elementPosition) {
    var element;
    return _regeneratorRuntime().wrap(function _callee2$(_context2) {
      while (1) switch (_context2.prev = _context2.next) {
        case 0:
          _context2.next = 2;
          return page.$("".concat(elementIdentifier, ">>nth=").concat(elementPosition));
        case 2:
          element = _context2.sent;
          _context2.next = 5;
          return element === null || element === void 0 ? void 0 : element.click();
        case 5:
        case "end":
          return _context2.stop();
      }
    }, _callee2);
  }));
  return function clickElementAtIndex(_x3, _x4, _x5) {
    return _ref2.apply(this, arguments);
  };
}();
var inputElementValue = exports.inputElementValue = /*#__PURE__*/function () {
  var _ref3 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee3(page, elementIdentifier, input) {
    return _regeneratorRuntime().wrap(function _callee3$(_context3) {
      while (1) switch (_context3.prev = _context3.next) {
        case 0:
          _context3.next = 2;
          return page.focus(elementIdentifier);
        case 2:
          _context3.next = 4;
          return page.fill(elementIdentifier, input);
        case 4:
        case "end":
          return _context3.stop();
      }
    }, _callee3);
  }));
  return function inputElementValue(_x6, _x7, _x8) {
    return _ref3.apply(this, arguments);
  };
}();
var selectElementValue = exports.selectElementValue = /*#__PURE__*/function () {
  var _ref4 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee4(page, elementIdentifier, option) {
    return _regeneratorRuntime().wrap(function _callee4$(_context4) {
      while (1) switch (_context4.prev = _context4.next) {
        case 0:
          _context4.next = 2;
          return page.focus(elementIdentifier);
        case 2:
          _context4.next = 4;
          return page.selectOption(elementIdentifier, option);
        case 4:
        case "end":
          return _context4.stop();
      }
    }, _callee4);
  }));
  return function selectElementValue(_x9, _x10, _x11) {
    return _ref4.apply(this, arguments);
  };
}();
var checkElement = exports.checkElement = /*#__PURE__*/function () {
  var _ref5 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee5(page, elementIdentifier) {
    return _regeneratorRuntime().wrap(function _callee5$(_context5) {
      while (1) switch (_context5.prev = _context5.next) {
        case 0:
          _context5.next = 2;
          return page.check(elementIdentifier);
        case 2:
        case "end":
          return _context5.stop();
      }
    }, _callee5);
  }));
  return function checkElement(_x12, _x13) {
    return _ref5.apply(this, arguments);
  };
}();
var uncheckElement = exports.uncheckElement = /*#__PURE__*/function () {
  var _ref6 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee6(page, elementIdentifier) {
    return _regeneratorRuntime().wrap(function _callee6$(_context6) {
      while (1) switch (_context6.prev = _context6.next) {
        case 0:
          _context6.next = 2;
          return page.uncheck(elementIdentifier);
        case 2:
        case "end":
          return _context6.stop();
      }
    }, _callee6);
  }));
  return function uncheckElement(_x14, _x15) {
    return _ref6.apply(this, arguments);
  };
}();
var inputValueOnIframe = exports.inputValueOnIframe = /*#__PURE__*/function () {
  var _ref7 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee7(elementIframe, elementIdentifier, inputValue) {
    return _regeneratorRuntime().wrap(function _callee7$(_context7) {
      while (1) switch (_context7.prev = _context7.next) {
        case 0:
          _context7.next = 2;
          return elementIframe.fill(elementIdentifier, inputValue);
        case 2:
        case "end":
          return _context7.stop();
      }
    }, _callee7);
  }));
  return function inputValueOnIframe(_x16, _x17, _x18) {
    return _ref7.apply(this, arguments);
  };
}();
var inputValueOnPage = exports.inputValueOnPage = /*#__PURE__*/function () {
  var _ref8 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee8(pages, pageIndex, elementIdentifier, inputValue) {
    return _regeneratorRuntime().wrap(function _callee8$(_context8) {
      while (1) switch (_context8.prev = _context8.next) {
        case 0:
          _context8.next = 2;
          return pages[pageIndex].focus(elementIdentifier);
        case 2:
          _context8.next = 4;
          return pages[pageIndex].fill(elementIdentifier, inputValue);
        case 4:
        case "end":
          return _context8.stop();
      }
    }, _callee8);
  }));
  return function inputValueOnPage(_x19, _x20, _x21, _x22) {
    return _ref8.apply(this, arguments);
  };
}();
var scrollElementIntoView = exports.scrollElementIntoView = /*#__PURE__*/function () {
  var _ref9 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee9(page, elementIdentifier) {
    var element;
    return _regeneratorRuntime().wrap(function _callee9$(_context9) {
      while (1) switch (_context9.prev = _context9.next) {
        case 0:
          element = page.locator(elementIdentifier);
          _context9.next = 3;
          return element.scrollIntoViewIfNeeded();
        case 3:
        case "end":
          return _context9.stop();
      }
    }, _callee9);
  }));
  return function scrollElementIntoView(_x23, _x24) {
    return _ref9.apply(this, arguments);
  };
}();
var getElement = exports.getElement = /*#__PURE__*/function () {
  var _ref10 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee10(page, elementIdentifier) {
    var element;
    return _regeneratorRuntime().wrap(function _callee10$(_context10) {
      while (1) switch (_context10.prev = _context10.next) {
        case 0:
          _context10.next = 2;
          return page.$(elementIdentifier);
        case 2:
          element = _context10.sent;
          return _context10.abrupt("return", element);
        case 4:
        case "end":
          return _context10.stop();
      }
    }, _callee10);
  }));
  return function getElement(_x25, _x26) {
    return _ref10.apply(this, arguments);
  };
}();
var getElements = exports.getElements = /*#__PURE__*/function () {
  var _ref11 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee11(page, elementIdentifier) {
    var elements;
    return _regeneratorRuntime().wrap(function _callee11$(_context11) {
      while (1) switch (_context11.prev = _context11.next) {
        case 0:
          _context11.next = 2;
          return page.$$(elementIdentifier);
        case 2:
          elements = _context11.sent;
          return _context11.abrupt("return", elements);
        case 4:
        case "end":
          return _context11.stop();
      }
    }, _callee11);
  }));
  return function getElements(_x27, _x28) {
    return _ref11.apply(this, arguments);
  };
}();
var getElementAtIndex = exports.getElementAtIndex = /*#__PURE__*/function () {
  var _ref12 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee12(page, elementIdentifier, index) {
    var elementAtIndex;
    return _regeneratorRuntime().wrap(function _callee12$(_context12) {
      while (1) switch (_context12.prev = _context12.next) {
        case 0:
          _context12.next = 2;
          return page.$("".concat(elementIdentifier, ">>nth=").concat(index));
        case 2:
          elementAtIndex = _context12.sent;
          return _context12.abrupt("return", elementAtIndex);
        case 4:
        case "end":
          return _context12.stop();
      }
    }, _callee12);
  }));
  return function getElementAtIndex(_x29, _x30, _x31) {
    return _ref12.apply(this, arguments);
  };
}();
var getElementValue = exports.getElementValue = /*#__PURE__*/function () {
  var _ref13 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee13(page, elementIdentifier) {
    var value;
    return _regeneratorRuntime().wrap(function _callee13$(_context13) {
      while (1) switch (_context13.prev = _context13.next) {
        case 0:
          _context13.next = 2;
          return page.$eval(elementIdentifier, function (el) {
            return el.value;
          });
        case 2:
          value = _context13.sent;
          return _context13.abrupt("return", value);
        case 4:
        case "end":
          return _context13.stop();
      }
    }, _callee13);
  }));
  return function getElementValue(_x32, _x33) {
    return _ref13.apply(this, arguments);
  };
}();
var getIframeElement = exports.getIframeElement = /*#__PURE__*/function () {
  var _ref14 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee14(page, iframeIdentifier) {
    var elementHandle, elementIframe;
    return _regeneratorRuntime().wrap(function _callee14$(_context14) {
      while (1) switch (_context14.prev = _context14.next) {
        case 0:
          _context14.next = 2;
          return page.$(iframeIdentifier);
        case 2:
          elementHandle = _context14.sent;
          _context14.next = 5;
          return elementHandle === null || elementHandle === void 0 ? void 0 : elementHandle.contentFrame();
        case 5:
          elementIframe = _context14.sent;
          return _context14.abrupt("return", elementIframe);
        case 7:
        case "end":
          return _context14.stop();
      }
    }, _callee14);
  }));
  return function getIframeElement(_x34, _x35) {
    return _ref14.apply(this, arguments);
  };
}();
var getElementWithinIframe = exports.getElementWithinIframe = /*#__PURE__*/function () {
  var _ref15 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee15(elementIframe, elementIdentifier) {
    var visibleOnIframeElement;
    return _regeneratorRuntime().wrap(function _callee15$(_context15) {
      while (1) switch (_context15.prev = _context15.next) {
        case 0:
          _context15.next = 2;
          return elementIframe === null || elementIframe === void 0 ? void 0 : elementIframe.$(elementIdentifier);
        case 2:
          visibleOnIframeElement = _context15.sent;
          return _context15.abrupt("return", visibleOnIframeElement);
        case 4:
        case "end":
          return _context15.stop();
      }
    }, _callee15);
  }));
  return function getElementWithinIframe(_x36, _x37) {
    return _ref15.apply(this, arguments);
  };
}();
var getTextWithinIframeElement = exports.getTextWithinIframeElement = /*#__PURE__*/function () {
  var _ref16 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee16(elementIframe, elementIdentifier) {
    var textOnIframeElement;
    return _regeneratorRuntime().wrap(function _callee16$(_context16) {
      while (1) switch (_context16.prev = _context16.next) {
        case 0:
          _context16.next = 2;
          return elementIframe === null || elementIframe === void 0 ? void 0 : elementIframe.textContent(elementIdentifier);
        case 2:
          textOnIframeElement = _context16.sent;
          return _context16.abrupt("return", textOnIframeElement);
        case 4:
        case "end":
          return _context16.stop();
      }
    }, _callee16);
  }));
  return function getTextWithinIframeElement(_x38, _x39) {
    return _ref16.apply(this, arguments);
  };
}();
var getTitleWithinPage = exports.getTitleWithinPage = /*#__PURE__*/function () {
  var _ref17 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee17(page, pages, pageIndex) {
    var titleWithinPage;
    return _regeneratorRuntime().wrap(function _callee17$(_context17) {
      while (1) switch (_context17.prev = _context17.next) {
        case 0:
          _context17.next = 2;
          return pages[pageIndex].title();
        case 2:
          titleWithinPage = _context17.sent;
          return _context17.abrupt("return", titleWithinPage);
        case 4:
        case "end":
          return _context17.stop();
      }
    }, _callee17);
  }));
  return function getTitleWithinPage(_x40, _x41, _x42) {
    return _ref17.apply(this, arguments);
  };
}();
var getElementOnPage = exports.getElementOnPage = /*#__PURE__*/function () {
  var _ref18 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee18(page, elementIdentifier, pages, pageIndex) {
    var elementOnPage;
    return _regeneratorRuntime().wrap(function _callee18$(_context18) {
      while (1) switch (_context18.prev = _context18.next) {
        case 0:
          _context18.next = 2;
          return pages[pageIndex].$(elementIdentifier);
        case 2:
          elementOnPage = _context18.sent;
          return _context18.abrupt("return", elementOnPage);
        case 4:
        case "end":
          return _context18.stop();
      }
    }, _callee18);
  }));
  return function getElementOnPage(_x43, _x44, _x45, _x46) {
    return _ref18.apply(this, arguments);
  };
}();
var getElementTextWithinPage = exports.getElementTextWithinPage = /*#__PURE__*/function () {
  var _ref19 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee19(page, elementIdentifier, pages, pageIndex) {
    var textWithinPage;
    return _regeneratorRuntime().wrap(function _callee19$(_context19) {
      while (1) switch (_context19.prev = _context19.next) {
        case 0:
          _context19.next = 2;
          return pages[pageIndex].textContent(elementIdentifier);
        case 2:
          textWithinPage = _context19.sent;
          return _context19.abrupt("return", textWithinPage);
        case 4:
        case "end":
          return _context19.stop();
      }
    }, _callee19);
  }));
  return function getElementTextWithinPage(_x47, _x48, _x49, _x50) {
    return _ref19.apply(this, arguments);
  };
}();
var getAttributeText = exports.getAttributeText = /*#__PURE__*/function () {
  var _ref20 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee20(page, elementIdentifier, attribute) {
    var attributeText;
    return _regeneratorRuntime().wrap(function _callee20$(_context20) {
      while (1) switch (_context20.prev = _context20.next) {
        case 0:
          attributeText = page.locator(elementIdentifier).getAttribute(attribute);
          return _context20.abrupt("return", attributeText);
        case 2:
        case "end":
          return _context20.stop();
      }
    }, _callee20);
  }));
  return function getAttributeText(_x51, _x52, _x53) {
    return _ref20.apply(this, arguments);
  };
}();
var getElementText = exports.getElementText = /*#__PURE__*/function () {
  var _ref21 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee21(page, elementIdentifier) {
    var text;
    return _regeneratorRuntime().wrap(function _callee21$(_context21) {
      while (1) switch (_context21.prev = _context21.next) {
        case 0:
          _context21.next = 2;
          return page.textContent(elementIdentifier);
        case 2:
          text = _context21.sent;
          return _context21.abrupt("return", text);
        case 4:
        case "end":
          return _context21.stop();
      }
    }, _callee21);
  }));
  return function getElementText(_x54, _x55) {
    return _ref21.apply(this, arguments);
  };
}();
var getElementTextAtIndex = exports.getElementTextAtIndex = /*#__PURE__*/function () {
  var _ref22 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee22(page, elementIdentifier, index) {
    var textAtIndex;
    return _regeneratorRuntime().wrap(function _callee22$(_context22) {
      while (1) switch (_context22.prev = _context22.next) {
        case 0:
          _context22.next = 2;
          return page.textContent("".concat(elementIdentifier, ">>nth=").concat(index));
        case 2:
          textAtIndex = _context22.sent;
          return _context22.abrupt("return", textAtIndex);
        case 4:
        case "end":
          return _context22.stop();
      }
    }, _callee22);
  }));
  return function getElementTextAtIndex(_x56, _x57, _x58) {
    return _ref22.apply(this, arguments);
  };
}();
var getTableData = exports.getTableData = /*#__PURE__*/function () {
  var _ref23 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee23(page, elementIdentifier) {
    var table;
    return _regeneratorRuntime().wrap(function _callee23$(_context23) {
      while (1) switch (_context23.prev = _context23.next) {
        case 0:
          _context23.next = 2;
          return page.$$eval(elementIdentifier + " tbody tr", function (rows) {
            return rows.map(function (row) {
              var cells = row.querySelectorAll('td');
              return Array.from(cells).map(function (cell) {
                return cell.textContent;
              });
            });
          });
        case 2:
          table = _context23.sent;
          return _context23.abrupt("return", JSON.stringify(table));
        case 4:
        case "end":
          return _context23.stop();
      }
    }, _callee23);
  }));
  return function getTableData(_x59, _x60) {
    return _ref23.apply(this, arguments);
  };
}();
var elementEnabled = exports.elementEnabled = /*#__PURE__*/function () {
  var _ref24 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee24(page, elementIdentifier) {
    var enabled;
    return _regeneratorRuntime().wrap(function _callee24$(_context24) {
      while (1) switch (_context24.prev = _context24.next) {
        case 0:
          _context24.next = 2;
          return page.isEnabled(elementIdentifier);
        case 2:
          enabled = _context24.sent;
          return _context24.abrupt("return", enabled);
        case 4:
        case "end":
          return _context24.stop();
      }
    }, _callee24);
  }));
  return function elementEnabled(_x61, _x62) {
    return _ref24.apply(this, arguments);
  };
}();
var elementChecked = exports.elementChecked = /*#__PURE__*/function () {
  var _ref25 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee25(page, elementIdentifier) {
    var checked;
    return _regeneratorRuntime().wrap(function _callee25$(_context25) {
      while (1) switch (_context25.prev = _context25.next) {
        case 0:
          _context25.next = 2;
          return page.isChecked(elementIdentifier);
        case 2:
          checked = _context25.sent;
          return _context25.abrupt("return", checked);
        case 4:
        case "end":
          return _context25.stop();
      }
    }, _callee25);
  }));
  return function elementChecked(_x63, _x64) {
    return _ref25.apply(this, arguments);
  };
}();