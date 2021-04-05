"use strict";

require("core-js/modules/es6.object.define-property");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.InputHelperText = exports.InputHelperIcon = exports.InputHelper = exports.InputText = exports.InputPrefix = exports.InputHint = exports.InputInactive = exports.InputLabel = exports.InputCaret = exports.InputError = exports.InputBar = exports.InputBase = void 0;

var _styledComponents = _interopRequireDefault(require("styled-components"));

var _reactInputMask = _interopRequireDefault(require("react-input-mask"));

var _Icons = require("../../Icons");

var _Themes = require("../../Themes");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var InputBase = _styledComponents["default"].div.withConfig({
  displayName: "Basestyles__InputBase",
  componentId: "sc-1qxhan1-0"
})(["display:block;position:relative;padding-top:12px;width:", ";outline:none;pointer-events:", ";opacity:", ";*{background-color:transparent;border:none;color:", ";line-height:24px;font-family:'Roboto',sans-serif;font-size:16px;font-weight:400;text-align:left;}"], function (props) {
  return props.width;
}, function (props) {
  return props.disabled ? 'none' : 'auto';
}, function (props) {
  return props.disabled ? '0.5' : '1';
}, function (props) {
  return (0, _Themes.handleThemeFromObject)(props.theme, 'fields.v2.text', '#4e4e4e');
});

exports.InputBase = InputBase;

var InputBar = _styledComponents["default"].hr.withConfig({
  displayName: "Basestyles__InputBar",
  componentId: "sc-1qxhan1-1"
})(["position:relative;z-index:4;background:", ";box-sizing:content-box;margin:0px;height:2px;width:100%;transform:translateY(-2px) ", ";transition:all 450ms cubic-bezier(0.23,1,0.32,1) 0ms;"], function (props) {
  if (props.error) return (0, _Themes.handleThemeFromObject)(props.theme, 'fields.v2.danger', '#f44336');
  if (props.valid) return (0, _Themes.handleThemeFromObject)(props.theme, 'fields.v2.text', '#4b6f85');
  return (0, _Themes.handleThemeFromObject)(props.theme, 'fields.v2.primary', '#009DFF');
}, function (props) {
  return props.open || props.error || props.valid ? 'scaleX(1)' : 'scaleX(0)';
});

exports.InputBar = InputBar;

var InputError = _styledComponents["default"].div.withConfig({
  displayName: "Basestyles__InputError",
  componentId: "sc-1qxhan1-2"
})(["width:auto;text-align:left;padding:4px 0px;color:", ";font-size:12px;line-height:12px;transition:all 200ms cubic-bezier(0.645,0.045,0.355,1);&:before{content:'';}"], function (props) {
  return props.visible ? (0, _Themes.handleThemeFromObject)(props.theme, 'fields.v2.danger', '#f44336') : 'transparent';
});

exports.InputError = InputError;

var InputCaret = _styledComponents["default"].div.withConfig({
  displayName: "Basestyles__InputCaret",
  componentId: "sc-1qxhan1-3"
})(["position:absolute;display:flex;align-items:center;justify-content:center;height:35px;width:35px;top:calc(50% - 18px);right:4px;pointer-events:none;&:before{content:'';position:absolute;display:block;height:35px;width:35px;background:", ";border-radius:50%;transform:", ";transition:all 200ms cubic-bezier(0.645,0.045,0.355,1);}&:after{content:'';width:0;height:0;padding:0;border-left:5.5px solid transparent;border-right:5.5px solid transparent;border-top:6px solid ", ";transform:", ";transition:all 100ms cubic-bezier(0.645,0.045,0.355,1);}"], function (props) {
  return props.focused ? (0, _Themes.handleThemeFromObject)(props.theme, 'fields.v2.caret.circle', '#e6e6e6') : 'transparent';
}, function (props) {
  return props.focused ? 'scale(1)' : 'scale(0)';
}, function (props) {
  return props.selected ? (0, _Themes.handleThemeFromObject)(props.theme, 'fields.v2.caret.selected', '#4e4e4e') : (0, _Themes.handleThemeFromObject)(props.theme, 'fields.v2.caret.unselected', '#a4a4a4');
}, function (props) {
  return props.open ? 'rotate(180deg)' : 'rotate(0deg)';
});

exports.InputCaret = InputCaret;

var setLabelColor = function setLabelColor(theme, valid, focused, error) {
  if (error) return (0, _Themes.handleThemeFromObject)(theme, 'fields.v2.danger', '#f44336');
  if (valid) return (0, _Themes.handleThemeFromObject)(theme, 'fields.v2.text', '#4b6f85');
  if (focused) return (0, _Themes.handleThemeFromObject)(theme, 'fields.v2.primary', '#009DFF');
  return (0, _Themes.handleThemeFromObject)(theme, 'fields.v2.inactive', '#C6D1D8');
};

var InputLabel = _styledComponents["default"].label.withConfig({
  displayName: "Basestyles__InputLabel",
  componentId: "sc-1qxhan1-4"
})(["position:absolute;text-align:left;font-size:", ";color:", ";top:", ";transition:all 200ms cubic-bezier(0.645,0.045,0.355,1);pointer-events:none;width:inherit;overflow:hidden;white-space:nowrap;text-overflow:ellipsis;user-select:none;"], function (props) {
  return props.focused || props.valid || props.open ? '12px' : '16px';
}, function (props) {
  return setLabelColor(props.theme, props.valid, props.focused, props.error);
}, function (props) {
  return props.focused || props.valid || props.open ? '0px' : '20px';
});

