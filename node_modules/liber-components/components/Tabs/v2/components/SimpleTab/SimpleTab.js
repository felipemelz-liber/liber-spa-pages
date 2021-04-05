"use strict";

require("core-js/modules/es6.object.define-property");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

require("core-js/modules/es6.object.assign");

require("core-js/modules/es6.symbol");

require("core-js/modules/es6.array.index-of");

require("core-js/modules/web.dom.iterable");

require("core-js/modules/es6.array.iterator");

require("core-js/modules/es6.object.to-string");

require("core-js/modules/es6.object.keys");

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _Helpers = require("../../../../Helpers");

var _SimpleTab = require("./SimpleTab.styles");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

var TableTab = _react["default"].forwardRef(function (_ref, ref) {
  var children = _ref.children,
      tooltip = _ref.tooltip,
      tooltipIcon = _ref.tooltipIcon,
      tooltipDirection = _ref.tooltipDirection,
      left = _ref.left,
      tooltipDelay = _ref.tooltipDelay,
      props = _objectWithoutProperties(_ref, ["children", "tooltip", "tooltipIcon", "tooltipDirection", "left", "tooltipDelay"]);

  return _react["default"].createElement(_SimpleTab.Tab, _extends({}, props, {
    left: left,
    ref: ref
  }), !tooltip ? _react["default"].createElement(_SimpleTab.ChildContainer, {
    left: left
  }, children) : _react["default"].createElement(_Helpers.TooltipBox, {
    content: _react["default"].createElement(_SimpleTab.TooltipContent, null, tooltip),
    delay: !!tooltipDelay,
    delayTime: tooltipDelay,
    mount: tooltipDirection,
    fixed: true
  }, _react["default"].createElement(_SimpleTab.ChildContainer, {
    left: left
  }, children)));
});

TableTab.propTypes = {
  children: _propTypes["default"].oneOfType([_propTypes["default"].string, _propTypes["default"].number, _propTypes["default"].element, _propTypes["default"].arrayOf(_propTypes["default"].element)]),
  tooltip: _propTypes["default"].oneOfType([_propTypes["default"].string, _propTypes["default"].number, _propTypes["default"].element]),
  tooltipIcon: _propTypes["default"].oneOfType([_propTypes["default"].element]),
  tooltipDirection: _propTypes["default"].string,
  tooltipDelay: _propTypes["default"].number,
  left: _propTypes["default"].bool
};
TableTab.defaultProps = {
  children: '',
  tooltip: null,
  tooltipIcon: _react["default"].createElement(_SimpleTab.Icon, null),
  tooltipDirection: 'bottom',
  tooltipDelay: 1000,
  left: false
};
var _default = TableTab;
exports["default"] = _default;