"use strict";

require("core-js/modules/es6.object.define-property");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Overlay = exports.BlurredBackground = void 0;

var _styledComponents = _interopRequireDefault(require("styled-components"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var BlurredBackground = _styledComponents["default"].div.withConfig({
  displayName: "BlurredMessagestyles__BlurredBackground",
  componentId: "sc-39fv6a-0"
})(["--blur:", "px;filter:blur(var(--blur));width:100%;height:100%;pointer-events:", ";position:relative;user-select:", ";"], function (_ref) {
  var blur = _ref.blur;
  return blur || 0;
}, function (_ref2) {
  var blur = _ref2.blur;
  return blur > 0 ? 'none' : 'all';
}, function (_ref3) {
  var blur = _ref3.blur;
  return blur > 0 ? 'none' : 'initial';
});

exports.BlurredBackground = BlurredBackground;

var Overlay = _styledComponents["default"].div.withConfig({
  displayName: "BlurredMessagestyles__Overlay",
  componentId: "sc-39fv6a-1"
})(["z-index:200;position:absolute;top:", "px;left:", "px;max-height:", "px;max-width:", "px;"], function (_ref4) {
  var top = _ref4.top;
  return top;
}, function (_ref5) {
  var left = _ref5.left;
  return left;
}, function (_ref6) {
  var maxHeight = _ref6.maxHeight;
  return maxHeight;
}, function (_ref7) {
  var maxWidth = _ref7.maxWidth;
  return maxWidth;
});

exports.Overlay = Overlay;