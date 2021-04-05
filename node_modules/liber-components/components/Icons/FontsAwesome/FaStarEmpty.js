"use strict";

require("core-js/modules/es6.object.define-property");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var FaStarEmpty = function FaStarEmpty(_ref) {
  var className = _ref.className;
  return _react["default"].createElement("svg", {
    className: className,
    width: "52",
    height: "52",
    viewBox: "0 0 1792 1792",
    xmlns: "http://www.w3.org/2000/svg"
  }, _react["default"].createElement("path", {
    d: "M1201 1004l306-297-422-62-189-382-189 382-422 62 306 297-73 421 378-199 377 199zm527-357q0 22-26 48l-363 354 86 500q1 7 1 20 0 50-41 50-19 0-40-12l-449-236-449 236q-22 12-40 12-21 0-31.5-14.5t-10.5-35.5q0-6 2-20l86-500-364-354q-25-27-25-48 0-37 56-46l502-73 225-455q19-41 49-41t49 41l225 455 502 73q56 9 56 46z"
  }));
};

FaStarEmpty.displayName = 'FaStarEmpty';
FaStarEmpty.propTypes = {
  className: _propTypes["default"].string
};
FaStarEmpty.defaultProps = {
  className: ''
};
var _default = FaStarEmpty;
exports["default"] = _default;