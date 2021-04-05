"use strict";

require("core-js/modules/es6.object.define-property");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.withSelectedRange = exports.withMax = exports.withMin = exports.withLabel = exports.defaultStory = exports["default"] = void 0;

var _react = _interopRequireDefault(require("react"));

var _Inputs = require("../Inputs");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var _default = {
  title: 'Components 1.0|Input/RangeField',
  parameters: {
    jest: ['RangeField']
  }
};
exports["default"] = _default;

var defaultStory = function defaultStory() {
  return _react["default"].createElement(_Inputs.RangeField, null);
};

exports.defaultStory = defaultStory;
defaultStory.story = {
  name: 'default'
};

var withLabel = function withLabel() {
  return _react["default"].createElement(_Inputs.RangeField, {
    label: "Selecione o valor"
  });
};

exports.withLabel = withLabel;

var withMin = function withMin() {
  return _react["default"].createElement(_Inputs.RangeField, {
    min: 20
  });
};

exports.withMin = withMin;

var withMax = function withMax() {
  return _react["default"].createElement(_Inputs.RangeField, {
    max: 50
  });
};

exports.withMax = withMax;

var withSelectedRange = function withSelectedRange() {
  return _react["default"].createElement(_Inputs.RangeField, {
    from: 15,
    to: 25
  });
};

exports.withSelectedRange = withSelectedRange;