"use strict";

require("core-js/modules/es6.array.iterator");

require("core-js/modules/es6.weak-map");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

require("core-js/modules/es6.string.iterator");

require("core-js/modules/es6.array.from");

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

require("core-js/modules/es6.array.reduce");

var _react = _interopRequireWildcard(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _lodash = require("lodash");

var _TabsCtrl = _interopRequireDefault(require("./TabsCtrl"));

var _SimpleTab = require("../SimpleTab");

var _Tabs = require("./Tabs.styles");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function _getRequireWildcardCache() { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; if (obj != null) { var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance"); }

function _iterableToArray(iter) { if (Symbol.iterator in Object(iter) || Object.prototype.toString.call(iter) === "[object Arguments]") return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = new Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

var Tabs =
/*#__PURE__*/
function (_Component) {
  _inherits(Tabs, _Component);

  function Tabs() {
    var _getPrototypeOf2;

    var _temp, _this;

    _classCallCheck(this, Tabs);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _possibleConstructorReturn(_this, (_temp = _this = _possibleConstructorReturn(this, (_getPrototypeOf2 = _getPrototypeOf(Tabs)).call.apply(_getPrototypeOf2, [this].concat(args))), _this.state = {
      active: 0,
      size: 0
    }, _this.tabs = [], _this.componentDidMount = function () {
      var active = _this.state.active;
      var _this$props$activeTab = _this.props.activeTab,
          activeTab = _this$props$activeTab === void 0 ? active : _this$props$activeTab;
      setTimeout(function () {
        _this.setState({
          size: _this.tabs[activeTab].offsetWidth
        });
      }, 0);
    }, _this.handleClick = function (active) {
      return function () {
        var onChange = _this.props.onChange;
        var currentTab = _this.tabs[active];
        onChange(active);

        _this.setState({
          active: active,
          size: currentTab.offsetWidth
        });
      };
    }, _this.tabRef = function (index) {
      return function (element) {
        _this.tabs[index] = element;
      };
    }, _this.mapChildren = function (active) {
      return function (current, child, index) {
        var _child$props = child.props,
            label = _child$props.label,
            children = _child$props.children;
        return {
          mappedTabs: [].concat(_toConsumableArray(current.mappedTabs), [_react["default"].cloneElement(child, {
            key: (0, _lodash.uniqueId)("tab_".concat(label)),
            ref: _this.tabRef(index),
            left: true,
            showUnderline: false,
            as: 'button',
            onClick: _this.handleClick(index),
            active: active === index,
            children: label
          })]),
          tabs: [].concat(_toConsumableArray(current.tabs), [{
            key: (0, _lodash.uniqueId)(label),
            content: children
          }])
        };
      };
    }, _temp));
  }

  _createClass(Tabs, [{
    key: "render",
    value: function render() {
      var _this$state = this.state,
          active = _this$state.active,
          size = _this$state.size;
      var _this$props = this.props,
          children = _this$props.children,
          _this$props$activeTab2 = _this$props.activeTab,
          activeTab = _this$props$activeTab2 === void 0 ? active : _this$props$activeTab2,
          ControlComponent = _this$props.ControlComponent;

      var _React$Children$toArr = _react["default"].Children.toArray(children).reduce(this.mapChildren(activeTab), {
        mappedTabs: [],
        tabs: []
      }),
          mappedTabs = _React$Children$toArr.mappedTabs,
          tabs = _React$Children$toArr.tabs;

      var header = _react["default"].createElement(_Tabs.HeaderContainer, null, _react["default"].createElement(_SimpleTab.SimpleTabs, {
        left: true
      }, mappedTabs), _react["default"].createElement(_Tabs.Slider, {
        active: activeTab,
        size: size
      }));

      return _react["default"].cloneElement(ControlComponent, {
        header: header,
        active: activeTab,
        tabs: tabs
      });
    }
  }]);

  return Tabs;
}(_react.Component);

Tabs.propTypes = {
  children: _propTypes["default"].oneOfType([_propTypes["default"].node, _propTypes["default"].arrayOf(_propTypes["default"].node)]).isRequired,
  activeTab: _propTypes["default"].number,
  onChange: _propTypes["default"].func,
  ControlComponent: _propTypes["default"].element
};
Tabs.defaultProps = {
  activeTab: undefined,
  onChange: function onChange() {},
  ControlComponent: _react["default"].createElement(_TabsCtrl["default"], {
    header: _react["default"].createElement("div", null),
    active: 0,
    tabs: []
  })
};
var _default = Tabs;
exports["default"] = _default;