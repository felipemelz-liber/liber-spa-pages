"use strict";

require("core-js/modules/es6.object.define-property");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.success = exports.secondary = exports.primary = exports.defaultStory = exports["default"] = void 0;

var _react = _interopRequireDefault(require("react"));

var _Buttons = require("../Buttons");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var _default = {
  title: 'Components 1.0|Buttons/Link Button'
};
exports["default"] = _default;

var defaultStory = function defaultStory() {
  return _react["default"].createElement(_Buttons.Link, {
    href: "default"
  }, "Default Link");
};

exports.defaultStory = defaultStory;
defaultStory.story = {
  name: 'default'
};

var primary = function primary() {
  return _react["default"].createElement(_Buttons.PrimaryLink, null, "Primary Link");
};

exports.primary = primary;

var secondary = function secondary() {
  return _react["default"].createElement(_Buttons.SecondaryLink, null, "Secondary Link");
};

exports.secondary = secondary;

var success = function success() {
  return _react["default"].createElement(_Buttons.SuccessLink, null, "Success Link");
};

exports.success = success;