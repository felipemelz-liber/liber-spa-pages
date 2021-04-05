"use strict";

require("core-js/modules/es6.object.define-property");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Slider = exports.empty = void 0;

var _styledComponents = _interopRequireDefault(require("styled-components"));

var _Themes = require("../../Themes");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var empty = null;
exports.empty = empty;

var Slider = _styledComponents["default"].input.withConfig({
  displayName: "styles__Slider",
  componentId: "mqrhoq-0"
})(["width:", ";appearance:none;height:8.5px;background-color:", ";outline:none;border-radius:4.25px;border:solid 2px ", ";&::-webkit-slider-thumb{-webkit-appearance:none;border:0px;width:55px;height:6px;border-radius:3px;background-color:", ";;}&::-moz-range-thumb{border:0px;width:55px;height:6px;border-radius:3px;background-color:", ";;}&::-ms-thumb{border:0px;width:55px;height:6px;border-radius:3px;background-color:", ";;}&:focus{outline:none;}&::-moz-focus-outer{border:0;}&::-moz-range-track{background-color:", ";}"], function (props) {
  return props.width ? "".concat(props.width, "px") : '100%';
}, function (props) {
  return (0, _Themes.handleThemeFromObject)(props.theme, 'barChart.slider.background', '#fff');
}, function (props) {
  return (0, _Themes.handleThemeFromObject)(props.theme, 'barChart.slider.border', '#dfe3eb');
}, function (props) {
  return (0, _Themes.handleThemeFromObject)(props.theme, 'barChart.slider.border', '#dfe3eb');
}, function (props) {
  return (0, _Themes.handleThemeFromObject)(props.theme, 'barChart.slider.border', '#dfe3eb');
}, function (props) {
  return (0, _Themes.handleThemeFromObject)(props.theme, 'barChart.slider.border', '#dfe3eb');
}, function (props) {
  return (0, _Themes.handleThemeFromObject)(props.theme, 'barChart.slider.background', '#fff');
});

exports.Slider = Slider;
Slider.defaultProps = {
  type: 'range',
  valueAsNumber: true
};