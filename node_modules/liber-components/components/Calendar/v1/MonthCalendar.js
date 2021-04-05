"use strict";

require("core-js/modules/es6.weak-map");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

require("core-js/modules/es6.array.some");

require("core-js/modules/es7.array.includes");

require("core-js/modules/es6.string.iterator");

require("core-js/modules/es6.array.from");

require("core-js/modules/es6.array.for-each");

require("core-js/modules/es7.symbol.async-iterator");

require("core-js/modules/es6.symbol");

require("core-js/modules/es6.object.define-property");

require("core-js/modules/es6.object.create");

require("core-js/modules/es6.object.set-prototype-of");

require("core-js/modules/web.dom.iterable");

require("core-js/modules/es6.array.iterator");

require("core-js/modules/es6.object.to-string");

require("core-js/modules/es6.object.keys");

require("core-js/modules/es6.array.map");

var _react = _interopRequireWildcard(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _moment = _interopRequireDefault(require("moment"));

var _lodash = _interopRequireDefault(require("lodash"));

var _momentRange = require("moment-range");

var _Util = require("../../Util");

var _styles = require("./styles");

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

var defaultFormatTooltip = function defaultFormatTooltip(values, labels, day, dots) {
  var hideTooltip = true;
  var content = {
    content: _react["default"].createElement(_react.Fragment, null, _react["default"].createElement("h6", null, day.locale('pt-br').format('DD MMMM, YYYY ')), Object.keys(values).map(function (key) {
      var value = values[key];

      if (value.show || value.show === undefined) {
        hideTooltip = false;
        var dot;

        if (!dots || typeof dots === 'string') {
          dot = _react["default"].createElement(_styles.Dot, {
            color: dots
          });
        } else {
          dot = _react["default"].createElement(_styles.Dot, {
            color: dots[key]
          });
        }

        return _react["default"].createElement("div", {
          key: labels ? labels[key] : key
        }, dot, value.value, " ", labels ? labels[key] : key);
      }

      return null;
    })),
    hide: hideTooltip
  };
  return content;
};

var MonthCalendar =
/*#__PURE__*/
function (_Component) {
  _inherits(MonthCalendar, _Component);

  function MonthCalendar(props) {
    var _this;

    _classCallCheck(this, MonthCalendar);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(MonthCalendar).call(this));

    _initialiseProps.call(_assertThisInitialized(_this));

    var m = props.defaultDate ? moment(props.defaultDate) : moment();
    _this.state = {
      year: m.year(),
      month: m.month(),
      currMoment: m,
      previousDate: props.date
    };
    return _this;
  }

  _createClass(MonthCalendar, [{
    key: "render",
    value: function render() {
      var _this$state = this.state,
          month = _this$state.month,
          year = _this$state.year;
      var _this$props = this.props,
          weekDays = _this$props.weekDays,
          firstDayOfWeek = _this$props.firstDayOfWeek,
          months = _this$props.months;
      return _react["default"].createElement(_styles.CalendarBody, null, this.renderMonthNavigation(months), this.renderWeekDays(weekDays), this.renderMonth(year, month, firstDayOfWeek));
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
          month: reference.month(),
          currMoment: reference,
          previousDate: date
        };
      }

      return null;
    }
  }]);

  return MonthCalendar;
}(_react.Component);

