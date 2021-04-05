"use strict";

require("core-js/modules/es6.weak-map");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

require("core-js/modules/es6.array.for-each");

require("core-js/modules/es6.string.iterator");

require("core-js/modules/es6.array.from");

require("core-js/modules/es6.array.reduce");

require("core-js/modules/es7.symbol.async-iterator");

require("core-js/modules/es6.symbol");

require("core-js/modules/es6.object.define-property");

require("core-js/modules/es6.object.create");

require("core-js/modules/es6.object.set-prototype-of");

require("core-js/modules/es6.array.is-array");

require("core-js/modules/web.dom.iterable");

require("core-js/modules/es6.array.iterator");

require("core-js/modules/es6.object.to-string");

require("core-js/modules/es6.object.keys");

require("core-js/modules/es6.array.map");

var _react = _interopRequireWildcard(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _moment = _interopRequireDefault(require("moment"));

var _momentRange = require("moment-range");

var _styles = require("./styles");

var _Util = require("../../Util");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function _getRequireWildcardCache() { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; if (obj != null) { var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

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

var defaultFormatData = function defaultFormatData(values, labels, day, colors) {
  return _react["default"].createElement(_react.Fragment, null, Object.keys(values).map(function (key, index) {
    var value = values[key];

    if (value.show || value.show === undefined) {
      var dot;

      if (!colors || typeof colors === 'string') {
        dot = _react["default"].createElement(_styles.BiggerDot, {
          color: colors
        }, value.value);
      } else if (Array.isArray(colors)) {
        dot = _react["default"].createElement(_styles.BiggerDot, {
          color: colors[index]
        }, value.value);
      } else {
        dot = _react["default"].createElement(_styles.BiggerDot, {
          color: colors[key]
        }, value.value);
      }

      return _react["default"].createElement(_styles.DataContainer, {
        key: labels ? labels[key] : key
      }, dot, _react["default"].createElement(_styles.Cell, null, labels ? labels[key] : key));
    }

    return null;
  }));
};

var WeekCalendar =
/*#__PURE__*/
function (_Component) {
  _inherits(WeekCalendar, _Component);

  function WeekCalendar(props) {
    var _this;

    _classCallCheck(this, WeekCalendar);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(WeekCalendar).call(this));

    _initialiseProps.call(_assertThisInitialized(_this));

    var m = props.defaultDate ? moment(props.defaultDate) : moment();

    var screenSize = _this.getScreenSize();

    _this.state = {
      screenSize: screenSize,
      year: m.year(),
      week: m.week(),
      currMoment: m,
      previousDate: props.date
    };
    return _this;
  }

  _createClass(WeekCalendar, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      window.addEventListener('resize', this.updateDimensions);
    }
  }, {
    key: "componentWillUnmount",
    value: function componentWillUnmount() {
      window.removeEventListener('resize', this.updateDimensions);
    }
  }, {
    key: "render",
    value: function render() {
      var _this$state = this.state,
          year = _this$state.year,
          week = _this$state.week;
      var _this$props = this.props,
          weekDays = _this$props.weekDays,
          firstDayOfWeek = _this$props.firstDayOfWeek,
          months = _this$props.months;
      var weekRange = this.getWeekCalendar(year, week, firstDayOfWeek);
      return _react["default"].createElement(_styles.CalendarBody, {
        week: true
      }, _react["default"].createElement(_styles.WeekNav, null, this.renderWeekNavigation(weekRange, months)), _react["default"].createElement(_styles.WeekBody, null, this.renderWeek(weekDays, weekRange)));
    }
  }], [{
    key: "getDerivedStateFromProps",
    value: function getDerivedStateFromProps(props, state) {
      var date = props.date;
      var previousDate = state.previousDate;

      if (date && date !== previousDate) {
        var reference = moment(date);
        return {
          year: reference.year(),
          week: reference.week(),
          currMoment: reference,
          previousDate: date
        };
      }

      return null;
    }
  }]);

  return WeekCalendar;
}(_react.Component);

