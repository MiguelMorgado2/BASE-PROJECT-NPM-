"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.randomPassword = exports.randomInputTypes = exports.randomEmail = exports.getRandomData = void 0;
var _faker = _interopRequireDefault(require("faker"));
function _interopRequireDefault(e) { return e && e.__esModule ? e : { "default": e }; }
var randomInputTypes = exports.randomInputTypes = ['email', 'password'];
var randomEmail = exports.randomEmail = function randomEmail() {
  return _faker["default"].internet.exampleEmail();
};
var randomPassword = exports.randomPassword = function randomPassword() {
  return _faker["default"].internet.password();
};
var getRandomData = exports.getRandomData = function getRandomData(randomInputType) {
  switch (randomInputType) {
    case 'email':
      return randomEmail();
    case 'password':
      return randomPassword();
    default:
      return '';
  }
};