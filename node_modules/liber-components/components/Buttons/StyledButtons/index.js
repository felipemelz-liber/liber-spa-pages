'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.SuccessLink = exports.SecondaryLink = exports.PrimaryLink = exports.Link = exports.SuccessButton = exports.SecondaryButton = exports.PrimaryButton = exports.Button = undefined;

var _styledComponents = require('styled-components');

var _styledComponents2 = _interopRequireDefault(_styledComponents);

var _Themes = require('../../Themes');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var buttonRipple = (0, _styledComponents.keyframes)(['0%{transform:scale(0,0);opacity:1;}20%{transform:scale(25,25);opacity:1;}100%{opacity:0;transform:scale(40,40);}']);

var base = (0, _styledComponents.css)(['background-color:', ';color:', ';border:0px;border-radius:4px;font-size:18px;font-weight:600;font-family:inherit;cursor:pointer;padding:0 16px;transition:all 450ms cubic-bezier(0.23,1,0.32,1) 0ms;box-sizing:border-box;display:inline-flex;align-items:center;justify-content:center;position:relative;overflow:hidden;&:focus{outline:0;}&::-moz-focus-inner{border:0;}&:hover{background-color:', ';}&:disabled{background-color:', ' !important;border:none !important;color:', ' !important;}&:after{content:\'\';position:absolute;top:50%;left:50%;width:5px;height:5px;background:', ';opacity:0.5;opacity:0;border-radius:100%;transform:scale(1,1) translate(-50%);transform-origin:50% 50%;}&:focus:not(:active)::after{animation:', ' 0.8s ease-out;}'], function (props) {
  return (0, _Themes.handleThemeFromObject)(props.theme, 'buttons.base.background', '#a4a4a4');
}, function (props) {
  return (0, _Themes.handleThemeFromObject)(props.theme, 'buttons.base.color', '#ffffff');
}, function (props) {
  return (0, _Themes.handleThemeFromObject)(props.theme, 'buttons.base.backgroundHover', '#717171');
}, function (props) {
  return (0, _Themes.handleThemeFromObject)(props.theme, 'buttons.disabled.background', '#a4a4a4');
}, function (props) {
  return (0, _Themes.handleThemeFromObject)(props.theme, 'buttons.disabled.color', '#ffffff');
}, function (props) {
  return (0, _Themes.handleThemeFromObject)(props.theme, 'buttons.base.backgroundHover', 'rgba(206, 206, 206, 0.5)');
}, buttonRipple);

var Button = exports.Button = _styledComponents2.default.button.withConfig({
  displayName: 'StyledButtons__Button',
  componentId: 'sc-7a7n72-0'
})(['width:', ';min-width:', ';max-width:', ';height:', ';min-height:', ';max-height:', ';margin:', ';', ' ', ''], function (props) {
  return props.width ? props.width : null;
}, function (props) {
  return props.minWidth ? props.minWidth : null;
}, function (props) {
  return props.maxWidth ? props.maxwidth : null;
}, function (props) {
  return props.height ? props.height : '40px';
}, function (props) {
  return props.minHeight ? props.minHeight : null;
}, function (props) {
  return props.maxHeight ? props.maxHeight : null;
}, function (props) {
  return props.margin && typeof props.margin === 'string' ? props.margin : null;
}, function (props) {
  if (props.margin) {
    return '\n        margin-top: ' + (props.margin.top || null) + ';\n        margin-right: ' + (props.margin.right || null) + ';\n        margin-bottom: ' + (props.margin.bottom || null) + ';\n        margin-left: ' + (props.margin.left || null) + ';\n      ';
  }
  return null;
}, base);

var PrimaryButton = exports.PrimaryButton = (0, _styledComponents2.default)(Button).withConfig({
  displayName: 'StyledButtons__PrimaryButton',
  componentId: 'sc-7a7n72-1'
})(['background-color:', ';color:', ';&:hover{background-color:', ';}&:after{background:', '}'], function (props) {
  return (0, _Themes.handleThemeFromObject)(props.theme, 'buttons.primary.background', '#009dff');
}, function (props) {
  return (0, _Themes.handleThemeFromObject)(props.theme, 'buttons.primary.color', '#ffffff');
}, function (props) {
  return (0, _Themes.handleThemeFromObject)(props.theme, 'buttons.primary.backgroundHover', '#007ecc');
}, function (props) {
  return (0, _Themes.handleThemeFromObject)(props.theme, 'buttons.primary.ripple', 'rgba(0,157,255, 0.5)');
});

var SecondaryButton = exports.SecondaryButton = (0, _styledComponents2.default)(Button).withConfig({
  displayName: 'StyledButtons__SecondaryButton',
  componentId: 'sc-7a7n72-2'
})(['background-color:', ';color:', ' !important;border:2px solid ', ';&:hover{background-color:', ';color:', ' !important;border:2px solid ', ';}&:after{background:', ';}'], function (props) {
  return (0, _Themes.handleThemeFromObject)(props.theme, 'buttons.secondary.background', '#ffffff');
}, function (props) {
  return (0, _Themes.handleThemeFromObject)(props.theme, 'buttons.secondary.color', '#009dff');
}, function (props) {
  return (0, _Themes.handleThemeFromObject)(props.theme, 'buttons.secondary.border', '#009dff');
}, function (props) {
  return (0, _Themes.handleThemeFromObject)(props.theme, 'buttons.secondary.backgroundHover', '#007ecc');
}, function (props) {
  return (0, _Themes.handleThemeFromObject)(props.theme, 'buttons.secondary.colorHover', '#ffffff');
}, function (props) {
  return (0, _Themes.handleThemeFromObject)(props.theme, 'buttons.secondary.borderHover', '#007ecc');
}, function (props) {
  return (0, _Themes.handleThemeFromObject)(props.theme, 'buttons.secondary.borderHover', 'rgba(0,157,255, 0.5)');
});

