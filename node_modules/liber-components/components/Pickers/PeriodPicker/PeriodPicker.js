"use strict";

require("core-js/modules/es6.array.iterator");

require("core-js/modules/es6.string.iterator");

require("core-js/modules/es6.weak-map");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

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

var _moment = _interopRequireDefault(require("moment"));

var _MonthPicker = _interopRequireDefault(require("../MonthPicker"));

var _DropDown = _interopRequireDefault(require("../../DropDown"));

var _styles = require("./styles");

var _ClickOutside = _interopRequireDefault(require("../../Util/ClickOutside"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function _getRequireWildcardCache() { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; if (obj != null) { var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

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

var PeriodPicker =
/*#__PURE__*/
function (_Component) {
  _inherits(PeriodPicker, _Component);

  function PeriodPicker(props) {
    var _this;

    _classCallCheck(this, PeriodPicker);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(PeriodPicker).call(this, props));

    _this.calcPeriod = function (value) {
      var _this$props = _this.props,
          date = _this$props.date,
          onSelect = _this$props.onSelect;

      var _value$split = value.split('-'),
          _value$split2 = _slicedToArray(_value$split, 2),
          direction = _value$split2[0],
          days = _value$split2[1];

      var start;
      var end;

      switch (direction) {
        case 'last':
          start = (0, _moment["default"])(date).subtract(days - 1, 'days');
          end = (0, _moment["default"])(date);
          onSelect(value, start, end);
          break;

        case 'next':
          start = (0, _moment["default"])(date);
          end = (0, _moment["default"])(date).add(days - 1, 'days');
          onSelect(value, start, end);
          break;

        default:
          onSelect(value, null, null);
          break;
      }
    };

    _this.handleMonthSelect = function (obj, value, date) {
      var onSelect = _this.props.onSelect;

      _this.setState({
        monthPicker: false,
        month: obj.month,
        year: obj.year
      }, function () {
        onSelect('month-picker', (0, _moment["default"])(date).startOf('month'), (0, _moment["default"])(date).endOf('month'));
      });
    };

    _this.handleOpenDropDown = function () {
      _this.setState(function (state) {
        return {
          monthPicker: state.period === 'month-picker'
        };
      });
    };

    _this.handlePeriodSelection = function (value) {
      var regex = /(last|next)-[1-9]+/gm;

      if (regex.test(value)) {
        _this.setState({
          period: value,
          month: null,
          year: null
        }, function () {
          _this.calcPeriod(value);
        });
      } else if (value === 'month-picker') {
        _this.setState({
          period: value,
          monthPicker: true
        });
      } else {
        console.error("Wrong format, try (last|next)-[1-9]+: ".concat(value));
      }
    };

    _this.state = {
      period: props.value,
      month: null,
      year: null,
      monthPicker: false
    };

    if (props.value) {
      _this.calcPeriod(props.value);
    }

    return _this;
  }

  _createClass(PeriodPicker, [{
    key: "render",
    value: function render() {
      var _this2 = this;

      return _react["default"].createElement(_styles.Content, null, _react["default"].createElement(_DropDown["default"], {
        value: this.state.period,
        defaultValue: this.state.period,
        onSelect: this.handlePeriodSelection,
        onOpen: this.handleOpenDropDown
      }, this.props.children), _react["default"].createElement(_styles.MonthPickerContainer, {
        show: this.state.monthPicker
      }, _react["default"].createElement(_ClickOutside["default"], {
        onOutsideClick: function onOutsideClick() {
          _this2.setState({
            monthPicker: false
          });
        }
      }, _react["default"].createElement(_MonthPicker["default"], {
        month: this.state.month,
        year: this.state.year,
        onSelect: this.handleMonthSelect
      }))));
    }
  }], [{
    key: "getDerivatedStateFromProps",
    value: function getDerivatedStateFromProps(props) {
      if (props.value) {
        return {
          period: props.value
        };
      }

      return {};
    }
  }]);

  return PeriodPicker;
}(_react.Component);

PeriodPicker.propTypes = {
  children: _propTypes["default"].arrayOf(_propTypes["default"].element).isRequired,
  date: _propTypes["default"].oneOfType([_propTypes["default"].instanceOf(_moment["default"]), _propTypes["default"].string]),
  onSelect: _propTypes["default"].func,
  value: _propTypes["default"].string
};
PeriodPicker.defaultProps = {
  value: null,
  date: undefined,
  onSelect: function onSelect() {}
};
var _default = PeriodPicker;
exports["default"] = _default;