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
exports.IndeterminateBar = exports.DeterminateBar = exports.BackgroundBar = void 0;

var _styledComponents = _interopRequireWildcard(require("styled-components"));

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function _getRequireWildcardCache() { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; if (obj != null) { var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

var BackgroundBar = _styledComponents["default"].div.withConfig({
  displayName: "styles__BackgroundBar",
  componentId: "sc-1fmuvja-0"
})(["position:relative;display:block;width:100%;border-radius:12px;background-color:#e8e8e8;margin:0px;overflow:hidden;height:", "px;"], function (_ref) {
  var height = _ref.height;
  return height || 4;
});

exports.BackgroundBar = BackgroundBar;

var DeterminateBar = _styledComponents["default"].div.withConfig({
  displayName: "styles__DeterminateBar",
  componentId: "sc-1fmuvja-1"
})(["position:absolute;top:0;left:0;bottom:0;background:", ";transition:width 0.3s linear;width:", "%;"], function (props) {
  return props.background || 'linear-gradient(to left, #009dff, #83deff)';
}, function (props) {
  return props.size || 0;
});

exports.DeterminateBar = DeterminateBar;
var indeterminate = (0, _styledComponents.keyframes)(["0%{left:-35%;right:100%}60%{left:100%;right:-90%}100%{left:100%;right:-90%}"]);
var indeterminateShort = (0, _styledComponents.keyframes)(["0%{left:-200%;right:100%}60%{left:107%;right:-8%}100%{left:107%;right:-8%}"]);

var IndeterminateBar = _styledComponents["default"].div.withConfig({
  displayName: "styles__IndeterminateBar",
  componentId: "sc-1fmuvja-2"
})(["background:", ";&:before{content:'';position:absolute;background:inherit;top:0;left:0;bottom:0;will-change:left,right;animation:", " 2.1s cubic-bezier(0.65,0.815,0.735,0.395) infinite;}&:after{content:'';position:absolute;background:inherit;top:0;left:0;bottom:0;will-change:left,right;animation:", " 2.1s cubic-bezier(0.165,0.84,0.44,1) infinite;animation-delay:1.15s;}"], function (props) {
  return props.background || 'linear-gradient(to left, #83deff, #009dff, #83deff)';
}, indeterminate, indeterminateShort);

exports.IndeterminateBar = IndeterminateBar;