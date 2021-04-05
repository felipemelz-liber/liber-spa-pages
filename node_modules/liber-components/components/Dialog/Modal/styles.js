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
exports.CloseButton = exports.CloseIcon = exports.CardHeader = exports.Card = void 0;

var _styledComponents = _interopRequireWildcard(require("styled-components"));

var _GenericStyles = require("../../GenericStyles");

var _Themes = require("../../Themes");

var _Icons = require("../../Icons");

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function _getRequireWildcardCache() { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; if (obj != null) { var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

var Card = (0, _styledComponents["default"])(_GenericStyles.Card).withConfig({
  displayName: "styles__Card",
  componentId: "sc-1qag6pi-0"
})(["position:relative;", " overflow:", ";border-radius:4px;box-shadow:0 4px 15px 0 rgba(0,0,0,0.2);background-color:", ";margin:0px !important;"], function (_ref) {
  var fullscreen = _ref.fullscreen;
  return fullscreen ? (0, _styledComponents.css)(["height:100vh !important;width:100vw !important;"]) : (0, _styledComponents.css)(["max-width:80vw;max-height:80vh;min-width:10vw;min-height:10vh;height:unset;"]);
}, function (props) {
  return props.overflow ? props.overflow : 'unset';
}, function (props) {
  return (0, _Themes.handleThemeFromObject)(props.theme, 'dialog.card', '#ffffff');
});
exports.Card = Card;

var CardHeader = _styledComponents["default"].div.withConfig({
  displayName: "styles__CardHeader",
  componentId: "sc-1qag6pi-1"
})(["padding:16px 24px;white-space:nowrap;font-family:inherit;font-size:20px;font-weight:bold;text-align:", ";color:", ";border-bottom:1px solid ", ";"], function (props) {
  return props.labelAlign;
}, function (props) {
  return (0, _Themes.handleThemeFromObject)(props.theme, 'dialog.header', '#717171');
}, function (props) {
  return (0, _Themes.handleThemeFromObject)(props.theme, 'dialog.separator', '#e6e6e6');
});

exports.CardHeader = CardHeader;
var CloseIcon = (0, _styledComponents["default"])(_Icons.FaTimes).withConfig({
  displayName: "styles__CloseIcon",
  componentId: "sc-1qag6pi-2"
})(["width:23px;height:23px;fill:", ";"], function (props) {
  return (0, _Themes.handleThemeFromObject)(props.theme, 'dialog.header', '#717171');
});
exports.CloseIcon = CloseIcon;

var CloseButton = _styledComponents["default"].div.withConfig({
  displayName: "styles__CloseButton",
  componentId: "sc-1qag6pi-3"
})(["position:absolute;padding:", ";top:0;right:0;cursor:pointer;"], function (props) {
  return props.closeButtonPadding;
});

exports.CloseButton = CloseButton;