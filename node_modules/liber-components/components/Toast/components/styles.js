'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.AnimationContainer = exports.Container = exports.Sep = exports.CloseIcon = exports.Close = exports.WarningIcon = exports.ErroIcon = exports.SuccessIcon = exports.InfoIcon = exports.Warning = exports.Error = exports.Success = exports.Info = exports.Card = exports.BaseToast = undefined;

var _templateObject = _taggedTemplateLiteral(['\n    width: 500px;\n  '], ['\n    width: 500px;\n  ']),
    _templateObject2 = _taggedTemplateLiteral(['\n    top: 15px;\n    right: 15px;\n    width: 500px;\n  '], ['\n    top: 15px;\n    right: 15px;\n    width: 500px;\n  ']);

var _styledComponents = require('styled-components');

var _styledComponents2 = _interopRequireDefault(_styledComponents);

var _Themes = require('../../Themes');

var _Util = require('../../Util');

var _Icons = require('../../Icons');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _taggedTemplateLiteral(strings, raw) { return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

var colors = {
  info: '#009dff',
  success: '#13ce66',
  error: '#dc3545',
  warning: '#ffdb6a',
  empty: '#717171'
};

var BaseToast = exports.BaseToast = _styledComponents2.default.div.withConfig({
  displayName: 'styles__BaseToast',
  componentId: 'u1x7ll-0'
})(['border-left:4px solid;border-color:', ';width:100%;max-width:100%;min-height:96px;box-sizing:border-box;padding:20px;padding-right:45px;display:flex;justify-content:flex-start;align-items:center;font-size:18px;font-family:inherit;font-weight:bold;color:', ';;background-color:', ';'], function (props) {
  return (0, _Themes.handleThemeFromObject)(props.theme, 'toast.empty', colors.empty);
}, function (props) {
  return (0, _Themes.handleThemeFromObject)(props.theme, 'toast.color', '#717171');
}, function (props) {
  return (0, _Themes.handleThemeFromObject)(props.theme, 'toast.background', '#fff');
});

var Card = exports.Card = _styledComponents2.default.div.withConfig({
  displayName: 'styles__Card',
  componentId: 'u1x7ll-1'
})(['width:100%;min-height:96px;border-radius:4px;box-shadow:0 2px 10px 0 rgba(0,0,0,0.1);overflow:hidden;margin-bottom:20px;position:relative;&:last-child{margin-bottom:0px;}', ''], _Util.media.small(_templateObject));

var Info = exports.Info = (0, _styledComponents2.default)(BaseToast).withConfig({
  displayName: 'styles__Info',
  componentId: 'u1x7ll-2'
})(['border-color:', ';'], function (props) {
  return (0, _Themes.handleThemeFromObject)(props.theme, 'toast.info', colors.info);
});
var Success = exports.Success = (0, _styledComponents2.default)(BaseToast).withConfig({
  displayName: 'styles__Success',
  componentId: 'u1x7ll-3'
})(['border-color:', ';'], function (props) {
  return (0, _Themes.handleThemeFromObject)(props.theme, 'toast.success', colors.success);
});
var Error = exports.Error = (0, _styledComponents2.default)(BaseToast).withConfig({
  displayName: 'styles__Error',
  componentId: 'u1x7ll-4'
})(['border-color:', ';'], function (props) {
  return (0, _Themes.handleThemeFromObject)(props.theme, 'toast.error', colors.error);
});
var Warning = exports.Warning = (0, _styledComponents2.default)(BaseToast).withConfig({
  displayName: 'styles__Warning',
  componentId: 'u1x7ll-5'
})(['border-color:', ';'], function (props) {
  return (0, _Themes.handleThemeFromObject)(props.theme, 'toast.warning', colors.warning);
});

var Icon = (0, _styledComponents.css)(['', ' ', ''], (0, _Util.generateMinMax)('width', '40px'), (0, _Util.generateMinMax)('height', '40px'));

var InfoIcon = exports.InfoIcon = (0, _styledComponents2.default)(_Icons.FaInfoCircle).withConfig({
  displayName: 'styles__InfoIcon',
  componentId: 'u1x7ll-6'
})(['', ' fill:', ';'], Icon, function (props) {
  return (0, _Themes.handleThemeFromObject)(props.theme, 'toast.info', colors.info);
});
var SuccessIcon = exports.SuccessIcon = (0, _styledComponents2.default)(_Icons.FaCheckCircle).withConfig({
  displayName: 'styles__SuccessIcon',
  componentId: 'u1x7ll-7'
})(['', ' fill:', ';'], Icon, function (props) {
  return (0, _Themes.handleThemeFromObject)(props.theme, 'toast.success', colors.success);
});
var ErroIcon = exports.ErroIcon = (0, _styledComponents2.default)(_Icons.FaTimesCircle).withConfig({
  displayName: 'styles__ErroIcon',
  componentId: 'u1x7ll-8'
})(['', ' fill:', ';'], Icon, function (props) {
  return (0, _Themes.handleThemeFromObject)(props.theme, 'toast.error', colors.error);
});
var WarningIcon = exports.WarningIcon = (0, _styledComponents2.default)(_Icons.FaExclamationCircle).withConfig({
  displayName: 'styles__WarningIcon',
  componentId: 'u1x7ll-9'
})(['', ' fill:', ';'], Icon, function (props) {
  return (0, _Themes.handleThemeFromObject)(props.theme, 'toast.warning', colors.warning);
});

var Close = exports.Close = _styledComponents2.default.button.withConfig({
  displayName: 'styles__Close',
  componentId: 'u1x7ll-10'
})(['background-color:transparent;border:0px;width:15px;height:15px;cursor:pointer;position:absolute;top:16px;right:16px;padding:0px;&:focus{outline:0;}']);

var CloseIcon = exports.CloseIcon = (0, _styledComponents2.default)(_Icons.FaTimes).withConfig({
  displayName: 'styles__CloseIcon',
  componentId: 'u1x7ll-11'
})(['width:15px;height:15px;fill:#717171;']);

var Sep = exports.Sep = _styledComponents2.default.span.withConfig({
  displayName: 'styles__Sep',
  componentId: 'u1x7ll-12'
})(['height:39px;width:0px;margin:0px 24px;border-right:solid 1px #e6e6e6;']);

var Container = exports.Container = _styledComponents2.default.div.withConfig({
  displayName: 'styles__Container',
  componentId: 'u1x7ll-13'
})(['position:fixed;top:0px;right:0px;width:100%;z-index:9999;', ''], _Util.media.small(_templateObject2));

var enter = (0, _styledComponents.keyframes)(['100%{transform:translateX(0px);height:auto;padding-bottom:20px;}50%{height:auto;padding-bottom:20px;}0%{height:0px;padding-bottom:0px;transform:translateX(515px);}']);

var leave = (0, _styledComponents.keyframes)(['0%{transform:translateX(0px);height:auto;padding-bottom:20px;}50%{height:auto;padding-bottom:20px;}100%{height:0px;padding-bottom:0px;transform:translateX(515px);}']);

var AnimationContainer = exports.AnimationContainer = _styledComponents2.default.div.withConfig({
  displayName: 'styles__AnimationContainer',
  componentId: 'u1x7ll-14'
})(['animation:', ' forwards;animation-duration:', 'ms;overflow:hidden;'], function (props) {
  return props.state === 'entering' || props.state === 'entered' ? enter : leave;
}, function (props) {
  return props.duration;
});