"use strict";

require("core-js/modules/web.dom.iterable");

require("core-js/modules/es6.array.iterator");

require("core-js/modules/es6.object.to-string");

require("core-js/modules/es6.string.iterator");

require("core-js/modules/es6.weak-map");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

require("core-js/modules/es7.symbol.async-iterator");

require("core-js/modules/es6.symbol");

require("core-js/modules/es6.object.assign");

require("core-js/modules/es6.object.define-property");

require("core-js/modules/es6.object.create");

require("core-js/modules/es6.object.set-prototype-of");

var _react = _interopRequireWildcard(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function _getRequireWildcardCache() { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; if (obj != null) { var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

var getStyle = function getStyle() {
  var _window;

  return (_window = window).getComputedStyle.apply(_window, arguments);
};

var Resizable =
/*#__PURE__*/
function (_Component) {
  _inherits(Resizable, _Component);

  function Resizable() {
    var _getPrototypeOf2;

    var _temp, _this;

    _classCallCheck(this, Resizable);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _possibleConstructorReturn(_this, (_temp = _this = _possibleConstructorReturn(this, (_getPrototypeOf2 = _getPrototypeOf(Resizable)).call.apply(_getPrototypeOf2, [this].concat(args))), _this.setResize = function () {
      if (_this.value) {
        _this.defaultFont = parseFloat(getStyle(_this.value).getPropertyValue('--default-font-size')) || _this.defaultFont;

        if (!_this.defaultFont) {
          _this.defaultFont = _this.getFontSize(_this.value);
        }

        if (!_this.defaultSize) {
          _this.defaultSize = _this.getWidth(_this.value, true);
        }

        var parentSize = _this.getWidth(_this.value.parentNode);

        _this.resize(_this.defaultSize, parentSize);
      }
    }, _this.getFontSize = function (element) {
      var fontSize = getStyle(element).getPropertyValue('font-size');
      return parseFloat(fontSize);
    }, _this.getWidth = function (element) {
      var margin = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;
      var computedStyle = getStyle(element);
      var innerWidth;
      var width = parseInt(computedStyle.getPropertyValue('width'), 10) || 0;
      var paddingLeft = parseInt(computedStyle.getPropertyValue('padding-left'), 10) || 0;
      var paddingRight = parseInt(computedStyle.getPropertyValue('padding-right'), 10) || 0;
      var marginLeft = parseInt(computedStyle.getPropertyValue('margin-left'), 10) || 0;
      var marginRight = parseInt(computedStyle.getPropertyValue('margin-right'), 10) || 0;
      var borderLeft = parseInt(computedStyle.getPropertyValue('border-left-width'), 10) || 0;
      var borderRight = parseInt(computedStyle.getPropertyValue('border-right-width'), 10) || 0;
      var parentBoxSizing = computedStyle.getPropertyValue('box-sizing');

      if (parentBoxSizing === 'border-box') {
        innerWidth = width - (paddingLeft + paddingRight + borderLeft + borderRight);
      } else {
        innerWidth = width;
      }

      if (margin) {
        innerWidth = innerWidth + marginLeft + marginRight;
      }

      return innerWidth === 0 ? element.offsetWidth : innerWidth;
    }, _this.resize = function (valueSize, parentSize) {
      var proportion = parentSize / valueSize;
      var newFontSize;

      if (proportion <= 1) {
        newFontSize = "".concat(_this.defaultFont * proportion - 3, "px");
      } else {
        newFontSize = "".concat(_this.defaultFont, "px");
      }

      _this.value.style.fontSize = newFontSize;
    }, _temp));
  }

  _createClass(Resizable, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      window.addEventListener('resize', this.setResize);
      this.setResize();
    }
  }, {
    key: "componentWillReceiveProps",
    value: function componentWillReceiveProps(nextProps) {
      if (nextProps.children !== this.props.children) {
        this.value.style.fontSize = "".concat(this.defaultFont, "px");
        this.defaultSize = null;
      }
    }
  }, {
    key: "componentDidUpdate",
    value: function componentDidUpdate(oldProps) {
      var _this2 = this;

      var newProps = this.props;
      this.wait = setTimeout(function () {
        _this2.setResize();
      }, 100);

      if (newProps.children !== oldProps.children) {
        this.value.style.fontSize = "".concat(this.defaultFont, "px");
        this.defaultSize = null;
      }
    }
  }, {
    key: "componentWillUnmount",
    value: function componentWillUnmount() {
      window.removeEventListener('resize', this.setResize);
    }
  }, {
    key: "render",
    value: function render() {
      var _this3 = this;

      return _react["default"].createElement("div", _extends({}, this.props, {
        ref: function ref(el) {
          _this3.value = el;
        }
      }));
    }
  }]);

  return Resizable;
}(_react.Component);

Resizable.propTypes = {
  children: _propTypes["default"].oneOfType([_propTypes["default"].any]).isRequired
};
var _default = Resizable;
exports["default"] = _default;