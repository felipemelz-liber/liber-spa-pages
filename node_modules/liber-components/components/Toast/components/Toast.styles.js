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
exports.LargeContent = exports.IconBox = exports.Message = exports.Content = exports.AnimationContainer = exports.Container = exports.CloseIcon = exports.WarningIcon = exports.ErroIcon = exports.SuccessIcon = exports.InfoIcon = exports.Warning = exports.Error = exports.Success = exports.Info = exports.Card = exports.BaseToast = void 0;

require("core-js/modules/es6.object.define-properties");

require("core-js/modules/es6.object.freeze");

require("core-js/modules/es6.string.small");

var _styledComponents = _interopRequireWildcard(require("styled-components"));

var _Util = require("../../Util");

var _Themes = require("../../Themes");

var _Icons = require("../../Icons");

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function _getRequireWildcardCache() { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; if (obj != null) { var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _templateObject2() {
  var data = _taggedTemplateLiteral(["\n    top: 15px;\n    right: 15px;\n    ", "\n  "]);

  _templateObject2 = function _templateObject2() {
    return data;
  };

  return data;
}

function _templateObject() {
  var data = _taggedTemplateLiteral(["\n    ", "\n  "]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

var getTheme = function getTheme(key, def) {
  return (0, _styledComponents.css)(["", ""], function (props) {
    return (0, _Themes.handleThemeFromObject)(props.theme, key, def);
  });
};

var colors = {
  info: '#009dff',
  success: '#13ce66',
  error: '#dc3545',
  warning: '#ffdb6a',
  empty: '#717171'
};

var BaseToast = _styledComponents["default"].div.withConfig({
  displayName: "Toaststyles__BaseToast",
  componentId: "fxfvhp-0"
})(["border-left:4px solid;border-color:", ";width:100%;max-width:100%;min-height:72px;box-sizing:border-box;padding:21px 24px;display:flex;flex-direction:column;justify-content:flex-start;align-items:flex-start;background-color:", ";"], getTheme('colors.white', '#ffffff'), getTheme('colors.white', '#ffffff'));

exports.BaseToast = BaseToast;

var Card = _styledComponents["default"].div.withConfig({
  displayName: "Toaststyles__Card",
  componentId: "fxfvhp-1"
})(["display:flex;justify-content:space-between;align-items:center;border-radius:4px;", " overflow:hidden;position:relative;background-color:", ";margin:0px 8px 24px 8px;&:last-child{margin-bottom:0px;}", ""], getTheme('box-shadows.2', (0, _styledComponents.css)(["box-shadow:0 2px 8px 0 rgba(64,95,113,0.12);"])), getTheme('colors.white', '#fff'), _Util.media.small(_templateObject(), function (_ref) {
  var customWidth = _ref.customWidth;
  return customWidth ? (0, _styledComponents.css)(["max-width:", "px;"], customWidth - 16) : 'width: calc(500px - 16px);';
}));

exports.Card = Card;
var Info = (0, _styledComponents["default"])(BaseToast).withConfig({
  displayName: "Toaststyles__Info",
  componentId: "fxfvhp-2"
})(["border-color:", ";"], getTheme('colors.primary', colors.info));
exports.Info = Info;
var Success = (0, _styledComponents["default"])(BaseToast).withConfig({
  displayName: "Toaststyles__Success",
  componentId: "fxfvhp-3"
})(["border-color:", ";"], getTheme('colors.success', colors.success));
exports.Success = Success;
var Error = (0, _styledComponents["default"])(BaseToast).withConfig({
  displayName: "Toaststyles__Error",
  componentId: "fxfvhp-4"
})(["border-color:", ";"], getTheme('colors.error', colors.error));
exports.Error = Error;
var Warning = (0, _styledComponents["default"])(BaseToast).withConfig({
  displayName: "Toaststyles__Warning",
  componentId: "fxfvhp-5"
})(["border-color:", ";"], getTheme('colors.alert', colors.warning));
exports.Warning = Warning;
var Icon = (0, _styledComponents.css)(["", " ", ""], (0, _Util.generateMinMax)('width', '24px'), (0, _Util.generateMinMax)('height', '24px'));
var InfoIcon = (0, _styledComponents["default"])(_Icons.MdInformation).withConfig({
  displayName: "Toaststyles__InfoIcon",
  componentId: "fxfvhp-6"
})(["", " fill:", ";"], Icon, getTheme('colors.primary', colors.info));
exports.InfoIcon = InfoIcon;
var SuccessIcon = (0, _styledComponents["default"])(_Icons.MdCheckCircle).withConfig({
  displayName: "Toaststyles__SuccessIcon",
  componentId: "fxfvhp-7"
})(["", " fill:", ";"], Icon, getTheme('colors.success', colors.success));
exports.SuccessIcon = SuccessIcon;
var ErroIcon = (0, _styledComponents["default"])(_Icons.MdCloseCircle).withConfig({
  displayName: "Toaststyles__ErroIcon",
  componentId: "fxfvhp-8"
})(["", " fill:", ";"], Icon, getTheme('colors.error', colors.error));
exports.ErroIcon = ErroIcon;
var WarningIcon = (0, _styledComponents["default"])(_Icons.MdAlertCircle).withConfig({
  displayName: "Toaststyles__WarningIcon",
  componentId: "fxfvhp-9"
})(["", " fill:", ";"], Icon, getTheme('colors.alert', colors.warning));
exports.WarningIcon = WarningIcon;
var top = (0, _styledComponents.css)(["align-self:flex-start;margin-top:24px;"]);
var CloseIcon = (0, _styledComponents["default"])(_Icons.MdClose).withConfig({
  displayName: "Toaststyles__CloseIcon",
  componentId: "fxfvhp-10"
})(["", " ", " fill:#b6c2c9;fill:", ";margin-right:24px;", ";cursor:pointer;"], (0, _Util.generateMinMax)('width', '24px'), (0, _Util.generateMinMax)('height', '24px'), getTheme('colors.dark-text38', '#b6c2c9'), function (props) {
  return props.top ? top : null;
});
exports.CloseIcon = CloseIcon;

var Container = _styledComponents["default"].div.withConfig({
  displayName: "Toaststyles__Container",
  componentId: "fxfvhp-11"
})(["position:fixed;top:0px;right:0px;width:100%;z-index:9999;", ""], _Util.media.small(_templateObject2(), function (_ref2) {
  var customWidth = _ref2.customWidth;
  return customWidth ? (0, _styledComponents.css)(["max-width:", "px;"], customWidth) : 'width: 500px';
}));

exports.Container = Container;
var enter = (0, _styledComponents.keyframes)(["100%{transform:translateX(0px);height:auto;padding-bottom:20px;}50%{height:auto;padding-bottom:20px;}0%{height:0px;padding-bottom:0px;transform:translateX(515px);}"]);
var leave = (0, _styledComponents.keyframes)(["0%{transform:translateX(0px);height:auto;padding-bottom:20px;}50%{height:auto;padding-bottom:20px;}100%{height:0px;padding-bottom:0px;transform:translateX(515px);}"]);

var AnimationContainer = _styledComponents["default"].div.withConfig({
  displayName: "Toaststyles__AnimationContainer",
  componentId: "fxfvhp-12"
})(["animation:", " forwards;animation-duration:", "ms;overflow:hidden;"], function (props) {
  return props.state === 'entering' || props.state === 'entered' ? enter : leave;
}, function (props) {
  return props.duration;
});

exports.AnimationContainer = AnimationContainer;

var Content = _styledComponents["default"].div.withConfig({
  displayName: "Toaststyles__Content",
  componentId: "fxfvhp-13"
})(["display:flex;justify-content:flex-start;align-items:center;min-height:24px;"]);

exports.Content = Content;
var typographyHard = (0, _styledComponents.css)(["font-size:16px;font-weight:500;line-height:22px;"]);
var typographySoft = (0, _styledComponents.css)(["font-size:16px;font-weight:400;line-height:22px;"]);

var Message = _styledComponents["default"].div.withConfig({
  displayName: "Toaststyles__Message",
  componentId: "fxfvhp-14"
})(["display:flex;flex-direction:column;justify-content:center;align-items:flex-start;font-family:", ";", ";text-align:left;color:", ";& span{margin-top:8px;font-family:", ";", ";letter-spacing:0px;text-align:left;color:", ";}"], getTheme('font-family', 'Roboto'), getTheme('typography.subhead', typographyHard), getTheme('colors.dark-text', '#405f71'), getTheme('font-family', 'Roboto'), getTheme('typography.body', typographySoft), getTheme('colors.dark-text70', '#798e9b'));

exports.Message = Message;

var IconBox = _styledComponents["default"].div.withConfig({
  displayName: "Toaststyles__IconBox",
  componentId: "fxfvhp-15"
})(["display:flex;justify-content:center;align-items:center;margin-right:24px;"]);

exports.IconBox = IconBox;

var LargeContent = _styledComponents["default"].div.withConfig({
  displayName: "Toaststyles__LargeContent",
  componentId: "fxfvhp-16"
})(["margin-left:", ";margin-right:24px;margin-top:3px;font-family:", ";", ";letter-spacing:0px;text-align:left;color:#798e9b;"], function (props) {
  return props.base ? '0px' : '48px';
}, getTheme('font-family', 'Roboto'), getTheme('typography.body', typographySoft));

exports.LargeContent = LargeContent;