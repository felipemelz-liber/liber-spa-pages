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
exports.Spinner = exports.Container = void 0;

var _styledComponents = _interopRequireWildcard(require("styled-components"));

var _Themes = require("../Themes");

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function _getRequireWildcardCache() { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; if (obj != null) { var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

var Container = _styledComponents["default"].span.withConfig({
  displayName: "styles__Container",
  componentId: "sc-3p78uc-0"
})(["position:relative;height:fit-content;width:fit-content;"]);

exports.Container = Container;
var spin = (0, _styledComponents.keyframes)(["0%{transform:rotate(0deg);}100%{transform:rotate(360deg);}"]);

var Spinner = _styledComponents["default"].div.withConfig({
  displayName: "styles__Spinner",
  componentId: "sc-3p78uc-1"
})(["animation:", " 3s linear infinite;&,& span,& span::before{display:block;height:", ";width:", ";}& span,& span::before,& span::after{position:absolute;top:0;left:0;bottom:0;right:0;margin:auto;}& span{clip:", ";animation:", " 1.5s cubic-bezier(0.77,0,0.175,1) infinite;}& span::before{content:'';border-top:", " solid ", ";border-radius:50%;opacity:0.5;animation:", " 1.5s cubic-bezier(0.77,0,0.175,1) infinite;}& span::after{content:'';border:", " solid ", ";border-radius:50%;}"], spin, function (props) {
  return props.size || '32px';
}, function (props) {
  return props.size || '32px';
}, function (props) {
  return "rect(calc(".concat(props.size || '32px', "/2), ").concat(props.size || '32px', ", ").concat(props.size || '32px', ", 0)");
}, spin, function (props) {
  return props.thickness || '3px';
}, function (props) {
  return (0, _Themes.handleThemeFromObject)(props.theme, 'loadingSpinner.color', '#4e4e4e', props.color);
}, spin, function (props) {
  return props.thickness || '3px';
}, function (props) {
  return (0, _Themes.handleThemeFromObject)(props.theme, 'loadingSpinner.color', '#4e4e4e', props.color);
});

exports.Spinner = Spinner;