var SuccessButton = exports.SuccessButton = (0, _styledComponents2.default)(Button).withConfig({
  displayName: 'StyledButtons__SuccessButton',
  componentId: 'sc-7a7n72-3'
})(['background-color:', ';color:', ';&:hover{background-color:', ';}&:after{background:', ';}'], function (props) {
  return (0, _Themes.handleThemeFromObject)(props.theme, 'buttons.success.background', '#13CE66');
}, function (props) {
  return (0, _Themes.handleThemeFromObject)(props.theme, 'buttons.success.color', '#ffffff');
}, function (props) {
  return (0, _Themes.handleThemeFromObject)(props.theme, 'buttons.success.backgroundHover', '#0DAB53');
}, function (props) {
  return (0, _Themes.handleThemeFromObject)(props.theme, 'buttons.success.ripple', 'rgba(19,206,102, 0.5)');
});

var Link = exports.Link = _styledComponents2.default.a.withConfig({
  displayName: 'StyledButtons__Link',
  componentId: 'sc-7a7n72-4'
})(['width:', ';min-width:', ';max-width:', ';height:', ';min-height:', ';max-height:', ';margin:', ';', ' text-decoration:none;', ''], function (props) {
  return props.width ? props.width : null;
}, function (props) {
  return props.minWidth ? props.minWidth : null;
}, function (props) {
  return props.maxWidth ? props.maxwidth : null;
}, function (props) {
  return props.height ? props.height : '40px';
}, function (props) {
  return props.minHeight ? props.minHeight : null;
}, function (props) {
  return props.maxHeight ? props.maxHeight : null;
}, function (props) {
  return props.margin && typeof props.margin === 'string' ? props.margin : null;
}, function (props) {
  if (props.margin) {
    return '\n          margin-top: ' + (props.margin.top || null) + ';\n          margin-right: ' + (props.margin.right || null) + ';\n          margin-bottom: ' + (props.margin.bottom || null) + ';\n          margin-left: ' + (props.margin.left || null) + ';\n';
  }
  return null;
}, base);

var PrimaryLink = exports.PrimaryLink = (0, _styledComponents2.default)(Link).withConfig({
  displayName: 'StyledButtons__PrimaryLink',
  componentId: 'sc-7a7n72-5'
})(['background-color:', ';color:', ' !important;&:hover{background-color:', ';}&:after{background:', ';}'], function (props) {
  return (0, _Themes.handleThemeFromObject)(props.theme, 'buttons.primary.background', '#009dff');
}, function (props) {
  return (0, _Themes.handleThemeFromObject)(props.theme, 'buttons.primary.color', '#ffffff');
}, function (props) {
  return (0, _Themes.handleThemeFromObject)(props.theme, 'buttons.primary.backgroundHover', '#007ecc');
}, function (props) {
  return (0, _Themes.handleThemeFromObject)(props.theme, 'buttons.primary.ripple', 'rgba(0,157,255, 0.5)');
});

var SecondaryLink = exports.SecondaryLink = (0, _styledComponents2.default)(Link).withConfig({
  displayName: 'StyledButtons__SecondaryLink',
  componentId: 'sc-7a7n72-6'
})(['background-color:', ';color:', ' !important;border:2px solid ', ';&:hover{background-color:', ';color:', ' !important;border:2px solid ', ';}&:after{background:', ';}'], function (props) {
  return (0, _Themes.handleThemeFromObject)(props.theme, 'buttons.secondary.background', '#ffffff');
}, function (props) {
  return (0, _Themes.handleThemeFromObject)(props.theme, 'buttons.secondary.color', '#009dff');
}, function (props) {
  return (0, _Themes.handleThemeFromObject)(props.theme, 'buttons.secondary.border', '#009dff');
}, function (props) {
  return (0, _Themes.handleThemeFromObject)(props.theme, 'buttons.secondary.backgroundHover', '#007ecc');
}, function (props) {
  return (0, _Themes.handleThemeFromObject)(props.theme, 'buttons.secondary.colorHover', '#ffffff');
}, function (props) {
  return (0, _Themes.handleThemeFromObject)(props.theme, 'buttons.secondary.borderHover', '#007ecc');
}, function (props) {
  return (0, _Themes.handleThemeFromObject)(props.theme, 'buttons.secondary.ripple', 'rgba(0,157,255, 0.5)');
});

var SuccessLink = exports.SuccessLink = (0, _styledComponents2.default)(Link).withConfig({
  displayName: 'StyledButtons__SuccessLink',
  componentId: 'sc-7a7n72-7'
})(['background-color:', ';color:', ' !important;&:hover{background-color:', ';}&:after{background:', ';}'], function (props) {
  return (0, _Themes.handleThemeFromObject)(props.theme, 'buttons.success.background', '#13CE66');
}, function (props) {
  return (0, _Themes.handleThemeFromObject)(props.theme, 'buttons.success.color', '#ffffff');
}, function (props) {
  return (0, _Themes.handleThemeFromObject)(props.theme, 'buttons.success.backgroundHover', '#0DAB53');
}, function (props) {
  return (0, _Themes.handleThemeFromObject)(props.theme, 'buttons.success.ripple', 'rgba(19, 206, 102, 0.5)');
});