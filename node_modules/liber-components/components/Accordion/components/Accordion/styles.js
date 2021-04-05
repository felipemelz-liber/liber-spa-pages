"use strict";

require("core-js/modules/es6.object.define-property");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.AccordionAction = exports.ShowBox = exports.AccordionBox = void 0;

require("core-js/modules/es6.object.define-properties");

require("core-js/modules/es6.object.freeze");

var _styledComponents = _interopRequireDefault(require("styled-components"));

var _Util = require("../../../Util");

var _Themes = require("../../../Themes");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _templateObject() {
  var data = _taggedTemplateLiteral(["\n    padding: 30px 50px;\n  "]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

var AccordionBox = _styledComponents["default"].div.withConfig({
  displayName: "styles__AccordionBox",
  componentId: "rhrfqw-0"
})(["overflow:hidden;width:100%;background-color:", ";border:", ";transition:all 400ms ", ";&:hover{background-color:", ";}"], function (props) {
  return props.open ? (0, _Themes.handleThemeFromObject)(props.theme, 'accordion.boxBackgroundOpen', '#fff') : (0, _Themes.handleThemeFromObject)(props.theme, 'accordion.boxBackgroundClosed', '#f9f9f9');
}, function (props) {
  return props.open ? "1px solid ".concat((0, _Themes.handleThemeFromObject)(props.theme, 'accordion.boxBorderOpen', '#fff')) : "solid 1px ".concat((0, _Themes.handleThemeFromObject)(props.theme, 'accordion.boxBorderClosed', 'rgba(150, 150, 150, 0.18)'));
}, function (props) {
  return props.open ? 'ease-in' : 'ease-out';
}, function (props) {
  return props.open ? (0, _Themes.handleThemeFromObject)(props.theme, 'accordion.boxBackgroundOpen', '#fff') : (0, _Themes.handleThemeFromObject)(props.theme, 'accordion.boxBackgroundHover', '#f3f3f3');
});

exports.AccordionBox = AccordionBox;

var ShowBox = _styledComponents["default"].div.withConfig({
  displayName: "styles__ShowBox",
  componentId: "rhrfqw-1"
})(["max-height:", ";transition:max-height 400ms ", ";overflow:hidden;"], function (props) {
  return props.open ? props.size : '0px';
}, function (props) {
  return props.open ? 'ease-in' : 'ease-out';
});

exports.ShowBox = ShowBox;

var AccordionAction = _styledComponents["default"].div.withConfig({
  displayName: "styles__AccordionAction",
  componentId: "rhrfqw-2"
})(["padding:20px 50px;cursor:pointer;box-sizing:border-box;display:inline-block;background-color:", ";width:100%;transition:all 400ms ", ";position:relative;", " &:after{position:absolute;top:calc(50% - 4px);left:15px;width:0;height:0;padding:0;content:'';border-left:7px solid transparent;border-right:7px solid transparent;border-top:8px solid ", ";pointer-events:none;transform:", ";transition:all 400ms ", ";}"], function (props) {
  return props.open ? props.color || 'transparent' : 'transparent';
}, function (props) {
  return props.open ? 'ease-in' : 'ease-out';
}, _Util.media.large(_templateObject()), function (props) {
  return props.open ? (0, _Themes.handleThemeFromObject)(props.theme, 'accordion.actionBorderTopOpen', '#009dff') : (0, _Themes.handleThemeFromObject)(props.theme, 'accordion.actionBorderTopClosed', '#4e4e4e');
}, function (props) {
  return props.open ? 'rotate(0deg)' : 'rotate(-90deg)';
}, function (props) {
  return props.open ? 'ease-in' : 'ease-out';
});

exports.AccordionAction = AccordionAction;