"use strict";

require("core-js/modules/es6.string.iterator");

require("core-js/modules/es6.weak-map");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.TimeTickComponent = exports.TimeLabelComponent = void 0;

require("core-js/modules/es7.symbol.async-iterator");

require("core-js/modules/es6.object.assign");

require("core-js/modules/es6.object.define-properties");

require("core-js/modules/es7.object.get-own-property-descriptors");

require("core-js/modules/es6.array.for-each");

require("core-js/modules/es6.array.filter");

require("core-js/modules/es6.symbol");

require("core-js/modules/es6.array.index-of");

require("core-js/modules/web.dom.iterable");

require("core-js/modules/es6.array.iterator");

require("core-js/modules/es6.object.to-string");

require("core-js/modules/es6.object.keys");

require("core-js/modules/es6.object.define-property");

require("core-js/modules/es6.object.create");

require("core-js/modules/es6.object.set-prototype-of");

require("core-js/modules/es6.array.fill");

var _react = _interopRequireWildcard(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _moment = _interopRequireDefault(require("moment"));

var _victory = require("victory");

var _Themes = require("../Themes");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function _getRequireWildcardCache() { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; if (obj != null) { var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(source, true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(source).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

var monthLabelStyle = {
  fontSize: '14px'
};

var markedDayLabelStyle = function markedDayLabelStyle(theme) {
  return {
    fill: (0, _Themes.handleThemeFromObject)(theme, 'barChart.timeComponents.markedDay', '#009dff'),
    fontSize: '11px'
  };
};

var TimeLabelComponent =
/*#__PURE__*/
function (_Component) {
  _inherits(TimeLabelComponent, _Component);

  function TimeLabelComponent() {
    var _getPrototypeOf2;

    var _temp, _this;

    _classCallCheck(this, TimeLabelComponent);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _possibleConstructorReturn(_this, (_temp = _this = _possibleConstructorReturn(this, (_getPrototypeOf2 = _getPrototypeOf(TimeLabelComponent)).call.apply(_getPrototypeOf2, [this].concat(args))), _this.getLabelFormatedDate = function (date, format) {
      switch (format) {
        case 'year':
          return date.format('YYYY');

        case 'month':
          return date.locale('pt-br').format('MMM').toUpperCase();

        case 'days':
        default:
          return date.format('DD');
      }
    }, _this.getTodayLabel = function (format) {
      switch (format) {
        case 'year':
          return '(ano atual)';

        case 'month':
          return '(mês atual)';

        case 'days':
        default:
          return '(dia atual)';
      }
    }, _this.separatorLabelFormat = function (date, separator) {
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
        return _react["default"].createElement("line", {
          x1: x,
          y1: y - 15,
          x2: x,
          y2: y - (size + 15),
          stroke: config.lineColor,
          strokeDasharray: "4, 4",
          strokeWidth: 2
        });
      }

      return null;
    }, _this.renderTodayMark = function (config, info, size, screenSize) {
      var x = info.x,
          y = info.y,
          style = info.style,
          verticalAnchor = info.verticalAnchor,
          theme = info.theme,
          props = _objectWithoutProperties(info, ["x", "y", "style", "verticalAnchor", "theme"]);

      var small = screenSize === 'small' || screenSize === 'medium';

      if (config.today) {
        var line = _react["default"].createElement("line", {
          x1: x,
          y1: y - 15,
          x2: x,
          y2: y - (size + 15),
          stroke: (0, _Themes.handleThemeFromObject)(theme, 'barChart.timeComponents.line', '#009dff'),
          strokeDasharray: "4, 4"
        });

        var text = _react["default"].createElement("text", {
          x: x,
          y: y,
          dy: 25
        }, _react["default"].createElement("tspan", _extends({}, props, {
          style: _objectSpread({}, style, {}, markedDayLabelStyle(theme)),
          x: x // y={y}
          ,
          y: config.start === null ? 15 : y
        }), _this.getTodayLabel(config.format)));

        var rect = null;

        if (config.start !== null) {
          rect = _react["default"].createElement("rect", {
            x: x,
            y: y - (size + 15),
            width: small ? 26 : 16,
            height: size,
            fill: (0, _Themes.handleThemeFromObject)(theme, 'barChart.timeComponents.rect', '#dfe3eb'),
            opacity: 0.4,
            style: {
              pointerEvents: 'none'
            }
          });

          if (config.start) {
            var w = small ? 55 : 16;
            rect = _react["default"].createElement("rect", {
              x: x - w,
              y: y - (size + 15),
              width: w,
              height: size,
              fill: (0, _Themes.handleThemeFromObject)(theme, 'barChart.timeComponents.rect', '#dfe3eb'),
              opacity: 0.4,
              strokeWidth: 2,
              style: {
                pointerEvents: 'none'
              }
            });
          }
        }

        return _react["default"].createElement(_react.Fragment, null, line, rect, text);
      }

      return null;
    }, _this.renderLabel = function (config, info) {
      var datum = info.datum,
          style = info.style;

      var labelStyle = _objectSpread({}, style);

      var theme = _this.props.theme;

      if (config.today) {
        labelStyle.fill = (0, _Themes.handleThemeFromObject)(theme, 'barChart.timeComponents.label', '#009dff');
      }

      var date = (0, _moment["default"])(datum);
      return _react["default"].createElement(_victory.VictoryLabel, _extends({}, info, {
        style: labelStyle,
        text: config.showLabel ? _this.getLabelFormatedDate(date, config.format) : null
      }));
    }, _this.renderMonthLabel = function (config, info) {
      var x = info.x,
          y = info.y,
          datum = info.datum,
          style = info.style,
          verticalAnchor = info.verticalAnchor,
          props = _objectWithoutProperties(info, ["x", "y", "datum", "style", "verticalAnchor"]);

      var date = (0, _moment["default"])(datum);

      if (config.separator) {
        var diff = (0, _moment["default"])(datum).endOf(config.separator).diff(date, 'days');
        if (diff >= 0 && diff < 5) return null;
      }

      if (config.showSeparatorLabel || config.today && config.start) {
        return _react["default"].createElement("text", {
          x: x,
          y: y,
          dy: 45
        }, _react["default"].createElement("tspan", _extends({}, props, {
          style: _objectSpread({}, style, {}, monthLabelStyle),
          x: x,
          y: y,
          datum: datum
        }), _this.separatorLabelFormat(date, config.separator)));
      }

      return null;
    }, _temp));
  }

  _createClass(TimeLabelComponent, [{
    key: "render",
    value: function render() {
      var _this$props = this.props,
          config = _this$props.config,
          lineSize = _this$props.lineSize,
          screenSize = _this$props.screenSize,
          info = _objectWithoutProperties(_this$props, ["config", "lineSize", "screenSize"]);

      return _react["default"].createElement(_react.Fragment, null, this.renderTodayMark(config[info.index], info, lineSize, screenSize), this.renderSeparator(config[info.index], info, lineSize), this.renderLabel(config[info.index], info), this.renderMonthLabel(config[info.index], info));
    }
  }]);

  return TimeLabelComponent;
}(_react.Component);

exports.TimeLabelComponent = TimeLabelComponent;
TimeLabelComponent.propTypes = {
  config: _propTypes["default"].arrayOf(_propTypes["default"].any).isRequired,
  lineSize: _propTypes["default"].number.isRequired,
  theme: _propTypes["default"].objectOf(_propTypes["default"].any),
  screenSize: _propTypes["default"].string
};
TimeLabelComponent.defaultProps = {
  theme: undefined,
  screenSize: 'large'
};

var TimeTickComponent = function TimeTickComponent(_ref) {
  var config = _ref.config,
      info = _objectWithoutProperties(_ref, ["config"]);

  if (!config[info.index].showTick) {
    return null;
  }

  return _react["default"].createElement("line", info);
};

exports.TimeTickComponent = TimeTickComponent;
TimeTickComponent.propTypes = {
  config: _propTypes["default"].arrayOf(_propTypes["default"].any).isRequired
};