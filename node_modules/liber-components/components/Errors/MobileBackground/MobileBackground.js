"use strict";

require("core-js/modules/es6.object.define-property");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _styledComponents = _interopRequireDefault(require("styled-components"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var Cls1 = _styledComponents["default"].path.withConfig({
  displayName: "MobileBackground__Cls1",
  componentId: "z74wd2-0"
})(["fill:url(#linear-gradient);"]);

var MobileBackground = function MobileBackground(_ref) {
  var className = _ref.className;
  return _react["default"].createElement("svg", {
    className: className,
    preserveAspectRatio: "none",
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 375 668"
  }, _react["default"].createElement("defs", null, _react["default"].createElement("linearGradient", {
    id: "linear-gradient",
    x1: "0.5",
    x2: "0.5",
    y2: "1",
    gradientUnits: "objectBoundingBox"
  }, _react["default"].createElement("stop", {
    offset: "0.12",
    stopColor: "#fff"
  }), _react["default"].createElement("stop", {
    offset: "0.16",
    stopColor: "#f6fbff"
  }), _react["default"].createElement("stop", {
    offset: "0.23",
    stopColor: "#dcf2ff"
  }), _react["default"].createElement("stop", {
    offset: "0.32",
    stopColor: "#b3e2ff"
  }), _react["default"].createElement("stop", {
    offset: "0.42",
    stopColor: "#7accff"
  }), _react["default"].createElement("stop", {
    offset: "0.54",
    stopColor: "#32b0ff"
  }), _react["default"].createElement("stop", {
    offset: "0.61",
    stopColor: "#009dff"
  }))), _react["default"].createElement(Cls1, {
    id: "Moldura",
    d: "M0,0V668H375V0ZM308.5,625.25H66.5a24,24,0,0,1-24-24V66.75a24,24,0,0,1,24-24h242a24,24,0,0,1,24,24v534.5A24, 24,0,0,1,308.5,625.25Z"
  }));
};

MobileBackground.propTypes = {
  className: _propTypes["default"].string
};
MobileBackground.defaultProps = {
  className: ''
};
var _default = MobileBackground;
exports["default"] = _default;