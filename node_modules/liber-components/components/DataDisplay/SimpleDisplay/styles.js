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
exports.Container = exports.Value = exports.Label = void 0;

require("core-js/modules/es6.object.define-properties");

require("core-js/modules/es6.object.freeze");

var _styledComponents = _interopRequireWildcard(require("styled-components"));

var _Themes = require("../../Themes");

var _Resizable = _interopRequireDefault(require("../Resizable"));

var _Util = require("../../Util");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function _getRequireWildcardCache() { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; if (obj != null) { var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _templateObject() {
  var data = _taggedTemplateLiteral(["\n    max-width: 50%;\n    background-color: ", ";\n    color: ", ";\n    max-height: unset;\n    padding: 0px;\n\n    & ", " {\n      font-size:  ", ";\n      color: ", ";\n    }\n    & ", " {\n      color: ", " ;\n    }\n    &:hover {\n      background-color: ", ";\n    }\n    &:hover ", " {\n      font-size: 34px;\n      color: ", ";\n    }\n    &:hover ", " {\n      color: ", ";\n    }\n    &:after {\n      display: ", ";\n      position: absolute;\n      top: 20%;\n      right: -1px;\n      content: '';\n      width: 0px;\n      height: 60%;\n      border-right: 2px solid #e6e6e6;\n    }\n    &:last-child:after {\n      display: none;\n    }\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

var Label = _styledComponents["default"].div.withConfig({
  displayName: "styles__Label",
  componentId: "sc-1u0ztoh-0"
})(["font-family:", ";font-weight:", ";font-size:", ";color:", ";text-align:center;transition:all 100ms linear;"], function (props) {
  return (0, _Themes.handleThemeFromObject)(props.theme, 'simpleDisplay.label.fontFamily', 'Roboto');
}, function (props) {
  return (0, _Themes.handleThemeFromObject)(props.theme, 'simpleDisplay.label.fontWeight', '400');
}, function (props) {
  return (0, _Themes.handleThemeFromObject)(props.theme, 'simpleDisplay.label.fontSize', '20px');
}, function (props) {
  return (0, _Themes.handleThemeFromObject)(props.theme, 'simpleDisplay.label.color', '#717171', props.color);
});

exports.Label = Label;
var Value = (0, _styledComponents["default"])(_Resizable["default"]).withConfig({
  displayName: "styles__Value",
  componentId: "sc-1u0ztoh-1"
})(["font-family:", ";font-size:", ";font-weight:", ";color:", ";line-height:0.8em;transition:all 100ms linear;position:relative;margin-left:", ";margin-bottom:10px;box-sizing:border-box;", "}}"], function (props) {
  return (0, _Themes.handleThemeFromObject)(props.theme, 'simpleDisplay.value.fontFamily', 'Roboto');
}, function (props) {
  return (0, _Themes.handleThemeFromObject)(props.theme, 'simpleDisplay.value.fontSize', '28px');
}, function (props) {
  return (0, _Themes.handleThemeFromObject)(props.theme, 'simpleDisplay.value.fontWeight', '700');
}, function (props) {
  return (0, _Themes.handleThemeFromObject)(props.theme, 'simpleDisplay.value.color', '#717171');
}, function (props) {
  return props.prefix && props.prefix.length > 0 ? '26px' : null;
}, function (props) {
  return props.prefix && props.prefix.length > 0 ? (0, _styledComponents.css)(["&:before{position:absolute;content:\"", "\";font-size:50%;line-height:50%;top:5px;right:100%;}"], props.prefix) : null;
});
exports.Value = Value;

var Container = _styledComponents["default"].div.withConfig({
  displayName: "styles__Container",
  componentId: "sc-1u0ztoh-2"
})(["flex-grow:1;display:flex;flex-direction:column;justify-content:center;align-items:center;position:relative;padding:25px 0px;flex-basis:50%;max-width:unset;max-height:114px;min-height:0;min-width:0;border-left:", ";cursor:", ";color:", ";box-sizing:border-box;", ""], function (props) {
  return props.colorBar ? "10px solid ".concat(props.colorBar) : null;
}, function (props) {
  return props.hasClick ? 'pointer' : null;
}, function (props) {
  return (0, _Themes.handleThemeFromObject)(props.theme, 'simpleDisplay.container.color', '#717171');
}, _Util.media.large(_templateObject(), function (props) {
  return props.highlight ? (0, _Themes.handleThemeFromObject)(props.theme, 'simpleDisplay.container.highlight.background', 'rgba(230,230,230, 0.2)') : null;
}, function (props) {
  return props.highlight ? (0, _Themes.handleThemeFromObject)(props.theme, 'simpleDisplay.container.highlight.value', '#009dff') : (0, _Themes.handleThemeFromObject)(props.theme, 'simpleDisplay.container.color', '#717171');
}, Value, function (props) {
  return props.highlight ? '34px' : null;
}, function (props) {
  return props.highlight ? (0, _Themes.handleThemeFromObject)(props.theme, 'simpleDisplay.container.highlight.value', '#4cbaff') : null;
}, Label, function (props) {
  return props.highlight ? (0, _Themes.handleThemeFromObject)(props.theme, 'simpleDisplay.container.highlight.label', '#4cbaff') : null;
}, function (props) {
  return (0, _Themes.handleThemeFromObject)(props.theme, 'simpleDisplay.container.hover.background', 'rgba(230,230,230, 0.2)');
}, Value, function (props) {
  return props.hasClick ? (0, _Themes.handleThemeFromObject)(props.theme, 'simpleDisplay.container.hover.value', '#4cbaff') : null;
}, Label, function (props) {
  return props.hasClick ? (0, _Themes.handleThemeFromObject)(props.theme, 'simpleDisplay.container.hover.label', '#4cbaff') : null;
}, function (props) {
  return props.divider ? null : 'none';
}));

exports.Container = Container;