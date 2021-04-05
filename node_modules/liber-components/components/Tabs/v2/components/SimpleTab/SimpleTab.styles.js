"use strict";

require("core-js/modules/es6.object.define-property");

require("core-js/modules/es6.string.iterator");

require("core-js/modules/es6.weak-map");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.TooltipContent = exports.IconContainer = exports.Icon = exports.TooltipContainer = exports.ChildContainer = exports.Tab = exports.CenterTab = exports.SimpleTabs = void 0;

require("core-js/modules/es6.object.assign");

require("core-js/modules/es6.symbol");

require("core-js/modules/es6.array.index-of");

require("core-js/modules/web.dom.iterable");

require("core-js/modules/es6.array.iterator");

require("core-js/modules/es6.object.to-string");

require("core-js/modules/es6.object.keys");

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _styledComponents = _interopRequireWildcard(require("styled-components"));

var _Icons = require("../../../../Icons");

var _Themes = require("../../../../Themes");

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function _getRequireWildcardCache() { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; if (obj != null) { var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

var SimpleTabs = _styledComponents["default"].div.withConfig({
  displayName: "SimpleTabstyles__SimpleTabs",
  componentId: "sc-17by6iu-0"
})(["max-width:100%;height:48px;background-color:transparent;display:inline-flex;justify-content:flex-start;width:100%;box-sizing:border-box;", ""], function (props) {
  return props.left ? (0, _styledComponents.css)(["padding:0px 24px;border-bottom:1px solid ", ";"], (0, _Themes.handleThemeFromObject)(props.theme, 'colors.border', '#e8ebee')) : null;
});

exports.SimpleTabs = SimpleTabs;
var inactive = (0, _styledComponents.css)(["background-color:", ";border-bottom:1px solid var(--border-color);color:", ";font-weight:", ";"], function (props) {
  return (0, _Themes.handleThemeFromObject)(props.theme, 'colors.header', '#f9fafa');
}, function (props) {
  return (0, _Themes.handleThemeFromObject)(props.theme, 'colors.dark-text', '#405f71');
}, function (props) {
  return (0, _Themes.handleThemeFromObject)(props.theme, 'font-weights.regular', 400);
});
var active = (0, _styledComponents.css)(["background-color:transparent;border-bottom:none;color:", ";font-weight:", ";"], function (props) {
  return (0, _Themes.handleThemeFromObject)(props.theme, 'colors.primary', '#009dff');
}, function (props) {
  return (0, _Themes.handleThemeFromObject)(props.theme, 'font-weights.medium', 500);
});
var disabled = (0, _styledComponents.css)(["color:", ";pointer-events:none;"], function (props) {
  return (0, _Themes.handleThemeFromObject)(props.theme, 'colors.dark-text38', '#b6c2c9');
});
var tabTg = (0, _styledComponents.css)(["font-size:16px;font-weight:400;line-height:22px;"]);

var getBorderThemeParams = function getBorderThemeParams(strongBorder) {
  var borderKey = 'colors.border';
  var defaultColor = '#e8ebee';

  if (strongBorder) {
    borderKey = 'colors.darkBorder';
    defaultColor = '#cdd7df';
  }

  return {
    borderKey: borderKey,
    defaultColor: defaultColor
  };
};

var CenterTab = _styledComponents["default"].a.withConfig({
  displayName: "SimpleTabstyles__CenterTab",
  componentId: "sc-17by6iu-1"
})(["--icon-size:16px;--border-color:", ";min-height:48px;flex-grow:1;display:flex;justify-content:center;align-items:center;flex-basis:0;font-family:", ";", " text-decoration:none;border:0px;border-top:1px solid var(--border-color);border-right:1px solid var(--border-color);&:first-of-type{border-radius:4px 0 0 0;border-left:1px solid var(--border-color);}&:last-of-type{border-radius:0 4px 0 0;}", " ", " &:focus{outline:0;}cursor:pointer;transition:all 450ms cubic-bezier(0.23,1,0.32,1) 0ms;white-space:nowrap;"], function (_ref) {
  var theme = _ref.theme,
      strongBorder = _ref.strongBorder;

  var _getBorderThemeParams = getBorderThemeParams(strongBorder),
      defaultColor = _getBorderThemeParams.defaultColor,
      borderKey = _getBorderThemeParams.borderKey;

  return (0, _Themes.handleThemeFromObject)(theme, borderKey, defaultColor);
}, function (props) {
  return (0, _Themes.handleThemeFromObject)(props.theme, 'font-family', 'Roboto');
}, function (props) {
  return (0, _Themes.handleThemeFromObject)(props.theme, 'typography.body', tabTg);
}, function (props) {
  return props.active ? active : inactive;
}, function (props) {
  return props.disabled && disabled;
});

exports.CenterTab = CenterTab;

var LeftTab = _styledComponents["default"].a.withConfig({
  displayName: "SimpleTabstyles__LeftTab",
  componentId: "sc-17by6iu-2"
})(["--icon-size:16px;display:flex;justify-content:center;align-items:center;font-family:", ";", " text-decoration:none;border:0px !important;color:", ";padding:0px 24px;position:relative;background-color:transparent;transition:color 450ms cubic-bezier(0.23,1,0.32,1) 0ms;flex-basis:225px;white-space:nowrap;", " ", " &:focus{outline:0;}cursor:pointer;&:after{content:'';position:absolute;left:0px;bottom:-1px;width:100%;height:0px;", "}"], function (props) {
  return (0, _Themes.handleThemeFromObject)(props.theme, 'font-family', 'Roboto');
}, function (props) {
  return (0, _Themes.handleThemeFromObject)(props.theme, 'typography.body', tabTg);
}, function (props) {
  return (0, _Themes.handleThemeFromObject)(props.theme, 'colors.dark-text70', '#798e9b');
}, function (props) {
  return props.active ? active : null;
}, function (props) {
  return props.disabled && disabled;
}, function (props) {
  return props.active && props.showUnderline ? (0, _styledComponents.css)(["border-bottom:2px solid ", ";"], (0, _Themes.handleThemeFromObject)(props.theme, 'colors.primary', '#009dff')) : (0, _styledComponents.css)(["border-bottom:2px solid transparent;"]);
});

LeftTab.defaultProps = {
  showUnderline: true
};

var Tab = _react["default"].forwardRef(function (_ref2, ref) {
  var left = _ref2.left,
      props = _objectWithoutProperties(_ref2, ["left"]);

  if (left) {
    return _react["default"].createElement(LeftTab, _extends({}, props, {
      ref: ref
    }));
  }

  return _react["default"].createElement(CenterTab, _extends({}, props, {
    ref: ref
  }));
});

exports.Tab = Tab;
Tab.propTypes = {
  left: _propTypes["default"].bool
};
Tab.defaultProps = {
  left: false
};

var ChildContainer = _styledComponents["default"].div.withConfig({
  displayName: "SimpleTabstyles__ChildContainer",
  componentId: "sc-17by6iu-3"
})(["display:flex;justify-content:center;align-items:center;height:100%;", ""], function (_ref3) {
  var left = _ref3.left;
  return !left ? (0, _styledComponents.css)(["flex-grow:1;flex-basis:0;"]) : (0, _styledComponents.css)(["flex-basis:225px;"]);
});

exports.ChildContainer = ChildContainer;

var TooltipContainer = _styledComponents["default"].div.withConfig({
  displayName: "SimpleTabstyles__TooltipContainer",
  componentId: "sc-17by6iu-4"
})(["margin-left:8px;height:100%;display:flex;justify-content:center;align-items:center;"]);

exports.TooltipContainer = TooltipContainer;
var Icon = (0, _styledComponents["default"])(_Icons.FaQuestionCircle).withConfig({
  displayName: "SimpleTabstyles__Icon",
  componentId: "sc-17by6iu-5"
})(["min-width:var(--icon-size);min-height:var(--icon-size);max-width:var(--icon-size);max-height:var(--icon-size);fill:", ";"], function (props) {
  return (0, _Themes.handleThemeFromObject)(props.theme, 'colors.dark-text70', '#798e9b');
});
exports.Icon = Icon;

var IconContainer = _styledComponents["default"].div.withConfig({
  displayName: "SimpleTabstyles__IconContainer",
  componentId: "sc-17by6iu-6"
})(["cursor:default;display:flex;"]);

exports.IconContainer = IconContainer;

var TooltipContent = _styledComponents["default"].div.withConfig({
  displayName: "SimpleTabstyles__TooltipContent",
  componentId: "sc-17by6iu-7"
})(["", " color:", ";"], function (props) {
  return (0, _Themes.handleThemeFromObject)(props.theme, 'typography.body', tabTg);
}, function (props) {
  return (0, _Themes.handleThemeFromObject)(props.theme, 'colors.dar-text70', '#798e9b');
});

exports.TooltipContent = TooltipContent;