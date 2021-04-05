"use strict";

require("core-js/modules/es6.weak-map");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

require("core-js/modules/es6.object.define-properties");

require("core-js/modules/es7.object.get-own-property-descriptors");

require("core-js/modules/es6.array.for-each");

require("core-js/modules/es6.array.filter");

require("core-js/modules/es6.array.is-array");

require("core-js/modules/es6.number.constructor");

require("core-js/modules/es6.number.is-integer");

require("core-js/modules/es7.array.includes");

require("core-js/modules/es6.string.includes");

require("core-js/modules/es6.array.reduce");

require("core-js/modules/es6.string.iterator");

require("core-js/modules/es6.array.from");

require("core-js/modules/es6.object.assign");

require("core-js/modules/es6.array.index-of");

require("core-js/modules/web.dom.iterable");

require("core-js/modules/es6.array.iterator");

require("core-js/modules/es6.object.keys");

require("core-js/modules/es7.symbol.async-iterator");

require("core-js/modules/es6.symbol");

require("core-js/modules/es6.object.define-property");

require("core-js/modules/es6.object.create");

require("core-js/modules/es6.object.set-prototype-of");

require("core-js/modules/es6.regexp.to-string");

require("core-js/modules/es6.date.to-string");

require("core-js/modules/es6.object.to-string");

