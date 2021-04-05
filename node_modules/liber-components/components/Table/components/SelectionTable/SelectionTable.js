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
exports.CheckboxTable = exports.SelectionTableHeaderColumn = exports.SelectionTableRow = exports.SelectionTableRowColumn = exports.SelectionTableFooter = exports.SelectionTableBody = exports.SelectionTableHeader = exports.SelectionTable = void 0;

var _styledComponents = _interopRequireWildcard(require("styled-components"));

var _Inputs = require("../../../Inputs");

var _Themes = require("../../../Themes");

var _SimpleDropDown = require("../../../DropDown/components/SimpleDropDown.styles");

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function _getRequireWildcardCache() { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; if (obj != null) { var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

var SelectionTable = _styledComponents["default"].table.withConfig({
  displayName: "SelectionTable",
  componentId: "x9uakv-0"
})(["min-width:100%;border-collapse:collapse;table-layout:fixed;font-family:Roboto;text-align:left;font-size:20px;line-height:24px;position:relative;"]);

exports.SelectionTable = SelectionTable;

var SelectionTableHeader = _styledComponents["default"].thead.withConfig({
  displayName: "SelectionTable__SelectionTableHeader",
  componentId: "x9uakv-1"
})(["border:0px;position:relative;& > tr{border-bottom:solid 1px ", ";}"], function (props) {
  return (0, _Themes.handleThemeFromObject)(props.theme, 'table.header.border', '#009dff', props.headerColor);
});

exports.SelectionTableHeader = SelectionTableHeader;

var SelectionTableBody = _styledComponents["default"].tbody.withConfig({
  displayName: "SelectionTable__SelectionTableBody",
  componentId: "x9uakv-2"
})(["position:relative;"]);

exports.SelectionTableBody = SelectionTableBody;

var SelectionTableFooter = _styledComponents["default"].tfoot.withConfig({
  displayName: "SelectionTable__SelectionTableFooter",
  componentId: "x9uakv-3"
})([""]);

exports.SelectionTableFooter = SelectionTableFooter;

var SelectionTableRowColumn = _styledComponents["default"].td.withConfig({
  displayName: "SelectionTable__SelectionTableRowColumn",
  componentId: "x9uakv-4"
})(["min-height:48px;border:0px;padding:8px;color:var(--row-color);position:relative;font-size:16px;"]);

exports.SelectionTableRowColumn = SelectionTableRowColumn;

var RowSelection = function RowSelection(props) {
  var bg = 'transparent';
  var shadow = null;

  if (props.selected) {
    bg = (0, _Themes.handleThemeFromObject)(props.theme, 'colors.dark-text6', '#f4f5f7');
    shadow = '0px 0px 1px var(--row-color)';
  }

  return (0, _styledComponents.css)(["background-color:", ";& > ", "{text-shadow:", ";}& ", "{text-shadow:none;}"], bg, SelectionTableRowColumn, shadow, _SimpleDropDown.DropDownContent);
};

var SelectionTableRow = _styledComponents["default"].tr.withConfig({
  displayName: "SelectionTable__SelectionTableRow",
  componentId: "x9uakv-5"
})(["--row-color:", ";border:0px;position:relative;", " &{border-top:1px solid #ecf0f3;", " &:hover{background-color:#f3f3f3;}}"], function (props) {
  return (0, _Themes.handleThemeFromObject)(props.theme, 'table.body.color', '#6287a7');
}, SelectionTableBody, RowSelection);

exports.SelectionTableRow = SelectionTableRow;

var SelectionTableHeaderColumn = _styledComponents["default"].th.withConfig({
  displayName: "SelectionTable__SelectionTableHeaderColumn",
  componentId: "x9uakv-6"
})(["position:relative;font-size:16px;font-weight:500;color:", ";border:0px;border-bottom:solid 1px ", ";padding:8px;width:", ";"], function (props) {
  return (0, _Themes.handleThemeFromObject)(props.theme, 'table.header.color', '#4b6f85', props.headerColor);
}, function (props) {
  return (0, _Themes.handleThemeFromObject)(props.theme, 'table.header.border', '#ecf0f3');
}, function (props) {
  return props.width;
});

exports.SelectionTableHeaderColumn = SelectionTableHeaderColumn;
var checkboxDefaultColor = (0, _styledComponents.css)(["", ""], function (props) {
  return (0, _Themes.handleThemeFromObject)(props.theme, 'colors.v2.petroleum', '#4b6f85', props.color);
});
var CheckboxTable = (0, _styledComponents["default"])(_Inputs.Checkbox).withConfig({
  displayName: "SelectionTable__CheckboxTable",
  componentId: "x9uakv-7"
})(["input[type='checkbox']:checked + span:before{border-color:var(--checkbox-color,", ");background-color:var(--checkbox-color,", ");}& span:before{left:0;top:0;width:15px;height:15px;border-radius:0px;border:", "px solid var(--checkbox-color,", ");background-color:", ";}& span:after{top:0px;left:5px;width:5px;height:12px;}"], checkboxDefaultColor, checkboxDefaultColor, function (props) {
  return props.borderSize ? props.borderSize : 1;
}, checkboxDefaultColor, function (props) {
  return (0, _Themes.handleThemeFromObject)(props.theme, 'checkbox.v2.background', '#fafdff');
});
exports.CheckboxTable = CheckboxTable;