"use strict";

require("core-js/modules/es6.object.define-property");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.withHintText = exports.withHelper = exports.withErrorMessage = exports.withPrefix = exports.withValue = exports.withOpenLabel = exports.withLabel = exports.disabled = exports.defaultStory = exports["default"] = void 0;

var _react = _interopRequireDefault(require("react"));

var _Inputs = require("../Inputs");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var _default = {
  title: 'Components 1.0|Input/TextField',
  parameters: {
    jest: ['TextField']
  }
};
exports["default"] = _default;

var defaultStory = function defaultStory() {
  return _react["default"].createElement(_Inputs.TextField, null);
};

exports.defaultStory = defaultStory;
defaultStory.story = {
  name: 'default'
};

var disabled = function disabled() {
  return _react["default"].createElement(_Inputs.TextField, {
    disabled: true
  });
};

exports.disabled = disabled;

var withLabel = function withLabel() {
  return _react["default"].createElement(_Inputs.TextField, {
    label: "Name"
  });
};

exports.withLabel = withLabel;

var withOpenLabel = function withOpenLabel() {
  return _react["default"].createElement(_Inputs.TextField, {
    openLabel: true,
    label: "Name"
  });
};

exports.withOpenLabel = withOpenLabel;

var withValue = function withValue() {
  return _react["default"].createElement(_Inputs.TextField, {
    label: "Name",
    value: "Jon Snow"
  });
};

exports.withValue = withValue;

var withPrefix = function withPrefix() {
  return _react["default"].createElement(_Inputs.TextField, {
    prefix: "$",
    value: "1000,00"
  });
};

exports.withPrefix = withPrefix;

var withErrorMessage = function withErrorMessage() {
  return _react["default"].createElement(_Inputs.TextField, {
    errorMessage: "Campo obrigatório"
  });
};

exports.withErrorMessage = withErrorMessage;

var withHelper = function withHelper() {
  return _react["default"].createElement(_Inputs.TextField, {
    helper: "Insira um e-mail válido"
  });
};

exports.withHelper = withHelper;

var withHintText = function withHintText() {
  return _react["default"].createElement(_Inputs.TextField, {
    hintText: "Insira o nome"
  });
};

exports.withHintText = withHintText;