var _react = _interopRequireWildcard(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _moment = _interopRequireDefault(require("moment"));

var _momentTimezone = _interopRequireDefault(require("moment-timezone"));

var _lodash = _interopRequireDefault(require("lodash"));

var _momentRange = require("moment-range");

var _reactHammerjs = _interopRequireDefault(require("react-hammerjs"));

var _victory = require("victory");

var _Themes = require("../../Themes");

var _styles = require("../styles");

var _TimeComponents = require("../TimeComponents");

var _Util = require("../../Util");

var _Bar = _interopRequireDefault(require("./Bar"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function _getRequireWildcardCache() { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; if (obj != null) { var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(source, true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(source).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

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

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

_momentTimezone["default"].tz.setDefault('UTC');

var moment = (0, _momentRange.extendMoment)(_moment["default"]);

var G = function G(_ref) {
  var standalone = _ref.standalone,
      props = _objectWithoutProperties(_ref, ["standalone"]);

  return _react["default"].createElement("g", _extends({}, props, {
    standalone: standalone.toString()
  }));
};

G.propTypes = {
  standalone: _propTypes["default"].bool
};
G.defaultProps = {
  standalone: false
};

var xAxisStyle = function xAxisStyle(theme) {
  return {
    stroke: (0, _Themes.handleThemeFromObject)(theme, 'barChart.xAxis.stroke', '#dfe3eb'),
    strokeWidth: '3px'
  };
};

var yAxisStyle = {
  fill: 'unset',
  stroke: 'unset'
};

var yGridStyle = function yGridStyle(theme) {
  return {
    stroke: (0, _Themes.handleThemeFromObject)(theme, 'barChart.yAxis.grid', '#dfe3eb')
  };
};

var yTickLabelStyle = function yTickLabelStyle(theme, screenSize) {
  var small = screenSize === 'small' || screenSize === 'medium';
  return {
    fill: (0, _Themes.handleThemeFromObject)(theme, 'barChart.yAxis.tick', '#8e869c'),
    fontFamily: (0, _Themes.handleThemeFromObject)(theme, 'barChart.yAxis.fontFamily', 'Roboto'),
    fontSize: (0, _Themes.handleThemeFromObject)(theme, small ? 'barChart.yAxis.fontSize.small' : 'barChart.yAxis.fontSize.large', small ? '10px' : '16px'),
    fontWeight: (0, _Themes.handleThemeFromObject)(theme, 'barChart.yAxis.fontWeight', '500')
  };
};

var xTickStyle = function xTickStyle(theme) {
  return {
    stroke: (0, _Themes.handleThemeFromObject)(theme, 'barChart.xAxis.stroke', '#dfe3eb'),
    size: 5,
    strokeWidth: '6px'
  };
};

var xTickLabelStyle = function xTickLabelStyle(theme) {
  return {
    fill: (0, _Themes.handleThemeFromObject)(theme, 'barChart.xAxis.tick', '#8e869c'),
    fontFamily: (0, _Themes.handleThemeFromObject)(theme, 'barChart.xAxis.fontFamily', 'Roboto'),
    fontSize: (0, _Themes.handleThemeFromObject)(theme, 'barChart.xAxis.fontSize', '12px'),
    fontWeight: (0, _Themes.handleThemeFromObject)(theme, 'barChart.xAxis.fontWeight', '500')
  };
};

var YLabel = function YLabel(props) {
  var w = 40;
  var h = 14;
  var xShift = (w + 32) / 2;
  var yShift = h / 2;
  return _react["default"].createElement(_react.Fragment, null, _react["default"].createElement("rect", {
    x: props.x - xShift,
    y: props.y - yShift,
    ry: "4",
    rx: "4",
    width: w,
    height: h,
    fill: "#DFE3EB"
  }), _react["default"].createElement(_victory.VictoryLabel, props));
};

YLabel.propTypes = {
  x: _propTypes["default"].number,
  y: _propTypes["default"].number
};
YLabel.defaultProps = {
  x: undefined,
  y: undefined
};

var BarChart =
/*#__PURE__*/
function (_Component) {
  _inherits(BarChart, _Component);

  function BarChart(props) {
    var _this;

    _classCallCheck(this, BarChart);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(BarChart).call(this, props));

    _initialiseProps.call(_assertThisInitialized(_this));

    var screenSize = (0, _Util.getScreenSize)(window);
    _this.sliderOffset = {
      small: 7,
      medium: 15
    };
    _this.state = {
      screenSize: screenSize,
      brushDomain: _this.getBrushDomain(0, screenSize),
      sliderValue: 0
    };
    return _this;
  }

  _createClass(BarChart, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      this.setScreeSize();
      window.addEventListener('resize', this.setScreeSize);
    }
  }, {
    key: "componentWillUnmount",
    value: function componentWillUnmount() {
      window.removeEventListener('resize', this.setScreeSize);
    }
  }, {
    key: "render",
    value: function render() {
      var _this2 = this;

      var _this$props = this.props,
          height = _this$props.height,
          width = _this$props.width,
          xDomain = _this$props.xDomain,
          yDomain = _this$props.yDomain;
      var padding = this.padding();
      var first = xDomain.first,
          last = xDomain.last;
      var screenSize = this.state.screenSize;
      var small = screenSize === 'small' || screenSize === 'medium';
      return _react["default"].createElement(_reactHammerjs["default"], {
        onPan: small ? function (e) {
          var events = {
            panright: -0.4,
            panleft: 0.4
          };
          var sliderValue = _this2.state.sliderValue;
          var value = sliderValue + events[e.additionalEvent];
          var min = 0;

          var max = moment(last).diff(moment(first), 'days') - _this2.sliderOffset[screenSize];

          if (value >= min && value <= max) {
            _this2.setState(function (prevState) {
              return {
                sliderValue: parseFloat(value, 10),
                brushDomain: _this2.getBrushDomain(parseFloat(value, 10), prevState.screenSize)
              };
            });
          }
        } : null,
        direction: "DIRECTION_HORIZONTAL"
      }, _react["default"].createElement("div", null, _react["default"].createElement(_victory.VictoryChart, {
        bindTooltipToMouse: true,
        width: width,
        height: height,
        domainPadding: {
          x: xDomain.padding || 15,
          y: yDomain.padding || null
        },
        scale: {
          x: xDomain.scale || 'time',
          y: yDomain.scale || 'linear'
        },
        containerComponent: _react["default"].createElement(_styles.GraphContainer, null),
        domain: {
          x: this.state.brushDomain
        },
        padding: padding
      }, _react["default"].createElement(G, null, _react["default"].createElement("defs", null, _react["default"].createElement("clipPath", {
        id: "victory-clip-2"
      }, _react["default"].createElement("rect", {
        x: small ? '0' : '70',
        y: "50",
        width: width - (padding.left + padding.right),
        height: height - (padding.top + padding.bottom),
        role: "presentation",
        shapeRendering: "auto",
        vectorEffect: "non-scaling-stroke"
      })))), this.renderYAxis(), this.renderBars(), this.renderXAxis(), small ? this.renderYAxis(true, false) : null), small ? _react["default"].createElement(_styles.Slider, {
        width: width,
        value: this.state.sliderValue,
        min: 0,
        max: moment(last).diff(moment(first), 'days') - this.sliderOffset[screenSize],
        onChange: function onChange(event) {
          var value = event.target.value;

          _this2.setState(function (prevState) {
            return {
              sliderValue: parseInt(value, 10),
              brushDomain: _this2.getBrushDomain(parseInt(value, 10), prevState.screenSize)
            };
          });
        }
      }) : null));
    }
  }]);

  return BarChart;
}(_react.Component);

var _initialiseProps = function _initialiseProps() {
  var _this3 = this;

  this.setScreeSize = function () {
    var screenSize = (0, _Util.getScreenSize)(window);

    _this3.setState({
      screenSize: screenSize,
      brushDomain: _this3.getBrushDomain(0, screenSize),
      sliderValue: 0
    });
  };

  this.getBrushDomain = function (sliderValue, screenSize) {
    var _this3$props = _this3.props,
        xDomain = _this3$props.xDomain,
        data = _this3$props.data;
    var first = xDomain.first,
        last = xDomain.last;

    if (xDomain.scale === 'time') {
      if (screenSize === 'small' || screenSize === 'medium') {
        var firstDayOfDomain = moment(first || data[0].x).subtract(1, 'days').add(sliderValue, 'days');
        var lastDayOfDomain = moment(firstDayOfDomain).add(_this3.sliderOffset[screenSize], 'days');
        return [firstDayOfDomain, lastDayOfDomain];
      }

      return [moment(first || data[0].x), last || data[data.length - 1].x];
    }

    return [first || data[0].x, last || data[data.length - 1].x];
  };

  this.getRangeTicks = function (range, offset, offsetBy, skip) {
    var screenSize = _this3.state.screenSize;
    var arr = Array.from(range.by(offsetBy, {
      step: screenSize === 'small' || screenSize === 'medium' ? 0 : offset
    }));
    var skipCounter = skip;
    return arr.reduce(function (prev, next, index) {
      prev.ticks.push(next);
      var showLabel = false;

      if (skipCounter === skip) {
        showLabel = true;
        skipCounter = 0;
      } else {
        skipCounter += 1;
      }

      prev.config.push({
        showTick: true,
        showLabel: showLabel,
        showLine: false,
        showMonthLabel: index === 0,
        format: offsetBy
      });
      return prev;
    }, {
      ticks: [],
      config: []
    });
  };

  this.getSeparators = function (range, filter) {
    var def = {
      ticks: [],
      config: [],
      strings: []
    };

    if (filter) {
      var arr = Array.from(range.by('day'));
      return arr.reduce(function (prev, next) {
        var marker = next.startOf(filter);

        if (range.contains(marker) && !prev.strings.includes(marker.format('MM'))) {
          prev.ticks.push(marker);
          prev.strings.push(marker.format('MM'));
          prev.config.push({
            showTick: false,
            showLabel: false,
            showLine: true,
            lineColor: (0, _Themes.handleThemeFromObject)(_this3.props.theme, 'barChart.separator', '#dfe3eb'),
            showSeparatorLabel: true,
            separator: filter
          });
        }

        return prev;
      }, def);
    }

    return def;
  };

  this.getTickValues = function (start, finish, offset, offsetBy, skip, separator, past) {
    var _this3$props2 = _this3.props,
        xDomain = _this3$props2.xDomain,
        data = _this3$props2.data;
    var first = xDomain.first,
        last = xDomain.last;
    var ticks;
    var config;
    var today = moment().startOf(offsetBy);
    var range = moment.range(start, finish);

    var separators = _this3.getSeparators(range, separator);

    var configTicks = _this3.getRangeTicks(range, offset, offsetBy, skip);

    configTicks = _this3.addFinish(configTicks, finish);

    if (!past && !!start.isSame(first || data[0].x)) {
      configTicks.config[0].separator = separator;
      configTicks.config[0].showLine = true;
      configTicks.config[0].showSeparatorLabel = true;
      configTicks.config[0].lineColor = (0, _Themes.handleThemeFromObject)(_this3.props.theme, 'barChart.separator', '#dfe3eb');
    }

    if (range.contains(today)) {
      var todayConfig = {
        today: true,
        start: null,
        format: offsetBy
      };

      if (!past && !!today.isSame(first || data[0].x)) {
        todayConfig.start = true;
        todayConfig.separator = separator;
      } else if (past && !!today.isSame(last || data[data.length - 1].x)) {
        todayConfig.start = false;
      }

      ticks = [].concat(_toConsumableArray(separators.ticks), _toConsumableArray(configTicks.ticks), [today]);
      config = [].concat(_toConsumableArray(separators.config), _toConsumableArray(configTicks.config), [todayConfig]);
    } else {
      ticks = [].concat(_toConsumableArray(separators.ticks), _toConsumableArray(configTicks.ticks));
      config = [].concat(_toConsumableArray(separators.config), _toConsumableArray(configTicks.config));
    }

    return {
      ticks: ticks,
      config: config
    };
  };

  this.getBarSize = function (screenSize, padding, first, last, width) {
    switch (screenSize) {
      case 'large':
      case 'extraLarge':
        return (width - (padding.left + padding.right)) / moment(last).diff(moment(first), 'days') - 5;

      case 'small':
      case 'medium':
        return (width - (padding.left + padding.right)) / (_this3.sliderOffset[screenSize] + 1) - 5;

      default:
        return 15;
    }
  };

  this.addFinish = function (configTicks, finish) {
    var config = configTicks;
    var lastTick = configTicks.ticks[configTicks.config.length - 1];
    var lastConfig = configTicks.config[configTicks.config.length - 1];
    var diff = finish.diff(lastTick, 'days');

    if (diff <= 1) {
      config.ticks[configTicks.config.length - 1] = finish;
    } else {
      config.ticks.push(finish);
      config.config.push(_objectSpread({}, lastConfig));
    }

    return config;
  };

  this.colors = function () {
    var _this3$props3 = _this3.props,
        barColors = _this3$props3.barColors,
        theme = _this3$props3.theme;
    var handled = (0, _Themes.handleThemeFromObject)(theme, 'barChart.color', '#50e3c2', barColors);

    if (typeof barColors === 'string' || barColors instanceof String) {
      return {
        pastColor: handled,
        futureColor: handled
      };
    }

    return handled;
  };

  this.padding = function () {
    var screenSize = _this3.state.screenSize;
    var padding = _this3.props.padding;
    var small = screenSize === 'small' || screenSize === 'medium';

    if (Number.isInteger(padding)) {
      return {
        top: padding,
        bottom: padding,
        left: small ? 0 : padding,
        right: small ? 0 : padding
      };
    }

    return small ? _objectSpread({}, padding, {
      left: 0,
      right: 0
    }) : padding;
  };

  this.renderXAxis = function () {
    var _this3$props4 = _this3.props,
        xDomain = _this3$props4.xDomain,
        width = _this3$props4.width,
        height = _this3$props4.height,
        data = _this3$props4.data,
        theme = _this3$props4.theme;

    var padding = _this3.padding();

    var _this3$state = _this3.state,
        brushDomain = _this3$state.brushDomain,
        screenSize = _this3$state.screenSize;
    var first = xDomain.first,
        last = xDomain.last,
        _xDomain$offsetBy = xDomain.offsetBy,
        offsetBy = _xDomain$offsetBy === void 0 ? 'days' : _xDomain$offsetBy,
        _xDomain$offset = xDomain.offset,
        offset = _xDomain$offset === void 0 ? 4 : _xDomain$offset,
        _xDomain$skip = xDomain.skip,
        skip = _xDomain$skip === void 0 ? 0 : _xDomain$skip,
        _xDomain$timeSeparato = xDomain.timeSeparator,
        timeSeparator = _xDomain$timeSeparato === void 0 ? 'month' : _xDomain$timeSeparato,
        _xDomain$count = xDomain.count,
        count = _xDomain$count === void 0 ? 0 : _xDomain$count,
        _xDomain$past = xDomain.past,
        past = _xDomain$past === void 0 ? false : _xDomain$past,
        _xDomain$scale = xDomain.scale,
        scale = _xDomain$scale === void 0 ? 'time' : _xDomain$scale;
    var props = {
      width: width,
      height: height,
      standalone: false,
      style: {
        axis: xAxisStyle(theme),
        ticks: xTickStyle(theme),
        tickLabels: xTickLabelStyle(theme)
      }
    };

    if (scale === 'time') {
      var _this3$getTickValues = _this3.getTickValues(moment(brushDomain[0]), moment(brushDomain[1]), offset, offsetBy, skip, timeSeparator, past),
          ticks = _this3$getTickValues.ticks,
          config = _this3$getTickValues.config;

      props.tickValues = ticks;
      props.tickLabelComponent = _react["default"].createElement(_TimeComponents.TimeLabelComponent, {
        config: config,
        lineSize: height - (padding.top + padding.bottom),
        screenSize: screenSize
      });
      props.tickComponent = _react["default"].createElement(_TimeComponents.TimeTickComponent, {
        config: config
      });
    } else {
      var domain = [first || data[0].x, last || data[data.length - 1].x];

      if (domain.every(function (item) {
        return _lodash["default"].isNumber(item);
      })) {
        props.domain = domain;
      }

      props.tickCount = count > 0 ? count : null;
    }

    return _react["default"].createElement(_victory.VictoryAxis, props);
  };

  this.renderYAxis = function () {
    var label = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : true;
    var grid = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : true;
    var screenSize = _this3.state.screenSize;
    var _this3$props5 = _this3.props,
        yDomain = _this3$props5.yDomain,
        width = _this3$props5.width,
        height = _this3$props5.height,
        theme = _this3$props5.theme;
    var small = screenSize === 'small' || screenSize === 'large';
    var _yDomain$first = yDomain.first,
        first = _yDomain$first === void 0 ? 0 : _yDomain$first,
        _yDomain$last = yDomain.last,
        last = _yDomain$last === void 0 ? 30 : _yDomain$last,
        _yDomain$count = yDomain.count,
        count = _yDomain$count === void 0 ? 3 : _yDomain$count,
        _yDomain$format = yDomain.format,
        format = _yDomain$format === void 0 ? function (t) {
      return "R$ ".concat(Math.round(t), "k");
    } : _yDomain$format;
    return _react["default"].createElement(_victory.VictoryAxis, {
      dependentAxis: true,
      width: width,
      height: height,
      domain: [first, last],
      tickCount: count,
      tickFormat: format,
      standalone: false,
      offsetX: small && label ? 47 : undefined,
      tickLabelComponent: small && label ? _react["default"].createElement(YLabel, null) : undefined,
      style: {
        axis: yAxisStyle,
        grid: grid ? yGridStyle(theme) : undefined,
        tickLabels: yTickLabelStyle(theme, screenSize)
      }
    });
  };

  this.renderBars = function () {
    var _this3$props6 = _this3.props,
        data = _this3$props6.data,
        _onClick = _this3$props6.onClick,
        xDomain = _this3$props6.xDomain,
        width = _this3$props6.width,
        hoverEvents = _this3$props6.hoverEvents;
    var first = xDomain.first,
        last = xDomain.last;
    var screenSize = _this3.state.screenSize;
    var mouseIn = {
      target: 'data',
      mutation: function mutation(props) {
        return {
          style: {
            opacity: 1,
            cursor: props.style.cursor,
            width: props.style.width
          }
        };
      }
    };
    var mouseOut = {
      target: 'data',
      mutation: function mutation(props) {
        return {
          style: {
            opacity: 1,
            cursor: props.style.cursor,
            width: props.style.width
          }
        };
      }
    };
    var opacityIn = {
      target: 'data',
      eventKey: 'all',
      mutation: function mutation(props) {
        return {
          style: {
            opacity: 0.5,
            cursor: props.style.cursor,
            width: props.style.width,
            transition: 'opacity 200ms ease-in'
          }
        };
      }
    };
    var opacityOut = {
      target: 'data',
      eventKey: 'all',
      mutation: function mutation(props) {
        return {
          style: {
            opacity: 1,
            cursor: props.style.cursor,
            width: props.style.width,
            transition: 'opacity 100ms ease-in'
          }
        };
      }
    };
    var eventHandlers = {
      onClick: function onClick() {
        _onClick.apply(void 0, arguments);
      },
      onMouseEnter: function onMouseEnter() {
        return hoverEvents ? [opacityIn, mouseIn] : [];
      },
      onMouseLeave: function onMouseLeave() {
        return hoverEvents ? [opacityOut, mouseOut] : [];
      }
    };
    var events = [{
      target: 'data',
      eventHandlers: eventHandlers
    }];

    var padding = _this3.padding();

    var colors = _this3.colors();

    var barWidth = _this3.getBarSize(screenSize, padding, first, last, width);

    return _react["default"].createElement(_victory.VictoryBar, {
      style: {
        data: {
          fill: colors.futureColor,
          cursor: hoverEvents ? 'pointer' : null,
          width: barWidth > 7 ? barWidth : 7
        }
      },
      data: data,
      events: events,
      groupComponent: _react["default"].createElement("g", {
        clipPath: "url(#victory-clip-2)"
      }),
      dataComponent: _react["default"].createElement(_Bar["default"], {
        colors: colors,
        hoverEvents: hoverEvents
      })
    });
  };
};

BarChart.propTypes = {
  data: _propTypes["default"].arrayOf(_propTypes["default"].objectOf(_propTypes["default"].any)),
  xDomain: _propTypes["default"].shape({
    scale: _propTypes["default"].string,
    timeSeparator: _propTypes["default"].string,
    first: _propTypes["default"].any,
    last: _propTypes["default"].any,
    offsetBy: _propTypes["default"].string,
    offset: _propTypes["default"].number,
    skip: _propTypes["default"].number,
    count: _propTypes["default"].number
  }),
  yDomain: _propTypes["default"].shape({
    scale: _propTypes["default"].string,
    first: _propTypes["default"].any,
    last: _propTypes["default"].any,
    offset: _propTypes["default"].number,
    count: _propTypes["default"].number,
    format: _propTypes["default"].func
  }),
  height: _propTypes["default"].number,
  width: _propTypes["default"].number,
  padding: _propTypes["default"].oneOfType([_propTypes["default"].number, _propTypes["default"].shape({
    top: _propTypes["default"].number,
    bottom: _propTypes["default"].number,
    left: _propTypes["default"].number,
    right: _propTypes["default"].number
  })]),
  barColors: _propTypes["default"].oneOfType([_propTypes["default"].string, _propTypes["default"].shape({
    pastColor: _propTypes["default"].string,
    futureColor: _propTypes["default"].string
  })]),
  theme: _propTypes["default"].objectOf(_propTypes["default"].any),
  hoverEvents: _propTypes["default"].bool,
  onClick: _propTypes["default"].func
};
BarChart.defaultProps = {
  data: [{
    x: (0, _momentTimezone["default"])('2018-09-28'),
    y: 27
  }, {
    x: (0, _momentTimezone["default"])('2018-09-30'),
    y: 27
  }, {
    x: (0, _momentTimezone["default"])('2018-10-02'),
    y: 10
  }, {
    x: (0, _momentTimezone["default"])('2018-10-04'),
    y: 10
  }, {
    x: (0, _momentTimezone["default"])('2018-10-18'),
    y: 26
  }, {
    x: (0, _momentTimezone["default"])('2018-10-20'),
    y: 20
  }, {
    x: (0, _momentTimezone["default"])('2018-10-27'),
    y: 20
  }],
  xDomain: {
    scale: 'time',
    timeSeparator: 'month',
    past: false,
    first: (0, _momentTimezone["default"])('2018-10-01'),
    last: (0, _momentTimezone["default"])('2018-10-28'),
    offsetBy: 'days',
    offset: 4,
    skip: 0,
    count: 0,
    padding: 15
  },
  yDomain: {
    scale: 'linear',
    marker: null,
    first: 0,
    last: 30,
    offset: 0,
    count: 3,
    format: function format(t) {
      return "R$ ".concat(Math.round(t), "k");
    },
    padding: null
  },
  height: 400,
  width: 1160,
  padding: {
    top: 50,
    bottom: 60,
    left: 70,
    right: 50
  },
  barColors: '',
  theme: null,
  hoverEvents: true,
  onClick: function onClick() {}
};
var _default = BarChart;
exports["default"] = _default;