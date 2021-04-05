"use strict";

require("core-js/modules/es6.array.iterator");

require("core-js/modules/es6.weak-map");

require("core-js/modules/es6.array.is-array");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

require("core-js/modules/es6.regexp.to-string");

require("core-js/modules/es6.date.to-string");

require("core-js/modules/es6.object.to-string");

require("core-js/modules/web.dom.iterable");

require("core-js/modules/es7.symbol.async-iterator");

require("core-js/modules/es6.symbol");

require("core-js/modules/es6.object.define-property");

require("core-js/modules/es6.object.create");

require("core-js/modules/es6.object.set-prototype-of");

require("core-js/modules/es6.array.map");

require("core-js/modules/es6.string.includes");

require("core-js/modules/es7.array.includes");

require("core-js/modules/es6.string.iterator");

require("core-js/modules/es6.array.from");

require("core-js/modules/es6.array.for-each");

var _react = _interopRequireWildcard(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _moment = _interopRequireDefault(require("moment"));

var _momentRange = require("moment-range");

var _MonthCalendar = require("./MonthCalendar.styles");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function _getRequireWildcardCache() { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; if (obj != null) { var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance"); }

function _iterableToArray(iter) { if (Symbol.iterator in Object(iter) || Object.prototype.toString.call(iter) === "[object Arguments]") return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = new Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } }

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

var moment = (0, _momentRange.extendMoment)(_moment["default"]);

var defaultRenderer = function defaultRenderer(day) {
  return _react["default"].createElement(_MonthCalendar.Unit, null, day.date());
};

var getMonthCalendar = function getMonthCalendar(year, month, firstDayOfWeek) {
  moment.updateLocale('en', {
    week: {
      dow: firstDayOfWeek,
      doy: 6
    }
  });
  var startDate = moment([year, month]);
  var firstDay = moment(startDate).startOf('month');
  var endDay = moment(startDate).endOf('month');
  var monthRange = moment.range(firstDay, endDay);
  var weeks = [];
  var years = [];
  Array.from(monthRange.by('days')).forEach(function (m) {
    if (!weeks.includes(m.week())) {
      weeks.push(m.week());

      if (m.week() === 1 && m.month() === 11) {
        years.push(m.year() + 1);
      } else if (m.week() === 52 && m.month() === 0) {
        years.push(m.year() - 1);
      }

      years.push(m.year());
    }
  });
  var calendar = [];
  weeks.forEach(function (week, index) {
    var firstWeekDay = moment().year(years[index]).week(week).day(firstDayOfWeek);
    var lastWeekDay = moment().year(years[index]).week(week).day(firstDayOfWeek + 6);
    var weekRange = moment.range(firstWeekDay, lastWeekDay);
    calendar.push(Array.from(weekRange.by('days')));
  });
  return calendar;
};

var MonthCalendar =
/*#__PURE__*/
function (_Component) {
  _inherits(MonthCalendar, _Component);

  function MonthCalendar(props) {
    var _this;

    _classCallCheck(this, MonthCalendar);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(MonthCalendar).call(this, props));

    _initialiseProps.call(_assertThisInitialized(_this));

    var date = props.defaultDate ? moment(props.defaultDate, 'DD/MM/YYYY') : moment().startOf('month');
    _this.state = {
      date: date
    };
    return _this;
  }

  _createClass(MonthCalendar, [{
    key: "render",
    value: function render() {
      var _this$props = this.props,
          renderer = _this$props.dayRenderer,
          weekLabelsList = _this$props.weekLabels,
          monthsLabels = _this$props.monthsLabels,
          firstDayOfWeek = _this$props.firstDayOfWeek,
          navigation = _this$props.navigation,
          innerRef = _this$props.innerRef;
      var date = this.state.date;
      var year = date.year();
      var month = date.month();
      var calendar = getMonthCalendar(year, month, firstDayOfWeek);
      var weekLabels = this.getFormatedWeekLabels(weekLabelsList, firstDayOfWeek);
      return _react["default"].createElement(_MonthCalendar.Column, {
        ref: innerRef
      }, _react["default"].createElement(_MonthCalendar.Controls, null, navigation.includes('prev') ? _react["default"].createElement(_MonthCalendar.Prev, {
        onClick: this.handlePrev
      }) : _react["default"].createElement(_MonthCalendar.PrevUnit, {
        type: "empty"
      }), monthsLabels[month], " de ", year, navigation.includes('next') ? _react["default"].createElement(_MonthCalendar.Next, {
        onClick: this.handleNext
      }) : _react["default"].createElement(_MonthCalendar.NextUnit, {
        type: "empty"
      })), _react["default"].createElement(_MonthCalendar.Column, null, _react["default"].createElement(_MonthCalendar.Row, null, weekLabels.map(this.mapWeekLabels)), calendar.map(this.mapWeek(renderer))));
    }
  }], [{
    key: "getDerivedStateFromProps",
    value: function getDerivedStateFromProps(props, state) {
      if (props.date) {
        return {
          date: moment(props.date, 'DD/MM/YYYY').startOf('month')
        };
      }

      return state;
    }
  }]);

  return MonthCalendar;
}(_react.Component);

var _initialiseProps = function _initialiseProps() {
  var _this2 = this;

  this.getDayType = function (rawDay) {
    var _this2$props = _this2.props,
        onlyCurrent = _this2$props.onlyCurrent,
        propMinDate = _this2$props.minDate;
    var date = _this2.state.date;
    var today = moment().startOf('day');
    var day = moment(rawDay).startOf('day');
    var minDate = moment(propMinDate, 'DD/MM/YYYY').startOf('day');

    if (minDate.isValid() && day.isBefore(minDate)) {
      return 'disabled';
    }

    if (day.isBefore(date, 'month') || day.isAfter(date, 'month')) {
      return onlyCurrent ? 'empty' : 'past';
    }

    if (day.isSame(today)) {
      return 'today';
    }

    return 'basic';
  };

  this.handleDayClick = function (day) {
    var onClick = _this2.props.onClick;

    if (onClick) {
      return function () {
        for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
          args[_key] = arguments[_key];
        }

        onClick.apply(void 0, [day].concat(args));
      };
    }

    return undefined;
  };

  this.renderDay = function (renderer) {
    return function (day) {
      var renderedComponent = renderer(day);

      var type = renderedComponent.props.type || _this2.getDayType(day);

      return (0, _react.cloneElement)(renderedComponent, {
        type: type,
        key: "".concat(day.week()).concat(day.date()),
        onClick: _this2.handleDayClick(day)
      });
    };
  };

  this.mapWeek = function (renderer) {
    return function (week) {
      return _react["default"].createElement(_MonthCalendar.Row, {
        key: week[0].week()
      }, week.map(_this2.renderDay(renderer)));
    };
  };

  this.mapWeekLabels = function (day, index) {
    return _react["default"].createElement(_MonthCalendar.Unit, {
      key: day + index,
      type: "label"
    }, day);
  };

  this.changeCallback = function (date) {
    return _this2.props.onNavigate(date);
  };

  this.handleNext = function () {
    _this2.setState(function (state) {
      var date = moment(state.date).add(1, 'month');

      _this2.changeCallback(date);

      return {
        date: date
      };
    });
  };

  this.handlePrev = function () {
    _this2.setState(function (state) {
      var date = moment(state.date).subtract(1, 'month');
      if (date.year() < 0) return state;

      _this2.changeCallback(date);

      return {
        date: date
      };
    });
  };

  this.getFormatedWeekLabels = function (week, first) {
    var all = _toConsumableArray(week);

    var last = all.splice(0, first);
    return [].concat(_toConsumableArray(all), _toConsumableArray(last));
  };
};

