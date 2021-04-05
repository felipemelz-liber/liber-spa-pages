'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _Util = require('../Util');

var _Util2 = _interopRequireDefault(_Util);

var _styles = require('./styles');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

function validateItem(props, propName, componentName) {
  var children = props[propName];
  if (children.constructor !== Array) {
    children = Array(children);
  }
  children.forEach(function (child) {
    if (child.type !== _styles.NavDropDownItem) {
      return new Error(componentName + ' only accept NavDropDownItem as children.');
    }
    return null;
  });
  return null;
}

var NavDropDown = function (_Component) {
  _inherits(NavDropDown, _Component);

  function NavDropDown() {
    _classCallCheck(this, NavDropDown);

    var _this = _possibleConstructorReturn(this, (NavDropDown.__proto__ || Object.getPrototypeOf(NavDropDown)).call(this));

    _this.handleClick = function () {
      _this.setState(function (prevState) {
        return { show: !prevState.show };
      });
    };

    _this.state = {
      show: false
    };
    return _this;
  }

  _createClass(NavDropDown, [{
    key: 'render',
    value: function render() {
      return _react2.default.createElement(
        'div',
        null,
        _react2.default.createElement(
          _styles.NavLink,
          {
            active: this.props.active,
            onClick: this.handleClick,
            arrow: true
          },
          this.props.label
        ),
        this.state.show ? _react2.default.createElement(
          _Util2.default,
          { onOutsideClick: this.handleClick },
          _react2.default.createElement(
            _styles.NavDropDownMenu,
            null,
            this.props.children
          )
        ) : null
      );
    }
  }]);

  return NavDropDown;
}(_react.Component);

NavDropDown.propTypes = {
  children: validateItem,
  active: _propTypes2.default.bool,
  label: _propTypes2.default.string.isRequired
};
NavDropDown.defaultProps = {
  active: false,
  children: null
};
exports.default = NavDropDown;