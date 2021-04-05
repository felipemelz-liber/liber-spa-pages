'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.MenuOption = exports.Option = exports.List = exports.Label = exports.Icon = exports.ButtonMenu = exports.Button = exports.Box = undefined;

var _templateObject = _taggedTemplateLiteral(['\n    font-size: ', ';\n    &:after {\n      transform: scale(1);\n    }\n  '], ['\n    font-size: ', ';\n    &:after {\n      transform: scale(1);\n    }\n  ']),
    _templateObject2 = _taggedTemplateLiteral(['\n    font-size: 16px;\n  '], ['\n    font-size: 16px;\n  ']);

var _styledComponents = require('styled-components');

var _styledComponents2 = _interopRequireDefault(_styledComponents);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _Themes = require('../Themes');

var _Util = require('../Util');

var _Icons = require('../Icons');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _taggedTemplateLiteral(strings, raw) { return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

var Box = exports.Box = _styledComponents2.default.div.withConfig({
  displayName: 'styles__Box',
  componentId: 'd56xc2-0'
})(['position:relative;display:inline-block;']);

var Button = exports.Button = _styledComponents2.default.button.withConfig({
  displayName: 'styles__Button',
  componentId: 'd56xc2-1'
})(['background-color:transparent;color:', ';cursor:pointer;border:0px;padding:5px 38px 5px 10px;box-sizing:border-box;border-radius:4px;font-family:', ';font-size:', ';font-weight:', ';&:focus{outline:0;}&::-moz-focus-inner{border:0;}&:hover{background-color:', '}position:relative;&:after{content:"";position:absolute;top:calc(50% - 3px);right:10px;width:0px;height:0px;border-top:5px solid ', ';border-right:5px solid transparent;border-bottom:5px solid transparent;border-left:5px solid transparent;transform:scale(0.75);}', ''], function (props) {
  return (0, _Themes.handleThemeFromObject)(props.theme, 'dropdown.button.color', '#717171');
}, function (props) {
  return (0, _Themes.handleThemeFromObject)(props.theme, 'dropdown.button.fontFamily', 'Roboto');
}, function (props) {
  return (0, _Themes.handleThemeFromObject)(props.theme, 'dropdown.button.fontSizeSmall', '16px');
}, function (props) {
  return (0, _Themes.handleThemeFromObject)(props.theme, 'dropdown.button.fontWeight', '400');
}, function (props) {
  return (0, _Themes.handleThemeFromObject)(props.theme, 'dropdown.button.hover', 'rgba(230,230,230,0.3)');
}, function (props) {
  return (0, _Themes.handleThemeFromObject)(props.theme, 'dropdown.button.caret', '#009eff');
}, _Util.media.large(_templateObject, function (props) {
  return (0, _Themes.handleThemeFromObject)(props.theme, 'dropdown.button.fontSizeLarge', '22px');
}));

var ButtonMenu = exports.ButtonMenu = (0, _styledComponents2.default)(Button).withConfig({
  displayName: 'styles__ButtonMenu',
  componentId: 'd56xc2-2'
})(['padding:5px;&:after{display:none;}']);

var Icon = exports.Icon = (0, _styledComponents2.default)(_Icons.FaEllipsisV).withConfig({
  displayName: 'styles__Icon',
  componentId: 'd56xc2-3'
})(['display:block;height:25px;width:25px;fill:', ';;'], function (props) {
  return (0, _Themes.handleThemeFromObject)(props.theme, 'dropdown.menu.icon', '#9898ae');
});

var Label = exports.Label = _styledComponents2.default.li.withConfig({
  displayName: 'styles__Label',
  componentId: 'd56xc2-4'
})(['padding:5px 0px;border-radius:2px;background-color:', ';color:', ';border-bottom:1px solid ', ';font-weight:bold;text-align:center;user-select:none;'], function (props) {
  return (0, _Themes.handleThemeFromObject)(props.theme, 'dropdown.label.background', '#ffffff');
}, function (props) {
  return (0, _Themes.handleThemeFromObject)(props.theme, 'dropdown.label.color', '#717171');
}, function (props) {
  return (0, _Themes.handleThemeFromObject)(props.theme, 'dropdown.label.border', '#e6e6e6');
});

var List = exports.List = _styledComponents2.default.ul.withConfig({
  displayName: 'styles__List',
  componentId: 'd56xc2-5'
})(['list-style-type:none;position:absolute;', ' display:flex;white-space:nowrap;flex-direction:column;background-color:', ';box-shadow:0 2px 6px 0 rgba(0,0,0,0.1);border:solid 1px ', ';border-radius:2px;z-index:5;margin:0px;padding:0px;font-family:inherit;font-size:14px;font-weight:500;opacity:', ';transition:all 100ms ease-in-out;transform-origin:top left;transform:scaleY(', ');', ' ', ''], function (props) {
  switch (props.position) {
    case 'bottom-right':
      return (0, _styledComponents.css)(['top:100%;right:0px;']);
    case 'bottom-center-right':
      return (0, _styledComponents.css)(['top:100%;right:50%;']);
    case 'bottom-center-left':
      return (0, _styledComponents.css)(['top:100%;left:50%;']);
    case 'bottom-left':
      return (0, _styledComponents.css)(['top:100%;left:0px;']);
    case 'center-right':
      return (0, _styledComponents.css)(['top:50%;right:0px;']);
    case 'center-from-right':
      return (0, _styledComponents.css)(['top:50%;right:50%;']);
    case 'center-from-left':
      return (0, _styledComponents.css)(['top:50%;left:50%;']);
    case 'center-left':
      return (0, _styledComponents.css)(['top:50%;left:0px;']);
    case 'top-right':
      return (0, _styledComponents.css)(['top:0px;right:0px;']);
    case 'top-center-right':
      return (0, _styledComponents.css)(['top:0px;right:50%;']);
    case 'top-center-left':
      return (0, _styledComponents.css)(['top:0px;left:50%;']);
    case 'top-left':
    default:
      return (0, _styledComponents.css)(['top:0px;left:0px;']);
  }
}, function (props) {
  return (0, _Themes.handleThemeFromObject)(props.theme, 'dropdown.list.background', '#ffffff');
}, function (props) {
  return (0, _Themes.handleThemeFromObject)(props.theme, 'dropdown.list.border', 'rgba(230, 230, 230, 0.2)');
}, function (props) {
  return props.opacity || '0';
}, function (props) {
  return props.scaleY || '0.7';
}, _Util.media.large(_templateObject2), _Util.media.extraLarge(_templateObject2));

var Option = exports.Option = _styledComponents2.default.li.withConfig({
  displayName: 'styles__Option',
  componentId: 'd56xc2-6'
})(['padding:5px 40px 5px 20px;border-radius:2px;background-color:', ';color:', ';cursor:pointer;user-select:none;&:hover{background-color:', ';color:', ';}'], function (props) {
  return props.selected ? (0, _Themes.handleThemeFromObject)(props.theme, 'dropdown.option.selected.background', 'rgba(223, 227, 235, 0.3)') : (0, _Themes.handleThemeFromObject)(props.theme, 'dropdown.option.unselected.background', '#ffffff');
}, function (props) {
  return props.disabled || props.selected ? (0, _Themes.handleThemeFromObject)(props.theme, 'dropdown.option.selected.color', '#009dff') : (0, _Themes.handleThemeFromObject)(props.theme, 'dropdown.option.unselected.color', '#717171');
}, function (props) {
  return (0, _Themes.handleThemeFromObject)(props.theme, 'dropdown.option.hover.background', '#009dff');
}, function (props) {
  return (0, _Themes.handleThemeFromObject)(props.theme, 'dropdown.option.hover.color', '#ffffff');
});

Option.propTypes = {
  children: _propTypes2.default.oneOfType([_propTypes2.default.string, _propTypes2.default.number, _propTypes2.default.element, _propTypes2.default.arrayOf(_propTypes2.default.any)]).isRequired
};

var MenuOption = exports.MenuOption = (0, _styledComponents2.default)(Option).withConfig({
  displayName: 'styles__MenuOption',
  componentId: 'd56xc2-7'
})(['background-color:', ';color:', ';&:hover{background-color:', ';color:', ';}'], function (props) {
  return (0, _Themes.handleThemeFromObject)(props.theme, 'dropdown.menu.option.background', '#ffffff');
}, function (props) {
  return (0, _Themes.handleThemeFromObject)(props.theme, 'dropdown.menu.option.color', '#a4a4a4');
}, function (props) {
  return (0, _Themes.handleThemeFromObject)(props.theme, 'dropdown.menu.option.hover.background', '#e6e6e6');
}, function (props) {
  return (0, _Themes.handleThemeFromObject)(props.theme, 'dropdown.menu.option.hover.color', '#009dff');
});

MenuOption.propTypes = {
  children: _propTypes2.default.oneOfType([_propTypes2.default.string, _propTypes2.default.number, _propTypes2.default.element, _propTypes2.default.arrayOf(_propTypes2.default.any)]).isRequired
};