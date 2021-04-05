"use strict";

require("core-js/modules/es6.string.iterator");

require("core-js/modules/es6.weak-map");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

require("core-js/modules/es7.symbol.async-iterator");

require("core-js/modules/es6.object.assign");

require("core-js/modules/es6.array.index-of");

require("core-js/modules/es6.object.define-properties");

require("core-js/modules/es7.object.get-own-property-descriptors");

require("core-js/modules/es6.symbol");

require("core-js/modules/web.dom.iterable");

require("core-js/modules/es6.array.iterator");

require("core-js/modules/es6.object.to-string");

require("core-js/modules/es6.object.keys");

require("core-js/modules/es6.object.define-property");

require("core-js/modules/es6.object.create");

require("core-js/modules/es6.object.set-prototype-of");

require("core-js/modules/es6.array.map");

require("core-js/modules/es6.array.filter");

require("core-js/modules/es6.array.for-each");

var _react = _interopRequireWildcard(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _lodash = _interopRequireDefault(require("lodash"));

var _styles = require("./styles");

var _tabsComponents = require("../tabsComponents");

var _Header = _interopRequireDefault(require("./Header"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function _getRequireWildcardCache() { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; if (obj != null) { var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(source, true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(source).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function validateTab(props, propName, componentName) {
  var children = props[propName];

  if (children.constructor !== Array) {
    children = Array(children);
  }

  children.forEach(function (child) {
    if (child.type !== _tabsComponents.Tab && child.type !== _Header["default"]) {
      return new Error("".concat(componentName, " only accept Tab or TabHeader as children."));
    }

    return null;
  });
  return null;
}

var Tabs =
/*#__PURE__*/
function (_Component) {
  _inherits(Tabs, _Component);

  function Tabs(props) {
    var _this;

    _classCallCheck(this, Tabs);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(Tabs).call(this, props));

    _this.dispartChildren = function (children) {
      var tabChildren = _react["default"].Children.toArray(children).filter(function (child) {
        return child.type === _tabsComponents.Tab;
      });

      var tabHeader = _react["default"].Children.toArray(children).filter(function (child) {
        return child.type === _Header["default"];
      })[0];

      return {
        tabChildren: tabChildren,
        tabHeader: tabHeader
      };
    };

    _this.handleSelection = function (index) {
      var active = _this.props.active;

      if (active === null || active === undefined) {
        _this.setState({
          current: index
        });
      }
    };

    _this.state = _objectSpread({
      current: props.active || 0
    }, _this.dispartChildren(props.children));
    return _this;
  }

  _createClass(Tabs, [{
    key: "render",
    value: function render() {
      var _this2 = this;

      var _this$state = this.state,
          current = _this$state.current,
          tabChildren = _this$state.tabChildren,
          tabHeader = _this$state.tabHeader;

      var _this$props = this.props,
          children = _this$props.children,
          slideColor = _this$props.slideColor,
          props = _objectWithoutProperties(_this$props, ["children", "slideColor"]);

      var labels = _react["default"].Children.toArray(tabChildren).map(function (child) {
        return child.props.label;
      });

      var mappedLabels = labels.map(function (label, index) {
        var id = _lodash["default"].uniqueId(label);

        return _react["default"].createElement(_styles.Label, _extends({}, props, {
          htmlFor: id,
          key: id,
          active: index === current,
          "data-value": label
        }), _react["default"].createElement("input", {
          onChange: function onChange() {
            return _this2.handleSelection(index);
          },
          type: "radio",
          name: "tabs",
          id: id,
          checked: index === current
        }), label);
      });
      var header;

      if (tabHeader) {
        if (tabHeader.props.asList) {
          header = _react["default"].cloneElement(tabHeader, {
            labels: mappedLabels,
            slider: _react["default"].createElement(_styles.Slide, {
              number: labels.length,
              current: current,
              color: slideColor
            }),
            header: _styles.BasicHeader
          });
        } else {
          header = _react["default"].cloneElement(tabHeader, {
            labels: _react["default"].createElement(_styles.BasicHeader, null, mappedLabels, _react["default"].createElement(_styles.Slide, {
              role: "slider",
              number: labels.length,
              current: current,
              color: slideColor
            }))
          });
        }
      } else {
        header = _react["default"].createElement(_styles.Header, null, mappedLabels, _react["default"].createElement(_styles.Slide, {
          number: labels.length,
          current: current,
          color: slideColor
        }));
      }

      return _react["default"].createElement(_react["default"].Fragment, null, header, tabChildren[current]);
    }
  }], [{
    key: "getDerivedStateFromProps",
    value: function getDerivedStateFromProps(nextProps) {
      var active = nextProps.active;
      return active !== null && active !== undefined ? {
        current: nextProps.active
      } : {};
    }
  }]);

  return Tabs;
}(_react.Component);

Tabs.propTypes = {
  slideColor: _propTypes["default"].oneOfType([_propTypes["default"].string, _propTypes["default"].arrayOf(_propTypes["default"].string)]),
  children: validateTab,
  active: _propTypes["default"].number
};
Tabs.defaultProps = {
  slideColor: undefined,
  children: _react["default"].createElement("div", null),
  active: null
};
var _default = Tabs;
exports["default"] = _default;