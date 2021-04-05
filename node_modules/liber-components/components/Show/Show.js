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

var _reactTransitionGroup = require("react-transition-group");

var _SimpleAnime = _interopRequireDefault(require("../SimpleAnime"));

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

var Show =
/*#__PURE__*/
function (_Component) {
  _inherits(Show, _Component);

  function Show() {
    var _this;

    _classCallCheck(this, Show);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(Show).call(this));
    _this.state = {
      transition_ended: false
    };
    return _this;
  }

  _createClass(Show, [{
    key: "render",
    value: function render() {
      var _this2 = this;

      var _this$props = this.props,
          children = _this$props.children,
          enter = _this$props.enter,
          exit = _this$props.exit,
          timeout = _this$props.timeout;

      if ((!this.state.transition_ended || this.props["in"]) && children !== null && children !== undefined) {
        return _react["default"].createElement(_reactTransitionGroup.Transition, {
          onExited: function onExited() {
            setTimeout(function () {
              _this2.setState({
                transition_ended: true
              });
            }, timeout + 50);
          },
          mountOnEnter: true,
          timeout: timeout,
          "in": this.props["in"]
        }, function (state) {
          if (state === 'entering') return null;

          if (state === 'entered' && enter) {
            return _react["default"].createElement(_SimpleAnime["default"], {
              opacity: [0, 1],
              duration: timeout,
              translateX: ['-50px', '0px'],
              easing: "easeOutElastic"
            }, _react["default"].createElement("div", null, children));
          }

          if (state === 'exited' && exit) {
            return _react["default"].createElement(_SimpleAnime["default"], {
              opacity: [1, 0],
              duration: timeout,
              translateX: ['0px', '-50px'],
              easing: "easeInElastic"
            }, _react["default"].createElement("div", null, children));
          }

          return children;
        });
      }

      return null;
    }
  }], [{
    key: "getDerivedStateFromProps",
    value: function getDerivedStateFromProps() {
      return {
        transition_ended: false
      };
    }
  }]);

  return Show;
}(_react.Component);

Show.propTypes = {
  children: _propTypes["default"].element.isRequired,
  "in": _propTypes["default"].bool.isRequired,
  enter: _propTypes["default"].bool,
  exit: _propTypes["default"].bool,
  timeout: _propTypes["default"].number
};
Show.defaultProps = {
  enter: true,
  exit: true,
  timeout: 500
};
var _default = Show;
exports["default"] = _default;