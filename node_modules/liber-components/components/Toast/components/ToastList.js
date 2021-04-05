"use strict";

require("core-js/modules/web.dom.iterable");

require("core-js/modules/es6.array.iterator");

require("core-js/modules/es6.object.to-string");

require("core-js/modules/es6.string.iterator");

require("core-js/modules/es6.weak-map");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = exports.ToastList = void 0;

require("core-js/modules/es7.symbol.async-iterator");

require("core-js/modules/es6.symbol");

require("core-js/modules/es6.object.define-property");

require("core-js/modules/es6.object.create");

require("core-js/modules/es6.object.set-prototype-of");

require("core-js/modules/es6.array.map");

var _react = _interopRequireWildcard(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _reactDom = _interopRequireDefault(require("react-dom"));

var _reactRedux = require("react-redux");

var _Toast = _interopRequireDefault(require("./Toast"));

var _Toast2 = require("./Toast.styles");

var _actions = require("../actions");

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

var ToastList =
/*#__PURE__*/
function (_Component) {
  _inherits(ToastList, _Component);

  function ToastList() {
    _classCallCheck(this, ToastList);

    return _possibleConstructorReturn(this, _getPrototypeOf(ToastList).apply(this, arguments));
  }

  _createClass(ToastList, [{
    key: "render",
    value: function render() {
      var _this$props = this.props,
          toasts = _this$props.toasts,
          close = _this$props.close,
          remove = _this$props.remove,
          autoClose = _this$props.autoClose,
          onTop = _this$props.onTop,
          customWidth = _this$props.customWidth;
      var parsedToasts = onTop ? toasts.asMutable().reverse() : toasts;

      var container = _react["default"].createElement(_Toast2.Container, {
        customWidth: customWidth
      }, parsedToasts.map(function (toast) {
        return toast.message ? _react["default"].createElement(_Toast["default"], {
          duration: toast.duration || autoClose,
          id: toast.id,
          key: toast.id,
          type: toast.type,
          onClose: close,
          onExited: remove,
          show: toast.show,
          info: toast.info,
          content: toast.content,
          customWidth: customWidth
        }, toast.message) : null;
      }));

      return _reactDom["default"].createPortal(toasts.length === 0 ? null : container, document.getElementById('toast'));
    }
  }]);

  return ToastList;
}(_react.Component);

exports.ToastList = ToastList;
ToastList.propTypes = {
  toasts: _propTypes["default"].arrayOf(_propTypes["default"].any).isRequired,
  close: _propTypes["default"].func.isRequired,
  remove: _propTypes["default"].func.isRequired,
  autoClose: _propTypes["default"].number,
  onTop: _propTypes["default"].bool
};
ToastList.defaultProps = {
  autoClose: 0,
  onTop: false
};
var mapDispatchToProps = {
  close: _actions.closeToast,
  remove: _actions.removeToast
};

var mapStateToProps = function mapStateToProps(state) {
  return {
    toasts: state.toasts
  };
};

var _default = (0, _reactRedux.connect)(mapStateToProps, mapDispatchToProps)(ToastList);

exports["default"] = _default;