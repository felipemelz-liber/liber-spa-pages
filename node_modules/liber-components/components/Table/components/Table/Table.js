"use strict";

require("core-js/modules/es6.object.define-property");

require("core-js/modules/es6.string.iterator");

require("core-js/modules/es6.weak-map");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.TableCheck = exports.CheckIcon = exports.Checked = exports.NotChecked = exports.TableHeaderColumn = exports.TableRowColumn = exports.TableRow = exports.TableFooter = exports.TableBody = exports.TableHeader = exports.Table = void 0;

require("core-js/modules/es6.symbol");

require("core-js/modules/es6.array.index-of");

require("core-js/modules/web.dom.iterable");

require("core-js/modules/es6.array.iterator");

require("core-js/modules/es6.object.to-string");

require("core-js/modules/es6.object.keys");

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _styledComponents = _interopRequireWildcard(require("styled-components"));

var _Icons = require("../../../Icons");

var _Themes = require("../../../Themes");

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function _getRequireWildcardCache() { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; if (obj != null) { var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

var Table = _styledComponents["default"].table.withConfig({
  displayName: "Table",
  componentId: "sc-1y2ri2e-0"
})(["width:100%;border-collapse:collapse;table-layout:fixed;font-family:Roboto;text-align:center;font-size:20px;line-height:24px;position:relative;"]);

exports.Table = Table;

var TableHeader = _styledComponents["default"].thead.withConfig({
  displayName: "Table__TableHeader",
  componentId: "sc-1y2ri2e-1"
})(["border:0px;position:relative;& > tr{border-bottom:solid 1px ", ";}"], function (props) {
  return (0, _Themes.handleThemeFromObject)(props.theme, 'table.header.border', '#009dff', props.headerColor);
});

exports.TableHeader = TableHeader;

var TableBody = _styledComponents["default"].tbody.withConfig({
  displayName: "Table__TableBody",
  componentId: "sc-1y2ri2e-2"
})(["position:relative;"]);

exports.TableBody = TableBody;

var TableFooter = _styledComponents["default"].tfoot.withConfig({
  displayName: "Table__TableFooter",
  componentId: "sc-1y2ri2e-3"
})([""]);

exports.TableFooter = TableFooter;

var TableRow = _styledComponents["default"].tr.withConfig({
  displayName: "Table__TableRow",
  componentId: "sc-1y2ri2e-4"
})(["border:0px;position:relative;", " &{background-color:", ";&:nth-of-type(even){background-color:", ";}&:hover{background-color:", ";}}"], TableBody, function (props) {
  return props.selected ? (0, _Themes.handleThemeFromObject)(props.theme, 'table.row.selected.odd', 'rgba(235, 247, 255, 0.4)') : (0, _Themes.handleThemeFromObject)(props.theme, 'table.row.odd', 'transparent');
}, function (props) {
  return props.selected ? (0, _Themes.handleThemeFromObject)(props.theme, 'table.row.selected.even', 'rgba(221, 241, 255, 0.5)') : (0, _Themes.handleThemeFromObject)(props.theme, 'table.row.even', '#f7f7f7');
}, function (props) {
  return props.selected ? (0, _Themes.handleThemeFromObject)(props.theme, 'table.row.selected.hover', 'rgba(221, 241, 255, 0.7)') : (0, _Themes.handleThemeFromObject)(props.theme, 'table.row.hover', '#f3f3f3');
});

exports.TableRow = TableRow;

var TableRowColumn = _styledComponents["default"].td.withConfig({
  displayName: "Table__TableRowColumn",
  componentId: "sc-1y2ri2e-5"
})(["min-height:48px;border:0px;padding:10px 40px;color:", ";font-weight:500;position:relative;"], function (props) {
  return (0, _Themes.handleThemeFromObject)(props.theme, 'table.body.color', '#4e4e4e');
});

exports.TableRowColumn = TableRowColumn;

var TableHeaderColumn = _styledComponents["default"].th.withConfig({
  displayName: "Table__TableHeaderColumn",
  componentId: "sc-1y2ri2e-6"
})(["position:relative;font-weight:bold;color:", ";border:0px;border-bottom:solid 1px ", ";padding:8px;text-align:center;width:", ";"], function (props) {
  return (0, _Themes.handleThemeFromObject)(props.theme, 'table.header.color', '#009dff', props.headerColor);
}, function (props) {
  return (0, _Themes.handleThemeFromObject)(props.theme, 'table.header.border', '#009dff');
}, function (props) {
  return props.width;
});

exports.TableHeaderColumn = TableHeaderColumn;
var CheckCommon = (0, _styledComponents.css)(["display:block;cursor:pointer;width:", ";height:", ";border-radius:50%;"], function (props) {
  return props.width || '16px';
}, function (props) {
  return props.height || '16px';
});
var CheckAnim = (0, _styledComponents.keyframes)(["0%{transform:scale(1.3);}100%{transform:scale(1);}"]);

var NotChecked = _styledComponents["default"].div.withConfig({
  displayName: "Table__NotChecked",
  componentId: "sc-1y2ri2e-7"
})(["", " border:solid 3px ", ";background:", ";animation:", " 0.2s ease;"], CheckCommon, function (props) {
  return (0, _Themes.handleThemeFromObject)(props.theme, 'table.check.border', '#009DFF');
}, function (props) {
  return (0, _Themes.handleThemeFromObject)(props.theme, 'table.check.unchecked', 'transparent');
}, CheckAnim);

exports.NotChecked = NotChecked;

var Checked = _styledComponents["default"].div.withConfig({
  displayName: "Table__Checked",
  componentId: "sc-1y2ri2e-8"
})(["", " display:flex;align-items:center;justify-content:center;fill:", ";border:solid 3px ", ";background:", ";animation:", " 0.2s ease;"], CheckCommon, function (props) {
  return (0, _Themes.handleThemeFromObject)(props.theme, 'table.check.icon', '#ffffff');
}, function (props) {
  return (0, _Themes.handleThemeFromObject)(props.theme, 'table.check.checked', '#13CE66');
}, function (props) {
  return (0, _Themes.handleThemeFromObject)(props.theme, 'table.check.checked', '#13CE66');
}, CheckAnim);

exports.Checked = Checked;
var CheckIcon = (0, _styledComponents["default"])(_Icons.FaCheck).withConfig({
  displayName: "Table__CheckIcon",
  componentId: "sc-1y2ri2e-9"
})(["display:block;width:calc(", " - 4px);height:calc(", " - 4px);"], function (props) {
  return props.width || '16px';
}, function (props) {
  return props.height || '16px';
});
exports.CheckIcon = CheckIcon;

var TableCheck = function TableCheck(_ref) {
  var checked = _ref.checked,
      props = _objectWithoutProperties(_ref, ["checked"]);

  return checked ? _react["default"].createElement(Checked, props, _react["default"].createElement(CheckIcon, props)) : _react["default"].createElement(NotChecked, props);
};

exports.TableCheck = TableCheck;
TableCheck.propTypes = {
  checked: _propTypes["default"].bool
};
TableCheck.defaultProps = {
  checked: false
};