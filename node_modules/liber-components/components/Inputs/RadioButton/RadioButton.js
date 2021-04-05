'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _styles = require('./styles');

var _styles2 = _interopRequireDefault(_styles);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var RadioButton = function (_React$Component) {
  _inherits(RadioButton, _React$Component);

  function RadioButton() {
    var _ref;

    var _temp, _this, _ret;

    _classCallCheck(this, RadioButton);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = RadioButton.__proto__ || Object.getPrototypeOf(RadioButton)).call.apply(_ref, [this].concat(args))), _this), _this.setInputRef = function (ref) {
      _this.inputRef = ref;
    }, _this.handleKeyDown = function (event) {
      if (event.keyCode === 13) _this.inputRef.click();
    }, _temp), _possibleConstructorReturn(_this, _ret);
  }

  _createClass(RadioButton, [{
    key: 'render',
    value: function render() {
      var _props = this.props,
          name = _props.name,
          id = _props.id,
          value = _props.value,
          children = _props.children,
          onChange = _props.onChange,
          checked = _props.checked,
          color = _props.color,
          labelColor = _props.labelColor,
          className = _props.className,
          type = _props.type;


      return _react2.default.createElement(
        _styles2.default,
        {
          htmlFor: id,
          color: color,
          labelColor: labelColor,
          className: className,
          onKeyDown: this.handleKeyDown,
          tabIndex: '0'
        },
        _react2.default.createElement('input', {
          ref: this.setInputRef,
          id: id,
          type: type,
          name: name,
          value: value,
          checked: checked,
          onChange: onChange
        }),
        _react2.default.createElement(
          'div',
          null,
          children
        )
      );
    }
  }]);

  return RadioButton;
}(_react2.default.Component);

RadioButton.propTypes = {
  name: _propTypes2.default.string,
  id: _propTypes2.default.string.isRequired,
  children: _propTypes2.default.oneOfType([_propTypes2.default.string, _propTypes2.default.element]),
  value: _propTypes2.default.string,
  checked: _propTypes2.default.bool,
  color: _propTypes2.default.string,
  labelColor: _propTypes2.default.string,
  className: _propTypes2.default.string,
  type: _propTypes2.default.string,
  onChange: _propTypes2.default.func
};

RadioButton.defaultProps = {
  children: '',
  name: 'radios',
  checked: null,
  value: 'on',
  color: '',
  labelColor: '',
  className: '',
  type: 'radio',
  onChange: function onChange() {}
};

exports.default = RadioButton;