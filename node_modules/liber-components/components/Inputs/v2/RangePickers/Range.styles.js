"use strict";

require("core-js/modules/es6.object.define-property");

require("core-js/modules/es6.string.iterator");

require("core-js/modules/es6.weak-map");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Error = exports.Hint = exports.Label = exports.Range = exports.Container = exports.SelectionFooter = exports.SelectionSlider = exports.SelectionTimeContainer = exports.SelectionDateContainer = exports.SelectionBody = exports.InputShell = exports.InputContainer = exports.Separator = exports.Input = void 0;

require("core-js/modules/es6.symbol");

require("core-js/modules/es6.array.index-of");

require("core-js/modules/web.dom.iterable");

require("core-js/modules/es6.array.iterator");

require("core-js/modules/es6.object.to-string");

require("core-js/modules/es6.object.keys");

var _react = _interopRequireDefault(require("react"));

var _styledComponents = _interopRequireWildcard(require("styled-components"));

var _reactInputMask = _interopRequireDefault(require("react-input-mask"));

var _Themes = require("../../../Themes");

var _TimePicker = require("../TimePicker");

var _MonthCalendar = require("../../../Calendar/v2/MonthCalendar");

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

var ClearInput = function ClearInput(_ref) {
  var inputSize = _ref.inputSize,
      props = _objectWithoutProperties(_ref, ["inputSize"]);

  return _react["default"].createElement(_reactInputMask["default"], props);
}; // eslint-disable-line


var Input = (0, _styledComponents["default"])(ClearInput).attrs(function () {
  return {
    size: '1'
  };
}).withConfig({
  displayName: "Rangestyles__Input",
  componentId: "sc-1vkdf5k-0"
})(["font-family:", ";font-size:", ";line-height:20px;text-align:left;color:", ";outline:0;margin-right:12px;border:0px;background-color:transparent;width:", ";&::-moz-focus-inner{border:0;}&::placeholder{color:", ";}"], getTheme('fontFamily', 'Roboto'), getTheme('font-sizes.p', '16px'), getTheme('colors.dark-text70', '#798e9b'), function (props) {
  return props.inputSize || '100%';
}, getTheme('colors.dark-text38', '#b6c2c9'));
exports.Input = Input;

var Separator = _styledComponents["default"].div.withConfig({
  displayName: "Rangestyles__Separator",
  componentId: "sc-1vkdf5k-1"
})(["font-family:", ";font-size:", ";line-height:20px;text-align:left;color:", ";margin-right:12px;transition:opacity 250ms cubic-bezier(0.23,1,0.32,1) 0ms;opacity:", ";align-self:center;"], getTheme('fontFamily', 'Roboto'), getTheme('font-sizes.p', '16px'), getTheme('colors.dark-text38', '#b6c2c9'), function (props) {
  return props.show ? '1' : '0';
});

exports.Separator = Separator;

var InputContainer = _styledComponents["default"].div.withConfig({
  displayName: "Rangestyles__InputContainer",
  componentId: "sc-1vkdf5k-2"
})(["display:flex;justify-content:flex-start;align-items:center;width:", ";opacity:", ";"], function (props) {
  return props.full;
}, function (props) {
  return props.hide ? '0' : '1';
});

exports.InputContainer = InputContainer;

var InputShell = _styledComponents["default"].div.withConfig({
  displayName: "Rangestyles__InputShell",
  componentId: "sc-1vkdf5k-3"
})(["height:48px;border-radius:4px;min-width:340px;overflow:hidden;padding:0px 36px 0px 16px;display:flex;justify-content:flex-start;align-items:center;box-sizing:border-box;border:1px solid ", ";", " ", " ", " transition:all 200ms cubic-bezier(0.645,0.045,0.355,1);& > input:not(:last-child){margin-right:6px;}"], getTheme('colors.border', '#e8ebee'), function (props) {
  return props.open ? (0, _styledComponents.css)(["border:1px solid ", ";"], getTheme('colors.primary', '#009dff')) : null;
}, function (props) {
  return props.error ? (0, _styledComponents.css)(["border:1px solid ", ";"], getTheme('colors.error', '#dc3545')) : null;
}, function (props) {
  return props.disabled ? (0, _styledComponents.css)(["background-color:", ";pointer-events:none;cursor:default;"], getTheme('colors.border', '#e8ebee')) : (0, _styledComponents.css)(["background-color:", ";cursor:text;"], getTheme('colors.white', '#ffffff'));
});

exports.InputShell = InputShell;

var SelectionBody = _styledComponents["default"].div.withConfig({
  displayName: "Rangestyles__SelectionBody",
  componentId: "sc-1vkdf5k-4"
})(["max-width:340px;overflow:hidden;display:flex;flex-direction:column;justify-content:flex-start;border-right:1px solid #f4f5f7;&:last-child{border-right:0px;}"]);

exports.SelectionBody = SelectionBody;

var SelectionDateContainer = _styledComponents["default"].div.withConfig({
  displayName: "Rangestyles__SelectionDateContainer",
  componentId: "sc-1vkdf5k-5"
})(["padding:32px;border-right:1px solid #f4f5f7;&:last-child{border-right:0px;}"]);

exports.SelectionDateContainer = SelectionDateContainer;

