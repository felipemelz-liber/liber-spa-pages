"use strict";

require("core-js/modules/es6.object.define-property");

require("core-js/modules/es6.array.iterator");

require("core-js/modules/es6.string.iterator");

require("core-js/modules/es6.weak-map");

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

var _react = _interopRequireWildcard(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _BlurredMessage = require("./BlurredMessage.styles");

var _PositionHelper = require("./PositionHelper");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function _getRequireWildcardCache() { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; if (obj != null) { var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance"); }

function _iterableToArrayLimit(arr, i) { if (!(Symbol.iterator in Object(arr) || Object.prototype.toString.call(arr) === "[object Arguments]")) { return; } var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

var BlurredMessage = function BlurredMessage(_ref) {
  var overlay = _ref.overlay,
      blur = _ref.blur,
      children = _ref.children;
  var backgroundRef = (0, _react.useRef)(null);
  var overlayRef = (0, _react.useRef)(null);

  var _useState = (0, _react.useState)(null),
      _useState2 = _slicedToArray(_useState, 2),
      coordinates = _useState2[0],
      setCoordinates = _useState2[1];

  (0, _react.useEffect)(function () {
    var newCoordinates = (0, _PositionHelper.getOverlayPosition)(backgroundRef, overlayRef);

    if (newCoordinates !== coordinates) {
      setCoordinates(newCoordinates);
    }
  }, [backgroundRef, overlayRef]);
  var hasBlur = blur > 0;
  return _react["default"].createElement(_react["default"].Fragment, null, _react["default"].createElement(_BlurredMessage.BlurredBackground, {
    ref: backgroundRef,
    blur: blur
  }, children), _react["default"].createElement(_BlurredMessage.Overlay, _extends({
    ref: overlayRef
  }, coordinates), hasBlur ? overlay : null));
};

BlurredMessage.propTypes = {
  blur: _propTypes["default"].number,
  overlay: _propTypes["default"].node,
  children: _propTypes["default"].node
};
BlurredMessage.defaultProps = {
  blur: 8,
  overlay: null,
  children: null
};
var _default = BlurredMessage;
exports["default"] = _default;