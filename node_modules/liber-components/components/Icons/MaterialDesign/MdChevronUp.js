"use strict";

require("core-js/modules/es6.object.define-property");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

require("core-js/modules/es6.object.assign");

var _react = _interopRequireDefault(require("react"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

var MdChevronUp = function MdChevronUp(props) {
  return _react["default"].createElement("svg", _extends({}, props, {
    width: "52",
    height: "52",
    viewBox: "0 0 24 24",
    xmlns: "http://www.w3.org/2000/svg"
  }), _react["default"].createElement("path", {
    d: "M7.41,15.41L12,10.83L16.59,15.41L18,14L12,8L6,14L7.41,15.41Z"
  }));
};

MdChevronUp.displayName = 'MdChevronUp';
var _default = MdChevronUp;
exports["default"] = _default;