"use strict";

require("core-js/modules/es6.object.define-property");

require("core-js/modules/es6.array.iterator");

require("core-js/modules/es6.string.iterator");

require("core-js/modules/es6.weak-map");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

require("core-js/modules/es6.regexp.to-string");

require("core-js/modules/es6.date.to-string");

require("core-js/modules/es6.object.to-string");

require("core-js/modules/es7.symbol.async-iterator");

require("core-js/modules/es6.symbol");

require("core-js/modules/web.dom.iterable");

require("core-js/modules/es6.array.is-array");

var _react = _interopRequireWildcard(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _Badge = require("./Badge.styles");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function _getRequireWildcardCache() { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; if (obj != null) { var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance"); }

function _iterableToArrayLimit(arr, i) { if (!(Symbol.iterator in Object(arr) || Object.prototype.toString.call(arr) === "[object Arguments]")) { return; } var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

var RADIUS = {
  medium: 10,
  large: 12
};
var PADDING = {
  medium: 4,
  large: 6
};

var Badge = function Badge(_ref) {
  var children = _ref.children,
      content = _ref.content,
      position = _ref.position,
      size = _ref.size,
      color = _ref.color,
      textColor = _ref.textColor,
      childShape = _ref.childShape;
  var ref = (0, _react.useRef)(null);

  var _useState = (0, _react.useState)(false),
      _useState2 = _slicedToArray(_useState, 2),
      visible = _useState2[0],
      setVisible = _useState2[1];

  (0, _react.useEffect)(function () {
    setVisible(Boolean(ref.current));
  }, [ref]);
  return _react["default"].createElement(_Badge.Container, null, children, _react["default"].createElement(_Badge.BadgeCircle, {
    ref: ref,
    radius: RADIUS[size],
    padding: PADDING[size],
    position: position,
    color: color,
    textColor: textColor,
    visible: visible,
    childShape: childShape
  }, content));
};

Badge.propTypes = {
  children: _propTypes["default"].node.isRequired,
  color: _propTypes["default"].string,
  textColor: _propTypes["default"].string,
  size: _propTypes["default"].oneOf(['medium', 'large']),
  position: _propTypes["default"].shape({
    vertical: _propTypes["default"].oneOf(['top', 'bottom']),
    horizontal: _propTypes["default"].oneOf(['left', 'right'])
  }),
  content: _propTypes["default"].oneOfType([_propTypes["default"].string, _propTypes["default"].number]).isRequired,
  childShape: _propTypes["default"].oneOf(['rectangle', 'circle'])
};
Badge.defaultProps = {
  position: {
    vertical: 'bottom',
    horizontal: 'right'
  },
  size: 'medium',
  color: null,
  textColor: null,
  childShape: 'rectangle'
};
var _default = Badge;
exports["default"] = _default;