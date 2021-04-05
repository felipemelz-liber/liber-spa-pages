"use strict";

require("core-js/modules/es6.weak-map");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

require("core-js/modules/es6.string.iterator");

require("core-js/modules/es6.array.from");

require("core-js/modules/es6.regexp.to-string");

require("core-js/modules/es6.date.to-string");

require("core-js/modules/es7.symbol.async-iterator");

require("core-js/modules/es6.array.is-array");

require("core-js/modules/es6.object.assign");

require("core-js/modules/es6.symbol");

require("core-js/modules/es6.array.index-of");

require("core-js/modules/es6.object.define-property");

require("core-js/modules/es6.object.create");

require("core-js/modules/es6.object.set-prototype-of");

require("core-js/modules/web.dom.iterable");

require("core-js/modules/es6.array.iterator");

require("core-js/modules/es6.object.to-string");

require("core-js/modules/es6.object.keys");

require("core-js/modules/es6.array.for-each");

require("core-js/modules/es6.array.reduce");

require("core-js/modules/es6.array.map");

var _react = _interopRequireWildcard(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _Util = require("../../../Util");

var _Helpers = require("../../../Helpers");

var _SelectMultiple = require("./SelectMultiple.styles");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function _getRequireWildcardCache() { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; if (obj != null) { var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance"); }

function _iterableToArray(iter) { if (Symbol.iterator in Object(iter) || Object.prototype.toString.call(iter) === "[object Arguments]") return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = new Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } }

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

var SelectMultiple =
/*#__PURE__*/
function (_Component) {
  _inherits(SelectMultiple, _Component);

  function SelectMultiple() {
    var _this;

    _classCallCheck(this, SelectMultiple);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(SelectMultiple).call(this));

    _this.handleOpenToogle = function () {
      _this.setState(function (state) {
        return {
          open: !state.open
        };
      });
    };

    _this.handleClose = function () {
      _this.setState({
        open: false
      });
    };

    _this.handleChange = function (onChange, event) {
      event.persist();

      _this.setState({
        all: false
      }, function () {
        onChange(event);
      });
    };

    _this.parseChildren = function (children) {
      var childArray = _react["default"].Children.toArray(children);

      return childArray.map(function (child) {
        var _child$props = child.props,
            _onChange = _child$props.onChange,
            props = _objectWithoutProperties(_child$props, ["onChange"]);

        return _react["default"].createElement(_SelectMultiple.Checkbox, _extends({}, props, {
          key: props.id,
          ref: function ref(element) {
            _this.boxes[props.value] = element;
          },
          onChange: function onChange(event) {
            _this.handleChange(_onChange, event);
          }
        }));
      });
    };

    _this.getCheckedList = function (children) {
      var childArray = _react["default"].Children.toArray(children);

      return childArray.reduce(function (list, child) {
        if (_this.checkedTest(child)) {
          return [].concat(_toConsumableArray(list), [child.props.children]);
        }

        return list;
      }, []);
    };

    _this.checkedTest = function (child) {
      if (child.props.checked === null) {
        if (_this.boxes[child.props.value]) {
          return _this.boxes[child.props.value].checked;
        }
      }

      return child.props.checked;
    };

    _this.handleSelectAll = function () {
      var _this$props = _this.props,
          onChangeAll = _this$props.onChangeAll,
          children = _this$props.children;

      _this.setState(function (state) {
        if (!state.all) {
          var all = _react["default"].Children.toArray(children).map(function (child) {
            return child.props.value;
          });

          onChangeAll(all);
        } else {
          onChangeAll([]);
        }

        Object.keys(_this.boxes).forEach(function (box) {
          var checkbox = _this.boxes[box];
          checkbox.checked = !state.all;
        });
        return {
          all: !state.all
        };
      });
    };

    _this.boxes = {};
    _this.state = {
      open: false,
      all: false
    };
    return _this;
  }

  _createClass(SelectMultiple, [{
    key: "render",
    value: function render() {
      var _this$state = this.state,
          open = _this$state.open,
          all = _this$state.all;
      var _this$props2 = this.props,
          children = _this$props2.children,
          className = _this$props2.className;
      var layout;
      var parsedChildren = this.parseChildren(children);
      var checkedList = this.getCheckedList(children);
      var unselected = checkedList.length === 0;
      if (open) layout = 'open';else if (!open && !unselected) layout = 'selected';else layout = 'unselected';
      return _react["default"].createElement(_SelectMultiple.FieldContainer, null, _react["default"].createElement(_SelectMultiple.Label, {
        layout: layout
      }, "Select Multiple"), _react["default"].createElement(_Util.ClickOutside, {
        onOutsideClick: this.handleClose
      }, _react["default"].createElement(_react.Fragment, null, _react["default"].createElement(_Helpers.TooltipBox, {
        mount: "top",
        show: checkedList.length !== 0,
        content: _react["default"].createElement(_SelectMultiple.Tooltip, null, checkedList.join(', '))
      }, _react["default"].createElement(_SelectMultiple.FieldBox, {
        onClick: this.handleOpenToogle,
        layout: layout,
        className: className
      }, _react["default"].createElement("span", null, checkedList.join(', ')))), _react["default"].createElement(_SelectMultiple.SelectionContainer, {
        open: open
      }, _react["default"].createElement(_SelectMultiple.CardContent, null, _react["default"].createElement(_SelectMultiple.SelectHeader, null, _react["default"].createElement(_SelectMultiple.Checkbox, {
        header: true,
        id: "all_checkbox",
        onChange: this.handleSelectAll,
        checked: all
      }, "Selecionar todos"), _react["default"].createElement(_SelectMultiple.SelectCounter, null, checkedList.length, " selecionados")), _react["default"].createElement(_SelectMultiple.SelectBox, null, parsedChildren))))));
    }
  }]);

  return SelectMultiple;
}(_react.Component);

SelectMultiple.propTypes = {
  children: _propTypes["default"].arrayOf(_propTypes["default"].any).isRequired,
  onChangeAll: _propTypes["default"].func,
  className: _propTypes["default"].string
};
SelectMultiple.defaultProps = {
  onChangeAll: function onChangeAll() {},
  className: null
};
var _default = SelectMultiple;
exports["default"] = _default;