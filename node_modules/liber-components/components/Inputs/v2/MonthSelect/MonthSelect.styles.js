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
exports.Shell = exports.YearText = exports.TextContainer = exports.Arrow = exports.IconButton = exports.CalendarIcon = exports.YearSelection = exports.DropdownContent = exports.OptionsContainer = exports.Option = void 0;

var _styledComponents = _interopRequireWildcard(require("styled-components"));

var _Themes = require("../../../Themes");

var _Icons = require("../../../Icons");

var _SelectField = require("../SelectField/SelectField.styles");

var _Buttons = require("../../../Buttons");

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function _getRequireWildcardCache() { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; if (obj != null) { var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

var Option = _styledComponents["default"].div.withConfig({
  displayName: "MonthSelectstyles__Option",
  componentId: "ualydn-0"
})(["display:flex;align-items:center;justify-content:center;flex-basis:33%;box-sizing:border-box;height:36px;cursor:pointer;border-radius:4px;font-family:Roboto;font-size:16px;font-weight:normal;font-stretch:normal;font-style:normal;line-height:1.38;letter-spacing:0.06px;text-align:left;color:", ";background-color:", ";"], function (_ref) {
  var selected = _ref.selected;
  return selected ? 'white' : '#405f71';
}, function (_ref2) {
  var selected = _ref2.selected,
      theme = _ref2.theme;
  return selected ? (0, _Themes.handleThemeFromObject)(theme, 'colors.primary', '#009dff') : 'transparent';
});

exports.Option = Option;

var OptionsContainer = _styledComponents["default"].div.withConfig({
  displayName: "MonthSelectstyles__OptionsContainer",
  componentId: "ualydn-1"
})(["display:flex;flex-wrap:wrap;width:calc(100% - 8px);box-sizing:border-box;margin:-4px;& > ", "{padding:8px;}"], Option);

exports.OptionsContainer = OptionsContainer;

var DropdownContent = _styledComponents["default"].div.withConfig({
  displayName: "MonthSelectstyles__DropdownContent",
  componentId: "ualydn-2"
})(["padding:12px;min-width:310px;display:flex;flex-direction:column;align-items:center;"]);

exports.DropdownContent = DropdownContent;

var YearSelection = _styledComponents["default"].div.withConfig({
  displayName: "MonthSelectstyles__YearSelection",
  componentId: "ualydn-3"
})(["display:flex;align-items:center;justify-content:space-between;width:100%;margin-bottom:24px;margin-top:16px;"]);

exports.YearSelection = YearSelection;
var CalendarIcon = (0, _styledComponents["default"])(_Icons.FaCalendar).withConfig({
  displayName: "MonthSelectstyles__CalendarIcon",
  componentId: "ualydn-4"
})(["width:12px;height:12px;fill:", ";"], function (_ref3) {
  var open = _ref3.open,
      error = _ref3.error,
      theme = _ref3.theme;

  if (error) {
    return "".concat((0, _Themes.handleThemeFromObject)(theme, 'colors.error', '#dc3545'));
  }

  if (open) {
    return "".concat((0, _Themes.handleThemeFromObject)(theme, 'colors.primary', '#009dff'));
  }

  return '#707070';
});
exports.CalendarIcon = CalendarIcon;
var IconButton = (0, _styledComponents["default"])(_Buttons.FlatButton).attrs(function () {
  return {
    circle: true,
    color: 'primary'
  };
}).withConfig({
  displayName: "MonthSelectstyles__IconButton",
  componentId: "ualydn-5"
})(["padding:8px;"]);
exports.IconButton = IconButton;
var Arrow = (0, _styledComponents["default"])(_Icons.FaArrowLeft).withConfig({
  displayName: "MonthSelectstyles__Arrow",
  componentId: "ualydn-6"
})(["", " cursor:pointer;"], function (_ref4) {
  var _ref4$direction = _ref4.direction,
      direction = _ref4$direction === void 0 ? 'left' : _ref4$direction;
  return direction === 'right' ? (0, _styledComponents.css)(["transform:rotate(180deg);"]) : null;
});
exports.Arrow = Arrow;

var TextContainer = _styledComponents["default"].div.withConfig({
  displayName: "MonthSelectstyles__TextContainer",
  componentId: "ualydn-7"
})(["overflow:hidden;box-sizing:border-box;display:flex;align-items:center;justify-content:center;width:36px;"]);

exports.TextContainer = TextContainer;
var transitions = {
  entering: 'scale(1)',
  entered: 'scale(1.1)',
  exiting: 'scale(1.1)',
  exited: 'scale(1)'
};

var YearText = _styledComponents["default"].div.withConfig({
  displayName: "MonthSelectstyles__YearText",
  componentId: "ualydn-8"
})(["font-family:Roboto;font-size:16px;font-weight:normal;font-stretch:normal;font-style:normal;line-height:1.38;letter-spacing:0.06px;text-align:left;color:#405f71;position:relative;transform:", ";transition:", "ms;"], function (_ref5) {
  var transitionState = _ref5.transitionState;
  return transitions[transitionState];
}, function (_ref6) {
  var timeout = _ref6.timeout;
  return timeout;
});

exports.YearText = YearText;
var Shell = (0, _styledComponents["default"])(_SelectField.InputShell).withConfig({
  displayName: "MonthSelectstyles__Shell",
  componentId: "ualydn-9"
})(["padding:0px 16px;display:flex;align-items:center;justify-content:", ";font-family:Roboto;font-size:16px;font-weight:normal;font-stretch:normal;font-style:normal;line-height:1.38;letter-spacing:0.06px;text-align:left;color:#405f71;"], function (_ref7) {
  var hasValue = _ref7.hasValue;
  return hasValue ? 'space-between' : 'flex-end';
});
exports.Shell = Shell;