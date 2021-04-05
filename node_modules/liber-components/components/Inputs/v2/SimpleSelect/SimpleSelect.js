"use strict";

require("core-js/modules/es6.string.iterator");

require("core-js/modules/es6.weak-map");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

require("core-js/modules/es7.symbol.async-iterator");

require("core-js/modules/es6.symbol");

require("core-js/modules/es6.array.index-of");

require("core-js/modules/web.dom.iterable");

require("core-js/modules/es6.array.iterator");

require("core-js/modules/es6.object.to-string");

require("core-js/modules/es6.object.keys");

require("core-js/modules/es6.object.assign");

require("core-js/modules/es6.object.define-property");

require("core-js/modules/es6.object.create");

require("core-js/modules/es6.object.set-prototype-of");

require("core-js/modules/es6.array.find");

require("core-js/modules/es6.array.map");

var _react = _interopRequireWildcard(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _reactInnertext = _interopRequireDefault(require("react-innertext"));

var _DropDown = require("../../../DropDown");

var _SimpleSelect = require("./SimpleSelect.styles");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function _getRequireWildcardCache() { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; if (obj != null) { var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

var SimpleSelect =
/*#__PURE__*/
function (_Component) {
  _inherits(SimpleSelect, _Component);

  function SimpleSelect(props) {
    var _this;

    _classCallCheck(this, SimpleSelect);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(SimpleSelect).call(this, props));

    _this.makeSelection = function () {
      for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
        args[_key] = arguments[_key];
      }

      return function () {
        var onSelect = _this.props.onSelect;
        if (_this.dropdown) _this.dropdown.close();
        onSelect.apply(void 0, args);
      };
    };

    _this.handleOptionSelection = function (value, label) {
      return function () {
        _this.setState({
          value: value,
          label: label
        }, _this.makeSelection(value, label));
      };
    };

    _this.mappingOption = function (currentValue) {
      return function (child) {
        var label = (0, _reactInnertext["default"])(child);
        var value = child.props.value || label.toLowerCase();
        return _react["default"].createElement(_SimpleSelect.Option, _extends({
          key: value
        }, child.props, {
          label: label,
          value: value,
          active: value === currentValue,
          onClick: _this.handleOptionSelection(value, label)
        }));
      };
    };

    _this.dropDownRef = function (element) {
      _this.dropdown = element;
    };

    _this.state = {
      value: '',
      label: ''
    };
    return _this;
  }

  _createClass(SimpleSelect, [{
    key: "render",
    value: function render() {
      var _this$state = this.state,
          value = _this$state.value,
          label = _this$state.label;

      var _this$props = this.props,
          children = _this$props.children,
          props = _objectWithoutProperties(_this$props, ["children"]);

      return _react["default"].createElement(_SimpleSelect.Container, null, _react["default"].createElement(_DropDown.SimpleDropDown, {
        ref: this.dropDownRef,
        customButton: _react["default"].createElement(_SimpleSelect.DisplayBox, props, _react["default"].createElement(_SimpleSelect.ValueBox, null, label), _react["default"].createElement(_SimpleSelect.Chevron, null))
      }, _react.Children.toArray(children).map(this.mappingOption(value))));
    }
  }], [{
    key: "getDerivedStateFromProps",
    value: function getDerivedStateFromProps(props, state) {
      if (props.value !== null) {
        var selected = _react.Children.toArray(props.children).find(function (child) {
          return child.props.value === props.value;
        });

        if (selected) {
          return {
            value: props.value,
            label: (0, _reactInnertext["default"])(selected)
          };
        }
      }

      return state;
    }
  }]);

  return SimpleSelect;
}(_react.Component);

SimpleSelect.propTypes = {
  children: _propTypes["default"].oneOfType([_propTypes["default"].node, _propTypes["default"].arrayOf(_propTypes["default"].node)]),
  value: _propTypes["default"].string,
  onSelect: _propTypes["default"].func
};
SimpleSelect.defaultProps = {
  value: null,
  children: [],
  onSelect: function onSelect() {}
};
var _default = SimpleSelect;
exports["default"] = _default;