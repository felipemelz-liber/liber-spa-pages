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

var _TextField = require('./TextField.styles');

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

    _this.getSearch = function (child, search) {
      return child.toLowerCase().search(search.toLowerCase());
    };

    _this.getHighlightItems = function (item) {
      var value = _this.state.value;

      var index = _this.getSearch(item, value);
      return _react2.default.createElement(
        _react.Fragment,
        null,
        item.substr(0, index),
        _react2.default.createElement(
          _TextField.HighlightItem,
          null,
          item.substr(index, value.length)
        ),
        item.substr(index + value.length)
      );
    };

    _this.handleChange = function (event) {
      var value = _this.props.type === 'number' ? event.target.value.match(/-?[0-9eE]*/).join() : event.target.value;
      var _this$props = _this.props,
          autoComplete = _this$props.autoComplete,
          autoCompleteList = _this$props.autoCompleteList;

      _this.setState({ valid: value.length > 0 });
      if (autoComplete) {
        if (value) {
          var result = autoCompleteList.filter(function (item) {
            return item.toLowerCase().includes(value.toLowerCase());
          });
          _this.setState({ autoCompleteListItens: result });
        } else {
          _this.setState({ autoCompleteListItens: [] });
        }
      }
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

    _this.onSelectItem = function (event) {
      _this.setState({ value: event.currentTarget.textContent, autoCompleteListItens: [] });
    };

    _this.renderAutoCompleteListItens = function () {
      var autoCompleteListItens = _this.state.autoCompleteListItens;

      return autoCompleteListItens.map(function (item) {
        return _react2.default.createElement(
          _TextField.InputAutoCompleteItem,
          { key: item, onClick: _this.onSelectItem },
          _this.getHighlightItems(item)
        );
      });
    };

    _this.state = {
      focused: false,
      error: Boolean(props.errorMessage),
      valid: Boolean(props.value),
      value: props.value || '',
      autoCompleteListItens: []
    };
    return _this;
  }

  _createClass(TextField, [{
    key: 'render',
    value: function render() {
      var _this2 = this;

      var _props = this.props,
          autoComplete = _props.autoComplete,
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
          autoCompleteList = _props.autoCompleteList,
          props = _objectWithoutProperties(_props, ['autoComplete', 'disabled', 'errorMessage', 'fullWidth', 'helper', 'label', 'hintText', 'width', 'openLabel', 'prefix', 'innerRef', 'id', 'autoCompleteList']);

      var _state = this.state,
          error = _state.error,
          focused = _state.focused,
          valid = _state.valid,
          value = _state.value,
          autoCompleteListItens = _state.autoCompleteListItens;

      var id = void 0;
      if (fieldId) id = fieldId;else if (label) id = label.toLowerCase();else id = genId();
      return _react2.default.createElement(
        _TextField.InputBase,
        {
          width: fullWidth ? '100%' : width,
          onFocus: this.handleFocus,
          onBlur: this.handleBlur,
          disabled: disabled
        },
        _react2.default.createElement(
          _TextField.InputLabel,
          {
            focused: focused,
            valid: valid,
            open: openLabel,
            error: error,
            htmlFor: id,
            disabled: disabled
          },
          label
        ),
        _react2.default.createElement(
          _TextField.InputHint,
          { visible: (focused || !label) && !valid },
          hintText
        ),
        _react2.default.createElement(
          _TextField.InputPrefix,
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
        _react2.default.createElement(_TextField.InputText, _extends({}, props, {
          id: id,
          type: props.type === 'number' ? 'text' : props.type,
          tabIndex: disabled ? '-1' : '0',
          value: props.value || value,
          onChange: this.handleChange,
          padding: this.getPadding(prefix),
          ref: innerRef,
          error: error
        })),
        autoComplete && autoCompleteListItens && _react2.default.createElement(
          _TextField.InputAutoCompleteList,
          null,
          this.renderAutoCompleteListItens()
        ),
        error && _react2.default.createElement(
          _TextField.InputError,
          { visible: error },
          errorMessage
        ),
        _react2.default.createElement(
          _TextField.InputHelper,
          { afterError: error, visible: Boolean(helper) },
          _react2.default.createElement(_TextField.InputHelperIcon, null),
          _react2.default.createElement(
            _TextField.InputHelperText,
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
  type: _propTypes2.default.string,
  autoComplete: _propTypes2.default.bool,
  autoCompleteList: _propTypes2.default.arrayOf(_propTypes2.default.string)
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
  width: '247px',
  openLabel: false,
  innerRef: {},
  type: 'text',
  autoComplete: false,
  autoCompleteList: []
};

exports.default = (0, _react.forwardRef)(function (props, ref) {
  return _react2.default.createElement(TextField, _extends({ innerRef: ref }, props));
}); // eslint-disable-line