"use strict";

require("core-js/modules/es6.object.define-property");

require("core-js/modules/es6.string.iterator");

require("core-js/modules/es6.weak-map");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Error = exports.Hint = exports.Range = exports.ActionFooter = exports.ClockContainer = exports.CalendarContainer = exports.PickerSlider = exports.PickerBody = exports.Row = exports.Label = exports.Close = exports.Icon = exports.InputSeparator = exports.DateInput = exports.TimeInput = exports.InputShell = exports.Container = void 0;

require("core-js/modules/es6.symbol");

require("core-js/modules/es6.array.index-of");

require("core-js/modules/web.dom.iterable");

require("core-js/modules/es6.array.iterator");

require("core-js/modules/es6.object.to-string");

require("core-js/modules/es6.object.keys");

var _react = _interopRequireDefault(require("react"));

var _styledComponents = _interopRequireWildcard(require("styled-components"));

var _reactInputMask = _interopRequireDefault(require("react-input-mask"));

var _MonthCalendar = require("../../../Calendar/v2/MonthCalendar");

var _Icons = require("../../../Icons");

var _Themes = require("../../../Themes");

var _TimePicker = require("../TimePicker");

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

var Container = _styledComponents["default"].div.withConfig({
  displayName: "DateTimeRangePickerstyles__Container",
  componentId: "sc-183g0ms-0"
})(["position:relative;"]);

exports.Container = Container;

var bg = function bg(props) {
  return props.disabled ? (0, _styledComponents.css)(["background-color:", ";cursor:default;"], getTheme('colors.border', '#e8ebee')) : (0, _styledComponents.css)(["background-color:", ";cursor:text;"], getTheme('colors.white', '#ffffff'));
};

var InputShell = _styledComponents["default"].div.withConfig({
  displayName: "DateTimeRangePickerstyles__InputShell",
  componentId: "sc-183g0ms-1"
})(["height:48px;border-radius:4px;padding:0px 68px 0px 16px;display:flex;justify-content:flex-start;align-items:center;box-sizing:border-box;", " ", " & > input:not(:last-child){margin-right:6px;}"], bg, function (props) {
  return props.error ? (0, _styledComponents.css)(["border:1px solid ", ";"], getTheme('colors.error', '#dc3545')) : (0, _styledComponents.css)(["border:1px solid ", ";"], getTheme('colors.border', '#e8ebee'));
});

exports.InputShell = InputShell;
var Input = (0, _styledComponents["default"])(_reactInputMask["default"]).withConfig({
  displayName: "DateTimeRangePickerstyles__Input",
  componentId: "sc-183g0ms-2"
})(["font-family:", ";font-size:", ";line-height:20px;text-align:left;color:", ";outline:0;border:0px;", " &::-moz-focus-inner{border:0;}&::placeholder{color:", ";}&:-webkit-autofill,&:-webkit-autofill:hover,&:-webkit-autofill:focus,&:-webkit-autofill:active{-webkit-box-shadow:0 0 0px 1000px #fff inset !important;transition:background-color 99999s ease-in-out 0s;}"], getTheme('fontFamily', 'Roboto'), getTheme('font-sizes.p', '16px'), getTheme('colors.dark-text70', '#798e9b'), bg, getTheme('colors.dark-text38', '#b6c2c9'));
var TimeInput = (0, _styledComponents["default"])(Input).withConfig({
  displayName: "DateTimeRangePickerstyles__TimeInput",
  componentId: "sc-183g0ms-3"
})(["width:65px;"]);
exports.TimeInput = TimeInput;
TimeInput.defaultProps = {
  mask: '99:99:99',
  maskChar: null
};
var DateInput = (0, _styledComponents["default"])(Input).withConfig({
  displayName: "DateTimeRangePickerstyles__DateInput",
  componentId: "sc-183g0ms-4"
})(["width:88px;"]);
exports.DateInput = DateInput;
DateInput.defaultProps = {
  mask: '99/99/9999',
  maskChar: null
};

var InputSeparator = _styledComponents["default"].span.withConfig({
  displayName: "DateTimeRangePickerstyles__InputSeparator",
  componentId: "sc-183g0ms-5"
})(["font-family:", ";font-size:", ";line-height:20px;text-align:left;color:", ";margin-right:10px;transition:opacity 250ms cubic-bezier(0.23,1,0.32,1) 0ms;opacity:", ";"], getTheme('fontFamily', 'Roboto'), getTheme('font-sizes.p', '16px'), getTheme('colors.dark-text38', '#b6c2c9'), function (props) {
  return props.show ? '1' : '0';
});

