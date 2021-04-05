'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.HighlightItem = exports.InputAutoCompleteItem = exports.InputAutoCompleteList = exports.InputHelperText = exports.InputHelperIcon = exports.InputHelper = exports.InputText = exports.InputPrefix = exports.InputHint = exports.InputLabel = exports.InputError = exports.InputBase = undefined;

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _styledComponents = require('styled-components');

var _styledComponents2 = _interopRequireDefault(_styledComponents);

var _reactInputMask = require('react-input-mask');

var _reactInputMask2 = _interopRequireDefault(_reactInputMask);

var _Icons = require('../../../Icons');

var _Themes = require('../../../Themes');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

var setLabelColor = function setLabelColor(theme, valid, focused, error) {
  if (error) return (0, _Themes.handleThemeFromObject)(theme, 'colors.red', '#dc3545');
  if (valid) return (0, _Themes.handleThemeFromObject)(theme, 'colors.petroleum', '#4b6f85');
  if (focused) return (0, _Themes.handleThemeFromObject)(theme, 'colors.liber-blue', '#009DFF');
  return (0, _Themes.handleThemeFromObject)(theme, 'colors.dark-text60', '#8c9fa9');
};

var InputBase = exports.InputBase = _styledComponents2.default.div.withConfig({
  displayName: 'TextFieldstyles__InputBase',
  componentId: 'sc-1fbvbmr-0'
})(['position:relative;padding-top:10px;width:', ';outline:none;pointer-events:', ';*{background-color:transparent;border:none;color:', ';line-height:24px;font-family:\'Roboto\',sans-serif;font-size:16px;font-weight:400;text-align:left;}label{color:', ';}label:before{display:', ';}input{background-color:', ';}'], function (props) {
  return props.width;
}, function (props) {
  return props.disabled ? 'none' : 'auto';
}, function (props) {
  return (0, _Themes.handleThemeFromObject)(props.theme, 'colors.dark-text87', '#587383');
}, function (props) {
  return props.disabled && (0, _Themes.handleThemeFromObject)(props.theme, 'colors.dark-text38', '#b6c2c9');
}, function (props) {
  return props.disabled && 'none';
}, function (props) {
  return props.disabled ? (0, _Themes.handleThemeFromObject)(props.theme, 'colors.border', '#e8ebee') : (0, _Themes.handleThemeFromObject)(props.theme, 'colors.white', '#ffffff');
});

var InputError = exports.InputError = _styledComponents2.default.div.withConfig({
  displayName: 'TextFieldstyles__InputError',
  componentId: 'sc-1fbvbmr-1'
})(['width:auto;text-align:left;padding:12px 6px;color:', ';font-size:12px;line-height:12px;transition:all 200ms cubic-bezier(0.645,0.045,0.355,1);&:before{content:"\0a0";}'], function (props) {
  return props.visible ? (0, _Themes.handleThemeFromObject)(props.theme, 'colors.red', '#dc3545') : 'transparent';
});

var InputLabel = exports.InputLabel = _styledComponents2.default.label.withConfig({
  displayName: 'TextFieldstyles__InputLabel',
  componentId: 'sc-1fbvbmr-2'
})(['position:absolute;padding:0px 6px;left:6px;text-align:left;font-size:', ';color:', ';background-color:transparent;top:', ';transition:all 200ms cubic-bezier(0.645,0.045,0.355,1);;pointer-events:none;width:auto;overflow:hidden;white-space:nowrap;text-overflow:ellipsis;user-select:none;z-index:1;&:before{content:"";position:absolute;border-bottom:3px solid ', ';left:0px;top:calc(50% - 2px);width:100%;z-index:-1;}'], function (props) {
  return props.focused || props.valid || props.open ? '12px' : '16px';
}, function (props) {
  return setLabelColor(props.theme, props.valid, props.focused, props.error);
}, function (props) {
  return props.focused || props.valid || props.open ? '0px' : '20px';
}, function (props) {
  return (0, _Themes.handleThemeFromObject)(props.theme, 'colors.white', '#ffffff');
});

var InputHint = exports.InputHint = _styledComponents2.default.div.withConfig({
  displayName: 'TextFieldstyles__InputHint',
  componentId: 'sc-1fbvbmr-3'
})(['position:absolute;top:12px;padding:10px 12px;color:', ';transition:all 200ms cubic-bezier(0.645,0.045,0.355,1);pointer-events:none;overflow:hidden;'], function (props) {
  return props.visible ? (0, _Themes.handleThemeFromObject)(props.theme, 'colors.dark-text38', '#b6c2c9') : 'transparent';
});

