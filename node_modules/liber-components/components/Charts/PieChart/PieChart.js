"use strict";

require("core-js/modules/es6.string.iterator");

require("core-js/modules/es6.weak-map");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

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

require("core-js/modules/es6.array.filter");

require("core-js/modules/es6.array.fill");

require("core-js/modules/es6.regexp.to-string");

require("core-js/modules/es6.date.to-string");

require("core-js/modules/es6.object.to-string");

var _react = _interopRequireWildcard(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _victory = require("victory");

var _Themes = require("../../Themes");

var _Slice = _interopRequireDefault(require("./Slice"));

var _styles = require("./styles");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function _getRequireWildcardCache() { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; if (obj != null) { var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

var PieChart =
/*#__PURE__*/
function (_Component) {
  _inherits(PieChart, _Component);

  function PieChart() {
    var _this;

    _classCallCheck(this, PieChart);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(PieChart).call(this));

    _this.setExternalEvent = function (nextTarget, target) {
      var hoverIn = [{
        target: ['data'],
        eventKey: 'all',
        mutation: _this.handleOpacityIn,
        callback: function callback() {
          _this.setState({
            externalEvent: undefined
          });
        }
      }, {
        target: ['data'],
        eventKey: nextTarget,
        mutation: _this.targetEventIn,
        callback: function callback() {
          _this.setState({
            externalEvent: undefined
          });
        }
      }];
      var hoverOut = [{
        target: ['data'],
        eventKey: 'all',
        mutation: _this.handleOpacityOut,
        callback: function callback() {
          _this.setState({
            target: null,
            externalEvent: undefined
          });
        }
      }, {
        target: ['data'],
        eventKey: target,
        mutation: _this.targetEventOut,
        callback: function callback() {
          _this.setState({
            target: null,
            externalEvent: undefined
          });
        }
      }];

      if (nextTarget && !target) {
        _this.setState({
          target: nextTarget,
          externalEvent: hoverIn
        });
      } else if (nextTarget && target && nextTarget !== target) {
        _this.setState({
          externalEvent: [{
            target: ['data'],
            eventKey: target,
            mutation: _this.targetEventOut,
            callback: function callback() {
              _this.setState({
                target: nextTarget,
                externalEvent: hoverIn
              });
            }
          }]
        });
      } else if (!nextTarget && target) {
        _this.setState({
          externalEvent: hoverOut
        });
      }
    };

    _this.getPadding = function (padding) {
      var paddingVal = typeof padding === 'number' ? padding : 0;
      var paddingObj = _typeof(padding) === 'object' ? padding : {};
      return {
        top: paddingObj.top || paddingVal,
        bottom: paddingObj.bottom || paddingVal,
        left: paddingObj.left || paddingVal,
        right: paddingObj.right || paddingVal
      };
    };

    _this.getRadius = function (width, height, propsPadding) {
      var padding = _this.getPadding(propsPadding);

      return Math.min(width - padding.left - padding.right, height - padding.top - padding.bottom) / 2;
    };

    _this.getTranslationSize = function (dis, startAngle, endAngle) {
      var angle = (startAngle + endAngle) / 2;
      var translationX = parseInt((Math.sin(angle) * dis).toFixed(5), 10);
      var translationY = parseInt((-Math.cos(angle) * dis).toFixed(5), 10);
      return {
        translationX: translationX,
        translationY: translationY,
        abs: Math.abs(translationX) === 0 ? dis : Math.abs(translationX)
      };
    };

    _this.targetEventIn = function (props) {
      var origin = props.origin,
          slice = props.slice,
          style = props.style,
          data = props.data,
          index = props.index;

      var _this$getTranslationS = _this.getTranslationSize(10, slice.startAngle, slice.endAngle),
          translationX = _this$getTranslationS.translationX,
          translationY = _this$getTranslationS.translationY,
          abs = _this$getTranslationS.abs;

      _this.setState({
        highlighted: true,
        current: index.toString()
      });

      return {
        abs: abs,
        style: {
          fill: style.fill,
          transform: data.filter(function (item) {
            return Boolean(item.y) && Boolean(item.x);
          }).length > 1 ? "translate(".concat(origin.x + translationX, "px, ").concat(origin.y + translationY, "px)") : "translate(".concat(props.origin.x, "px, ").concat(props.origin.x, "px)")
        }
      };
    };

    _this.targetEventOut = function (props) {
      _this.setState({
        highlighted: false,
        current: null
      });

      return {
        abs: 0,
        style: {
          fill: props.style.fill,
          transform: "translate(".concat(props.origin.x, "px, ").concat(props.origin.x, "px)")
        }
      };
    };

    _this.handleOpacityIn = function (props) {
      return {
        style: {
          fill: props.style.fill,
          opacity: 0.5,
          transform: "translate(".concat(props.origin.x, "px, ").concat(props.origin.x, "px)")
        }
      };
    };

    _this.handleOpacityOut = function (props) {
      return {
        style: {
          fill: props.style.fill,
          opacity: 1,
          transform: "translate(".concat(props.origin.x, "px, ").concat(props.origin.x, "px)")
        }
      };
    };

    _this.state = {
      target: null,
      externalEvent: undefined,
      highlighted: false,
      current: null
    };
    return _this;
  }

  _createClass(PieChart, [{
    key: "componentDidUpdate",
    value: function componentDidUpdate(oldProps) {
      var _this$props = this.props,
          targetEvent = _this$props.targetEvent,
          nextTarget = _this$props.target;
      var target = this.state.target;

      if (oldProps.target !== nextTarget) {
        this.setExternalEvent(nextTarget, target, targetEvent);
      }
    }
  }, {
    key: "render",
    value: function render() {
      var _this2 = this;

      var _this$props2 = this.props,
          data = _this$props2.data,
          colorScale = _this$props2.colorScale,
          height = _this$props2.height,
          width = _this$props2.width,
          innerRadius = _this$props2.innerRadius,
          padding = _this$props2.padding,
          labels = _this$props2.labels,
          labelRadius = _this$props2.labelRadius,
          x = _this$props2.x,
          y = _this$props2.y,
          _onClick = _this$props2.onClick,
          _onMouseEnter = _this$props2.onMouseEnter,
          _onMouseLeave = _this$props2.onMouseLeave,
          targetEvent = _this$props2.targetEvent,
          theme = _this$props2.theme,
          props = _objectWithoutProperties(_this$props2, ["data", "colorScale", "height", "width", "innerRadius", "padding", "labels", "labelRadius", "x", "y", "onClick", "onMouseEnter", "onMouseLeave", "targetEvent", "theme"]);

      var eventInData = {
        target: 'data',
        mutation: this.targetEventIn
      };
      var eventOutData = {
        target: 'data',
        mutation: this.targetEventOut
      };
      var opacityIn = {
        target: 'data',
        eventKey: 'all',
        mutation: this.handleOpacityIn
      };
      var opacityOut = {
        target: 'data',
        eventKey: 'all',
        mutation: this.handleOpacityOut
      };
      var eventHandlers;

      switch (targetEvent) {
        case 'click':
          eventHandlers = {
            onMouseEnter: function onMouseEnter() {
              _onMouseEnter.apply(void 0, arguments);
            },
            onMouseLeave: function onMouseLeave() {
              _onMouseLeave.apply(void 0, arguments);
            },
            onClick: function onClick() {
              _onClick.apply(void 0, arguments);

              if (!_this2.props.disableInternalEvents) {
                if (!_this2.state.highlighted && !_this2.state.current) {
                  return [opacityIn, eventInData];
                } else if (_this2.state.highlighted && _this2.state.current !== (arguments.length <= 2 ? undefined : arguments[2])) {
                  return [opacityOut, eventOutData, opacityIn, eventInData];
                }

                return [opacityOut, eventOutData];
              }

              return undefined;
            }
          };
          break;

        case 'hover':
        default:
          eventHandlers = {
            onMouseEnter: function onMouseEnter() {
              _onMouseEnter.apply(void 0, arguments);

              if (!_this2.props.disableInternalEvents) {
                return [opacityIn, eventInData];
              }

              return undefined;
            },
            onMouseLeave: function onMouseLeave() {
              _onMouseLeave.apply(void 0, arguments);

              if (!_this2.props.disableInternalEvents) {
                return [opacityOut, eventOutData];
              }

              return undefined;
            },
            onClick: function onClick() {
              _onClick.apply(void 0, arguments);
            }
          };
          break;
      }

      var events = [{
        target: 'data',
        eventHandlers: eventHandlers
      }];
      var radius = this.getRadius(width, height, padding);

      var slice = _react["default"].createElement(_Slice["default"], {
        innerRadius: innerRadius,
        radius: radius
      });

      return _react["default"].createElement("div", null, _react["default"].createElement(_styles.PieBox, {
        width: width,
        height: height
      }, _react["default"].createElement(_victory.VictoryPie, _extends({}, props, {
        externalEventMutations: this.state.externalEvent,
        standalone: false,
        dataComponent: slice,
        height: height,
        width: width,
        padding: this.getPadding(padding),
        innerRadius: innerRadius,
        data: data,
        events: events,
        colorScale: (0, _Themes.handleThemeFromObject)(theme, 'pieChart.colorScale', ['#18d8ee', '#537e86', '#2de8bf', '#40b7c9'], colorScale),
        labels: labels,
        labelRadius: labelRadius,
        style: {
          data: {
            transform: "translate(".concat(width / 2, "px, ").concat(height / 2, "px)")
          }
        },
        labelComponent: _react["default"].createElement(_victory.VictoryTooltip, {
          height: 25,
          width: 25,
          orientation: "top",
          style: {
            fill: (0, _Themes.handleThemeFromObject)(theme, 'pieChart.tooltip', '#009dff')
          },
          flyoutStyle: {
            fill: (0, _Themes.handleThemeFromObject)(theme, 'pieChart.flyout.fill', '#fafafa'),
            stroke: (0, _Themes.handleThemeFromObject)(theme, 'pieChart.flyout.stroke', '#cecece')
          },
          cornerRadius: 0
        }),
        x: x,
        y: y
      }))));
    }
  }]);

  return PieChart;
}(_react.Component); // const setExternalEvent = (nextTarget, target) => {
//   const hoverIn = [
//     {
//       target: ['data'],
//       eventKey: 'all',
//       mutation: PieChart.handleOpacityIn,
//       callback: () => {
//         this.setState({ externalEvent: undefined });
//       },
//     },
//     {
//       target: ['data'],
//       eventKey: nextTarget,
//       mutation: PieChart.targetEventIn,
//       callback: () => {
//         this.setState({ externalEvent: undefined });
//       },
//     },
//   ];
//   const hoverOut = [
//     {
//       target: ['data'],
//       eventKey: 'all',
//       mutation: PieChart.handleOpacityOut,
//       callback: () => {
//         this.setState({ target: null, externalEvent: undefined });
//       },
//     },
//     {
//       target: ['data'],
//       eventKey: target,
//       mutation: PieChart.targetEventOut,
//       callback: () => {
//         this.setState({ target: null, externalEvent: undefined });
//       },
//     },
//   ];
//   if (nextTarget && !target) {
//     return {
//       target: nextTarget,
//       externalEvent: hoverIn,
//     };
//   }
//   if (nextTarget && target && nextTarget !== target) {
//     return {
//       externalEvent: [
//         {
//           target: ['data'],
//           eventKey: target,
//           mutation: this.targetEventOut,
//           callback: () => {
//             this.setState({
//               target: nextTarget,
//               externalEvent: hoverIn,
//             });
//           },
//         },
//       ],
//     };
//   }
//   if (!nextTarget && target) {
//     return {
//       externalEvent: hoverOut,
//     };
//   }
//   return {};
// };


PieChart.propTypes = {
  data: _propTypes["default"].arrayOf(_propTypes["default"].objectOf(_propTypes["default"].any)),
  colorScale: _propTypes["default"].oneOfType([_propTypes["default"].string, _propTypes["default"].arrayOf(_propTypes["default"].string)]),
  height: _propTypes["default"].number,
  width: _propTypes["default"].number,
  innerRadius: _propTypes["default"].number,
  padding: _propTypes["default"].oneOfType([_propTypes["default"].number, _propTypes["default"].objectOf(_propTypes["default"].number)]),
  labels: _propTypes["default"].oneOfType([_propTypes["default"].arrayOf(_propTypes["default"].string), _propTypes["default"].func]),
  labelRadius: _propTypes["default"].number,
  targetEvent: _propTypes["default"].string,
  target: _propTypes["default"].string,
  theme: _propTypes["default"].objectOf(_propTypes["default"].any),
  x: _propTypes["default"].oneOfType([_propTypes["default"].string, _propTypes["default"].number, _propTypes["default"].arrayOf(_propTypes["default"].string), _propTypes["default"].func]),
  y: _propTypes["default"].oneOfType([_propTypes["default"].string, _propTypes["default"].number, _propTypes["default"].arrayOf(_propTypes["default"].string), _propTypes["default"].func]),
  onClick: _propTypes["default"].func,
  onMouseEnter: _propTypes["default"].func,
  onMouseLeave: _propTypes["default"].func,
  disableInternalEvents: _propTypes["default"].bool
};
PieChart.defaultProps = {
  data: [{
    x: 'A',
    y: 25
  }, {
    x: 'B',
    y: 10
  }, {
    x: 'C',
    y: 15
  }, {
    x: 'D',
    y: 50
  }],
  colorScale: undefined,
  height: 250,
  width: 250,
  innerRadius: 0,
  padding: 25,
  labels: [],
  labelRadius: 80,
  target: null,
  targetEvent: 'hover',
  theme: undefined,
  disableInternalEvents: false,
  x: 'x',
  y: 'y',
  onClick: function onClick() {},
  onMouseEnter: function onMouseEnter() {},
  onMouseLeave: function onMouseLeave() {}
};
var _default = PieChart;
exports["default"] = _default;