'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.IconContainer = exports.Icon = exports.TooltipContainer = exports.Tab = exports.TableTabs = undefined;

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _styledComponents = require('styled-components');

var _styledComponents2 = _interopRequireDefault(_styledComponents);

var _Icons = require('../../../Icons');

var _Themes = require('../../../Themes');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var TableTabs = exports.TableTabs = _styledComponents2.default.div.attrs(function (_ref) {
  var children = _ref.children;
  return {
    style: { '--min-width': _react2.default.Children.toArray(children).length * 225 + 'px' }
  };
}).withConfig({
  displayName: 'TableTabstyles__TableTabs',
  componentId: 'sc-1is0e3u-0'
})(['max-width:100%;height:48px;background-color:transparent;border-radius:4px 4px 0px 0px;overflow:hidden;display:inline-flex;justify-content:flex-start;width:var(--min-width,225px);']);

var inactive = (0, _styledComponents.css)(['background-color:', ';border-bottom:1px solid ', ';color:', ';font-weight:', ';'], function (props) {
  return (0, _Themes.handleThemeFromObject)(props.theme, 'colors.v2.grey7', '#f6f8f9');
}, function (props) {
  return (0, _Themes.handleThemeFromObject)(props.theme, 'colors.v2.grey5', '#ecf0f3');
}, function (props) {
  return (0, _Themes.handleThemeFromObject)(props.theme, 'colors.v2.gray4', '#6287a7');
}, function (props) {
  return (0, _Themes.handleThemeFromObject)(props.theme, 'fontWeights.regular', 400);
});

var active = (0, _styledComponents.css)(['background-color:trasnparent;border-bottom-color:transparent;color:', ';font-weight:', ';'], function (props) {
  return (0, _Themes.handleThemeFromObject)(props.theme, 'colors.v2.liberBlue', '#009dff');
}, function (props) {
  return (0, _Themes.handleThemeFromObject)(props.theme, 'fontWeights.medium', 500);
});

var Tab = exports.Tab = _styledComponents2.default.a.withConfig({
  displayName: 'TableTabstyles__Tab',
  componentId: 'sc-1is0e3u-1'
})(['--icon-size:16px;flex-grow:1;max-width:225px;display:flex;justify-content:center;align-items:center;font-family:', ';font-size:', ';font-weight:', ';line-height:22px;', ' text-decoration:none;'], function (props) {
  return (0, _Themes.handleThemeFromObject)(props.theme, 'fontFamily', 'Roboto');
}, function (props) {
  return (0, _Themes.handleThemeFromObject)(props.theme, 'fontSizes.p', '16px');
}, function (props) {
  return (0, _Themes.handleThemeFromObject)(props.theme, 'fontWeights.regular', 400);
}, function (props) {
  return props.active ? active : inactive;
});

var TooltipContainer = exports.TooltipContainer = _styledComponents2.default.div.withConfig({
  displayName: 'TableTabstyles__TooltipContainer',
  componentId: 'sc-1is0e3u-2'
})(['margin-left:8px;height:100%;display:flex;justify-content:center;align-items:center;']);

var Icon = exports.Icon = (0, _styledComponents2.default)(_Icons.FaQuestionCircle).withConfig({
  displayName: 'TableTabstyles__Icon',
  componentId: 'sc-1is0e3u-3'
})(['min-width:var(--icon-size);min-height:var(--icon-size);max-width:var(--icon-size);max-height:var(--icon-size);fill:', ';opacity:0.6;'], function (props) {
  return (0, _Themes.handleThemeFromObject)(props.theme, 'colors.v2.petroleum', '#4b6f85');
});

var IconContainer = exports.IconContainer = _styledComponents2.default.div.withConfig({
  displayName: 'TableTabstyles__IconContainer',
  componentId: 'sc-1is0e3u-4'
})(['cursor:default;display:flex;']);