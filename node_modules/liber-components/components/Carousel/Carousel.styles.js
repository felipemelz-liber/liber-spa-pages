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
exports.Body = exports.Hidden = exports.RightChavron = exports.LeftChavron = exports.Dot = exports.DotsContainer = exports.Carousels = void 0;

require("core-js/modules/es6.object.define-properties");

require("core-js/modules/es6.object.freeze");

var _styledComponents = _interopRequireWildcard(require("styled-components"));

var _Util = require("../Util");

var _Themes = require("../Themes");

var _Icons = require("../Icons");

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function _getRequireWildcardCache() { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; if (obj != null) { var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _templateObject() {
  var data = _taggedTemplateLiteral(["\n      pointer-events: all;\n    "]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

var getPos = function getPos(size, index) {
  var pos = size && index ? -1 * size * parseFloat(index) : 0;
  return "".concat(pos, "px");
};

var Carousels = _styledComponents["default"].div.withConfig({
  displayName: "Carouselstyles__Carousels",
  componentId: "nmajyf-0"
})(["display:flex;transform:translateX(", ");transition:transform .5s ease-in-out;width:100%;height:100%;& > *{min-width:100%;min-height:100%;}"], function (props) {
  return getPos(props.size, props.index);
});

exports.Carousels = Carousels;
var inner = (0, _styledComponents.css)(["position:absolute;bottom:0px;left:0px;opacity:0.2;transition:opacity .25s ease-in-out;"]);
var outer = (0, _styledComponents.css)([""]);

var DotsContainer = _styledComponents["default"].div.withConfig({
  displayName: "Carouselstyles__DotsContainer",
  componentId: "nmajyf-1"
})(["min-height:30px;width:100%;display:flex;justify-content:center;align-items:center;", ";"], function (props) {
  return props.inner ? inner : outer;
});

exports.DotsContainer = DotsContainer;

var Dot = _styledComponents["default"].span.withConfig({
  displayName: "Carouselstyles__Dot",
  componentId: "nmajyf-2"
})(["min-width:10px;min-height:10px;border-radius:50%;border:2px solid var(--color);margin:0px 4px;background-color:", ";cursor:pointer;"], function (props) {
  return props.current ? 'var(--color)' : 'transparent';
});

exports.Dot = Dot;
var chavron = (0, _styledComponents.css)(["width:50px;height:50px;position:absolute;top:calc(50% - 25px);fill:var(--color);cursor:pointer;opacity:0.2;transition:opacity .25s ease-in-out;"]);
var LeftChavron = (0, _styledComponents["default"])(_Icons.FaChevronDown).withConfig({
  displayName: "Carouselstyles__LeftChavron",
  componentId: "nmajyf-3"
})(["transform:rotate(90deg);left:10px;", ""], chavron);
exports.LeftChavron = LeftChavron;
var RightChavron = (0, _styledComponents["default"])(_Icons.FaChevronDown).withConfig({
  displayName: "Carouselstyles__RightChavron",
  componentId: "nmajyf-4"
})(["transform:rotate(-90deg);right:10px;", ""], chavron);
exports.RightChavron = RightChavron;

var Hidden = _styledComponents["default"].div.withConfig({
  displayName: "Carouselstyles__Hidden",
  componentId: "nmajyf-5"
})(["--color:", ";width:", ";height:", ";overflow:hidden;position:relative;&:hover > *{opacity:1;}& ", ",& ", "{pointer-events:none;", "}"], function (props) {
  return (0, _Themes.handleThemeFromObject)(props.theme, 'colors.v2.gray1', '#eaf7ff');
}, function (props) {
  return "".concat(props.width, "px") || '600px';
}, function (props) {
  return "".concat(props.height, "px") || '150px';
}, LeftChavron, RightChavron, _Util.media.large(_templateObject()));

exports.Hidden = Hidden;

var Body = _styledComponents["default"].div.withConfig({
  displayName: "Carouselstyles__Body",
  componentId: "nmajyf-6"
})(["position:relative;--color:", ";"], function (props) {
  return (0, _Themes.handleThemeFromObject)(props.theme, 'colors.v2.liberBlue', '#eaf7ff');
});

exports.Body = Body;