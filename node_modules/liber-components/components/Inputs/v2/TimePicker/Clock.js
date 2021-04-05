"use strict";

require("core-js/modules/es6.weak-map");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

require("core-js/modules/es6.string.iterator");

require("core-js/modules/es6.array.from");

require("core-js/modules/es6.regexp.to-string");

require("core-js/modules/es6.date.to-string");

require("core-js/modules/es6.array.is-array");

require("core-js/modules/es7.symbol.async-iterator");

require("core-js/modules/es6.object.define-properties");

require("core-js/modules/es7.object.get-own-property-descriptors");

require("core-js/modules/es6.array.for-each");

require("core-js/modules/es6.array.filter");

require("core-js/modules/es6.symbol");

require("core-js/modules/web.dom.iterable");

require("core-js/modules/es6.array.iterator");

require("core-js/modules/es6.object.to-string");

require("core-js/modules/es6.object.keys");

require("core-js/modules/es6.object.define-property");

require("core-js/modules/es6.object.create");

require("core-js/modules/es6.object.set-prototype-of");

require("core-js/modules/es6.number.constructor");

require("core-js/modules/es6.array.map");

var _react = _interopRequireWildcard(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _Util = require("../../../Util");

var _TimePicker = require("./TimePicker.styles");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function _getRequireWildcardCache() { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; if (obj != null) { var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(source, true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(source).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance"); }

function _iterableToArray(iter) { if (Symbol.iterator in Object(iter) || Object.prototype.toString.call(iter) === "[object Arguments]") return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = new Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } }

var hours = _toConsumableArray(Array(24)).map(Number.call, Number);

var minutes = _toConsumableArray(Array(60)).map(Number.call, Number);

var seconds = minutes;

var Clock =
/*#__PURE__*/
function (_Component) {
  _inherits(Clock, _Component);

  function Clock() {
    var _getPrototypeOf2;

    var _temp, _this;

    _classCallCheck(this, Clock);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _possibleConstructorReturn(_this, (_temp = _this = _possibleConstructorReturn(this, (_getPrototypeOf2 = _getPrototypeOf(Clock)).call.apply(_getPrototypeOf2, [this].concat(args))), _this.units = {
      hour: {},
      min: {},
      sec: {}
    }, _this.col = {}, _this.clickCallback = function (obj) {
      var onClick = _this.props.onClick;
      var hour = obj.hour,
          min = obj.min,
          sec = obj.sec;
      onClick(hour, min, sec, "".concat((0, _Util.pad)(hour), ":").concat((0, _Util.pad)(min), ":").concat((0, _Util.pad)(sec)));
    }, _this.handleClick = function (key, value) {
      return function () {
        var _this$props = _this.props,
            hour = _this$props.hour,
            min = _this$props.min,
            sec = _this$props.sec;

        var obj = _objectSpread({
          hour: hour ? parseInt(hour, 10) : 0,
          min: min ? parseInt(min, 10) : 0,
          sec: sec ? parseInt(sec, 10) : 0
        }, _defineProperty({}, key, value));

        _this.clickCallback(obj);
      };
    }, _this.addRef = function (key, value) {
      return function (element) {
        _this.units[key][value] = element;
      };
    }, _this.addColRef = function (col) {
      return function (element) {
        _this.col[col] = element;
      };
    }, _this.mapHours = function (selected) {
      return function (hour) {
        return _react["default"].createElement(_TimePicker.Unit, {
          ref: _this.addRef('hour', hour),
          key: "hour_".concat(hour),
          onClick: _this.handleClick('hour', hour),
          selected: hour === parseInt(selected, 10)
        }, (0, _Util.pad)(hour));
      };
    }, _this.mapMinutes = function (selected) {
      return function (min) {
        return _react["default"].createElement(_TimePicker.Unit, {
          ref: _this.addRef('min', min),
          key: "min_".concat(min),
          onClick: _this.handleClick('min', min),
          selected: min === parseInt(selected, 10)
        }, (0, _Util.pad)(min));
      };
    }, _this.mapSeconds = function (selected) {
      return function (sec) {
        return _react["default"].createElement(_TimePicker.Unit, {
          key: "min_".concat(sec),
          ref: _this.addRef('sec', sec),
          onClick: _this.handleClick('sec', sec),
          selected: sec === parseInt(selected, 10)
        }, (0, _Util.pad)(sec));
      };
    }, _temp));
  }

  _createClass(Clock, [{
    key: "componentDidUpdate",
    value: function componentDidUpdate() {
      var _this$props2 = this.props,
          propHour = _this$props2.hour,
          propMin = _this$props2.min,
          propSec = _this$props2.sec;
      var hour = parseInt(propHour, 10);
      var min = parseInt(propMin, 10);
      var sec = parseInt(propSec, 10);

      if (this.units.hour[hour]) {
        this.col.hour.scrollTop = this.units.hour[hour].offsetTop;
      }

      if (this.units.min[min]) {
        this.col.min.scrollTop = this.units.min[min].offsetTop;
      }

      if (this.units.sec[sec]) {
        this.col.sec.scrollTop = this.units.sec[sec].offsetTop;
      }
    }
  }, {
    key: "render",
    value: function render() {
      var _this$props3 = this.props,
          hour = _this$props3.hour,
          min = _this$props3.min,
          sec = _this$props3.sec;
      return _react["default"].createElement(_TimePicker.TimeContainer, null, _react["default"].createElement("div", null, _react["default"].createElement(_TimePicker.Col, {
        containerRef: this.addColRef('hour')
      }, hours.map(this.mapHours(hour)))), _react["default"].createElement("div", null, _react["default"].createElement(_TimePicker.Col, {
        containerRef: this.addColRef('min')
      }, minutes.map(this.mapMinutes(min)))), _react["default"].createElement("div", null, _react["default"].createElement(_TimePicker.Col, {
        containerRef: this.addColRef('sec')
      }, seconds.map(this.mapSeconds(sec)))));
    }
  }]);

  return Clock;
}(_react.PureComponent);

Clock.propTypes = {
  hour: _propTypes["default"].oneOfType([_propTypes["default"].string, _propTypes["default"].number]),
  min: _propTypes["default"].oneOfType([_propTypes["default"].string, _propTypes["default"].number]),
  sec: _propTypes["default"].oneOfType([_propTypes["default"].string, _propTypes["default"].number]),
  onClick: _propTypes["default"].func
};
Clock.defaultProps = {
  hour: null,
  min: null,
  sec: null,
  onClick: function onClick() {}
};
var _default = Clock;
exports["default"] = _default;