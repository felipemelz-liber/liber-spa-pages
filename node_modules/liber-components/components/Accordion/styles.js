'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.AccordionAction = exports.ShowBox = exports.AccordionBox = undefined;

var _templateObject = _taggedTemplateLiteral(['\n    padding: 30px 50px;\n  '], ['\n    padding: 30px 50px;\n  ']);

var _styledComponents = require('styled-components');

var _styledComponents2 = _interopRequireDefault(_styledComponents);

var _Util = require('../Util');

var _Themes = require('../Themes');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _taggedTemplateLiteral(strings, raw) { return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

var AccordionBox = exports.AccordionBox = _styledComponents2.default.div.withConfig({
  displayName: 'styles__AccordionBox',
  componentId: 'sc-1wr2g6v-0'
})(['overflow:hidden;width:100%;background-color:', ';border:', ';transition:all 400ms ', ';&:hover{background-color:', ';}'], function (props) {
  return props.open ? (0, _Themes.handleThemeFromObject)(props.theme, 'accordion.boxBackgroundOpen', '#fff') : (0, _Themes.handleThemeFromObject)(props.theme, 'accordion.boxBackgroundClosed', '#f9f9f9');
}, function (props) {
  return props.open ? '1px solid ' + (0, _Themes.handleThemeFromObject)(props.theme, 'accordion.boxBorderOpen', '#fff') : 'solid 1px ' + (0, _Themes.handleThemeFromObject)(props.theme, 'accordion.boxBorderClosed', 'rgba(150, 150, 150, 0.18)');
}, function (props) {
  return props.open ? 'ease-in' : 'ease-out';
}, function (props) {
  return props.open ? (0, _Themes.handleThemeFromObject)(props.theme, 'accordion.boxBackgroundOpen', '#fff') : (0, _Themes.handleThemeFromObject)(props.theme, 'accordion.boxBackgroundHover', '#f3f3f3');
});

var ShowBox = exports.ShowBox = _styledComponents2.default.div.withConfig({
  displayName: 'styles__ShowBox',
  componentId: 'sc-1wr2g6v-1'
})(['max-height:', ';transition:max-height 400ms ', ';overflow:hidden;'], function (props) {
  return props.open ? props.size : '0px';
}, function (props) {
  return props.open ? 'ease-in' : 'ease-out';
});

var AccordionAction = exports.AccordionAction = _styledComponents2.default.div.withConfig({
  displayName: 'styles__AccordionAction',
  componentId: 'sc-1wr2g6v-2'
})(['padding:20px 50px;cursor:pointer;box-sizing:border-box;display:inline-block;background-color:', ';width:100%;transition:all 400ms ', ';position:relative;', ' &:after{position:absolute;top:calc(50% - 4px);left:15px;width:0;height:0;padding:0;content:\'\';border-left:7px solid transparent;border-right:7px solid transparent;border-top:8px solid ', ';pointer-events:none;transform:', ';transition:all 400ms ', ';}'], function (props) {
  return props.open ? props.color || 'transparent' : 'transparent';
}, function (props) {
  return props.open ? 'ease-in' : 'ease-out';
}, _Util.media.large(_templateObject), function (props) {
  return props.open ? (0, _Themes.handleThemeFromObject)(props.theme, 'accordion.actionBorderTopOpen', '#009dff') : (0, _Themes.handleThemeFromObject)(props.theme, 'accordion.actionBorderTopClosed', '#4e4e4e');
}, function (props) {
  return props.open ? 'rotate(0deg)' : 'rotate(-90deg)';
}, function (props) {
  return props.open ? 'ease-in' : 'ease-out';
});