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

var MdAlertCircle = function MdAlertCircle(props) {
  return _react["default"].createElement("svg", _extends({}, props, {
    width: "52",
    height: "52",
    viewBox: "0 0 24 24",
    xmlns: "http://www.w3.org/2000/svg"
  }), _react["default"].createElement("path", {
    d: "M13,13H11V7H13M13,17H11V15H13M12,2A10,10 0 0,0 2,12A10,10 0 0,0 12,22A10,10 0 0,0 22,12A10,10 0 0,0 12,2Z"
  }));
};

MdAlertCircle.displayName = 'MdAlertCircle';
var _default = MdAlertCircle;
exports["default"] = _default;