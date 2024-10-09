"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.randomPassword = exports.randomInputTypes = exports.randomEmail = exports.getRandomData = void 0;
var _faker = _interopRequireDefault(require("faker"));
function _interopRequireDefault(e) { return e && e.__esModule ? e : { default: e }; }
const randomInputTypes = exports.randomInputTypes = ['email', 'password'];
const randomEmail = () => {
  return _faker.default.internet.exampleEmail();
};
exports.randomEmail = randomEmail;
const randomPassword = () => {
  return _faker.default.internet.password();
};
exports.randomPassword = randomPassword;
const getRandomData = randomInputType => {
  switch (randomInputType) {
    case 'email':
      return randomEmail();
    case 'password':
      return randomPassword();
    default:
      return '';
  }
};
exports.getRandomData = getRandomData;