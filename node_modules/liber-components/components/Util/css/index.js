"use strict";

require("core-js/modules/es6.object.define-property");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.disableOnTest = exports.generateMinMax = void 0;

var _styledComponents = require("styled-components");

var generateMinMax = function generateMinMax(side, size) {
  return (0, _styledComponents.css)(["min-", ":", ";max-", ":", ";"], side, size, side, size);
};

exports.generateMinMax = generateMinMax;

var disableOnTest = function disableOnTest(args) {
  return process.env.NODE_ENV === 'test' || process.env.RAILS_ENV === 'test' ? null : (0, _styledComponents.css)(args);
};

exports.disableOnTest = disableOnTest;