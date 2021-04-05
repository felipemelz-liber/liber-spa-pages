'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Tooltip = exports.Checkbox = exports.SelectBox = exports.SelectCounter = exports.SelectHeader = exports.SelectionContainer = exports.CardContent = exports.Label = exports.FieldBox = exports.FieldContainer = undefined;

var _styledComponents = require('styled-components');

var _styledComponents2 = _interopRequireDefault(_styledComponents);

var _Card = require('../../Card');

var _Themes = require('../../Themes');

var _Checkbox = require('../Checkbox');

var _Checkbox2 = _interopRequireDefault(_Checkbox);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var FieldContainer = exports.FieldContainer = _styledComponents2.default.div.withConfig({
  displayName: 'SelectMultiplestyles__FieldContainer',
  componentId: 'sc-4by6mv-0'
})(['position:relative;']);

var FieldBox = exports.FieldBox = _styledComponents2.default.div.withConfig({
  displayName: 'SelectMultiplestyles__FieldBox',
  componentId: 'sc-4by6mv-1'
})(['--color:', ';min-width:140px;max-width:140px;height:36px;line-height:36px;padding:0 30px 0 8px;color:', ';font-weight:', ';font-size:', ';font-family:', ';transition:all 450ms cubic-bezier(0.23,1,0.32,1) 0ms;border:2px solid var(--color);border-radius:4px;position:relative;cursor:pointer;white-space:nowrap;overflow:hidden;&:after{--height:8px;--width:7px;content:"";opacity:0.8;border-top:var(--height) solid var(--color);border-right:var(--width) solid transparent;border-bottom:var(--height) solid transparent;border-left:var(--width) solid transparent;border-radius:4px;position:absolute;right:8px;top:calc(50% - (var(--height) - (var(--height)/2)));transition:all 450ms cubic-bezier(0.23,1,0.32,1) 0ms;}& span{display:block;overflow:hidden;}'], function (props) {
  if (props.layout === 'open') return (0, _Themes.handleThemeFromObject)(props.theme, 'colors.liberBlue', '#019DFF');
  if (props.layout === 'unselected') return (0, _Themes.handleThemeFromObject)(props.theme, 'colors.bluishMediumDarkGrey', '#C7CFD3');
  return (0, _Themes.handleThemeFromObject)(props.theme, 'colors.bluishDarkGrey', '#7E8D95');
}, function (props) {
  return (0, _Themes.handleThemeFromObject)(props.theme, 'colors.bluishDarkGrey', '#496072');
}, function (props) {
  return (0, _Themes.handleThemeFromObject)(props.theme, 'fontWeights.bold', 500);
}, function (props) {
  return (0, _Themes.handleThemeFromObject)(props.theme, 'fontSizes.p', '16px');
}, function (props) {
  return (0, _Themes.handleThemeFromObject)(props.theme, 'fontFamily', 'Roboto');
});

var Label = exports.Label = _styledComponents2.default.div.withConfig({
  displayName: 'SelectMultiplestyles__Label',
  componentId: 'sc-4by6mv-2'
})(['color:', ';font-weight:', ';font-size:', ';font-family:', ';line-height:14px;margin:8px 0px;transition:all 450ms cubic-bezier(0.23,1,0.32,1) 0ms;'], function (props) {
  if (props.layout === 'open') return (0, _Themes.handleThemeFromObject)(props.theme, 'colors.liberBlue', '#019DFF');
  if (props.layout === 'unselected') return (0, _Themes.handleThemeFromObject)(props.theme, 'colors.bluishMediumDarkGrey', '#C7CFD3');
  return (0, _Themes.handleThemeFromObject)(props.theme, 'colors.bluishBlack', '#496072');
}, function (props) {
  return (0, _Themes.handleThemeFromObject)(props.theme, 'fontWeights.medium', 500);
}, function (props) {
  return (0, _Themes.handleThemeFromObject)(props.theme, 'fontSizes.mobileLarge', '14px');
}, function (props) {
  return (0, _Themes.handleThemeFromObject)(props.theme, 'fontFamily', 'Roboto');
});

var CardContent = exports.CardContent = (0, _styledComponents2.default)(_Card.CardContent).withConfig({
  displayName: 'SelectMultiplestyles__CardContent',
  componentId: 'sc-4by6mv-3'
})(['padding:8px 8px 0px 8px;display:flex;flex-direction:column;']);

