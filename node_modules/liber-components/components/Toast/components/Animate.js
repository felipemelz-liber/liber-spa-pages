"use strict";

require("core-js/modules/es6.object.define-property");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _reactTransitionGroup = require("react-transition-group");

var _Toast = require("./Toast.styles");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var Animate = function Animate(_ref) {
  var children = _ref.children,
      show = _ref.show,
      onExited = _ref.onExited;
  return _react["default"].createElement(_reactTransitionGroup.Transition, {
    "in": show,
    timeout: 400,
    mountOnEnter: true,
    unmountOnExit: true,
    onExited: onExited
  }, function (state) {
    return _react["default"].createElement(_Toast.AnimationContainer, {
      state: state,
      duration: 400
    }, children);
  });
};

Animate.propTypes = {
  children: _propTypes["default"].oneOfType([_propTypes["default"].any]).isRequired,
  onExited: _propTypes["default"].func.isRequired,
  show: _propTypes["default"].bool
};
Animate.defaultProps = {
  show: true
};
var _default = Animate;
exports["default"] = _default;