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
exports.DisplayRow = exports.Display = exports.ActionContainer = exports.Label = exports.Value = void 0;

require("core-js/modules/es6.object.define-properties");

require("core-js/modules/es6.object.freeze");

var _styledComponents = _interopRequireWildcard(require("styled-components"));

var _Themes = require("../../Themes");

var _Resizable = _interopRequireDefault(require("../Resizable"));

var _Card = require("../../Card");

var _Util = require("../../Util");

var _StyledButtons = require("../../Buttons/v1/StyledButtons");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function _getRequireWildcardCache() { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; if (obj != null) { var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _templateObject2() {
  var data = _taggedTemplateLiteral(["\n    flex-basis: ", ";\n    background-color: ", ";\n    padding: 12px;\n\n    &:hover {\n      background-color: ", ";\n    }\n    &:hover ", " {\n      height: ", ";\n      opacity: ", ";\n    }\n    &:hover ", ":before {\n      transform: ", ";\n    }\n    &:hover ", "{\n      transform: ", ";\n      color: ", ";\n    }\n    &:hover ", " {\n      transform: ", ";\n      color: ", ";\n    }\n    & ", " {\n      height: 0px;\n      opacity: 0;\n    }\n"]);

  _templateObject2 = function _templateObject2() {
    return data;
  };

  return data;
}

function _templateObject() {
  var data = _taggedTemplateLiteral(["\n    margin-top: 0px;\n\n    & ", " {\n      width: 100%;\n      height: 30px;\n    }\n    & ", " {\n      width: 100%;\n      height: 30px;\n    }\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

var Value = (0, _styledComponents["default"])(_Resizable["default"]).withConfig({
  displayName: "styles__Value",
  componentId: "h1txsb-0"
})(["font-family:", ";font-size:", ";font-weight:", ";color:", ";line-height:0.8em;transition:all 100ms linear;position:relative;margin-left:", ";margin-bottom:8px;box-sizing:border-box;", ""], function (props) {
  return (0, _Themes.handleThemeFromObject)(props.theme, 'actionDisplay.value.fontFamily', 'Roboto');
}, function (props) {
  return (0, _Themes.handleThemeFromObject)(props.theme, 'actionDisplay.value.fontSize', '28px');
}, function (props) {
  return (0, _Themes.handleThemeFromObject)(props.theme, 'actionDisplay.value.fontWeight', '700');
}, function (props) {
  return (0, _Themes.handleThemeFromObject)(props.theme, 'actionDisplay.value.color', '#717171');
}, function (props) {
  return props.prefix && props.prefix.length > 0 ? '26px' : null;
}, function (props) {
  return props.prefix && props.prefix.length > 0 ? (0, _styledComponents.css)(["&:before{position:absolute;content:\"", "\";font-size:50%;line-height:50%;top:5px;right:100%;}"], props.prefix) : null;
});
exports.Value = Value;

var Label = _styledComponents["default"].div.withConfig({
  displayName: "styles__Label",
  componentId: "h1txsb-1"
})(["font-family:", ";font-weight:", ";font-size:", ";color:", ";text-align:center;transition:all 100ms linear;"], function (props) {
  return (0, _Themes.handleThemeFromObject)(props.theme, 'actionDisplay.label.fontFamily', 'Roboto');
}, function (props) {
  return (0, _Themes.handleThemeFromObject)(props.theme, 'actionDisplay.label.fontWeight', '400');
}, function (props) {
  return (0, _Themes.handleThemeFromObject)(props.theme, 'actionDisplay.label.fontSize', '20px');
}, function (props) {
  return (0, _Themes.handleThemeFromObject)(props.theme, 'actionDisplay.label', '#717171');
});

exports.Label = Label;

var ActionContainer = _styledComponents["default"].div.withConfig({
  displayName: "styles__ActionContainer",
  componentId: "h1txsb-2"
})(["height:0px;margin-top:15px;box-sizing:border-box;opacity:0;width:80%;text-align:center;& button{margin-bottom:10px;font-size:20px;}transition:all 100ms linear;& ", "{min-width:50%;width:unset;}& ", "{min-width:50%;width:unset;}", ""], _StyledButtons.Button, _StyledButtons.Link, _Util.media.large(_templateObject(), _StyledButtons.Button, _StyledButtons.Link));

exports.ActionContainer = ActionContainer;

var Display = _styledComponents["default"].div.withConfig({
  displayName: "styles__Display",
  componentId: "h1txsb-3"
})(["height:100%;width:100%;flex-basis:100%;flex-grow:1;background-color:", ";display:flex;flex-direction:column;justify-content:center;align-items:center;overflow:hidden;padding:17px 25px;box-sizing:border-box;position:relative;--resize:scale(0.9);&:after{display:", ";position:absolute;top:20%;right:0px;content:'';width:0px;height:60%;border-right:2px solid #e6e6e6;}&:last-child:after{display:none;}& ", "{height:", ";opacity:", ";}", ""], function (props) {
  return (0, _Themes.handleThemeFromObject)(props.theme, 'actionDisplay.display.background', '#fff');
}, function (props) {
  return props.divider ? null : 'none';
}, ActionContainer, function (props) {
  return props.hasAction ? '50px' : null;
}, function (props) {
  return props.hasAction ? '1' : null;
}, _Util.media.large(_templateObject2(), function (props) {
  return props.size || '50%';
}, function (props) {
  return (0, _Themes.handleThemeFromObject)(props.theme, 'actionDisplay.display.background', '#fff');
}, function (props) {
  return (0, _Themes.handleThemeFromObject)(props.theme, 'actionDisplay.display.hover.background', 'rgba(230, 230, 230, 0.2)');
}, ActionContainer, function (props) {
  return props.hasAction ? '50px' : null;
}, function (props) {
  return props.hasAction ? '1' : null;
}, Value, function (props) {
  return props.hasAction ? 'var(--resize)' : null;
}, Value, function (props) {
  return props.hasAction ? 'var(--resize)' : null;
}, function (props) {
  return props.hasAction ? (0, _Themes.handleThemeFromObject)(props.theme, 'actionDisplay.display.hover.value', '#4cbaff') : null;
}, Label, function (props) {
  return props.hasAction ? 'var(--resize)' : null;
}, function (props) {
  return props.hasAction ? (0, _Themes.handleThemeFromObject)(props.theme, 'actionDisplay.display.hover.label', '#4cbaff') : null;
}, ActionContainer));

exports.Display = Display;
var DisplayRow = (0, _styledComponents["default"])(_Card.CardContent).withConfig({
  displayName: "styles__DisplayRow",
  componentId: "h1txsb-4"
})(["padding:0px;display:flex;flex-wrap:wrap;"]);
exports.DisplayRow = DisplayRow;