"use strict";

require("core-js/modules/es6.object.define-property");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _Switch = require("./Switch.styles");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var Switch = function Switch(_ref) {
  var checked = _ref.checked,
      onChange = _ref.onChange;
  return _react["default"].createElement(_Switch.Container, {
    checked: checked,
    onClick: function onClick() {
      return onChange(!checked);
    }
  }, _react["default"].createElement(_Switch.Circle, null));
};

Switch.propTypes = {
  checked: _propTypes["default"].bool,
  onChange: _propTypes["default"].func
};
Switch.defaultProps = {
  checked: false,
  onChange: function onChange() {
    return null;
  }
};
var _default = Switch;
exports["default"] = _default;