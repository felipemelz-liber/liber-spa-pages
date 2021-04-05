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
exports.Center = exports.ModalButtons = exports.ModalContent = exports.ModalContainer = exports.IconLinkButton = exports.IconButton = exports.Mark = exports.Link = exports.BlueButton = exports.WhiteButton = exports.Row = exports.Badge = exports.Hr = exports.LinkButton = exports.Button = exports.SpinnigSpinner = exports.CardTitle = exports.Card = exports.Header4 = exports.Header3 = exports.Header2 = exports.Container = exports.Fade = exports.Global = void 0;

require("core-js/modules/es6.object.define-properties");

require("core-js/modules/es6.object.freeze");

var _styledComponents = _interopRequireWildcard(require("styled-components"));

var _Icons = require("../Icons");

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function _getRequireWildcardCache() { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; if (obj != null) { var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _templateObject2() {
  var data = _taggedTemplateLiteral(["\n  .fade-enter {\n  opacity: 0.01;\n  }\n\n  .fade-enter.fade-enter-active {\n  opacity: 1;\n  transition: opacity 1s ease-in;\n  }\n\n  .fade-exit {\n  opacity: 1;\n  }\n\n  .fade-exit.fade-exit-active {\n  opacity: 0.01;\n  transition: opacity 300ms ease-in;\n  }\n"]);

  _templateObject2 = function _templateObject2() {
    return data;
  };

  return data;
}

function _templateObject() {
  var data = _taggedTemplateLiteral(["\n  @import url('https://fonts.googleapis.com/css?family=Roboto:400,500,700,900');\n  @import url('https://fonts.googleapis.com/css?family=Nunito:400,500,700,900');\n  @import url('https://fonts.googleapis.com/css?family=Open+Sans:400,500,700,900');\n  @font-face {\n    font-family: -apple-system, system-ui, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif;\n  }\n  body{\n    margin:0;\n    padding:0;\n    line-height: 1.5;\n    font-family: -apple-system, system-ui, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif;\n  }\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

var Global = (0, _styledComponents.createGlobalStyle)(_templateObject());
exports.Global = Global;
var Fade = (0, _styledComponents.createGlobalStyle)(_templateObject2());
exports.Fade = Fade;

var Container = _styledComponents["default"].div.withConfig({
  displayName: "GenericStyles__Container",
  componentId: "jict78-0"
})(["margin:0 auto;max-width:100%;padding-right:15px;padding-left:15px;box-sizing:border-box;width:540px;@media (min-width:576px){width:540px;}@media (min-width:768px){width:720px;}@media (min-width:992px){width:960px;}@media (min-width:1200px){width:1140px;}"]);

exports.Container = Container;

var Header2 = _styledComponents["default"].h2.withConfig({
  displayName: "GenericStyles__Header2",
  componentId: "jict78-1"
})(["color:", ";font-size:40px;margin:15px 0px 9px 0px;font-family:Roboto;font-weight:500;"], function (props) {
  return props.color || '#009DFF';
});

exports.Header2 = Header2;

var Header3 = _styledComponents["default"].h2.withConfig({
  displayName: "GenericStyles__Header3",
  componentId: "jict78-2"
})(["color:", ";font-weight:bold;font-size:30px;margin:15px 0px 9px 0px;font-family:inherit;"], function (props) {
  return props.color || '#009DFF';
});

exports.Header3 = Header3;

var Header4 = _styledComponents["default"].h2.withConfig({
  displayName: "GenericStyles__Header4",
  componentId: "jict78-3"
})(["color:", ";font-weight:bold;font-size:24px;margin:15px 0px 9px 0px;font-family:inherit;"], function (props) {
  return props.color || '#009DFF';
});

exports.Header4 = Header4;

var Card = _styledComponents["default"].div.withConfig({
  displayName: "GenericStyles__Card",
  componentId: "jict78-4"
})(["background-color:#ffffff;box-shadow:0 2px 5px 0 rgba(0,0,0,0.2);overflow:hidden;display:inline-block;position:relative;margin:8px 25px 16px 0;height:", ";margin-right:0px;width:100%;@media (min-width:576px){margin-right:0px;width:100%;}@media (min-width:768px){margin-right:0px;width:100%;}@media (min-width:992px){margin-right:25px;width:", ";}@media (min-width:1200px){margin-right:25px;width:", ";}"], function (props) {
  return props.height ? props.height : 'unset';
}, function (props) {
  return props.width ? props.width : 'unset';
}, function (props) {
  return props.width ? props.width : 'unset';
});

exports.Card = Card;

var CardTitle = _styledComponents["default"].div.withConfig({
  displayName: "GenericStyles__CardTitle",
  componentId: "jict78-5"
})(["font-family:Roboto;font-size:20px;font-weight:900;text-align:center;color:", ";background-color:", ";border-radius:2px 2px 0px 0;padding:8px 0;text-transform:uppercase;box-sizing:border-box;"], function (props) {
  return props.color ? props.Color : '#ffffff';
}, function (props) {
  return props.backgroundColor ? props.backgroundColor : '#009dff';
});

exports.CardTitle = CardTitle;
var spinning = (0, _styledComponents.keyframes)(["to{transform:rotate(360deg);}"]);
var SpinnigSpinner = (0, _styledComponents["default"])(_Icons.FaSpinner).withConfig({
  displayName: "GenericStyles__SpinnigSpinner",
  componentId: "jict78-6"
})(["width:25px;height:25px;animation:", " 2s linear infinite;fill:#009dff;"], spinning);
exports.SpinnigSpinner = SpinnigSpinner;
var buttonRipple = (0, _styledComponents.keyframes)(["0%{transform:scale(0,0);opacity:1;}20%{transform:scale(25,25);opacity:1;}100%{opacity:0;transform:scale(40,40);}"]);

var Button = _styledComponents["default"].button.withConfig({
  displayName: "GenericStyles__Button",
  componentId: "jict78-7"
})(["background-color:#a4a4a4;color:#ffffff;border:0px;border-radius:2px;height:49px;font-size:20px;font-weight:600;cursor:pointer;padding:0 16px;width:", ";height:", ";transition:all 450ms cubic-bezier(0.23,1,0.32,1) 0ms;box-sizing:border-box;position:relative;overflow:hidden;:focus{outline:0;}&:hover{background-color:#757575;}&:after{content:'';position:absolute;top:50%;left:50%;width:5px;height:5px;background:rgba(206,206,206,0.5);opacity:0.5;opacity:0;border-radius:100%;transform:scale(1,1) translate(-50%);transform-origin:50% 50%;}&:focus:not(:active)::after{animation:", " 0.8s ease-out;}"], function (props) {
  return props.width ? props.width : 'unset';
}, function (props) {
  return props.height ? props.height : '49px';
}, buttonRipple);

exports.Button = Button;

var LinkButton = _styledComponents["default"].a.withConfig({
  displayName: "GenericStyles__LinkButton",
  componentId: "jict78-8"
})(["background-color:#ffffff;color:#000000;border:0px;border-radius:2px;font-size:20px;font-weight:600;cursor:pointer;padding:0px 16px;width:", ";height:", ";transition:all 450ms cubic-bezier(0.23,1,0.32,1) 0ms;display:flex;justify-content:center;align-items:center;box-sizing:border-box;position:relative;overflow:hidden;&:hover{background-color:#cecece;}&:after{content:'';position:absolute;top:50%;left:50%;width:5px;height:5px;background:rgba(206,206,206,0.5);opacity:0.5;opacity:0;border-radius:100%;transform:scale(1,1) translate(-50%);transform-origin:50% 50%;}&:focus:not(:active)::after{animation:", " 0.8s ease-out;}"], function (props) {
  return props.width ? props.width : 'unset';
}, function (props) {
  return props.height ? props.height : '49px';
}, buttonRipple);

exports.LinkButton = LinkButton;

var Hr = _styledComponents["default"].hr.withConfig({
  displayName: "GenericStyles__Hr",
  componentId: "jict78-9"
})(["border:0;border-top:1px solid rgba(0,0,0,0.1);margin:18px 0px;"]);

exports.Hr = Hr;

var Badge = _styledComponents["default"].div.withConfig({
  displayName: "GenericStyles__Badge",
  componentId: "jict78-10"
})(["line-height:22px;font-weight:bold;border-radius:8px;background-color:#007ecc;color:#fafafa;padding:2px 9px;display:inline;margin-right:16px;font-size:18px;"]);

exports.Badge = Badge;

var Row = _styledComponents["default"].div.withConfig({
  displayName: "GenericStyles__Row",
  componentId: "jict78-11"
})(["display:flex;justify-content:", ";align-items:", ";"], function (props) {
  return props.justifyContent || 'flex-start';
}, function (props) {
  return props.alignItems || 'center';
});

exports.Row = Row;
var WhiteButton = (0, _styledComponents["default"])(LinkButton).withConfig({
  displayName: "GenericStyles__WhiteButton",
  componentId: "jict78-12"
})(["background-color:#fafafa;color:#009dff !important;border:2px solid #009dff;width:233px;margin-top:25px;margin-left:10px;&:hover{background-color:#006fcb;color:#fafafa !important;border:0px;}"]);
exports.WhiteButton = WhiteButton;
var BlueButton = (0, _styledComponents["default"])(Button).withConfig({
  displayName: "GenericStyles__BlueButton",
  componentId: "jict78-13"
})(["background-color:#009dff;color:#fafafa;width:341px;margin-top:25px;margin-left:10px;&:hover{background-color:#006fcb;}"]);
exports.BlueButton = BlueButton;

var Link = _styledComponents["default"].a.withConfig({
  displayName: "GenericStyles__Link",
  componentId: "jict78-14"
})(["font-size:16px;font-weight:500;text-decoration:none;color:#009dff;transition:color 450ms cubic-bezier(0.23,1,0.32,1) 0ms;&:hover{color:#006fcb;}"]);

exports.Link = Link;

var Mark = _styledComponents["default"].mark.withConfig({
  displayName: "GenericStyles__Mark",
  componentId: "jict78-15"
})(["background-color:transparent;color:#009dff;"]);

exports.Mark = Mark;
var IconButton = (0, _styledComponents["default"])(Button).withConfig({
  displayName: "GenericStyles__IconButton",
  componentId: "jict78-16"
})(["padding:5px;background:unset;background-color:transparent;border:0px;border-radius:15px;width:30px;height:30px;box-sizing:border-box;&:hover{background-color:unset;}&:hover > *{fill:#009dff;}"]);
exports.IconButton = IconButton;
var IconLinkButton = (0, _styledComponents["default"])(LinkButton).withConfig({
  displayName: "GenericStyles__IconLinkButton",
  componentId: "jict78-17"
})(["padding:5px;background:unset;background-color:transparent;border:0px;border-radius:15px;width:30px;height:30px;box-sizing:border-box;&:hover{background-color:unset;}&:hover > *{fill:#009dff;}"]);
exports.IconLinkButton = IconLinkButton;

var ModalContainer = _styledComponents["default"].div.withConfig({
  displayName: "GenericStyles__ModalContainer",
  componentId: "jict78-18"
})(["display:flex;flex-direction:column;padding:30px;height:70vh;box-sizing:border-box;@media (min-width:576px){width:unset;}@media (min-width:768px){width:unset;}@media (min-width:992px){width:50vw;}@media (min-width:1200px){width:50vw;}"]);

exports.ModalContainer = ModalContainer;

var ModalContent = _styledComponents["default"].div.withConfig({
  displayName: "GenericStyles__ModalContent",
  componentId: "jict78-19"
})(["flex-grow:1;display:flex;flex-direction:", ";overflow:auto;"], function (props) {
  return props.column ? 'column' : null;
});

exports.ModalContent = ModalContent;

var ModalButtons = _styledComponents["default"].div.withConfig({
  displayName: "GenericStyles__ModalButtons",
  componentId: "jict78-20"
})(["display:flex;justify-content:flex-end;align-items:center;"]);

exports.ModalButtons = ModalButtons;

var Center = _styledComponents["default"].div.withConfig({
  displayName: "GenericStyles__Center",
  componentId: "jict78-21"
})(["display:flex;justify-content:center;align-items:center;"]);

exports.Center = Center;