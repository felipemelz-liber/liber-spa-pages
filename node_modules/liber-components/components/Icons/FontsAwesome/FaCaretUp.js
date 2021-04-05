"use strict";

require("core-js/modules/es6.object.define-property");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var FaCaretUp = function FaCaretUp(_ref) {
  var className = _ref.className;
  return _react["default"].createElement("svg", {
    className: className,
    width: "52",
    height: "52",
    viewBox: "0 0 320 512",
    xmlns: "http://www.w3.org/2000/svg"
  }, _react["default"].createElement("path", {
    d: "M288.662 352H31.338c-17.818 0-26.741-21.543-14.142-34.142l128.662-128.662c7.81-7.81 20.474-7.81 28.284 0l128.662 128.662c12.6 12.599 3.676 34.142-14.142 34.142z",
    "class": ""
  }));
};

FaCaretUp.displayName = 'FaCaretUp';
FaCaretUp.propTypes = {
  className: _propTypes["default"].string
};
FaCaretUp.defaultProps = {
  className: ''
};
var _default = FaCaretUp;
exports["default"] = _default;