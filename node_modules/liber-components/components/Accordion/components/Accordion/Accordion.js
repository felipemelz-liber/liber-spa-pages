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

require("core-js/modules/es6.object.define-property");

require("core-js/modules/es6.object.create");

require("core-js/modules/es6.object.set-prototype-of");

var _react = _interopRequireWildcard(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _Util = require("../../../Util");

var _styles = require("./styles");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function _getRequireWildcardCache() { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; if (obj != null) { var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

var Accordion =
/*#__PURE__*/
function (_Component) {
  _inherits(Accordion, _Component);

  function Accordion(props) {
    var _this;

    _classCallCheck(this, Accordion);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(Accordion).call(this, props));

    _this.handleChange = function () {
      var _this$props = _this.props,
          fixedSize = _this$props.fixedSize,
          maxSize = _this$props.maxSize;

      if (_this.box && !fixedSize) {
        var _this$box$getBounding = _this.box.getBoundingClientRect(),
            height = _this$box$getBounding.height;

        _this.boxSize = "".concat(height, "px");
      } else {
        _this.boxSize = "".concat(maxSize, "px");
      }

      _this.forceUpdate();
    };

    _this.state = {
      open: props.open
    };
    return _this;
  }

  _createClass(Accordion, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      if (this.box) {
        var _this$box$getBounding2 = this.box.getBoundingClientRect(),
            height = _this$box$getBounding2.height;

        this.boxSize = "".concat(height, "px");
      } else {
        this.boxSize = '9999px';
      }
    }
  }, {
    key: "componentDidUpdate",
    value: function componentDidUpdate(oldProps) {
      var newProps = this.props;

      if (newProps.open !== null && newProps.open !== undefined) {
        if (oldProps.open !== newProps.open) {
          if (newProps.open !== this.state.open) {
            this.setState(function (prevState) {
              return {
                open: !prevState.open
              };
            }); // eslint-disable-line
          }
        }
      }
    }
  }, {
    key: "render",
    value: function render() {
      var _this2 = this;

      var _this$props2 = this.props,
          className = _this$props2.className,
          children = _this$props2.children,
          label = _this$props2.label,
          headerColor = _this$props2.headerColor,
          maxSize = _this$props2.maxSize;
      var open = this.state.open;
      return _react["default"].createElement(_styles.AccordionBox, {
        className: className,
        open: open
      }, _react["default"].createElement(_styles.AccordionAction, {
        color: headerColor,
        open: open,
        onClick: function onClick() {
          _this2.setState({
            open: !open
          });
        }
      }, label), _react["default"].createElement(_styles.ShowBox, {
        open: open,
        size: this.boxSize || "".concat(maxSize, "px")
      }, _react["default"].createElement("div", {
        ref: function ref(el) {
          _this2.box = el;
        }
      }, _react["default"].createElement(_Util.DetectChange, {
        onChange: this.handleChange
      }, children))));
    }
  }]);

  return Accordion;
}(_react.Component);

Accordion.propTypes = {
  className: _propTypes["default"].string,
  children: _propTypes["default"].oneOfType([_propTypes["default"].string, _propTypes["default"].element, _propTypes["default"].arrayOf(_propTypes["default"].element), _propTypes["default"].arrayOf(_propTypes["default"].string)]),
  label: _propTypes["default"].oneOfType([_propTypes["default"].string, _propTypes["default"].element]),
  headerColor: _propTypes["default"].string,
  open: _propTypes["default"].bool,
  fixedSize: _propTypes["default"].bool,
  maxSize: _propTypes["default"].number
};
Accordion.defaultProps = {
  className: '',
  children: '',
  label: '',
  open: false,
  headerColor: '#fff',
  fixedSize: false,
  maxSize: 9999
};
var _default = Accordion;
exports["default"] = _default;