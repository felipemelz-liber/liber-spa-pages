"use strict";

require("core-js/modules/es6.object.define-property");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.InputAutoCompleteItem = exports.InputAutoCompleteList = exports.InputHelperText = exports.InputHelperIcon = exports.InputHelper = exports.InputText = exports.InputPrefix = exports.InputHint = exports.InputLabel = exports.InputError = exports.InputBase = void 0;

var _styledComponents = _interopRequireDefault(require("styled-components"));

var _Icons = require("../../../Icons");

var _Themes = require("../../../Themes");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var setLabelColor = function setLabelColor(theme, valid, focused, error) {
  if (error) return (0, _Themes.handleThemeFromObject)(theme, 'colors.red', '#dc3545');
  if (valid) return (0, _Themes.handleThemeFromObject)(theme, 'colors.petroleum', '#4b6f85');
  if (focused) return (0, _Themes.handleThemeFromObject)(theme, 'colors.liber-blue', '#009DFF');
  return (0, _Themes.handleThemeFromObject)(theme, 'colors.dark-text60', '#8c9fa9');
};

var InputBase = _styledComponents["default"].div.withConfig({
  displayName: "TextAreastyles__InputBase",
  componentId: "sc-15ybfsy-0"
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

var InputError = _styledComponents["default"].div.withConfig({
  displayName: "TextAreastyles__InputError",
  componentId: "sc-15ybfsy-1"
})(["width:auto;text-align:left;padding:12px 6px;color:", ";font-size:12px;line-height:12px;transition:all 200ms cubic-bezier(0.645,0.045,0.355,1);&:before{content:'';}"], function (props) {
  return props.visible ? (0, _Themes.handleThemeFromObject)(props.theme, 'colors.red', '#dc3545') : 'transparent';
});

exports.InputError = InputError;

var InputLabel = _styledComponents["default"].label.withConfig({
  displayName: "TextAreastyles__InputLabel",
  componentId: "sc-15ybfsy-2"
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
  displayName: "TextAreastyles__InputHint",
  componentId: "sc-15ybfsy-3"
})(["position:absolute;top:12px;padding:10px 12px;color:", ";transition:all 200ms cubic-bezier(0.645,0.045,0.355,1);pointer-events:none;overflow:hidden;"], function (props) {
  return props.visible ? (0, _Themes.handleThemeFromObject)(props.theme, 'colors.dark-text38', '#b6c2c9') : 'transparent';
});

exports.InputHint = InputHint;
var InputPrefix = (0, _styledComponents["default"])(InputHint).withConfig({
  displayName: "TextAreastyles__InputPrefix",
  componentId: "sc-15ybfsy-4"
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

var InputText = _styledComponents["default"].textarea.withConfig({
  displayName: "TextAreastyles__InputText",
  componentId: "sc-15ybfsy-5"
})(["padding:10px;border-radius:4px;border:solid 1px ", ";width:100%;padding-left:", ";box-sizing:border-box;z-index:-2;min-width:", ";min-height:", ";&:focus{outline:0;border:solid 1px ", ";}&::-moz-focus-inner{border:0;}&::placeholder{color:transparent;}"], function (props) {
  return props.error ? (0, _Themes.handleThemeFromObject)(props.theme, 'colors.red', '#dc3545') : (0, _Themes.handleThemeFromObject)(props.theme, 'colors.border', '#e8ebee');
}, function (props) {
  return props.padding || null;
}, function (_ref) {
  var minWidth = _ref.minWidth;
  return minWidth || '190px';
}, function (_ref2) {
  var minHeight = _ref2.minHeight;
  return minHeight || '42px';
}, function (props) {
  return props.error ? (0, _Themes.handleThemeFromObject)(props.theme, 'colors.red', '#dc3545') : (0, _Themes.handleThemeFromObject)(props.theme, 'colors.primary', '#009dff');
});

exports.InputText = InputText;

var InputHelper = _styledComponents["default"].div.withConfig({
  displayName: "TextAreastyles__InputHelper",
  componentId: "sc-15ybfsy-6"
})(["display:", ";position:", ";width:100%;top:auto;padding:", ";& > *{color:", ";fill:", ";}"], function (props) {
  return props.visible ? 'block' : 'none';
}, function (props) {
  return props.afterError ? 'relative' : 'absolute';
}, function (props) {
  return props.afterError ? '0px' : '12px 10px';
}, function (props) {
  return (0, _Themes.handleThemeFromObject)(props.theme, 'colors.dark-text38', '#b6c2c9');
}, function (props) {
  return (0, _Themes.handleThemeFromObject)(props.theme, 'colors.dark-text38', '#b6c2c9');
});

exports.InputHelper = InputHelper;
var InputHelperIcon = (0, _styledComponents["default"])(_Icons.FaInfoCircle).withConfig({
  displayName: "TextAreastyles__InputHelperIcon",
  componentId: "sc-15ybfsy-7"
})(["position:absolute;width:15px;height:15px;margin:1px 0px;top:calc(50% - 9px);"]);
exports.InputHelperIcon = InputHelperIcon;

var InputHelperText = _styledComponents["default"].div.withConfig({
  displayName: "TextAreastyles__InputHelperText",
  componentId: "sc-15ybfsy-8"
})(["margin-left:18px;padding-left:5px;font-size:12px;"]);

exports.InputHelperText = InputHelperText;

var InputAutoCompleteList = _styledComponents["default"].div.withConfig({
  displayName: "TextAreastyles__InputAutoCompleteList",
  componentId: "sc-15ybfsy-9"
})(["position:absolute;border-radius:4px;box-shadow:0 1px 2px 0 rgba(0,0,0,0.12);z-index:99;top:100%;left:0;right:0;"]);

exports.InputAutoCompleteList = InputAutoCompleteList;

var InputAutoCompleteItem = _styledComponents["default"].div.withConfig({
  displayName: "TextAreastyles__InputAutoCompleteItem",
  componentId: "sc-15ybfsy-10"
})(["padding:10px;cursor:pointer;background-color:", ";color:#8c9fa9;&:hover{background-color:", ";}"], function (props) {
  return (0, _Themes.handleThemeFromObject)(props.theme, 'colors.white', '#ffffff');
}, function (props) {
  return (0, _Themes.handleThemeFromObject)(props.theme, 'colors.gray7', '#f9fafa');
});

exports.InputAutoCompleteItem = InputAutoCompleteItem;