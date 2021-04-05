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

var _Util = require('../../Util');

var _Helpers = require('../../Helpers');

var _SelectMultiple = require('./SelectMultiple.styles');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var SelectMultiple = function (_Component) {
  _inherits(SelectMultiple, _Component);

  function SelectMultiple() {
    _classCallCheck(this, SelectMultiple);

    var _this = _possibleConstructorReturn(this, (SelectMultiple.__proto__ || Object.getPrototypeOf(SelectMultiple)).call(this));

    _this.handleOpenToogle = function () {
      _this.setState(function (state) {
        return {
          open: !state.open
        };
      });
    };

    _this.handleClose = function () {
      _this.setState({
        open: false
      });
    };

    _this.handleChange = function (onChange, event) {
      event.persist();
      _this.setState({ all: false }, function () {
        onChange(event);
      });
    };

    _this.parseChildren = function (children) {
      var childArray = _react2.default.Children.toArray(children);
      return childArray.map(function (child) {
        var _child$props = child.props,
            _onChange = _child$props.onChange,
            props = _objectWithoutProperties(_child$props, ['onChange']);

        return _react2.default.createElement(_SelectMultiple.Checkbox, _extends({}, props, {
          key: props.id,
          ref: function ref(element) {
            _this.boxes[props.value] = element;
          },
          onChange: function onChange(event) {
            _this.handleChange(_onChange, event);
          }
        }));
      });
    };

    _this.getCheckedList = function (children) {
      var childArray = _react2.default.Children.toArray(children);
      return childArray.reduce(function (list, child) {
        if (_this.checkedTest(child)) {
          return [].concat(_toConsumableArray(list), [child.props.children]);
        }
        return list;
      }, []);
    };

    _this.checkedTest = function (child) {
      if (child.props.checked === null) {
        if (_this.boxes[child.props.value]) {
          return _this.boxes[child.props.value].checked;
        }
      }
      return child.props.checked;
    };

    _this.handleSelectAll = function () {
      var _this$props = _this.props,
          onChangeAll = _this$props.onChangeAll,
          children = _this$props.children;

      _this.setState(function (state) {
        if (!state.all) {
          var all = _react2.default.Children.toArray(children).map(function (child) {
            return child.props.value;
          });
          onChangeAll(all);
        } else {
          onChangeAll([]);
        }
        Object.keys(_this.boxes).forEach(function (box) {
          var checkbox = _this.boxes[box];
          checkbox.checked = !state.all;
        });
        return { all: !state.all };
      });
    };

    _this.boxes = {};
    _this.state = {
      open: false,
      all: false
    };
    return _this;
  }

  _createClass(SelectMultiple, [{
    key: 'render',
    value: function render() {
      var _state = this.state,
          open = _state.open,
          all = _state.all;
      var _props = this.props,
          children = _props.children,
          className = _props.className;

      var layout = void 0;
      var parsedChildren = this.parseChildren(children);
      var checkedList = this.getCheckedList(children);
      var unselected = checkedList.length === 0;
      if (open) layout = 'open';else if (!open && !unselected) layout = 'selected';else layout = 'unselected';
      return _react2.default.createElement(
        _SelectMultiple.FieldContainer,
        null,
        _react2.default.createElement(
          _SelectMultiple.Label,
          { layout: layout },
          'Select Multiple'
        ),
        _react2.default.createElement(
          _Util.ClickOutside,
          { onOutsideClick: this.handleClose },
          _react2.default.createElement(
            _react.Fragment,
            null,
            _react2.default.createElement(
              _Helpers.TooltipBox,
              {
                mount: 'top',
                show: checkedList.length !== 0,
                content: _react2.default.createElement(
                  _SelectMultiple.Tooltip,
                  null,
                  checkedList.join(', ')
                )
              },
              _react2.default.createElement(
                _SelectMultiple.FieldBox,
                { onClick: this.handleOpenToogle, layout: layout, className: className },
                _react2.default.createElement(
                  'span',
                  null,
                  checkedList.join(', ')
                )
              )
            ),
            _react2.default.createElement(
              _SelectMultiple.SelectionContainer,
              { open: open },
              _react2.default.createElement(
                _SelectMultiple.CardContent,
                null,
                _react2.default.createElement(
                  _SelectMultiple.SelectHeader,
                  null,
                  _react2.default.createElement(
                    _SelectMultiple.Checkbox,
                    {
                      header: true,
                      id: 'all_checkbox',
                      onChange: this.handleSelectAll,
                      checked: all
                    },
                    'Selecionar todos'
                  ),
                  _react2.default.createElement(
                    _SelectMultiple.SelectCounter,
                    null,
                    checkedList.length,
                    ' selecionados'
                  )
                ),
                _react2.default.createElement(
                  _SelectMultiple.SelectBox,
                  null,
                  parsedChildren
                )
              )
            )
          )
        )
      );
    }
  }]);

  return SelectMultiple;
}(_react.Component);

SelectMultiple.propTypes = {
  children: _propTypes2.default.arrayOf(_propTypes2.default.any).isRequired,
  onChangeAll: _propTypes2.default.func,
  className: _propTypes2.default.string
};

SelectMultiple.defaultProps = {
  onChangeAll: function onChangeAll() {},
  className: null
};

exports.default = SelectMultiple;