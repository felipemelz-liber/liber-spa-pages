'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Option = exports.Chevron = exports.ValueBox = exports.DisplayBox = exports.Container = undefined;

var _styledComponents = require('styled-components');

var _styledComponents2 = _interopRequireDefault(_styledComponents);

var _Themes = require('../../Themes');

var _Icons = require('../../Icons');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Container = exports.Container = _styledComponents2.default.div.withConfig({
  displayName: 'SimpleSelectstyles__Container',
  componentId: 'oyd41z-0'
})(['position:relative;margin-right:auto;width:100%;']);

var DisplayBox = exports.DisplayBox = _styledComponents2.default.div.withConfig({
  displayName: 'SimpleSelectstyles__DisplayBox',
  componentId: 'oyd41z-1'
})(['width:100%;height:32px;border-radius:4px;border:solid 1px #ecf0f3;background-color:', ';padding:0px 12px;box-sizing:border-box;display:flex;align-items:center;'], function (props) {
  return (0, _Themes.handleThemeFromObject)(props.theme, 'colors.v2.white', '#ffffff');
});

var ValueBox = exports.ValueBox = _styledComponents2.default.div.withConfig({
  displayName: 'SimpleSelectstyles__ValueBox',
  componentId: 'oyd41z-2'
})(['flex-grow:1;line-height:22px;font-size:', ';font-family:', ';font-weight:', ';color:', ';white-space:nowrap;max-width:calc(100% - 36px);overflow:hidden;text-overflow:ellipsis;'], function (props) {
  return (0, _Themes.handleThemeFromObject)(props.theme, 'fontSizes.p', '16px');
}, function (props) {
  return (0, _Themes.handleThemeFromObject)(props.theme, 'fontFamily', 'Roboto');
}, function (props) {
  return (0, _Themes.handleThemeFromObject)(props.theme, 'fontWeights.regular', '400');
}, function (props) {
  return (0, _Themes.handleThemeFromObject)(props.theme, 'colors.v2.gray4', '#6287a7');
});

var Chevron = exports.Chevron = (0, _styledComponents2.default)(_Icons.MdChevronDown).withConfig({
  displayName: 'SimpleSelectstyles__Chevron',
  componentId: 'oyd41z-3'
})(['--size:18px;min-width:var(--size);max-width:var(--size);min-height:var(--size);max-height:var(--size);fill:', ';margin-left:12px;'], function (props) {
  return (0, _Themes.handleThemeFromObject)(props.theme, 'colors.v2.grey4', '#6287a7');
});

var active = (0, _styledComponents.css)(['color:', ';'], function (props) {
  return (0, _Themes.handleThemeFromObject)(props.theme, 'colors.v2.petroleum', '#4b6f85');
});

var comom = (0, _styledComponents.css)(['color:', ';'], function (props) {
  return (0, _Themes.handleThemeFromObject)(props.theme, 'colors.v2.grey3', '#c6d1d8');
});

var Option = exports.Option = _styledComponents2.default.span.withConfig({
  displayName: 'SimpleSelectstyles__Option',
  componentId: 'oyd41z-4'
})(['width:100%;height:40px;line-height:22px;font-size:', ';font-family:', ';font-weight:', ';background-color:', ';display:flex;align-items:center;padding:0 24px;', ' &:hover{background-color:', ';}'], function (props) {
  return (0, _Themes.handleThemeFromObject)(props.theme, 'fontSizes.p', '16px');
}, function (props) {
  return (0, _Themes.handleThemeFromObject)(props.theme, 'fontFamily', 'Roboto');
}, function (props) {
  return (0, _Themes.handleThemeFromObject)(props.theme, 'fontWeights.medium', '500');
}, function (props) {
  return (0, _Themes.handleThemeFromObject)(props.theme, 'colors.v2.white', '#ffffff');
}, function (props) {
  return props.active ? active : comom;
}, function (props) {
  return (0, _Themes.handleThemeFromObject)(props.theme, 'colors.v2.grey7', '#f9fafa');
});