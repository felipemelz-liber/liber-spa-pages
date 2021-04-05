"use strict";

require("core-js/modules/es6.object.define-property");

require("core-js/modules/es6.array.iterator");

require("core-js/modules/es6.string.iterator");

require("core-js/modules/es6.weak-map");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.withPassword = exports.withAutoComplete = exports.withHelper = exports.withErrorMessage = exports.withPrefix = exports.withValue = exports.withOpenLabel = exports.hint = exports.disabled = exports.defaultStory = exports["default"] = void 0;

require("core-js/modules/es6.regexp.to-string");

require("core-js/modules/es6.date.to-string");

require("core-js/modules/es6.object.to-string");

require("core-js/modules/es7.symbol.async-iterator");

require("core-js/modules/es6.symbol");

require("core-js/modules/web.dom.iterable");

require("core-js/modules/es6.array.is-array");

var _react = _interopRequireWildcard(require("react"));

var _styledComponents = _interopRequireDefault(require("styled-components"));

var _Inputs = require("../Inputs");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function _getRequireWildcardCache() { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; if (obj != null) { var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance"); }

function _iterableToArrayLimit(arr, i) { if (!(Symbol.iterator in Object(arr) || Object.prototype.toString.call(arr) === "[object Arguments]")) { return; } var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

var Center = _styledComponents["default"].div.withConfig({
  displayName: "textfieldstories__Center",
  componentId: "sc-13troyq-0"
})(["width:100%;height:100vh;display:flex;justify-content:center;align-items:center;background-color:#fafdff;padding:64px;box-sizing:border-box;"]);

var _default = {
  title: 'Components 2.0|Input/TextField',
  parameters: {
    jest: ['TextField']
  }
};
exports["default"] = _default;

var defaultStory = function defaultStory() {
  return _react["default"].createElement(Center, null, _react["default"].createElement(_Inputs.TextField, {
    version: 2,
    label: "CPF"
  }));
};

exports.defaultStory = defaultStory;
defaultStory.story = {
  name: 'default'
};

var disabled = function disabled() {
  return _react["default"].createElement(Center, null, _react["default"].createElement(_Inputs.TextField, {
    version: 2,
    disabled: true,
    label: "CPF"
  }));
};

exports.disabled = disabled;

var hint = function hint() {
  return _react["default"].createElement(Center, null, _react["default"].createElement(_Inputs.TextField, {
    version: 2,
    hintText: "999.999.999-99"
  }));
};

exports.hint = hint;

var withOpenLabel = function withOpenLabel() {
  return _react["default"].createElement(Center, null, _react["default"].createElement(_Inputs.TextField, {
    version: 2,
    openLabel: true,
    label: "CPF"
  }));
};

exports.withOpenLabel = withOpenLabel;
withOpenLabel.story = {
  name: 'with open label'
};

var withValue = function withValue() {
  return _react["default"].createElement(Center, null, _react["default"].createElement(_Inputs.TextField, {
    version: 2,
    label: "CPF",
    value: "226.718.960-77"
  }));
};

exports.withValue = withValue;
withValue.story = {
  name: 'with value'
};

var withPrefix = function withPrefix() {
  return _react["default"].createElement(Center, null, _react["default"].createElement(_Inputs.TextField, {
    version: 2,
    label: "Total",
    prefix: "$",
    value: "1000,00"
  }));
};

exports.withPrefix = withPrefix;
withPrefix.story = {
  name: 'with prefix'
};

var withErrorMessage = function withErrorMessage() {
  var _useState = (0, _react.useState)('226.718.96-0-77'),
      _useState2 = _slicedToArray(_useState, 2),
      value = _useState2[0],
      setValue = _useState2[1];

  return _react["default"].createElement(Center, null, _react["default"].createElement(_Inputs.TextField, {
    version: 2,
    label: "CPF",
    value: value,
    onChange: setValue,
    errorMessage: "CPF inválido"
  }));
};

exports.withErrorMessage = withErrorMessage;
withErrorMessage.story = {
  name: 'with error message'
};

var withHelper = function withHelper() {
  return _react["default"].createElement(Center, null, _react["default"].createElement(_Inputs.TextField, {
    version: 2,
    helper: "Insira um CPF válido",
    label: "CPF",
    hintText: "999.999.999-99"
  }));
};

exports.withHelper = withHelper;
withHelper.story = {
  name: 'with helper'
};

var withAutoComplete = function withAutoComplete() {
  return _react["default"].createElement(Center, null, _react["default"].createElement(_Inputs.TextField, {
    version: 2,
    autoComplete: true,
    autoCompleteList: ['Item encontrado 1', 'Item encontrado 2', 'Item encontrado 3', 'Item encontrado 4', 'Item sob efeito de hover'],
    hintText: "Comece digitando algo"
  }));
};

exports.withAutoComplete = withAutoComplete;
withAutoComplete.story = {
  name: 'with auto complete'
};

var withPassword = function withPassword() {
  return _react["default"].createElement(Center, null, _react["default"].createElement(_Inputs.TextField, {
    version: 2,
    type: "password",
    showPasswordToggle: true
  }));
};

exports.withPassword = withPassword;
withPassword.story = {
  name: 'with password'
};