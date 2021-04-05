"use strict";

require("core-js/modules/es6.object.define-property");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.withType = exports.defaultStory = exports["default"] = void 0;

var _react = _interopRequireDefault(require("react"));

var _Buttons = require("../Buttons");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var _default = {
  title: 'Components 1.0|Buttons/Action Button',
  parameters: {
    jest: ['ActionButton']
  }
};
exports["default"] = _default;

var defaultStory = function defaultStory() {
  return _react["default"].createElement(_Buttons.ActionButton, null, "Action Button");
};

exports.defaultStory = defaultStory;
defaultStory.story = {
  name: 'default'
};

var withType = function withType() {
  return _react["default"].createElement(_Buttons.ActionButton, {
    type: "primary"
  }, "Action Button");
};

exports.withType = withType;