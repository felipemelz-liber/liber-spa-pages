"use strict";

require("core-js/modules/es6.object.define-property");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.GreenLink = exports.MobileMessageBox = exports.MobileBrand = exports.MobileContent = exports.MobileIllustration = exports.DesktopMessageBox = exports.DesktopContent = exports.DesktopIllustration = exports.DesktopBackground = void 0;

var _styledComponents = _interopRequireDefault(require("styled-components"));

var _Background = _interopRequireDefault(require("./Background"));

var _DesktopIllustration = _interopRequireDefault(require("./DesktopIllustration"));

var _MobileIllustration = _interopRequireDefault(require("./MobileIllustration"));

var _MobileBrand = _interopRequireDefault(require("./MobileBrand"));

var _styles = require("../styles");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var DesktopBackground = (0, _styledComponents["default"])(_Background["default"]).withConfig({
  displayName: "styles__DesktopBackground",
  componentId: "sc-1lrqprs-0"
})(["", ""], _styles.DesktopBackgroundStyles);
exports.DesktopBackground = DesktopBackground;
var DesktopIllustration = (0, _styledComponents["default"])(_DesktopIllustration["default"]).withConfig({
  displayName: "styles__DesktopIllustration",
  componentId: "sc-1lrqprs-1"
})(["", ""], _styles.DesktopIllustrationStyles);
exports.DesktopIllustration = DesktopIllustration;

var DesktopContent = _styledComponents["default"].div.withConfig({
  displayName: "styles__DesktopContent",
  componentId: "sc-1lrqprs-2"
})(["", ""], _styles.DesktopContentStyles);

exports.DesktopContent = DesktopContent;

var DesktopMessageBox = _styledComponents["default"].div.withConfig({
  displayName: "styles__DesktopMessageBox",
  componentId: "sc-1lrqprs-3"
})(["", ""], _styles.DesktopMessageBoxStyles);

exports.DesktopMessageBox = DesktopMessageBox;
var MobileIllustration = (0, _styledComponents["default"])(_MobileIllustration["default"]).withConfig({
  displayName: "styles__MobileIllustration",
  componentId: "sc-1lrqprs-4"
})(["", ""], _styles.MobileIllustrationStyles);
exports.MobileIllustration = MobileIllustration;

var MobileContent = _styledComponents["default"].div.withConfig({
  displayName: "styles__MobileContent",
  componentId: "sc-1lrqprs-5"
})(["", ""], _styles.MobileContentStyles);

exports.MobileContent = MobileContent;
var MobileBrand = (0, _styledComponents["default"])(_MobileBrand["default"]).withConfig({
  displayName: "styles__MobileBrand",
  componentId: "sc-1lrqprs-6"
})(["", ""], _styles.MobileBrandStyles);
exports.MobileBrand = MobileBrand;
var MobileMessageBox = (0, _styledComponents["default"])(DesktopMessageBox).withConfig({
  displayName: "styles__MobileMessageBox",
  componentId: "sc-1lrqprs-7"
})(["", ""], _styles.MobileMessageBoxStyles);
exports.MobileMessageBox = MobileMessageBox;

var GreenLink = _styledComponents["default"].a.withConfig({
  displayName: "styles__GreenLink",
  componentId: "sc-1lrqprs-8"
})(["text-align:center;background-color:#13CE66;color:#ffffff;text-decoration:none;border:0px;border-radius:0.25vw;font-size:1.5vw;font-weight:600;padding:0.25vw 2.15vw;box-sizing:border-box;white-space:nowrap;&:hover{background-color:#0DAB53;}"]);

exports.GreenLink = GreenLink;