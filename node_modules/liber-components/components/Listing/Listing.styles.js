"use strict";

require("core-js/modules/es6.object.define-property");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.SelectContainer = exports.ListingContainer = void 0;

var _styledComponents = _interopRequireDefault(require("styled-components"));

var _Themes = require("../Themes");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var ListingContainer = _styledComponents["default"].div.withConfig({
  displayName: "Listingstyles__ListingContainer",
  componentId: "sc-1uy20g8-0"
})(["display:flex;justify-content:flex-start;align-items:center;line-height:22px;letter-spacing:0.1px;text-align:left;font-size:", ";font-family:", ";font-weight:", ";color:", ";"], function (props) {
  return (0, _Themes.handleThemeFromObject)(props.theme, 'font-sizes.p', '16px');
}, function (props) {
  return (0, _Themes.handleThemeFromObject)(props.theme, 'font-family', 'Roboto');
}, function (props) {
  return (0, _Themes.handleThemeFromObject)(props.theme, 'font-weights.regular', '400');
}, function (props) {
  return (0, _Themes.handleThemeFromObject)(props.theme, 'colors.petroleum', '#4b6f85');
});

exports.ListingContainer = ListingContainer;

var SelectContainer = _styledComponents["default"].div.withConfig({
  displayName: "Listingstyles__SelectContainer",
  componentId: "sc-1uy20g8-1"
})(["width:94px;margin:0px 12px;"]);

exports.SelectContainer = SelectContainer;