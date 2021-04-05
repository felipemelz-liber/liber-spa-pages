"use strict";

require("core-js/modules/es6.object.define-property");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.disabled = exports.error = exports.withPlaceholderHintText = exports.wihthoutLabel = exports.defaultStory = exports["default"] = void 0;

var _react = _interopRequireDefault(require("react"));

var _addonActions = require("@storybook/addon-actions");

var _styledComponents = _interopRequireDefault(require("styled-components"));

var _Inputs = require("../Inputs");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var Center = _styledComponents["default"].div.withConfig({
  displayName: "datetimerangestories__Center",
  componentId: "sc-1400pdw-0"
})(["width:100%;height:100vh;display:flex;justify-content:center;align-items:center;background-color:#fafdff;padding:64px;box-sizing:border-box;"]);

var _default = {
  title: 'Components 2.0|Input/DateTimeRangePicker',
  parameters: {
    jest: ['DateTimeRangePicker']
  }
};
exports["default"] = _default;

var defaultStory = function defaultStory() {
  return _react["default"].createElement(Center, null, _react["default"].createElement(_Inputs.DateTimeRangePicker, {
    onChange: (0, _addonActions.action)('onChange'),
    label: "DateTimeRangePicker"
  }));
};

exports.defaultStory = defaultStory;
defaultStory.story = {
  name: 'default'
};

var wihthoutLabel = function wihthoutLabel() {
  return _react["default"].createElement(Center, null, _react["default"].createElement(_Inputs.DateTimeRangePicker, {
    onChange: (0, _addonActions.action)('onChange')
  }));
};

exports.wihthoutLabel = wihthoutLabel;
wihthoutLabel.story = {
  name: 'wihthout label'
};

var withPlaceholderHintText = function withPlaceholderHintText() {
  return _react["default"].createElement(Center, null, _react["default"].createElement(_Inputs.DateTimeRangePicker, {
    label: "DateTimeRangePicker",
    onChange: (0, _addonActions.action)('onChange'),
    placeholder: "placeholder"
  }));
};

exports.withPlaceholderHintText = withPlaceholderHintText;
withPlaceholderHintText.story = {
  name: 'with placeholder(hintText)'
};

var error = function error() {
  return _react["default"].createElement(Center, null, _react["default"].createElement(_Inputs.DateTimeRangePicker, {
    label: "DateTimeRangePicker",
    onChange: (0, _addonActions.action)('onChange'),
    errorMessage: "Error Message"
  }));
};

exports.error = error;

var disabled = function disabled() {
  return _react["default"].createElement(Center, null, _react["default"].createElement(_Inputs.DateTimeRangePicker, {
    label: "DateTimeRangePicker",
    onChange: (0, _addonActions.action)('onChange'),
    disabled: true
  }));
};

exports.disabled = disabled;