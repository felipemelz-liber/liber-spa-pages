"use strict";

require("core-js/modules/es6.object.define-property");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _SortIcon = require("./SortIcon.styles");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var SortIcon = function SortIcon(_ref) {
  var direction = _ref.direction;

  if (!direction) {
    return _react["default"].createElement(_SortIcon.Neutral, null);
  }

  return direction === 'asc' ? _react["default"].createElement(_SortIcon.Ascending, null) : _react["default"].createElement(_SortIcon.Descending, null);
};

SortIcon.propTypes = {
  direction: _propTypes["default"].oneOf(['asc', 'desc'])
};
SortIcon.defaultProps = {
  direction: null
};
var _default = SortIcon;
exports["default"] = _default;