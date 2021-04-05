"use strict";

require("core-js/modules/es6.weak-map");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

require("core-js/modules/es6.array.index-of");

require("core-js/modules/es6.object.assign");

require("core-js/modules/es6.object.define-properties");

require("core-js/modules/es7.object.get-own-property-descriptors");

require("core-js/modules/es6.array.for-each");

require("core-js/modules/es6.object.keys");

require("core-js/modules/es6.string.iterator");

require("core-js/modules/es6.array.from");

require("core-js/modules/es6.regexp.to-string");

require("core-js/modules/es6.date.to-string");

require("core-js/modules/es7.symbol.async-iterator");

require("core-js/modules/es6.symbol");

require("core-js/modules/es6.array.is-array");

require("core-js/modules/es6.object.define-property");

require("core-js/modules/es6.object.create");

require("core-js/modules/es6.object.set-prototype-of");

require("core-js/modules/web.dom.iterable");

require("core-js/modules/es6.array.iterator");

require("core-js/modules/es6.object.to-string");

require("core-js/modules/es7.array.includes");

require("core-js/modules/es6.string.includes");

require("core-js/modules/es6.regexp.search");

require("core-js/modules/es6.array.filter");

require("core-js/modules/es6.array.map");

require("core-js/modules/es6.array.find");

