"use strict";

require("core-js/modules/es6.object.define-property");

require("core-js/modules/web.dom.iterable");

require("core-js/modules/es6.array.iterator");

require("core-js/modules/es6.object.to-string");

require("core-js/modules/es6.object.keys");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

require("core-js/modules/es6.object.assign");

require("core-js/modules/es6.array.index-of");

require("core-js/modules/es7.symbol.async-iterator");

require("core-js/modules/es6.symbol");

require("core-js/modules/es6.object.create");

require("core-js/modules/es6.object.set-prototype-of");

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _Util = require("../../Util");

var _styles = require("./styles");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

var Fixed =
/*#__PURE__*/
function (_React$Component) {
  _inherits(Fixed, _React$Component);

  function Fixed(props) {
    var _this;

    _classCallCheck(this, Fixed);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(Fixed).call(this, props));

    _initialiseProps.call(_assertThisInitialized(_this));

    _this.state = {
      visible: false
    };
    return _this;
  }

  return Fixed;
}(_react["default"].Component);

var _initialiseProps = function _initialiseProps() {
  var _this2 = this;

  this.handleClick = function () {
    _this2.setState({
      visible: !_this2.state.visible
    });
  };

  this.handleBlur = function () {
    _this2.setState({
      visible: false
    });
  };

  this.handleFocus = function () {
    _this2.setState({
      visible: true
    });
  };

  this.render = function () {
    var _this2$props = _this2.props,
        children = _this2$props.children,
        hoverable = _this2$props.hoverable,
        label = _this2$props.label,
        position = _this2$props.position,
        contentPosition = _this2$props.contentPosition,
        props = _objectWithoutProperties(_this2$props, ["children", "hoverable", "label", "position", "contentPosition"]);

    var visible = _this2.state.visible;
    return _react["default"].createElement(_Util.ClickOutside, {
      onOutsideClick: _this2.handleBlur
    }, _react["default"].createElement(_styles.Container, _extends({
      onClick: hoverable ? null : _this2.handleClick,
      onFocus: _this2.handleFocus,
      onBlur: _this2.handleBlur,
      onMouseOver: hoverable ? _this2.handleFocus : null,
      onMouseLeave: hoverable ? _this2.handleBlur : null
    }, props), _react["default"].createElement(_styles.Icon, null), _react["default"].createElement(_styles.Float, {
      visible: visible,
      position: position,
      hoverable: hoverable,
      contentPosition: contentPosition
    }, _react["default"].createElement("h6", null, label), _react["default"].createElement("div", null, children))));
  };
};

Fixed.propTypes = {
  children: _propTypes["default"].oneOfType([_propTypes["default"].element, _propTypes["default"].arrayOf(_propTypes["default"].element)]).isRequired,
  hoverable: _propTypes["default"].bool,
  label: _propTypes["default"].string,
  position: _propTypes["default"].string,
  contentPosition: _propTypes["default"].oneOf(['start', 'middle', 'end', 'unset'])
};
Fixed.defaultProps = {
  hoverable: false,
  label: '',
  position: 'top-center',
  contentPosition: 'unset'
};
var _default = Fixed;
exports["default"] = _default;