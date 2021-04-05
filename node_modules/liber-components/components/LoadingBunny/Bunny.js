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

var _animejs = _interopRequireDefault(require("animejs"));

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

var currentAnimation;

var clearCurrentAnimation = function clearCurrentAnimation() {
  if (currentAnimation) currentAnimation.pause();
};

var animate = function animate(path, loop) {
  clearCurrentAnimation();
  currentAnimation = (0, _animejs["default"])({
    targets: path,
    easing: 'linear',
    duration: loop ? 2000 : 1000,
    loop: loop,
    delay: loop ? 1000 : 500,
    strokeDashoffset: function strokeDashoffset(el) {
      var pathLength = 0;

      if (el.getTotalLength) {
        pathLength = el.getTotalLength();
        el.setAttribute('stroke-dasharray', pathLength);
      }

      if (loop) {
        return [2 * pathLength, 0];
      }

      return [pathLength, 0];
    }
  });
};

var Bunny =
/*#__PURE__*/
function (_Component) {
  _inherits(Bunny, _Component);

  function Bunny() {
    _classCallCheck(this, Bunny);

    return _possibleConstructorReturn(this, _getPrototypeOf(Bunny).apply(this, arguments));
  }

  _createClass(Bunny, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      var loop = this.props.loop;
      animate(this.path, loop);
    }
  }, {
    key: "render",
    value: function render() {
      var _this = this;

      var className = this.props.className;
      return _react["default"].createElement("svg", {
        xmlns: "http://www.w3.org/2000/svg",
        viewBox: "0 0 260.92 129.96",
        className: className,
        fill: "transparent",
        stroke: "#009dff"
      }, _react["default"].createElement("path", {
        ref: function ref(element) {
          _this.path = element;
        },
        d: "M86.76,78.72C91.66,64.26,95.2,65,99.19,56.59c3-6.27,5-14-.41-19.41-2.43-2.45-6.56-3.91-9.67 -1.83s-3.46,6.51-1.87,9.6c1.85,3.6,6.06,5.31,9.89,5.69,3.54.35,7.26.94,10.78.24,9.34-1.86, 18.54-5.46,28.19-3.77,14.56,2.54,27.21,11.12,42.42,10.6a47.76,47.76,0,0,0,21.3-5.91c2.85-1.55, 5.73-4.69,4.1-8.19-.93-2-3.22-3.09-5-4.18q-3.47-2.14-7-4.16a180.13,180.13,0,0,0-40.82-17.34c-4.24-1.18-10.63 -2.88-14.4.37-2.85,2.46-3.43,5.93-1.29,9,2,2.8,5.27,4.21,8.35,5.42C158,38.27,174,39.4,189.12,40.8l10.81, 1c3.12.29,6.39.92,9.53.65,4.39-.38,2.7-3.81,1.15-6.49A110.54,110.54,0,0,0,203,24.4c-5.45-7.19 -11.93-13.94-19.73-18.59C177.75,2.5,167.44-2,162.66,4.89S168,16.74,173,18.74c8.74,3.53,17.67, 6.35,26.21,10.39A153,153,0,0,1,224,43.71,121,121,0,0,1,234.8,52.6c3.28,3, 7.19,6.44,8.35,10.95,1,3.85-.41,8.19-4.42,9.55s-8.19-.37-12.21-.66c-3.33-.24-8.47.44-9.17, 4.54-.87,5.15,8.1,4,10.93,3.6,5-.72,9.85-2.28,14.91-2a19.91,19.91,0,0,1,12.08,5.06c5.81,5.37, 6.59,15.51-2.29,18-8.15,2.31-14.57-4-22-6-9.06-2.4-15.76,2.56-23.1,7a18.18,18.18,0,0,1-11.54, 2.6c-4.87-.63-6.95-3.71-10.2-6.91a38.89,38.89,0,0,0-20.57-10.12,48.22,48.22,0,0,0-21.48,1.21c-6.32, 1.83-11.5,5.13-16.52,9.3-5.48,4.55-12.25,9.83-19.45,10.88-4.37.64-8.7-.52-12.87-1.75-5-1.46-9.88-3.06-14.87 -4.39-9.77-2.61-18.92-2.47-28,2.16C44,110,36.91,116.3,29,121.28a49.66,49.66,0,0, 1-13.26,6.24c-3.43.93-10,2.26 -13-.34-3.34-2.91-.28-6.75,2.25-8.78,3.13-2.5,6.93-4,10.64-5.37a98.81, 98.81,0,0,0,24.33-12.88,104.54,104.54,0,0,0,10.64-9.1c3.1-3,6.22-6.12, 10-8.3a20,20,0,0,1,11.51-2.65c3.55.31,6.72,2.26,9.89,3.72"
      }));
    }
  }]);

  return Bunny;
}(_react.Component);

Bunny.propTypes = {
  className: _propTypes["default"].string,
  loop: _propTypes["default"].bool
};
Bunny.defaultProps = {
  className: '',
  loop: false
};
var _default = Bunny;
exports["default"] = _default;