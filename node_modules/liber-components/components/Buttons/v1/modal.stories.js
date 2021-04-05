"use strict";

require("core-js/modules/es6.object.define-property");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.danger = exports.success = exports.primary = exports.defaultStory = exports["default"] = void 0;

var _react = _interopRequireDefault(require("react"));

var _Buttons = require("../Buttons");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var _default = {
  title: 'Components 1.0|Buttons/Modal Button'
};
exports["default"] = _default;

var defaultStory = function defaultStory() {
  return _react["default"].createElement(_Buttons.ModalButton, null, "Default Modal Button");
};

exports.defaultStory = defaultStory;
defaultStory.story = {
  name: 'default'
};

var primary = function primary() {
  return _react["default"].createElement(_Buttons.ModalPrimaryButton, null, "Modal Primary Button");
};

exports.primary = primary;

var success = function success() {
  return _react["default"].createElement(_Buttons.ModalSuccessButton, null, "Modal Success Button");
};

exports.success = success;

var danger = function danger() {
  return _react["default"].createElement(_Buttons.ModalDangerButton, null, "Modal Danger Button");
};

exports.danger = danger;