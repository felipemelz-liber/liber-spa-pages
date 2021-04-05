"use strict";

require("core-js/modules/es6.weak-map");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

require("core-js/modules/es6.object.assign");

require("core-js/modules/es6.array.index-of");

require("core-js/modules/es6.array.iterator");

require("core-js/modules/es6.object.keys");

require("core-js/modules/es6.string.iterator");

require("core-js/modules/es6.array.from");

require("core-js/modules/es7.symbol.async-iterator");

require("core-js/modules/es6.symbol");

require("core-js/modules/web.dom.iterable");

require("core-js/modules/es6.array.is-array");

require("core-js/modules/es6.object.define-property");

require("core-js/modules/es6.object.create");

require("core-js/modules/es6.object.set-prototype-of");

require("core-js/modules/es6.regexp.to-string");

require("core-js/modules/es6.date.to-string");

require("core-js/modules/es6.object.to-string");

require("core-js/modules/es6.array.map");

require("core-js/modules/es6.array.filter");

require("core-js/modules/es7.array.includes");

require("core-js/modules/es6.string.includes");

var _react = _interopRequireWildcard(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _Accordion = require("./Accordion.styles");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function _getRequireWildcardCache() { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; if (obj != null) { var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

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

var AccordionComponent =
/*#__PURE__*/
function (_Component) {
  _inherits(AccordionComponent, _Component);

  function AccordionComponent(props) {
    var _this;

    _classCallCheck(this, AccordionComponent);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(AccordionComponent).call(this, props));

    _this.handleChangeCurrent = function (_ref) {
      var target = _ref.target;
      var single = _this.props.single;
      var value = target.getAttribute('data-index');

      _this.setState(function (_ref2) {
        var current = _ref2.current;

        if (single) {
          if (value !== current) {
            return {
              current: value
            };
          }

          return {
            current: ''
          };
        }

        if (current.includes(value)) {
          return {
            current: current.filter(function (item) {
              return item !== value;
            })
          };
        }

        return {
          current: [].concat(_toConsumableArray(current), [value])
        };
      });
    };

    _this.state = {
      current: props.single ? '' : []
    };
    return _this;
  }

  _createClass(AccordionComponent, [{
    key: "render",
    value: function render() {
      var _this2 = this;

      var _this$props = this.props,
          children = _this$props.children,
          grow = _this$props.grow,
          single = _this$props.single,
          Label = _this$props.labelComponent,
          Accordion = _this$props.accordionComponent;
      var current = this.state.current;
      return _react["default"].createElement(Accordion, {
        grow: grow
      }, _react.Children.map(children, function (child, index) {
        var open;

        if (single) {
          open = current === index.toString();
        } else {
          open = current.includes(index.toString());
        }

        var _child$props = child.props,
            label = _child$props.label,
            contentProps = _objectWithoutProperties(_child$props, ["label"]);

        return _react["default"].createElement(_Accordion.Item, {
          key: child.props.label || index
        }, _react["default"].createElement(_Accordion.Content, _extends({
          open: open
        }, contentProps), child), _react["default"].createElement(Label, {
          "data-index": index.toString(),
          onClick: _this2.handleChangeCurrent,
          open: open
        }, label)); // return cloneElement(child, {
        //   open,
        //   key: child.props.label || index,
        //   value: index.toString(),
        //   onClick: this.handleChangeCurrent,
        // });
      }));
    }
  }]);

  return AccordionComponent;
}(_react.Component);

AccordionComponent.propTypes = {
  children: _propTypes["default"].oneOfType([_propTypes["default"].any]).isRequired,
  single: _propTypes["default"].bool,
  grow: _propTypes["default"].bool,
  labelComponent: _propTypes["default"].oneOfType([_propTypes["default"].any]),
  accordionComponent: _propTypes["default"].oneOfType([_propTypes["default"].any])
};
AccordionComponent.defaultProps = {
  single: false,
  grow: false,
  labelComponent: _Accordion.Button,
  accordionComponent: _Accordion.Accordion
};
var _default = AccordionComponent;
exports["default"] = _default;