"use strict";

require("core-js/modules/es6.object.define-property");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

require("core-js/modules/es6.function.name");

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _Checkbox = _interopRequireDefault(require("./Checkbox.styles"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var Checkbox = _react["default"].forwardRef(function (_ref, ref) {
  var name = _ref.name,
      id = _ref.id,
      value = _ref.value,
      children = _ref.children,
      onChange = _ref.onChange,
      checked = _ref.checked,
      color = _ref.color,
      labelColor = _ref.labelColor,
      className = _ref.className;
  return _react["default"].createElement(_Checkbox["default"], {
    htmlFor: id,
    color: color,
    labelColor: labelColor,
    className: className,
    checked: checked
  }, _react["default"].createElement("input", {
    id: id,
    type: "checkbox",
    name: name,
    ref: ref,
    value: value,
    checked: checked,
    onChange: onChange
  }), _react["default"].createElement("span", null, children));
});

Checkbox.propTypes = {
  name: _propTypes["default"].string,
  id: _propTypes["default"].string.isRequired,
  children: _propTypes["default"].string,
  value: _propTypes["default"].string,
  checked: _propTypes["default"].bool,
  color: _propTypes["default"].string,
  labelColor: _propTypes["default"].string,
  className: _propTypes["default"].string,
  onChange: _propTypes["default"].func
};
Checkbox.defaultProps = {
  name: 'checkboxes',
  children: '',
  checked: null,
  value: '',
  color: '',
  labelColor: '',
  className: '',
  onChange: function onChange() {}
};
var _default = Checkbox;
exports["default"] = _default;