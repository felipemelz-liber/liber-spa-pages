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
exports.ProgressContainer = exports.Separator = exports.Step = exports.Label = void 0;

var _styledComponents = _interopRequireWildcard(require("styled-components"));

var _Themes = require("../Themes");

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function _getRequireWildcardCache() { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; if (obj != null) { var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

var getTheme = function getTheme(key, fallback) {
  return (0, _styledComponents.css)(["", ""], function (props) {
    return (0, _Themes.handleThemeFromObject)(props.theme, key, fallback);
  });
};

var ANIMATION_TIME = '450ms';
var fontFamily = (0, _styledComponents.css)(["", ""], getTheme('font-family', 'Roboto'));
var p = (0, _styledComponents.css)(["", ""], getTheme('font-sizes.p', '16px'));
var medium = (0, _styledComponents.css)(["", ""], getTheme('font-wights.medium', '500'));
var white = (0, _styledComponents.css)(["", ""], getTheme('colors.white', '#ffffff'));
var primary = (0, _styledComponents.css)(["", ""], getTheme('colors.primary', '#009dff'));
var primary6 = (0, _styledComponents.css)(["", ""], getTheme('colors.primary6', '#f0f9ff'));
var darkText38 = (0, _styledComponents.css)(["", ""], getTheme('colors.dark-text38', '#b6c2c9'));
var header = (0, _styledComponents.css)(["", ""], getTheme('colors.header', '#f9fafa'));

var Label = _styledComponents["default"].div.withConfig({
  displayName: "ProgressBar__Label",
  componentId: "sc-16j1djs-0"
})(["position:absolute;top:calc(100% + 12px);font-family:", ";font-size:", ";font-weight:", ";line-height:15px;text-align:center;white-space:nowrap;transition:color ", " cubic-bezier(0.23,1,0.32,1) 0ms;", ""], fontFamily, p, medium, function (props) {
  return props.animationTime || ANIMATION_TIME;
}, function (props) {
  return props.checked ? (0, _styledComponents.css)(["color:", ";transition-delay:", ";"], primary, props.animationTime || ANIMATION_TIME) : (0, _styledComponents.css)(["color:", ";"], darkText38);
});

exports.Label = Label;

var handleStageTypes = function handleStageTypes() {
  var type = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 'basic';
  return {
    basic: (0, _styledComponents.css)(["--base-color:", ";--base-bg:", ";"], white, darkText38),
    checked: (0, _styledComponents.css)(["--base-color:", ";--base-bg:", ";transition-delay:", ";"], primary6, primary, function (props) {
      return props.animationTime || ANIMATION_TIME;
    }),
    "final": (0, _styledComponents.css)(["--base-color:", ";--base-bg:", ";"], darkText38, header)
  }[type];
};

var Step = _styledComponents["default"].div.withConfig({
  displayName: "ProgressBar__Step",
  componentId: "sc-16j1djs-1"
})(["--size:28px;max-width:var(--size);min-width:var(--size);max-height:var(--size);min-height:var(--size);display:flex;justify-content:center;align-items:center;position:relative;cursor:pointer;font-family:", ";font-size:", ";font-weight:", ";line-height:22px;text-align:center;background-color:var(--base-bg);border-radius:50%;color:var(--base-color);transition:all ", " cubic-bezier(0.23,1,0.32,1) 0ms;", " & svg{fill:var(--base-color);--size:16px;min-width:var(--size);max-width:var(--size);min-height:var(--size);max-height:var(--size);transition:fill ", " cubic-bezier(0.23,1,0.32,1) 0ms;transition-delay:", ";}"], fontFamily, p, medium, function (props) {
  return props.animationTime || ANIMATION_TIME;
}, function (props) {
  return handleStageTypes(props.type);
}, function (props) {
  return props.animationTime || ANIMATION_TIME;
}, function (props) {
  return props.type === 'checked' ? props.animationTime || ANIMATION_TIME : null;
});

exports.Step = Step;

var Separator = _styledComponents["default"].span.withConfig({
  displayName: "ProgressBar__Separator",
  componentId: "sc-16j1djs-2"
})(["--base-color:", ";--selected-color:", ";flex-grow:1;height:2px;background-color:var(--base-color);position:relative;&:after{content:'';position:absolute;height:2px;width:", ";background-color:var(--selected-color);top:0px;left:0px;transition:width ", " cubic-bezier(0.23,1,0.32,1) 0ms;transition-delay:", ";will-change:width;}"], darkText38, primary, function (props) {
  return props.full ? '100%' : '0%';
}, function (props) {
  return props.animationTime || ANIMATION_TIME;
}, function (props) {
  return props.full ? null : props.animationTime || ANIMATION_TIME;
});

exports.Separator = Separator;

var ProgressContainer = _styledComponents["default"].div.withConfig({
  displayName: "ProgressBar__ProgressContainer",
  componentId: "sc-16j1djs-3"
})(["margin:0 140px;height:100%;display:flex;justify-content:space-between;align-items:center;"]);

exports.ProgressContainer = ProgressContainer;