var _react = _interopRequireWildcard(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _lodash = _interopRequireDefault(require("lodash"));

var _DropDown = require("../../../DropDown");

var _Util = require("../../../Util");

var _Assets = require("../../../Assets");

var _SelectField = require("./SelectField.styles");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function _getRequireWildcardCache() { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; if (obj != null) { var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(source, true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(source).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance"); }

function _iterableToArray(iter) { if (Symbol.iterator in Object(iter) || Object.prototype.toString.call(iter) === "[object Arguments]") return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = new Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

var getLabel = function getLabel(value, children) {
  var selected = _react["default"].Children.toArray(children).find(function (child) {
    return child.props.value === value;
  });

  if (selected) {
    return selected.props.label || selected.props.grandChildren || selected.props.children;
  }

  return value;
};

var isNullOrUndefined = function isNullOrUndefined(obj) {
  return obj === null || obj === undefined;
};

var SelectField =
/*#__PURE__*/
function (_Component) {
  _inherits(SelectField, _Component);

  function SelectField(props) {
    var _this;

    _classCallCheck(this, SelectField);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(SelectField).call(this, props));

    _this.isValueControlled = function () {
      return !isNullOrUndefined(_this.props.value);
    };

    _this.openField = function () {
      _this.setState({
        open: true
      });
    };

    _this.closeField = function () {
      _this.setState({
        open: false,
        focused: -1
      });
    };

    _this.clearInput = function () {
      if (_this.isValueControlled()) {
        _this.setState({
          open: false
        }, function () {
          return _this.callback('');
        });
      } else {
        _this.setState({
          open: false,
          value: '',
          label: '',
          clear: false,
          selected: []
        }, _this.callback);
      }
    };

    _this.handleInputFocus = function () {
      _this.openField();
    };

    _this.handleOutsideClick = function () {
      _this.closeField();
    };

    _this.handleShellClick = function () {
      var searchable = _this.props.searchable;

      if (searchable) {
        _this.input.current.focus();
      } else {
        _this.openField();
      }
    };

    _this.callback = function (newValue) {
      var _this$props = _this.props,
          onChange = _this$props.onChange,
          multiple = _this$props.multiple;
      var _this$state = _this.state,
          value = _this$state.value,
          selected = _this$state.selected;
      setTimeout(function () {
        _this.setState({
          searching: false
        });
      }, 250);
      var valueToChange = isNullOrUndefined(newValue) ? value : newValue;
      onChange(multiple ? selected.map(function (item) {
        return item.value;
      }) : valueToChange);
    };

    _this.handleSelectClick = function (label, value) {
      return function () {
        var multiple = _this.props.multiple;

        if (multiple) {
          _this.setState(function (state) {
            var filtered = state.selected.filter(function (item) {
              return item.value !== value;
            });
            return {
              value: '',
              label: '',
              selected: filtered.length === state.selected.length ? [].concat(_toConsumableArray(state.selected), [{
                label: label,
                value: value
              }]) : filtered
            };
          }, _this.callback);
        }

        if (_this.isValueControlled()) {
          _this.setState({
            open: false,
            focused: -1
          }, function () {
            return _this.callback(value);
          });
        } else {
          _this.setState({
            label: label,
            value: value,
            open: false,
            focused: -1
          }, _this.callback);
        }
      };
    };

    _this.handleShellMouseEnter = function () {
      _this.setState(function (state) {
        return {
          clear: Boolean(state.label)
        };
      });
    };

    _this.handleShellMouseLeave = function () {
      _this.setState({
        clear: false
      });
    };

    _this.handleInputChange = function (event) {
      var value = event.target.value;
      var withNewValue = _this.isValueControlled() ? {} : {
        value: ''
      };

      _this.setState(function (_ref) {
        var focused = _ref.focused;
        return _objectSpread({
          searching: Boolean(value),
          open: true,
          label: value,
          focused: focused !== -1 ? 0 : -1
        }, withNewValue);
      });
    };

    _this.scroll = function () {
      var focused = _this.state.focused;

      _this.options[focused].current.scrollIntoView({
        block: 'nearest'
      });
    };

    _this.handleKeyDown = function (event) {
      if (event.key === 'ArrowDown' && _this.options.length !== 0) {
        _this.setState(function (state) {
          return {
            focused: state.focused >= _this.options.length - 1 ? _this.options.length - 1 : state.focused + 1
          };
        }, _this.scroll);
      }

      if (event.key === 'ArrowUp' && _this.options.length !== 0) {
        _this.setState(function (state) {
          return {
            focused: state.focused <= 0 ? 0 : state.focused - 1
          };
        }, _this.scroll);
      }

      if (event.key === 'Escape') {
        _this.input.current.blur();

        _this.setState({
          focused: -1,
          open: false
        });
      }

      if (event.key === 'Enter' && _this.state.focused !== -1) {
        var _this$options$_this$s = _this.options[_this.state.focused].current.dataset,
            value = _this$options$_this$s.value,
            label = _this$options$_this$s.label;

        _this.input.current.blur();

        _this.handleSelectClick(label, value)();
      }
    };

    _this.renderInput = function () {
      var _this$props2 = _this.props,
          searchable = _this$props2.searchable,
          disabled = _this$props2.disabled,
          errorMessage = _this$props2.errorMessage,
          multiple = _this$props2.multiple;
      var _this$state2 = _this.state,
          label = _this$state2.label,
          open = _this$state2.open,
          selected = _this$state2.selected;
      return _react["default"].createElement(_SelectField.InputShell, {
        basic: searchable,
        disabled: disabled,
        error: Boolean(errorMessage),
        open: open,
        onClick: _this.handleShellClick,
        onMouseEnter: _this.handleShellMouseEnter,
        onMouseLeave: _this.handleShellMouseLeave,
        tabIndex: "0",
        ref: _this.shell,
        onFocus: _this.openField,
        onKeyDown: _this.handleKeyDown
      }, multiple && selected.length !== 0 && _react["default"].createElement(_SelectField.Tag, {
        closable: true,
        onClose: _this.clearInput
      }, selected.length === 1 ? selected[0].label : "".concat(selected.length, " Selecionados")), (!multiple || searchable) && _react["default"].createElement(_SelectField.Input, {
        basic: searchable,
        multiple: multiple,
        disabled: disabled,
        ref: _this.input,
        value: label,
        onChange: _this.handleInputChange,
        onFocus: _this.handleInputFocus
      }));
    };

    _this.getFormatted = function (text) {
      return (0, _Util.normalizeText)(text.toLowerCase());
    };

    _this.getSearch = function (child, search) {
      return _this.getFormatted(child).search(_this.getFormatted(search));
    };

    _this.getChildHighlight = function (child, search) {
      var index = _this.getSearch(child, search);

      return _react["default"].createElement("div", null, child.substr(0, index), _react["default"].createElement("span", null, child.substr(index, search.length)), child.substr(index + search.length));
    };

    _this.renderChildren = function () {
      var _this$state3 = _this.state,
          selectedValue = _this$state3.value,
          searching = _this$state3.searching,
          focused = _this$state3.focused,
          search = _this$state3.label,
          selected = _this$state3.selected;
      var _this$props3 = _this.props,
          raw = _this$props3.children,
          disabled = _this$props3.disabled,
          emptyMessage = _this$props3.emptyMessage;
      _this.options = [];
      var selectedValueList = selected.map(function (item) {
        return item.value;
      });

      if (searching) {
        var searchedChildren = _react["default"].Children.toArray(raw).filter(function (child) {
          var _child$props = child.props,
              children = _child$props.children,
              label = _child$props.label;
          return _this.getFormatted(label || children).includes(_this.getFormatted(search));
        }).map(function (child, index) {
          var _child$props2 = child.props,
              label = _child$props2.label,
              children = _child$props2.children,
              value = _child$props2.value;
          _this.options[index] = (0, _react.createRef)();
          return _react["default"].createElement(_SelectField.Option, _extends({
            key: _lodash["default"].uniqueId(value),
            ref: _this.options[index]
          }, child.props, {
            checked: value === selectedValue || selectedValueList.includes(value),
            focused: index === focused,
            "data-value": value,
            "data-label": label || children,
            onClick: !disabled && _this.handleSelectClick(label || children, value)
          }), _this.getChildHighlight(label || children, search), selectedValueList.includes(value) && _react["default"].createElement(_SelectField.Check, null));
        });

        if (searchedChildren.length === 0) {
          _this.options = [];
          return _react["default"].createElement(_SelectField.Option, {
            disabled: true
          }, emptyMessage);
        }

        return searchedChildren;
      }

      return _react["default"].Children.toArray(raw).map(function (child, index) {
        var _child$props3 = child.props,
            label = _child$props3.label,
            children = _child$props3.children,
            value = _child$props3.value;
        _this.options[index] = (0, _react.createRef)();
        return _react["default"].createElement(_SelectField.Option, _extends({
          key: _lodash["default"].uniqueId(value),
          ref: _this.options[index]
        }, child.props, {
          checked: value === selectedValue || selectedValueList.includes(value),
          focused: index === focused,
          "data-value": value,
          "data-label": label || children,
          onClick: !disabled && _this.handleSelectClick(label || children, value)
        }), children, selectedValueList.includes(value) && _react["default"].createElement(_SelectField.Check, null));
      });
    };

    _this.state = {
      value: props.value || '',
      label: props.value ? getLabel(props.value, props.children) : '',
      selected: [],
      open: false,
      clear: false,
      searching: false,
      focused: -1
    };
    _this.input = (0, _react.createRef)();
    _this.shell = (0, _react.createRef)();
    _this.options = [];
    return _this;
  }

  _createClass(SelectField, [{
    key: "render",
    value: function render() {
      var _this$props4 = this.props,
          label = _this$props4.label,
          disabled = _this$props4.disabled,
          placeholder = _this$props4.placeholder,
          hintText = _this$props4.hintText,
          errorMessage = _this$props4.errorMessage,
          openLabel = _this$props4.openLabel,
          onChange = _this$props4.onChange,
          props = _objectWithoutProperties(_this$props4, ["label", "disabled", "placeholder", "hintText", "errorMessage", "openLabel", "onChange"]);

      var _this$state4 = this.state,
          open = _this$state4.open,
          value = _this$state4.value,
          clear = _this$state4.clear,
          search = _this$state4.label;
      return _react["default"].createElement(_react["default"].Fragment, null, _react["default"].createElement(_Assets.PsGlobalStyle, null), _react["default"].createElement(_Util.ClickOutside, {
        onOutsideClick: this.handleOutsideClick
      }, _react["default"].createElement(_SelectField.Container, props, Boolean(label) && _react["default"].createElement(_SelectField.Label, {
        focused: openLabel || open || Boolean(value),
        error: Boolean(errorMessage),
        disabled: disabled,
        open: open && value === '' && search === ''
      }, label), _react["default"].createElement(_SelectField.Hint, {
        visible: (!label || openLabel || open) && !value
      }, placeholder || hintText), Boolean(errorMessage) && _react["default"].createElement(_SelectField.Error, {
        visible: Boolean(errorMessage)
      }, errorMessage), _react["default"].createElement(_DropDown.SimpleDropDown, {
        open: !disabled && open,
        position: "bottom-left",
        customButton: this.renderInput()
      }, _react["default"].createElement(_SelectField.OptionsContainer, null, this.renderChildren())), _react["default"].createElement(_SelectField.Icon, {
        hide: clear,
        error: Boolean(errorMessage)
      }), _react["default"].createElement(_SelectField.Close, {
        show: clear,
        onMouseEnter: this.handleShellMouseEnter,
        onClick: this.clearInput
      }))));
    }
  }], [{
    key: "getDerivedStateFromProps",
    value: function getDerivedStateFromProps(props, state) {
      var multiple = props.multiple,
          values = props.values,
          children = props.children,
          propsValue = props.value;
      var searching = state.searching,
          open = state.open;

      if (multiple) {
        if (values) {
          return {
            selected: values.map(function (value) {
              return {
                value: value,
                label: getLabel(value, children)
              };
            })
          };
        }
      } else if (!isNullOrUndefined(propsValue)) {
        return !searching && !open && {
          value: propsValue,
          label: getLabel(propsValue, children)
        };
      }

      return state;
    }
  }]);

  return SelectField;
}(_react.Component);

SelectField.propTypes = {
  children: _propTypes["default"].arrayOf(_propTypes["default"].node).isRequired,
  searchable: _propTypes["default"].bool,
  multiple: _propTypes["default"].bool,
  disabled: _propTypes["default"].bool,
  label: _propTypes["default"].string,
  hintText: _propTypes["default"].string,
  placeholder: _propTypes["default"].string,
  errorMessage: _propTypes["default"].string,
  emptyMessage: _propTypes["default"].string,
  openLabel: _propTypes["default"].bool,
  value: _propTypes["default"].string,
  values: _propTypes["default"].arrayOf(_propTypes["default"].string),
  onChange: _propTypes["default"].func
};
SelectField.defaultProps = {
  label: '',
  multiple: false,
  disabled: false,
  searchable: false,
  hintText: '',
  placeholder: '',
  errorMessage: '',
  emptyMessage: 'Vazio',
  openLabel: false,
  value: null,
  values: null,
  onChange: function onChange() {}
};
var _default = SelectField;
exports["default"] = _default;