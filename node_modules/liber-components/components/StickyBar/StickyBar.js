"use strict";

require("core-js/modules/es6.object.define-property");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

require("core-js/modules/es6.object.assign");

require("core-js/modules/es6.regexp.to-string");

require("core-js/modules/es6.date.to-string");

require("core-js/modules/es6.object.to-string");

require("core-js/modules/es7.symbol.async-iterator");

require("core-js/modules/es6.symbol");

require("core-js/modules/web.dom.iterable");

require("core-js/modules/es6.array.is-array");

var _react = _interopRequireDefault(require("react"));

var _reactWaypoint = require("react-waypoint");

var _StickyBar = require("./StickyBar.styles");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance"); }

function _iterableToArrayLimit(arr, i) { if (!(Symbol.iterator in Object(arr) || Object.prototype.toString.call(arr) === "[object Arguments]")) { return; } var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

var handleStick = function handleStick(stick) {
  return function () {
    stick(true);
  };
};

var handleUnstick = function handleUnstick(stick) {
  return function () {
    stick(false);
  };
};

var StickyBar = function StickyBar(props) {
  var bar = _react["default"].useRef(null);

  var _React$useState = _react["default"].useState(false),
      _React$useState2 = _slicedToArray(_React$useState, 2),
      sticked = _React$useState2[0],
      setSticked = _React$useState2[1];

  return _react["default"].createElement(_react["default"].Fragment, null, _react["default"].createElement(_reactWaypoint.Waypoint, {
    onEnter: handleUnstick(setSticked),
    onLeave: handleStick(setSticked)
  }), _react["default"].createElement(_StickyBar.Bar, _extends({
    ref: bar,
    sticked: sticked
  }, props)));
};

var _default = StickyBar;
exports["default"] = _default;