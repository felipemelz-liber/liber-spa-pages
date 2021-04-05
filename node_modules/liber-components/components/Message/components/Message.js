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

var _Message = require("./Message.styles");

var _Animate = _interopRequireDefault(require("./Animate"));

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

var Message =
/*#__PURE__*/
function (_Component) {
  _inherits(Message, _Component);

  function Message() {
    var _getPrototypeOf2;

    var _temp, _this;

    _classCallCheck(this, Message);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _possibleConstructorReturn(_this, (_temp = _this = _possibleConstructorReturn(this, (_getPrototypeOf2 = _getPrototypeOf(Message)).call.apply(_getPrototypeOf2, [this].concat(args))), _this.close = function () {
      var _this$props = _this.props,
          onClose = _this$props.onClose,
          id = _this$props.id;

      _this.removeTimeout();

      onClose(id);
    }, _this.remove = function () {
      var _this$props2 = _this.props,
          onExited = _this$props2.onExited,
          id = _this$props2.id;
      onExited(id);
    }, _this.removeTimeout = function () {
      if (_this.timeout) {
        clearTimeout(_this.timeout);
      }
    }, _this.startTimeout = function () {
      var duration = _this.props.duration;

      if (duration > 0) {
        _this.timeout = setTimeout(_this.close, duration);
      }
    }, _temp));
  }

  _createClass(Message, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      this.startTimeout();
    }
  }, {
    key: "render",
    value: function render() {
      var _this$props3 = this.props,
          children = _this$props3.children,
          type = _this$props3.type,
          action = _this$props3.action,
          show = _this$props3.show;
      return _react["default"].createElement(_Animate["default"], {
        show: show,
        onExited: this.remove
      }, _react["default"].createElement(_Message.Message, {
        type: type,
        onMouseEnter: this.removeTimeout,
        onMouseLeave: this.startTimeout
      }, _react["default"].createElement(_Message.MsgContent, null, children), action && _react["default"].createElement(_Message.Action, null, action)));
    }
  }]);

  return Message;
}(_react.Component);

Message.propTypes = {
  id: _propTypes["default"].string.isRequired,
  type: _propTypes["default"].string,
  show: _propTypes["default"].bool.isRequired,
  duration: _propTypes["default"].number.isRequired,
  children: _propTypes["default"].oneOfType([_propTypes["default"].any]),
  action: _propTypes["default"].oneOfType([_propTypes["default"].any]),
  onClose: _propTypes["default"].func,
  onExited: _propTypes["default"].func
};
Message.defaultProps = {
  children: '',
  type: null,
  action: null,
  onClose: function onClose() {},
  onExited: function onExited() {}
};
var _default = Message;
exports["default"] = _default;