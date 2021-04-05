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
  title: 'Components 1.0|Input/Checkbox',
  parameters: {
    jest: ['Checkbox']
  }
};
exports["default"] = _default;

var defaultStory = function defaultStory() {
  return _react["default"].createElement(_Inputs.Checkbox, null);
};

exports.defaultStory = defaultStory;
defaultStory.story = {
  name: 'default'
};

var checked = function checked() {
  return _react["default"].createElement(_Inputs.Checkbox, {
    checked: true
  });
};

exports.checked = checked;