"use strict";

require("core-js/modules/es6.object.define-property");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Icon = exports.IconContainer = exports.TooltipContainer = exports.Value = exports.Label = exports.Box = void 0;

var _styledComponents = _interopRequireDefault(require("styled-components"));

var _Icons = require("../Icons");

var _Themes = require("../Themes");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var Box = _styledComponents["default"].div.withConfig({
  displayName: "KeyValueDisplaystyles__Box",
  componentId: "sc-1ifmqrc-0"
})(["height:48px;background-color:#ffffff;padding:16px 24px;text-align:left;display:flex;justify-content:flex-start;align-items:center;flex-grow:1;border-right:1px solid ", ";box-sizing:border-box;position:relative;&:last-child{border-right:0px;}"], function (props) {
  return (0, _Themes.handleThemeFromObject)(props.theme, 'colors.gray5', '#ecf0f3');
});

exports.Box = Box;

var Label = _styledComponents["default"].div.withConfig({
  displayName: "KeyValueDisplaystyles__Label",
  componentId: "sc-1ifmqrc-1"
})(["color:", ";font-family:", ";font-size:", ";line-height:22px;margin-right:8px;"], function (props) {
  return (0, _Themes.handleThemeFromObject)(props.theme, 'colors.gray3', '#c6d1d8');
}, function (props) {
  return (0, _Themes.handleThemeFromObject)(props.theme, 'font-family', 'Roboto');
}, function (props) {
  return (0, _Themes.handleThemeFromObject)(props.theme, 'font-sizes.p', '16px');
});

exports.Label = Label;

var Value = _styledComponents["default"].div.withConfig({
  displayName: "KeyValueDisplaystyles__Value",
  componentId: "sc-1ifmqrc-2"
})(["font-family:", ";font-size:", ";font-weight:", ";line-height:22px;text-align:right;color:", ";margin-left:auto;overflow:hidden;white-space:nowrap;text-overflow:ellipsis;"], function (props) {
  return (0, _Themes.handleThemeFromObject)(props.theme, 'font-family', 'Roboto');
}, function (props) {
  return (0, _Themes.handleThemeFromObject)(props.theme, 'font-sizes.p', '16px');
}, function (props) {
  return (0, _Themes.handleThemeFromObject)(props.theme, 'font-weights.medium', 500);
}, function (props) {
  return (0, _Themes.handleThemeFromObject)(props.theme, 'colors.petroleum', '#4b6f85');
});

exports.Value = Value;

var TooltipContainer = _styledComponents["default"].div.withConfig({
  displayName: "KeyValueDisplaystyles__TooltipContainer",
  componentId: "sc-1ifmqrc-3"
})(["margin-left:8px;height:100%;display:flex;justify-content:center;align-items:center;"]);

exports.TooltipContainer = TooltipContainer;

var IconContainer = _styledComponents["default"].div.withConfig({
  displayName: "KeyValueDisplaystyles__IconContainer",
  componentId: "sc-1ifmqrc-4"
})(["cursor:default;display:flex;"]);

exports.IconContainer = IconContainer;
var Icon = (0, _styledComponents["default"])(_Icons.HelpCircle).withConfig({
  displayName: "KeyValueDisplaystyles__Icon",
  componentId: "sc-1ifmqrc-5"
})(["--size:16px;min-width:var(--size);min-height:var(--size);max-width:var(--size);max-height:var(--size);fill:", ";opacity:0.6;"], function (props) {
  return (0, _Themes.handleThemeFromObject)(props.theme, 'colors.petroleum', '#4b6f85');
});
exports.Icon = Icon;