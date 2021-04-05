'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _styles = require('./styles');

var _styles2 = _interopRequireDefault(_styles);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Checkbox = _react2.default.forwardRef(function (_ref, ref) {
  var name = _ref.name,
      id = _ref.id,
      value = _ref.value,
      children = _ref.children,
      onChange = _ref.onChange,
      checked = _ref.checked,
      color = _ref.color,
      labelColor = _ref.labelColor,
      className = _ref.className;
  return _react2.default.createElement(
    _styles2.default,
    { htmlFor: id, color: color, labelColor: labelColor, className: className, checked: checked },
    _react2.default.createElement('input', {
      id: id,
      type: 'checkbox',
      name: name,
      ref: ref,
      value: value,
      checked: checked,
      onChange: onChange
    }),
    _react2.default.createElement(
      'span',
      null,
      children
    )
  );
});

Checkbox.propTypes = {
  name: _propTypes2.default.string,
  id: _propTypes2.default.string.isRequired,
  children: _propTypes2.default.string,
  value: _propTypes2.default.string,
  checked: _propTypes2.default.bool,
  color: _propTypes2.default.string,
  labelColor: _propTypes2.default.string,
  className: _propTypes2.default.string,
  labelAlign: _propTypes2.default.string,
  onChange: _propTypes2.default.func
};

Checkbox.defaultProps = {
  name: 'checkboxes',
  children: '',
  checked: null,
  value: '',
  color: '',
  labelColor: '',
  className: '',
  labelAlign: 'flex-start',
  onChange: function onChange() {}
};

exports.default = Checkbox;