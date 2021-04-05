"use strict";

require("core-js/modules/es6.object.define-property");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.withOnCloseFunction = exports.withCustomIcon = exports.withAdditionalInformation = exports.danger = exports.success = exports.warning = exports.defaultStory = exports["default"] = void 0;

var _react = _interopRequireDefault(require("react"));

var _styledComponents = _interopRequireDefault(require("styled-components"));

var _addonActions = require("@storybook/addon-actions");

var _StyledAlert = require("./StyledAlert");

var _MaterialDesign = require("../Icons/MaterialDesign");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var Center = _styledComponents["default"].div.withConfig({
  displayName: "indexstories__Center",
  componentId: "sc-1a1dzlg-0"
})(["width:100%;height:100vh;display:flex;justify-content:center;align-items:center;background-color:#fafdff;padding:64px;box-sizing:border-box;"]);

var _default = {
  title: 'Components 2.0|Alert',
  parameters: {
    jest: ['StyledAlert']
  }
};
exports["default"] = _default;

var defaultStory = function defaultStory() {
  return _react["default"].createElement(Center, null, _react["default"].createElement(_StyledAlert.DefaultAlert, null, "Conteudo de informa\xE7\xE3o"));
};

exports.defaultStory = defaultStory;
defaultStory.story = {
  name: 'default'
};

var warning = function warning() {
  return _react["default"].createElement(Center, null, _react["default"].createElement(_StyledAlert.WarningAlert, null, "Conteudo de informa\xE7\xE3o"));
};

exports.warning = warning;

var success = function success() {
  return _react["default"].createElement(Center, null, _react["default"].createElement(_StyledAlert.SuccessAlert, null, "Conteudo de informa\xE7\xE3o"));
};

exports.success = success;

var danger = function danger() {
  return _react["default"].createElement(Center, null, _react["default"].createElement(_StyledAlert.DangerAlert, null, "Conteudo de informa\xE7\xE3o"));
};

exports.danger = danger;

var withAdditionalInformation = function withAdditionalInformation() {
  return _react["default"].createElement(Center, null, _react["default"].createElement(_StyledAlert.DefaultAlert, {
    additionalInfoContent: "Conteudo adicional de informação"
  }, "Conteudo de informa\xE7\xE3o"));
};

exports.withAdditionalInformation = withAdditionalInformation;

var withCustomIcon = function withCustomIcon() {
  return _react["default"].createElement(Center, null, _react["default"].createElement(_StyledAlert.DefaultAlert, {
    additionalInfoContent: "Conteudo adicional de informação",
    icon: _react["default"].createElement(_MaterialDesign.HelpCircle, null)
  }, "Conteudo de informa\xE7\xE3o"));
};

exports.withCustomIcon = withCustomIcon;

var withOnCloseFunction = function withOnCloseFunction() {
  return _react["default"].createElement(Center, null, _react["default"].createElement(_StyledAlert.DefaultAlert, {
    additionalInfoContent: "Conteudo adicional de informação",
    onClose: (0, _addonActions.action)('clicked')
  }, "Conteudo de informa\xE7\xE3o"));
};

exports.withOnCloseFunction = withOnCloseFunction;