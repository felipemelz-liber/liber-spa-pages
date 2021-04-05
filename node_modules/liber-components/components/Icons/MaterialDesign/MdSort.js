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

var MdSort = function MdSort(props) {
  return _react["default"].createElement("svg", _extends({}, props, {
    width: "52",
    height: "52",
    viewBox: "0 0 24 24",
    xmlns: "http://www.w3.org/2000/svg"
  }), _react["default"].createElement("path", {
    fill: "currentColor",
    d: "M18 21L14 17H17V7H14L18 3L22 7H19V17H22M2 19V17H12V19M2 13V11H9V13M2 7V5H6V7H2Z"
  }));
};

MdSort.displayName = 'MdSort';
var _default = MdSort;
exports["default"] = _default;