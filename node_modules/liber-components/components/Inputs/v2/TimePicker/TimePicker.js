"use strict";

require("core-js/modules/es6.string.iterator");

require("core-js/modules/es6.weak-map");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

require("core-js/modules/es6.regexp.to-string");

require("core-js/modules/es6.date.to-string");

require("core-js/modules/es6.array.is-array");

require("core-js/modules/es7.symbol.async-iterator");

require("core-js/modules/es6.object.assign");

require("core-js/modules/es6.array.index-of");

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

require("core-js/modules/es6.string.trim");

require("core-js/modules/es6.regexp.split");

var _react = _interopRequireWildcard(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _TimePicker = require("./TimePicker.styles");

var _Clock = _interopRequireDefault(require("./Clock"));

var _DropDown = require("../../../DropDown");

var _Util = require("../../../Util");

var _Assets = require("../../../Assets");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function _getRequireWildcardCache() { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; if (obj != null) { var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

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

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance"); }

function _iterableToArrayLimit(arr, i) { if (!(Symbol.iterator in Object(arr) || Object.prototype.toString.call(arr) === "[object Arguments]")) { return; } var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

var breakTime = function breakTime(time) {
  var _time$split = time.split(':'),
      _time$split2 = _slicedToArray(_time$split, 3),
      _time$split2$ = _time$split2[0],
      hour = _time$split2$ === void 0 ? '' : _time$split2$,
      _time$split2$2 = _time$split2[1],
      min = _time$split2$2 === void 0 ? '' : _time$split2$2,
      _time$split2$3 = _time$split2[2],
      sec = _time$split2$3 === void 0 ? '' : _time$split2$3;

  hour = parseInt(hour, 10) > 23 ? '23' : hour;
  min = parseInt(min, 10) > 59 ? '59' : min;
  sec = parseInt(sec, 10) > 59 ? '59' : sec;
  return {
    time: time ? "".concat(hour, ":").concat(min, ":").concat(sec) : '',
    hour: hour,
    min: min,
    sec: sec
  };
};

var TimePicker =
/*#__PURE__*/
function (_Component) {
  _inherits(TimePicker, _Component);

  function TimePicker() {
    var _getPrototypeOf2;

    var _temp, _this;

    _classCallCheck(this, TimePicker);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _possibleConstructorReturn(_this, (_temp = _this = _possibleConstructorReturn(this, (_getPrototypeOf2 = _getPrototypeOf(TimePicker)).call.apply(_getPrototypeOf2, [this].concat(args))), _this.state = {
      open: false,
      clear: false,
      hour: '',
      min: '',
      sec: '',
      time: ''
    }, _this.handleFocus = function () {
      _this.setState({
        open: true
      });
    }, _this.handleOutsideClick = function () {
      _this.setState({
        open: false
      });
    }, _this.onChangeCallback = function () {
      var onChange = _this.props.onChange;
      var _this$state = _this.state,
          time = _this$state.time,
          hour = _this$state.hour,
          min = _this$state.min,
          sec = _this$state.sec;
      onChange(time, hour, min, sec);
    }, _this.handleClick = function (hour, min, sec, time) {
      _this.setState({
        time: time,
        hour: hour,
        min: min,
        sec: sec
      }, _this.onChangeCallback);
    }, _this.handleChange = function (time) {
      _this.setState(_objectSpread({}, breakTime(time)), _this.onChangeCallback);
    }, _this.handleOnMouseEnter = function () {
      var time = _this.state.time;

      if (time.trim() !== '') {
        _this.setState({
          clear: true
        });
      }
    }, _this.handleOnMouseLeave = function () {
      var time = _this.state.time;
      if (time.trim() !== '') _this.setState({
        clear: false
      });
    }, _this.clearInput = function () {
      _this.setState({
        hour: '',
        min: '',
        sec: '',
        time: '',
        clear: false
      });
    }, _temp));
  }

  _createClass(TimePicker, [{
    key: "render",
    value: function render() {
      var _this$state2 = this.state,
          time = _this$state2.time,
          open = _this$state2.open,
          hour = _this$state2.hour,
          min = _this$state2.min,
          sec = _this$state2.sec,
          clear = _this$state2.clear;

      var _this$props = this.props,
          onChange = _this$props.onChange,
          props = _objectWithoutProperties(_this$props, ["onChange"]);

      return _react["default"].createElement(_react.Fragment, null, _react["default"].createElement(_Assets.PsGlobalStyle, null), _react["default"].createElement(_Util.ClickOutside, {
        onOutsideClick: this.handleOutsideClick
      }, _react["default"].createElement(_TimePicker.Container, null, _react["default"].createElement(_DropDown.SimpleDropDown, {
        open: open,
        customButton: _react["default"].createElement(_TimePicker.Field, _extends({
          width: "340px"
        }, props, {
          value: time,
          version: "2",
          onChange: this.handleChange,
          mask: "99:99:99",
          maskChar: null,
          onFocus: this.handleFocus,
          onMouseEnter: this.handleOnMouseEnter,
          onMouseLeave: this.handleOnMouseLeave
        }))
      }, _react["default"].createElement(_Clock["default"], {
        onClick: this.handleClick,
        hour: hour,
        min: min,
        sec: sec
      })), _react["default"].createElement(_TimePicker.Icon, {
        hide: clear
      }), _react["default"].createElement(_TimePicker.Close // eslint-disable-line
      , {
        show: clear,
        onMouseEnter: this.handleOnMouseEnter,
        onClick: this.clearInput
      }))));
    }
  }], [{
    key: "getDerivedStateFromProps",
    value: function getDerivedStateFromProps(props, state) {
      if (props.time) {
        return _objectSpread({}, breakTime(props.time));
      }

      return state;
    }
  }]);

  return TimePicker;
}(_react.PureComponent);

TimePicker.propTypes = {
  label: _propTypes["default"].string,
  time: _propTypes["default"].string,
  onChange: _propTypes["default"].func
};
TimePicker.defaultProps = {
  label: '',
  time: null,
  onChange: function onChange() {}
};
var _default = TimePicker;
exports["default"] = _default;