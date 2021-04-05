'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.TimeTickComponent = exports.TimeLabelComponent = undefined;

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _moment = require('moment');

var _moment2 = _interopRequireDefault(_moment);

var _victory = require('victory');

var _Themes = require('../../Themes');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var monthLabelStyle = {
  fontSize: '14px'
};
var markedDayLabelStyle = function markedDayLabelStyle(theme) {
  return {
    fill: (0, _Themes.handleThemeFromObject)(theme, 'barChart.timeComponents.markedDay', '#009dff'),
    fontSize: '11px'
  };
};

var TimeLabelComponent = exports.TimeLabelComponent = function (_Component) {
  _inherits(TimeLabelComponent, _Component);

  function TimeLabelComponent() {
    var _ref;

    var _temp, _this, _ret;

    _classCallCheck(this, TimeLabelComponent);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = TimeLabelComponent.__proto__ || Object.getPrototypeOf(TimeLabelComponent)).call.apply(_ref, [this].concat(args))), _this), _this.separatorLabelFormat = function (date, separator) {
      switch (separator) {
        case 'week':
          return date.locale('pt-br').format('WW').toUpperCase();
        case 'month':
        default:
          return date.locale('pt-br').format('MMM').toUpperCase();
      }
    }, _this.renderSeparator = function (config, info, size) {
      var x = info.x,
          y = info.y;

      if (config.showLine && !config.today) {
        return _react2.default.createElement('line', {
          x1: x,
          y1: y - 15,
          x2: x,
          y2: y - (size + 15),
          stroke: config.lineColor,
          strokeDasharray: '4, 4',
          strokeWidth: 2
        });
      }
      return null;
    }, _this.renderTodayMark = function (config, info, size) {
      var x = info.x,
          y = info.y,
          style = info.style,
          verticalAnchor = info.verticalAnchor,
          theme = info.theme,
          props = _objectWithoutProperties(info, ['x', 'y', 'style', 'verticalAnchor', 'theme']);

      if (config.today) {
        var line = _react2.default.createElement('line', {
          x1: x,
          y1: y - 15,
          x2: x,
          y2: y - (size + 15),
          stroke: (0, _Themes.handleThemeFromObject)(theme, 'barChart.timeComponents.line', '#009dff'),
          strokeDasharray: '4, 4'
        });
        var text = _react2.default.createElement(
          'text',
          { x: x, y: y, dy: 25 },
          _react2.default.createElement(
            'tspan',
            _extends({}, props, {
              style: _extends({}, style, markedDayLabelStyle(theme)),
              x: x
              // y={y}
              , y: config.start === null ? 15 : y
            }),
            '(dia atual)'
          )
        );
        var rect = null;
        if (config.start !== null) {
          rect = _react2.default.createElement('rect', {
            x: x,
            y: y - (size + 15),
            width: 16,
            height: size,
            fill: (0, _Themes.handleThemeFromObject)(theme, 'barChart.timeComponents.rect', '#dfe3eb'),
            opacity: 0.4
          });

          if (config.start) {
            rect = _react2.default.createElement('rect', {
              x: x - 16,
              y: y - (size + 15),
              width: 16,
              height: size,
              fill: (0, _Themes.handleThemeFromObject)(theme, 'barChart.timeComponents.rect', '#dfe3eb'),
              opacity: 0.4,
              strokeWidth: 2
            });
          }
        }

        return _react2.default.createElement(
          _react.Fragment,
          null,
          line,
          rect,
          text
        );
      }
      return null;
    }, _this.renderLabel = function (config, info) {
      var datum = info.datum,
          style = info.style;

      var labelStyle = _extends({}, style);
      var theme = _this.props.theme;

      if (config.today) {
        labelStyle.fill = (0, _Themes.handleThemeFromObject)(theme, 'barChart.timeComponents.label', '#009dff');
      }
      var date = (0, _moment2.default)(datum);
      return _react2.default.createElement(_victory.VictoryLabel, _extends({}, info, { style: labelStyle, text: config.showLabel ? date.format('DD') : null }));
    }, _this.renderMonthLabel = function (config, info) {
      var x = info.x,
          y = info.y,
          datum = info.datum,
          style = info.style,
          verticalAnchor = info.verticalAnchor,
          props = _objectWithoutProperties(info, ['x', 'y', 'datum', 'style', 'verticalAnchor']);

      var date = (0, _moment2.default)(datum);
      if (config.showSeparatorLabel || config.today && config.start) {
        return _react2.default.createElement(
          'text',
          { x: x, y: y, dy: 45 },
          _react2.default.createElement(
            'tspan',
            _extends({}, props, {
              style: _extends({}, style, monthLabelStyle),
              x: x,
              y: y,
              datum: datum
            }),
            _this.separatorLabelFormat(date, config.separator)
          )
        );
      }
      return null;
    }, _temp), _possibleConstructorReturn(_this, _ret);
  }

  _createClass(TimeLabelComponent, [{
    key: 'render',
    value: function render() {
      var _props = this.props,
          config = _props.config,
          lineSize = _props.lineSize,
          info = _objectWithoutProperties(_props, ['config', 'lineSize']);

      return _react2.default.createElement(
        _react.Fragment,
        null,
        this.renderTodayMark(config[info.index], info, lineSize),
        this.renderSeparator(config[info.index], info, lineSize),
        this.renderLabel(config[info.index], info),
        this.renderMonthLabel(config[info.index], info)
      );
    }
  }]);

  return TimeLabelComponent;
}(_react.Component);

TimeLabelComponent.propTypes = {
  config: _propTypes2.default.arrayOf(_propTypes2.default.any).isRequired,
  lineSize: _propTypes2.default.number.isRequired,
  theme: _propTypes2.default.objectOf(_propTypes2.default.any)
};

TimeLabelComponent.defaultProps = {
  theme: undefined
};

var TimeTickComponent = function TimeTickComponent(_ref2) {
  var config = _ref2.config,
      info = _objectWithoutProperties(_ref2, ['config']);

  if (!config[info.index].showTick) {
    return null;
  }
  return _react2.default.createElement('line', info);
};

exports.TimeTickComponent = TimeTickComponent;
TimeTickComponent.propTypes = {
  config: _propTypes2.default.arrayOf(_propTypes2.default.any).isRequired
};