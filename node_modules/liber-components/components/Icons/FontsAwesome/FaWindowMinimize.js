"use strict";

require("core-js/modules/es6.object.define-property");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var FaWindowMinimize = function FaWindowMinimize(_ref) {
  var className = _ref.className;
  return _react["default"].createElement("svg", {
    className: className,
    width: "52",
    height: "52",
    viewBox: "0 0 1792 1792",
    xmlns: "http://www.w3.org/2000/svg"
  }, _react["default"].createElement("path", {
    d: "M1792 1312v192q0 66-47 113t-113 47h-1472q-66 0-113-47t-47-113v-192q0-66 47-113t113-47h1472q66 0 113 47t47 113z"
  }));
};

FaWindowMinimize.displayName = 'FaWindowMinimize';
FaWindowMinimize.propTypes = {
  className: _propTypes["default"].string
};
FaWindowMinimize.defaultProps = {
  className: ''
};
var _default = FaWindowMinimize;
exports["default"] = _default;