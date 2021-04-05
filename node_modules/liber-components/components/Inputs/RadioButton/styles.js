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
  componentId: 'sc-14hntv-0'
})(['color:', ';*,*:before,*:after{box-sizing:border-box;}&:focus{outline:none;}&::-moz-focus-inner{outline:none;}&:focus > div:before{border-color:', ' !important;transform:scale(1.25);}& input[type="radio"],input[type="checkbox"]{display:none;}& input[type="radio"]:checked + div:before,input[type="checkbox"]:checked + div:before{border-color:', ';border-width:2px;animation:', ' 0.2s linear forwards;}& input[type="radio"]:checked + div:after,input[type="checkbox"]:checked + div:after{transform:scale(1);}& div{display:inline-flex;height:20px;position:relative;padding:0 30px;margin-bottom:0;cursor:pointer;justify-content:flex-start;align-items:center;font-weight:normal;}& div:before,& div:after{position:absolute;content:\'\';border-radius:50%;transition:all .3s ease;transition-property:transform,border-color;}& div:before{left:0;top:0;width:20px;height:20px;border:1px solid ', ';background-color:', ';}& div:after{top:5px;left:5px;width:10px;height:10px;transform:scale(0);background:', ';}'], function (props) {
  return (0, _Themes.handleThemeFromObject)(props.theme, 'radioButton.label', '#a4a4a4', props.labelColor);
}, function (props) {
  return (0, _Themes.handleThemeFromObject)(props.theme, 'radioButton.focus', '#4cbaff');
}, function (props) {
  return (0, _Themes.handleThemeFromObject)(props.theme, 'radioButton.color', '#009dff', props.color);
}, ripple, function (props) {
  return (0, _Themes.handleThemeFromObject)(props.theme, 'radioButton.emptyBorder', '#E6E6E6');
}, function (props) {
  return (0, _Themes.handleThemeFromObject)(props.theme, 'radioButton.emptyBg', '#FAFAFA');
}, function (props) {
  return (0, _Themes.handleThemeFromObject)(props.theme, 'radioButton.color', '#009dff', props.color);
});