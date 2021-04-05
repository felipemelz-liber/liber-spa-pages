'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _lodash = require('lodash');

var _lodash2 = _interopRequireDefault(_lodash);

var _reactTransitionGroup = require('react-transition-group');

var _ClickOutside = require('../Util/ClickOutside');

var _ClickOutside2 = _interopRequireDefault(_ClickOutside);

var _styles = require('./styles');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var DropDownMenu = function (_Component) {
  _inherits(DropDownMenu, _Component);

  function DropDownMenu(props) {
    _classCallCheck(this, DropDownMenu);

    var _this = _possibleConstructorReturn(this, (DropDownMenu.__proto__ || Object.getPrototypeOf(DropDownMenu)).call(this, props));

    _this.handleClickOption = function () {
      _this.setState({ open: false });
    };

    _this.handleOpenClose = function () {
      _this.setState({ open: !_this.state.open });
    };

    _this.state = {
      open: false
    };
    return _this;
  }

  _createClass(DropDownMenu, [{
    key: 'render',
    value: function render() {
      var _this2 = this;

      var _props = this.props,
          children = _props.children,
          position = _props.position;
      var open = this.state.open;

      var clones = children.map(function (child) {
        return (0, _react.cloneElement)(child, {
          key: _lodash2.default.uniqueId(),
          onClick: function onClick() {
            _this2.handleClickOption();
            if (child.props && typeof child.props.onClick === 'function') {
              child.props.onClick();
            }
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
          _styles.ButtonMenu,
          { onMouseDown: this.handleOpenClose },
          _react2.default.createElement(_styles.Icon, null)
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

  return DropDownMenu;
}(_react.Component);

DropDownMenu.propTypes = {
  children: _propTypes2.default.arrayOf(_propTypes2.default.element).isRequired,
  label: _propTypes2.default.string,
  position: _propTypes2.default.string
};

DropDownMenu.defaultProps = {
  label: undefined,
  position: null
};

exports.default = DropDownMenu;