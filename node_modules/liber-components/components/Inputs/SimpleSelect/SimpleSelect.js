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

var _reactInnertext = require('react-innertext');

var _reactInnertext2 = _interopRequireDefault(_reactInnertext);

var _DropDown = require('../../DropDown');

var _SimpleSelect = require('./SimpleSelect.styles');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var SimpleSelect = function (_Component) {
  _inherits(SimpleSelect, _Component);

  function SimpleSelect(props) {
    _classCallCheck(this, SimpleSelect);

    var _this = _possibleConstructorReturn(this, (SimpleSelect.__proto__ || Object.getPrototypeOf(SimpleSelect)).call(this, props));

    _this.makeSelection = function () {
      for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
        args[_key] = arguments[_key];
      }

      return function () {
        var onSelect = _this.props.onSelect;

        if (_this.dropdown) _this.dropdown.close();
        onSelect.apply(undefined, args);
      };
    };

    _this.handleOptionSelection = function (value, label) {
      return function () {
        console.log(value);
        _this.setState({
          value: value, label: label
        }, _this.makeSelection(value, label));
      };
    };

    _this.mappingOption = function (currentValue) {
      return function (child) {
        var label = (0, _reactInnertext2.default)(child);
        var value = child.props.value || label.toLowerCase();
        return _react2.default.createElement(_SimpleSelect.Option, _extends({
          key: value
        }, child.props, {
          label: label,
          value: value,
          active: value === currentValue,
          onClick: _this.handleOptionSelection(value, label)
        }));
      };
    };

    _this.dropDownRef = function (element) {
      _this.dropdown = element;
    };

    _this.state = {
      value: '',
      label: ''
    };
    return _this;
  }

  _createClass(SimpleSelect, [{
    key: 'render',
    value: function render() {
      var _state = this.state,
          value = _state.value,
          label = _state.label;

      var _props = this.props,
          children = _props.children,
          props = _objectWithoutProperties(_props, ['children']);

      return _react2.default.createElement(
        _SimpleSelect.Container,
        null,
        _react2.default.createElement(
          _DropDown.SimpleDropDown,
          {
            ref: this.dropDownRef,
            customButton: _react2.default.createElement(
              _SimpleSelect.DisplayBox,
              props,
              _react2.default.createElement(
                _SimpleSelect.ValueBox,
                null,
                label
              ),
              _react2.default.createElement(_SimpleSelect.Chevron, null)
            )
          },
          _react.Children.toArray(children).map(this.mappingOption(value))
        )
      );
    }
  }], [{
    key: 'getDerivedStateFromProps',
    value: function getDerivedStateFromProps(props, state) {
      if (props.value !== null) {
        var selected = _react.Children.toArray(props.children).find(function (child) {
          return child.props.value === props.value;
        });
        if (selected) {
          return {
            value: props.value,
            label: (0, _reactInnertext2.default)(selected)
          };
        }
      }
      return state;
    }
  }]);

  return SimpleSelect;
}(_react.Component);

SimpleSelect.propTypes = {
  children: _propTypes2.default.oneOfType([_propTypes2.default.node, _propTypes2.default.arrayOf(_propTypes2.default.node)]),
  value: _propTypes2.default.string,
  onSelect: _propTypes2.default.func
};

SimpleSelect.defaultProps = {
  value: null,
  children: [],
  onSelect: function onSelect() {}
};

exports.default = SimpleSelect;