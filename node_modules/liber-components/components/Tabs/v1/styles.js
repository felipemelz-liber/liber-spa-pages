"use strict";

require("core-js/modules/es6.object.define-property");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Slide = exports.Header = exports.BasicHeader = exports.Label = void 0;

var _styledComponents = _interopRequireDefault(require("styled-components"));

var _Themes = require("../../Themes");

var _Util = require("../../Util");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var Label = _styledComponents["default"].label.withConfig({
  displayName: "styles__Label",
  componentId: "sc-1j5mqhi-0"
})(["font-family:", ";font-size:", ";font-weight:", ";text-transform:uppercase;background-color:", ";color:", ";border-bottom:1px solid ", ";display:flex;justify-content:center;align-items:center;text-align:center;cursor:pointer;flex-grow:1;flex-basis:50%;margin-bottom:0px;& > input[type='radio']{display:none;}&:hover{color:", ";}"], function (props) {
  return (0, _Themes.handleThemeFromObject)(props.theme, 'tabs.label.fontFamily', 'Roboto');
}, function (props) {
  return (0, _Themes.handleThemeFromObject)(props.theme, 'tabs.label.fontSize', '20px');
}, function (props) {
  return (0, _Themes.handleThemeFromObject)(props.theme, 'tabs.label.fontWeight', '500');
}, function (props) {
  return (0, _Themes.handleThemeFromObject)(props.theme, 'tabs.label.background', 'transparent', props.labelBackgroundColor);
}, function (props) {
  return props.active ? (0, _Themes.handleThemeFromObject)(props.theme, 'tabs.label.active', '#009dff', props.labelActiveColor) : (0, _Themes.handleThemeFromObject)(props.theme, 'tabs.label.common', '#717171', props.labelCommonColor);
}, function (props) {
  return (0, _Themes.handleThemeFromObject)(props.theme, 'tabs.label.border', 'transparent', props.labelBorderColor);
}, function (props) {
  return (0, _Themes.handleThemeFromObject)(props.theme, 'tabs.label.active', '#009dff', props.labelActiveColor);
});

exports.Label = Label;

var BasicHeader = _styledComponents["default"].div.withConfig({
  displayName: "styles__BasicHeader",
  componentId: "sc-1j5mqhi-1"
})(["display:flex;height:100%;position:relative;"]);

exports.BasicHeader = BasicHeader;
var Header = (0, _styledComponents["default"])(BasicHeader).withConfig({
  displayName: "styles__Header",
  componentId: "sc-1j5mqhi-2"
})(["height:60px;align-items:center;width:100%;"]);
exports.Header = Header;

var Slide = _styledComponents["default"].div.withConfig({
  displayName: "styles__Slide",
  componentId: "sc-1j5mqhi-3"
})(["background:", ";width:", "%;height:4px;position:absolute;left:", "%;top:calc(100% - 2px);transition:left 0.3s ease-out;border:0px;"], function (props) {
  return (0, _Themes.handleThemeFromObject)(props.theme, 'tabs.slider', '#009dff', props.color ? (0, _Util.handleColor)(props.color) : null);
}, function (props) {
  return 100 / props.number;
}, function (props) {
  return 100 / props.number * props.current;
});

exports.Slide = Slide;