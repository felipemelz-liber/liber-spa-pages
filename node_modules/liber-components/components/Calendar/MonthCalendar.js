'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _moment = require('moment');

var _moment2 = _interopRequireDefault(_moment);

var _lodash = require('lodash');

var _lodash2 = _interopRequireDefault(_lodash);

var _momentRange = require('moment-range');

var _Util = require('../Util');

var _styles = require('./styles');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var moment = (0, _momentRange.extendMoment)(_moment2.default);

var defaultFormatTooltip = function defaultFormatTooltip(values, labels, day, dots) {
  var hideTooltip = true;
  var content = {
    content: _react2.default.createElement(
      _react.Fragment,
      null,
      _react2.default.createElement(
        'h6',
        null,
        day.locale('pt-br').format('DD MMMM, YYYY ')
      ),
      Object.keys(values).map(function (key) {
        var value = values[key];
        if (value.show || value.show === undefined) {
          hideTooltip = false;
          var dot = void 0;

          if (!dots || typeof dots === 'string') {
            dot = _react2.default.createElement(_styles.Dot, { color: dots });
          } else {
            dot = _react2.default.createElement(_styles.Dot, { color: dots[key] });
          }
          return _react2.default.createElement(
            'div',
            { key: labels ? labels[key] : key },
            dot,
            value.value,
            ' ',
            labels ? labels[key] : key
          );
        }
        return null;
      })
    ),
    hide: hideTooltip
  };
  return content;
};

