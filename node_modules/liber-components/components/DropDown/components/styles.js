"use strict";

require("core-js/modules/es6.object.define-property");

require("core-js/modules/web.dom.iterable");

require("core-js/modules/es6.array.iterator");

require("core-js/modules/es6.object.to-string");

require("core-js/modules/es6.string.iterator");

require("core-js/modules/es6.weak-map");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.MenuOption = exports.Option = exports.List = exports.positions = exports.Label = exports.Icon = exports.ButtonMenu = exports.Button = exports.Box = void 0;

require("core-js/modules/es6.object.define-properties");

require("core-js/modules/es6.object.freeze");

var _styledComponents = _interopRequireWildcard(require("styled-components"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _Themes = require("../../Themes");

var _Util = require("../../Util");

var _Icons = require("../../Icons");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function _getRequireWildcardCache() { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; if (obj != null) { var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _templateObject3() {
  var data = _taggedTemplateLiteral(["\n    font-size: 16px;\n  "]);

  _templateObject3 = function _templateObject3() {
    return data;
  };

  return data;
}

function _templateObject2() {
  var data = _taggedTemplateLiteral(["\n    font-size: 16px;\n  "]);

  _templateObject2 = function _templateObject2() {
    return data;
  };

  return data;
}

function _templateObject() {
  var data = _taggedTemplateLiteral(["\n    font-size: ", ";\n    &:after {\n      transform: scale(1);\n    }\n  "]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

var Box = _styledComponents["default"].div.withConfig({
  displayName: "styles__Box",
  componentId: "sc-1vybocn-0"
})(["position:relative;display:inline-block;"]);

exports.Box = Box;

var Button = _styledComponents["default"].button.withConfig({
  displayName: "styles__Button",
  componentId: "sc-1vybocn-1"
})(["background-color:transparent;color:", ";cursor:pointer;border:0px;padding:5px 38px 5px 10px;box-sizing:border-box;border-radius:4px;font-family:", ";font-size:", ";font-weight:", ";&:focus{outline:0;}&::-moz-focus-inner{border:0;}&:hover{background-color:", "}position:relative;&:after{content:\"\";position:absolute;top:calc(50% - 3px);right:10px;width:0px;height:0px;border-top:5px solid ", ";border-right:5px solid transparent;border-bottom:5px solid transparent;border-left:5px solid transparent;transform:scale(0.75);}", ""], function (props) {
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
}, _Util.media.large(_templateObject(), function (props) {
  return (0, _Themes.handleThemeFromObject)(props.theme, 'dropdown.button.fontSizeLarge', '22px');
}));

exports.Button = Button;
var ButtonMenu = (0, _styledComponents["default"])(Button).withConfig({
  displayName: "styles__ButtonMenu",
  componentId: "sc-1vybocn-2"
})(["padding:5px;&:after{display:none;}"]);
exports.ButtonMenu = ButtonMenu;
var Icon = (0, _styledComponents["default"])(_Icons.FaEllipsisV).withConfig({
  displayName: "styles__Icon",
  componentId: "sc-1vybocn-3"
})(["display:block;height:25px;width:25px;fill:", ";;"], function (props) {
  return (0, _Themes.handleThemeFromObject)(props.theme, 'dropdown.menu.icon', '#9898ae');
});
exports.Icon = Icon;

var Label = _styledComponents["default"].li.withConfig({
  displayName: "styles__Label",
  componentId: "sc-1vybocn-4"
})(["padding:5px 0px;border-radius:2px;background-color:", ";color:", ";border-bottom:1px solid ", ";font-weight:bold;text-align:center;user-select:none;"], function (props) {
  return (0, _Themes.handleThemeFromObject)(props.theme, 'dropdown.label.background', '#ffffff');
}, function (props) {
  return (0, _Themes.handleThemeFromObject)(props.theme, 'dropdown.label.color', '#717171');
}, function (props) {
  return (0, _Themes.handleThemeFromObject)(props.theme, 'dropdown.label.border', '#e6e6e6');
});

exports.Label = Label;

var positions = function positions(position) {
  return {
    'bottom-right': (0, _styledComponents.css)(["top:100%;right:0px;"]),
    'bottom-center-right': (0, _styledComponents.css)(["top:100%;right:50%;"]),
    'bottom-center-left': (0, _styledComponents.css)(["top:100%;left:50%;"]),
    'bottom-left': (0, _styledComponents.css)(["top:100%;left:0px;"]),
    'center-right': (0, _styledComponents.css)(["top:50%;right:0px;"]),
    'center-from-right': (0, _styledComponents.css)(["top:50%;right:50%;"]),
    'center-from-left': (0, _styledComponents.css)(["top:50%;left:50%;"]),
    'center-left': (0, _styledComponents.css)(["top:50%;left:0px;"]),
    'top-right': (0, _styledComponents.css)(["top:0px;right:0px;"]),
    'top-center-right': (0, _styledComponents.css)(["top:0px;right:50%;"]),
    'top-left': (0, _styledComponents.css)(["top:0px;left:0px;"]),
    'over-top-right': (0, _styledComponents.css)(["bottom:100%;right:0px;"]),
    'over-top-center-right': (0, _styledComponents.css)(["bottom:100%;right:50%;"]),
    'over-top-left': (0, _styledComponents.css)(["bottom:100%;left:0px;"])
  }[position] || (0, _styledComponents.css)(["top:0px;left:0px;"]);
};

exports.positions = positions;

var List = _styledComponents["default"].ul.withConfig({
  displayName: "styles__List",
  componentId: "sc-1vybocn-5"
})(["list-style-type:none;position:absolute;", " display:flex;white-space:nowrap;flex-direction:column;background-color:", ";box-shadow:0 2px 6px 0 rgba(0,0,0,0.1);border:solid 1px ", ";border-radius:2px;z-index:5;margin:0px;padding:0px;font-family:inherit;font-size:14px;font-weight:500;opacity:", ";transition:all 100ms ease-in-out;transform-origin:top left;transform:scaleY(", ");", " ", ""], function (props) {
  positions(props.position);
}, function (props) {
  return (0, _Themes.handleThemeFromObject)(props.theme, 'dropdown.list.background', '#ffffff');
}, function (props) {
  return (0, _Themes.handleThemeFromObject)(props.theme, 'dropdown.list.border', 'rgba(230, 230, 230, 0.2)');
}, function (props) {
  return props.opacity || '0';
}, function (props) {
  return props.scaleY || '0.7';
}, _Util.media.large(_templateObject2()), _Util.media.extraLarge(_templateObject3()));

exports.List = List;

var Option = _styledComponents["default"].li.withConfig({
  displayName: "styles__Option",
  componentId: "sc-1vybocn-6"
})(["padding:5px 40px 5px 20px;border-radius:2px;background-color:", ";color:", ";cursor:pointer;user-select:none;&:hover{background-color:", ";color:", ";}"], function (props) {
  return props.selected ? (0, _Themes.handleThemeFromObject)(props.theme, 'dropdown.option.selected.background', 'rgba(223, 227, 235, 0.3)') : (0, _Themes.handleThemeFromObject)(props.theme, 'dropdown.option.unselected.background', '#ffffff');
}, function (props) {
  return props.disabled || props.selected ? (0, _Themes.handleThemeFromObject)(props.theme, 'dropdown.option.selected.color', '#009dff') : (0, _Themes.handleThemeFromObject)(props.theme, 'dropdown.option.unselected.color', '#717171');
}, function (props) {
  return (0, _Themes.handleThemeFromObject)(props.theme, 'dropdown.option.hover.background', '#009dff');
}, function (props) {
  return (0, _Themes.handleThemeFromObject)(props.theme, 'dropdown.option.hover.color', '#ffffff');
});

exports.Option = Option;
Option.propTypes = {
  children: _propTypes["default"].oneOfType([_propTypes["default"].string, _propTypes["default"].number, _propTypes["default"].element, _propTypes["default"].arrayOf(_propTypes["default"].any)]).isRequired
};
var MenuOption = (0, _styledComponents["default"])(Option).withConfig({
  displayName: "styles__MenuOption",
  componentId: "sc-1vybocn-7"
})(["background-color:", ";color:", ";&:hover{background-color:", ";color:", ";}"], function (props) {
  return (0, _Themes.handleThemeFromObject)(props.theme, 'dropdown.menu.option.background', '#ffffff');
}, function (props) {
  return (0, _Themes.handleThemeFromObject)(props.theme, 'dropdown.menu.option.color', '#a4a4a4');
}, function (props) {
  return (0, _Themes.handleThemeFromObject)(props.theme, 'dropdown.menu.option.hover.background', '#e6e6e6');
}, function (props) {
  return (0, _Themes.handleThemeFromObject)(props.theme, 'dropdown.menu.option.hover.color', '#009dff');
});
exports.MenuOption = MenuOption;
MenuOption.propTypes = {
  children: _propTypes["default"].oneOfType([_propTypes["default"].string, _propTypes["default"].number, _propTypes["default"].element, _propTypes["default"].arrayOf(_propTypes["default"].any)]).isRequired
};