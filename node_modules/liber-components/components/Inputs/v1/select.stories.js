"use strict";

require("core-js/modules/es6.object.define-property");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.withFullWidth = exports.withErrorMessage = exports.searchable = exports.defaultStory = exports["default"] = void 0;

var _react = _interopRequireDefault(require("react"));

var _Inputs = require("../Inputs");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var _default = {
  title: 'Components 1.0|Input/SelectField',
  parameters: {
    jest: ['SelectField']
  }
};
exports["default"] = _default;

var defaultStory = function defaultStory() {
  return _react["default"].createElement(_Inputs.SelectField, null, _react["default"].createElement("option", {
    value: "pf"
  }, "Pessoa F\xEDsica"), _react["default"].createElement("option", {
    value: "factoring"
  }, "Factoring"), _react["default"].createElement("option", {
    value: "fidc"
  }, "FIDC"), _react["default"].createElement("option", {
    value: "securitizadora"
  }, "Securitizadora"), _react["default"].createElement("option", {
    value: "banco"
  }, "Banco"));
};

exports.defaultStory = defaultStory;
defaultStory.story = {
  name: 'default'
};

var searchable = function searchable() {
  return _react["default"].createElement(_Inputs.SelectField, {
    searchable: true
  }, _react["default"].createElement("option", {
    value: "pf"
  }, "Pessoa F\xEDsica"), _react["default"].createElement("option", {
    value: "factoring"
  }, "Factoring"), _react["default"].createElement("option", {
    value: "fidc"
  }, "FIDC"), _react["default"].createElement("option", {
    value: "securitizadora"
  }, "Securitizadora"), _react["default"].createElement("option", {
    value: "banco"
  }, "Banco"));
};

exports.searchable = searchable;

var withErrorMessage = function withErrorMessage() {
  return _react["default"].createElement(_Inputs.SelectField, {
    errorMessage: "Campo obrigatório"
  }, _react["default"].createElement("option", {
    value: "pf"
  }, "Pessoa F\xEDsica"), _react["default"].createElement("option", {
    value: "factoring"
  }, "Factoring"), _react["default"].createElement("option", {
    value: "fidc"
  }, "FIDC"), _react["default"].createElement("option", {
    value: "securitizadora"
  }, "Securitizadora"), _react["default"].createElement("option", {
    value: "banco"
  }, "Banco"));
};

exports.withErrorMessage = withErrorMessage;

var withFullWidth = function withFullWidth() {
  return _react["default"].createElement(_Inputs.SelectField, {
    fullWidth: true
  }, _react["default"].createElement("option", {
    value: "pf"
  }, "Pessoa F\xEDsica"), _react["default"].createElement("option", {
    value: "factoring"
  }, "Factoring"), _react["default"].createElement("option", {
    value: "fidc"
  }, "FIDC"), _react["default"].createElement("option", {
    value: "securitizadora"
  }, "Securitizadora"), _react["default"].createElement("option", {
    value: "banco"
  }, "Banco"));
};

exports.withFullWidth = withFullWidth;