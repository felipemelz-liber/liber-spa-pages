"use strict";

require("core-js/modules/es6.object.define-property");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.withHelper = exports.withErrorMessage = exports.defaultStory = exports["default"] = void 0;

var _react = _interopRequireDefault(require("react"));

var _styledComponents = _interopRequireDefault(require("styled-components"));

var _Inputs = require("../Inputs");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var Center = _styledComponents["default"].div.withConfig({
  displayName: "textareastories__Center",
  componentId: "yao65-0"
})(["width:100%;height:100vh;display:flex;justify-content:center;align-items:center;background-color:#fafdff;padding:64px;box-sizing:border-box;"]);

var _default = {
  title: 'Components 2.0|Input/TextArea',
  parameters: {
    jest: ['TextArea']
  }
};
exports["default"] = _default;

var defaultStory = function defaultStory() {
  return _react["default"].createElement(Center, null, _react["default"].createElement(_Inputs.TextArea, {
    version: 2,
    label: "CPF",
    rows: "6"
  }));
};

exports.defaultStory = defaultStory;
defaultStory.story = {
  name: 'default'
};

var withErrorMessage = function withErrorMessage() {
  return _react["default"].createElement(Center, null, _react["default"].createElement(_Inputs.TextArea, {
    version: 2,
    label: "CPF",
    value: "226.718.96-0-77",
    errorMessage: "CPF inválido"
  }));
};

exports.withErrorMessage = withErrorMessage;

var withHelper = function withHelper() {
  return _react["default"].createElement(Center, null, _react["default"].createElement(_Inputs.TextArea, {
    version: 2,
    helper: "Insira um CPF válido",
    label: "CPF",
    hintText: "999.999.999-9999999999999999999999"
  }));
};

exports.withHelper = withHelper;