var MonthCalendar = function (_Component) {
  _inherits(MonthCalendar, _Component);

  function MonthCalendar(props) {
    _classCallCheck(this, MonthCalendar);

    var _this = _possibleConstructorReturn(this, (MonthCalendar.__proto__ || Object.getPrototypeOf(MonthCalendar)).call(this));

    _initialiseProps.call(_this);

    var m = props.defaultDate ? moment(props.defaultDate) : moment();
    _this.state = {
      year: m.year(),
      month: m.month(),
      currMoment: m
    };
    return _this;
  }

  _createClass(MonthCalendar, [{
    key: 'componentWillReceiveProps',
    value: function componentWillReceiveProps(nextProps) {
      if (nextProps.date) {
        var m = moment(nextProps.date);
        this.setState({
          year: m.year(),
          month: m.month(),
          currMoment: m
        });
      }
    }
  }, {
    key: 'render',
    value: function render() {
      var _state = this.state,
          month = _state.month,
          year = _state.year;
      var _props = this.props,
          weekDays = _props.weekDays,
          firstDayOfWeek = _props.firstDayOfWeek,
          months = _props.months;

      return _react2.default.createElement(
        _styles.CalendarBody,
        null,
        this.renderMonthNavigation(months),
        this.renderWeekDays(weekDays),
        this.renderMonth(year, month, firstDayOfWeek)
      );
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

    var content = formatTooltip.apply(undefined, arguments);
    if (_react2.default.isValidElement(content)) {
      return {
        content: content,
        hide: false
      };
    } else if (content.content !== undefined && content.hide !== undefined) {
      return content;
    }
    return { hide: true };
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
      console.error('A year have 12 month, your year has ' + months.length);
    }
    var _state2 = _this2.state,
        month = _state2.month,
        year = _state2.year;

    return _react2.default.createElement(
      _styles.Row,
      null,
      _react2.default.createElement(
        _styles.Cell,
        null,
        _react2.default.createElement(
          _styles.NavButton,
          { onClick: _this2.handleSubMonth },
          _react2.default.createElement(_styles.Left, null)
        ),
        _react2.default.createElement(
          _styles.Month,
          null,
          months[month],
          ', ',
          year
        ),
        _react2.default.createElement(
          _styles.NavButton,
          { onClick: _this2.handleAddMonth },
          _react2.default.createElement(_styles.Right, null)
        )
      )
    );
  };

  this.renderTooltip = function (data, day) {
    var notificationColor = _this2.props.notificationColor;

    if (data && data.content) {
      var values = data.content[day.format('YYYY-MM-DD')];
      if (!_lodash2.default.isEmpty(values) && !_lodash2.default.isEmpty(values.options)) {
        var position = 'middle';
        switch (day.day()) {
          case 0:case 1:
            position = 'right';
            break;
          case 5:case 6:
            position = 'left';
            break;
          case 2:case 3:case 4:default:
            position = 'middle';
            break;
        }

        var _getFormatedData = _this2.getFormatedData(values.options, data.labels, day, notificationColor),
            content = _getFormatedData.content,
            hide = _getFormatedData.hide;

        return _react2.default.createElement(
          _styles.Tooltip,
          { hide: hide, position: position },
          content
        );
      }
    }

    return null;
  };

  this.renderDots = function (data, day) {
    var notificationColor = _this2.props.notificationColor;

    if (data && data.content) {
      var values = data.content[day.format('YYYY-MM-DD')];
      if (!_lodash2.default.isEmpty(values) && !_lodash2.default.isEmpty(values.options)) {
        var dots = void 0;
        if (notificationColor) {
          if (typeof notificationColor === 'string') {
            var show = Object.keys(values.options).some(function (key) {
              var value = values.options[key];
              return value.show || value.show === undefined;
            });
            dots = show ? _react2.default.createElement(_styles.Dot, { key: 'dot_' + notificationColor + '_' + day.date(), color: notificationColor }) : null;
          } else {
            dots = Object.keys(values.options).map(function (key) {
              var value = values.options[key];
              if (value.show || value.show === undefined) {
                return _react2.default.createElement(_styles.Dot, { key: 'dot_' + notificationColor[key] + '_' + day.date(), color: notificationColor[key] });
              }
              return null;
            });
          }
        } else {
          var _show = Object.keys(values.options).some(function (key) {
            var value = values.options[key];
            return value.show || value.show === undefined;
          });
          dots = _show ? _react2.default.createElement(_styles.Dot, { key: 'dot_' + day.date() }) : null;
        }

        var allDots = _react2.default.createElement(
          _styles.FloatingDots,
          { today: day.isSame(moment(), 'date') },
          dots
        );

        return allDots;
      }
    }
    return null;
  };

  this.renderWeekDays = function (weekDays) {
    if (weekDays.length !== 7) {
      console.error('A week have 7 days, your week has ' + weekDays.length);
    }
    var days = weekDays.map(function (day) {
      return _react2.default.createElement(
        _styles.Cell,
        { key: day },
        _react2.default.createElement(
          _styles.WeekDay,
          null,
          (0, _Util.pad)(day)
        )
      );
    });
    return _react2.default.createElement(
      _styles.Row,
      null,
      days
    );
  };

  this.renderWeek = function (weekRange, key) {
    var _state3 = _this2.state,
        month = _state3.month,
        year = _state3.year;
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
        return _react2.default.createElement(
          _styles.Cell,
          { key: day.format('YYYY-MM-DD') },
          _react2.default.createElement(
            _styles.DayLink,
            dayProps,
            (0, _Util.pad)(day.date()),
            renderedTooltip,
            renderedDots
          )
        );
      }
      return _react2.default.createElement(
        _styles.Cell,
        { key: day.format('YYYY-MM-DD') },
        _react2.default.createElement(
          _styles.Day,
          dayProps,
          (0, _Util.pad)(day.date()),
          renderedTooltip,
          renderedDots
        )
      );
    });
    return _react2.default.createElement(
      _styles.Row,
      { key: key },
      days
    );
  };

  this.renderMonth = function () {
    var month = _this2.state.month;

    var calendar = _this2.getMonthCalendar.apply(_this2, arguments);
    return calendar.map(function (week, index) {
      return _this2.renderWeek(week, index + '_' + month);
    });
  };
};

MonthCalendar.propTypes = {
  weekDays: _propTypes2.default.arrayOf(_propTypes2.default.string),
  months: _propTypes2.default.arrayOf(_propTypes2.default.string),
  firstDayOfWeek: _propTypes2.default.number,
  defaultDate: _propTypes2.default.oneOfType([_propTypes2.default.string, _propTypes2.default.instanceOf(moment)]),
  date: _propTypes2.default.oneOfType([_propTypes2.default.string, _propTypes2.default.instanceOf(moment)]),
  notificationColor: _propTypes2.default.oneOfType([_propTypes2.default.arrayOf(_propTypes2.default.string), _propTypes2.default.objectOf(_propTypes2.default.string), _propTypes2.default.string]),
  data: _propTypes2.default.shape({
    labels: _propTypes2.default.objectOf(_propTypes2.default.string),
    content: _propTypes2.default.objectOf(_propTypes2.default.any)
  }),
  formatTooltip: _propTypes2.default.func,
  onMonthChange: _propTypes2.default.func
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

exports.default = MonthCalendar;