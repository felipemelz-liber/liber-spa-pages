"use strict";

require("core-js/modules/es6.object.define-property");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.success = exports.secondary = exports.primary = exports["default"] = void 0;

var _react = _interopRequireDefault(require("react"));

var _Buttons = require("../Buttons");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var _default = {
  title: 'Components 1.0|Buttons/Styled Button'
};
exports["default"] = _default;

var primary = function primary() {
  return _react["default"].createElement(_Buttons.PrimaryButton, null, "Primary Button");
};

exports.primary = primary;

var secondary = function secondary() {
  return _react["default"].createElement(_Buttons.SecondaryButton, null, "Secondary Button");
};

exports.secondary = secondary;

var success = function success() {
  return _react["default"].createElement(_Buttons.SuccessButton, null, "Success Button");
};

exports.success = success;