var _initialiseProps = function _initialiseProps() {
  var _this2 = this;

  this.getScreenSize = function () {
    var _window = window,
        innerWidth = _window.innerWidth;
    var screenSize = Object.keys(_Util.sizes).reduce(function (prev, next) {
      if (parseInt(_Util.sizes[next].slice(0, -2), 10) <= innerWidth) return next;
      return prev;
    }, 'small');
    return screenSize;
  };

  this.getWeekCalendar = function (year, week, firstDayOfWeek) {
    var firstWeekDay = moment().year(year).week(week).day(firstDayOfWeek);
    var lastWeekDay = moment().year(year).week(week).day(firstDayOfWeek + 6);
    var weekRange = moment.range(firstWeekDay, lastWeekDay);
    return Array.from(weekRange.by('days'));
  };

  this.updateDimensions = function () {
    var screenSize = _this2.getScreenSize();

    _this2.setState({
      screenSize: screenSize
    });
  };

  this.handleAddWeek = function () {
    var currMoment = _this2.state.currMoment;
    var onWeekChange = _this2.props.onWeekChange;
    var newMoment = currMoment.add(1, 'w');

    _this2.setState({
      week: newMoment.week(),
      year: newMoment.year(),
      currMoment: newMoment
    }, function () {
      onWeekChange(newMoment.format('YYYY-MM-DD'), newMoment);
    });
  };

  this.handleSubWeek = function () {
    var currMoment = _this2.state.currMoment;
    var newMoment = currMoment.subtract(1, 'w');
    var onWeekChange = _this2.props.onWeekChange;

    _this2.setState({
      week: newMoment.week(),
      year: newMoment.year(),
      currMoment: newMoment
    }, function () {
      onWeekChange(newMoment.format('YYYY-MM-DD'), newMoment);
    });
  };

  this.renderWeekNavigation = function (weekRange, months) {
    var _this2$state = _this2.state,
        year = _this2$state.year,
        screenSize = _this2$state.screenSize;
    var firstDay = weekRange[screenSize === 'small' || screenSize === 'medium' ? 1 : 0].date();
    var lastDay = weekRange[screenSize === 'small' || screenSize === 'medium' ? 5 : 6].date();

    if (months.length !== 12) {
      console.error("A year have 12 month, your year has ".concat(months.length));
    }

    return _react["default"].createElement(_styles.Cell, null, _react["default"].createElement(_styles.NavButton, {
      onClick: _this2.handleSubWeek
    }, _react["default"].createElement(_styles.Left, null)), _react["default"].createElement(_styles.Week, null, (0, _Util.pad)(firstDay), " - ", (0, _Util.pad)(lastDay), " ", months[weekRange[6].month()], ",", ' ', year), _react["default"].createElement(_styles.NavButton, {
      onClick: _this2.handleAddWeek
    }, _react["default"].createElement(_styles.Right, null)));
  };

  this.renderData = function (data, day) {
    var _this2$props = _this2.props,
        formatData = _this2$props.formatData,
        notificationColor = _this2$props.notificationColor;

    if (data && data.content) {
      var values = data.content[day.format('YYYY-MM-DD')];

      if (values && values.options) {
        return formatData(values.options, data.labels, day, notificationColor);
      }
    }

    return null;
  };

  this.renderWeek = function (weekDays, weekRange) {
    var data = _this2.props.data;
    var screenSize = _this2.state.screenSize;
    return weekRange.map(function (day) {
      var renderedData = _this2.renderData(data, day);

      if (weekDays.length !== 7) {
        console.error("A week have 7 days, your week has ".concat(weekDays.length));
      }

      if (screenSize === 'small' || screenSize === 'medium') {
        if (day.day() === 0 || day.day() === 6) {
          return null;
        }
      }

      var dayData = data && data.content ? data.content[day.format('YYYY-MM-DD')] : null;
      var dayProps = {
        key: day.date(),
        pointer: false
      };

      if (dayData) {
        var href = dayData.href,
            events = dayData.events;
        dayProps.pointer = true;
        dayProps.href = href;

        if (!href && events) {
          Object.keys(events).forEach(function (event) {
            dayProps[event] = function () {
              events[event](day.format('YYYY-MM-DD'), day);
            };
          });
        }
      }

      if (dayProps.href) {
        return _react["default"].createElement(_styles.WeekCellLink, dayProps, _react["default"].createElement(_styles.WeekDayValue, {
          disabled: day.day() === 0 || day.day() === 6,
          today: day.isSame(moment(), 'date')
        }, _react["default"].createElement("div", null, (0, _Util.pad)(day.date())), _react["default"].createElement("div", null, weekDays[day.day()])), renderedData ? _react["default"].createElement("div", null, renderedData) : null);
      }

      return _react["default"].createElement(_styles.WeekCell, dayProps, _react["default"].createElement(_styles.WeekDayValue, {
        disabled: day.day() === 0 || day.day() === 6,
        today: day.isSame(moment(), 'date')
      }, _react["default"].createElement("div", null, (0, _Util.pad)(day.date())), _react["default"].createElement("div", null, weekDays[day.day()])), renderedData ? _react["default"].createElement("div", null, renderedData) : null);
    });
  };
};

WeekCalendar.propTypes = {
  weekDays: _propTypes["default"].arrayOf(_propTypes["default"].string),
  months: _propTypes["default"].arrayOf(_propTypes["default"].string),
  firstDayOfWeek: _propTypes["default"].number,
  formatData: _propTypes["default"].func,
  data: _propTypes["default"].shape({
    labels: _propTypes["default"].objectOf(_propTypes["default"].string),
    content: _propTypes["default"].objectOf(_propTypes["default"].any)
  }),
  defaultDate: _propTypes["default"].oneOfType([_propTypes["default"].string, _propTypes["default"].instanceOf(moment)]),
  date: _propTypes["default"].oneOfType([_propTypes["default"].string, _propTypes["default"].instanceOf(moment)]),
  notificationColor: _propTypes["default"].oneOfType([_propTypes["default"].arrayOf(_propTypes["default"].string), _propTypes["default"].objectOf(_propTypes["default"].string), _propTypes["default"].string]),
  onWeekChange: _propTypes["default"].func,
  onDayClick: _propTypes["default"].func
};
WeekCalendar.defaultProps = {
  weekDays: ['dom', 'seg', 'ter', 'qua', 'qui', 'sex', 'sab'],
  months: ['janeiro', 'fevereiro', 'março', 'abril', 'maio', 'junho', 'julho', 'agosto', 'setembro', 'outubro', 'novembro', 'dezembro'],
  firstDayOfWeek: 0,
  defaultDate: null,
  data: null,
  date: null,
  notificationColor: null,
  formatData: defaultFormatData,
  onWeekChange: function onWeekChange() {},
  onDayClick: function onDayClick() {}
};
var _default = WeekCalendar;
exports["default"] = _default;