"use strict";

require("core-js/modules/es6.object.define-property");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var FaPlus = function FaPlus(_ref) {
  var className = _ref.className;
  return _react["default"].createElement("svg", {
    className: className,
    width: "52",
    height: "52",
    viewBox: "0 0 1792 1792",
    xmlns: "http://www.w3.org/2000/svg"
  }, _react["default"].createElement("path", {
    d: "M1600 736v192q0 40-28 68t-68 28h-416v416q0 40-28 68t-68 28h-192q-40 0-68-28t-28-68v-416h-416q-40 0-68-28t-28-68v-192q0-40 28-68t68-28h416v-416q0-40 28-68t68-28h192q40 0 68 28t28 68v416h416q40 0 68 28t28 68z"
  }));
};

FaPlus.displayName = 'FaPlus';
FaPlus.propTypes = {
  className: _propTypes["default"].string
};
FaPlus.defaultProps = {
  className: ''
};
var _default = FaPlus;
exports["default"] = _default;