"use strict";

require("core-js/modules/es6.object.define-property");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.defaultStory = exports["default"] = void 0;

var _react = _interopRequireDefault(require("react"));

var _addonActions = require("@storybook/addon-actions");

var _Buttons = require("../Buttons");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var _default = {
  title: 'Components 1.0|Buttons/Simple Button'
};
exports["default"] = _default;

var defaultStory = function defaultStory() {
  return _react["default"].createElement(_Buttons.Button, {
    onClick: (0, _addonActions.action)('clicked')
  }, "Default Button");
};

exports.defaultStory = defaultStory;
defaultStory.story = {
  name: 'default'
};