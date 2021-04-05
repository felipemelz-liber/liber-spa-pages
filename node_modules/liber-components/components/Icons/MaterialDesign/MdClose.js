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

var MdClose = function MdClose(props) {
  return _react["default"].createElement("svg", _extends({}, props, {
    width: "52",
    height: "52",
    viewBox: "0 0 24 24",
    xmlns: "http://www.w3.org/2000/svg"
  }), _react["default"].createElement("path", {
    d: "M19,6.41L17.59,5L12,10.59L6.41,5L5,6.41L10.59,12L5,17.59L6.41,19L12,13.41L17.59,19L19,17.59L13.41,12L19,6.41Z"
  }));
};

MdClose.displayName = 'MdClose';
var _default = MdClose;
exports["default"] = _default;