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
exports.Option = exports.Chevron = exports.ValueBox = exports.DisplayBox = exports.Container = void 0;

var _styledComponents = _interopRequireWildcard(require("styled-components"));

var _Themes = require("../../../Themes");

var _Icons = require("../../../Icons");

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function _getRequireWildcardCache() { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; if (obj != null) { var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

var Container = _styledComponents["default"].div.withConfig({
  displayName: "SimpleSelectstyles__Container",
  componentId: "njx2cw-0"
})(["position:relative;margin-right:auto;width:100%;"]);

exports.Container = Container;

var DisplayBox = _styledComponents["default"].div.withConfig({
  displayName: "SimpleSelectstyles__DisplayBox",
  componentId: "njx2cw-1"
})(["width:100%;height:32px;border-radius:4px;border:solid 1px #ecf0f3;background-color:", ";padding:0px 12px;box-sizing:border-box;display:flex;align-items:center;"], function (props) {
  return (0, _Themes.handleThemeFromObject)(props.theme, 'colors.white', '#ffffff');
});

exports.DisplayBox = DisplayBox;

var ValueBox = _styledComponents["default"].div.withConfig({
  displayName: "SimpleSelectstyles__ValueBox",
  componentId: "njx2cw-2"
})(["flex-grow:1;line-height:22px;font-size:", ";font-family:", ";font-weight:", ";color:", ";white-space:nowrap;max-width:calc(100% - 36px);overflow:hidden;text-overflow:ellipsis;"], function (props) {
  return (0, _Themes.handleThemeFromObject)(props.theme, 'font-sizes.p', '16px');
}, function (props) {
  return (0, _Themes.handleThemeFromObject)(props.theme, 'font-family', 'Roboto');
}, function (props) {
  return (0, _Themes.handleThemeFromObject)(props.theme, 'font-weights.regular', '400');
}, function (props) {
  return (0, _Themes.handleThemeFromObject)(props.theme, 'colors.gray4', '#6287a7');
});

exports.ValueBox = ValueBox;
var Chevron = (0, _styledComponents["default"])(_Icons.MdChevronDown).withConfig({
  displayName: "SimpleSelectstyles__Chevron",
  componentId: "njx2cw-3"
})(["--size:18px;min-width:var(--size);max-width:var(--size);min-height:var(--size);max-height:var(--size);fill:", ";margin-left:12px;"], function (props) {
  return (0, _Themes.handleThemeFromObject)(props.theme, 'colors.grey4', '#6287a7');
});
exports.Chevron = Chevron;
var active = (0, _styledComponents.css)(["color:", ";"], function (props) {
  return (0, _Themes.handleThemeFromObject)(props.theme, 'colors.petroleum', '#4b6f85');
});
var comom = (0, _styledComponents.css)(["color:", ";"], function (props) {
  return (0, _Themes.handleThemeFromObject)(props.theme, 'colors.grey3', '#c6d1d8');
});

var Option = _styledComponents["default"].span.withConfig({
  displayName: "SimpleSelectstyles__Option",
  componentId: "njx2cw-4"
})(["width:100%;height:40px;line-height:22px;font-size:", ";font-family:", ";font-weight:", ";background-color:", ";display:flex;align-items:center;padding:0 24px;cursor:pointer;", " &:hover{background-color:", ";}"], function (props) {
  return (0, _Themes.handleThemeFromObject)(props.theme, 'font-sizes.p', '16px');
}, function (props) {
  return (0, _Themes.handleThemeFromObject)(props.theme, 'font-family', 'Roboto');
}, function (props) {
  return (0, _Themes.handleThemeFromObject)(props.theme, 'font-weights.medium', '500');
}, function (props) {
  return (0, _Themes.handleThemeFromObject)(props.theme, 'colors.white', '#ffffff');
}, function (props) {
  return props.active ? active : comom;
}, function (props) {
  return (0, _Themes.handleThemeFromObject)(props.theme, 'colors.grey7', '#f9fafa');
});

exports.Option = Option;