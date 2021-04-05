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
exports.StepLabel = exports.StepConnect = exports.StepCheck = exports.StepIcon = exports.StepContainer = exports.Steps = exports.LabelLower = exports.LabelUpper = exports.Progress = void 0;

var _styledComponents = _interopRequireWildcard(require("styled-components"));

var _Icons = require("../../Icons");

var _Themes = require("../../Themes");

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function _getRequireWildcardCache() { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; if (obj != null) { var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

var background = '#fafafa';
var changeWidth = '992px';
var stepActive = '#009dff';
var stepComplete = '#4cbaff';
var stepInactive = '#a4a4a4';

var stepGradient = function stepGradient(complete, active) {
  return "linear-gradient(to right, ".concat(complete, ", ").concat(active, ")");
};

var setConnectColor = function setConnectColor(theme, active, complete) {
  if (active) {
    return stepGradient((0, _Themes.handleThemeFromObject)(theme, 'progressBar.step.complete', stepComplete), (0, _Themes.handleThemeFromObject)(theme, 'progressBar.step.active', stepActive));
  }

  if (complete) {
    return (0, _Themes.handleThemeFromObject)(theme, 'progressBar.step.complete', stepComplete);
  }

  return (0, _Themes.handleThemeFromObject)(theme, 'progressBar.step.inactive', stepInactive);
};

var setStepColor = function setStepColor(theme, active, complete) {
  if (active) {
    return (0, _Themes.handleThemeFromObject)(theme, 'progressBar.step.active', stepActive);
  }

  if (complete) {
    return (0, _Themes.handleThemeFromObject)(theme, 'progressBar.step.complete', stepComplete);
  }

  return (0, _Themes.handleThemeFromObject)(theme, 'progressBar.step.inactive', stepInactive);
};

var Progress = _styledComponents["default"].div.withConfig({
  displayName: "styles__Progress",
  componentId: "sc-1tesida-0"
})(["background-color:", ";padding-top:22px;padding-bottom:22px;"], function (props) {
  return (0, _Themes.handleThemeFromObject)(props.theme, 'progressBar.background', background);
});

exports.Progress = Progress;

var Label = _styledComponents["default"].h4.withConfig({
  displayName: "styles__Label",
  componentId: "sc-1tesida-1"
})(["font-size:22px;font-weight:bold;color:", ";margin:0;"], function (props) {
  return (0, _Themes.handleThemeFromObject)(props.theme, 'progressBar.label', '#4e4e4e');
});

var LabelUpper = (0, _styledComponents["default"])(Label).withConfig({
  displayName: "styles__LabelUpper",
  componentId: "sc-1tesida-2"
})(["@media (max-width:", "){display:none;}"], changeWidth);
exports.LabelUpper = LabelUpper;
var LabelLower = (0, _styledComponents["default"])(Label).withConfig({
  displayName: "styles__LabelLower",
  componentId: "sc-1tesida-3"
})(["margin-top:20px;display:none;@media (max-width:", "){display:block;}"], changeWidth);
exports.LabelLower = LabelLower;

var Steps = _styledComponents["default"].div.withConfig({
  displayName: "styles__Steps",
  componentId: "sc-1tesida-4"
})(["display:flex;flex-direction:row;@media (min-width:", "){margin-top:30px;}"], changeWidth);

exports.Steps = Steps;

var StepContainer = _styledComponents["default"].div.withConfig({
  displayName: "styles__StepContainer",
  componentId: "sc-1tesida-5"
})(["position:relative;display:inline-block;color:", ";width:auto;flex:1;"], function (props) {
  return setStepColor(props.theme, props.active, props.complete);
});

exports.StepContainer = StepContainer;

var StepCell = _styledComponents["default"].div.withConfig({
  displayName: "styles__StepCell",
  componentId: "sc-1tesida-6"
})(["position:relative;display:block;z-index:2;width:25px;height:25px;border-radius:50%;text-align:center;margin:0 auto;overflow:hidden;box-sizing:initial !important;user-select:none;", ""], function (props) {
  return props.clickable ? (0, _styledComponents.css)(["transition:transform 0.2s ease;cursor:pointer;&:hover{transform:scale(1.1);}"]) : null;
});

var StepIcon = (0, _styledComponents["default"])(StepCell).withConfig({
  displayName: "styles__StepIcon",
  componentId: "sc-1tesida-7"
})(["border:solid 3px ", ";background-color:", ";display:flex;align-items:center;justify-content:center;"], function (props) {
  return setStepColor(props.theme, props.active, props.complete);
}, function (props) {
  return props.complete ? (0, _Themes.handleThemeFromObject)(props.theme, 'progressBar.step.complete', stepComplete) : (0, _Themes.handleThemeFromObject)(props.theme, 'progressBar.background', background);
});
exports.StepIcon = StepIcon;
var StepCheck = (0, _styledComponents["default"])(_Icons.FaCheck).withConfig({
  displayName: "styles__StepCheck",
  componentId: "sc-1tesida-8"
})(["width:15px;height:15px;fill:white;"]);
exports.StepCheck = StepCheck;

var StepConnect = _styledComponents["default"].div.withConfig({
  displayName: "styles__StepConnect",
  componentId: "sc-1tesida-9"
})(["position:absolute;z-index:1;display:block;background:", ";height:4px;width:calc(100% - 25px);top:13px;left:13px;margin-left:-50%;"], function (props) {
  return setConnectColor(props.theme, props.active, props.complete);
});

exports.StepConnect = StepConnect;

var StepLabel = _styledComponents["default"].div.withConfig({
  displayName: "styles__StepLabel",
  componentId: "sc-1tesida-10"
})(["margin-top:10px;text-align:center;@media (max-width:", "){display:none;}"], changeWidth);

exports.StepLabel = StepLabel;