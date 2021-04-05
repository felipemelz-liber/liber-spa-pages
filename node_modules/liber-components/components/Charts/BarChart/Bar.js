"use strict";

require("core-js/modules/es6.string.iterator");

require("core-js/modules/es6.weak-map");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

require("core-js/modules/es6.array.fill");

require("core-js/modules/es7.symbol.async-iterator");

require("core-js/modules/es6.object.assign");

require("core-js/modules/es6.symbol");

require("core-js/modules/es6.array.index-of");

require("core-js/modules/web.dom.iterable");

require("core-js/modules/es6.array.iterator");

require("core-js/modules/es6.object.to-string");

require("core-js/modules/es6.object.keys");

require("core-js/modules/es6.object.define-property");

require("core-js/modules/es6.object.create");

require("core-js/modules/es6.object.set-prototype-of");

var _react = _interopRequireWildcard(require("react"));

var _victory = require("victory");

var _moment = _interopRequireDefault(require("moment"));

var _Helpers = require("../../Helpers");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function _getRequireWildcardCache() { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; if (obj != null) { var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

var Bar =
/*#__PURE__*/
function (_Component) {
  _inherits(Bar, _Component);

  function Bar(props) {
    var _this;

    _classCallCheck(this, Bar);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(Bar).call(this, props));

    _initialiseProps.call(_assertThisInitialized(_this));

    _this.state = {
      showTooltip: false,
      position: {
        x: null,
        y: null
      },
      tooltip: {
        mount: null,
        label: null,
        content: null
      }
    };
    return _this;
  }

  _createClass(Bar, [{
    key: "render",
    value: function render() {
      var _this$state = this.state,
          showTooltip = _this$state.showTooltip,
          position = _this$state.position,
          tooltip = _this$state.tooltip;

      var _this$props = this.props,
          events = _this$props.events,
          style = _this$props.style,
          colors = _this$props.colors,
          hoverEvents = _this$props.hoverEvents,
          props = _objectWithoutProperties(_this$props, ["events", "style", "colors", "hoverEvents"]);

      var eventClone = this.cloneEvents(events, props);
      var newStyle = this.addColors(style, colors, props);
      return _react["default"].createElement(_react.Fragment, null, showTooltip && hoverEvents ? _react["default"].createElement(_Helpers.Tooltip, {
        type: "floater",
        show: showTooltip,
        position: position,
        label: tooltip.label,
        mount: tooltip.mount
      }, tooltip.content) : null, _react["default"].createElement(_victory.Bar, _extends({}, props, {
        events: eventClone,
        style: newStyle
      })), ";");
    }
  }]);

  return Bar;
}(_react.Component);

var _initialiseProps = function _initialiseProps() {
  var _this2 = this;

  this.getPosition = function (mount, pos) {
    var size = 360;
    var viewport = window.innerWidth;

    if (pos <= size) {
      return 'right';
    }

    if (pos >= viewport - size) {
      return 'left';
    }

    return mount;
  };

  this.handleMouseMove = function (event, datum) {
    var tooltipContent = datum.tooltipContent,
        mount = datum.mount,
        dynamicMount = datum.dynamicMount;
    var date = datum.x;

    if (event) {
      if (tooltipContent) {
        _this2.setState({
          showTooltip: true,
          position: {
            x: event.clientX,
            y: event.clientY
          },
          tooltip: {
            content: tooltipContent,
            mount: dynamicMount ? _this2.getPosition(mount, event.clientX) : mount,
            label: _moment["default"].isMoment(date) ? date.locale('pt-br').format('DD [de] MMMM') : date
          }
        });
      }
    }
  };

  this.handleMouseLeave = function () {
    _this2.setState({
      showTooltip: false,
      position: {
        x: null,
        y: null
      },
      tooltip: {
        label: null,
        content: null,
        mount: null
      }
    });
  };

  this.addColors = function (style, colors, props) {
    var styleClone = Object.assign({}, style);

    if (_moment["default"].isMoment(props.datum.x)) {
      if (props.datum.x.isBefore((0, _moment["default"])().startOf('day'))) {
        styleClone.fill = colors.pastColor;
      } else {
        styleClone.fill = colors.futureColor;
      }

      return styleClone;
    }

    return style;
  };

  this.cloneEvents = function (events, props) {
    var eventClone = Object.assign({}, events);

    eventClone.onMouseMove = function (event) {
      _this2.handleMouseMove(event, props.datum);

      if (events.onMouseMove) {
        events.onMouseMove(event);
      }
    };

    eventClone.onMouseLeave = function (event) {
      _this2.handleMouseLeave(props.datum);

      if (events.onMouseLeave) {
        events.onMouseLeave(event);
      }
    };

    return eventClone;
  };
};

var _default = Bar;
exports["default"] = _default;