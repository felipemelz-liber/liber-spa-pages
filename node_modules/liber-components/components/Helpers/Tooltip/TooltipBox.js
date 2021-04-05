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

require("core-js/modules/es6.string.fixed");

var _react = _interopRequireWildcard(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _Tooltip = _interopRequireDefault(require("./Tooltip"));

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

var TooltipBox =
/*#__PURE__*/
function (_Component) {
  _inherits(TooltipBox, _Component);

  function TooltipBox() {
    var _getPrototypeOf2;

    var _temp, _this;

    _classCallCheck(this, TooltipBox);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _possibleConstructorReturn(_this, (_temp = _this = _possibleConstructorReturn(this, (_getPrototypeOf2 = _getPrototypeOf(TooltipBox)).call.apply(_getPrototypeOf2, [this].concat(args))), _this.state = {
      showTooltip: false,
      position: {
        x: null,
        y: null
      }
    }, _this.setPosition = function (x, y, action, event) {
      var _this$props = _this.props,
          delay = _this$props.delay,
          delayTime = _this$props.delayTime;
      _this.timeout = setTimeout(function () {
        _this.setState({
          showTooltip: true,
          position: {
            x: x,
            y: y
          }
        });
      }, delay ? delayTime : 0);

      if (action) {
        action(event);
      }
    }, _this.handleMouseMove = function (move, event) {
      _this.setPosition(event.clientX, event.clientY, move, event);
    }, _this.handleMouseEnter = function (enter, event) {
      var mount = _this.props.mount;
      var targetNode = _this.child;
      var computedStyle = window.getComputedStyle(targetNode);
      var width = parseInt(computedStyle.getPropertyValue('width'), 10) || 0;
      var height = parseInt(computedStyle.getPropertyValue('height'), 10) || 0;
      var viewportOffset = targetNode.getBoundingClientRect();
      var top = viewportOffset.top;
      var left = viewportOffset.left;
      var x;
      var y;

      switch (mount) {
        case 'left':
          x = left;
          y = top + height / 2;
          break;

        case 'right':
          x = left + width;
          y = top + height / 2;
          break;

        case 'top':
          x = left + width / 2;
          y = top;
          break;

        case 'bottom':
          x = left + width / 2;
          y = top + height;
          break;

        default:
          x = left + width / 2;
          y = top + height / 2;
          break;
      }

      _this.setPosition(x, y, enter, event);
    }, _this.handleMouseLeave = function (leave, event) {
      clearTimeout(_this.timeout);

      _this.setState({
        showTooltip: false,
        position: {}
      }, function () {
        if (leave) leave(event);
      });
    }, _temp));
  }

  _createClass(TooltipBox, [{
    key: "componentWillUnmount",
    value: function componentWillUnmount() {
      clearTimeout(this.timeout);
    }
  }, {
    key: "render",
    value: function render() {
      var _this2 = this;

      var _this$state = this.state,
          showTooltip = _this$state.showTooltip,
          position = _this$state.position;
      var _this$props2 = this.props,
          show = _this$props2.show,
          content = _this$props2.content,
          label = _this$props2.label,
          mount = _this$props2.mount,
          fixed = _this$props2.fixed,
          mousePadding = _this$props2.mousePadding,
          contentPosition = _this$props2.contentPosition;

      var children = _react["default"].Children.only(this.props.children);

      var props = {
        ref: function ref(el) {
          _this2.child = el;
        },
        onMouseMove: !fixed ? function (event) {
          _this2.handleMouseMove(children.props.onMouseMove, event);
        } : null,
        onMouseEnter: fixed ? function (event) {
          _this2.handleMouseEnter(children.props.onMouseEnter, event);
        } : null,
        onMouseLeave: function onMouseLeave(event) {
          _this2.handleMouseLeave(children.props.onMouseLeave, event);
        }
      };

      var clone = _react["default"].cloneElement(children, props);

      return _react["default"].createElement(_react.Fragment, null, showTooltip && show ? _react["default"].createElement(_Tooltip["default"], {
        type: "floater",
        show: showTooltip && show,
        position: position,
        label: label,
        mount: mount,
        contentPosition: contentPosition,
        mousePadding: mousePadding
      }, content) : null, clone);
    }
  }]);

  return TooltipBox;
}(_react.Component);

TooltipBox.propTypes = {
  children: _propTypes["default"].oneOfType([_propTypes["default"].any]).isRequired,
  content: _propTypes["default"].oneOfType([_propTypes["default"].any]).isRequired,
  show: _propTypes["default"].bool,
  mount: _propTypes["default"].oneOf(['top', 'right', 'left', 'bottom']),
  fixed: _propTypes["default"].bool,
  label: _propTypes["default"].oneOfType([_propTypes["default"].string, _propTypes["default"].shape({
    text: _propTypes["default"].string,
    color: _propTypes["default"].string
  })]),
  delay: _propTypes["default"].bool,
  delayTime: _propTypes["default"].number,
  mousePadding: _propTypes["default"].number,
  contentPosition: _propTypes["default"].oneOf(['start', 'middle', 'end', 'unset'])
};
TooltipBox.defaultProps = {
  show: true,
  mount: 'right',
  contentPosition: 'unset',
  label: '',
  fixed: false,
  delay: false,
  delayTime: 1500,
  mousePadding: null
};
var _default = TooltipBox;
exports["default"] = _default;