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

var _moment = _interopRequireDefault(require("moment"));

var _DateTimePicker = require("./DateTimePicker.styles");

var _DropDown = require("../../../DropDown");

var _MonthCalendar = _interopRequireWildcard(require("../../../Calendar/v2/MonthCalendar"));

var _Util = require("../../../Util");

var _Buttons = require("../../../Buttons");

var _TimePicker = require("../TimePicker");

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

var parseValue = function parseValue(value) {
  if (value !== '') {
    var _value$split = value.split(' ás '),
        _value$split2 = _slicedToArray(_value$split, 2),
        date = _value$split2[0],
        time = _value$split2[1];

    return {
      input: "".concat(date, "          ").concat(time),
      date: (0, _moment["default"])(date, 'DD/MM/YYYY'),
      time: time
    };
  }

  return {
    input: '',
    date: null,
    time: ''
  };
};

var DateTimePicker =
/*#__PURE__*/
function (_Component) {
  _inherits(DateTimePicker, _Component);

  function DateTimePicker(props) {
    var _this;

    _classCallCheck(this, DateTimePicker);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(DateTimePicker).call(this, props));

    _this.setClockHeight = function () {
      if (_this.container) {
        _this.clockSize = _this.container.offsetHeight;
      }
    };

    _this.onChangeCallback = function () {
      var onChange = _this.props.onChange;
      var _this$state = _this.state,
          date = _this$state.date,
          time = _this$state.time,
          hour = _this$state.hour,
          min = _this$state.min,
          sec = _this$state.sec;
      var input = "".concat(date.format('DD/MM/YYYY'), " \xE1s ").concat(time);
      date.hour(hour).minutes(min).seconds(sec);
      onChange(input, date.format('DD/MM/YYYY'), time, date);
    };

    _this.breakTime = function (time) {
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

    _this.handleChange = function (input) {
      var _input$split = input.split('          '),
          _input$split2 = _slicedToArray(_input$split, 2),
          _input$split2$ = _input$split2[0],
          calendarDate = _input$split2$ === void 0 ? '' : _input$split2$,
          _input$split2$2 = _input$split2[1],
          clockTime = _input$split2$2 === void 0 ? '' : _input$split2$2;

      var date = (0, _moment["default"])(calendarDate, 'DD/MM/YYYY');

      var _this$breakTime = _this.breakTime(clockTime),
          time = _this$breakTime.time,
          hour = _this$breakTime.hour,
          min = _this$breakTime.min,
          sec = _this$breakTime.sec;

      _this.setState({
        input: input.trim() === '' ? input.trim() : "".concat(calendarDate, "          ").concat(time),
        date: date,
        time: time,
        calendarDate: date.isValid() ? (0, _moment["default"])(date).startOf('month') : undefined,
        hour: parseInt(hour, 10) > 23 ? '23' : hour,
        min: parseInt(min, 10) > 59 ? '59' : min,
        sec: parseInt(sec, 10) > 59 ? '59' : sec,
        showing: input.trim().length >= 10 ? 'clock' : 'calendar'
      }, _this.onChangeCallback);
    };

    _this.handleFocus = function () {
      _this.setState({
        open: true
      });
    };

    _this.handleOutsideClick = function () {
      _this.setState({
        open: false
      });
    };

    _this.changeClockSize = function () {
      var force = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : true;

      _this.setClockHeight();

      if (force) _this.forceUpdate();
    };

    _this.changeToClock = function () {
      _this.changeClockSize(false);

      _this.setState({
        showing: 'clock'
      });
    };

    _this.changeToCalendar = function () {
      _this.setState({
        showing: 'calendar'
      });
    };

    _this.handleClickClock = function (hour, min, sec, time) {
      _this.setState(function (state) {
        var date = state.date || (0, _moment["default"])();
        return {
          input: "".concat(date.format('DD/MM/YYYY'), "          ").concat(time),
          time: time,
          date: date,
          hour: hour,
          min: min,
          sec: sec
        };
      });

      _this.setState({
        time: time
      }, _this.onChangeCallback);
    };

    _this.handleClickCalendar = function (calendarDate) {
      var time = _this.state.time;

      _this.setState({
        input: "".concat(calendarDate.format('DD/MM/YYYY'), "     ").concat(time),
        date: calendarDate,
        calendarDate: (0, _moment["default"])(calendarDate).startOf('month'),
        showing: 'clock'
      }, _this.onChangeCallback);
    };

    _this.handleNavigate = function (calendarDate) {
      _this.setState({
        calendarDate: calendarDate
      }, _this.changeClockSize);
    };

    _this.containerRef = function (element) {
      _this.container = element;
    };

    _this.renderDay = function (day) {
      var date = _this.state.date;
      var mDate = (0, _moment["default"])(date, 'DD/MM/YYYY').startOf('day');
      var type = day.startOf('day').isSame(mDate) && 'checked';
      return _react["default"].createElement(_MonthCalendar.Unit, {
        type: type
      }, day.date());
    };

    _this.handleOnMouseEnter = function () {
      var input = _this.state.input;

      if (input !== '') {
        _this.setState({
          clear: true
        });
      }
    };

    _this.handleOnMouseLeave = function () {
      var input = _this.state.input;
      if (input !== '') _this.setState({
        clear: false
      });
    };

    _this.clearInput = function () {
      _this.setState({
        input: '',
        date: null,
        time: '',
        hour: '',
        min: '',
        sec: '',
        clear: false,
        showing: 'calendar',
        calendarDate: (0, _moment["default"])()
      });
    };

    _this.state = _objectSpread({
      open: false,
      clear: false,
      showing: 'calendar',
      calendarDate: null,
      hour: '',
      min: '',
      sec: ''
    }, parseValue(props.value));
    console.log(_this.state.calendarDate);
    return _this;
  }

  _createClass(DateTimePicker, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      this.setClockHeight();
    }
  }, {
    key: "render",
    value: function render() {
      var _this$state2 = this.state,
          open = _this$state2.open,
          showing = _this$state2.showing,
          calendarDate = _this$state2.calendarDate,
          input = _this$state2.input,
          hour = _this$state2.hour,
          min = _this$state2.min,
          sec = _this$state2.sec,
          clear = _this$state2.clear;
      var actionProps = {
        calendar: {
          children: 'SELECIONAR HORÁRIO',
          onClick: this.changeToClock
        },
        clock: {
          children: 'SELECIONAR DATA',
          onClick: this.changeToCalendar
        }
      };
      var separator = input.trim().length >= 10;

      var _this$props = this.props,
          onChange = _this$props.onChange,
          minDate = _this$props.minDate,
          weekLabels = _this$props.weekLabels,
          monthsLabels = _this$props.monthsLabels,
          firstDayOfWeek = _this$props.firstDayOfWeek,
          props = _objectWithoutProperties(_this$props, ["onChange", "minDate", "weekLabels", "monthsLabels", "firstDayOfWeek"]);

      return _react["default"].createElement(_Util.ClickOutside, {
        onOutsideClick: this.handleOutsideClick
      }, _react["default"].createElement(_DateTimePicker.Container, null, _react["default"].createElement(_DropDown.SimpleDropDown, {
        open: open,
        customButton: _react["default"].createElement(_DateTimePicker.Field, _extends({
          width: "340px"
        }, props, {
          value: input,
          version: "2",
          onChange: this.handleChange,
          mask: "99/99/9999          99:99:99",
          maskChar: null,
          onFocus: this.handleFocus,
          onMouseEnter: this.handleOnMouseEnter,
          onMouseLeave: this.handleOnMouseLeave
        }))
      }, _react["default"].createElement(_DateTimePicker.PickerBody, null, _react["default"].createElement(_DateTimePicker.PickerSlider, {
        show: showing
      }, _react["default"].createElement(_DateTimePicker.CalendarContainer, {
        ref: this.containerRef
      }, _react["default"].createElement(_MonthCalendar["default"], {
        version: "2",
        date: calendarDate,
        dayRenderer: this.renderDay,
        onClick: this.handleClickCalendar,
        onNavigate: this.handleNavigate,
        weekLabels: weekLabels,
        monthsLabels: monthsLabels,
        firstDayOfWeek: firstDayOfWeek,
        minDate: minDate
      })), _react["default"].createElement(_DateTimePicker.ClockContainer, {
        size: this.clockSize
      }, _react["default"].createElement(_TimePicker.Clock, {
        hour: hour,
        min: min,
        sec: sec,
        onClick: this.handleClickClock
      }))), _react["default"].createElement(_DateTimePicker.ActionFooter, null, _react["default"].createElement(_Buttons.Button, _extends({
        version: 2
      }, actionProps[showing]))))), _react["default"].createElement(_DateTimePicker.Icon, {
        hide: clear
      }), _react["default"].createElement(_DateTimePicker.Close // eslint-disable-line
      , {
        show: clear,
        onMouseEnter: this.handleOnMouseEnter,
        onClick: this.clearInput
      }), separator && _react["default"].createElement(_DateTimePicker.InputSeparator, null, "\xE1s")));
    }
  }], [{
    key: "getDerivedStateFromProps",
    value: function getDerivedStateFromProps(props, state) {
      if (props.input) {
        return _objectSpread({}, parseValue(props.value));
      }

      return state;
    }
  }]);

  return DateTimePicker;
}(_react.PureComponent);

DateTimePicker.propTypes = {
  label: _propTypes["default"].string,
  weekLabels: _propTypes["default"].arrayOf(_propTypes["default"].string),
  monthsLabels: _propTypes["default"].arrayOf(_propTypes["default"].string),
  firstDayOfWeek: _propTypes["default"].oneOf([0, 1]),
  value: _propTypes["default"].string,
  // eslint-disable-next-line
  minDate: _propTypes["default"].oneOfType([_propTypes["default"].string, _propTypes["default"].instanceOf(_moment["default"])]),
  onChange: _propTypes["default"].func
};
DateTimePicker.defaultProps = {
  label: '',
  minDate: null,
  value: '',
  firstDayOfWeek: undefined,
  weekLabels: undefined,
  monthsLabels: undefined,
  onChange: function onChange() {}
};
var _default = DateTimePicker;
exports["default"] = _default;