exports.InputSeparator = InputSeparator;
var pos = (0, _styledComponents.css)(["position:absolute;right:16px;top:calc(50% - 10px);"]);
var Icon = (0, _styledComponents["default"])(function (_ref) {
  var hide = _ref.hide,
      props = _objectWithoutProperties(_ref, ["hide"]);

  return _react["default"].createElement(_Icons.MdCalendarBlank, props);
}).withConfig({
  displayName: "DateTimeRangePickerstyles__Icon",
  componentId: "sc-183g0ms-6"
})(["--size:20px;min-width:var(--size);max-width:var(--size);min-height:var(--size);max-height:var(--size);pointer-events:none;opacity:", ";transition:opacity 250ms cubic-bezier(0.23,1,0.32,1) 0ms;", " ", ""], function (_ref2) {
  var hide = _ref2.hide;
  return hide ? '0' : '1';
}, pos, function (props) {
  return props.error ? (0, _styledComponents.css)(["fill:", ";"], getTheme('colors.error', '#dc3545')) : (0, _styledComponents.css)(["fill:", ";"], getTheme('colors.dark-text70', '#798e9b'));
});
exports.Icon = Icon;
var closeShow = (0, _styledComponents.css)(["opacity:1;pointer-events:all;"]);
var Close = (0, _styledComponents["default"])(function (_ref3) {
  var show = _ref3.show,
      props = _objectWithoutProperties(_ref3, ["show"]);

  return _react["default"].createElement(_Icons.MdCloseCircle, props);
}).withConfig({
  displayName: "DateTimeRangePickerstyles__Close",
  componentId: "sc-183g0ms-7"
})(["--size:20px;min-width:var(--size);max-width:var(--size);min-height:var(--size);max-height:var(--size);fill:", ";opacity:0;pointer-events:none;", " transition:opacity 250ms cubic-bezier(0.23,1,0.32,1) 0ms;z-index:2;cursor:pointer;", ""], getTheme('colors.dark-text70', '#798e9b'), function (_ref4) {
  var show = _ref4.show;
  return show && closeShow;
}, pos);
exports.Close = Close;

var setColor = function setColor(valid, error, disabled) {
  if (disabled) return getTheme('colors.dark-text38', '#b6c2c9');
  if (error) return getTheme('colors.error', '#dc3545');
  if (valid) return getTheme('colors.petroleum', '#4b6f85');
  return getTheme('colors.dark-text60', '#8c9fa9');
};

var $open = (0, _styledComponents.css)(["font-size:12px;line-height:14px;top:-7px;"]);
var closed = (0, _styledComponents.css)(["font-size:20px;line-height:22px;top:calc(50% - 11px);"]);

var labelBehavior = function labelBehavior(props) {
  var focused = props.focused,
      valid = props.valid,
      open = props.open,
      error = props.error,
      disabled = props.disabled;
  return (0, _styledComponents.css)(["color:", ";", ""], setColor(valid, error, disabled), (focused || valid || open) && !disabled ? $open : closed);
};

var Label = _styledComponents["default"].label.withConfig({
  displayName: "DateTimeRangePickerstyles__Label",
  componentId: "sc-183g0ms-8"
})(["position:absolute;padding:0px 6px;left:6px;text-align:left;background-color:transparent;transition:all 200ms cubic-bezier(0.645,0.045,0.355,1);pointer-events:none;width:auto;overflow:hidden;white-space:nowrap;text-overflow:ellipsis;user-select:none;z-index:1;", " &:before{content:'';position:absolute;", " left:0px;top:calc(50%);width:100%;z-index:-1;}"], labelBehavior, function (props) {
  return props.disabled ? (0, _styledComponents.css)(["border-bottom:0px;"]) : (0, _styledComponents.css)(["border-bottom:3px solid ", ";"], getTheme('colors.white', '#ffffff'));
});

exports.Label = Label;

var Row = _styledComponents["default"].div.attrs(function (_ref5) {
  var _ref5$size = _ref5.size,
      size = _ref5$size === void 0 ? 264 : _ref5$size;
  return {
    style: {
      '--clock-container-size': "".concat(size, "px"),
      '--last-unit-margin': "".concat(size - 64, "px")
    }
  };
}).withConfig({
  displayName: "DateTimeRangePickerstyles__Row",
  componentId: "sc-183g0ms-9"
})(["display:flex;justify-content:flex-start;align-items:stretch;"]);

