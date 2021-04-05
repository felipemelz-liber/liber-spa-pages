"use strict";

require("core-js/modules/es6.object.define-property");

require("core-js/modules/web.dom.iterable");

require("core-js/modules/es6.array.iterator");

require("core-js/modules/es6.object.to-string");

require("core-js/modules/es6.string.iterator");

require("core-js/modules/es6.weak-map");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.DangerAlert = exports.WarningAlert = exports.SuccessAlert = exports.DefaultAlert = void 0;

var _react = _interopRequireDefault(require("react"));

var _styledComponents = _interopRequireWildcard(require("styled-components"));

var _Alert = _interopRequireDefault(require("../Alert"));

var _Themes = require("../../Themes");

var _MaterialDesign = require("../../Icons/MaterialDesign");

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function _getRequireWildcardCache() { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; if (obj != null) { var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var icon = (0, _styledComponents.css)(["--size:24px;min-width:var(--size);max-width:var(--size);min-height:var(--size);max-height:var(--size);"]);
var alertBox = (0, _styledComponents.css)(["display:flex;flex-direction:row;align-items:center;width:100%;"]);
var DefaultAlert = (0, _styledComponents["default"])(_Alert["default"]).withConfig({
  displayName: "StyledAlert__DefaultAlert",
  componentId: "ja5v8x-0"
})(["", " background-color:", ";border:1px solid ", ";svg{", " fill:#009dff;}"], alertBox, function (props) {
  return (0, _Themes.handleThemeFromObject)(props.theme, 'alert.background.default', '#f0f9ff');
}, function (props) {
  return (0, _Themes.handleThemeFromObject)(props.theme, 'alert.border.default', '#009dff');
}, icon);
exports.DefaultAlert = DefaultAlert;
DefaultAlert.defaultProps = {
  icon: _react["default"].createElement(_MaterialDesign.MdAlertCircle, null)
};
var SuccessAlert = (0, _styledComponents["default"])(_Alert["default"]).withConfig({
  displayName: "StyledAlert__SuccessAlert",
  componentId: "ja5v8x-1"
})(["", " background-color:", ";border:1px solid ", ";svg{", " fill:#13ce66;}"], alertBox, function (props) {
  return (0, _Themes.handleThemeFromObject)(props.theme, 'alert.background.success', '#f1fcf6');
}, function (props) {
  return (0, _Themes.handleThemeFromObject)(props.theme, 'alert.border.success', '#13ce66');
}, icon);
exports.SuccessAlert = SuccessAlert;
SuccessAlert.defaultProps = {
  icon: _react["default"].createElement(_MaterialDesign.MdCheckCircle, null)
};
var WarningAlert = (0, _styledComponents["default"])(_Alert["default"]).withConfig({
  displayName: "StyledAlert__WarningAlert",
  componentId: "ja5v8x-2"
})(["", " background-color:", ";border:1px solid ", ";svg{", " fill:#fabe00;}"], alertBox, function (props) {
  return (0, _Themes.handleThemeFromObject)(props.theme, 'alert.background.warning', '#fffbf0');
}, function (props) {
  return (0, _Themes.handleThemeFromObject)(props.theme, 'alert.border.warning', '#fabe00');
}, icon);
exports.WarningAlert = WarningAlert;
WarningAlert.defaultProps = {
  icon: _react["default"].createElement(_MaterialDesign.MdAlertCircle, null)
};
var DangerAlert = (0, _styledComponents["default"])(_Alert["default"]).withConfig({
  displayName: "StyledAlert__DangerAlert",
  componentId: "ja5v8x-3"
})(["", " background-color:", ";border:1px solid ", ";svg{", " fill:#dc3545;}"], alertBox, function (props) {
  return (0, _Themes.handleThemeFromObject)(props.theme, 'alert.background.danger', '#fdf3f4');
}, function (props) {
  return (0, _Themes.handleThemeFromObject)(props.theme, 'alert.border.danger', '#dc3545');
}, icon);
exports.DangerAlert = DangerAlert;
DangerAlert.defaultProps = {
  icon: _react["default"].createElement(_MaterialDesign.MdCloseCircle, null)
};