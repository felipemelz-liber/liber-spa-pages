"use strict";

require("core-js/modules/es6.object.define-property");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.withPrefix = exports.withLabel = exports.defaultStory = exports["default"] = void 0;

var _react = _interopRequireDefault(require("react"));

var _SimpleDisplay = _interopRequireDefault(require("./SimpleDisplay"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var _default = {
  title: 'Components 1.0|DataDisplay/Simple Display',
  parameters: {
    jest: ['SimpleDisplay']
  }
};
exports["default"] = _default;

var defaultStory = function defaultStory() {
  return _react["default"].createElement(_SimpleDisplay["default"], null, "752.235,65");
};

exports.defaultStory = defaultStory;
defaultStory.story = {
  name: 'default'
};

var withLabel = function withLabel() {
  return _react["default"].createElement(_SimpleDisplay["default"], {
    label: "Valor a Receber"
  }, "752.235,65");
};

exports.withLabel = withLabel;

var withPrefix = function withPrefix() {
  return _react["default"].createElement(_SimpleDisplay["default"], {
    label: "Valor a Receber",
    prefix: "R$"
  }, "752.235,65");
};

exports.withPrefix = withPrefix;