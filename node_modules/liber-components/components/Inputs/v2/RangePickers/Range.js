"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

require("core-js/modules/es6.object.define-properties");

require("core-js/modules/es7.object.get-own-property-descriptors");

require("core-js/modules/es6.array.for-each");

require("core-js/modules/es6.array.filter");

require("core-js/modules/es6.array.iterator");

require("core-js/modules/es6.object.keys");

require("core-js/modules/es6.object.define-property");

require("core-js/modules/es6.regexp.to-string");

require("core-js/modules/es6.date.to-string");

require("core-js/modules/es6.object.to-string");

require("core-js/modules/es7.symbol.async-iterator");

require("core-js/modules/es6.symbol");

require("core-js/modules/web.dom.iterable");

require("core-js/modules/es6.array.is-array");

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _moment = _interopRequireDefault(require("moment"));

var _useResizeObserver5 = _interopRequireDefault(require("use-resize-observer"));

var _DateTimeSelection = _interopRequireDefault(require("./DateTimeSelection"));

var _MonthCalendar = require("../../../Calendar/v2/MonthCalendar");

var _Range = require("./Range.styles");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(source, true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(source).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance"); }

function _iterableToArrayLimit(arr, i) { if (!(Symbol.iterator in Object(arr) || Object.prototype.toString.call(arr) === "[object Arguments]")) { return; } var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

var getDisplayDates = function getDisplayDates(displayDate) {
  var startDisplayDate = (0, _moment["default"])(displayDate).startOf('month');
  var endDisplayDate = (0, _moment["default"])(startDisplayDate).add(1, 'month');
  return {
    startDisplayDate: startDisplayDate,
    endDisplayDate: endDisplayDate
  };
};

var handleNavigationStart = function handleNavigationStart(callback) {
  return function (date) {
    callback(date);
  };
};

var handleStartTimeSelection = function handleStartTimeSelection(callback, endTime) {
  return function (hour, min, sec) {
    callback({
      hour: hour,
      min: min,
      sec: sec
    }, endTime);
  };
};

var handleEndTimeSelection = function handleEndTimeSelection(callback, startTime) {
  return function (hour, min, sec) {
    callback(startTime, {
      hour: hour,
      min: min,
      sec: sec
    });
  };
};

var handleDateSelection = function handleDateSelection(callback, navigationCallback, start, end, displayDate) {
  return function (date) {
    if (!start || !start.isValid()) {
      if (!date.isSame(displayDate, 'month')) {
        navigationCallback((0, _moment["default"])(date).startOf('month'));
      }

      callback(date, null);
    } else if (date.isSame(start, 'day') && (!end || !end.isValid())) {
      callback(null, null);
    } else if ((!end || !end.isValid()) && date.isAfter(start)) {
      callback(start, date);
    } else if (date.isBefore(start)) {
      if (!date.isSame(displayDate, 'month')) {
        navigationCallback((0, _moment["default"])(date).startOf('month'));
      }

      callback(date, end);
    } else if (date.isSame(end, 'day')) {
      callback(start, null);
    } else if (date.isAfter(start)) {
      callback(start, date);
    } else if (date.isSame(start, 'day')) {
      callback(null, null);
    }
  };
};

var handleNavigationEnd = function handleNavigationEnd(callback) {
  return function (enddate) {
    var date = (0, _moment["default"])(enddate).subtract(1, 'month');
    callback(date);
  };
};

var getMax = function getMax() {
  var _useResizeObserver = (0, _useResizeObserver5["default"])(),
      _useResizeObserver2 = _slicedToArray(_useResizeObserver, 3),
      startRef = _useResizeObserver2[0],
      startWidth = _useResizeObserver2[1],
      startHeight = _useResizeObserver2[2]; // eslint-disable-line


  var _useResizeObserver3 = (0, _useResizeObserver5["default"])(),
      _useResizeObserver4 = _slicedToArray(_useResizeObserver3, 3),
      endRef = _useResizeObserver4[0],
      endWidth = _useResizeObserver4[1],
      endHeight = _useResizeObserver4[2]; // eslint-disable-line


  var height = Math.max(startHeight, endHeight);
  return [startRef, endRef, height];
};

var isStart = function isStart(selector) {
  return selector === 'start';
};

var isEnd = function isEnd(selector) {
  return selector === 'end';
};

var isDayMonthNotSameFromStart = function isDayMonthNotSameFromStart(day, start) {
  return !day.isSame(start, 'month');
};

var isDayEnd = function isDayEnd(day, end) {
  return day.isSame(end);
};

var isDayNotEnd = function isDayNotEnd() {
  return !isDayEnd.apply(void 0, arguments);
};

var isDayInRange = function isDayInRange(day, start, end) {
  return day.isBetween(start, end);
};

var isDayMonthSameAsDisplay = function isDayMonthSameAsDisplay(day, displayDate) {
  return day.isSame(displayDate, 'month');
};

var isDayMonthNotSameAsDisplay = function isDayMonthNotSameAsDisplay() {
  return !isDayMonthSameAsDisplay.apply(void 0, arguments);
};

var isDayMonthSameAsDisplayNext = function isDayMonthSameAsDisplayNext(day, displayDate) {
  var displayNext = (0, _moment["default"])(displayDate).add(1, 'month');
  return day.isSame(displayNext, 'month');
};

var isDayMonthSameAsStart = function isDayMonthSameAsStart(day, start) {
  return day.isSame(start, 'month');
};

var isDayMonthSameAsEnd = function isDayMonthSameAsEnd(day, end) {
  return day.isSame(end, 'month');
};

var isDayStart = function isDayStart(day, start) {
  return day.isSame(start, 'day');
};

var isDayWeekSameAsStart = function isDayWeekSameAsStart(day, start) {
  return day.isSame(start, 'week');
};

var isStartMonthSameAsDisplay = function isStartMonthSameAsDisplay(start, displayDate) {
  return start.isSame(displayDate, 'month');
};

var isStartMonthNotSameAsDisplay = function isStartMonthNotSameAsDisplay() {
  return !isStartMonthSameAsDisplay.apply(void 0, arguments);
};

var isStartMonthSameAsEnd = function isStartMonthSameAsEnd(start, end) {
  return start.isSame(end, 'month');
};

var isDayWeekSameAsEnd = function isDayWeekSameAsEnd(day, end) {
  return day.isSame(end, 'week');
};

var isEndMonthAfterDisplay = function isEndMonthAfterDisplay(end, displayDate) {
  return end.isAfter(displayDate, 'month');
};

var isEndMonthSameAsDisplay = function isEndMonthSameAsDisplay(end, displayDate) {
  return end.isSame(displayDate, 'month');
};

var checked = function checked(start) {
  return {
    type: 'checked',
    start: start
  };
};

var range = {
  type: 'range',
  start: false
};
var pastRange = {
  type: 'past-range',
  start: false
};
var empty = {
  type: undefined,
  start: false
};

var getUnitType = function getUnitType(displayDate, start, end, day, selector) {
  if (isStart(selector)) {
    if (isDayMonthNotSameFromStart(day, start) || isDayNotEnd(day, end)) {
      if (isDayInRange(day, start, end)) {
        if (isDayMonthSameAsDisplay(day, displayDate)) {
          return range;
        }

        if (isStartMonthNotSameAsDisplay(start, displayDate) && isDayWeekSameAsStart(day, start)) {
          return empty;
        }

        return pastRange;
      }
    }

    if (isDayMonthSameAsStart(day, start)) {
      if (isDayStart(day, start)) {
        if (isDayMonthSameAsDisplay(day, displayDate)) {
          return checked(true);
        }

        return empty;
      }

      if (isDayInRange(day, start, end)) {
        if (isStartMonthSameAsDisplay(start, displayDate)) {
          return range;
        }

        return pastRange;
      }
    }

    if (isStartMonthSameAsEnd(start, end)) {
      if (isDayEnd(day, end)) {
        return checked(false);
      }
    } else if (isDayMonthSameAsEnd(day, end)) {
      if (isDayEnd(day, end) && isDayMonthSameAsDisplay(day, displayDate)) {
        return checked(false);
      }

      if (isDayInRange(day, start, end)) {
        if (isDayMonthSameAsDisplay(day, displayDate)) {
          return range;
        }

        return pastRange;
      }

      if (isDayWeekSameAsEnd(day, end) && isDayMonthNotSameAsDisplay(day, displayDate)) {
        return pastRange;
      }
    }
  }

  if (isEnd(selector)) {
    if (isDayMonthNotSameFromStart(day, start) || isDayNotEnd(day, end)) {
      if (isDayInRange(day, start, end)) {
        if (isDayMonthSameAsDisplayNext(day, displayDate)) {
          return range;
        }

        if (isDayMonthSameAsEnd(day, end) && isEndMonthSameAsDisplay(end, displayDate)) {
          return empty;
        }

        return pastRange;
      }
    }

    if (isDayMonthSameAsStart(day, start)) {
      if (isDayStart(day, start)) {
        if (isStartMonthNotSameAsDisplay(start, displayDate)) {
          return checked(true);
        }

        if (end.isValid()) {
          return pastRange;
        }
      }
    }

    if (isDayMonthSameAsEnd(day, end) && isDayMonthNotSameAsDisplay(day, displayDate)) {
      if (isDayEnd(day, end)) {
        return checked(false);
      }

      if (isDayInRange(day, start, end)) {
        if (isStartMonthSameAsDisplay(start, displayDate) && isEndMonthAfterDisplay(end, displayDate)) {
          return range;
        }

        return pastRange;
      }
    } else if (isDayInRange(day, start, end)) {
      if (isStartMonthSameAsDisplay(start, displayDate) && isEndMonthAfterDisplay(end, displayDate)) {
        return pastRange;
      }

      return range;
    }
  }

  return empty;
};

var renderDay = function renderDay(displayDate, startDate, endDate, selector) {
  return function (day) {
    var _getUnitType = getUnitType(displayDate, (0, _moment["default"])(startDate), (0, _moment["default"])(endDate), day.startOf('day'), selector),
        type = _getUnitType.type,
        start = _getUnitType.start;

    if (type) {
      return _react["default"].createElement(_Range.Range, {
        start: start,
        checked: type === 'checked',
        empty: type === 'past'
      }, _react["default"].createElement(_MonthCalendar.Unit, {
        type: type
      }, day.date()));
    }

    return _react["default"].createElement(_MonthCalendar.Unit, {
      type: type
    }, day.date());
  };
};

var setter = function setter(setStart, setEnd) {
  return function (start, end) {
    setStart(start);
    setEnd(end);
  };
};

var Range = function Range(props) {
  var _React$useState = _react["default"].useState((0, _moment["default"])()),
      _React$useState2 = _slicedToArray(_React$useState, 2),
      stateDisplayDate = _React$useState2[0],
      setDisplayDate = _React$useState2[1];

  var _React$useState3 = _react["default"].useState(null),
      _React$useState4 = _slicedToArray(_React$useState3, 2),
      stateStartDate = _React$useState4[0],
      setStartDate = _React$useState4[1];

  var _React$useState5 = _react["default"].useState(null),
      _React$useState6 = _slicedToArray(_React$useState5, 2),
      stateEndDate = _React$useState6[0],
      setEndDate = _React$useState6[1];

  var _React$useState7 = _react["default"].useState({
    hour: 0,
    min: 0,
    sec: 0
  }),
      _React$useState8 = _slicedToArray(_React$useState7, 2),
      stateStartTime = _React$useState8[0],
      setStartTime = _React$useState8[1];

  var _React$useState9 = _react["default"].useState({
    hour: 0,
    min: 0,
    sec: 0
  }),
      _React$useState10 = _slicedToArray(_React$useState9, 2),
      stateEndTime = _React$useState10[0],
      setEndTime = _React$useState10[1];

  var showTime = props.showTime,
      _props$displayDate = props.displayDate,
      displayDate = _props$displayDate === void 0 ? stateDisplayDate : _props$displayDate,
      _props$startDate = props.startDate,
      startDate = _props$startDate === void 0 ? stateStartDate : _props$startDate,
      _props$startTime = props.startTime,
      startTime = _props$startTime === void 0 ? stateStartTime : _props$startTime,
      _props$endDate = props.endDate,
      endDate = _props$endDate === void 0 ? stateEndDate : _props$endDate,
      _props$endTime = props.endTime,
      endTime = _props$endTime === void 0 ? stateEndTime : _props$endTime,
      _props$onNavigate = props.onNavigate,
      onNavigate = _props$onNavigate === void 0 ? setDisplayDate : _props$onNavigate,
      _props$onChangeDates = props.onChangeDates,
      onChangeDates = _props$onChangeDates === void 0 ? setter(setStartDate, setEndDate) : _props$onChangeDates,
      _props$onChangeTimes = props.onChangeTimes,
      onChangeTimes = _props$onChangeTimes === void 0 ? setter(setStartTime, setEndTime) : _props$onChangeTimes;

  var _getDisplayDates = getDisplayDates(displayDate),
      startDisplayDate = _getDisplayDates.startDisplayDate,
      endDisplayDate = _getDisplayDates.endDisplayDate;

  var _getMax = getMax(),
      _getMax2 = _slicedToArray(_getMax, 3),
      startRef = _getMax2[0],
      endRef = _getMax2[1],
      height = _getMax2[2];

  return _react["default"].createElement(_Range.Container, {
    style: {
      '--clock-container-size': "".concat(height + 64, "px")
    }
  }, _react["default"].createElement(_DateTimeSelection["default"], {
    ref: startRef,
    showTime: showTime,
    dateProps: {
      navigation: ['prev'],
      date: startDisplayDate,
      onNavigate: handleNavigationStart(onNavigate),
      dayRenderer: renderDay(displayDate, startDate, endDate, 'start'),
      onClick: handleDateSelection(onChangeDates, onNavigate, startDate, endDate, displayDate)
    },
    timeProps: _objectSpread({}, startTime, {
      onClick: handleStartTimeSelection(onChangeTimes, endTime)
    })
  }), _react["default"].createElement(_DateTimeSelection["default"], {
    ref: endRef,
    showTime: showTime,
    dateProps: {
      navigation: ['next'],
      date: endDisplayDate,
      onNavigate: handleNavigationEnd(onNavigate),
      dayRenderer: renderDay(displayDate, startDate, endDate, 'end'),
      onClick: handleDateSelection(onChangeDates, onNavigate, startDate, endDate, displayDate)
    },
    timeProps: _objectSpread({}, endTime, {
      onClick: handleEndTimeSelection(onChangeTimes, startTime)
    })
  }));
};

Range.propTypes = {
  displayDate: _propTypes["default"].instanceOf(_moment["default"]),
  startDate: _propTypes["default"].instanceOf(_moment["default"]),
  startTime: _propTypes["default"].shape({
    hour: _propTypes["default"].number,
    min: _propTypes["default"].number,
    sec: _propTypes["default"].number
  }),
  endTime: _propTypes["default"].shape({
    hour: _propTypes["default"].number,
    min: _propTypes["default"].number,
    sec: _propTypes["default"].number
  }),
  endDate: _propTypes["default"].instanceOf(_moment["default"]),
  showTime: _propTypes["default"].bool,
  onNavigate: _propTypes["default"].func,
  onChangeDates: _propTypes["default"].func,
  onChangeTimes: _propTypes["default"].func
};
Range.defaultProps = {
  displayDate: undefined,
  startDate: undefined,
  startTime: undefined,
  endDate: undefined,
  endTime: undefined,
  showTime: true,
  onNavigate: undefined,
  onChangeDates: undefined,
  onChangeTimes: undefined
};
var _default = Range;
exports["default"] = _default;