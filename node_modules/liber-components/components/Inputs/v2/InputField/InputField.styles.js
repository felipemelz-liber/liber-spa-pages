"use strict";

require("core-js/modules/es6.object.define-property");

require("core-js/modules/es6.string.iterator");

require("core-js/modules/es6.weak-map");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.VisibilityIcon = exports.PasswordToggleContainer = exports.HighlightItem = exports.InputAutoCompleteItem = exports.InputAutoCompleteList = exports.InputHelperText = exports.ChevronUpIcon = exports.ChevronDownIcon = exports.InputHelperIcon = exports.InputHelper = exports.SpinButtons = exports.InputText = exports.InputPrefix = exports.InputHint = exports.InputLabel = exports.InputError = exports.InputBase = void 0;

require("core-js/modules/es6.symbol");

require("core-js/modules/es6.array.index-of");

require("core-js/modules/web.dom.iterable");

require("core-js/modules/es6.array.iterator");

require("core-js/modules/es6.object.to-string");

require("core-js/modules/es6.object.keys");

var _react = _interopRequireDefault(require("react"));

var _styledComponents = _interopRequireWildcard(require("styled-components"));

var _reactInputMask = _interopRequireDefault(require("react-input-mask"));

var _Icons = require("../../../Icons");

var _Themes = require("../../../Themes");

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function _getRequireWildcardCache() { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; if (obj != null) { var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

var chevronIcons = (0, _styledComponents.css)(["fill:#798e9b;width:24px;height:20px;cursor:pointer;"]);

var setLabelColor = function setLabelColor(theme, valid, focused, error) {
  if (error) return (0, _Themes.handleThemeFromObject)(theme, 'colors.red', '#dc3545');
  if (valid) return (0, _Themes.handleThemeFromObject)(theme, 'colors.petroleum', '#4b6f85');
  if (focused) return (0, _Themes.handleThemeFromObject)(theme, 'colors.liber-blue', '#009DFF');
  return (0, _Themes.handleThemeFromObject)(theme, 'colors.dark-text60', '#8c9fa9');
};

var InputBase = _styledComponents["default"].div.withConfig({
  displayName: "InputFieldstyles__InputBase",
  componentId: "rr4p3x-0"
})(["position:relative;padding-top:10px;width:", ";outline:none;pointer-events:", ";*{background-color:transparent;border:none;color:", ";line-height:24px;font-family:'Roboto',sans-serif;font-size:16px;font-weight:400;text-align:left;}label{color:", ";}label:before{display:", ";}input{background-color:", ";}"], function (props) {
  return props.width;
}, function (props) {
  return props.disabled ? 'none' : 'auto';
}, function (props) {
  return (0, _Themes.handleThemeFromObject)(props.theme, 'colors.dark-text87', '#587383');
}, function (props) {
  return props.disabled && (0, _Themes.handleThemeFromObject)(props.theme, 'colors.dark-text38', '#b6c2c9');
}, function (props) {
  return props.disabled && 'none';
}, function (props) {
  return props.disabled ? (0, _Themes.handleThemeFromObject)(props.theme, 'colors.border', '#e8ebee') : (0, _Themes.handleThemeFromObject)(props.theme, 'colors.white', '#ffffff');
});

exports.InputBase = InputBase;

var getColor = function getColor(_ref) {
  var visible = _ref.visible,
      theme = _ref.theme;
  return visible ? (0, _Themes.handleThemeFromObject)(theme, 'colors.red', '#dc3545') : 'transparent';
};

var InputError = _styledComponents["default"].span.withConfig({
  displayName: "InputFieldstyles__InputError",
  componentId: "rr4p3x-1"
})(["width:auto;text-align:left;padding:12px 6px;font-size:12px;line-height:12px;transition:all 200ms cubic-bezier(0.645,0.045,0.355,1);color:", ";&::before{content:'';}"], getColor);

exports.InputError = InputError;

var InputLabel = _styledComponents["default"].label.withConfig({
  displayName: "InputFieldstyles__InputLabel",
  componentId: "rr4p3x-2"
})(["position:absolute;padding:0px 6px;left:6px;text-align:left;font-size:", ";color:", ";background-color:transparent;top:", ";transition:all 200ms cubic-bezier(0.645,0.045,0.355,1);pointer-events:none;width:auto;overflow:hidden;white-space:nowrap;text-overflow:ellipsis;user-select:none;z-index:1;&:before{content:'';position:absolute;border-bottom:3px solid ", ";left:0px;top:calc(50% - 2px);width:100%;z-index:-1;}"], function (props) {
  return props.focused || props.valid || props.open ? '12px' : '16px';
}, function (props) {
  return setLabelColor(props.theme, props.valid, props.focused, props.error);
}, function (props) {
  return props.focused || props.valid || props.open ? '0px' : '20px';
}, function (props) {
  return (0, _Themes.handleThemeFromObject)(props.theme, 'colors.white', '#ffffff');
});

exports.InputLabel = InputLabel;

var InputHint = _styledComponents["default"].div.withConfig({
  displayName: "InputFieldstyles__InputHint",
  componentId: "rr4p3x-3"
})(["position:absolute;top:12px;padding:10px 12px;color:", ";transition:all 200ms cubic-bezier(0.645,0.045,0.355,1);pointer-events:none;overflow:hidden;"], function (props) {
  return props.visible ? (0, _Themes.handleThemeFromObject)(props.theme, 'colors.dark-text38', '#b6c2c9') : 'transparent';
});

exports.InputHint = InputHint;
var InputPrefix = (0, _styledComponents["default"])(InputHint).withConfig({
  displayName: "InputFieldstyles__InputPrefix",
  componentId: "rr4p3x-4"
})(["display:flex;align-items:center;width:unset;height:40px;box-sizing:border-box;color:", ";& svg{--width:16px;--height:16px;min-height:var(--height);min-width:var(--width);fill:", ";transition:all 200ms cubic-bezier(0.645,0.045,0.355,1);}"], function (props) {
  if (!props.visible) return 'transparent';
  if (props.error && props.visible) return (0, _Themes.handleThemeFromObject)(props.theme, 'colors.red', '#dc3545');
  if (props.valid) return (0, _Themes.handleThemeFromObject)(props.theme, 'colors.petroleum', '#4b6f85');
  return props.focused ? (0, _Themes.handleThemeFromObject)(props.theme, 'colors.primary', '#009dff') : (0, _Themes.handleThemeFromObject)(props.theme, 'colors.gray3', '#C6D1D8');
}, function (props) {
  if (!props.visible) return 'transparent';
  if (props.error) return (0, _Themes.handleThemeFromObject)(props.theme, 'colors.red', '#dc3545');
  return props.focused ? (0, _Themes.handleThemeFromObject)(props.theme, 'colors.primary', '#009dff') : (0, _Themes.handleThemeFromObject)(props.theme, 'colors.gray3', '#C6D1D8');
});
exports.InputPrefix = InputPrefix;
var InputText = (0, _styledComponents["default"])(function (_ref2) {
  var error = _ref2.error,
      props = _objectWithoutProperties(_ref2, ["error"]);

  return _react["default"].createElement(_reactInputMask["default"], props);
}).withConfig({
  displayName: "InputFieldstyles__InputText",
  componentId: "rr4p3x-5"
})(["padding:10px;border-radius:4px;border:solid 1px ", ";width:100%;padding-left:", ";padding-right:", ";box-sizing:border-box;z-index:-2;&:focus{outline:0;border:solid 1px ", ";}&::-moz-focus-inner{border:0;}&::placeholder{color:transparent;}&:-webkit-autofill,&:-webkit-autofill:hover,&:-webkit-autofill:focus,&:-webkit-autofill:active{-webkit-box-shadow:0 0 0px 1000px #fff inset !important;transition:background-color 99999s ease-in-out 0s;}&::-webkit-inner-spin-button,&::-webkit-outer-spin-button{-webkit-appearance:none;margin:0;}"], function (props) {
  return props.error ? (0, _Themes.handleThemeFromObject)(props.theme, 'colors.red', '#dc3545') : (0, _Themes.handleThemeFromObject)(props.theme, 'colors.border', '#e8ebee');
}, function (props) {
  return props.padding || null;
}, function (_ref3) {
  var hasPasswordToggle = _ref3.hasPasswordToggle;
  return hasPasswordToggle ? '36px' : null;
}, function (props) {
  return props.error ? (0, _Themes.handleThemeFromObject)(props.theme, 'colors.red', '#dc3545') : (0, _Themes.handleThemeFromObject)(props.theme, 'colors.primary', '#009dff');
});
exports.InputText = InputText;

var SpinButtons = _styledComponents["default"].div.withConfig({
  displayName: "InputFieldstyles__SpinButtons",
  componentId: "rr4p3x-6"
})(["display:flex;flex-direction:column;position:absolute;right:5px;padding-top:3px;"]);

exports.SpinButtons = SpinButtons;

var InputHelper = _styledComponents["default"].div.withConfig({
  displayName: "InputFieldstyles__InputHelper",
  componentId: "rr4p3x-7"
})(["display:", ";position:", ";width:100%;top:", ";padding:", ";& > *{color:", ";fill:", ";}"], function (props) {
  return props.visible ? 'block' : 'none';
}, function (props) {
  return props.afterError ? 'relative' : 'absolute';
}, function (props) {
  return props.afterError ? 'auto' : 'calc(42px + 12px + 2px)';
}, function (props) {
  return props.afterError ? '0px' : '12px 10px';
}, function (props) {
  return (0, _Themes.handleThemeFromObject)(props.theme, 'colors.dark-text38', '#b6c2c9');
}, function (props) {
  return (0, _Themes.handleThemeFromObject)(props.theme, 'colors.dark-text38', '#b6c2c9');
});

exports.InputHelper = InputHelper;
var InputHelperIcon = (0, _styledComponents["default"])(_Icons.FaInfoCircle).withConfig({
  displayName: "InputFieldstyles__InputHelperIcon",
  componentId: "rr4p3x-8"
})(["position:absolute;width:15px;height:15px;margin:1px 0px;top:calc(50% - 9px);"]);
exports.InputHelperIcon = InputHelperIcon;
var ChevronDownIcon = (0, _styledComponents["default"])(_Icons.MdChevronDown).withConfig({
  displayName: "InputFieldstyles__ChevronDownIcon",
  componentId: "rr4p3x-9"
})(["", ""], chevronIcons);
exports.ChevronDownIcon = ChevronDownIcon;
var ChevronUpIcon = (0, _styledComponents["default"])(_Icons.MdChevronUp).withConfig({
  displayName: "InputFieldstyles__ChevronUpIcon",
  componentId: "rr4p3x-10"
})(["", ""], chevronIcons);
exports.ChevronUpIcon = ChevronUpIcon;

var InputHelperText = _styledComponents["default"].div.withConfig({
  displayName: "InputFieldstyles__InputHelperText",
  componentId: "rr4p3x-11"
})(["margin-left:18px;padding-left:5px;font-size:12px;"]);

exports.InputHelperText = InputHelperText;

var InputAutoCompleteList = _styledComponents["default"].div.withConfig({
  displayName: "InputFieldstyles__InputAutoCompleteList",
  componentId: "rr4p3x-12"
})(["position:absolute;border-radius:4px;box-shadow:0 1px 2px 0 rgba(0,0,0,0.12);z-index:99;top:100%;left:0;right:0;"]);

exports.InputAutoCompleteList = InputAutoCompleteList;

var InputAutoCompleteItem = _styledComponents["default"].div.withConfig({
  displayName: "InputFieldstyles__InputAutoCompleteItem",
  componentId: "rr4p3x-13"
})(["padding:10px;cursor:pointer;background-color:", ";color:#8c9fa9;&:hover{background-color:", ";color:", ";}"], function (props) {
  return (0, _Themes.handleThemeFromObject)(props.theme, 'colors.white', '#ffffff');
}, function (props) {
  return (0, _Themes.handleThemeFromObject)(props.theme, 'colors.lightBlue75', '#f0f9ff');
}, function (props) {
  return (0, _Themes.handleThemeFromObject)(props.theme, 'colors.lightBlue', '#4cbaff');
});

exports.InputAutoCompleteItem = InputAutoCompleteItem;

var HighlightItem = _styledComponents["default"].span.withConfig({
  displayName: "InputFieldstyles__HighlightItem",
  componentId: "rr4p3x-14"
})(["font-weight:500;color:#009dff;"]);

exports.HighlightItem = HighlightItem;

var PasswordToggleContainer = _styledComponents["default"].div.withConfig({
  displayName: "InputFieldstyles__PasswordToggleContainer",
  componentId: "rr4p3x-15"
})(["display:flex;justify-content:flex-end;width:calc(100% - 12px);height:46px;align-items:center;position:absolute;z-index:2;pointer-events:none;"]);

exports.PasswordToggleContainer = PasswordToggleContainer;
var VisibilityIcon = (0, _styledComponents["default"])(function (_ref4) {
  var passwordVisible = _ref4.passwordVisible,
      props = _objectWithoutProperties(_ref4, ["passwordVisible"]);

  return passwordVisible ? _react["default"].createElement(_Icons.MdEyeOff, props) : _react["default"].createElement(_Icons.MdEye, props);
}).withConfig({
  displayName: "InputFieldstyles__VisibilityIcon",
  componentId: "rr4p3x-16"
})(["width:24px;height:24px;fill:#b6c2c9;pointer-events:all;cursor:pointer;"]);
exports.VisibilityIcon = VisibilityIcon;