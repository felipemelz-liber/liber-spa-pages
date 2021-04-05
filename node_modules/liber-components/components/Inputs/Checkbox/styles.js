'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _styledComponents = require('styled-components');

var _styledComponents2 = _interopRequireDefault(_styledComponents);

var _Themes = require('../../Themes');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var ripple = (0, _styledComponents.keyframes)(['0%{box-shadow:0px 0px 0px 1px rgba(0,0,0,0);}50%{box-shadow:0px 0px 0px 15px rgba(0,0,0,0.1);}100%{box-shadow:0px 0px 0px 15px rgba(0,0,0,0);}']);

exports.default = _styledComponents2.default.label.withConfig({
  displayName: 'styles',
  componentId: 'sc-42cj9k-0'
})(['margin-top:16px;min-height:20px;*,*:before,*:after{box-sizing:border-box;}& input[type="checkbox"]{display:none;}& input[type="checkbox"]:checked + span:before{border-color:', ';background-color:', ';animation:', ' 0.2s linear forwards;}& input[type="checkbox"]:checked + span:after{transform:rotateZ(37deg) scale(1);}& span{display:inline-flex;justify-content:flex-start;align-items:', ';height:20px;position:relative;padding:0 30px;margin-bottom:0;cursor:pointer;vertical-align:bottom;font-weight:normal;color:', ';font-size:', ';font-weight:', ';font-family:', ';}& span:before,& span:after{position:absolute;content:\'\';transition:all .3s ease;transition-property:transform,border-color;}& span:before{left:0;top:0;border-radius:4px;width:20px;height:20px;border:1px solid ', ';background-color:', '}& span:after{top:1px;left:6px;width:7px;height:14px;transform:rotateZ(37deg) scale(0);border-top:2px solid transparent;border-left:2px solid transparent;border-right:2px solid #fafafa;border-bottom:2px solid #fafafa;}'], function (props) {
  return (0, _Themes.handleThemeFromObject)(props.theme, 'checkbox.v2.color', '#009dff', props.color);
}, function (props) {
  return (0, _Themes.handleThemeFromObject)(props.theme, 'checkbox.v2.color', '#009dff', props.color);
}, ripple, function (props) {
  return props.labelAlign;
}, function (props) {
  return (0, _Themes.handleThemeFromObject)(props.theme, 'checkbox.v2.label', '#c6d1d8', props.labelColor);
}, function (props) {
  return (0, _Themes.handleThemeFromObject)(props.theme, 'fontSizes.mobileLarge', '14px');
}, function (props) {
  return (0, _Themes.handleThemeFromObject)(props.theme, 'fontWeights.regular', '400');
}, function (props) {
  return (0, _Themes.handleThemeFromObject)(props.theme, 'fontFamily', 'Roboto');
}, function (props) {
  return (0, _Themes.handleThemeFromObject)(props.theme, 'checkbox.v2.border', '#cecece');
}, function (props) {
  return (0, _Themes.handleThemeFromObject)(props.theme, 'checkbox.v2.background', '#fafdff');
});