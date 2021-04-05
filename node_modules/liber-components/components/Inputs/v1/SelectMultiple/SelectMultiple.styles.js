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
exports.Tooltip = exports.Checkbox = exports.SelectBox = exports.SelectCounter = exports.SelectHeader = exports.SelectionContainer = exports.CardContent = exports.Label = exports.FieldBox = exports.FieldContainer = void 0;

var _styledComponents = _interopRequireWildcard(require("styled-components"));

var _Card = require("../../../Card");

var _Themes = require("../../../Themes");

var _Checkbox = _interopRequireDefault(require("../Checkbox"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function _getRequireWildcardCache() { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; if (obj != null) { var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

var FieldContainer = _styledComponents["default"].div.withConfig({
  displayName: "SelectMultiplestyles__FieldContainer",
  componentId: "zfh1dm-0"
})(["position:relative;"]);

exports.FieldContainer = FieldContainer;

var FieldBox = _styledComponents["default"].div.withConfig({
  displayName: "SelectMultiplestyles__FieldBox",
  componentId: "zfh1dm-1"
})(["--color:", ";min-width:140px;max-width:140px;height:36px;line-height:36px;padding:0 30px 0 8px;color:", ";font-weight:", ";font-size:", ";font-family:", ";transition:all 450ms cubic-bezier(0.23,1,0.32,1) 0ms;border:2px solid var(--color);border-radius:4px;position:relative;cursor:pointer;white-space:nowrap;overflow:hidden;&:after{--height:8px;--width:7px;content:\"\";opacity:0.8;border-top:var(--height) solid var(--color);border-right:var(--width) solid transparent;border-bottom:var(--height) solid transparent;border-left:var(--width) solid transparent;border-radius:4px;position:absolute;right:8px;top:calc(50% - (var(--height) - (var(--height)/2)));transition:all 450ms cubic-bezier(0.23,1,0.32,1) 0ms;}& span{display:block;overflow:hidden;}"], function (props) {
  if (props.layout === 'open') return (0, _Themes.handleThemeFromObject)(props.theme, 'colors.liberBlue', '#019DFF');
  if (props.layout === 'unselected') return (0, _Themes.handleThemeFromObject)(props.theme, 'colors.bluishMediumDarkGrey', '#C7CFD3');
  return (0, _Themes.handleThemeFromObject)(props.theme, 'colors.bluishDarkGrey', '#7E8D95');
}, function (props) {
  return (0, _Themes.handleThemeFromObject)(props.theme, 'colors.bluishDarkGrey', '#496072');
}, function (props) {
  return (0, _Themes.handleThemeFromObject)(props.theme, 'fontWeights.bold', 500);
}, function (props) {
  return (0, _Themes.handleThemeFromObject)(props.theme, 'fontSizes.p', '16px');
}, function (props) {
  return (0, _Themes.handleThemeFromObject)(props.theme, 'fontFamily', 'Roboto');
});

exports.FieldBox = FieldBox;

var Label = _styledComponents["default"].div.withConfig({
  displayName: "SelectMultiplestyles__Label",
  componentId: "zfh1dm-2"
})(["color:", ";font-weight:", ";font-size:", ";font-family:", ";line-height:14px;margin:8px 0px;transition:all 450ms cubic-bezier(0.23,1,0.32,1) 0ms;"], function (props) {
  if (props.layout === 'open') return (0, _Themes.handleThemeFromObject)(props.theme, 'colors.liberBlue', '#019DFF');
  if (props.layout === 'unselected') return (0, _Themes.handleThemeFromObject)(props.theme, 'colors.bluishMediumDarkGrey', '#C7CFD3');
  return (0, _Themes.handleThemeFromObject)(props.theme, 'colors.bluishBlack', '#496072');
}, function (props) {
  return (0, _Themes.handleThemeFromObject)(props.theme, 'fontWeights.medium', 500);
}, function (props) {
  return (0, _Themes.handleThemeFromObject)(props.theme, 'fontSizes.mobileLarge', '14px');
}, function (props) {
  return (0, _Themes.handleThemeFromObject)(props.theme, 'fontFamily', 'Roboto');
});

exports.Label = Label;
var CardContent = (0, _styledComponents["default"])(_Card.CardContent).withConfig({
  displayName: "SelectMultiplestyles__CardContent",
  componentId: "zfh1dm-3"
})(["padding:8px 8px 0px 8px;display:flex;flex-direction:column;"]);
exports.CardContent = CardContent;
var SelectionContainer = (0, _styledComponents["default"])(_Card.Card).withConfig({
  displayName: "SelectMultiplestyles__SelectionContainer",
  componentId: "zfh1dm-4"
})(["--width:340px;width:var(--width);margin-top:2px;position:absolute;transition:all 450ms cubic-bezier(0.23,1,0.32,1) 0ms;", " ", ""], function (props) {
  if (props.open) {
    return (0, _styledComponents.css)(["pointer-events:auto;"]);
  }

  return (0, _styledComponents.css)(["opacity:0;pointer-events:none;transform:translateY(-42px);"]);
}, function (props) {
  if (props.position === 'left') return (0, _styledComponents.css)(["left:0px;"]);
  if (props.position === 'center') return (0, _styledComponents.css)(["left:calc(-1*(var(--width)/2) + 50%);"]);
  if (props.position === 'right') return (0, _styledComponents.css)(["right:0px;"]);
  return '';
});
exports.SelectionContainer = SelectionContainer;

var SelectHeader = _styledComponents["default"].div.withConfig({
  displayName: "SelectMultiplestyles__SelectHeader",
  componentId: "zfh1dm-5"
})(["display:flex;justify-content:space-between;align-items:center;padding:0px 8px 8px 8px;"]);

exports.SelectHeader = SelectHeader;

var SelectCounter = _styledComponents["default"].span.withConfig({
  displayName: "SelectMultiplestyles__SelectCounter",
  componentId: "zfh1dm-6"
})(["color:", ";font-weight:", ";font-size:", ";font-family:", ";"], function (props) {
  return (0, _Themes.handleThemeFromObject)(props.theme, 'colors.bluishDarkGrey', '#7E8D95');
}, function (props) {
  return (0, _Themes.handleThemeFromObject)(props.theme, 'fontWeights.regular', 400);
}, function (props) {
  return (0, _Themes.handleThemeFromObject)(props.theme, 'fontSizes.mobileMedium', '12px');
}, function (props) {
  return (0, _Themes.handleThemeFromObject)(props.theme, 'fontFamily', 'Roboto');
});

exports.SelectCounter = SelectCounter;

var SelectBox = _styledComponents["default"].div.withConfig({
  displayName: "SelectMultiplestyles__SelectBox",
  componentId: "zfh1dm-7"
})(["width:100%;display:flex;justify-content:flex-start;align-items:center;flex-wrap:wrap;"]);

exports.SelectBox = SelectBox;
var Checkbox = (0, _styledComponents["default"])(_Checkbox["default"]).withConfig({
  displayName: "SelectMultiplestyles__Checkbox",
  componentId: "zfh1dm-8"
})(["color:", ";font-weight:", ";font-size:", ";font-family:", ";cursor:pointer;margin:0px;", " & > span{padding:0px 0px 0px 25px;}& > span:before{width:17px;height:17px;background-color:", ";border-radius:4px;}&  > span:after{width:6px;height:12px;}"], function (props) {
  return (0, _Themes.handleThemeFromObject)(props.theme, 'colors.bluishDarkGrey', '#7E8D95');
}, function (props) {
  return (0, _Themes.handleThemeFromObject)(props.theme, 'fontWeights.regular', 400);
}, function (props) {
  return (0, _Themes.handleThemeFromObject)(props.theme, 'fontSizes.mobileMedium', '12px');
}, function (props) {
  return (0, _Themes.handleThemeFromObject)(props.theme, 'fontFamily', 'Roboto');
}, function (props) {
  if (!props.header) {
    return (0, _styledComponents.css)(["padding:6px 8px 4px 8px;border:1px solid ", ";border-radius:4px;background-color:", ";margin-right:8px;margin-bottom:8px;"], props.checked ? (0, _Themes.handleThemeFromObject)(props.theme, 'colors.mediumLightLiberBlue', '#BEE6FF') : (0, _Themes.handleThemeFromObject)(props.theme, 'colors.mediumGrey2', '#cecece'), props.checked ? (0, _Themes.handleThemeFromObject)(props.theme, 'colors.lightLiberBlue', '#E3F5FF') : (0, _Themes.handleThemeFromObject)(props.theme, 'colors.liberWhite', '#fafafa'));
  }

  return '';
}, function (props) {
  return (0, _Themes.handleThemeFromObject)(props.theme, 'colors.liberWhite', '#fafafa');
});
exports.Checkbox = Checkbox;

var Tooltip = _styledComponents["default"].div.withConfig({
  displayName: "SelectMultiplestyles__Tooltip",
  componentId: "zfh1dm-9"
})(["color:", ";font-weight:", ";font-size:", ";font-family:", ";"], function (props) {
  return (0, _Themes.handleThemeFromObject)(props.theme, 'colors.mediumGrey', '#A4A4A4');
}, function (props) {
  return (0, _Themes.handleThemeFromObject)(props.theme, 'fontWeights.medium', 500);
}, function (props) {
  return (0, _Themes.handleThemeFromObject)(props.theme, 'fontSizes.mobileMedium', '12px');
}, function (props) {
  return (0, _Themes.handleThemeFromObject)(props.theme, 'fontFamily', 'Roboto');
});

exports.Tooltip = Tooltip;