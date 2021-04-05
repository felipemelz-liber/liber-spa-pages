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
exports.Bar = exports.BarShadows = exports.BarSectors = exports.BarShadow = exports.BarSector = exports.Value = exports.Container = exports.Title = void 0;

require("core-js/modules/es6.object.define-properties");

require("core-js/modules/es6.object.freeze");

var _styledComponents = _interopRequireWildcard(require("styled-components"));

var _Themes = require("../../Themes");

var _Resizable = _interopRequireDefault(require("../Resizable"));

var _Util = require("../../Util");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function _getRequireWildcardCache() { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; if (obj != null) { var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _templateObject3() {
  var data = _taggedTemplateLiteral(["\n    cursor: pointer;\n    &:hover {\n      height: calc(100% + 2.5px);\n      box-shadow: 2px 2px 10px 0px ", ";\n      z-index: 5;\n    }\n"]);

  _templateObject3 = function _templateObject3() {
    return data;
  };

  return data;
}

function _templateObject2() {
  var data = _taggedTemplateLiteral(["\n    --default-font-size: ", ";\n    font-size: var(--default-font-size);\n  "]);

  _templateObject2 = function _templateObject2() {
    return data;
  };

  return data;
}

function _templateObject() {
  var data = _taggedTemplateLiteral(["\n    width: 100%;\n    justify-content: flex-start;\n    align-items: flex-start;\n    margin: 15px 42px 0px 42px;\n\n    & > ", ":nth-child(1) {\n      display: inline-block;\n    }\n    &  > ", ":nth-child(3) {\n      display: none;\n    }\n  "]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

var Title = _styledComponents["default"].h3.withConfig({
  displayName: "styles__Title",
  componentId: "p79a2y-0"
})(["font-family:", ";font-size:", ";line-height:", ";font-weight:", ";;color:", ";text-align:left;margin:0px 0px 10px 0px;"], function (props) {
  return (0, _Themes.handleThemeFromObject)(props.theme, 'barDisplay.title.fontFamily', 'Roboto');
}, function (props) {
  return (0, _Themes.handleThemeFromObject)(props.theme, 'barDisplay.title.fontSize', '20px');
}, function (props) {
  return (0, _Themes.handleThemeFromObject)(props.theme, 'barDisplay.title.fontSize', '20px');
}, function (props) {
  return (0, _Themes.handleThemeFromObject)(props.theme, 'barDisplay.title.fontWeight', '400');
}, function (props) {
  return (0, _Themes.handleThemeFromObject)(props.theme, 'barDisplay.title.color', '#717171');
});

exports.Title = Title;

var Container = _styledComponents["default"].div.withConfig({
  displayName: "styles__Container",
  componentId: "p79a2y-1"
})(["display:inline-flex;flex-direction:column;justify-content:center;align-items:center;margin:25px;box-sizing:border-box;& > ", ":nth-child(1){display:none;}& > ", ":nth-child(3){display:inline-block;}", ""], Title, Title, _Util.media.large(_templateObject(), Title, Title));

exports.Container = Container;
var Value = (0, _styledComponents["default"])(_Resizable["default"]).withConfig({
  displayName: "styles__Value",
  componentId: "p79a2y-2"
})(["--default-font-size:", ";font-family:Roboto;line-height:0.8em;font-size:var(--default-font-size);font-weight:bold;color:", ";transition:all 100ms linear;position:relative;margin-left:", ";margin-bottom:10px;box-sizing:border-box;", " ", "}}"], function (props) {
  return (0, _Themes.handleThemeFromObject)(props.theme, 'barDisplay.value.fontSizeSmall', '32px');
}, function (props) {
  return (0, _Themes.handleThemeFromObject)(props.theme, 'barDisplay.value.color', '#717171');
}, function (props) {
  return props.prefix && props.prefix.length > 0 ? '26px' : null;
}, _Util.media.large(_templateObject2(), function (props) {
  return (0, _Themes.handleThemeFromObject)(props.theme, 'barDisplay.value.fontSizeLarge', '40px');
}), function (props) {
  return props.prefix ? (0, _styledComponents.css)(["&:before{position:absolute;content:\"", "\";font-size:50%;line-height:50%;top:5px;right:100%;}"], props.prefix) : null;
});
exports.Value = Value;

var BarSector = _styledComponents["default"].div.withConfig({
  displayName: "styles__BarSector",
  componentId: "p79a2y-3"
})(["background:", ";border-radius:", ";flex-basis:", ";height:", ";transition:all  100ms;box-shadow:", ";z-index:", ";flex-grow:1;", "}}", ""], function (props) {
  return (0, _Util.handleColor)(props.color, {
    defaultColor: (0, _Themes.handleThemeFromObject)(props.theme, 'barDisplay.bar', '#a7a7a7')
  });
}, function (props) {
  return props.percentage === '100%' ? '5px!important' : null;
}, function (props) {
  return props.percentage || '50%';
}, function (props) {
  return !props.highlight ? '100%' : null;
}, function (props) {
  return !props.highlight ? '2px 2px 10px 0px transparent;' : null;
}, function (props) {
  return !props.highlight ? '0' : null;
}, function (props) {
  return props.highlight ? (0, _styledComponents.css)(["height:calc(100% + 2.5px);box-shadow:2px 2px 10px 0px ", ";z-index:5;"], (0, _Util.handleColor)(props.color, {
    defaultColor: (0, _Themes.handleThemeFromObject)(props.theme, 'barDisplay.bar', '#a7a7a7'),
    position: 0
  })) : null;
}, _Util.media.large(_templateObject3(), function (props) {
  return (0, _Util.handleColor)(props.color, {
    defaultColor: (0, _Themes.handleThemeFromObject)(props.theme, 'barDisplay.bar', '#a7a7a7'),
    position: 0
  });
}));

exports.BarSector = BarSector;

var BarShadow = _styledComponents["default"].div.withConfig({
  displayName: "styles__BarShadow",
  componentId: "p79a2y-4"
})(["flex-basis:", ";height:100%;opacity:0.5;box-shadow:2px 2px 10px 0px ", ";&:first-child{box-shadow:0px 2px 10px 0px ", ";}"], function (props) {
  return props.percentage || '50%';
}, function (props) {
  return (0, _Util.handleColor)(props.color, {
    defaultColor: (0, _Themes.handleThemeFromObject)(props.theme, 'barDisplay.bar', '#a7a7a7'),
    position: 0
  });
}, function (props) {
  return (0, _Util.handleColor)(props.color, {
    defaultColor: (0, _Themes.handleThemeFromObject)(props.theme, 'barDisplay.bar', '#a7a7a7'),
    position: 0
  });
});

exports.BarShadow = BarShadow;

var BarSectors = _styledComponents["default"].div.withConfig({
  displayName: "styles__BarSectors",
  componentId: "p79a2y-5"
})(["display:flex;justify-content:flex-start;align-items:center;width:100%;height:100%;position:absolute;z-index:2;top:0;left:0;right:0;bottom:0px;"]);

exports.BarSectors = BarSectors;

var BarShadows = _styledComponents["default"].div.withConfig({
  displayName: "styles__BarShadows",
  componentId: "p79a2y-6"
})(["display:flex;justify-content:flex-start;align-items:center;width:100%;height:100%;position:absolute;z-index:1;top:0;left:0;right:0;bottom:0px;"]);

exports.BarShadows = BarShadows;

var Bar = _styledComponents["default"].div.withConfig({
  displayName: "styles__Bar",
  componentId: "p79a2y-7"
})(["position:relative;width:50%;height:10px;border:0px;border-radius:5px;background-color:", ";box-sizing:border-box;max-width:100%;& ", ":first-child,& ", ":first-child{border-radius:5px 0px 0px 5px;}& ", ":last-child,& ", ":last-child{border-radius:0px 5px 5px 0px;}& ", ",& ", "{border-radius:5px;}"], function (props) {
  return (0, _Themes.handleThemeFromObject)(props.theme, 'barDisplay.bar', '#a7a7a7');
}, BarSector, BarShadow, BarSector, BarShadow, BarSectors, BarShadows);

exports.Bar = Bar;