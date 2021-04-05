"use strict";

require("core-js/modules/es6.object.define-property");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.NotificationContent = exports.NotificationLabel = exports.YellowBox = exports.Question = exports.Box = exports.Separator = exports.Title = void 0;

var _styledComponents = _interopRequireDefault(require("styled-components"));

var _GenericStyles = require("../GenericStyles");

var _Icons = require("../Icons");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var Title = (0, _styledComponents["default"])(_GenericStyles.Header4).withConfig({
  displayName: "styles__Title",
  componentId: "sc-1ciu2kn-0"
})(["margin-top:10px !important;margin-bottom:0px !important;"]);
exports.Title = Title;
var Separator = (0, _styledComponents["default"])(_GenericStyles.Hr).withConfig({
  displayName: "styles__Separator",
  componentId: "sc-1ciu2kn-1"
})(["margin-top:6px !important;"]);
exports.Separator = Separator;

var Box = _styledComponents["default"].div.withConfig({
  displayName: "styles__Box",
  componentId: "sc-1ciu2kn-2"
})(["border-radius:2px;border:solid 2px #e6e6e6;padding:8px 66px 23px 66px;overflow:hidden;position:relative;width:100%;box-sizing:border-box;text-align:left;color:#4e4e4e;line-height:21px;font-size:16px;font-weight:500;margin-bottom:20px;& ol,& ul{padding-left:20px;}& ol > li,& ul > li{margin-bottom:10px;}"]);

exports.Box = Box;
var Question = (0, _styledComponents["default"])(_Icons.FaQuestionCircle).withConfig({
  displayName: "styles__Question",
  componentId: "sc-1ciu2kn-3"
})(["fill:#009dff;width:24px;height:24px;position:absolute;top:16px;left:24px;"]);
exports.Question = Question;

var YellowBox = _styledComponents["default"].div.withConfig({
  displayName: "styles__YellowBox",
  componentId: "sc-1ciu2kn-4"
})(["border-radius:4px;background-color:#feedc2;margin-bottom:20px;display:flex;justify-content:flex-start;flex-direction:column;"]);

exports.YellowBox = YellowBox;

var NotificationLabel = _styledComponents["default"].div.withConfig({
  displayName: "styles__NotificationLabel",
  componentId: "sc-1ciu2kn-5"
})(["font-family:inherit;font-size:22px;font-weight:bold;color:#484848;padding:13px 38px;position:relative;cursor:pointer;&:after{position:absolute;content:'';right:19px;top:calc(50% - 4px);width:0px;height:0px;border-left:8px solid transparent;border-right:8px solid transparent;border-bottom:8px solid transparent;border-top:8px solid #4e4e4e;}"]);

exports.NotificationLabel = NotificationLabel;

var NotificationContent = _styledComponents["default"].div.withConfig({
  displayName: "styles__NotificationContent",
  componentId: "sc-1ciu2kn-6"
})(["flex-grow:1;display:", ";padding:0 38px;margin-bottom:13px;font-size:20px;font-weight:500;color:#484848;"], function (props) {
  return props.show ? null : 'none';
});

exports.NotificationContent = NotificationContent;