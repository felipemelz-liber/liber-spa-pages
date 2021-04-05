"use strict";

require("core-js/modules/es6.string.iterator");

require("core-js/modules/es6.weak-map");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

require("core-js/modules/es7.symbol.async-iterator");

require("core-js/modules/es6.symbol");

require("core-js/modules/es6.object.assign");

require("core-js/modules/es6.object.define-property");

require("core-js/modules/es6.object.create");

require("core-js/modules/es6.object.set-prototype-of");

require("core-js/modules/es6.array.reduce");

require("core-js/modules/web.dom.iterable");

require("core-js/modules/es6.array.iterator");

require("core-js/modules/es6.object.to-string");

require("core-js/modules/es6.object.keys");

require("core-js/modules/es6.array.for-each");

var _react = _interopRequireWildcard(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _Helpers = require("../../Helpers");

var _Util = require("../../Util");

var _styles = require("./styles");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function _getRequireWildcardCache() { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; if (obj != null) { var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

var BarDisplay =
/*#__PURE__*/
function (_Component) {
  _inherits(BarDisplay, _Component);

  function BarDisplay(props) {
    var _this;

    _classCallCheck(this, BarDisplay);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(BarDisplay).call(this, props));

    _this.setBarSize = function () {
      var valueSize = _this.value.getWidth(_this.value.value, true);

      _this.bar.style.width = "".concat(parseInt(valueSize, 10) + 20, "px");
    };

    _this.setScreenSize = function () {
      _this.setState({
        screenSize: (0, _Util.getScreenSize)(window)
      });
    };

    _this.handleMouseMove = function (event, sector) {
      _this.setState({
        showTooltip: true,
        position: {
          x: event.clientX,
          y: event.clientY
        },
        tooltip: {
          label: sector.tooltipLabel,
          content: sector.tooltipContent
        }
      });
    };

    _this.handleMouseLeave = function () {
      _this.setState({
        showTooltip: false,
        position: {}
      });
    };

    _this.eventHandler = function (events, sector, index) {
      var screenSize = _this.state.screenSize;
      var obj = {};

      if (Boolean(sector.tooltipContent) && (screenSize === 'large' || screenSize === 'extraLarge')) {
        obj.onMouseMove = function (e) {
          _this.handleMouseMove(e, sector, index);
        };

        obj.onMouseLeave = function (e) {
          _this.handleMouseLeave(e, sector, index);
        };
      }

      if (events) {
        Object.keys(events).forEach(function (key) {
          if (obj[key] !== undefined) {
            var handler = obj[key];

            obj[key] = function (e) {
              handler(e);
              events[key](e, sector, index);
            };
          } else {
            obj[key] = function (e) {
              events[key](e, sector, index);
            };
          }
        });
      }

      return obj;
    };

    _this.state = {
      screenSize: (0, _Util.getScreenSize)(window),
      position: {
        x: null,
        y: null
      },
      showTooltip: false,
      tooltip: {
        label: null,
        content: null
      }
    };
    return _this;
  }

  _createClass(BarDisplay, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      if (this.bar && this.value) {
        window.addEventListener('resize', this.setScreenSize);
        this.setBarSize();
      }
    }
  }, {
    key: "componentWillReceiveProps",
    value: function componentWillReceiveProps(nextProps) {
      if (nextProps.children !== this.props.children) {
        setTimeout(this.setBarSize, 0);
      }
    }
  }, {
    key: "componentWillUnmount",
    value: function componentWillUnmount() {
      window.removeEventListener('resize', this.setScreenSize);
    }
  }, {
    key: "render",
    value: function render() {
      var _this2 = this;

      var _this$props = this.props,
          children = _this$props.children,
          prefix = _this$props.prefix,
          label = _this$props.label,
          sectors = _this$props.sectors,
          highlight = _this$props.highlight;
      var screenSize = this.state.screenSize;
      var largeScreen = screenSize === 'large' || screenSize === 'extraLarge';

      var _sectors$reduce = sectors.reduce(function (prev, next, index) {
        var sector = _react["default"].createElement(_styles.BarSector, _extends({
          key: "".concat(next.color, "_").concat(next.percentage, "_sector"),
          color: next.color,
          percentage: next.percentage,
          highlight: highlight === index && largeScreen
        }, _this2.eventHandler(next.events, next, index)));

        var shadow = _react["default"].createElement(_styles.BarShadow, {
          key: "".concat(next.color, "_").concat(next.percentage, "_shadow"),
          color: next.color,
          percentage: next.percentage
        });

        prev.mappedSectors.push(sector);
        prev.mappedShadows.push(shadow);
        return prev;
      }, {
        mappedSectors: [],
        mappedShadows: []
      }),
          mappedSectors = _sectors$reduce.mappedSectors,
          mappedShadows = _sectors$reduce.mappedShadows;

      return _react["default"].createElement(_react.Fragment, null, this.state.showTooltip ? _react["default"].createElement(_Helpers.Tooltip, {
        type: "floater",
        show: this.state.showTooltip,
        position: this.state.position,
        label: this.state.tooltip.label
      }, this.state.tooltip.content) : null, _react["default"].createElement(_styles.Container, null, _react["default"].createElement(_styles.Title, null, label), _react["default"].createElement(_styles.Value, {
        ref: function ref(el) {
          _this2.value = el;
        },
        prefix: prefix
      }, children), _react["default"].createElement(_styles.Title, null, label), _react["default"].createElement(_styles.Bar, {
        ref: function ref(el) {
          _this2.bar = el;
        }
      }, _react["default"].createElement(_styles.BarShadows, null, mappedShadows), _react["default"].createElement(_styles.BarSectors, null, mappedSectors))));
    }
  }]);

  return BarDisplay;
}(_react.Component);

BarDisplay.propTypes = {
  label: _propTypes["default"].string,
  children: _propTypes["default"].string,
  prefix: _propTypes["default"].string,
  highlight: _propTypes["default"].number,
  sectors: _propTypes["default"].arrayOf(_propTypes["default"].shape({
    percentage: _propTypes["default"].string,
    color: _propTypes["default"].oneOfType([_propTypes["default"].string, _propTypes["default"].arrayOf(_propTypes["default"].string)]),
    events: _propTypes["default"].objectOf(_propTypes["default"].func)
  }))
};
BarDisplay.defaultProps = {
  label: '',
  children: '',
  prefix: '',
  highlight: -1,
  sectors: []
};
var _default = BarDisplay;
exports["default"] = _default;