"use strict";

require("core-js/modules/es6.object.define-property");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.defaultStory = exports["default"] = void 0;

var _react = _interopRequireDefault(require("react"));

var _Greeter = _interopRequireDefault(require("./Greeter"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var _default = {
  title: 'Components 1.0|Greeter',
  parameters: {
    jest: ['Greeter']
  }
};
exports["default"] = _default;

var defaultStory = function defaultStory() {
  return _react["default"].createElement(_Greeter["default"], null);
};

exports.defaultStory = defaultStory;
defaultStory.story = {
  name: 'default'
};