MonthCalendar.propTypes = {
  onlyCurrent: _propTypes["default"].bool,
  weekLabels: _propTypes["default"].arrayOf(_propTypes["default"].string),
  monthsLabels: _propTypes["default"].arrayOf(_propTypes["default"].string),
  firstDayOfWeek: _propTypes["default"].oneOf([0, 1]),
  innerRef: _propTypes["default"].oneOfType([_propTypes["default"].any]),
  defaultDate: _propTypes["default"].oneOfType([_propTypes["default"].string, _propTypes["default"].instanceOf(moment)]),
  // eslint-disable-next-line
  date: _propTypes["default"].oneOfType([_propTypes["default"].string, _propTypes["default"].instanceOf(moment)]),
  minDate: _propTypes["default"].oneOfType([_propTypes["default"].string, _propTypes["default"].instanceOf(moment)]),
  navigation: _propTypes["default"].arrayOf(_propTypes["default"].string),
  onNavigate: _propTypes["default"].func,
  dayRenderer: _propTypes["default"].func,
  onClick: _propTypes["default"].func
};
MonthCalendar.defaultProps = {
  innerRef: null,
  onlyCurrent: false,
  defaultDate: null,
  date: null,
  minDate: null,
  firstDayOfWeek: 0,
  weekLabels: ['D', 'S', 'T', 'Q', 'Q', 'S', 'S'],
  monthsLabels: ['Janeiro', 'Fevereiro', 'Março', 'Abril', 'Maio', 'Junho', 'Julho', 'Agosto', 'Setembro', 'Outubro', 'Novembro', 'Dezembro'],
  navigation: ['prev', 'next'],
  dayRenderer: defaultRenderer,
  onNavigate: function onNavigate() {},
  onClick: null
};
var _default = MonthCalendar;
exports["default"] = _default;