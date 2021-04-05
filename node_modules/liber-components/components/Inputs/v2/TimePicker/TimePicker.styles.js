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
exports.Close = exports.Unit = exports.Col = exports.TimeContainer = exports.Icon = exports.Field = exports.Container = void 0;

var _styledComponents = _interopRequireWildcard(require("styled-components"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _reactPerfectScrollbar = _interopRequireDefault(require("react-perfect-scrollbar"));

var _InputField = require("../InputField");

var _Themes = require("../../../Themes");

var _Icons = require("../../../Icons");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function _getRequireWildcardCache() { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; if (obj != null) { var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

var Container = _styledComponents["default"].div.withConfig({
  displayName: "TimePickerstyles__Container",
  componentId: "sc-1tl353t-0"
})(["position:relative;"]);

exports.Container = Container;
var Field = (0, _styledComponents["default"])(_InputField.TextField).withConfig({
  displayName: "TimePickerstyles__Field",
  componentId: "sc-1tl353t-1"
})(["padding-right:52px;"]);
exports.Field = Field;
var Icon = (0, _styledComponents["default"])(_Icons.MdClockOutline).withConfig({
  displayName: "TimePickerstyles__Icon",
  componentId: "sc-1tl353t-2"
})(["--size:20px;min-width:var(--size);max-width:var(--size);min-height:var(--size);max-height:var(--size);fill:#8c9fa9;position:absolute;right:16px;top:calc(50% - 5px);pointer-events:none;opacity:", ";transition:opacity 250ms cubic-bezier(0.23,1,0.32,1) 0ms;"], function (_ref) {
  var hide = _ref.hide;
  return hide ? '0' : '1';
});
exports.Icon = Icon;

var TimeContainer = _styledComponents["default"].div.withConfig({
  displayName: "TimePickerstyles__TimeContainer",
  componentId: "sc-1tl353t-3"
})(["display:flex;justify-content:flex-start;align-items:stretch;height:var(--clock-container-size,264px);& > div{flex-grow:1;padding:12px 0px;height:100%;border-right:1px solid ", ";box-sizing:border-box;}& > div:last-child{border-right:0px;}"], function (props) {
  return (0, _Themes.handleThemeFromObject)(props.theme, 'colors.border', '#e8ebee');
});

exports.TimeContainer = TimeContainer;
var Col = (0, _styledComponents["default"])(_reactPerfectScrollbar["default"]).withConfig({
  displayName: "TimePickerstyles__Col",
  componentId: "sc-1tl353t-4"
})(["display:flex;flex-direction:column;margin:12x 0px;height:100%;overflow:auto;flex-grow:1;max-height:100%;& .ps__rail-y{margin-top:4px;margin-bottom:4px;}& .ps__thumb-y{background-color:#e2e2e2!important;right:4px;}& .ps__rail-y:hover,& .ps--clicking{background-color:transparent!important;}& .ps__rail-y:hover .ps__thumb-y,& .ps__rail-y.ps--clicking .ps__thumb-y{width:8px;}& .ps__rail-y{z-index:10;}"]);
exports.Col = Col;
Col.propTypes = {
  children: _propTypes["default"].oneOfType([_propTypes["default"].any])
};
Col.defaultProps = {
  children: '',
  options: {
    swipeEasing: true
  }
};

var select = function select(selected) {
  if (selected) {
    return (0, _styledComponents.css)(["color:", ";background-color:", ";"], function (props) {
      return (0, _Themes.handleThemeFromObject)(props.theme, 'colors.dark-text', '#405f71');
    }, function (props) {
      return (0, _Themes.handleThemeFromObject)(props.theme, 'colors.header', '#f9fafa');
    });
  }

  return (0, _styledComponents.css)(["color:", ";"], function (props) {
    return (0, _Themes.handleThemeFromObject)(props.theme, 'colors.dark-text70', '#798e9b');
  });
};

var body = (0, _styledComponents.css)(["font-size:16px;font-weight:400;line-height:22px;"]);

var Unit = _styledComponents["default"].div.withConfig({
  displayName: "TimePickerstyles__Unit",
  componentId: "sc-1tl353t-5"
})(["display:flex;justify-content:center;align-items:center;min-height:40px;width:100%;transition:background-color 250ms cubic-bezier(0.23,1,0.32,1) 0ms,color 250ms cubic-bezier(0.23,1,0.32,1) 0ms;cursor:pointer;", ";", " &:hover{background-color:", ";}&:nth-last-child(3){margin-bottom:var(--last-unit-margin,200px);}"], function (props) {
  return (0, _Themes.handleThemeFromObject)(props.theme, 'typography.body', body);
}, function (props) {
  return select(props.selected);
}, function (props) {
  return (0, _Themes.handleThemeFromObject)(props.theme, 'colors.secondary', '#f0f2f4');
});

exports.Unit = Unit;
var closeShow = (0, _styledComponents.css)(["opacity:1;pointer-events:all;"]);
var Close = (0, _styledComponents["default"])(_Icons.MdCloseCircle).withConfig({
  displayName: "TimePickerstyles__Close",
  componentId: "sc-1tl353t-6"
})(["--size:20px;min-width:var(--size);max-width:var(--size);min-height:var(--size);max-height:var(--size);fill:#8c9fa9;position:absolute;right:16px;top:calc(50% - 5px);opacity:0;pointer-events:none;", " transition:opacity 250ms cubic-bezier(0.23,1,0.32,1) 0ms;z-index:2;cursor:pointer;"], function (_ref2) {
  var show = _ref2.show;
  return show && closeShow;
});
exports.Close = Close;