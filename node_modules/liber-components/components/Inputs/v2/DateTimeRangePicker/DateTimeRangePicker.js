"use strict";

require("core-js/modules/es6.string.iterator");

require("core-js/modules/es6.weak-map");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

require("core-js/modules/es6.string.trim");

require("core-js/modules/es6.regexp.to-string");

require("core-js/modules/es6.date.to-string");

require("core-js/modules/es6.array.is-array");

require("core-js/modules/es7.symbol.async-iterator");

require("core-js/modules/es6.object.assign");

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

require("core-js/modules/es6.regexp.split");

var _react = _interopRequireWildcard(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _moment = _interopRequireDefault(require("moment"));

var _DropDown = require("../../../DropDown");

var _MonthCalendar = require("../../../Calendar/v2/MonthCalendar");

var _DateTimeRangePicker = require("./DateTimeRangePicker.styles");

var _Util = require("../../../Util");

var _DateTime = _interopRequireDefault(require("./DateTime"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function _getRequireWildcardCache() { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; if (obj != null) { var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(source, true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(source).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance"); }

function _iterableToArrayLimit(arr, i) { if (!(Symbol.iterator in Object(arr) || Object.prototype.toString.call(arr) === "[object Arguments]")) { return; } var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

var breakValue = function breakValue(value) {
  var _value$split = value.split(' a '),
      _value$split2 = _slicedToArray(_value$split, 2),
      _value$split2$ = _value$split2[0],
      start = _value$split2$ === void 0 ? '' : _value$split2$,
      _value$split2$2 = _value$split2[1],
      end = _value$split2$2 === void 0 ? '' : _value$split2$2;

  var _start$split = start.split(' '),
      _start$split2 = _slicedToArray(_start$split, 2),
      _start$split2$ = _start$split2[0],
      startDate = _start$split2$ === void 0 ? '' : _start$split2$,
      _start$split2$2 = _start$split2[1],
      startTime = _start$split2$2 === void 0 ? '' : _start$split2$2;

  var _end$split = end.split(' '),
      _end$split2 = _slicedToArray(_end$split, 2),
      _end$split2$ = _end$split2[0],
      endDate = _end$split2$ === void 0 ? '' : _end$split2$,
      _end$split2$2 = _end$split2[1],
      endTime = _end$split2$2 === void 0 ? '' : _end$split2$2;

  return {
    startDate: startDate,
    endDate: endDate,
    startTime: startTime,
    endTime: endTime
  };
};

var DateTimeRangePicker =
/*#__PURE__*/
function (_Component) {
  _inherits(DateTimeRangePicker, _Component);

  function DateTimeRangePicker(props) {
    var _this;

    _classCallCheck(this, DateTimeRangePicker);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(DateTimeRangePicker).call(this, props));

    _initialiseProps.call(_assertThisInitialized(_this));

    _this.clean = {
      clear: false,
      startDate: '',
      endDate: '',
      startTime: '',
      endTime: ''
    };
    var start = props.value ? breakValue(props.value) : _this.clean;
    _this.state = _objectSpread({}, start, {
      open: false,
      focused: false,
      month: (0, _moment["default"])().startOf('month')
    });
    return _this;
  }

  _createClass(DateTimeRangePicker, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      new ResizeObserver(this.resizeRow).observe(this.calendarStart);
      new ResizeObserver(this.resizeRow).observe(this.calendarEnd);
    }
  }, {
    key: "render",
    value: function render() {
      var _this$state = this.state,
          open = _this$state.open,
          clear = _this$state.clear,
          focused = _this$state.focused,
          startDate = _this$state.startDate,
          startTime = _this$state.startTime,
          endDate = _this$state.endDate,
          endTime = _this$state.endTime,
          month = _this$state.month;
      var _this$props = this.props,
          label = _this$props.label,
          hintText = _this$props.hintText,
          placeholder = _this$props.placeholder,
          errorMessage = _this$props.errorMessage,
          disabled = _this$props.disabled,
          minDate = _this$props.minDate,
          firstDayOfWeek = _this$props.firstDayOfWeek,
          weekLabels = _this$props.weekLabels,
          monthsLabels = _this$props.monthsLabels,
          openLabel = _this$props.openLabel;
      var DateTimeProps = {
        minDate: minDate,
        firstDayOfWeek: firstDayOfWeek,
        weekLabels: weekLabels,
        monthsLabels: monthsLabels
      };

      var _this$getNavigations = this.getNavigations(month),
          start = _this$getNavigations.start,
          end = _this$getNavigations.end;

      var valid = startDate !== '' || startTime !== '' || endDate !== '' || endTime !== '';
      var error = errorMessage !== '';
      return _react["default"].createElement(_Util.ClickOutside, {
        onOutsideClick: this.handleOutsideClick
      }, _react["default"].createElement(_DateTimeRangePicker.Container, null, label !== '' && _react["default"].createElement(_DateTimeRangePicker.Label, {
        focused: openLabel || focused,
        valid: valid,
        error: error,
        disabled: disabled
      }, label), _react["default"].createElement(_DateTimeRangePicker.Hint, {
        visible: (focused || !label) && !valid
      }, placeholder || hintText), error && _react["default"].createElement(_DateTimeRangePicker.Error, {
        visible: error
      }, errorMessage), _react["default"].createElement(_DropDown.SimpleDropDown, {
        open: open,
        position: "bottom-left",
        customButton: this.renderInputs()
      }, _react["default"].createElement(_DateTimeRangePicker.Row, {
        size: this.size
      }, _react["default"].createElement(_DateTime["default"], _extends({
        ref: this.addRef('start'),
        calendarRef: this.addRef('calendarStart'),
        navigation: ['prev'],
        month: start,
        time: startTime,
        onNavigate: this.handleNavigation('start'),
        onCalendarClick: this.handleCalendarClick,
        onClockClick: this.handleClockClick('startTime', startDate),
        dayRenderer: this.renderDay('start')
      }, DateTimeProps)), _react["default"].createElement(_DateTime["default"], _extends({
        ref: this.addRef('end'),
        calendarRef: this.addRef('calendarEnd'),
        navigation: ['next'],
        month: end,
        time: endTime,
        onNavigate: this.handleNavigation('end'),
        onCalendarClick: this.handleCalendarClick,
        onClockClick: this.handleClockClick('endTime', endDate),
        dayRenderer: this.renderDay('end')
      }, DateTimeProps)))), _react["default"].createElement(_DateTimeRangePicker.Icon, {
        hide: clear,
        error: error
      }), _react["default"].createElement(_DateTimeRangePicker.Close, {
        show: clear,
        onMouseEnter: this.handleOnMouseEnter,
        onClick: this.clearInput
      })));
    }
  }], [{
    key: "getDerivedStateFromProps",
    value: function getDerivedStateFromProps(props, state) {
      if (props.value) {
        return _objectSpread({}, breakValue(props.value));
      }

      return state;
    }
  }]);

  return DateTimeRangePicker;
}(_react.Component);

var _initialiseProps = function _initialiseProps() {
  var _this2 = this;

  this.resizeRow = function () {
    _this2.size = Math.max(_this2.calendarStart.offsetHeight, _this2.calendarEnd.offsetHeight);

    _this2.forceUpdate();
  };

  this.mountCallbackValue = function (startDate, endDate, startTime, endTime) {
    var start = "".concat(startDate, " ").concat(startTime).trim();
    var end = "".concat(endDate, " ").concat(endTime).trim();

    if (end !== '') {
      return "".concat(start, " a ").concat(end);
    }

    return start;
  };

  this.handleCallback = function () {
    var _this2$state = _this2.state,
        startDate = _this2$state.startDate,
        endDate = _this2$state.endDate,
        startTime = _this2$state.startTime,
        endTime = _this2$state.endTime;
    var onChange = _this2.props.onChange;

    var value = _this2.mountCallbackValue(startDate, endDate, startTime, endTime);

    onChange(value, startDate, startTime, endDate, endTime);
  };

  this.handleChange = function (current) {
    return function (event) {
      var value = event.target.value;

      _this2.setState(_defineProperty({}, current, value), _this2.handleCallback);
    };
  };

  this.handleClockClick = function (current, date) {
    return function (hour, min, sec, time) {
      if (date.length === 10) {
        _this2.setState(_defineProperty({}, current, time), _this2.handleCallback);
      }
    };
  };

  this.setDate = function (date) {
    return function (state) {
      var startDate = state.startDate,
          endDate = state.endDate;
      var mStartDate = (0, _moment["default"])(startDate, 'DD/MM/YYYY').startOf('day');
      var mEndDate = (0, _moment["default"])(endDate, 'DD/MM/YYYY').startOf('day');

      if (date.startOf('day').isSame(mStartDate)) {
        return _this2.clean;
      }

      if (date.isBefore(mStartDate)) {
        return {
          startDate: date.format('DD/MM/YYYY'),
          endDate: startDate
        };
      }

      if (date.isSame(mEndDate)) {
        return {
          endDate: '',
          endTime: ''
        };
      }

      if (startDate.length === 10) {
        return {
          endDate: date.format('DD/MM/YYYY')
        };
      }

      return {
        startDate: date.format('DD/MM/YYYY')
      };
    };
  };

  this.handleCalendarClick = function (date) {
    _this2.setState(_this2.setDate(date), _this2.handleCallback);
  };

  this.handleInputFocusChange = function (event) {
    var target = event.target,
        key = event.key;
    var maxLength = parseInt(target.dataset.maxlength, 10);
    var myLength = target.value.length;

    if (myLength >= maxLength && target.selectionStart === maxLength) {
      var next = target.nextElementSibling;

      while (next !== null) {
        if (next.tagName.toLowerCase() === 'input') {
          next.focus();
          break;
        }

        next = next.nextElementSibling;
      }
    }

    if (key === 'Backspace' && myLength === 0 || key === 'ArrowLeft' && target.selectionStart === 0) {
      var prev = target.previousElementSibling;

      while (prev !== null) {
        if (prev.tagName.toLowerCase() === 'input') {
          prev.focus();
          break;
        }

        prev = prev.previousElementSibling;
      }
    }
  };

  this.handleFocus = function (event) {
    var target = event.target;

    if (target.value === '') {
      var prev = target.previousElementSibling;

      if (prev !== null && prev.tagName.toLowerCase() !== 'input') {
        prev = prev.previousElementSibling;
      }

      if (prev !== null) {
        var max = parseInt(prev.dataset.maxlength, 10);

        if (prev.value.length < max) {
          prev.focus();
        }
      }
    }

    _this2.setState({
      open: true,
      focused: true
    });
  };

  this.handleShellClick = function () {
    _this2.endTime.focus();
  };

  this.handleBlur = function () {
    _this2.setState({
      focused: false
    });
  };

  this.handleOutsideClick = function () {
    _this2.setState({
      open: false
    });
  };

  this.handleOnMouseEnter = function () {
    var _this2$state2 = _this2.state,
        startDate = _this2$state2.startDate,
        startTime = _this2$state2.startTime,
        endDate = _this2$state2.endDate,
        endTime = _this2$state2.endTime;
    var valid = startDate !== '' || startTime !== '' || endDate !== '' || endTime !== '';

    if (valid) {
      _this2.setState({
        clear: true
      });
    }
  };

  this.handleOnMouseLeave = function () {
    var _this2$state3 = _this2.state,
        startDate = _this2$state3.startDate,
        startTime = _this2$state3.startTime,
        endDate = _this2$state3.endDate,
        endTime = _this2$state3.endTime;
    var valid = startDate !== '' || startTime !== '' || endDate !== '' || endTime !== '';

    if (valid) {
      _this2.setState({
        clear: false
      });
    }
  };

  this.handleNavigation = function (pos) {
    return function (date) {
      var opt = {
        start: (0, _moment["default"])(date).startOf('month'),
        end: (0, _moment["default"])(date).subtract(1, 'month').startOf('month')
      };

      _this2.setState({
        month: opt[pos]
      });
    };
  };

  this.clearInput = function () {
    _this2.start.changeToCalendar();

    _this2.end.changeToCalendar();

    _this2.setState(_this2.clean, _this2.handleCallback);
  };

  this.addRef = function (key) {
    return function (element) {
      _this2[key] = element;
    };
  };

  this.getNavigations = function (month) {
    return {
      start: (0, _moment["default"])(month),
      end: (0, _moment["default"])(month).add(1, 'month')
    };
  };

  this.getUnitType = function (start, end, day, witch) {
    var month = _this2.state.month;
    var current = witch === 'start' ? month : (0, _moment["default"])(month).add(1, 'month');

    if (witch === 'end' && day.isSame(end, 'week') && day.isBefore(end) && !day.isSame(current, 'month') && end.isSame(current, 'month') || witch === 'start' && day.isSame(end, 'week') && day.isAfter(end) && !day.isSame(current, 'month')) {
      return {
        type: 'past-range',
        start: false
      };
    }

    if (day.isSame(start) || day.isSame(end)) {
      var isEmpty = day.isSame(current, 'month') || end.isValid() ? 'past-range' : 'past';
      return {
        type: day.isSame(current, 'month') ? 'checked' : isEmpty,
        start: day.isSame(start) && end.isValid()
      };
    }

    if (day.isBetween(start, end)) {
      if (start.isSame(end, 'month') && !current.isSame(end, 'month')) {
        return {
          type: undefined,
          start: false
        };
      }

      return {
        type: day.isSame(current, 'month') ? 'range' : 'past-range',
        start: false
      };
    }

    return {
      type: undefined,
      start: false
    };
  };

  this.renderDay = function (witch) {
    return function (day) {
      var _this2$state4 = _this2.state,
          startDate = _this2$state4.startDate,
          endDate = _this2$state4.endDate;
      var mStartDate = (0, _moment["default"])(startDate, 'DD/MM/YYYY').startOf('day');
      var mEndDate = (0, _moment["default"])(endDate, 'DD/MM/YYYY').startOf('day');

      var _this2$getUnitType = _this2.getUnitType(mStartDate, mEndDate, day.startOf('day'), witch),
          type = _this2$getUnitType.type,
          start = _this2$getUnitType.start;

      if (type) {
        return _react["default"].createElement(_DateTimeRangePicker.Range, {
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

  this.renderInputs = function () {
    var _this2$state5 = _this2.state,
        startDate = _this2$state5.startDate,
        startTime = _this2$state5.startTime,
        endDate = _this2$state5.endDate,
        endTime = _this2$state5.endTime,
        focused = _this2$state5.focused;
    var _this2$props = _this2.props,
        errorMessage = _this2$props.errorMessage,
        disabled = _this2$props.disabled;
    var error = errorMessage !== '';
    var valid = startDate !== '' || startTime !== '' || endDate !== '' || endTime !== '';
    return _react["default"].createElement(_DateTimeRangePicker.InputShell, {
      onMouseEnter: _this2.handleOnMouseEnter,
      onMouseLeave: _this2.handleOnMouseLeave,
      onClick: _this2.handleShellClick,
      error: error,
      disabled: disabled
    }, _react["default"].createElement(_DateTimeRangePicker.DateInput, {
      value: startDate,
      onFocus: _this2.handleFocus,
      onBlur: _this2.handleBlur,
      onChange: _this2.handleChange('startDate'),
      onKeyUp: _this2.handleInputFocusChange,
      "data-maxlength": "10",
      inputRef: _this2.addRef('startDate'),
      disabled: disabled
    }), _react["default"].createElement(_DateTimeRangePicker.TimeInput, {
      value: startTime,
      onFocus: _this2.handleFocus,
      onBlur: _this2.handleBlur,
      onChange: _this2.handleChange('startTime'),
      onKeyUp: _this2.handleInputFocusChange,
      "data-maxlength": "8",
      inputRef: _this2.addRef('startTime'),
      disabled: disabled,
      placeholder: (valid || focused) && startDate.length === 10 ? '00:00:00' : undefined
    }), _react["default"].createElement(_DateTimeRangePicker.InputSeparator, {
      show: startDate.length === 10 && startTime.length === 8
    }, "a"), _react["default"].createElement(_DateTimeRangePicker.DateInput, {
      value: endDate,
      onFocus: _this2.handleFocus,
      onBlur: _this2.handleBlur,
      onChange: _this2.handleChange('endDate'),
      onKeyUp: _this2.handleInputFocusChange,
      "data-maxlength": "10",
      inputRef: _this2.addRef('endDate'),
      disabled: disabled
    }), _react["default"].createElement(_DateTimeRangePicker.TimeInput, {
      value: endTime,
      onFocus: _this2.handleFocus,
      onBlur: _this2.handleBlur,
      onChange: _this2.handleChange('endTime'),
      onKeyUp: _this2.handleInputFocusChange,
      "data-maxlength": "8",
      inputRef: _this2.addRef('endTime'),
      disabled: disabled,
      placeholder: (valid || focused) && endDate === 10 ? '00:00:00' : undefined
    }));
  };
};

DateTimeRangePicker.propTypes = {
  value: _propTypes["default"].string,
  label: _propTypes["default"].string,
  openLabel: _propTypes["default"].bool,
  hintText: _propTypes["default"].string,
  placeholder: _propTypes["default"].string,
  errorMessage: _propTypes["default"].string,
  disabled: _propTypes["default"].bool,
  minDate: _propTypes["default"].oneOfType([_propTypes["default"].string, _propTypes["default"].instanceOf(_moment["default"])]),
  firstDayOfWeek: _propTypes["default"].oneOf([0, 1]),
  weekLabels: _propTypes["default"].arrayOf(_propTypes["default"].string),
  monthsLabels: _propTypes["default"].arrayOf(_propTypes["default"].string),
  onChange: _propTypes["default"].func
};
DateTimeRangePicker.defaultProps = {
  value: null,
  label: '',
  openLabel: false,
  hintText: null,
  placeholder: null,
  errorMessage: '',
  disabled: false,
  minDate: null,
  firstDayOfWeek: 0,
  weekLabels: ['D', 'S', 'T', 'Q', 'Q', 'S', 'S'],
  monthsLabels: ['Janeiro', 'Fevereiro', 'Março', 'Abril', 'Maio', 'Junho', 'Julho', 'Agosto', 'Setembro', 'Outubro', 'Novembro', 'Dezembro'],
  onChange: function onChange() {}
};
var _default = DateTimeRangePicker;
exports["default"] = _default;