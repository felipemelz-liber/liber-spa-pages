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
exports["default"] = void 0;

var _styledComponents = _interopRequireWildcard(require("styled-components"));

var _Themes = require("../../../Themes");

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function _getRequireWildcardCache() { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; if (obj != null) { var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

var ripple = (0, _styledComponents.keyframes)(["0%{box-shadow:0px 0px 0px 1px rgba(0,0,0,0);}50%{box-shadow:0px 0px 0px 15px rgba(0,0,0,0.1);}100%{box-shadow:0px 0px 0px 15px rgba(0,0,0,0);}"]);

var _default = _styledComponents["default"].label.withConfig({
  displayName: "Checkboxstyles",
  componentId: "sc-1kxp1mv-0"
})(["margin-top:16px;min-height:20px;*,*:before,*:after{box-sizing:border-box;}& input[type='checkbox']{display:none;}& input[type='checkbox']:checked + span:before{border-color:", ";background-color:", ";animation:", " 0.2s linear forwards;}& input[type='checkbox']:checked + span:after{transform:rotateZ(37deg) scale(1);}& span{display:inline-flex;justify-content:flex-start;align-items:", ";height:20px;position:relative;padding:0 30px;margin-bottom:0;cursor:pointer;vertical-align:bottom;font-weight:normal;color:", ";font-size:", ";font-weight:", ";font-family:", ";}& span:before,& span:after{position:absolute;content:'';transition:all 0.3s ease;transition-property:transform,border-color;}& span:before{left:0;top:0;border-radius:4px;width:20px;height:20px;border:1px solid ", ";background-color:", ";}& span:after{top:1px;left:6px;width:7px;height:14px;transform:rotateZ(37deg) scale(0);border-top:2px solid transparent;border-left:2px solid transparent;border-right:2px solid #fafafa;border-bottom:2px solid #fafafa;}"], function (props) {
  return (0, _Themes.handleThemeFromObject)(props.theme, 'checkbox.v2.color', '#009dff', props.color);
}, function (props) {
  return (0, _Themes.handleThemeFromObject)(props.theme, 'checkbox.v2.color', '#009dff', props.color);
}, ripple, function (props) {
  return props.labelAlign;
}, function (props) {
  return (0, _Themes.handleThemeFromObject)(props.theme, 'checkbox.v2.label', '#c6d1d8', props.labelColor);
}, function (props) {
  return (0, _Themes.handleThemeFromObject)(props.theme, 'fontSizes.mobileLarge', '14px');
}, function (props) {
  return (0, _Themes.handleThemeFromObject)(props.theme, 'fontWeights.regular', '400');
}, function (props) {
  return (0, _Themes.handleThemeFromObject)(props.theme, 'fontFamily', 'Roboto');
}, function (props) {
  return (0, _Themes.handleThemeFromObject)(props.theme, 'checkbox.v2.border', '#cecece');
}, function (props) {
  return (0, _Themes.handleThemeFromObject)(props.theme, 'checkbox.v2.background', '#fafdff');
});

exports["default"] = _default;