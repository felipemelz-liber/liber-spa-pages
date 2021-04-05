"use strict";

require("core-js/modules/es6.object.define-property");

require("core-js/modules/es6.string.iterator");

require("core-js/modules/es6.weak-map");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Close = exports.Icon = exports.Container = void 0;

require("core-js/modules/es6.symbol");

require("core-js/modules/es6.array.index-of");

require("core-js/modules/web.dom.iterable");

require("core-js/modules/es6.array.iterator");

require("core-js/modules/es6.object.to-string");

require("core-js/modules/es6.object.keys");

var _react = _interopRequireDefault(require("react"));

var _styledComponents = _interopRequireWildcard(require("styled-components"));

var _Icons = require("../../../Icons");

var _Themes = require("../../../Themes");

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function _getRequireWildcardCache() { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; if (obj != null) { var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

var getTheme = function getTheme(value, fallback) {
  return (0, _styledComponents.css)(["", ""], function (props) {
    return (0, _Themes.handleThemeFromObject)(props.theme, value, fallback);
  });
};

var Container = _styledComponents["default"].div.withConfig({
  displayName: "DateRangePickerstyles__Container",
  componentId: "sc-1480kn8-0"
})(["position:relative;"]);

exports.Container = Container;

var CleanIcon = function CleanIcon(_ref) {
  var error = _ref.error,
      hide = _ref.hide,
      props = _objectWithoutProperties(_ref, ["error", "hide"]);

  return _react["default"].createElement(_Icons.MdCalendarBlank, props);
}; // eslint-disable-line


var Icon = (0, _styledComponents["default"])(CleanIcon).withConfig({
  displayName: "DateRangePickerstyles__Icon",
  componentId: "sc-1480kn8-1"
})(["--size:20px;min-width:var(--size);max-width:var(--size);min-height:var(--size);max-height:var(--size);fill:", ";position:absolute;right:16px;top:calc(50% - 10px);pointer-events:none;opacity:", ";transition:opacity 250ms cubic-bezier(0.23,1,0.32,1) 0ms;"], function (props) {
  return props.error ? getTheme('colors.error', '#dc3545') : getTheme('colors.dark-text70', '#798e9b');
}, function (_ref2) {
  var hide = _ref2.hide;
  return hide ? '0' : '1';
});
exports.Icon = Icon;
var closeShow = (0, _styledComponents.css)(["opacity:1;pointer-events:all;"]);

var ClearClose = function ClearClose(_ref3) {
  var show = _ref3.show,
      props = _objectWithoutProperties(_ref3, ["show"]);

  return _react["default"].createElement(_Icons.MdCloseCircle, props);
}; // eslint-disable-line


var Close = (0, _styledComponents["default"])(ClearClose).withConfig({
  displayName: "DateRangePickerstyles__Close",
  componentId: "sc-1480kn8-2"
})(["--size:20px;min-width:var(--size);max-width:var(--size);min-height:var(--size);max-height:var(--size);fill:", ";position:absolute;right:16px;top:calc(50% - 10px);opacity:0;pointer-events:none;", " transition:opacity 250ms cubic-bezier(0.23,1,0.32,1) 0ms;z-index:2;cursor:pointer;"], getTheme('colors.dark-text70', '#798e9b'), function (_ref4) {
  var show = _ref4.show;
  return show && closeShow;
});
exports.Close = Close;