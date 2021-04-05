"use strict";

require("core-js/modules/es6.object.define-property");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.PieBox = exports.Slice = void 0;

var _styledComponents = _interopRequireDefault(require("styled-components"));

var _victory = require("victory");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var Slice = (0, _styledComponents["default"])(_victory.Slice).withConfig({
  displayName: "styles__Slice",
  componentId: "sc-1l4uyb7-0"
})(["transition:all 300ms;cursor:pointer;"]);
exports.Slice = Slice;
var PieBox = (0, _styledComponents["default"])(_victory.VictoryContainer).withConfig({
  displayName: "styles__PieBox",
  componentId: "sc-1l4uyb7-1"
})(["width:unset !important;height:unset !important;& > svg{width:", " !important;height:", " !important;}"], function (props) {
  return props.width ? "".concat(props.width, "px") : 'unset';
}, function (props) {
  return props.height ? "".concat(props.height, "px") : 'unset';
});
exports.PieBox = PieBox;