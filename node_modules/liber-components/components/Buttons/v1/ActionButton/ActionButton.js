"use strict";

require("core-js/modules/es6.string.iterator");

require("core-js/modules/es6.weak-map");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

require("core-js/modules/es7.symbol.async-iterator");

require("core-js/modules/es6.object.assign");

require("core-js/modules/es6.symbol");

require("core-js/modules/es6.array.index-of");

require("core-js/modules/web.dom.iterable");

require("core-js/modules/es6.array.iterator");

require("core-js/modules/es6.object.to-string");

require("core-js/modules/es6.object.keys");

require("core-js/modules/es6.object.define-property");

require("core-js/modules/es6.object.create");

require("core-js/modules/es6.object.set-prototype-of");

require("core-js/modules/es6.string.link");

var _react = _interopRequireWildcard(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _StyledButtons = require("../StyledButtons");

var _styles = require("./styles");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function _getRequireWildcardCache() { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; if (obj != null) { var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

var ActionButton =
/*#__PURE__*/
function (_Component) {
  _inherits(ActionButton, _Component);

  function ActionButton() {
    var _this;

    _classCallCheck(this, ActionButton);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(ActionButton).call(this));

    _this.handleOnMouseOver = function () {
      _this.setState({
        hover: true
      });
    };

    _this.handleOnMouseLeave = function () {
      _this.setState({
        hover: false
      });
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
    key: "render",
    value: function render() {
      var _this2 = this;

      var _this$props = this.props,
          type = _this$props.type,
          icon = _this$props.icon,
          link = _this$props.link,
          children = _this$props.children,
          props = _objectWithoutProperties(_this$props, ["type", "icon", "link", "children"]);

      var hover = this.state.hover;
      var Button = this.buttonSelection(type, link);
      return _react["default"].createElement(Button, _extends({}, props, {
        onMouseOver: this.handleOnMouseOver,
        onFocus: this.handleOnMouseOver,
        onMouseLeave: this.handleOnMouseLeave,
        onBlur: this.handleOnMouseLeave
      }), _react["default"].createElement(_styles.Icon, {
        hover: hover
      }, icon), _react["default"].createElement(_styles.Label, {
        hover: hover,
        ref: function ref(el) {
          _this2.label = el;
        },
        size: this.label ? "".concat(this.label.scrollWidth, "px") : '0px'
      }, children));
    }
  }]);

  return ActionButton;
}(_react.Component);

ActionButton.propTypes = {
  icon: _propTypes["default"].element.isRequired,
  children: _propTypes["default"].oneOfType([_propTypes["default"].string, _propTypes["default"].element, _propTypes["default"].number]),
  type: _propTypes["default"].string,
  link: _propTypes["default"].bool
};
ActionButton.defaultProps = {
  children: null,
  type: null,
  link: false
};
var _default = ActionButton;
exports["default"] = _default;