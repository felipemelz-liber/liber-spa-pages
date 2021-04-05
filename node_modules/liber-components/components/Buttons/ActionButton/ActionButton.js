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

var _StyledButtons = require('../StyledButtons');

var _styles = require('./styles');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var ActionButton = function (_Component) {
  _inherits(ActionButton, _Component);

  function ActionButton() {
    _classCallCheck(this, ActionButton);

    var _this = _possibleConstructorReturn(this, (ActionButton.__proto__ || Object.getPrototypeOf(ActionButton)).call(this));

    _this.handleOnMouseOver = function () {
      _this.setState({ hover: true });
    };

    _this.handleOnMouseLeave = function () {
      _this.setState({ hover: false });
    };

    _this.buttonSelection = function (type, link) {
      switch (type) {
        case 'success':
          return link ? _StyledButtons.SuccessLink : _StyledButtons.SuccessButton;
        case 'secondary':
          return link ? _StyledButtons.SecondaryLink : _StyledButtons.SecondaryButton;
        case 'primary':
          return link ? _StyledButtons.PrimaryLink : _StyledButtons.PrimaryButton;
        default:
          return link ? _StyledButtons.Link : _StyledButtons.Button;
      }
    };

    _this.state = {
      hover: false
    };
    return _this;
  }

  _createClass(ActionButton, [{
    key: 'render',
    value: function render() {
      var _this2 = this;

      var _props = this.props,
          type = _props.type,
          icon = _props.icon,
          link = _props.link,
          children = _props.children,
          props = _objectWithoutProperties(_props, ['type', 'icon', 'link', 'children']);

      var hover = this.state.hover;

      var Button = this.buttonSelection(type, link);
      return _react2.default.createElement(
        Button,
        _extends({}, props, {
          onMouseOver: this.handleOnMouseOver,
          onFocus: this.handleOnMouseOver,
          onMouseLeave: this.handleOnMouseLeave,
          onBlur: this.handleOnMouseLeave

        }),
        _react2.default.createElement(
          _styles.Icon,
          { hover: hover },
          icon
        ),
        _react2.default.createElement(
          _styles.Label,
          {
            hover: hover,
            ref: function ref(el) {
              _this2.label = el;
            },
            size: this.label ? this.label.scrollWidth + 'px' : '0px'
          },
          children
        )
      );
    }
  }]);

  return ActionButton;
}(_react.Component);

ActionButton.propTypes = {
  icon: _propTypes2.default.element.isRequired,
  children: _propTypes2.default.oneOfType([_propTypes2.default.string, _propTypes2.default.element, _propTypes2.default.number]),
  type: _propTypes2.default.string,
  link: _propTypes2.default.bool
};

ActionButton.defaultProps = {
  children: null,
  type: null,
  link: false
};

exports.default = ActionButton;