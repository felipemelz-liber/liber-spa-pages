"use strict";

require("core-js/modules/es6.string.iterator");

require("core-js/modules/es6.weak-map");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

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

var _propTypes = _interopRequireDefault(require("prop-types"));

var _Helpers = require("../../Helpers");

var _Util = require("../../Util");

var _styles = require("./styles");

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

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

var SimpleDisplay =
/*#__PURE__*/
function (_Component) {
  _inherits(SimpleDisplay, _Component);

  function SimpleDisplay(props) {
    var _this;

    _classCallCheck(this, SimpleDisplay);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(SimpleDisplay).call(this, props));

    _this.setScreenSize = function () {
      _this.setState({
        screenSize: (0, _Util.getScreenSize)(window)
      });
    };

    _this.getLabel = function (label) {
      if (typeof label === 'string' || label instanceof String) {
        return {
          text: label,
          color: null
        };
      }

      return label;
    };

    _this.handleMouseMove = function (event) {
      var onMouseMove = _this.props.onMouseMove;
      var _this$props = _this.props,
          tooltipContent = _this$props.tooltipContent,
          tooltipLabel = _this$props.tooltipLabel;

      if (tooltipContent) {
        _this.setState({
          showTooltip: true,
          position: {
            x: event.clientX,
            y: event.clientY
          },
          tooltip: {
            content: tooltipContent,
            label: tooltipLabel
          }
        }, onMouseMove);
      } else {
        onMouseMove();
      }
    };

    _this.handleMouseLeave = function () {
      var onMouseLeave = _this.props.onMouseLeave;

      _this.setState({
        showTooltip: false,
        position: {}
      }, onMouseLeave);
    };

    _this.state = {
      screenSize: (0, _Util.getScreenSize)(window),
      showTooltip: false,
      position: {
        x: null,
        y: null
      },
      tooltip: {
        label: {
          text: null,
          color: null
        },
        content: null
      }
    };
    return _this;
  }

  _createClass(SimpleDisplay, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      window.addEventListener('resize', this.setScreenSize);
    }
  }, {
    key: "componentWillUnmount",
    value: function componentWillUnmount() {
      window.removeEventListener('resize', this.setScreenSize);
    }
  }, {
    key: "render",
    value: function render() {
      var _this$props2 = this.props,
          tooltipContent = _this$props2.tooltipContent,
          children = _this$props2.children,
          onMouseLeave = _this$props2.onMouseLeave,
          onMouseMove = _this$props2.onMouseMove,
          prefix = _this$props2.prefix,
          props = _objectWithoutProperties(_this$props2, ["tooltipContent", "children", "onMouseLeave", "onMouseMove", "prefix"]);

      var label = this.getLabel(this.props.label);
      var _this$state = this.state,
          showTooltip = _this$state.showTooltip,
          position = _this$state.position,
          tooltip = _this$state.tooltip,
          screenSize = _this$state.screenSize;
      var haveTooltip = Boolean(tooltipContent) && (screenSize === 'large' || screenSize === 'extraLarge');
      return _react["default"].createElement(_react.Fragment, null, showTooltip ? _react["default"].createElement(_Helpers.Tooltip, {
        type: "floater",
        show: showTooltip,
        position: position,
        label: tooltip.label
      }, tooltip.content) : null, _react["default"].createElement(_styles.Container, _extends({}, props, {
        onMouseMove: haveTooltip || onMouseMove ? this.handleMouseMove : null,
        onMouseLeave: haveTooltip || onMouseLeave ? this.handleMouseLeave : null,
        hasClick: Boolean(this.props.onClick)
      }), _react["default"].createElement(_styles.Value, {
        prefix: prefix
      }, children), _react["default"].createElement(_styles.Label, {
        color: label.color
      }, label.text)));
    }
  }]);

  return SimpleDisplay;
}(_react.Component);

SimpleDisplay.propTypes = {
  divider: _propTypes["default"].bool,
  label: _propTypes["default"].oneOfType([_propTypes["default"].string, _propTypes["default"].shape({
    text: _propTypes["default"].string,
    color: _propTypes["default"].string
  })]),
  prefix: _propTypes["default"].string,
  children: _propTypes["default"].oneOfType([_propTypes["default"].any]),
  tooltipContent: _propTypes["default"].oneOfType([_propTypes["default"].any]),
  tooltipLabel: _propTypes["default"].string,
  onMouseLeave: _propTypes["default"].func,
  onMouseMove: _propTypes["default"].func,
  onClick: _propTypes["default"].func,
  highlight: _propTypes["default"].bool
};
SimpleDisplay.defaultProps = {
  divider: true,
  label: '',
  children: '',
  prefix: null,
  tooltipContent: null,
  tooltipLabel: '',
  highlight: false,
  onMouseMove: null,
  onMouseLeave: null,
  onClick: null
};
var _default = SimpleDisplay;
exports["default"] = _default;