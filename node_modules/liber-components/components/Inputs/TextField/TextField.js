'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _styles = require('../styles');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var genId = function genId() {
  if (process.env.NODE_ENV === 'test') return 'abcde';
  return Math.random().toString(36).substring(2, 15) + Math.random().toString(36).substring(2, 15);
};

var TextField = function (_React$Component) {
  _inherits(TextField, _React$Component);

  function TextField(props) {
    _classCallCheck(this, TextField);

    var _this = _possibleConstructorReturn(this, (TextField.__proto__ || Object.getPrototypeOf(TextField)).call(this, props));

    _this.handleChange = function (event) {
      var value = _this.props.type === 'number' ? event.target.value.match(/-?[0-9eE]*/).join() : event.target.value;
      _this.setState({ valid: value.length > 0 });
      if (_this.props.onChange) _this.props.onChange(value);else _this.setState({ value: value });
    };

    _this.handleFocus = function () {
      _this.setState({ focused: true }, function () {
        _this.props.onFocus(_this.state.value);
      });
    };

    _this.handleBlur = function () {
      _this.setState({ focused: false }, function () {
        _this.props.onBlur(_this.state.value);
      });
    };

    _this.getPadding = function (prefix) {
      if (prefix === '') return null;
      return _this.prefix ? _this.prefix.offsetWidth + 4 + 'px' : '20px';
    };

    _this.state = {
      focused: false,
      error: Boolean(props.errorMessage),
      valid: Boolean(props.value),
      value: props.value || ''
    };
    return _this;
  }

  _createClass(TextField, [{
    key: 'render',
    value: function render() {
      var _this2 = this;

      var _props = this.props,
          disabled = _props.disabled,
          errorMessage = _props.errorMessage,
          fullWidth = _props.fullWidth,
          helper = _props.helper,
          label = _props.label,
          hintText = _props.hintText,
          width = _props.width,
          openLabel = _props.openLabel,
          prefix = _props.prefix,
          innerRef = _props.innerRef,
          fieldId = _props.id,
          props = _objectWithoutProperties(_props, ['disabled', 'errorMessage', 'fullWidth', 'helper', 'label', 'hintText', 'width', 'openLabel', 'prefix', 'innerRef', 'id']);

      var _state = this.state,
          error = _state.error,
          focused = _state.focused,
          valid = _state.valid,
          value = _state.value;


      var id = void 0;
      if (fieldId) id = fieldId;else if (label) id = label.toLowerCase();else id = genId();
      return _react2.default.createElement(
        _styles.InputBase,
        {
          width: fullWidth ? '100%' : width,
          onFocus: this.handleFocus,
          onBlur: this.handleBlur,
          disabled: disabled
        },
        _react2.default.createElement(
          _styles.InputLabel,
          {
            focused: focused,
            valid: valid,
            open: openLabel,
            error: error,
            htmlFor: id
          },
          label
        ),
        _react2.default.createElement(
          _styles.InputHint,
          { visible: (focused || !label) && !valid },
          hintText
        ),
        _react2.default.createElement(
          _styles.InputPrefix,
          {
            ref: function ref(element) {
              _this2.prefix = element;
            },
            visible: focused || openLabel || valid,
            focused: focused,
            error: error,
            valid: valid
          },
          prefix
        ),
        _react2.default.createElement(_styles.InputText, _extends({}, props, {
          id: id,
          type: props.type === 'number' ? 'text' : props.type,
          tabIndex: disabled ? '-1' : '0',
          value: props.value || value,
          onChange: this.handleChange,
          padding: this.getPadding(prefix),
          ref: innerRef
        })),
        _react2.default.createElement(_styles.InputBar, { open: focused, error: error, valid: valid }),
        _react2.default.createElement(
          _styles.InputError,
          { visible: error },
          errorMessage
        ),
        _react2.default.createElement(
          _styles.InputHelper,
          { afterError: error, visible: Boolean(helper) },
          _react2.default.createElement(_styles.InputHelperIcon, null),
          _react2.default.createElement(
            _styles.InputHelperText,
            null,
            helper
          )
        )
      );
    }
  }], [{
    key: 'getDerivedStateFromProps',
    value: function getDerivedStateFromProps(nextProps, prevState) {
      var error = typeof nextProps.errorMessage !== 'undefined' ? Boolean(nextProps.errorMessage) : prevState.error;
      var value = nextProps.value !== null ? nextProps.value : prevState.value;
      var valid = nextProps.value !== null ? Boolean(value) : prevState.valid;

      if (error === prevState.error && valid === prevState.valid && value === prevState.value) return null;

      var nextState = { error: error, valid: valid, value: value };

      return nextState;
    }
  }]);

  return TextField;
}(_react2.default.Component);

TextField.propTypes = {
  innerRef: _propTypes2.default.oneOfType([_propTypes2.default.any]),
  disabled: _propTypes2.default.bool,
  errorMessage: _propTypes2.default.string,
  fullWidth: _propTypes2.default.bool,
  helper: _propTypes2.default.string,
  hintText: _propTypes2.default.oneOfType([_propTypes2.default.string, _propTypes2.default.element]),
  prefix: _propTypes2.default.oneOfType([_propTypes2.default.string, _propTypes2.default.element]),
  label: _propTypes2.default.string,
  onBlur: _propTypes2.default.func,
  onChange: _propTypes2.default.func,
  onFocus: _propTypes2.default.func,
  value: _propTypes2.default.string,
  width: _propTypes2.default.string,
  openLabel: _propTypes2.default.bool,
  id: _propTypes2.default.string,
  type: _propTypes2.default.string
};

TextField.defaultProps = {
  id: null,
  disabled: false,
  errorMessage: '',
  fullWidth: false,
  helper: '',
  hintText: '',
  prefix: '',
  label: '',
  onBlur: function onBlur() {},
  onChange: null,
  onFocus: function onFocus() {},
  value: null,
  width: '256px',
  openLabel: false,
  innerRef: {},
  type: 'text'
};

exports.default = (0, _react.forwardRef)(function (props, ref) {
  return _react2.default.createElement(TextField, _extends({ innerRef: ref }, props));
}); // eslint-disable-line