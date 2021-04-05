"use strict";

require("core-js/modules/es6.string.iterator");

require("core-js/modules/es6.weak-map");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

require("core-js/modules/es7.symbol.async-iterator");

require("core-js/modules/es6.object.assign");

require("core-js/modules/es6.symbol");

require("core-js/modules/es6.array.index-of");

require("core-js/modules/web.dom.iterable");

require("core-js/modules/es6.array.iterator");

require("core-js/modules/es6.object.keys");

require("core-js/modules/es6.object.define-property");

require("core-js/modules/es6.object.create");

require("core-js/modules/es6.object.set-prototype-of");

require("core-js/modules/es6.array.map");

require("core-js/modules/es7.array.includes");

require("core-js/modules/es6.string.includes");

require("core-js/modules/es6.array.filter");

require("core-js/modules/es6.regexp.search");

require("core-js/modules/es6.regexp.to-string");

require("core-js/modules/es6.date.to-string");

require("core-js/modules/es6.object.to-string");

var _react = _interopRequireWildcard(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _InputField = require("./InputField.styles");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function _getRequireWildcardCache() { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; if (obj != null) { var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

var genId = function genId() {
  if (process.env.NODE_ENV === 'test') return 'abcde';
  return Math.random().toString(36).substring(2, 15) + Math.random().toString(36).substring(2, 15);
};

var InputField =
/*#__PURE__*/
function (_React$Component) {
  _inherits(InputField, _React$Component);

  function InputField(props) {
    var _this;

    _classCallCheck(this, InputField);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(InputField).call(this, props));

    _this.getSearch = function (child, search) {
      return child.toLowerCase().search(search.toLowerCase());
    };

    _this.getHighlightItems = function (item) {
      var value = _this.state.value;

      var index = _this.getSearch(item, value);

      return _react["default"].createElement(_react.Fragment, null, item.substr(0, index), _react["default"].createElement(_InputField.HighlightItem, null, item.substr(index, value.length)), item.substr(index + value.length));
    };

    _this.handleVisibilityToggle = function () {
      var stateType = _this.state.stateType;

      _this.setState({
        stateType: stateType === 'password' ? 'text' : 'password'
      });
    };

    _this.handleChange = function (event) {
      var _this$props = _this.props,
          max = _this$props.max,
          min = _this$props.min;
      var value = event.target.value;
      var _this$props2 = _this.props,
          autoComplete = _this$props2.autoComplete,
          autoCompleteList = _this$props2.autoCompleteList;

      _this.setState({
        valid: value.length > 0
      });

      if (autoComplete) {
        if (value) {
          var result = autoCompleteList.filter(function (item) {
            return item.toLowerCase().includes(value.toLowerCase());
          });

          _this.setState({
            autoCompleteListItens: result
          });
        } else {
          _this.setState({
            autoCompleteListItens: []
          });
        }
      }

      var newValue = value;

      if (value.length && value > max) {
        newValue = max;
      } else if (value.length && value < min) {
        newValue = min;
      }

      if (_this.props.onChange) _this.props.onChange(newValue);else _this.setState({
        value: newValue
      });
    };

    _this.handleFocus = function () {
      _this.setState({
        focused: true
      }, function () {
        _this.props.onFocus(_this.state.value);
      });
    };

    _this.handleBlur = function () {
      _this.setState({
        focused: false
      }, function () {
        _this.props.onBlur(_this.state.value);
      });
    };

    _this.getPadding = function (prefix) {
      if (prefix === '') return null;
      return _this.prefix ? "".concat(_this.prefix.offsetWidth + 4, "px") : '20px';
    };

    _this.onSelectItem = function (event) {
      _this.setState({
        value: event.currentTarget.textContent,
        autoCompleteListItens: []
      });
    };

    _this.renderAutoCompleteListItens = function () {
      var autoCompleteListItens = _this.state.autoCompleteListItens;
      return autoCompleteListItens.map(function (item) {
        return _react["default"].createElement(_InputField.InputAutoCompleteItem, {
          key: item,
          onClick: _this.onSelectItem
        }, _this.getHighlightItems(item));
      });
    };

    _this.handleStepUp = function () {
      var value = _this.state.value;
      var _this$props3 = _this.props,
          max = _this$props3.max,
          step = _this$props3.step,
          precision = _this$props3.precision,
          onChange = _this$props3.onChange;
      var sumValue = step || 1;
      var newValue = parseFloat(value || 0) + sumValue;

      if (newValue > max) {
        newValue = max;
      }

      if (onChange) onChange(newValue.toFixed(precision));else _this.setState({
        value: newValue.toFixed(precision),
        valid: true
      });
    };

    _this.handleStepDown = function () {
      var value = _this.state.value;
      var _this$props4 = _this.props,
          min = _this$props4.min,
          step = _this$props4.step,
          precision = _this$props4.precision,
          onChange = _this$props4.onChange;
      var subtractValue = step || 1;
      var newValue = parseFloat(value || 0) - subtractValue;

      if (newValue < min) {
        newValue = min;
      }

      if (onChange) onChange(newValue.toFixed(precision));else _this.setState({
        value: newValue.toFixed(precision),
        valid: true
      });
    };

    _this.state = {
      focused: false,
      error: Boolean(props.errorMessage),
      valid: Boolean(props.value),
      value: props.value || '',
      autoCompleteListItens: [],
      stateType: props.type
    };
    return _this;
  }

  _createClass(InputField, [{
    key: "render",
    value: function render() {
      var _this2 = this;

      var _this$props5 = this.props,
          autoComplete = _this$props5.autoComplete,
          disabled = _this$props5.disabled,
          errorMessage = _this$props5.errorMessage,
          fullWidth = _this$props5.fullWidth,
          helper = _this$props5.helper,
          label = _this$props5.label,
          hintText = _this$props5.hintText,
          width = _this$props5.width,
          openLabel = _this$props5.openLabel,
          prefix = _this$props5.prefix,
          innerRef = _this$props5.innerRef,
          fieldId = _this$props5.id,
          autoCompleteList = _this$props5.autoCompleteList,
          type = _this$props5.type,
          min = _this$props5.min,
          max = _this$props5.max,
          step = _this$props5.step,
          showPasswordToggle = _this$props5.showPasswordToggle,
          props = _objectWithoutProperties(_this$props5, ["autoComplete", "disabled", "errorMessage", "fullWidth", "helper", "label", "hintText", "width", "openLabel", "prefix", "innerRef", "id", "autoCompleteList", "type", "min", "max", "step", "showPasswordToggle"]);

      var _this$state = this.state,
          error = _this$state.error,
          focused = _this$state.focused,
          valid = _this$state.valid,
          value = _this$state.value,
          autoCompleteListItens = _this$state.autoCompleteListItens,
          stateType = _this$state.stateType;
      var id;
      if (fieldId) id = fieldId;else if (label) id = label.toLowerCase();else id = genId();
      var hasPasswordToggle = type === 'password' && showPasswordToggle;
      return _react["default"].createElement(_InputField.InputBase, {
        width: fullWidth ? '100%' : width,
        onFocus: this.handleFocus,
        onBlur: this.handleBlur,
        disabled: disabled
      }, _react["default"].createElement(_InputField.InputLabel, {
        focused: focused,
        valid: valid,
        open: openLabel,
        error: error,
        htmlFor: id,
        disabled: disabled
      }, label), _react["default"].createElement(_InputField.InputHint, {
        visible: (focused || !label) && !valid
      }, hintText), _react["default"].createElement(_InputField.InputPrefix, {
        ref: function ref(element) {
          _this2.prefix = element;
        },
        visible: focused || openLabel || valid,
        focused: focused,
        error: error,
        valid: valid
      }, prefix), type === 'number' && _react["default"].createElement(_InputField.SpinButtons, null, _react["default"].createElement(_InputField.ChevronUpIcon, {
        onClick: this.handleStepUp
      }), _react["default"].createElement(_InputField.ChevronDownIcon, {
        onClick: this.handleStepDown
      })), hasPasswordToggle ? _react["default"].createElement(_InputField.PasswordToggleContainer, null, _react["default"].createElement(_InputField.VisibilityIcon, {
        passwordVisible: stateType === 'text',
        onClick: this.handleVisibilityToggle
      })) : null, _react["default"].createElement(_InputField.InputText, _extends({}, props, {
        id: id,
        type: type === 'password' ? stateType : type,
        tabIndex: disabled ? '-1' : '0',
        value: props.value || value,
        onChange: this.handleChange,
        padding: this.getPadding(prefix),
        ref: innerRef,
        error: error,
        min: min,
        max: max,
        step: step,
        hasPasswordToggle: hasPasswordToggle
      })), type === 'text' && autoComplete && autoCompleteListItens && _react["default"].createElement(_InputField.InputAutoCompleteList, null, this.renderAutoCompleteListItens()), error && _react["default"].createElement(_InputField.InputError, {
        visible: error
      }, errorMessage), _react["default"].createElement(_InputField.InputHelper, {
        afterError: error,
        visible: Boolean(helper)
      }, _react["default"].createElement(_InputField.InputHelperIcon, null), _react["default"].createElement(_InputField.InputHelperText, null, helper)));
    }
  }], [{
    key: "getDerivedStateFromProps",
    value: function getDerivedStateFromProps(nextProps, prevState) {
      var error = typeof nextProps.errorMessage !== 'undefined' ? Boolean(nextProps.errorMessage) : prevState.error;
      var value = nextProps.value !== null ? nextProps.value : prevState.value;
      var valid = nextProps.value !== null ? Boolean(value) : prevState.valid;
      if (error === prevState.error && valid === prevState.valid && value === prevState.value) return null;
      var nextState = {
        error: error,
        valid: valid,
        value: value
      };
      return nextState;
    }
  }]);

  return InputField;
}(_react["default"].Component);

InputField.propTypes = {
  innerRef: _propTypes["default"].oneOfType([_propTypes["default"].any]),
  disabled: _propTypes["default"].bool,
  errorMessage: _propTypes["default"].string,
  fullWidth: _propTypes["default"].bool,
  helper: _propTypes["default"].string,
  hintText: _propTypes["default"].oneOfType([_propTypes["default"].string, _propTypes["default"].element]),
  prefix: _propTypes["default"].oneOfType([_propTypes["default"].string, _propTypes["default"].element]),
  label: _propTypes["default"].string,
  onBlur: _propTypes["default"].func,
  onChange: _propTypes["default"].func,
  onFocus: _propTypes["default"].func,
  value: _propTypes["default"].string,
  width: _propTypes["default"].string,
  openLabel: _propTypes["default"].bool,
  id: _propTypes["default"].string,
  type: _propTypes["default"].string,
  autoComplete: _propTypes["default"].bool,
  autoCompleteList: _propTypes["default"].arrayOf(_propTypes["default"].string),
  min: _propTypes["default"].number,
  max: _propTypes["default"].number,
  step: _propTypes["default"].number,
  precision: _propTypes["default"].number,
  showPasswordToggle: _propTypes["default"].bool
};
InputField.defaultProps = {
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
  autoCompleteList: [],
  min: undefined,
  max: undefined,
  step: undefined,
  precision: 0,
  showPasswordToggle: false
};

var _default = (0, _react.forwardRef)(function (props, ref) {
  return _react["default"].createElement(InputField, _extends({
    innerRef: ref
  }, props));
}); // eslint-disable-line


exports["default"] = _default;