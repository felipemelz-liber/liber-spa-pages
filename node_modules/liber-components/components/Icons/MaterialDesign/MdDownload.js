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

var MdDownload = function MdDownload(props) {
  return _react["default"].createElement("svg", _extends({}, props, {
    width: "52",
    height: "52",
    viewBox: "0 0 24 24",
    xmlns: "http://www.w3.org/2000/svg"
  }), _react["default"].createElement("path", {
    d: "M5,20H19V18H5M19,9H15V3H9V9H5L12,16L19,9Z"
  }));
};

MdDownload.displayName = 'MdDownload';
var _default = MdDownload;
exports["default"] = _default;