var _initialiseProps = function _initialiseProps() {
  var _this2 = this;

  this.getMonthCalendar = function (year, month, firstDayOfWeek) {
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

  this.getFormatedData = function () {
    var formatTooltip = _this2.props.formatTooltip;
    var content = formatTooltip.apply(void 0, arguments);

    if (_react["default"].isValidElement(content)) {
      return {
        content: content,
        hide: false
      };
    }

    if (content.content !== undefined && content.hide !== undefined) {
      return content;
    }

    return {
      hide: true
    };
  };

  this.handleAddMonth = function () {
    var currMoment = _this2.state.currMoment;
    var onMonthChange = _this2.props.onMonthChange;
    var newMoment = currMoment.add(1, 'M');

    _this2.setState({
      month: newMoment.month(),
      year: newMoment.year(),
      currMoment: newMoment
    }, function () {
      onMonthChange(newMoment.format('YYYY-MM-DD'), newMoment);
    });
  };

  this.handleSubMonth = function () {
    var currMoment = _this2.state.currMoment;
    var newMoment = currMoment.subtract(1, 'M');
    var onMonthChange = _this2.props.onMonthChange;

    _this2.setState({
      month: newMoment.month(),
      year: newMoment.year(),
      currMoment: newMoment
    }, function () {
      onMonthChange(newMoment.format('YYYY-MM-DD'), newMoment);
    });
  };

  this.renderMonthNavigation = function (months) {
    if (months.length !== 12) {
      console.error("A year have 12 month, your year has ".concat(months.length));
    }

    var _this2$state = _this2.state,
        month = _this2$state.month,
        year = _this2$state.year;
    return _react["default"].createElement(_styles.Row, null, _react["default"].createElement(_styles.Cell, null, _react["default"].createElement(_styles.NavButton, {
      onClick: _this2.handleSubMonth
    }, _react["default"].createElement(_styles.Left, null)), _react["default"].createElement(_styles.Month, null, months[month], ", ", year), _react["default"].createElement(_styles.NavButton, {
      onClick: _this2.handleAddMonth
    }, _react["default"].createElement(_styles.Right, null))));
  };

  this.renderTooltip = function (data, day) {
    var notificationColor = _this2.props.notificationColor;

    if (data && data.content) {
      var values = data.content[day.format('YYYY-MM-DD')];

      if (!_lodash["default"].isEmpty(values) && !_lodash["default"].isEmpty(values.options)) {
        var position = 'middle';

        switch (day.day()) {
          case 0:
          case 1:
            position = 'right';
            break;

          case 5:
          case 6:
            position = 'left';
            break;

          case 2:
          case 3:
          case 4:
          default:
            position = 'middle';
            break;
        }

        var _this2$getFormatedDat = _this2.getFormatedData(values.options, data.labels, day, notificationColor),
            content = _this2$getFormatedDat.content,
            hide = _this2$getFormatedDat.hide;

        return _react["default"].createElement(_styles.Tooltip, {
          hide: hide,
          position: position
        }, content);
      }
    }

    return null;
  };

  this.renderDots = function (data, day) {
    var notificationColor = _this2.props.notificationColor;

    if (data && data.content) {
      var values = data.content[day.format('YYYY-MM-DD')];

      if (!_lodash["default"].isEmpty(values) && !_lodash["default"].isEmpty(values.options)) {
        var dots;

        if (notificationColor) {
          if (typeof notificationColor === 'string') {
            var show = Object.keys(values.options).some(function (key) {
              var value = values.options[key];
              return value.show || value.show === undefined;
            });
            dots = show ? _react["default"].createElement(_styles.Dot, {
              key: "dot_".concat(notificationColor, "_").concat(day.date()),
              color: notificationColor
            }) : null;
          } else {
            dots = Object.keys(values.options).map(function (key) {
              var value = values.options[key];

              if (value.show || value.show === undefined) {
                return _react["default"].createElement(_styles.Dot, {
                  key: "dot_".concat(notificationColor[key], "_").concat(day.date()),
                  color: notificationColor[key]
                });
              }

              return null;
            });
          }
        } else {
          var _show = Object.keys(values.options).some(function (key) {
            var value = values.options[key];
            return value.show || value.show === undefined;
          });

          dots = _show ? _react["default"].createElement(_styles.Dot, {
            key: "dot_".concat(day.date())
          }) : null;
        }

        var allDots = _react["default"].createElement(_styles.FloatingDots, {
          today: day.isSame(moment(), 'date')
        }, dots);

        return allDots;
      }
    }

    return null;
  };

  this.renderWeekDays = function (weekDays) {
    if (weekDays.length !== 7) {
      console.error("A week have 7 days, your week has ".concat(weekDays.length));
    }

    var days = weekDays.map(function (day) {
      return _react["default"].createElement(_styles.Cell, {
        key: day
      }, _react["default"].createElement(_styles.WeekDay, null, (0, _Util.pad)(day)));
    });
    return _react["default"].createElement(_styles.Row, null, days);
  };

  this.renderWeek = function (weekRange, key) {
    var _this2$state2 = _this2.state,
        month = _this2$state2.month,
        year = _this2$state2.year;
    var data = _this2.props.data;
    var days = weekRange.map(function (day) {
      var renderedTooltip = _this2.renderTooltip(data, day);

      var renderedDots = _this2.renderDots(data, day);

      var middleWeek = [0, 1];
      var dayData = data && data.content ? data.content[day.format('YYYY-MM-DD')] : null;
      var dayProps = {
        today: day.isSame(moment(), 'date'),
        disabled: !day.isSame(moment([year, month]), 'month'),
        showDot: !middleWeek.includes(day.day()),
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
        return _react["default"].createElement(_styles.Cell, {
          key: day.format('YYYY-MM-DD')
        }, _react["default"].createElement(_styles.DayLink, dayProps, (0, _Util.pad)(day.date()), renderedTooltip, renderedDots));
      }

      return _react["default"].createElement(_styles.Cell, {
        key: day.format('YYYY-MM-DD')
      }, _react["default"].createElement(_styles.Day, dayProps, (0, _Util.pad)(day.date()), renderedTooltip, renderedDots));
    });
    return _react["default"].createElement(_styles.Row, {
      key: key
    }, days);
  };

  this.renderMonth = function () {
    var month = _this2.state.month;

    var calendar = _this2.getMonthCalendar.apply(_this2, arguments);

    return calendar.map(function (week, index) {
      return _this2.renderWeek(week, "".concat(index, "_").concat(month));
    });
  };
};

MonthCalendar.propTypes = {
  weekDays: _propTypes["default"].arrayOf(_propTypes["default"].string),
  months: _propTypes["default"].arrayOf(_propTypes["default"].string),
  firstDayOfWeek: _propTypes["default"].number,
  defaultDate: _propTypes["default"].oneOfType([_propTypes["default"].string, _propTypes["default"].instanceOf(moment)]),
  date: _propTypes["default"].oneOfType([_propTypes["default"].string, _propTypes["default"].instanceOf(moment)]),
  notificationColor: _propTypes["default"].oneOfType([_propTypes["default"].arrayOf(_propTypes["default"].string), _propTypes["default"].objectOf(_propTypes["default"].string), _propTypes["default"].string]),
  data: _propTypes["default"].shape({
    labels: _propTypes["default"].objectOf(_propTypes["default"].string),
    content: _propTypes["default"].objectOf(_propTypes["default"].any)
  }),
  formatTooltip: _propTypes["default"].func,
  onMonthChange: _propTypes["default"].func
};
MonthCalendar.defaultProps = {
  weekDays: ['dom', 'seg', 'ter', 'qua', 'qui', 'sex', 'sab'],
  months: ['janeiro', 'fevereiro', 'março', 'abril', 'maio', 'junho', 'julho', 'agosto', 'setembro', 'outubro', 'novembro', 'dezembro'],
  firstDayOfWeek: 0,
  defaultDate: null,
  date: null,
  notificationColor: null,
  data: null,
  formatTooltip: defaultFormatTooltip,
  onMonthChange: function onMonthChange() {}
};
var _default = MonthCalendar;
exports["default"] = _default;