var SelectionTimeContainer = _styledComponents["default"].div.withConfig({
  displayName: "Rangestyles__SelectionTimeContainer",
  componentId: "sc-1vkdf5k-6"
})(["width:100%;height:100%;flex-grow:1;& > ", "{width:100%;}"], _TimePicker.TimeContainer);

exports.SelectionTimeContainer = SelectionTimeContainer;

var position = function position() {
  var show = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 'date';
  return {
    date: (0, _styledComponents.css)(["transform:translate(0px);"]),
    time: (0, _styledComponents.css)(["transform:translate(-340px);"])
  }[show];
};

var SelectionSlider = _styledComponents["default"].div.withConfig({
  displayName: "Rangestyles__SelectionSlider",
  componentId: "sc-1vkdf5k-7"
})(["width:680px;display:flex;align-items:stretch;transition:transform 250ms cubic-bezier(0.23,1,0.32,1) 0ms;", ""], function (props) {
  return position(props.show);
});

exports.SelectionSlider = SelectionSlider;

var SelectionFooter = _styledComponents["default"].div.withConfig({
  displayName: "Rangestyles__SelectionFooter",
  componentId: "sc-1vkdf5k-8"
})(["height:48px;display:flex;justify-content:center;align-items:center;border-top:1px solid ", ";margin-top:auto;"], getTheme('colors.border', '#e8ebee'));

exports.SelectionFooter = SelectionFooter;

var Container = _styledComponents["default"].div.withConfig({
  displayName: "Rangestyles__Container",
  componentId: "sc-1vkdf5k-9"
})(["display:flex;justify-content:flex-start;align-items:stretch;"]);

exports.Container = Container;
var checked = (0, _styledComponents.css)(["& > ", "{margin-right:0px;}& + *{margin-left:4px;}"], _MonthCalendar.Unit);
var empty = (0, _styledComponents.css)(["background-color:transparent;"]);
var notEmpty = (0, _styledComponents.css)(["background-color:", ";"], getTheme('colors.light-blue75', '#f0f9ff'));
var Range = (0, _styledComponents["default"])(function (_ref2) {
  var start = _ref2.start,
      e = _ref2.empty,
      props = _objectWithoutProperties(_ref2, ["start", "empty"]);

  return _react["default"].createElement("div", props);
}).withConfig({
  displayName: "Rangestyles__Range",
  componentId: "sc-1vkdf5k-10"
})(["", " height:36px;& > ", "{margin-right:4px;cursor:pointer!important;}", " &:last-child > ", "{margin-right:0px!important;margin-left:0px!important;}"], function (props) {
  return props.e ? empty : notEmpty;
}, _MonthCalendar.Unit, function (props) {
  return props.checked && !props.start && checked;
}, _MonthCalendar.Unit);
exports.Range = Range;
var $open = (0, _styledComponents.css)(["font-size:12px;line-height:14px;top:-7px;"]);
var closed = (0, _styledComponents.css)(["font-size:20px;line-height:22px;top:calc(50% - 11px);"]);

var Label = _styledComponents["default"].label.withConfig({
  displayName: "Rangestyles__Label",
  componentId: "sc-1vkdf5k-11"
})(["position:absolute;padding:0px 6px;left:6px;text-align:left;background-color:transparent;transition:all 200ms cubic-bezier(0.645,0.045,0.355,1);pointer-events:none;width:auto;overflow:hidden;white-space:nowrap;text-overflow:ellipsis;user-select:none;z-index:1;", " color:", ";", " ", " &:before{content:\"\";position:absolute;", " left:0px;top:calc(50%);width:100%;z-index:-1;}"], function (props) {
  return props.open ? $open : closed;
}, getTheme('colors.dark-text70', '#798e9b'), function (props) {
  return props.error ? (0, _styledComponents.css)(["color:", ";"], getTheme('colors.error', '#dc3545')) : null;
}, function (props) {
  return props.disabled ? (0, _styledComponents.css)(["color:", ";"], getTheme('colors.dark-text38', '#b6c2c9')) : null;
}, function (props) {
  return props.disabled ? (0, _styledComponents.css)(["border-bottom:0px;"]) : (0, _styledComponents.css)(["border-bottom:3px solid ", ";"], getTheme('colors.white', '#ffffff'));
});

exports.Label = Label;

var Hint = _styledComponents["default"].div.withConfig({
  displayName: "Rangestyles__Hint",
  componentId: "sc-1vkdf5k-12"
})(["position:absolute;top:calc(50% - 22px);left:6px;padding:10px 12px;color:", ";transition:all 200ms cubic-bezier(0.645,0.045,0.355,1);pointer-events:none;overflow:hidden;"], function (props) {
  return props.visible ? getTheme('colors.dark-text38', '#b6c2c9') : 'transparent';
});

exports.Hint = Hint;

var Error = _styledComponents["default"].div.withConfig({
  displayName: "Rangestyles__Error",
  componentId: "sc-1vkdf5k-13"
})(["position:absolute;top:100%;left:0px;width:auto;text-align:left;padding:12px 6px;color:", ";font-size:12px;line-height:12px;transition:all 200ms cubic-bezier(0.645,0.045,0.355,1);&:before{content:'';}"], function (props) {
  return props.visible ? getTheme('colors.error', '#dc3545') : 'transparent';
});

exports.Error = Error;