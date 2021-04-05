"use strict";

require("core-js/modules/es6.object.define-property");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.MonthPickerContainer = exports.Content = void 0;

var _styledComponents = _interopRequireDefault(require("styled-components"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var Content = _styledComponents["default"].div.withConfig({
  displayName: "styles__Content",
  componentId: "sc-59to88-0"
})(["position:relative;"]);

exports.Content = Content;

var MonthPickerContainer = _styledComponents["default"].div.withConfig({
  displayName: "styles__MonthPickerContainer",
  componentId: "sc-59to88-1"
})(["position:absolute;overflow:hidden;top:0px;right:0px;width:270px;display:", ";background-color:#fafafa;box-shadow:0 2px 6px 0 rgba(0,0,0,0.1);"], function (props) {
  return props.show ? 'block' : 'none';
});

exports.MonthPickerContainer = MonthPickerContainer;