"use strict";

require("core-js/modules/es6.object.define-property");

require("core-js/modules/es6.string.iterator");

require("core-js/modules/es6.weak-map");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.ModalDangerButton = exports.DangerButton = exports.DangerIcon = exports.ModalSuccessButton = exports.SuccessButton = exports.SuccessIcon = exports.ModalPrimaryButton = exports.ModalButton = void 0;

require("core-js/modules/es6.symbol");

require("core-js/modules/es6.array.index-of");

require("core-js/modules/web.dom.iterable");

require("core-js/modules/es6.array.iterator");

require("core-js/modules/es6.object.to-string");

require("core-js/modules/es6.object.keys");

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _styledComponents = _interopRequireWildcard(require("styled-components"));

var _Icons = require("../../../Icons");

var _Themes = require("../../../Themes");

var _Util = require("../../../Util");

var _StyledButtons = require("../StyledButtons");

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function _getRequireWildcardCache() { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; if (obj != null) { var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

var ModalButton = (0, _styledComponents["default"])(_StyledButtons.Button).withConfig({
  displayName: "ModalButtons__ModalButton",
  componentId: "sc-13a33n5-0"
})(["background-color:transparent !important;font-size:18px;align-items:center;white-space:nowrap;", " &:hover{", "}&:disabled{background-color:transparent !important;", "}&:after{display:none;}"], function (props) {
  return (0, _Util.generateColorAndFill)((0, _Themes.handleThemeFromObject)(props.theme, 'buttons.base.background', '#a4a4a4'));
}, function (props) {
  return (0, _Util.generateColorAndFill)((0, _Themes.handleThemeFromObject)(props.theme, 'buttons.base.backgroundHover', '#717171'));
}, function (props) {
  return (0, _Util.generateColorAndFill)((0, _Themes.handleThemeFromObject)(props.theme, 'buttons.base.background', '#a4a4a4'), true);
});
exports.ModalButton = ModalButton;
var ModalPrimaryButton = (0, _styledComponents["default"])(ModalButton).withConfig({
  displayName: "ModalButtons__ModalPrimaryButton",
  componentId: "sc-13a33n5-1"
})(["", " &:hover{", "}"], function (props) {
  return (0, _Util.generateColorAndFill)((0, _Themes.handleThemeFromObject)(props.theme, 'buttons.primary.background', '#009dff'));
}, function (props) {
  return (0, _Util.generateColorAndFill)((0, _Themes.handleThemeFromObject)(props.theme, 'buttons.primary.backgroundHover', '#007ecc'));
});
exports.ModalPrimaryButton = ModalPrimaryButton;
var Icons = (0, _styledComponents.css)(["width:18px;height:18px;margin:auto;margin-right:16px;"]);
var SuccessIcon = (0, _styledComponents["default"])(_Icons.FaCheck).withConfig({
  displayName: "ModalButtons__SuccessIcon",
  componentId: "sc-13a33n5-2"
})(["", ""], Icons);
exports.SuccessIcon = SuccessIcon;
var SuccessButton = (0, _styledComponents["default"])(ModalButton).withConfig({
  displayName: "ModalButtons__SuccessButton",
  componentId: "sc-13a33n5-3"
})(["", " &:hover{", "}"], function (props) {
  return (0, _Util.generateColorAndFill)((0, _Themes.handleThemeFromObject)(props.theme, 'buttons.success.background', '#13ce66'));
}, function (props) {
  return (0, _Util.generateColorAndFill)((0, _Themes.handleThemeFromObject)(props.theme, 'buttons.success.backgroundHover', '#0DAB53'));
});
exports.SuccessButton = SuccessButton;

var ModalSuccessButton = function ModalSuccessButton(_ref) {
  var children = _ref.children,
      hasIcon = _ref.hasIcon,
      props = _objectWithoutProperties(_ref, ["children", "hasIcon"]);

  return _react["default"].createElement(SuccessButton, props, hasIcon ? _react["default"].createElement(SuccessIcon, null) : null, children);
};

exports.ModalSuccessButton = ModalSuccessButton;
ModalSuccessButton.propTypes = {
  hasIcon: _propTypes["default"].bool,
  children: _propTypes["default"].oneOfType([_propTypes["default"].any])
};
ModalSuccessButton.defaultProps = {
  children: null,
  hasIcon: false
};
var DangerIcon = (0, _styledComponents["default"])(_Icons.FaTimes).withConfig({
  displayName: "ModalButtons__DangerIcon",
  componentId: "sc-13a33n5-4"
})(["", ""], Icons);
exports.DangerIcon = DangerIcon;
var DangerButton = (0, _styledComponents["default"])(ModalButton).withConfig({
  displayName: "ModalButtons__DangerButton",
  componentId: "sc-13a33n5-5"
})(["", " &:hover{", "}"], function (props) {
  return (0, _Util.generateColorAndFill)((0, _Themes.handleThemeFromObject)(props.theme, 'buttons.danger.background', '#DC3545'));
}, function (props) {
  return (0, _Util.generateColorAndFill)((0, _Themes.handleThemeFromObject)(props.theme, 'buttons.danger.backgroundHover', '#bd2130'));
});
exports.DangerButton = DangerButton;

var ModalDangerButton = function ModalDangerButton(_ref2) {
  var children = _ref2.children,
      hasIcon = _ref2.hasIcon,
      props = _objectWithoutProperties(_ref2, ["children", "hasIcon"]);

  return _react["default"].createElement(DangerButton, props, hasIcon ? _react["default"].createElement(DangerIcon, null) : null, children);
};

exports.ModalDangerButton = ModalDangerButton;
ModalDangerButton.propTypes = {
  hasIcon: _propTypes["default"].bool,
  children: _propTypes["default"].oneOfType([_propTypes["default"].any])
};
ModalDangerButton.defaultProps = {
  children: null,
  hasIcon: false
};