"use strict";

require("core-js/modules/es6.object.define-property");

require("core-js/modules/es6.string.iterator");

require("core-js/modules/es6.weak-map");

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

var _react = _interopRequireWildcard(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _d3Shape = require("d3-shape");

var _styles = require("./styles");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function _getRequireWildcardCache() { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; if (obj != null) { var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

var Slice = function Slice(_ref) {
  var innerRadius = _ref.innerRadius,
      radius = _ref.radius,
      events = _ref.events,
      abs = _ref.abs,
      props = _objectWithoutProperties(_ref, ["innerRadius", "radius", "events", "abs"]);

  var pathFunctionBg = (0, _d3Shape.arc)().outerRadius(2 * abs + radius).innerRadius(innerRadius);
  var pathFunctionFg = (0, _d3Shape.arc)().outerRadius(abs / 2 + radius).innerRadius(innerRadius - abs / 2);
  var defaultPathFunction = (0, _d3Shape.arc)().outerRadius(radius).innerRadius(innerRadius);
  return _react["default"].createElement(_react.Fragment, null, _react["default"].createElement("g", events, _react["default"].createElement(_styles.Slice, _extends({}, props, {
    style: {
      fill: 'transparent'
    },
    pathFunction: pathFunctionBg
  })), _react["default"].createElement(_styles.Slice, _extends({}, props, {
    pathFunction: abs > 0 ? pathFunctionFg : defaultPathFunction
  }))));
};

Slice.propTypes = {
  slice: _propTypes["default"].objectOf(_propTypes["default"].any),
  // eslint-disable-line react/require-default-props
  style: _propTypes["default"].objectOf(_propTypes["default"].any),
  // eslint-disable-line react/require-default-props
  events: _propTypes["default"].objectOf(_propTypes["default"].any),
  // eslint-disable-line react/require-default-props
  pathFunction: _propTypes["default"].func,
  // eslint-disable-line react/require-default-props
  abs: _propTypes["default"].number,
  innerRadius: _propTypes["default"].number,
  radius: _propTypes["default"].number
};
Slice.defaultProps = {
  abs: 0,
  innerRadius: 0,
  radius: 100
};
var _default = Slice;
exports["default"] = _default;