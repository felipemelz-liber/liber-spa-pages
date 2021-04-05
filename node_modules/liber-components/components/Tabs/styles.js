'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Slide = exports.Header = exports.BasicHeader = exports.Label = undefined;

var _styledComponents = require('styled-components');

var _styledComponents2 = _interopRequireDefault(_styledComponents);

var _Themes = require('../Themes');

var _Util = require('../Util');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Label = exports.Label = _styledComponents2.default.label.withConfig({
  displayName: 'styles__Label',
  componentId: 'c7itha-0'
})(['font-family:', ';font-size:', ';font-weight:', ';text-transform:uppercase;background-color:', ';color:', ';border-bottom:1px solid ', ';display:flex;justify-content:center;align-items:center;text-align:center;cursor:pointer;flex-grow:1;flex-basis:50%;margin-bottom:0px;& > input[type="radio"]{display:none;}&:hover{color:', ';}'], function (props) {
  return (0, _Themes.handleThemeFromObject)(props.theme, 'tabs.label.fontFamily', 'Roboto');
}, function (props) {
  return (0, _Themes.handleThemeFromObject)(props.theme, 'tabs.label.fontSize', '20px');
}, function (props) {
  return (0, _Themes.handleThemeFromObject)(props.theme, 'tabs.label.fontWeight', '500');
}, function (props) {
  return (0, _Themes.handleThemeFromObject)(props.theme, 'tabs.label.background', 'transparent', props.labelBackgroundColor);
}, function (props) {
  return props.active ? (0, _Themes.handleThemeFromObject)(props.theme, 'tabs.label.active', '#009dff', props.labelActiveColor) : (0, _Themes.handleThemeFromObject)(props.theme, 'tabs.label.common', '#717171', props.labelCommonColor);
}, function (props) {
  return (0, _Themes.handleThemeFromObject)(props.theme, 'tabs.label.border', 'transparent', props.labelBorderColor);
}, function (props) {
  return (0, _Themes.handleThemeFromObject)(props.theme, 'tabs.label.active', '#009dff', props.labelActiveColor);
});

var BasicHeader = exports.BasicHeader = _styledComponents2.default.div.withConfig({
  displayName: 'styles__BasicHeader',
  componentId: 'c7itha-1'
})(['display:flex;height:100%;position:relative;']);
var Header = exports.Header = (0, _styledComponents2.default)(BasicHeader).withConfig({
  displayName: 'styles__Header',
  componentId: 'c7itha-2'
})(['height:60px;align-items:center;width:100%;']);

var Slide = exports.Slide = _styledComponents2.default.div.withConfig({
  displayName: 'styles__Slide',
  componentId: 'c7itha-3'
})(['background:', ';width:', '%;height:4px;position:absolute;left:', '%;top:calc(100% - 2px);transition:left 0.3s ease-out;border:0px;'], function (props) {
  return (0, _Themes.handleThemeFromObject)(props.theme, 'tabs.slider', '#009dff', props.color ? (0, _Util.handleColor)(props.color) : null);
}, function (props) {
  return 100 / props.number;
}, function (props) {
  return 100 / props.number * props.current;
});