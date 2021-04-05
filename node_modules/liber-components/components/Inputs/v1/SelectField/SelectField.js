"use strict";

require("core-js/modules/es6.object.assign");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

require("core-js/modules/es6.array.find-index");

require("core-js/modules/es6.array.sort");

require("core-js/modules/es6.regexp.search");

require("core-js/modules/es6.string.iterator");

require("core-js/modules/es6.array.from");

require("core-js/modules/es6.regexp.to-string");

require("core-js/modules/es6.date.to-string");

require("core-js/modules/es6.object.to-string");

require("core-js/modules/web.dom.iterable");

require("core-js/modules/es6.array.is-array");

require("core-js/modules/es7.symbol.async-iterator");

require("core-js/modules/es6.symbol");

require("core-js/modules/es6.object.define-property");

require("core-js/modules/es6.object.create");

require("core-js/modules/es6.object.set-prototype-of");

require("core-js/modules/es6.function.name");

require("core-js/modules/es6.array.map");

require("core-js/modules/es6.array.index-of");

require("core-js/modules/es6.array.filter");

var _react = _interopRequireWildcard(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _lodash = _interopRequireDefault(require("lodash"));

var _Util = require("../../../Util");

var _Base = require("../Base.styles");

var _SelectField = require("./SelectField.styles");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function () { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; if (obj != null) { var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance"); }

function _iterableToArray(iter) { if (Symbol.iterator in Object(iter) || Object.prototype.toString.call(iter) === "[object Arguments]") return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = new Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } }

var getLabel = function getLabel(props) {
  var label = _react["default"].Children.toArray(props.children).filter(function (child) {
    return child.props.value === props.value;
  });

  label = label.length > 0 ? label[0].props.children : '';
  return label;
};

var getItemFocused = function getItemFocused(props) {
  return _react["default"].Children.toArray(props.children).map(function (child) {
    return child.props.value;
  }).indexOf(props.value);
};

var getChildrenArray = function getChildrenArray(props) {
  var labelElement = props.labelOpened ? _react["default"].createElement("option", {
    key: _lodash["default"].uniqueId(),
    value: ""
  }, props.labelOpened) : null;

  var children = _react["default"].Children.toArray(props.children);

  return labelElement ? [labelElement].concat(_toConsumableArray(children)) : children;
};

var SelectField =
/*#__PURE__*/
function (_Component) {
  _inherits(SelectField, _Component);

  function SelectField(props) {
    var _this;

    _classCallCheck(this, SelectField);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(SelectField).call(this, props));

    _initialiseProps.call(_assertThisInitialized(_this));

    var children = getChildrenArray(props);
    _this.state = {
      clicked: false,
      open: false,
      optionValue: props.value || '',
      optionLabel: getLabel(props) || '',
      focused: false,
      itemFocused: getItemFocused(props),
      search: '',
      children: children,
      filteredChildren: null
    };
    _this.tag = _lodash["default"].uniqueId();
    return _this;
  }

  _createClass(SelectField, [{
    key: "render",
    value: function render() {
      var _this$props = this.props,
          disabled = _this$props.disabled,
          name = _this$props.name,
          id = _this$props.id,
          fullWidth = _this$props.fullWidth,
          width = _this$props.width,
          errorMessage = _this$props.errorMessage;
      var _this$state = this.state,
          clicked = _this$state.clicked,
          open = _this$state.open,
          optionValue = _this$state.optionValue,
          focused = _this$state.focused;
      return _react["default"].createElement(_Base.InputBase, {
        width: fullWidth ? '100%' : width,
        tabIndex: disabled ? '-1' : '0',
        disabled: disabled,
        onClick: !clicked ? this.handleClick : null,
        onFocus: !clicked ? this.handleFocus : null,
        onKeyDown: this.handleKeys,
        ref: this.setBaseRef
      }, _react["default"].createElement(_Util.ClickOutside, {
        onOutsideClick: this.handleClickOutside
      }, _react["default"].createElement(_react.Fragment, null, this.renderSearchableLabel(), _react["default"].createElement("div", {
        style: {
          position: 'relative'
        }
      }, this.renderMenu(), this.renderSelect(), _react["default"].createElement(_Base.InputBar, {
        open: open || focused,
        error: Boolean(errorMessage)
      })))), _react["default"].createElement(_Base.InputError, {
        visible: Boolean(errorMessage)
      }, errorMessage), _react["default"].createElement("input", {
        type: "hidden",
        name: name,
        id: id,
        value: optionValue
      }));
    }
  }], [{
    key: "getDerivedStateFromProps",
    value: function getDerivedStateFromProps(nextProps, prevState) {
      var optionValue = typeof nextProps.value === 'undefined' ? prevState.optionValue : nextProps.value;
      var optionLabel = typeof nextProps.value === 'undefined' ? prevState.optionLabel : getLabel(nextProps);
      var itemFocused = typeof nextProps.value === 'undefined' || prevState.open ? prevState.itemFocused : getItemFocused(nextProps);
      var children = getChildrenArray(nextProps);

      if (optionValue === prevState.optionValue && optionLabel === prevState.optionLabel && itemFocused === prevState.itemFocused && children === prevState.children) {
        return null;
      }

      var nextState = {
        optionValue: optionValue,
        optionLabel: optionLabel,
        itemFocused: itemFocused,
        children: children
      };
      return nextState;
    }
  }]);

  return SelectField;
}(_react.Component);

var _initialiseProps = function _initialiseProps() {
  var _this2 = this;

  this.shouldComponentUpdate = function (nextProps, nextState) {
    return nextState.optionValue !== _this2.state.optionValue || nextState.focused !== _this2.state.focused || nextState.open !== _this2.state.open || nextState.clicked !== _this2.state.clicked || nextState.itemFocused !== _this2.state.itemFocused || nextState.search !== _this2.state.search || nextState.children !== _this2.state.children || nextProps.disabled !== _this2.props.disabled || nextProps.errorMessage !== _this2.props.errorMessage || nextProps.fullWidth !== _this2.props.fullWidth || nextProps.value !== _this2.state.optionValue || nextProps.width !== _this2.props.width;
  };

  this.getFormatted = function (text) {
    return (0, _Util.normalizeText)(text.toLowerCase());
  };

  this.getSearch = function (child, search) {
    return _this2.getFormatted(child).search(_this2.getFormatted(search));
  };

  this.getChildHighlight = function (child) {
    var search = _this2.state.search;

    var index = _this2.getSearch(child, search);

    return _react["default"].createElement("div", null, child.substr(0, index), _react["default"].createElement("span", null, child.substr(index, search.length)), child.substr(index + search.length));
  };

  this.getFilteredChildren = function (children, search) {
    return children.filter(function (child) {
      return _this2.getSearch(child.props.children, search) !== -1;
    }).sort(function (prev, next) {
      if (_this2.getSearch(prev.props.children, search) === 0) return -1;
      if (_this2.getSearch(next.props.children, search) === 0) return 1;
      return 0;
    });
  };

  this.setItemFocused = function (item) {
    return _this2.setState({
      itemFocused: item
    });
  };

  this.setBaseRef = function (ref) {
    _this2.baseRef = ref;
  };

  this.setTextFieldRef = function (ref) {
    _this2.textFieldRef = ref;
  };

  this.scrollToList = function () {
    var element = document.getElementById("scroll-container-".concat(_this2.tag));

    if (element) {
      element.scrollIntoView({
        top: 0,
        behavior: 'smooth'
      });
    }
  };

  this.handleChange = function (event) {
    var onChange = _this2.props.onChange;

    if (_this2.props.searchable) {
      var children = _this2.state.children;
      var search = event.target.value;

      _this2.setState({
        search: search,
        itemFocused: search.length > 0 ? 0 : -1,
        open: true,
        filteredChildren: search.length > 0 ? _this2.getFilteredChildren(children, search) : null
      });
    }

    if (event.target.value.length === 0) {
      _this2.setState({
        optionValue: '',
        optionLabel: ''
      });

      if (onChange) onChange('');
    }
  };

  this.handleClick = function () {
    _this2.setState({
      open: true,
      clicked: true
    });
  };

  this.handleClickOutside = function () {
    _this2.setState({
      open: false,
      clicked: false,
      focused: false
    });
  };

  this.handleFocus = function () {
    if (_this2.textFieldRef) {
      _this2.textFieldRef.focus();

      _this2.textFieldRef.click();
    } else _this2.setState({
      focused: true
    });
  };

  this.handleBlur = function () {
    if (_this2.textFieldRef) {
      _this2.textFieldRef.blur();

      _this2.baseRef.focus();
    }

    _this2.handleClickOutside();
  };

  this.handleNavigation = function (key) {
    var items = (_this2.state.filteredChildren || _this2.state.children).length;
    var itemFocused = _this2.state.itemFocused;

    switch (key) {
      case 38:
        _this2.setState({
          itemFocused: itemFocused > 0 ? itemFocused - 1 : items - 1
        }, _this2.scrollToList);

        break;

      case 40:
        _this2.setState({
          itemFocused: itemFocused < items - 1 ? itemFocused + 1 : 0
        }, _this2.scrollToList);

        break;

      default:
        break;
    }
  };

  this.handleSelectionFromKey = function () {
    var child = (_this2.state.filteredChildren || _this2.state.children)[_this2.state.itemFocused];

    if (child) {
      _this2.handleSelect(child.props.value, child.props.children);
    }
  };

  this.handleKeys = function (event) {
    switch (event.keyCode) {
      case 9:
        _this2.handleBlur();

        break;

      case 27:
        _this2.setState({
          open: false
        });

        break;

      case 13:
        if (!_this2.state.open && !_this2.props.searchable) {
          _this2.handleClick();
        } else _this2.handleSelectionFromKey();

        break;

      case 38:
      case 40:
        _this2.handleNavigation(event.keyCode);

        if (event.preventDefault) event.preventDefault();
        break;

      default:
        break;
    }
  };

  this.handleSelect = function (selectedValue, selectedLabel) {
    var onChange = _this2.props.onChange;
    var _this2$state = _this2.state,
        children = _this2$state.children,
        optionValue = _this2$state.optionValue,
        optionLabel = _this2$state.optionLabel;
    var itemFocused = selectedValue ? children.findIndex(function (child) {
      return child.props.value === selectedValue;
    }) : -1;

    _this2.setState({
      search: '',
      itemFocused: itemFocused,
      filteredChildren: null
    });

    if (optionValue !== selectedValue && optionLabel !== selectedLabel) {
      _this2.setState({
        optionValue: selectedValue,
        optionLabel: selectedValue ? selectedLabel : ''
      }, function () {
        onChange(selectedValue);
      });
    } else {
      _this2.setState({
        optionValue: '',
        optionLabel: ''
      }, function () {
        onChange('');
      });
    }

    _this2.handleBlur();
  };

  this.renderSelectItem = function (_ref) {
    var index = _ref.index,
        key = _ref.key,
        style = _ref.style,
        isVisible = _ref.isVisible,
        parent = _ref.parent;
    if (!isVisible) return null;
    var _parent$props = parent.props,
        list = _parent$props.list,
        optionLabel = _parent$props.optionLabel,
        itemFocused = _parent$props.itemFocused;
    var labelOpened = _this2.props.labelOpened;
    var child = list[index];
    var SelectElement = index === 0 && labelOpened ? _SelectField.SelectLabel : _SelectField.SelectItem;
    return _react["default"].createElement(SelectElement, _extends({
      id: "test"
    }, child.props, {
      focused: list.indexOf(child) === itemFocused,
      selected: optionLabel === child.props.children,
      onClick: function onClick() {
        _this2.handleSelect(child.props.value, child.props.children);

        if (_this2.baseRef) _this2.baseRef.focus();
      },
      onMouseMove: function onMouseMove() {
        return _this2.setItemFocused(list.indexOf(child));
      },
      onMouseLeave: function onMouseLeave() {
        return _this2.setItemFocused(-1);
      },
      key: key,
      style: style
    }), _this2.getChildHighlight(child.props.children));
  };

  this.renderMenu = function () {
    var searchable = _this2.props.searchable;
    var _this2$state2 = _this2.state,
        children = _this2$state2.children,
        filteredChildren = _this2$state2.filteredChildren,
        optionLabel = _this2$state2.optionLabel,
        itemFocused = _this2$state2.itemFocused,
        open = _this2$state2.open;
    return _react["default"].createElement(_SelectField.SelectOptionList, {
      id: "scroll-container-".concat(_this2.tag),
      ref: _this2.setOptionListRef,
      rowRenderer: _this2.renderSelectItem,
      scrollToIndex: _this2.scrollToIndex,
      optionLabel: optionLabel,
      itemFocused: itemFocused,
      searchable: searchable,
      isOpen: open
    }, filteredChildren || children);
  };

  this.renderSearchableLabel = function () {
    var _this2$props = _this2.props,
        errorMessage = _this2$props.errorMessage,
        label = _this2$props.label,
        searchable = _this2$props.searchable;
    var _this2$state3 = _this2.state,
        open = _this2$state3.open,
        optionLabel = _this2$state3.optionLabel,
        search = _this2$state3.search;
    var valid = Boolean(optionLabel) || Boolean(search);
    return _react["default"].createElement(_Base.InputLabel, {
      focused: open && searchable,
      valid: valid,
      error: Boolean(errorMessage)
    }, label);
  };

  this.renderSelect = function () {
    var searchable = _this2.props.searchable;
    var _this2$state4 = _this2.state,
        open = _this2$state4.open,
        optionLabel = _this2$state4.optionLabel,
        optionValue = _this2$state4.optionValue,
        focused = _this2$state4.focused,
        search = _this2$state4.search;
    return _react["default"].createElement("div", {
      style: {
        position: 'relative'
      }
    }, _react["default"].createElement(_Base.InputCaret, {
      open: open,
      focused: focused
    }), searchable ? _react["default"].createElement(_Base.InputText, {
      tabIndex: "-1",
      onChange: _this2.handleChange,
      value: search || optionLabel,
      inputRef: _this2.setTextFieldRef
    }) : _react["default"].createElement(_SelectField.SelectBox, {
      tabIndex: "-1",
      selected: optionValue.length !== 0
    }, optionLabel, "\xA0"));
  };
};

SelectField.propTypes = {
  children: _propTypes["default"].oneOfType([_propTypes["default"].element, _propTypes["default"].arrayOf(_propTypes["default"].element)]).isRequired,
  disabled: _propTypes["default"].bool,
  fullWidth: _propTypes["default"].bool,
  label: _propTypes["default"].string,
  labelOpened: _propTypes["default"].string,
  onChange: _propTypes["default"].func,
  width: _propTypes["default"].string,
  name: _propTypes["default"].string,
  id: _propTypes["default"].string,
  errorMessage: _propTypes["default"].string,
  searchable: _propTypes["default"].bool,
  value: _propTypes["default"].oneOfType([_propTypes["default"].string, _propTypes["default"].number])
};
SelectField.defaultProps = {
  disabled: false,
  fullWidth: false,
  label: 'Selecione um item',
  labelOpened: '',
  width: '256px',
  errorMessage: '',
  onChange: function onChange() {},
  name: '',
  id: '',
  searchable: false,
  value: undefined
};
var _default = SelectField;
exports["default"] = _default;