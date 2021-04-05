'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _reactTransitionGroup = require('react-transition-group');

var _ClickOutside = require('../Util/ClickOutside');

var _ClickOutside2 = _interopRequireDefault(_ClickOutside);

var _styles = require('./styles');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var DropDown = function (_Component) {
  _inherits(DropDown, _Component);

  function DropDown(props) {
    _classCallCheck(this, DropDown);

    var _this = _possibleConstructorReturn(this, (DropDown.__proto__ || Object.getPrototypeOf(DropDown)).call(this));

    _initialiseProps.call(_this);

    var children = props.children,
        defaultValue = props.defaultValue;

    var value = void 0;
    var label = void 0;
    if (defaultValue) {
      value = defaultValue;
      label = _this.labelLookUp(value, children);
    } else {
      value = children[0].props.value || children[0].props.children;
      label = children[0].props.children;
    }
    _this.state = {
      open: false,
      label: label
    };
    return _this;
  }

  _createClass(DropDown, [{
    key: 'componentWillReceiveProps',
    value: function componentWillReceiveProps(nextProps) {
      if (nextProps.value) {
        this.setState({ label: this.labelLookUp(nextProps.value, nextProps.children) });
      }
    }
  }, {
    key: 'render',
    value: function render() {
      var _this2 = this;

      var _props = this.props,
          children = _props.children,
          position = _props.position;
      var _state = this.state,
          label = _state.label,
          open = _state.open;

      var clones = children.map(function (child) {
        var childLabel = child.props.children;
        var value = child.props.value || childLabel;
        var action = child.props.hasAction || false;
        return (0, _react.cloneElement)(child, {
          key: childLabel,
          selected: childLabel === label,
          onClick: child.props.disabled || childLabel === label && !action ? null : function () {
            _this2.handleSelectOption(childLabel, value);
          }
        });
      });
      var opacity = {
        entering: '0',
        entered: '1'
      };
      var scaleY = {
        entering: '0.7',
        entered: '1'
      };
      return _react2.default.createElement(
        _styles.Box,
        null,
        _react2.default.createElement(
          _styles.Button,
          { onMouseDown: this.handleOpenClose },
          this.state.label
        ),
        _react2.default.createElement(
          'div',
          null,
          _react2.default.createElement(
            _reactTransitionGroup.Transition,
            { mountOnEnter: true, unmountOnExit: true, 'in': open, timeout: 100 },
            function (state) {
              return _react2.default.createElement(
                _ClickOutside2.default,
                { onOutsideClick: function onOutsideClick() {
                    _this2.setState({ open: false });
                  } },
                _react2.default.createElement(
                  _styles.List,
                  {
                    opacity: opacity[state],
                    scaleY: scaleY[state],
                    position: position
                  },
                  _this2.props.label ? _react2.default.createElement(
                    _styles.Label,
                    null,
                    _this2.props.label
                  ) : null,
                  clones
                )
              );
            }
          )
        )
      );
    }
  }]);

  return DropDown;
}(_react.Component);

var _initialiseProps = function _initialiseProps() {
  var _this3 = this;

  this.labelLookUp = function (value, children) {
    var label = null;
    _react2.default.Children.toArray(children).forEach(function (child) {
      if (child.props.value === value || child.props.children === value) {
        label = child.props.children;
      }
    });
    return label;
  };

  this.handleSelectOption = function (label, value) {
    _this3.setState({ label: label, open: false }, function () {
      _this3.props.onSelect(value);
    });
  };

  this.handleOpenClose = function () {
    _this3.setState(function (state) {
      return {
        open: !state.open
      };
    });
  };
};

DropDown.propTypes = {
  children: _propTypes2.default.arrayOf(_propTypes2.default.element).isRequired,
  label: _propTypes2.default.string,
  onSelect: _propTypes2.default.func,
  position: _propTypes2.default.string,
  defaultValue: _propTypes2.default.oneOfType([_propTypes2.default.string, _propTypes2.default.number]),
  value: _propTypes2.default.oneOfType([_propTypes2.default.string, _propTypes2.default.number])
};

DropDown.defaultProps = {
  label: undefined,
  onSelect: function onSelect() {},
  defaultValue: null,
  value: null,
  position: null
};

exports.default = DropDown;