exports.InputLabel = InputLabel;

var InputInactive = _styledComponents["default"].div.withConfig({
  displayName: "Basestyles__InputInactive",
  componentId: "sc-1qxhan1-5"
})(["color:", ";"], function (props) {
  return props.visible ? (0, _Themes.handleThemeFromObject)(props.theme, 'fields.v2.secondary', '#C6D1D8') : 'transparent';
});

exports.InputInactive = InputInactive;

var InputHint = _styledComponents["default"].div.withConfig({
  displayName: "Basestyles__InputHint",
  componentId: "sc-1qxhan1-6"
})(["position:absolute;top:12px;padding:8px 0px;color:", ";transition:all 200ms cubic-bezier(0.645,0.045,0.355,1);pointer-events:none;width:inherit;overflow:hidden;"], function (props) {
  return props.visible ? (0, _Themes.handleThemeFromObject)(props.theme, 'fields.v2.secondary', '#C6D1D8') : 'transparent';
});

exports.InputHint = InputHint;
var InputPrefix = (0, _styledComponents["default"])(InputHint).withConfig({
  displayName: "Basestyles__InputPrefix",
  componentId: "sc-1qxhan1-7"
})(["display:flex;align-items:center;width:unset;height:40px;box-sizing:border-box;color:", ";& svg{--width:16px;--height:16px;min-height:var(--height);min-width:var(--width);fill:", ";transition:all 200ms cubic-bezier(0.645,0.045,0.355,1);}"], function (props) {
  if (!props.visible) return 'transparent';
  if (props.error && props.visible) return (0, _Themes.handleThemeFromObject)(props.theme, 'fields.v2.danger', '#dc3545');
  if (props.valid) return (0, _Themes.handleThemeFromObject)(props.theme, 'fields.v2.text', '#4b6f85');
  return props.focused ? (0, _Themes.handleThemeFromObject)(props.theme, 'fields.v2.primary', '#009dff') : (0, _Themes.handleThemeFromObject)(props.theme, 'fields.v2.inactive', '#C6D1D8');
}, function (props) {
  if (!props.visible) return 'transparent';
  if (props.error) return (0, _Themes.handleThemeFromObject)(props.theme, 'fields.v2.danger', '#009dff');
  return props.focused ? (0, _Themes.handleThemeFromObject)(props.theme, 'fields.v2.primary', '#009dff') : (0, _Themes.handleThemeFromObject)(props.theme, 'fields.v2.inactive', '#C6D1D8');
});
exports.InputPrefix = InputPrefix;
var InputText = (0, _styledComponents["default"])(_reactInputMask["default"]).withConfig({
  displayName: "Basestyles__InputText",
  componentId: "sc-1qxhan1-8"
})(["padding:8px 0px;border-bottom:2px solid ", ";box-shadow:none;width:100%;padding-left:", ";box-sizing:border-box;&:focus{outline:0;}&::-moz-focus-inner{border:0;}&::placeholder{color:transparent;}&:-webkit-autofill,&:-webkit-autofill:hover,&:-webkit-autofill:focus,&:-webkit-autofill:active{-webkit-box-shadow:0 0 0px 1000px #fff inset !important;transition:background-color 99999s ease-in-out 0s;}}"], function (props) {
  return (0, _Themes.handleThemeFromObject)(props.theme, 'fields.v2.inactive', '#C6D1D8');
}, function (props) {
  return props.padding || null;
});
exports.InputText = InputText;

var InputHelper = _styledComponents["default"].div.withConfig({
  displayName: "Basestyles__InputHelper",
  componentId: "sc-1qxhan1-9"
})(["display:", ";position:", ";width:100%;top:", ";padding:", ";& > *{color:", ";fill:", ";}"], function (props) {
  return props.visible ? 'block' : 'none';
}, function (props) {
  return props.afterError ? 'relative' : 'absolute';
}, function (props) {
  return props.afterError ? 'auto' : 'calc(42px + 12px + 2px)';
}, function (props) {
  return props.afterError ? '0px' : '4px 0px';
}, function (props) {
  return (0, _Themes.handleThemeFromObject)(props.theme, 'fields.v2.helper', '#cecece');
}, function (props) {
  return (0, _Themes.handleThemeFromObject)(props.theme, 'fields.v2.helper', '#cecece');
});

exports.InputHelper = InputHelper;
var InputHelperIcon = (0, _styledComponents["default"])(_Icons.FaInfoCircle).withConfig({
  displayName: "Basestyles__InputHelperIcon",
  componentId: "sc-1qxhan1-10"
})(["position:absolute;width:15px;height:15px;margin:1px 0px;"]);
exports.InputHelperIcon = InputHelperIcon;

var InputHelperText = _styledComponents["default"].div.withConfig({
  displayName: "Basestyles__InputHelperText",
  componentId: "sc-1qxhan1-11"
})(["margin-left:18px;padding-left:5px;font-size:12px;"]);

exports.InputHelperText = InputHelperText;