var InputPrefix = exports.InputPrefix = (0, _styledComponents2.default)(InputHint).withConfig({
  displayName: 'TextFieldstyles__InputPrefix',
  componentId: 'sc-1fbvbmr-4'
})(['display:flex;align-items:center;width:unset;height:40px;box-sizing:border-box;color:', ';& svg{--width:16px;--height:16px;min-height:var(--height);min-width:var(--width);fill:', ';transition:all 200ms cubic-bezier(0.645,0.045,0.355,1);;}'], function (props) {
  if (!props.visible) return 'transparent';
  if (props.error && props.visible) return (0, _Themes.handleThemeFromObject)(props.theme, 'colors.red', '#dc3545');
  if (props.valid) return (0, _Themes.handleThemeFromObject)(props.theme, 'colors.petroleum', '#4b6f85');
  return props.focused ? (0, _Themes.handleThemeFromObject)(props.theme, 'colors.primary', '#009dff') : (0, _Themes.handleThemeFromObject)(props.theme, 'colors.gray3', '#C6D1D8');
}, function (props) {
  if (!props.visible) return 'transparent';
  if (props.error) return (0, _Themes.handleThemeFromObject)(props.theme, 'colors.red', '#dc3545');
  return props.focused ? (0, _Themes.handleThemeFromObject)(props.theme, 'colors.primary', '#009dff') : (0, _Themes.handleThemeFromObject)(props.theme, 'colors.gray3', '#C6D1D8');
});

var InputText = (0, _styledComponents2.default)(function (_ref) {
  var error = _ref.error,
      props = _objectWithoutProperties(_ref, ['error']);

  return _react2.default.createElement(_reactInputMask2.default, props);
}).withConfig({
  displayName: 'TextFieldstyles__InputText',
  componentId: 'sc-1fbvbmr-5'
})(['padding:10px;border-radius:4px;border:solid 1px ', ';width:100%;padding-left:', ';box-sizing:border-box;z-index:-2;&:focus{outline:0;border:solid 1px ', ';}&::-moz-focus-inner{border:0;}&::placeholder{color:transparent;}&:-webkit-autofill,&:-webkit-autofill:hover,&:-webkit-autofill:focus,&:-webkit-autofill:active{-webkit-box-shadow:0 0 0px 1000px #fff inset !important;transition:background-color 99999s ease-in-out 0s;}'], function (props) {
  return props.error ? (0, _Themes.handleThemeFromObject)(props.theme, 'colors.red', '#dc3545') : (0, _Themes.handleThemeFromObject)(props.theme, 'colors.border', '#e8ebee');
}, function (props) {
  return props.padding || null;
}, function (props) {
  return props.error ? (0, _Themes.handleThemeFromObject)(props.theme, 'colors.red', '#dc3545') : (0, _Themes.handleThemeFromObject)(props.theme, 'colors.primary', '#009dff');
});

exports.InputText = InputText;
var InputHelper = exports.InputHelper = _styledComponents2.default.div.withConfig({
  displayName: 'TextFieldstyles__InputHelper',
  componentId: 'sc-1fbvbmr-6'
})(['display:', ';position:', ';width:100%;top:', ';padding:', ';& > *{color:', ';fill:', ';}'], function (props) {
  return props.visible ? 'block' : 'none';
}, function (props) {
  return props.afterError ? 'relative' : 'absolute';
}, function (props) {
  return props.afterError ? 'auto' : 'calc(42px + 12px + 2px)';
}, function (props) {
  return props.afterError ? '0px' : '12px 10px';
}, function (props) {
  return (0, _Themes.handleThemeFromObject)(props.theme, 'colors.dark-text38', '#b6c2c9');
}, function (props) {
  return (0, _Themes.handleThemeFromObject)(props.theme, 'colors.dark-text38', '#b6c2c9');
});

var InputHelperIcon = exports.InputHelperIcon = (0, _styledComponents2.default)(_Icons.FaInfoCircle).withConfig({
  displayName: 'TextFieldstyles__InputHelperIcon',
  componentId: 'sc-1fbvbmr-7'
})(['position:absolute;width:15px;height:15px;margin:1px 0px;top:calc(50% - 9px);']);

var InputHelperText = exports.InputHelperText = _styledComponents2.default.div.withConfig({
  displayName: 'TextFieldstyles__InputHelperText',
  componentId: 'sc-1fbvbmr-8'
})(['margin-left:18px;padding-left:5px;font-size:12px;']);

var InputAutoCompleteList = exports.InputAutoCompleteList = _styledComponents2.default.div.withConfig({
  displayName: 'TextFieldstyles__InputAutoCompleteList',
  componentId: 'sc-1fbvbmr-9'
})(['position:absolute;border-radius:4px;box-shadow:0 1px 2px 0 rgba(0,0,0,0.12);z-index:99;top:100%;left:0;right:0;']);

var InputAutoCompleteItem = exports.InputAutoCompleteItem = _styledComponents2.default.div.withConfig({
  displayName: 'TextFieldstyles__InputAutoCompleteItem',
  componentId: 'sc-1fbvbmr-10'
})(['padding:10px;cursor:pointer;background-color:', ';color:#8c9fa9;&:hover{background-color:', ';color:', ';}'], function (props) {
  return (0, _Themes.handleThemeFromObject)(props.theme, 'colors.white', '#ffffff');
}, function (props) {
  return (0, _Themes.handleThemeFromObject)(props.theme, 'colors.lightBlue75', '#f0f9ff');
}, function (props) {
  return (0, _Themes.handleThemeFromObject)(props.theme, 'colors.lightBlue', '#4cbaff');
});

var HighlightItem = exports.HighlightItem = _styledComponents2.default.span.withConfig({
  displayName: 'TextFieldstyles__HighlightItem',
  componentId: 'sc-1fbvbmr-11'
})(['font-weight:500;color:#009dff;']);