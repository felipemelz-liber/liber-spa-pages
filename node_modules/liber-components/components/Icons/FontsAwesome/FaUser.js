"use strict";

require("core-js/modules/es6.object.define-property");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var FaUser = function FaUser(_ref) {
  var className = _ref.className;
  return _react["default"].createElement("svg", {
    className: className,
    width: "52",
    height: "52",
    viewBox: "0 0 1792 1792",
    xmlns: "http://www.w3.org/2000/svg"
  }, _react["default"].createElement("path", {
    d: "M1536 1399q0 109-62.5 187t-150.5 78h-854q-88 0-150.5-78t-62.5-187q0-85 8.5-160.5t31.5-152 58.5-131 94-89 134.5-34.5q131 128 313 128t313-128q76 0 134.5 34.5t94 89 58.5 131 31.5 152 8.5 160.5zm-256-887q0 159-112.5 271.5t-271.5 112.5-271.5-112.5-112.5-271.5 112.5-271.5 271.5-112.5 271.5 112.5 112.5 271.5z"
  }));
};

FaUser.displayName = 'FaUser';
FaUser.propTypes = {
  className: _propTypes["default"].string
};
FaUser.defaultProps = {
  className: ''
};
var _default = FaUser;
exports["default"] = _default;