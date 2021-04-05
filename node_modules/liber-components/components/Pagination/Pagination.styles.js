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
exports.PageInput = exports.NextButton = exports.PrevButton = exports.PageContainer = exports.Container = exports.NextIcon = exports.PrevIcon = void 0;

var _react = _interopRequireDefault(require("react"));

var _styledComponents = _interopRequireWildcard(require("styled-components"));

var _Themes = require("../Themes");

var _Icons = require("../Icons");

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function _getRequireWildcardCache() { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; if (obj != null) { var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var icon = (0, _styledComponents.css)(["--size:24px;min-width:var(--size);max-width:var(--size);min-height:var(--size);max-height:var(--size);margin-top:2px;fill:", ";"], function (props) {
  return (0, _Themes.handleThemeFromObject)(props.theme, 'colors.grey4', '#6287a7');
});
var PrevIcon = (0, _styledComponents["default"])(_Icons.MdChevronLeft).withConfig({
  displayName: "Paginationstyles__PrevIcon",
  componentId: "gpe49t-0"
})(["", ""], icon);
exports.PrevIcon = PrevIcon;
var NextIcon = (0, _styledComponents["default"])(_Icons.MdChevronRight).withConfig({
  displayName: "Paginationstyles__NextIcon",
  componentId: "gpe49t-1"
})(["", ""], icon);
exports.NextIcon = NextIcon;

var Container = _styledComponents["default"].div.withConfig({
  displayName: "Paginationstyles__Container",
  componentId: "gpe49t-2"
})(["display:flex;justify-content:flex-start;align-items:center;width:100%;"]);

exports.Container = Container;

var PageContainer = _styledComponents["default"].div.withConfig({
  displayName: "Paginationstyles__PageContainer",
  componentId: "gpe49t-3"
})(["margin-left:auto;display:flex;justify-content:flex-start;align-items:center;line-height:22px;letter-spacing:0.1px;text-align:left;font-size:", ";font-family:", ";font-weight:", ";color:", ";"], function (props) {
  return (0, _Themes.handleThemeFromObject)(props.theme, 'font-sizes.p', '16px');
}, function (props) {
  return (0, _Themes.handleThemeFromObject)(props.theme, 'font-family', 'Roboto');
}, function (props) {
  return (0, _Themes.handleThemeFromObject)(props.theme, 'font-weights.regular', '400');
}, function (props) {
  return (0, _Themes.handleThemeFromObject)(props.theme, 'colors.petroleum', '#4b6f85');
});

exports.PageContainer = PageContainer;
var buttons = (0, _styledComponents.css)(["width:40px;height:36px;background-color:", ";border:0px;&:disabled{opacity:0.38;cursor:default;}"], function (props) {
  return (0, _Themes.handleThemeFromObject)(props.theme, 'colors.grey5', '#ecf0f3');
});

var Prev = _styledComponents["default"].button.withConfig({
  displayName: "Paginationstyles__Prev",
  componentId: "gpe49t-4"
})(["", " margin-left:24px;border-radius:4px 0px 0px 4px;"], buttons);

var Next = _styledComponents["default"].button.withConfig({
  displayName: "Paginationstyles__Next",
  componentId: "gpe49t-5"
})(["", " border-radius:0px 4px 4px 0px;border-left:1px solid ", ";"], buttons, function (props) {
  return (0, _Themes.handleThemeFromObject)(props.theme, 'colors.grey6', '#d2dbe0');
});

var PrevButton = function PrevButton(props) {
  return _react["default"].createElement(Prev, props, _react["default"].createElement(PrevIcon, null));
};

exports.PrevButton = PrevButton;

var NextButton = function NextButton(props) {
  return _react["default"].createElement(Next, props, _react["default"].createElement(NextIcon, null));
};

exports.NextButton = NextButton;

var PageInput = _styledComponents["default"].input.withConfig({
  displayName: "Paginationstyles__PageInput",
  componentId: "gpe49t-6"
})(["height:36px;width:75px;border-radius:4px;border:solid 1px #ecf0f3;background-color:", ";margin:0 12px;padding:0px 12px;line-height:22px;font-size:", ";font-family:", ";font-weight:", ";color:", ";box-sizing:border-box;"], function (props) {
  return (0, _Themes.handleThemeFromObject)(props.theme, 'colors.v2.white', '#ffffff');
}, function (props) {
  return (0, _Themes.handleThemeFromObject)(props.theme, 'font-sizes.p', '16px');
}, function (props) {
  return (0, _Themes.handleThemeFromObject)(props.theme, 'font-family', 'Roboto');
}, function (props) {
  return (0, _Themes.handleThemeFromObject)(props.theme, 'font-weights.regular', '400');
}, function (props) {
  return (0, _Themes.handleThemeFromObject)(props.theme, 'colors.gray4', '#6287a7');
});

exports.PageInput = PageInput;
PageInput.defaultProps = {
  type: 'number'
};