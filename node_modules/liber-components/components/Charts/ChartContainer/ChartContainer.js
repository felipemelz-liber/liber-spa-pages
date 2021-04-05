"use strict";

require("core-js/modules/es6.string.iterator");

require("core-js/modules/es6.weak-map");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

require("core-js/modules/es6.object.define-properties");

require("core-js/modules/es7.object.get-own-property-descriptors");

require("core-js/modules/es6.array.filter");

require("core-js/modules/web.dom.iterable");

require("core-js/modules/es6.array.iterator");

require("core-js/modules/es6.object.keys");

require("core-js/modules/es6.regexp.to-string");

require("core-js/modules/es6.date.to-string");

require("core-js/modules/es6.object.to-string");

require("core-js/modules/es7.symbol.async-iterator");

require("core-js/modules/es6.symbol");

require("core-js/modules/es6.object.define-property");

require("core-js/modules/es6.object.create");

require("core-js/modules/es6.object.set-prototype-of");

require("core-js/modules/es7.array.includes");

require("core-js/modules/es6.string.includes");

require("core-js/modules/es6.array.map");

require("core-js/modules/es6.object.assign");

require("core-js/modules/es6.array.for-each");

var _react = _interopRequireWildcard(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _Themes = require("../../Themes");

var _ChartLabel = _interopRequireDefault(require("../ChartLabel/ChartLabel"));

var _DonutChart = _interopRequireDefault(require("../DonutChart/DonutChart"));

var _PieChart = _interopRequireDefault(require("../PieChart/PieChart"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function _getRequireWildcardCache() { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; if (obj != null) { var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(source, true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(source).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

var defaultColors = ['#18d8ee', '#2de8bf', '#537e86', '#40b7c9'];
var charts = [_DonutChart["default"], _PieChart["default"]];

var ChartContainer =
/*#__PURE__*/
function (_Component) {
  _inherits(ChartContainer, _Component);

  function ChartContainer(props) {
    var _this;

    _classCallCheck(this, ChartContainer);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(ChartContainer).call(this, props));

    _initialiseProps.call(_assertThisInitialized(_this));

    _this.labelCount = 0;
    var colors = [];
    props.children.forEach(function (child) {
      colors = _this.findColors(child, colors);
    });
    _this.state = {
      colors: colors,
      target: null
    };
    return _this;
  }

  _createClass(ChartContainer, [{
    key: "render",
    value: function render() {
      var _this2 = this;

      this.labelCount = 0;
      var props = Object.assign({}, this.props);
      delete props.onHighlightStart;
      delete props.onHighlightChartStart;
      delete props.onHighlightLabelStart;
      delete props.onHighlightEnd;
      delete props.onHighlightChartEnd;
      delete props.onHighlightLabelEnd;

      var children = _react.Children.map(this.props.children, function (child) {
        if (charts.includes(child.type)) {
          return _this2.configChart(child);
        }

        return _this2.findLabel(child);
      });

      return _react["default"].createElement("div", props, children);
    }
  }]);

  return ChartContainer;
}(_react.Component);

var _initialiseProps = function _initialiseProps() {
  var _this3 = this;

  this.handleEnterChart = function (proxy, data, eventKey) {
    var _this3$props = _this3.props,
        onHighlightStart = _this3$props.onHighlightStart,
        onHighlightChartStart = _this3$props.onHighlightChartStart;

    _this3.setState({
      target: eventKey
    }, function () {
      onHighlightStart(eventKey);
      onHighlightChartStart(proxy, data, eventKey);
    });
  };

  this.handleLeaveChart = function () {
    var _this3$props2 = _this3.props,
        onHighlightEnd = _this3$props2.onHighlightEnd,
        onHighlightChartEnd = _this3$props2.onHighlightChartEnd;

    _this3.setState({
      target: null
    }, function () {
      onHighlightEnd();
      onHighlightChartEnd();
    });
  };

  this.handleChartClickEvent = function () {
    var target = _this3.state.target;
    var eventkey = arguments.length <= 2 ? undefined : arguments[2];

    if (target === null) {
      _this3.handleEnterChart.apply(_this3, arguments);
    } else if (target === eventkey) {
      _this3.handleLeaveChart();
    } else {
      _this3.handleLeaveChart();

      _this3.handleEnterChart.apply(_this3, arguments);
    }
  };

  this.handleEnterLabel = function (target) {
    var _this3$props3 = _this3.props,
        onHighlightStart = _this3$props3.onHighlightStart,
        onHighlightLabelStart = _this3$props3.onHighlightLabelStart;

    _this3.setState({
      target: target
    }, function () {
      onHighlightStart(target);
      onHighlightLabelStart(target);
    });
  };

  this.handleLeaveLabel = function () {
    var _this3$props4 = _this3.props,
        onHighlightEnd = _this3$props4.onHighlightEnd,
        onHighlightLabelEnd = _this3$props4.onHighlightLabelEnd;

    _this3.setState({
      target: null
    }, function () {
      onHighlightEnd();
      onHighlightLabelEnd();
    });
  };

  this.handleLabelClickEvent = function (index) {
    var target = _this3.state.target;

    if (target === null) {
      _this3.handleEnterLabel(index);
    } else if (target === index) {
      _this3.handleLeaveLabel();
    } else {
      _this3.handleLeaveLabel();

      _this3.handleEnterLabel(index);
    }
  };

  this.configClickEvent = function (component, clickCallback) {
    var onClick;

    if (component.props.onClick) {
      onClick = function onClick() {
        var _component$props;

        (_component$props = component.props).onClick.apply(_component$props, arguments);

        clickCallback.apply(void 0, arguments);
      };
    } else {
      onClick = clickCallback;
    }

    return {
      onClick: onClick
    };
  };

  this.configHoverEvents = function (component, enterCallback, leaveCallback) {
    var onMouseEnter;
    var onMouseLeave;

    if (component.props.onMouseEnter) {
      onMouseEnter = function onMouseEnter() {
        var _component$props2;

        (_component$props2 = component.props).onMouseEnter.apply(_component$props2, arguments);

        enterCallback.apply(void 0, arguments);
      };
    } else {
      onMouseEnter = enterCallback;
    }

    if (component.props.onMouseLeave) {
      onMouseLeave = function onMouseLeave() {
        var _component$props3;

        (_component$props3 = component.props).onMouseLeave.apply(_component$props3, arguments);

        leaveCallback.apply(void 0, arguments);
      };
    } else {
      onMouseLeave = leaveCallback;
    }

    return {
      onMouseEnter: onMouseEnter,
      onMouseLeave: onMouseLeave
    };
  };

  this.findLabel = function (component) {
    var child = component;

    if (child.type !== _ChartLabel["default"]) {
      if (child.props && child.props.children) {
        return _react["default"].cloneElement(child, {
          children: _react.Children.map(child.props.children, function (newChild) {
            return _this3.findLabel(newChild);
          })
        });
      }

      return child;
    }

    _this3.labelCount += 1;
    return _this3.configLabel(child, _this3.labelCount - 1);
  };

  this.findColors = function (component, list) {
    var child = component;
    var colors = list;

    if (child.type !== _ChartLabel["default"]) {
      if (child.props && child.props.children) {
        _react.Children.toArray(child.props.children).forEach(function (newChild) {
          colors = _this3.findColors(newChild, colors);
        });
      }

      return colors;
    }

    var themeColor = (0, _Themes.handleThemeFromObject)(_this3.props.theme, 'chartContainer.defaultColors') || [];

    if (child.props.eventkey) {
      colors[child.props.eventkey] = (0, _Themes.handleTheme)(themeColor[child.props.eventkey], defaultColors[child.props.eventkey], child.props.color);
    } else {
      colors.push((0, _Themes.handleTheme)(themeColor[colors.length], defaultColors[colors.length], child.props.color));
    }

    return colors;
  };

  this.configChart = function (chart) {
    var events = {};

    switch (_this3.props.event) {
      case 'click':
        events = _this3.configClickEvent(chart, _this3.handleChartClickEvent);
        break;

      case 'hover':
      default:
        events = _this3.configHoverEvents(chart, _this3.handleEnterChart, _this3.handleLeaveChart);
        break;
    }

    return _react["default"].cloneElement(chart, _objectSpread({}, events, {
      colorScale: _this3.state.colors,
      target: _this3.state.target,
      targetEvent: _this3.props.event,
      disableInternalEvents: true
    }));
  };

  this.configLabel = function (label, pos) {
    var events;
    var target = _this3.state.target;
    var index = label.props.eventkey || pos.toString();

    switch (_this3.props.event) {
      case 'click':
        events = _this3.configClickEvent(label, function () {
          _this3.handleLabelClickEvent(index);
        });
        break;

      case 'hover':
      default:
        events = _this3.configHoverEvents(label, function () {
          _this3.handleEnterLabel(index);
        }, function () {
          _this3.handleLeaveLabel(index);
        });
        break;
    }

    var highlight = '1';

    if (target !== null && target !== undefined) {
      highlight = target === index ? '1' : '0.5';
    }

    return _react["default"].cloneElement(label, _objectSpread({}, events, {
      highlight: highlight
    }));
  };
};

ChartContainer.propTypes = {
  children: _propTypes["default"].oneOfType([_propTypes["default"].any]).isRequired,
  event: _propTypes["default"].string,
  theme: _propTypes["default"].objectOf(_propTypes["default"].any),
  onHighlightStart: _propTypes["default"].func,
  onHighlightChartStart: _propTypes["default"].func,
  onHighlightLabelStart: _propTypes["default"].func,
  onHighlightEnd: _propTypes["default"].func,
  onHighlightChartEnd: _propTypes["default"].func,
  onHighlightLabelEnd: _propTypes["default"].func
};
ChartContainer.defaultProps = {
  event: 'hover',
  theme: undefined,
  onHighlightStart: function onHighlightStart() {},
  onHighlightChartStart: function onHighlightChartStart() {},
  onHighlightLabelStart: function onHighlightLabelStart() {},
  onHighlightEnd: function onHighlightEnd() {},
  onHighlightChartEnd: function onHighlightChartEnd() {},
  onHighlightLabelEnd: function onHighlightLabelEnd() {}
};
var _default = ChartContainer;
exports["default"] = _default;