exports.Row = Row;

var PickerBody = _styledComponents["default"].div.withConfig({
  displayName: "DateTimeRangePickerstyles__PickerBody",
  componentId: "sc-183g0ms-10"
})(["max-width:340px;overflow:hidden;display:flex;flex-direction:column;justify-content:flex-start;border-right:1px solid #f4f5f7;&:last-child{border-right:0px;}"]);

exports.PickerBody = PickerBody;

var position = function position() {
  var show = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 'calendar';
  return {
    calendar: (0, _styledComponents.css)(["transform:translate(0px);"]),
    clock: (0, _styledComponents.css)(["transform:translate(-340px);"])
  }[show];
};

var PickerSlider = _styledComponents["default"].div.withConfig({
  displayName: "DateTimeRangePickerstyles__PickerSlider",
  componentId: "sc-183g0ms-11"
})(["width:680px;display:flex;align-items:flex-start;transition:transform 250ms cubic-bezier(0.23,1,0.32,1) 0ms;", ""], function (props) {
  return position(props.show);
});

exports.PickerSlider = PickerSlider;

var CalendarContainer = _styledComponents["default"].div.withConfig({
  displayName: "DateTimeRangePickerstyles__CalendarContainer",
  componentId: "sc-183g0ms-12"
})(["padding:32px;border-right:1px solid #f4f5f7;&:last-child{border-right:0px;}"]);

exports.CalendarContainer = CalendarContainer;

var ClockContainer = _styledComponents["default"].div.withConfig({
  displayName: "DateTimeRangePickerstyles__ClockContainer",
  componentId: "sc-183g0ms-13"
})(["width:100%;height:100%;flex-grow:1;& > ", "{width:100%;}"], _TimePicker.TimeContainer);

exports.ClockContainer = ClockContainer;

var ActionFooter = _styledComponents["default"].div.withConfig({
  displayName: "DateTimeRangePickerstyles__ActionFooter",
  componentId: "sc-183g0ms-14"
})(["height:48px;display:flex;justify-content:center;align-items:center;border-top:1px solid ", ";margin-top:auto;"], getTheme('colors.border', '#e8ebee'));

exports.ActionFooter = ActionFooter;
var checked = (0, _styledComponents.css)(["& > ", "{margin-right:0px;}& + *{margin-left:4px;}"], _MonthCalendar.Unit);
var empty = (0, _styledComponents.css)(["background-color:transparent;"]);
var notEmpty = (0, _styledComponents.css)(["background-color:", ";"], getTheme('colors.light-blue75', '#f0f9ff'));
var Range = (0, _styledComponents["default"])(function (_ref6) {
  var start = _ref6.start,
      e = _ref6.empty,
      props = _objectWithoutProperties(_ref6, ["start", "empty"]);

  return _react["default"].createElement("div", props);
}).withConfig({
  displayName: "DateTimeRangePickerstyles__Range",
  componentId: "sc-183g0ms-15"
})(["", " height:36px;& > ", "{margin-right:4px;cursor:pointer!important;}", " &:last-child > ", "{margin-right:0px!important;margin-left:0px!important;}"], function (props) {
  return props.e ? empty : notEmpty;
}, _MonthCalendar.Unit, function (props) {
  return props.checked && !props.start && checked;
}, _MonthCalendar.Unit);
exports.Range = Range;

var Hint = _styledComponents["default"].div.withConfig({
  displayName: "DateTimeRangePickerstyles__Hint",
  componentId: "sc-183g0ms-16"
})(["position:absolute;top:calc(50% - 22px);left:6px;padding:10px 12px;color:", ";transition:all 200ms cubic-bezier(0.645,0.045,0.355,1);pointer-events:none;overflow:hidden;"], function (props) {
  return props.visible ? getTheme('colors.dark-text38', '#b6c2c9') : 'transparent';
});

exports.Hint = Hint;

var Error = _styledComponents["default"].div.withConfig({
  displayName: "DateTimeRangePickerstyles__Error",
  componentId: "sc-183g0ms-17"
})(["position:absolute;top:100%;left:0px;width:auto;text-align:left;padding:12px 6px;color:", ";font-size:12px;line-height:12px;transition:all 200ms cubic-bezier(0.645,0.045,0.355,1);&:before{content:'';}"], function (props) {
  return props.visible ? getTheme('colors.error', '#dc3545') : 'transparent';
});

exports.Error = Error;