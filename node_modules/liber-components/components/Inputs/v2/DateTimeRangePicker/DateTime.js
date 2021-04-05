"use strict";

require("core-js/modules/es6.array.iterator");

require("core-js/modules/es6.string.iterator");

require("core-js/modules/es6.weak-map");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

require("core-js/modules/es6.object.assign");

require("core-js/modules/es6.regexp.to-string");

require("core-js/modules/es6.date.to-string");

require("core-js/modules/es6.object.to-string");

require("core-js/modules/es7.symbol.async-iterator");

require("core-js/modules/es6.symbol");

require("core-js/modules/web.dom.iterable");

require("core-js/modules/es6.array.is-array");

require("core-js/modules/es6.object.define-property");

require("core-js/modules/es6.object.create");

require("core-js/modules/es6.object.set-prototype-of");

require("core-js/modules/es6.regexp.split");

var _react = _interopRequireWildcard(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _moment = _interopRequireDefault(require("moment"));

var _momentTimezone = _interopRequireDefault(require("moment-timezone"));

var _MonthCalendar = _interopRequireDefault(require("../../../Calendar/v2/MonthCalendar"));

var _TimePicker = require("../TimePicker");

var _DateTimeRangePicker = require("./DateTimeRangePicker.styles");

var _Buttons = require("../../../Buttons");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function _getRequireWildcardCache() { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; if (obj != null) { var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance"); }

function _iterableToArrayLimit(arr, i) { if (!(Symbol.iterator in Object(arr) || Object.prototype.toString.call(arr) === "[object Arguments]")) { return; } var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

_momentTimezone["default"].tz.setDefault('UTC');

var DateTime =
/*#__PURE__*/
function (_Component) {
  _inherits(DateTime, _Component);

  function DateTime(props) {
    var _this;

    _classCallCheck(this, DateTime);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(DateTime).call(this, props));

    _this.changeToClock = function () {
      _this.setState({
        showing: 'clock'
      });
    };

    _this.changeToCalendar = function () {
      _this.setState({
        showing: 'calendar'
      });
    };

    _this.breakTime = function (time) {
      if (time) {
        return time.split(':');
      }

      return ['', '', ''];
    };

    _this.state = {
      showing: 'calendar'
    };
    return _this;
  }

  _createClass(DateTime, [{
    key: "render",
    value: function render() {
      var showing = this.state.showing;
      var _this$props = this.props,
          navigation = _this$props.navigation,
          _this$props$month = _this$props.month,
          month = _this$props$month === void 0 ? (0, _moment["default"])() : _this$props$month,
          time = _this$props.time,
          onCalendarClick = _this$props.onCalendarClick,
          onClockClick = _this$props.onClockClick,
          onNavigate = _this$props.onNavigate,
          calendarRef = _this$props.calendarRef,
          dayRenderer = _this$props.dayRenderer,
          weekLabels = _this$props.weekLabels,
          monthsLabels = _this$props.monthsLabels,
          firstDayOfWeek = _this$props.firstDayOfWeek,
          minDate = _this$props.minDate;
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

      var _this$breakTime = this.breakTime(time),
          _this$breakTime2 = _slicedToArray(_this$breakTime, 3),
          hour = _this$breakTime2[0],
          min = _this$breakTime2[1],
          sec = _this$breakTime2[2];

      return _react["default"].createElement(_DateTimeRangePicker.PickerBody, null, _react["default"].createElement(_DateTimeRangePicker.PickerSlider, {
        show: showing
      }, _react["default"].createElement(_DateTimeRangePicker.CalendarContainer, {
        ref: calendarRef
      }, _react["default"].createElement(_MonthCalendar["default"], {
        version: "2",
        navigation: navigation,
        date: month.startOf('month'),
        dayRenderer: dayRenderer,
        onClick: onCalendarClick,
        onNavigate: onNavigate,
        weekLabels: weekLabels,
        monthsLabels: monthsLabels,
        firstDayOfWeek: firstDayOfWeek,
        minDate: minDate
      })), _react["default"].createElement(_DateTimeRangePicker.ClockContainer, null, _react["default"].createElement(_TimePicker.Clock, {
        hour: hour,
        min: min,
        sec: sec,
        onClick: onClockClick
      }))), _react["default"].createElement(_DateTimeRangePicker.ActionFooter, null, _react["default"].createElement(_Buttons.Button, _extends({
        version: 2
      }, actionProps[showing], {
        disabled: !onClockClick
      }))));
    }
  }]);

  return DateTime;
}(_react.Component);

DateTime.propTypes = {
  navigation: _propTypes["default"].arrayOf(_propTypes["default"].string),
  month: _propTypes["default"].instanceOf(_moment["default"]),
  time: _propTypes["default"].string,
  onNavigate: _propTypes["default"].func,
  onCalendarClick: _propTypes["default"].func,
  onClockClick: _propTypes["default"].func,
  calendarRef: _propTypes["default"].func,
  dayRenderer: _propTypes["default"].func,
  minDate: _propTypes["default"].oneOfType([_propTypes["default"].string, _propTypes["default"].instanceOf(_moment["default"])]),
  firstDayOfWeek: _propTypes["default"].oneOf([0, 1]),
  weekLabels: _propTypes["default"].arrayOf(_propTypes["default"].string),
  monthsLabels: _propTypes["default"].arrayOf(_propTypes["default"].string)
};
DateTime.defaultProps = {
  navigation: ['prev', 'next'],
  minDate: null,
  firstDayOfWeek: 0,
  weekLabels: ['D', 'S', 'T', 'Q', 'Q', 'S', 'S'],
  monthsLabels: ['Janeiro', 'Fevereiro', 'Março', 'Abril', 'Maio', 'Junho', 'Julho', 'Agosto', 'Setembro', 'Outubro', 'Novembro', 'Dezembro'],
  month: undefined,
  time: null,
  onNavigate: function onNavigate() {},
  onCalendarClick: function onCalendarClick() {},
  onClockClick: null,
  calendarRef: function calendarRef() {},
  dayRenderer: null
};
var _default = DateTime;
exports["default"] = _default;