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

require("core-js/modules/es6.array.map");

var _react = _interopRequireWildcard(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _lodash = _interopRequireDefault(require("lodash"));

var _reactEasySwipe = _interopRequireDefault(require("react-easy-swipe"));

var _Carousel = require("./Carousel.styles");

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

var Carousel =
/*#__PURE__*/
function (_Component) {
  _inherits(Carousel, _Component);

  function Carousel(props) {
    var _this;

    _classCallCheck(this, Carousel);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(Carousel).call(this, props));

    _this.startInterval = function () {
      var _this$props = _this.props,
          loop = _this$props.loop,
          loopTime = _this$props.loopTime,
          loopLeft = _this$props.loopLeft;

      if (loop) {
        _this.interval = setInterval(loopLeft ? _this.handlePrev : _this.handleNext, loopTime);
      }
    };

    _this.removeInterval = function () {
      if (_this.interval) clearInterval(_this.interval);
    };

    _this.handleDotClick = function (_ref) {
      var target = _ref.target;
      var index = target.getAttribute('data-index');

      _this.removeInterval();

      _this.setState({
        index: parseInt(index, 10)
      }, _this.startInterval);
    };

    _this.handleActionNext = function () {
      _this.removeInterval();

      _this.handleNext({}, _this.startInterval);
    };

    _this.handleActionPrev = function () {
      _this.removeInterval();

      _this.handlePrev({}, _this.startInterval);
    };

    _this.handleNext = function (event, callback) {
      _this.setState(function (state) {
        return {
          index: state.index + 1 >= state.size ? 0 : state.index + 1
        };
      }, callback);
    };

    _this.handlePrev = function (event, callback) {
      _this.setState(function (state) {
        return {
          index: state.index - 1 <= -1 ? state.size - 1 : state.index - 1
        };
      }, callback);
    };

    _this.state = {
      index: 0,
      size: _react["default"].Children.toArray(props.children).length // eslint-disable-line

    };
    return _this;
  }

  _createClass(Carousel, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      this.startInterval();
    }
  }, {
    key: "componentWillUnmount",
    value: function componentWillUnmount() {
      if (this.interval) clearInterval(this.interval);
    }
  }, {
    key: "render",
    value: function render() {
      var _this2 = this;

      var _this$props2 = this.props,
          width = _this$props2.width,
          height = _this$props2.height,
          children = _this$props2.children,
          innerDots = _this$props2.innerDots;
      var index = this.state.index;
      var Dot = this.props.dot;
      var Left = this.props.leftArrow;
      var Right = this.props.rightArrow;

      var dots = _react["default"].Children.toArray(children).map(function (child, i) {
        return _react["default"].createElement(Dot, {
          "data-index": i,
          key: _lodash["default"].uniqueId('carousel_child_'),
          current: index === i,
          onClick: _this2.handleDotClick
        });
      });

      var dotsContainer = _react["default"].createElement(_Carousel.DotsContainer, {
        inner: innerDots
      }, dots);

      return _react["default"].createElement(_Carousel.Body, null, _react["default"].createElement(_reactEasySwipe["default"], {
        onSwipeRight: this.handleActionPrev,
        onSwipeLeft: this.handleActionNext
      }, _react["default"].createElement(_Carousel.Hidden, {
        width: width,
        height: height,
        onMouseEnter: this.removeInterval,
        onMouseLeave: this.startInterval
      }, _react["default"].createElement(_Carousel.Carousels, {
        size: width,
        index: index
      }, children), _react["default"].createElement(Left, {
        onClick: this.handlePrev
      }), innerDots ? dotsContainer : null, _react["default"].createElement(Right, {
        onClick: this.handleNext
      }))), !innerDots ? dotsContainer : null);
    }
  }], [{
    key: "getDerivedStateFromProps",
    value: function getDerivedStateFromProps(props, state) {
      var size = _react["default"].Children.toArray(props.children).length;

      if (state.size !== size) {
        return {
          size: size
        };
      }

      return {};
    }
  }]);

  return Carousel;
}(_react.Component);

Carousel.propTypes = {
  children: _propTypes["default"].arrayOf(_propTypes["default"].element).isRequired,
  width: _propTypes["default"].number,
  height: _propTypes["default"].number,
  dot: _propTypes["default"].oneOfType([_propTypes["default"].any]),
  leftArrow: _propTypes["default"].oneOfType([_propTypes["default"].any]),
  rightArrow: _propTypes["default"].oneOfType([_propTypes["default"].any]),
  innerDots: _propTypes["default"].bool,
  loop: _propTypes["default"].bool,
  loopTime: _propTypes["default"].number,
  loopLeft: _propTypes["default"].bool
};
Carousel.defaultProps = {
  width: 1200,
  height: 300,
  dot: _Carousel.Dot,
  leftArrow: _Carousel.LeftChavron,
  rightArrow: _Carousel.RightChavron,
  innerDots: true,
  loop: false,
  loopTime: 4000,
  loopLeft: false
};
var _default = Carousel;
exports["default"] = _default;