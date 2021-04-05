"use strict";

require("core-js/modules/es6.object.define-property");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.withFloatValue = exports.withMinAndMaxValue = exports.withMaxValue = exports.withMinValue = exports.defaultStory = exports["default"] = void 0;

var _react = _interopRequireDefault(require("react"));

var _styledComponents = _interopRequireDefault(require("styled-components"));

var _Inputs = require("../Inputs");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var Center = _styledComponents["default"].div.withConfig({
  displayName: "numberstories__Center",
  componentId: "vxu70a-0"
})(["width:100%;height:100vh;display:flex;justify-content:center;align-items:center;background-color:#fafdff;padding:64px;box-sizing:border-box;"]);

var _default = {
  title: 'Components 2.0|Input/NumberField',
  parameters: {
    jest: ['NumberField']
  }
};
exports["default"] = _default;

var defaultStory = function defaultStory() {
  return _react["default"].createElement(Center, null, _react["default"].createElement(_Inputs.NumberField, {
    label: "Label do input"
  }));
};

exports.defaultStory = defaultStory;
defaultStory.story = {
  name: 'default'
};

var withMinValue = function withMinValue() {
  return _react["default"].createElement(Center, null, _react["default"].createElement(_Inputs.NumberField, {
    label: "Label do input",
    min: 0
  }));
};

exports.withMinValue = withMinValue;
withMinValue.story = {
  name: 'with min value'
};

var withMaxValue = function withMaxValue() {
  return _react["default"].createElement(Center, null, _react["default"].createElement(_Inputs.NumberField, {
    label: "Label do input",
    max: 10
  }));
};

exports.withMaxValue = withMaxValue;
withMaxValue.story = {
  name: 'with max value'
};

var withMinAndMaxValue = function withMinAndMaxValue() {
  return _react["default"].createElement(Center, null, _react["default"].createElement(_Inputs.NumberField, {
    label: "Label do input",
    min: 2,
    max: 10
  }));
};

exports.withMinAndMaxValue = withMinAndMaxValue;
withMinAndMaxValue.story = {
  name: 'with min and max value'
};

var withFloatValue = function withFloatValue() {
  return _react["default"].createElement(Center, null, _react["default"].createElement(_Inputs.NumberField, {
    label: "Label do input",
    step: 0.01,
    precision: 2
  }));
};

exports.withFloatValue = withFloatValue;
withFloatValue.story = {
  name: 'with float value'
};