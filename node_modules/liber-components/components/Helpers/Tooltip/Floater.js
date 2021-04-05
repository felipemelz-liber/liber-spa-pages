"use strict";

require("core-js/modules/es6.object.define-property");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

require("core-js/modules/es7.symbol.async-iterator");

require("core-js/modules/es6.symbol");

require("core-js/modules/es6.object.create");

require("core-js/modules/es6.object.set-prototype-of");

var _react = _interopRequireDefault(require("react"));

var _reactDom = _interopRequireDefault(require("react-dom"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _styles = require("./styles");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

var Floater =
/*#__PURE__*/
function (_React$Component) {
  _inherits(Floater, _React$Component);

  function Floater() {
    var _getPrototypeOf2;

    var _temp, _this;

    _classCallCheck(this, Floater);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _possibleConstructorReturn(_this, (_temp = _this = _possibleConstructorReturn(this, (_getPrototypeOf2 = _getPrototypeOf(Floater)).call.apply(_getPrototypeOf2, [this].concat(args))), _this.handleBlur = function () {
      _this.setState({
        visible: false
      });
    }, _this.handleFocus = function () {
      _this.setState({
        visible: !_this.state.visible
      });
    }, _this.isContentPositionUnset = function () {
      var contentPosition = _this.props.contentPosition;
      return contentPosition === 'unset';
    }, _this.render = function () {
      var _this$props = _this.props,
          children = _this$props.children,
          label = _this$props.label,
          show = _this$props.show,
          position = _this$props.position,
          mousePadding = _this$props.mousePadding,
          mount = _this$props.mount,
          contentPosition = _this$props.contentPosition;
      return _reactDom["default"].createPortal(_react["default"].createElement(_styles.Float, {
        visible: show,
        position: _this.isContentPositionUnset() ? "mouse-".concat(mount) : "content-".concat(mount),
        x: "".concat(position.x ? position.x + window.scrollX : 0, "px"),
        y: "".concat(position.y ? position.y + window.scrollY : 0, "px"),
        mousePadding: mousePadding > 13 ? mousePadding : 13,
        hoverable: show,
        contentPosition: contentPosition
      }, _react["default"].createElement(_styles.Arrow, {
        mount: mount,
        contentPosition: contentPosition
      }), label.length > 0 ? _react["default"].createElement("h6", null, label) : null, _react["default"].createElement("div", null, children)), document.getElementById('tooltip'));
    }, _temp));
  }

  return Floater;
}(_react["default"].Component);

Floater.propTypes = {
  children: _propTypes["default"].oneOfType([_propTypes["default"].element, _propTypes["default"].arrayOf(_propTypes["default"].element), _propTypes["default"].string]).isRequired,
  label: _propTypes["default"].string,
  show: _propTypes["default"].bool,
  position: _propTypes["default"].shape({
    x: _propTypes["default"].number,
    y: _propTypes["default"].number
  }),
  mousePadding: _propTypes["default"].number,
  mount: _propTypes["default"].oneOf(['top', 'right', 'left', 'bottom']),
  contentPosition: _propTypes["default"].oneOf(['start', 'middle', 'end', 'unset'])
};
Floater.defaultProps = {
  label: '',
  show: true,
  position: {},
  mousePadding: 40,
  mount: 'right',
  contentPosition: 'unset'
};
var _default = Floater;
exports["default"] = _default;