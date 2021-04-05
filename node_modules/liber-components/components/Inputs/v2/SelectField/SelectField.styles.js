"use strict";

require("core-js/modules/es6.object.define-property");

require("core-js/modules/es6.string.iterator");

require("core-js/modules/es6.weak-map");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Label = exports.Error = exports.Hint = exports.Close = exports.Icon = exports.Check = exports.Option = exports.OptionsContainer = exports.Input = exports.InputShell = exports.Container = exports.Tag = void 0;

require("core-js/modules/es6.symbol");

require("core-js/modules/es6.array.index-of");

require("core-js/modules/web.dom.iterable");

require("core-js/modules/es6.array.iterator");

require("core-js/modules/es6.object.to-string");

require("core-js/modules/es6.object.keys");

var _react = _interopRequireDefault(require("react"));

var _styledComponents = _interopRequireWildcard(require("styled-components"));

var _reactPerfectScrollbar = _interopRequireDefault(require("react-perfect-scrollbar"));

var _Icons = require("../../../Icons");

var _Themes = require("../../../Themes");

var _Tags = require("../../../Tags");

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function _getRequireWildcardCache() { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; if (obj != null) { var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

var getTheme = function getTheme(value, fallback) {
  return (0, _styledComponents.css)(["", ""], function (props) {
    return (0, _Themes.handleThemeFromObject)(props.theme, value, fallback);
  });
};

var Tag = (0, _styledComponents["default"])(_Tags.Tag).withConfig({
  displayName: "SelectFieldstyles__Tag",
  componentId: "sc-1mtgqt4-0"
})(["white-space:nowrap;"]);
exports.Tag = Tag;

var Container = _styledComponents["default"].div.withConfig({
  displayName: "SelectFieldstyles__Container",
  componentId: "sc-1mtgqt4-1"
})(["position:relative;width:100%;min-width:300px;"]);

exports.Container = Container;

var bg = function bg(props) {
  return props.disabled ? (0, _styledComponents.css)(["background-color:", ";cursor:default;"], getTheme('colors.border', '#e8ebee')) : (0, _styledComponents.css)(["background-color:", ";cursor:text;"], getTheme('colors.white', '#ffffff'));
};

var InputShell = _styledComponents["default"].div.withConfig({
  displayName: "SelectFieldstyles__InputShell",
  componentId: "sc-1mtgqt4-2"
})(["height:48px;border-radius:4px;width:100%;outline:0;padding:0px 68px 0px 16px;display:flex;justify-content:flex-start;align-items:center;box-sizing:border-box;transition:border 200ms cubic-bezier(0.645,0.045,0.355,1);will-change:border;border:1px solid ", ";", " ", " ", " ", " & > input:not(:last-child){margin-right:6px;}"], getTheme('colors.border', '#e8ebee'), bg, function (props) {
  return props.basic ? null : (0, _styledComponents.css)(["cursor:default;"]);
}, function (props) {
  return props.open ? (0, _styledComponents.css)(["border:1px solid ", ";"], getTheme('colors.primary', '#009dff')) : null;
}, function (props) {
  return props.error ? (0, _styledComponents.css)(["border:1px solid ", ";"], getTheme('colors.error', '#dc3545')) : null;
});

exports.InputShell = InputShell;

var Input = _styledComponents["default"].input.attrs(function (_ref) {
  var multiple = _ref.multiple;
  return {
    type: 'text',
    size: multiple ? '1' : undefined
  };
}).withConfig({
  displayName: "SelectFieldstyles__Input",
  componentId: "sc-1mtgqt4-3"
})(["font-family:", ";font-size:", ";line-height:20px;text-align:left;color:", ";outline:0;border:0px;", " ", " &:focus{width:100%;width:fill-available;}&::-moz-focus-inner{border:0;}&::placeholder{color:", ";}&:-webkit-autofill,&:-webkit-autofill:hover,&:-webkit-autofill:focus,&:-webkit-autofill:active{-webkit-box-shadow:0 0 0px 1000px #fff inset !important;transition:background-color 99999s ease-in-out 0s;}", ""], getTheme('fontFamily', 'Roboto'), getTheme('font-sizes.p', '16px'), getTheme('colors.dark-text70', '#798e9b'), bg, function (props) {
  return props.basic ? null : (0, _styledComponents.css)(["cursor:default;pointer-events:none;"]);
}, getTheme('colors.dark-text38', '#b6c2c9'), function (props) {
  return props["static"] ? (0, _styledComponents.css)(["pointer-events:none;"]) : null;
});

exports.Input = Input;
var OptionsContainer = (0, _styledComponents["default"])(_reactPerfectScrollbar["default"]).withConfig({
  displayName: "SelectFieldstyles__OptionsContainer",
  componentId: "sc-1mtgqt4-4"
})(["display:flex;flex-direction:column;justify-content:flex-start;align-items:stretch;padding:12px 0px;max-height:224px;overflow:auto;box-sizing:border-box;& > div:first-of-type{border-top:1px solid ", ";border-radius:4px 4px 0px 0px;}& .ps__rail-y{margin-top:12px;margin-bottom:12px;}& .ps__thumb-y{background-color:#e2e2e2 !important;right:4px;}& .ps__rail-y:hover,& .ps--clicking{background-color:transparent !important;}& .ps__rail-y:hover .ps__thumb-y,& .ps__rail-y.ps--clicking .ps__thumb-y{width:8px;}& .ps__rail-y{z-index:10;}"], getTheme('colors.gray5', '#ecf0f3'));
exports.OptionsContainer = OptionsContainer;

var Option = _styledComponents["default"].div.withConfig({
  displayName: "SelectFieldstyles__Option",
  componentId: "sc-1mtgqt4-5"
})(["", " ", ""], function (_ref2) {
  var disabled = _ref2.disabled;
  return disabled ? (0, _styledComponents.css)(["pointer-events:none;"]) : null;
}, function (props) {
  return !props.raw ? (0, _styledComponents.css)(["display:flex;justify-content:flex-start;align-items:center;padding:0px 16px;color:", ";font-family:", ";font-size:", ";line-height:22px;min-height:40px;white-space:nowrap;cursor:pointer;transition:color 200ms cubic-bezier(0.645,0.045,0.355,1),background-color 200ms cubic-bezier(0.645,0.045,0.355,1);will-change:color,background-color;&:hover{color:", ";background-color:", ";}& > div > span{color:", ";}", " ", " ", ""], getTheme('colors.dark-text70', '#798e9b'), getTheme('fontFamily', 'Roboto'), getTheme('font-sizes.p', '16px'), getTheme('colors.primary70', '#4cbaff'), getTheme('colors.primary6', '#f0f9ff'), getTheme('colors.primary', '#009dff'), function (_ref3) {
    var checked = _ref3.checked;
    return checked ? (0, _styledComponents.css)(["color:", ";"], getTheme('colors.dark-text', '#405f71')) : null;
  }, function (_ref4) {
    var focused = _ref4.focused;
    return focused ? (0, _styledComponents.css)(["color:", ";background-color:", ";"], getTheme('colors.primary70', '#4cbaff'), getTheme('colors.primary6', '#f0f9ff')) : null;
  }, function (_ref5) {
    var disabled = _ref5.disabled;
    return disabled ? (0, _styledComponents.css)(["color:", ";"], getTheme('colors.dark-text38', '#b6c2c9')) : null;
  }) : null;
});

exports.Option = Option;
var pos = (0, _styledComponents.css)(["position:absolute;right:16px;top:calc(50% - 10px);"]);
var Check = (0, _styledComponents["default"])(_Icons.MdCheck).withConfig({
  displayName: "SelectFieldstyles__Check",
  componentId: "sc-1mtgqt4-6"
})(["--size:20px;min-width:var(--size);max-width:var(--size);min-height:var(--size);max-height:var(--size);fill:", ";margin-left:auto;"], getTheme('dark-text', '#405f71'));
exports.Check = Check;
var Icon = (0, _styledComponents["default"])(function (_ref6) {
  var hide = _ref6.hide,
      error = _ref6.error,
      props = _objectWithoutProperties(_ref6, ["hide", "error"]);

  return _react["default"].createElement(_Icons.MdChevronDown, props);
}).withConfig({
  displayName: "SelectFieldstyles__Icon",
  componentId: "sc-1mtgqt4-7"
})(["--size:20px;min-width:var(--size);max-width:var(--size);min-height:var(--size);max-height:var(--size);pointer-events:none;opacity:", ";transition:opacity 250ms cubic-bezier(0.23,1,0.32,1) 0ms;", " ", ""], function (_ref7) {
  var hide = _ref7.hide;
  return hide ? '0' : '1';
}, pos, function (_ref8) {
  var error = _ref8.error;
  return error ? (0, _styledComponents.css)(["fill:", ";"], getTheme('colors.error', '#dc3545')) : (0, _styledComponents.css)(["fill:", ";"], getTheme('colors.dark-text70', '#798e9b'));
});
exports.Icon = Icon;
var closeShow = (0, _styledComponents.css)(["opacity:1;pointer-events:all;"]);
var Close = (0, _styledComponents["default"])(function (_ref9) {
  var show = _ref9.show,
      props = _objectWithoutProperties(_ref9, ["show"]);

  return _react["default"].createElement(_Icons.MdCloseCircle, props);
}).withConfig({
  displayName: "SelectFieldstyles__Close",
  componentId: "sc-1mtgqt4-8"
})(["--size:20px;min-width:var(--size);max-width:var(--size);min-height:var(--size);max-height:var(--size);fill:", ";opacity:0;pointer-events:none;", " transition:opacity 250ms cubic-bezier(0.23,1,0.32,1) 0ms;z-index:2;cursor:pointer;", ""], getTheme('colors.dark-text70', '#798e9b'), function (_ref10) {
  var show = _ref10.show;
  return show && closeShow;
}, pos);
exports.Close = Close;

var Hint = _styledComponents["default"].div.withConfig({
  displayName: "SelectFieldstyles__Hint",
  componentId: "sc-1mtgqt4-9"
})(["position:absolute;top:calc(50% - 22px);left:6px;padding:10px 12px;color:", ";transition:all 200ms cubic-bezier(0.645,0.045,0.355,1);pointer-events:none;overflow:hidden;"], function (props) {
  return props.visible ? getTheme('colors.dark-text38', '#b6c2c9') : 'transparent';
});

exports.Hint = Hint;

var Error = _styledComponents["default"].div.withConfig({
  displayName: "SelectFieldstyles__Error",
  componentId: "sc-1mtgqt4-10"
})(["position:absolute;top:100%;left:0px;width:auto;text-align:left;padding:12px 6px;color:", ";font-size:12px;line-height:12px;transition:all 200ms cubic-bezier(0.645,0.045,0.355,1);&:before{content:'';}"], function (props) {
  return props.visible ? getTheme('colors.error', '#dc3545') : 'transparent';
});

exports.Error = Error;

var setColor = function setColor(open, error, disabled) {
  if (disabled) return getTheme('colors.dark-text38', '#b6c2c9');
  if (error) return getTheme('colors.error', '#dc3545');
  if (open) return getTheme('colors.primary', '#009dff');
  return getTheme('colors.dark-text60', '#8c9fa9');
};

var $open = (0, _styledComponents.css)(["font-size:var(--open-label-font-size,12px);line-height:14px;top:-7px;"]);
var closed = (0, _styledComponents.css)(["font-size:var(--closed-label-font-size,20px);line-height:22px;top:calc(50% - 11px);"]);

var labelBehavior = function labelBehavior(props) {
  var focused = props.focused,
      valid = props.valid,
      open = props.open,
      error = props.error,
      disabled = props.disabled;
  return (0, _styledComponents.css)(["color:", ";", ""], setColor(open, error, disabled), (focused || valid || open) && !disabled ? $open : closed);
};

var Label = _styledComponents["default"].label.withConfig({
  displayName: "SelectFieldstyles__Label",
  componentId: "sc-1mtgqt4-11"
})(["position:absolute;padding:0px 6px;left:6px;text-align:left;font-family:Roboto;background-color:transparent;transition:all 200ms cubic-bezier(0.645,0.045,0.355,1);pointer-events:none;width:auto;overflow:hidden;white-space:nowrap;text-overflow:ellipsis;user-select:none;z-index:1;", " &:before{content:'';position:absolute;", " left:0px;top:calc(50%);width:100%;z-index:-1;}"], labelBehavior, function (props) {
  return props.disabled ? (0, _styledComponents.css)(["border-bottom:0px;"]) : (0, _styledComponents.css)(["border-bottom:3px solid ", ";"], getTheme('colors.white', '#ffffff'));
});

exports.Label = Label;