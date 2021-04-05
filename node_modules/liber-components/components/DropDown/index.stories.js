"use strict";

require("core-js/modules/es6.object.define-property");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.defaultStory = exports["default"] = void 0;

var _react = _interopRequireDefault(require("react"));

var _DropDown = _interopRequireDefault(require("./components/DropDown"));

var _styles = require("./components/styles");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var _default = {
  title: 'Components 1.0|DropDown',
  parameters: {
    jest: ['DropDown']
  }
};
exports["default"] = _default;

var defaultStory = function defaultStory() {
  return _react["default"].createElement(_DropDown["default"], null, _react["default"].createElement(_styles.Option, {
    value: "last-6-months"
  }, "\xDAltimos 6 meses"), _react["default"].createElement(_styles.Option, {
    value: "last-12-months"
  }, "\xDAltimos 12 meses"), _react["default"].createElement(_styles.Option, {
    value: "since-beginning"
  }, "Desde o In\xEDcio"));
};

exports.defaultStory = defaultStory;
defaultStory.story = {
  name: 'default'
};