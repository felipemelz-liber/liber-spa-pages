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

var _momentRange = require('moment-range');

var _styles = require('./styles');

var _Util = require('../Util');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var moment = (0, _momentRange.extendMoment)(_moment2.default);

var defaultFormatData = function defaultFormatData(values, labels, day, colors) {
  return _react2.default.createElement(
    _react.Fragment,
    null,
    Object.keys(values).map(function (key, index) {
      var value = values[key];
      if (value.show || value.show === undefined) {
        var dot = void 0;
        if (!colors || typeof colors === 'string') {
          dot = _react2.default.createElement(
            _styles.BiggerDot,
            { color: colors },
            value.value
          );
        } else if (Array.isArray(colors)) {
          dot = _react2.default.createElement(
            _styles.BiggerDot,
            { color: colors[index] },
            value.value
          );
        } else {
          dot = _react2.default.createElement(
            _styles.BiggerDot,
            { color: colors[key] },
            value.value
          );
        }
        return _react2.default.createElement(
          _styles.DataContainer,
          { key: labels ? labels[key] : key },
          dot,
          _react2.default.createElement(
            _styles.Cell,
            null,
            labels ? labels[key] : key
          )
        );
      }
      return null;
    })
  );
};

var WeekCalendar = function (_Component) {
  _inherits(WeekCalendar, _Component);

  function WeekCalendar(props) {
    _classCallCheck(this, WeekCalendar);

    var _this = _possibleConstructorReturn(this, (WeekCalendar.__proto__ || Object.getPrototypeOf(WeekCalendar)).call(this));

    _initialiseProps.call(_this);

    var m = props.defaultDate ? moment(props.defaultDate) : moment();
    var screenSize = _this.getScreenSize();
    _this.state = {
      screenSize: screenSize,
      year: m.year(),
      week: m.week(),
      currMoment: m
    };
    return _this;
  }

  _createClass(WeekCalendar, [{
    key: 'componentDidMount',
    value: function componentDidMount() {
      window.addEventListener('resize', this.updateDimensions);
    }
  }, {
    key: 'componentWillReceiveProps',
    value: function componentWillReceiveProps(nextProps) {
      if (nextProps.date) {
        var m = moment(nextProps.date);

        this.setState({
          year: m.year(),
          week: m.week(),
          currMoment: m
        });
      }
    }
  }, {
    key: 'componentWillUnmount',
    value: function componentWillUnmount() {
      window.removeEventListener('resize', this.updateDimensions);
    }
  }, {
    key: 'render',
    value: function render() {
      var _state = this.state,
          year = _state.year,
          week = _state.week;
      var _props = this.props,
          weekDays = _props.weekDays,
          firstDayOfWeek = _props.firstDayOfWeek,
          months = _props.months;

      var weekRange = this.getWeekCalendar(year, week, firstDayOfWeek);
      return _react2.default.createElement(
        _styles.CalendarBody,
        { week: true },
        _react2.default.createElement(
          _styles.WeekNav,
          null,
          this.renderWeekNavigation(weekRange, months)
        ),
        _react2.default.createElement(
          _styles.WeekBody,
          null,
          this.renderWeek(weekDays, weekRange)
        )
      );
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
    _this2.setState({ screenSize: screenSize });
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
    var _state2 = _this2.state,
        year = _state2.year,
        screenSize = _state2.screenSize;

    var firstDay = weekRange[screenSize === 'small' || screenSize === 'medium' ? 1 : 0].date();
    var lastDay = weekRange[screenSize === 'small' || screenSize === 'medium' ? 5 : 6].date();
    if (months.length !== 12) {
      console.error('A year have 12 month, your year has ' + months.length);
    }
    return _react2.default.createElement(
      _styles.Cell,
      null,
      _react2.default.createElement(
        _styles.NavButton,
        { onClick: _this2.handleSubWeek },
        _react2.default.createElement(_styles.Left, null)
      ),
      _react2.default.createElement(
        _styles.Week,
        null,
        (0, _Util.pad)(firstDay),
        ' - ',
        (0, _Util.pad)(lastDay),
        ' ',
        months[weekRange[6].month()],
        ', ',
        year
      ),
      _react2.default.createElement(
        _styles.NavButton,
        { onClick: _this2.handleAddWeek },
        _react2.default.createElement(_styles.Right, null)
      )
    );
  };

  this.renderData = function (data, day) {
    var _props2 = _this2.props,
        formatData = _props2.formatData,
        notificationColor = _props2.notificationColor;

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
        console.error('A week have 7 days, your week has ' + weekDays.length);
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
        return _react2.default.createElement(
          _styles.WeekCellLink,
          dayProps,
          _react2.default.createElement(
            _styles.WeekDayValue,
            {
              disabled: day.day() === 0 || day.day() === 6,
              today: day.isSame(moment(), 'date')
            },
            _react2.default.createElement(
              'div',
              null,
              (0, _Util.pad)(day.date())
            ),
            _react2.default.createElement(
              'div',
              null,
              weekDays[day.day()]
            )
          ),
          renderedData ? _react2.default.createElement(
            'div',
            null,
            renderedData
          ) : null
        );
      }
      return _react2.default.createElement(
        _styles.WeekCell,
        dayProps,
        _react2.default.createElement(
          _styles.WeekDayValue,
          {
            disabled: day.day() === 0 || day.day() === 6,
            today: day.isSame(moment(), 'date')
          },
          _react2.default.createElement(
            'div',
            null,
            (0, _Util.pad)(day.date())
          ),
          _react2.default.createElement(
            'div',
            null,
            weekDays[day.day()]
          )
        ),
        renderedData ? _react2.default.createElement(
          'div',
          null,
          renderedData
        ) : null
      );
    });
  };
};

WeekCalendar.propTypes = {
  weekDays: _propTypes2.default.arrayOf(_propTypes2.default.string),
  months: _propTypes2.default.arrayOf(_propTypes2.default.string),
  firstDayOfWeek: _propTypes2.default.number,
  formatData: _propTypes2.default.func,
  data: _propTypes2.default.shape({
    labels: _propTypes2.default.objectOf(_propTypes2.default.string),
    content: _propTypes2.default.objectOf(_propTypes2.default.any)
  }),
  defaultDate: _propTypes2.default.oneOfType([_propTypes2.default.string, _propTypes2.default.instanceOf(moment)]),
  date: _propTypes2.default.oneOfType([_propTypes2.default.string, _propTypes2.default.instanceOf(moment)]),
  notificationColor: _propTypes2.default.oneOfType([_propTypes2.default.arrayOf(_propTypes2.default.string), _propTypes2.default.objectOf(_propTypes2.default.string), _propTypes2.default.string]),
  onWeekChange: _propTypes2.default.func
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

exports.default = WeekCalendar;