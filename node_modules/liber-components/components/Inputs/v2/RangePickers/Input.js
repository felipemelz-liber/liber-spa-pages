"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

require("core-js/modules/es7.symbol.async-iterator");

require("core-js/modules/es6.symbol");

require("core-js/modules/es6.object.define-property");

require("core-js/modules/es6.object.create");

require("core-js/modules/es6.object.set-prototype-of");

require("core-js/modules/es6.array.map");

require("core-js/modules/es6.array.filter");

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _Range = require("./Range.styles");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

var Input =
/*#__PURE__*/
function (_React$Component) {
  _inherits(Input, _React$Component);

  function Input(props) {
    var _this;

    _classCallCheck(this, Input);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(Input).call(this, props));

    _this.focus = function () {
      var toFocus = _this.fields.filter(function (field) {
        return field.current.value === '';
      })[0] || _this.fields[_this.fields.length - 1];

      toFocus.current.focus();
    };

    _this.moveFields = function (index) {
      return function (event) {
        var target = event.target,
            key = event.key;

        if (target.value.length === 0) {
          var prevFields = _this.fields.slice(0, index);

          var prev = prevFields.filter(function (field) {
            return field.current.value === '';
          })[0] || _this.fields[index - 1];

          if (prev) prev.current.focus();
        } else if (target.value.length >= target.dataset.max && key !== 'ArrowLeft' && key !== 'ArrowRight') {
          var next = _this.fields[index + 1];
          if (next) next.current.focus();
        } else if (key === 'ArrowLeft' || key === 'ArrowRight') {
          var pos = target.selectionStart;

          if (pos === 0) {
            var _prev = _this.fields[index - 1];
            if (_prev) _prev.current.focus();
          } else if (pos >= target.dataset.max) {
            var _next = _this.fields[index + 1];
            if (_next) _next.current.focus();
          }
        }
      };
    };

    _this.handleFocus = function (event) {
      _this.props.onFocus(event);
    };

    _this.setRef = function (index) {
      return function (element) {
        _this.fields[index] = {
          current: element
        };
      };
    };

    _this.fields = [];
    return _this;
  }

  _createClass(Input, [{
    key: "render",
    value: function render() {
      var _this2 = this;

      var _this$props = this.props,
          fields = _this$props.fields,
          hide = _this$props.hide;
      return fields.map(function (field, index) {
        var maxLength = field.maxLength || 10;
        return _react["default"].createElement(_Range.InputContainer, {
          key: field.id,
          full: !field.size ? '100%' : null,
          hide: hide
        }, _react["default"].createElement(_Range.Input, {
          inputRef: _this2.setRef(index),
          onKeyUp: _this2.moveFields(index),
          value: field.value,
          type: field.type || 'text',
          mask: field.mask || null,
          maskChar: field.maskChar || null,
          maxLength: !field.mask ? maxLength : null,
          "data-max": field.mask ? field.mask.length : maxLength,
          onChange: field.onChange,
          onFocus: _this2.handleFocus,
          inputSize: field.size || '100%',
          disabled: field.disabled
        }), field.separator && _react["default"].createElement(_Range.Separator, {
          show: field.mask ? field.value.length === field.mask.length : field.value.length === maxLength
        }, field.separator));
      });
    }
  }]);

  return Input;
}(_react["default"].Component);

Input.propTypes = {
  onFocus: _propTypes["default"].func,
  hide: _propTypes["default"].bool,
  fields: _propTypes["default"].arrayOf(_propTypes["default"].shape({
    id: _propTypes["default"].string.isRequired,
    mask: _propTypes["default"].string,
    maskChar: _propTypes["default"].string,
    value: _propTypes["default"].oneOfType([_propTypes["default"].string, _propTypes["default"].number]),
    maxLength: _propTypes["default"].number,
    separator: _propTypes["default"].string,
    type: _propTypes["default"].string,
    size: _propTypes["default"].string,
    disabled: _propTypes["default"].bool,
    onChange: _propTypes["default"].func
  })).isRequired
};
Input.defaultProps = {
  onFocus: function onFocus() {},
  hide: false
};
var _default = Input;
exports["default"] = _default;