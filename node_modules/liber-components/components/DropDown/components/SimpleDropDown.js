"use strict";

require("core-js/modules/es6.string.iterator");

require("core-js/modules/es6.weak-map");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

require("core-js/modules/es6.object.assign");

require("core-js/modules/es6.array.index-of");

require("core-js/modules/es6.array.iterator");

require("core-js/modules/es6.object.keys");

require("core-js/modules/es6.regexp.to-string");

require("core-js/modules/es6.date.to-string");

require("core-js/modules/es6.object.to-string");

require("core-js/modules/es7.symbol.async-iterator");

require("core-js/modules/es6.symbol");

require("core-js/modules/web.dom.iterable");

require("core-js/modules/es6.array.is-array");

require("core-js/modules/es6.object.define-property");

require("core-js/modules/es6.object.create");

require("core-js/modules/es6.object.set-prototype-of");

require("core-js/modules/es6.regexp.split");

var _react = _interopRequireWildcard(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _ClickOutside = _interopRequireDefault(require("../../Util/ClickOutside"));

var _SimpleDropDown = require("./SimpleDropDown.styles");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function _getRequireWildcardCache() { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; if (obj != null) { var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance"); }

function _iterableToArrayLimit(arr, i) { if (!(Symbol.iterator in Object(arr) || Object.prototype.toString.call(arr) === "[object Arguments]")) { return; } var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

var SimpleDropDown =
/*#__PURE__*/
function (_PureComponent) {
  _inherits(SimpleDropDown, _PureComponent);

  function SimpleDropDown(props) {
    var _this;

    _classCallCheck(this, SimpleDropDown);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(SimpleDropDown).call(this, props));

    _this.reposition = function () {
      var position = _this.parsePosition(_this.props.position);

      _this.setState({
        position: position
      });
    };

    _this.inViewport = function (vw, vh) {
      return function (p) {
        var _p = _slicedToArray(p, 2),
            x = _p[0],
            y = _p[1];

        return y >= 0 && y <= vh && x >= 0 && x <= vw;
      };
    };

    _this.translatePosition = function (position) {
      return {
        'bottom-right': 'bottom-right-down-left',
        'bottom-center-right': 'bottom-center-down-right',
        'bottom-center-left': 'bottom-center-down-left',
        'bottom-left': 'bottom-left-down-right',
        'center-right': 'center-right-down-right',
        'center-from-right': 'center-center-down-right',
        'center-from-left': 'center-center-down-left',
        'center-left': 'center-left-down-left',
        'top-right': 'top-right-down-right',
        'top-center-right': 'top-center-down-right',
        'top-left': 'top-left-down-left'
      }[position] || position;
    };

    _this.breakPos = function (pos) {
      return pos.split('-');
    };

    _this.getNewPosition = function (_ref, _ref2, vw, vh) {
      var _ref3 = _slicedToArray(_ref, 4),
          posy = _ref3[0],
          posx = _ref3[1],
          diry = _ref3[2],
          dirx = _ref3[3];

      var p1 = _ref2.p1,
          p2 = _ref2.p2,
          p3 = _ref2.p3,
          p4 = _ref2.p4;

      var inVp = _this.inViewport(vw, vh);

      if (!inVp(p1) && !inVp(p2) && inVp(p3) && !inVp(p4)) {
        return ['bottom', 'right', 'down', 'left'].join('-');
      }

      if (!inVp(p1) && !inVp(p2) && inVp(p3) && inVp(p4)) {
        return ['bottom', posx, 'down', dirx].join('-');
      }

      if (!inVp(p1) && !inVp(p2) && !inVp(p3) && inVp(p4)) {
        return ['bottom', 'left', 'down', 'right'].join('-');
      }

      if (inVp(p1) && !inVp(p2) && !inVp(p3) && inVp(p4)) {
        return [posy, 'left', diry, 'left'].join('-');
      }

      if (inVp(p1) && !inVp(p2) && !inVp(p3) && !inVp(p4)) {
        return ['top', 'left', 'up', 'right'].join('-');
      }

      if (inVp(p1) && inVp(p2) && !inVp(p3) && !inVp(p4)) {
        return ['top', posx, 'up', dirx].join('-');
      }

      if (!inVp(p1) && inVp(p2) && !inVp(p3) && !inVp(p4)) {
        return ['top', 'right', 'up', 'left'].join('-');
      }

      if (!inVp(p1) && inVp(p2) && inVp(p3) && !inVp(p4)) {
        return [posy, 'right', diry, 'right'].join('-');
      }

      return [posy, posx, diry, dirx].join('-');
    };

    _this.getPoints = function (_ref4, _ref5, container) {
      var _ref6 = _slicedToArray(_ref4, 4),
          posy = _ref6[0],
          posx = _ref6[1],
          diry = _ref6[2],
          dirx = _ref6[3];

      var _ref7 = _slicedToArray(_ref5, 2),
          width = _ref7[0],
          height = _ref7[1];

      var _container$getBoundin = container.getBoundingClientRect(),
          offsetX = _container$getBoundin.left,
          offsetY = _container$getBoundin.top;

      var offsetWidth = container.offsetWidth,
          offsetHeight = container.offsetHeight;
      var position = {
        x: {
          left: dirx === 'left' ? offsetX - width : offsetX,
          center: dirx === 'left' ? offsetX + offsetWidth / 2 - width : offsetX + offsetWidth / 2,
          right: dirx === 'left' ? offsetX + offsetWidth - width : offsetX + offsetWidth
        },
        y: {
          top: diry === 'up' ? offsetY - height : offsetY,
          center: diry === 'up' ? offsetY + offsetHeight / 2 - height : offsetY + offsetHeight / 2,
          bottom: diry === 'up' ? offsetY + offsetHeight - height : offsetY + offsetHeight
        }
      };
      var x = position.x[posx];
      var y = position.y[posy];
      return {
        p1: [x, y],
        p2: [x + width, y],
        p3: [x + width, y + height],
        p4: [x, y + height]
      };
    };

    _this.parsePosition = function (oldPos) {
      var _this$props = _this.props,
          autoPosition = _this$props.autoPosition,
          window = _this$props.window;

      var translatedPos = _this.translatePosition(oldPos);

      var position = _this.breakPos(translatedPos);

      var container = _this.container.current;
      var content = _this.content.current;

      if (autoPosition && content && container) {
        var width = content.offsetWidth,
            height = content.offsetHeight;
        var vw = window.innerWidth,
            vh = window.innerHeight;

        var points = _this.getPoints(position, [width, height], container);

        return _this.getNewPosition(position, points, vw, vh);
      }

      return oldPos;
    };

    _this.toogleDropDown = function () {
      _this.setState(function (state) {
        return {
          open: !state.open
        };
      });
    };

    _this.close = function () {
      _this.setState({
        open: false
      });
    };

    _this.handleCustomClick = function (callback) {
      return function () {
        var _this2;

        if (callback) callback.apply(void 0, arguments);

        (_this2 = _this).toogleDropDown.apply(_this2, arguments);
      };
    };

    _this.state = {
      controled: false,
      open: false,
      position: props.position
    };
    _this.content = (0, _react.createRef)();
    _this.container = (0, _react.createRef)();
    return _this;
  }

  _createClass(SimpleDropDown, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      window.addEventListener('scroll', this.reposition);
      window.addEventListener('resize', this.reposition);
      this.reposition();
    }
  }, {
    key: "componentWillUnmount",
    value: function componentWillUnmount() {
      window.removeEventListener('scroll', this.reposition);
      window.removeEventListener('resize', this.reposition);
    }
  }, {
    key: "render",
    value: function render() {
      var _this$state = this.state,
          stateOpen = _this$state.open,
          controled = _this$state.controled,
          position = _this$state.position;

      var _this$props2 = this.props,
          children = _this$props2.children,
          label = _this$props2.label,
          custom = _this$props2.customButton,
          propsOpen = _this$props2.open,
          containerSize = _this$props2.containerSize,
          hasOutsideLabel = _this$props2.hasOutsideLabel,
          props = _objectWithoutProperties(_this$props2, ["children", "label", "customButton", "open", "containerSize", "hasOutsideLabel"]);

      var customButton = custom && _react["default"].cloneElement(custom, {
        onClick: this.handleCustomClick(custom.props.onClick)
      });

      var open = controled ? propsOpen : stateOpen;
      return _react["default"].createElement(_ClickOutside["default"], {
        onOutsideClick: open && !controled ? this.toogleDropDown : undefined
      }, _react["default"].createElement("div", {
        ref: this.container
      }, customButton || _react["default"].createElement(_SimpleDropDown.CurrentBox, _extends({}, props, {
        onClick: !controled ? this.toogleDropDown : undefined
      }), label)), _react["default"].createElement(_SimpleDropDown.DropDownContent, {
        ref: this.content,
        position: this.breakPos(position),
        hasLabel: Boolean(label) || hasOutsideLabel,
        open: open,
        containerSize: containerSize
      }, children));
    }
  }], [{
    key: "getDerivedStateFromProps",
    value: function getDerivedStateFromProps(props, state) {
      if (props.open !== null) {
        return {
          controled: true
        };
      }

      return state;
    }
  }]);

  return SimpleDropDown;
}(_react.PureComponent);

SimpleDropDown.propTypes = {
  children: _propTypes["default"].oneOfType([_propTypes["default"].any]),
  label: _propTypes["default"].oneOfType([_propTypes["default"].any]),
  customButton: _propTypes["default"].oneOfType([_propTypes["default"].element]),
  open: _propTypes["default"].bool,
  autoPosition: _propTypes["default"].bool,
  window: _propTypes["default"].objectOf(_propTypes["default"].any),
  position: _propTypes["default"].string,
  containerSize: _propTypes["default"].bool,
  hasOutsideLabel: _propTypes["default"].bool
};
SimpleDropDown.defaultProps = {
  open: null,
  children: '',
  label: '',
  customButton: null,
  position: 'bottom-left-down-right',
  containerSize: false,
  autoPosition: true,
  window: window,
  hasOutsideLabel: false
};
var _default = SimpleDropDown;
exports["default"] = _default;