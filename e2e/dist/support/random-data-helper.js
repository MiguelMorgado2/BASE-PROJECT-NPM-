"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.randomPassword = exports.randomInputTypes = exports.randomEmail = exports.getRandomData = void 0;
var _faker = require("@faker-js/faker");
const randomInputTypes = exports.randomInputTypes = ['email', 'password'];
const randomEmail = () => {
  return _faker.faker.internet.exampleEmail();
};
exports.randomEmail = randomEmail;
const randomPassword = () => {
  return _faker.faker.internet.password();
};
exports.randomPassword = randomPassword;
const getRandomData = randomInputType => {
  switch (randomInputType) {
    case 'email':
      return randomEmail();
    case 'password':
      return randomPassword();
  }
};
exports.getRandomData = getRandomData;