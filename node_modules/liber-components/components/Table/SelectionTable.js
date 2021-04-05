'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.CheckboxTable = exports.SelectionTableHeaderColumn = exports.SelectionTableRowColumn = exports.SelectionTableRow = exports.SelectionTableFooter = exports.SelectionTableBody = exports.SelectionTableHeader = exports.SelectionTable = undefined;

var _styledComponents = require('styled-components');

var _styledComponents2 = _interopRequireDefault(_styledComponents);

var _Inputs = require('../Inputs');

var _Themes = require('../Themes');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var SelectionTable = exports.SelectionTable = _styledComponents2.default.table.withConfig({
  displayName: 'SelectionTable',
  componentId: 'g8fnn5-0'
})(['min-width:100%;border-collapse:collapse;table-layout:fixed;font-family:Roboto;text-align:left;font-size:20px;line-height:24px;position:relative;']);

var SelectionTableHeader = exports.SelectionTableHeader = _styledComponents2.default.thead.withConfig({
  displayName: 'SelectionTable__SelectionTableHeader',
  componentId: 'g8fnn5-1'
})(['border:0px;position:relative;& > tr{border-bottom:solid 1px ', ';}'], function (props) {
  return (0, _Themes.handleThemeFromObject)(props.theme, 'table.header.border', '#009dff', props.headerColor);
});

var SelectionTableBody = exports.SelectionTableBody = _styledComponents2.default.tbody.withConfig({
  displayName: 'SelectionTable__SelectionTableBody',
  componentId: 'g8fnn5-2'
})(['position:relative;']);

var SelectionTableFooter = exports.SelectionTableFooter = _styledComponents2.default.tfoot.withConfig({
  displayName: 'SelectionTable__SelectionTableFooter',
  componentId: 'g8fnn5-3'
})(['']);

var SelectionTableRow = exports.SelectionTableRow = _styledComponents2.default.tr.withConfig({
  displayName: 'SelectionTable__SelectionTableRow',
  componentId: 'g8fnn5-4'
})(['border:0px;position:relative;', ' &{border-top:1px solid #ecf0f3;background-color:', ';}&:hover{background-color:', ';}}'], SelectionTableBody, function (props) {
  return props.selected ? (0, _Themes.handleThemeFromObject)(props.theme, 'table.row.selected.odd', 'rgba(235, 247, 255, 0.4)') : (0, _Themes.handleThemeFromObject)(props.theme, 'table.row.odd', 'transparent');
}, function (props) {
  return props.selected ? (0, _Themes.handleThemeFromObject)(props.theme, 'table.row.selected.hover', 'rgba(221, 241, 255, 0.7)') : (0, _Themes.handleThemeFromObject)(props.theme, 'table.row.hover', '#f3f3f3');
});

var SelectionTableRowColumn = exports.SelectionTableRowColumn = _styledComponents2.default.td.withConfig({
  displayName: 'SelectionTable__SelectionTableRowColumn',
  componentId: 'g8fnn5-5'
})(['min-height:48px;border:0px;padding:8px;color:', ';position:relative;font-size:16px;'], function (props) {
  return (0, _Themes.handleThemeFromObject)(props.theme, 'table.body.color', '#6287a7');
});

var SelectionTableHeaderColumn = exports.SelectionTableHeaderColumn = _styledComponents2.default.th.withConfig({
  displayName: 'SelectionTable__SelectionTableHeaderColumn',
  componentId: 'g8fnn5-6'
})(['position:relative;font-size:16px;font-weight:500;color:', ';border:0px;border-bottom:solid 1px ', ';padding:8px;width:', ';'], function (props) {
  return (0, _Themes.handleThemeFromObject)(props.theme, 'table.header.color', '#4b6f85', props.headerColor);
}, function (props) {
  return (0, _Themes.handleThemeFromObject)(props.theme, 'table.header.border', '#ecf0f3');
}, function (props) {
  return props.width;
});

var CheckboxTable = exports.CheckboxTable = (0, _styledComponents2.default)(_Inputs.Checkbox).withConfig({
  displayName: 'SelectionTable__CheckboxTable',
  componentId: 'g8fnn5-7'
})(['input[type="checkbox"]:checked + span:before{border-color:', ';background-color:', ';}& span:before{left:0;top:0;width:15px;height:15px;border-radius:0px;border:', 'px solid ', ';background-color:', '}& span:after{top:0px;left:5px;width:5px;height:12px;}'], function (props) {
  return (0, _Themes.handleThemeFromObject)(props.theme, 'checkbox.v2.color', '#4b6f85', props.color);
}, function (props) {
  return (0, _Themes.handleThemeFromObject)(props.theme, 'checkbox.v2.color', '#4b6f85', props.color);
}, function (props) {
  return props.borderSize ? props.borderSize : 1;
}, function (props) {
  return (0, _Themes.handleThemeFromObject)(props.theme, 'checkbox.v2.border', '#4b6f85');
}, function (props) {
  return (0, _Themes.handleThemeFromObject)(props.theme, 'checkbox.v2.background', '#fafdff');
});