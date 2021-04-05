"use strict";

require("core-js/modules/es6.object.define-property");

require("core-js/modules/es6.string.iterator");

require("core-js/modules/es6.weak-map");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.WhiteTag = exports.ErrorTag = exports.AlertTag = exports.SuccessTag = exports.PrimaryTag = exports.SecondaryTag = exports.Tag = void 0;

require("core-js/modules/es6.object.assign");

require("core-js/modules/es6.symbol");

require("core-js/modules/es6.array.index-of");

require("core-js/modules/web.dom.iterable");

require("core-js/modules/es6.array.iterator");

require("core-js/modules/es6.object.to-string");

require("core-js/modules/es6.object.keys");

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _styledComponents = _interopRequireWildcard(require("styled-components"));

var _Icons = require("../Icons");

var _Themes = require("../Themes");

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function _getRequireWildcardCache() { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; if (obj != null) { var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

var Close = (0, _styledComponents["default"])(_Icons.MdClose).withConfig({
  displayName: "Tags__Close",
  componentId: "sc-1u635a7-0"
})(["margin-left:8px;cursor:pointer;"]);
var disabled = (0, _styledComponents.css)(["opacity:0.38;pointer-events:none;"]);

var BaseTag = _styledComponents["default"].div.withConfig({
  displayName: "Tags__BaseTag",
  componentId: "sc-1u635a7-1"
})(["--inner-tag-border-color:var(--tag-border-color);--inner-tag-background-color:var(--tag-background-color);--inner-tag-color:var(--tag-color);height:", "px;border:1px solid var(--inner-tag-border-color,", ");color:var( --inner-tag-color,", " );background-color:var( --inner-tag-background-color,", " );padding:0px 12px;border-radius:", "px;display:inline-flex;justify-content:flex-start;align-items:center;margin-right:12px;font-family:", ";font-size:", ";font-weight:", ";box-sizing:border-box;", " & > svg{fill:var(--inner-tag-color,#405f71);--size:16px;min-width:var(--size);max-width:var(--size);min-height:var(--size);max-height:var(--size);}& > svg:not(", "){margin-right:8px;}"], function (_ref) {
  var height = _ref.height;
  return height;
}, function (props) {
  return (0, _Themes.handleThemeFromObject)(props.theme, 'colors.border', '#e8ebee');
}, function (props) {
  return (0, _Themes.handleThemeFromObject)(props.theme, 'colors.dark-text', '#405f71');
}, function (props) {
  return (0, _Themes.handleThemeFromObject)(props.theme, 'colors.border', '#e8ebee');
}, function (_ref2) {
  var variant = _ref2.variant,
      height = _ref2.height;
  return variant === 'rounded' ? height / 2 : 2;
}, function (props) {
  return (0, _Themes.handleThemeFromObject)(props.theme, 'font-family', 'Roboto');
}, function (props) {
  return (0, _Themes.handleThemeFromObject)(props.theme, 'font-sizes.mobile-large', '14px');
}, function (props) {
  return (0, _Themes.handleThemeFromObject)(props.theme, 'font-weights.medium', '500');
}, function (props) {
  return props.disabled && disabled;
}, Close);

var Tag = _react["default"].forwardRef(function (_ref3, ref) {
  var children = _ref3.children,
      closable = _ref3.closable,
      onClose = _ref3.onClose,
      props = _objectWithoutProperties(_ref3, ["children", "closable", "onClose"]);

  return _react["default"].createElement(BaseTag, _extends({
    ref: ref,
    closable: closable
  }, props), children, closable && _react["default"].createElement(Close, {
    onClick: onClose
  }));
});

exports.Tag = Tag;
Tag.displayName = 'Tag';
Tag.propTypes = {
  closable: _propTypes["default"].bool,
  children: _propTypes["default"].oneOfType([_propTypes["default"].any]),
  onClose: _propTypes["default"].func,
  variant: _propTypes["default"].oneOf(['rounded', 'default']),
  height: _propTypes["default"].number
};
Tag.defaultProps = {
  closable: false,
  children: '',
  onClose: function onClose() {},
  variant: 'default',
  height: 28
};
var SecondaryTag = (0, _styledComponents["default"])(Tag).withConfig({
  displayName: "Tags__SecondaryTag",
  componentId: "sc-1u635a7-2"
})([""]);
exports.SecondaryTag = SecondaryTag;
var PrimaryTag = (0, _styledComponents["default"])(Tag).withConfig({
  displayName: "Tags__PrimaryTag",
  componentId: "sc-1u635a7-3"
})(["--tag-border-color:", ";--tag-background-color:", ";--tag-color:", ";"], function (props) {
  return (0, _Themes.handleThemeFromObject)(props.theme, 'colors.primary38', '#9edaff');
}, function (props) {
  return (0, _Themes.handleThemeFromObject)(props.theme, 'colors.primary6', '#f0f9ff');
}, function (props) {
  return (0, _Themes.handleThemeFromObject)(props.theme, 'colors.primary', '#009dff');
});
exports.PrimaryTag = PrimaryTag;
PrimaryTag.displayName = 'PrimaryTag';
var SuccessTag = (0, _styledComponents["default"])(Tag).withConfig({
  displayName: "Tags__SuccessTag",
  componentId: "sc-1u635a7-4"
})(["--tag-border-color:", ";--tag-background-color:", ";--tag-color:", ";"], function (props) {
  return (0, _Themes.handleThemeFromObject)(props.theme, 'colors.success38', '#a5ecc5');
}, function (props) {
  return (0, _Themes.handleThemeFromObject)(props.theme, 'colors.success6', '#f1fcf6');
}, function (props) {
  return (0, _Themes.handleThemeFromObject)(props.theme, 'colors.success', '#13ce66');
});
exports.SuccessTag = SuccessTag;
SuccessTag.displayName = 'SuccessTag';
var AlertTag = (0, _styledComponents["default"])(Tag).withConfig({
  displayName: "Tags__AlertTag",
  componentId: "sc-1u635a7-5"
})(["--tag-border-color:", ";--tag-background-color:", ";--tag-color:", ";"], function (props) {
  return (0, _Themes.handleThemeFromObject)(props.theme, 'colors.alert38', '#fde69e');
}, function (props) {
  return (0, _Themes.handleThemeFromObject)(props.theme, 'colors.alert6', '#fffbf0');
}, function (props) {
  return (0, _Themes.handleThemeFromObject)(props.theme, 'colors.alert', '#fabe00');
});
exports.AlertTag = AlertTag;
AlertTag.displayName = 'AlertTag';
var ErrorTag = (0, _styledComponents["default"])(Tag).withConfig({
  displayName: "Tags__ErrorTag",
  componentId: "sc-1u635a7-6"
})(["--tag-border-color:", ";--tag-background-color:", ";--tag-color:", ";"], function (props) {
  return (0, _Themes.handleThemeFromObject)(props.theme, 'colors.error38', '#f2b2b8');
}, function (props) {
  return (0, _Themes.handleThemeFromObject)(props.theme, 'colors.error6', '#fdf3f4');
}, function (props) {
  return (0, _Themes.handleThemeFromObject)(props.theme, 'colors.error', '#dc3545');
});
exports.ErrorTag = ErrorTag;
ErrorTag.displayName = 'ErrorTag';
var WhiteTag = (0, _styledComponents["default"])(Tag).withConfig({
  displayName: "Tags__WhiteTag",
  componentId: "sc-1u635a7-7"
})(["--tag-border-color:", ";--tag-background-color:", ";--tag-color:", ";"], function (props) {
  return (0, _Themes.handleThemeFromObject)(props.theme, 'color.dark-border', '#cdd7df');
}, function (props) {
  return (0, _Themes.handleThemeFromObject)(props.theme, 'colors.white', '#ffffff');
}, function (props) {
  return (0, _Themes.handleThemeFromObject)(props.theme, 'colors.dark-text', '#405f71');
});
exports.WhiteTag = WhiteTag;
WhiteTag.displayName = 'WhiteTag';