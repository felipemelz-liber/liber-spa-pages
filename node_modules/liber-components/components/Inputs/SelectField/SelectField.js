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

var _lodash = require('lodash');

var _lodash2 = _interopRequireDefault(_lodash);

var _Util = require('../../Util');

var _styles = require('../styles');

var _styles2 = require('./styles');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }

var getLabel = function getLabel(props) {
  var label = _react2.default.Children.toArray(props.children).filter(function (child) {
    return child.props.value === props.value;
  });
  label = label.length > 0 ? label[0].props.children : '';
  return label;
};

var getItemFocused = function getItemFocused(props) {
  return _react2.default.Children.toArray(props.children).map(function (child) {
    return child.props.value;
  }).indexOf(props.value);
};

var getChildrenArray = function getChildrenArray(props) {
  var labelElement = props.labelOpened ? _react2.default.createElement(
    'option',
    { key: _lodash2.default.uniqueId(), value: '' },
    props.labelOpened
  ) : null;
  var children = _react2.default.Children.toArray(props.children);
  return labelElement ? [labelElement].concat(_toConsumableArray(children)) : children;
};

var SelectField = function (_Component) {
  _inherits(SelectField, _Component);

  function SelectField(props) {
    _classCallCheck(this, SelectField);

    var _this = _possibleConstructorReturn(this, (SelectField.__proto__ || Object.getPrototypeOf(SelectField)).call(this, props));

    _initialiseProps.call(_this);

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

    _this.tag = _lodash2.default.uniqueId();
    return _this;
  }

  _createClass(SelectField, [{
    key: 'render',
    value: function render() {
      var _props = this.props,
          disabled = _props.disabled,
          name = _props.name,
          id = _props.id,
          fullWidth = _props.fullWidth,
          width = _props.width,
          errorMessage = _props.errorMessage;
      var _state = this.state,
          clicked = _state.clicked,
          open = _state.open,
          optionValue = _state.optionValue,
          focused = _state.focused;

      return _react2.default.createElement(
        _styles.InputBase,
        {
          width: fullWidth ? '100%' : width,
          tabIndex: disabled ? '-1' : '0',
          disabled: disabled,
          onClick: !clicked ? this.handleClick : null,
          onFocus: !clicked ? this.handleFocus : null,
          onKeyDown: this.handleKeys,
          ref: this.setBaseRef
        },
        _react2.default.createElement(
          _Util.ClickOutside,
          { onOutsideClick: this.handleClickOutside },
          _react2.default.createElement(
            _react.Fragment,
            null,
            this.renderSearchableLabel(),
            _react2.default.createElement(
              'div',
              { style: { position: 'relative' } },
              this.renderMenu(),
              this.renderSelect(),
              _react2.default.createElement(_styles.InputBar, { open: open || focused, error: Boolean(errorMessage) })
            )
          )
        ),
        _react2.default.createElement(
          _styles.InputError,
          { visible: Boolean(errorMessage) },
          errorMessage
        ),
        _react2.default.createElement('input', { type: 'hidden', name: name, id: id, value: optionValue })
      );
    }
  }], [{
    key: 'getDerivedStateFromProps',
    value: function getDerivedStateFromProps(nextProps, prevState) {
      var optionValue = typeof nextProps.value === 'undefined' ? prevState.optionValue : nextProps.value;
      var optionLabel = typeof nextProps.value === 'undefined' ? prevState.optionLabel : getLabel(nextProps);
      var itemFocused = typeof nextProps.value === 'undefined' || prevState.open ? prevState.itemFocused : getItemFocused(nextProps);
      var children = getChildrenArray(nextProps);
      if (optionValue === prevState.optionValue && optionLabel === prevState.optionLabel && itemFocused === prevState.itemFocused && children === prevState.children) {
        return null;
      }

      var nextState = {
        optionValue: optionValue, optionLabel: optionLabel, itemFocused: itemFocused, children: children
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
    return _react2.default.createElement(
      'div',
      null,
      child.substr(0, index),
      _react2.default.createElement(
        'span',
        null,
        child.substr(index, search.length)
      ),
      child.substr(index + search.length)
    );
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
    return _this2.setState({ itemFocused: item });
  };

  this.setBaseRef = function (ref) {
    _this2.baseRef = ref;
  };

  this.setTextFieldRef = function (ref) {
    _this2.textFieldRef = ref;
  };

  this.scrollToList = function () {
    var element = document.getElementById('scroll-container-' + _this2.tag);
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
      _this2.setState({ optionValue: '', optionLabel: '' });
      if (onChange) onChange('');
    }
  };

  this.handleClick = function () {
    _this2.setState({ open: true, clicked: true });
  };

  this.handleClickOutside = function () {
    _this2.setState({ open: false, clicked: false, focused: false });
  };

  this.handleFocus = function () {
    if (_this2.textFieldRef) {
      _this2.textFieldRef.focus();
      _this2.textFieldRef.click();
    } else _this2.setState({ focused: true });
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
        _this2.setState({ open: false });
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
    var _state2 = _this2.state,
        children = _state2.children,
        optionValue = _state2.optionValue,
        optionLabel = _state2.optionLabel;

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
    var SelectElement = index === 0 && labelOpened ? _styles2.SelectLabel : _styles2.SelectItem;

    return _react2.default.createElement(
      SelectElement,
      _extends({
        id: 'test'
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
      }),
      _this2.getChildHighlight(child.props.children)
    );
  };

  this.renderMenu = function () {
    var searchable = _this2.props.searchable;
    var _state3 = _this2.state,
        children = _state3.children,
        filteredChildren = _state3.filteredChildren,
        optionLabel = _state3.optionLabel,
        itemFocused = _state3.itemFocused,
        open = _state3.open;


    return _react2.default.createElement(
      _styles2.SelectOptionList,
      {
        id: 'scroll-container-' + _this2.tag,
        ref: _this2.setOptionListRef,
        rowRenderer: _this2.renderSelectItem,
        scrollToIndex: _this2.scrollToIndex,
        optionLabel: optionLabel,
        itemFocused: itemFocused,
        searchable: searchable,
        isOpen: open
      },
      filteredChildren || children
    );
  };

  this.renderSearchableLabel = function () {
    var _props2 = _this2.props,
        errorMessage = _props2.errorMessage,
        label = _props2.label,
        searchable = _props2.searchable;
    var _state4 = _this2.state,
        open = _state4.open,
        optionLabel = _state4.optionLabel,
        search = _state4.search;

    var valid = Boolean(optionLabel) || Boolean(search);

    return _react2.default.createElement(
      _styles.InputLabel,
      {
        focused: open && searchable,
        valid: valid,
        error: Boolean(errorMessage)
      },
      label
    );
  };

  this.renderSelect = function () {
    var searchable = _this2.props.searchable;
    var _state5 = _this2.state,
        open = _state5.open,
        optionLabel = _state5.optionLabel,
        optionValue = _state5.optionValue,
        focused = _state5.focused,
        search = _state5.search;


    return _react2.default.createElement(
      'div',
      { style: { position: 'relative' } },
      _react2.default.createElement(_styles.InputCaret, { open: open, focused: focused }),
      searchable ? _react2.default.createElement(_styles.InputText, {
        tabIndex: '-1',
        onChange: _this2.handleChange,
        value: search || optionLabel,
        inputRef: _this2.setTextFieldRef
      }) : _react2.default.createElement(
        _styles2.SelectBox,
        {
          tabIndex: '-1',
          selected: optionValue.length !== 0
        },
        optionLabel,
        '\xA0'
      )
    );
  };
};

SelectField.propTypes = {
  children: _propTypes2.default.oneOfType([_propTypes2.default.element, _propTypes2.default.arrayOf(_propTypes2.default.element)]).isRequired,
  disabled: _propTypes2.default.bool,
  fullWidth: _propTypes2.default.bool,
  label: _propTypes2.default.string,
  labelOpened: _propTypes2.default.string,
  onChange: _propTypes2.default.func,
  width: _propTypes2.default.string,
  name: _propTypes2.default.string,
  id: _propTypes2.default.string,
  errorMessage: _propTypes2.default.string,
  searchable: _propTypes2.default.bool,
  value: _propTypes2.default.oneOfType([_propTypes2.default.string, _propTypes2.default.number])
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

exports.default = SelectField;