var SelectionContainer = exports.SelectionContainer = (0, _styledComponents2.default)(_Card.Card).withConfig({
  displayName: 'SelectMultiplestyles__SelectionContainer',
  componentId: 'sc-4by6mv-4'
})(['--width:340px;width:var(--width);margin-top:2px;position:absolute;transition:all 450ms cubic-bezier(0.23,1,0.32,1) 0ms;', ' ', ''], function (props) {
  if (props.open) {
    return (0, _styledComponents.css)(['pointer-events:auto;']);
  }
  return (0, _styledComponents.css)(['opacity:0;pointer-events:none;transform:translateY(-42px);']);
}, function (props) {
  if (props.position === 'left') return (0, _styledComponents.css)(['left:0px;']);
  if (props.position === 'center') return (0, _styledComponents.css)(['left:calc(-1*(var(--width)/2) + 50%);']);
  if (props.position === 'right') return (0, _styledComponents.css)(['right:0px;']);
  return '';
});

var SelectHeader = exports.SelectHeader = _styledComponents2.default.div.withConfig({
  displayName: 'SelectMultiplestyles__SelectHeader',
  componentId: 'sc-4by6mv-5'
})(['display:flex;justify-content:space-between;align-items:center;padding:0px 8px 8px 8px;']);

var SelectCounter = exports.SelectCounter = _styledComponents2.default.span.withConfig({
  displayName: 'SelectMultiplestyles__SelectCounter',
  componentId: 'sc-4by6mv-6'
})(['color:', ';font-weight:', ';font-size:', ';font-family:', ';'], function (props) {
  return (0, _Themes.handleThemeFromObject)(props.theme, 'colors.bluishDarkGrey', '#7E8D95');
}, function (props) {
  return (0, _Themes.handleThemeFromObject)(props.theme, 'fontWeights.regular', 400);
}, function (props) {
  return (0, _Themes.handleThemeFromObject)(props.theme, 'fontSizes.mobileMedium', '12px');
}, function (props) {
  return (0, _Themes.handleThemeFromObject)(props.theme, 'fontFamily', 'Roboto');
});

var SelectBox = exports.SelectBox = _styledComponents2.default.div.withConfig({
  displayName: 'SelectMultiplestyles__SelectBox',
  componentId: 'sc-4by6mv-7'
})(['width:100%;display:flex;justify-content:flex-start;align-items:center;flex-wrap:wrap;']);

var Checkbox = exports.Checkbox = (0, _styledComponents2.default)(_Checkbox2.default).withConfig({
  displayName: 'SelectMultiplestyles__Checkbox',
  componentId: 'sc-4by6mv-8'
})(['color:', ';font-weight:', ';font-size:', ';font-family:', ';cursor:pointer;margin:0px;', ' & > span{padding:0px 0px 0px 25px;}& > span:before{width:17px;height:17px;background-color:', ';border-radius:4px;}&  > span:after{width:6px;height:12px;}'], function (props) {
  return (0, _Themes.handleThemeFromObject)(props.theme, 'colors.bluishDarkGrey', '#7E8D95');
}, function (props) {
  return (0, _Themes.handleThemeFromObject)(props.theme, 'fontWeights.regular', 400);
}, function (props) {
  return (0, _Themes.handleThemeFromObject)(props.theme, 'fontSizes.mobileMedium', '12px');
}, function (props) {
  return (0, _Themes.handleThemeFromObject)(props.theme, 'fontFamily', 'Roboto');
}, function (props) {
  if (!props.header) {
    return (0, _styledComponents.css)(['padding:6px 8px 4px 8px;border:1px solid ', ';border-radius:4px;background-color:', ';margin-right:8px;margin-bottom:8px;'], props.checked ? (0, _Themes.handleThemeFromObject)(props.theme, 'colors.mediumLightLiberBlue', '#BEE6FF') : (0, _Themes.handleThemeFromObject)(props.theme, 'colors.mediumGrey2', '#cecece'), props.checked ? (0, _Themes.handleThemeFromObject)(props.theme, 'colors.lightLiberBlue', '#E3F5FF') : (0, _Themes.handleThemeFromObject)(props.theme, 'colors.liberWhite', '#fafafa'));
  }return '';
}, function (props) {
  return (0, _Themes.handleThemeFromObject)(props.theme, 'colors.liberWhite', '#fafafa');
});

var Tooltip = exports.Tooltip = _styledComponents2.default.div.withConfig({
  displayName: 'SelectMultiplestyles__Tooltip',
  componentId: 'sc-4by6mv-9'
})(['color:', ';font-weight:', ';font-size:', ';font-family:', ';'], function (props) {
  return (0, _Themes.handleThemeFromObject)(props.theme, 'colors.mediumGrey', '#A4A4A4');
}, function (props) {
  return (0, _Themes.handleThemeFromObject)(props.theme, 'fontWeights.medium', 500);
}, function (props) {
  return (0, _Themes.handleThemeFromObject)(props.theme, 'fontSizes.mobileMedium', '12px');
}, function (props) {
  return (0, _Themes.handleThemeFromObject)(props.theme, 'fontFamily', 'Roboto');
});