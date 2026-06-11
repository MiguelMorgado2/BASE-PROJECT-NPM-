"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.randomPassword = exports.randomInputTypes = exports.randomEmail = exports.getRandomData = void 0;
var _faker = require("@faker-js/faker");
var randomInputTypes = exports.randomInputTypes = ['email', 'password'];
var randomEmail = exports.randomEmail = function randomEmail() {
  return _faker.faker.internet.exampleEmail();
};
var randomPassword = exports.randomPassword = function randomPassword() {
  return _faker.faker.internet.password();
};
var getRandomData = exports.getRandomData = function getRandomData(randomInputType) {
  switch (randomInputType) {
    case 'email':
      return randomEmail();
    case 'password':
      return randomPassword();
  }
};