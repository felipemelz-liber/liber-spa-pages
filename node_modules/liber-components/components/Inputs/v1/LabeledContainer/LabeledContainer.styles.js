"use strict";

require("core-js/modules/es6.object.define-property");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.LabelContainer = void 0;

var _styledComponents = _interopRequireDefault(require("styled-components"));

var _Themes = require("../../../Themes");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var LabelContainer = _styledComponents["default"].div.withConfig({
  displayName: "LabeledContainerstyles__LabelContainer",
  componentId: "xef6m9-0"
})(["font-family:'Roboto',sans-serif;font-size:16px;font-weight:normal;display:flex;align-content:flex-start;color:", ";& > span{margin-right:15px;}"], function (props) {
  return (0, _Themes.handleThemeFromObject)(props.theme, 'labeledContainer.color', '#a4a4a4');
});

exports.LabelContainer = LabelContainer;