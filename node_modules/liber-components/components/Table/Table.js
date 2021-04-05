'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.TableCheck = exports.CheckIcon = exports.Checked = exports.NotChecked = exports.TableHeaderColumn = exports.TableRowColumn = exports.TableRow = exports.TableFooter = exports.TableBody = exports.TableHeader = exports.Table = undefined;

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _styledComponents = require('styled-components');

var _styledComponents2 = _interopRequireDefault(_styledComponents);

var _Icons = require('../Icons');

var _Themes = require('../Themes');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

var Table = exports.Table = _styledComponents2.default.table.withConfig({
  displayName: 'Table',
  componentId: 'y6juk6-0'
})(['width:100%;border-collapse:collapse;table-layout:fixed;font-family:Roboto;text-align:center;font-size:20px;line-height:24px;position:relative;']);

var TableHeader = exports.TableHeader = _styledComponents2.default.thead.withConfig({
  displayName: 'Table__TableHeader',
  componentId: 'y6juk6-1'
})(['border:0px;position:relative;& > tr{border-bottom:solid 1px ', ';}'], function (props) {
  return (0, _Themes.handleThemeFromObject)(props.theme, 'table.header.border', '#009dff', props.headerColor);
});

var TableBody = exports.TableBody = _styledComponents2.default.tbody.withConfig({
  displayName: 'Table__TableBody',
  componentId: 'y6juk6-2'
})(['position:relative;']);

var TableFooter = exports.TableFooter = _styledComponents2.default.tfoot.withConfig({
  displayName: 'Table__TableFooter',
  componentId: 'y6juk6-3'
})(['']);

var TableRow = exports.TableRow = _styledComponents2.default.tr.withConfig({
  displayName: 'Table__TableRow',
  componentId: 'y6juk6-4'
})(['border:0px;position:relative;', ' &{background-color:', ';&:nth-of-type(even){background-color:', ';}&:hover{background-color:', ';}}'], TableBody, function (props) {
  return props.selected ? (0, _Themes.handleThemeFromObject)(props.theme, 'table.row.selected.odd', 'rgba(235, 247, 255, 0.4)') : (0, _Themes.handleThemeFromObject)(props.theme, 'table.row.odd', 'transparent');
}, function (props) {
  return props.selected ? (0, _Themes.handleThemeFromObject)(props.theme, 'table.row.selected.even', 'rgba(221, 241, 255, 0.5)') : (0, _Themes.handleThemeFromObject)(props.theme, 'table.row.even', '#f7f7f7');
}, function (props) {
  return props.selected ? (0, _Themes.handleThemeFromObject)(props.theme, 'table.row.selected.hover', 'rgba(221, 241, 255, 0.7)') : (0, _Themes.handleThemeFromObject)(props.theme, 'table.row.hover', '#f3f3f3');
});

var TableRowColumn = exports.TableRowColumn = _styledComponents2.default.td.withConfig({
  displayName: 'Table__TableRowColumn',
  componentId: 'y6juk6-5'
})(['min-height:48px;border:0px;padding:10px 40px;color:', ';font-weight:500;position:relative;'], function (props) {
  return (0, _Themes.handleThemeFromObject)(props.theme, 'table.body.color', '#4e4e4e');
});

var TableHeaderColumn = exports.TableHeaderColumn = _styledComponents2.default.th.withConfig({
  displayName: 'Table__TableHeaderColumn',
  componentId: 'y6juk6-6'
})(['position:relative;font-weight:bold;color:', ';border:0px;border-bottom:solid 1px ', ';padding:8px;text-align:center;width:', ';'], function (props) {
  return (0, _Themes.handleThemeFromObject)(props.theme, 'table.header.color', '#009dff', props.headerColor);
}, function (props) {
  return (0, _Themes.handleThemeFromObject)(props.theme, 'table.header.border', '#009dff');
}, function (props) {
  return props.width;
});

var CheckCommon = (0, _styledComponents.css)(['display:block;cursor:pointer;width:', ';height:', ';border-radius:50%;'], function (props) {
  return props.width || '16px';
}, function (props) {
  return props.height || '16px';
});

var CheckAnim = (0, _styledComponents.keyframes)(['0%{transform:scale(1.3);}100%{transform:scale(1);}']);

var NotChecked = exports.NotChecked = _styledComponents2.default.div.withConfig({
  displayName: 'Table__NotChecked',
  componentId: 'y6juk6-7'
})(['', ' border:solid 3px ', ';background:', ';animation:', ' 0.2s ease;'], CheckCommon, function (props) {
  return (0, _Themes.handleThemeFromObject)(props.theme, 'table.check.border', '#009DFF');
}, function (props) {
  return (0, _Themes.handleThemeFromObject)(props.theme, 'table.check.unchecked', 'transparent');
}, CheckAnim);

var Checked = exports.Checked = _styledComponents2.default.div.withConfig({
  displayName: 'Table__Checked',
  componentId: 'y6juk6-8'
})(['', ' display:flex;align-items:center;justify-content:center;fill:', ';border:solid 3px ', ';background:', ';animation:', ' 0.2s ease;'], CheckCommon, function (props) {
  return (0, _Themes.handleThemeFromObject)(props.theme, 'table.check.icon', '#ffffff');
}, function (props) {
  return (0, _Themes.handleThemeFromObject)(props.theme, 'table.check.checked', '#13CE66');
}, function (props) {
  return (0, _Themes.handleThemeFromObject)(props.theme, 'table.check.checked', '#13CE66');
}, CheckAnim);

var CheckIcon = exports.CheckIcon = (0, _styledComponents2.default)(_Icons.FaCheck).withConfig({
  displayName: 'Table__CheckIcon',
  componentId: 'y6juk6-9'
})(['display:block;width:calc(', ' - 4px);height:calc(', ' - 4px);'], function (props) {
  return props.width || '16px';
}, function (props) {
  return props.height || '16px';
});

var TableCheck = function TableCheck(_ref) {
  var checked = _ref.checked,
      props = _objectWithoutProperties(_ref, ['checked']);

  return checked ? _react2.default.createElement(
    Checked,
    props,
    _react2.default.createElement(CheckIcon, props)
  ) : _react2.default.createElement(NotChecked, props);
};

exports.TableCheck = TableCheck;
TableCheck.propTypes = {
  checked: _propTypes2.default.bool
};

TableCheck.defaultProps = {
  checked: false
};