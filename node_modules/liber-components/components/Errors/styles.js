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
exports.MobileMessageBoxStyles = exports.MobileBrandStyles = exports.MobileContentStyles = exports.MobileIllustrationStyles = exports.DesktopMessageBoxStyles = exports.DesktopContentStyles = exports.DesktopIllustrationStyles = exports.DesktopBackgroundStyles = exports.MobileBackground = exports.MobileContainer = exports.DesktopContainer = void 0;

require("core-js/modules/es6.object.define-properties");

require("core-js/modules/es6.object.freeze");

var _styledComponents = _interopRequireWildcard(require("styled-components"));

var _Util = require("../Util");

var _MobileBackground = require("./MobileBackground");

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function _getRequireWildcardCache() { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; if (obj != null) { var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _templateObject6() {
  var data = _taggedTemplateLiteral(["\n    max-width: 275px;\n    & h1 { font-size: 34px; }\n    & h3 {\n      font-size: 24px;\n      margin-bottom: 32px;\n    }\n    & a { font-size: 18px; }\n  "]);

  _templateObject6 = function _templateObject6() {
    return data;
  };

  return data;
}

function _templateObject5() {
  var data = _taggedTemplateLiteral(["\n    max-width: 15.5vw;\n    & h1 {\n      font-size: 1.7vw;\n    }\n\n    & h3 {\n      font-size: 1.35vw;\n    }\n\n    & a {\n      font-size: 0.9vw;\n    }\n  "]);

  _templateObject5 = function _templateObject5() {
    return data;
  };

  return data;
}

function _templateObject4() {
  var data = _taggedTemplateLiteral(["\n    top: 28vh;\n    left: 52.5vw;\n  "]);

  _templateObject4 = function _templateObject4() {
    return data;
  };

  return data;
}

function _templateObject3() {
  var data = _taggedTemplateLiteral(["\n    top: 20vh;\n    left: 15vw;\n    width: 40vw;\n  "]);

  _templateObject3 = function _templateObject3() {
    return data;
  };

  return data;
}

function _templateObject2() {
  var data = _taggedTemplateLiteral(["\n    display: none;\n  "]);

  _templateObject2 = function _templateObject2() {
    return data;
  };

  return data;
}

function _templateObject() {
  var data = _taggedTemplateLiteral(["\n    display: block;\n  "]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

var Container = _styledComponents["default"].div.withConfig({
  displayName: "styles__Container",
  componentId: "sc-1f8nl4c-0"
})(["color:#2E2F30;text-align:center;line-height:2em;font-family:Roboto,sans-serif;margin:0;position:relative;width:100vw;height:100vh;overflow:hidden;"]);

var DesktopContainer = (0, _styledComponents["default"])(Container).withConfig({
  displayName: "styles__DesktopContainer",
  componentId: "sc-1f8nl4c-1"
})(["display:none;", ""], _Util.media.large(_templateObject()));
exports.DesktopContainer = DesktopContainer;
var MobileContainer = (0, _styledComponents["default"])(Container).withConfig({
  displayName: "styles__MobileContainer",
  componentId: "sc-1f8nl4c-2"
})(["display:block;", ""], _Util.media.large(_templateObject2()));
exports.MobileContainer = MobileContainer;
var MobileBackground = (0, _styledComponents["default"])(_MobileBackground.MobileBackground).withConfig({
  displayName: "styles__MobileBackground",
  componentId: "sc-1f8nl4c-3"
})(["position:absolute;top:0;left:0;width:100vw;height:100vh;z-index:-1;"]);
exports.MobileBackground = MobileBackground;
var DesktopBackgroundStyles = (0, _styledComponents.css)(["position:absolute;top:0;left:0;width:100vw;height:100vh;z-index:-1;"]);
exports.DesktopBackgroundStyles = DesktopBackgroundStyles;
var DesktopIllustrationStyles = (0, _styledComponents.css)(["position:absolute;top:20vh;left:10vw;width:50vw;z-index:-1;", ""], _Util.media.extraLarge(_templateObject3()));
exports.DesktopIllustrationStyles = DesktopIllustrationStyles;
var DesktopContentStyles = (0, _styledComponents.css)(["position:absolute;display:flex;align-items:center;justify-content:center;top:23.5vh;left:56vw;", ""], _Util.media.extraLarge(_templateObject4()));
exports.DesktopContentStyles = DesktopContentStyles;
var DesktopMessageBoxStyles = (0, _styledComponents.css)(["max-width:20vw;& h1,h3{text-align:justify;letter-spacing:-0.04em;}& h1{color:#c7cfd3;font-size:2.25vw;font-weight:500;margin-bottom:0;}& h3{color:#8f9ea7;font-size:1.8vw;font-weight:300;margin-top:0.3vw;margin-bottom:1.5vw;}& a{text-align:center;background-color:#13CE66;color:#ffffff;text-decoration:none;border:0px;border-radius:0.25vw;font-size:1.5vw;font-weight:600;padding:0.25vw 2.15vw;box-sizing:border-box;white-space:nowrap;&:hover{background-color:#0DAB53;}}", ""], _Util.media.extraLarge(_templateObject5()));
exports.DesktopMessageBoxStyles = DesktopMessageBoxStyles;
var MobileIllustrationStyles = (0, _styledComponents.css)(["position:absolute;left:10.75%;bottom:0;height:auto;width:40vh;z-index:-1;"]);
exports.MobileIllustrationStyles = MobileIllustrationStyles;
var MobileContentStyles = (0, _styledComponents.css)(["margin:auto;height:100%;width:77.75%;"]);
exports.MobileContentStyles = MobileContentStyles;
var MobileBrandStyles = (0, _styledComponents.css)(["margin-top:10%;width:30vh;"]);
exports.MobileBrandStyles = MobileBrandStyles;
var MobileMessageBoxStyles = (0, _styledComponents.css)(["margin:auto;max-width:200px;& h1{font-size:24px;}& h3{font-size:18px;margin-bottom:20px;}& a{font-size:14px;padding:5px 28px;}", ""], _Util.media.medium(_templateObject6()));
exports.MobileMessageBoxStyles = MobileMessageBoxStyles;