"use strict";

require("core-js/modules/es6.object.define-property");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.MobileMessageBox = exports.MobileBrand = exports.MobileContent = exports.MobileIllustration = exports.DesktopMessageBox = exports.DesktopContent = exports.DesktopIllustration = exports.DesktopBackground = void 0;

require("core-js/modules/es6.object.define-properties");

require("core-js/modules/es6.object.freeze");

var _styledComponents = _interopRequireDefault(require("styled-components"));

var _Util = require("../../Util");

var _Background = _interopRequireDefault(require("./Background"));

var _DesktopIllustration = _interopRequireDefault(require("./DesktopIllustration"));

var _MobileIllustration = _interopRequireDefault(require("./MobileIllustration"));

var _MobileBrand = _interopRequireDefault(require("./MobileBrand"));

var _styles = require("../styles");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _templateObject3() {
  var data = _taggedTemplateLiteral(["\n    max-width: 325px;\n    & h1 {\n      font-size: 34px;\n      margin-bottom: 32px;\n    }\n    & h3 {\n      font-size: 24px;\n      margin-top: unset;\n      margin-bottom: unset;\n    }\n    & a {\n      font-size: 18px;\n    }\n  "]);

  _templateObject3 = function _templateObject3() {
    return data;
  };

  return data;
}

function _templateObject2() {
  var data = _taggedTemplateLiteral(["\n    max-width: 18vw;\n  "]);

  _templateObject2 = function _templateObject2() {
    return data;
  };

  return data;
}

function _templateObject() {
  var data = _taggedTemplateLiteral(["\n    top: 29vh;\n    left: 55vw;\n  "]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

var DesktopBackground = (0, _styledComponents["default"])(_Background["default"]).withConfig({
  displayName: "styles__DesktopBackground",
  componentId: "sc-9grfnx-0"
})(["", ""], _styles.DesktopBackgroundStyles);
exports.DesktopBackground = DesktopBackground;
var DesktopIllustration = (0, _styledComponents["default"])(_DesktopIllustration["default"]).withConfig({
  displayName: "styles__DesktopIllustration",
  componentId: "sc-9grfnx-1"
})(["", ""], _styles.DesktopIllustrationStyles);
exports.DesktopIllustration = DesktopIllustration;

var DesktopContent = _styledComponents["default"].div.withConfig({
  displayName: "styles__DesktopContent",
  componentId: "sc-9grfnx-2"
})(["", " top:25vh;left:58vw;", ""], _styles.DesktopContentStyles, _Util.media.extraLarge(_templateObject()));

exports.DesktopContent = DesktopContent;

var DesktopMessageBox = _styledComponents["default"].div.withConfig({
  displayName: "styles__DesktopMessageBox",
  componentId: "sc-9grfnx-3"
})(["", " max-width:24vw;& h1{margin-top:0.3vw;margin-bottom:1.9vw;}& h3{margin-top:unset;margin-bottom:unset;}", ""], _styles.DesktopMessageBoxStyles, _Util.media.extraLarge(_templateObject2()));

exports.DesktopMessageBox = DesktopMessageBox;
var MobileIllustration = (0, _styledComponents["default"])(_MobileIllustration["default"]).withConfig({
  displayName: "styles__MobileIllustration",
  componentId: "sc-9grfnx-4"
})(["", " left:unset;right:5%;bottom:3%;width:40vh;"], _styles.MobileIllustrationStyles);
exports.MobileIllustration = MobileIllustration;

var MobileContent = _styledComponents["default"].div.withConfig({
  displayName: "styles__MobileContent",
  componentId: "sc-9grfnx-5"
})(["", ""], _styles.MobileContentStyles);

exports.MobileContent = MobileContent;
var MobileBrand = (0, _styledComponents["default"])(_MobileBrand["default"]).withConfig({
  displayName: "styles__MobileBrand",
  componentId: "sc-9grfnx-6"
})(["", ""], _styles.MobileBrandStyles);
exports.MobileBrand = MobileBrand;
var MobileMessageBox = (0, _styledComponents["default"])(DesktopMessageBox).withConfig({
  displayName: "styles__MobileMessageBox",
  componentId: "sc-9grfnx-7"
})(["", " margin-top:25px;& h1{font-size:20px;margin-bottom:20px;}& h3{font-size:14.5px;margin-top:unset;margin-bottom:unset;}& a{font-size:14px;padding:5px 28px;}", ""], _styles.MobileMessageBoxStyles, _Util.media.medium(_templateObject3()));
exports.MobileMessageBox = MobileMessageBox;