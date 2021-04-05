"use strict";

require("core-js/modules/es6.object.define-property");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Label = exports.Icon = exports.Container = void 0;

var _styledComponents = _interopRequireDefault(require("styled-components"));

var _Icons = require("../../Icons");

var _Themes = require("../../Themes");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var Container = _styledComponents["default"].div.withConfig({
  displayName: "styles__Container",
  componentId: "lt958n-0"
})(["position:relative;color:", ";font-size:16px;"], function (props) {
  return (0, _Themes.handleThemeFromObject)(props.theme, 'infoLabel.color', '#a4a4a4');
});

exports.Container = Container;
var Icon = (0, _styledComponents["default"])(_Icons.FaInfoCircle).withConfig({
  displayName: "styles__Icon",
  componentId: "lt958n-1"
})(["position:absolute;fill:", ";margin:3px;width:18px;height:18px;"], function (props) {
  return (0, _Themes.handleThemeFromObject)(props.theme, 'infoLabel.fill', '#a4a4a4', props.color);
});
exports.Icon = Icon;

var Label = _styledComponents["default"].div.withConfig({
  displayName: "styles__Label",
  componentId: "lt958n-2"
})(["margin-left:28px;word-wrap:break-word;"]);

exports.Label = Label;