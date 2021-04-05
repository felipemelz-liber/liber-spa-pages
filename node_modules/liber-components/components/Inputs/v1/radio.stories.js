"use strict";

require("core-js/modules/es6.object.define-property");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.checked = exports.defaultStory = exports["default"] = void 0;

var _react = _interopRequireDefault(require("react"));

var _Inputs = require("../Inputs");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var _default = {
  title: 'Components 1.0|Input/RadioButton',
  parameters: {
    jest: ['RadioButton']
  }
};
exports["default"] = _default;

var defaultStory = function defaultStory() {
  return _react["default"].createElement(_Inputs.RadioButton, null, "Arya Stark");
};

exports.defaultStory = defaultStory;
defaultStory.story = {
  name: 'default'
};

var checked = function checked() {
  return _react["default"].createElement(_Inputs.RadioButton, {
    checked: true
  }, "Jon Snow");
};

exports.checked = checked;