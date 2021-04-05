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

require("core-js/modules/es6.string.trim");

var _react = _interopRequireWildcard(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _moment = _interopRequireDefault(require("moment"));

var _DatePicker = require("./DatePicker.styles");

var _DropDown = require("../../../DropDown");

var _MonthCalendar = _interopRequireWildcard(require("../../../Calendar/v2/MonthCalendar"));

var _Util = require("../../../Util");

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

var DatePicker =
/*#__PURE__*/
function (_Component) {
  _inherits(DatePicker, _Component);

  function DatePicker() {
    var _getPrototypeOf2;

    var _temp, _this;

    _classCallCheck(this, DatePicker);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _possibleConstructorReturn(_this, (_temp = _this = _possibleConstructorReturn(this, (_getPrototypeOf2 = _getPrototypeOf(DatePicker)).call.apply(_getPrototypeOf2, [this].concat(args))), _this.state = {
      open: false,
      clear: false,
      date: '',
      calendarDate: null
    }, _this.handleFocus = function () {
      _this.setState({
        open: true
      });
    }, _this.handleOutsideClick = function () {
      _this.setState({
        open: false
      });
    }, _this.onChangeCallback = function () {
      var onChange = _this.props.onChange;
      var date = _this.state.date;
      var mDate = (0, _moment["default"])(date, 'DD/MM/YYYY');
      onChange(date, mDate.isValid() ? mDate : null);
    }, _this.handleChange = function (date) {
      var calendarDate = _this.calendarDate(date);

      _this.setState({
        date: date,
        calendarDate: calendarDate
      }, _this.onChangeCallback);
    }, _this.handleClick = function (calendarDate) {
      var closeOnSelect = _this.props.closeOnSelect;
      var date = calendarDate.format('DD/MM/YYYY');

      _this.setState(function (state) {
        return {
          date: date,
          calendarDate: calendarDate,
          open: closeOnSelect ? false : state.open
        };
      }, _this.onChangeCallback);
    }, _this.handleNavigate = function (calendarDate) {
      _this.setState({
        calendarDate: calendarDate
      });
    }, _this.calendarDate = function (date) {
      var mDate = (0, _moment["default"])(date, 'DD/MM/YYYY').startOf('day');

      if (mDate.isValid()) {
        return mDate;
      }

      return undefined;
    }, _this.renderDay = function (day) {
      var date = _this.state.date;
      var mDate = (0, _moment["default"])(date, 'DD/MM/YYYY').startOf('day');
      var type = day.startOf('day').isSame(mDate) && 'checked';
      return _react["default"].createElement(_MonthCalendar.Unit, {
        type: type
      }, day.date());
    }, _this.handleOnMouseEnter = function () {
      var date = _this.state.date;

      if (date.trim() !== '') {
        _this.setState({
          clear: true
        });
      }
    }, _this.handleOnMouseLeave = function () {
      var date = _this.state.date;
      if (date.trim() !== '') _this.setState({
        clear: false
      });
    }, _this.clearInput = function () {
      _this.setState({
        date: '',
        calendarDate: null,
        clear: false
      });
    }, _temp));
  }

  _createClass(DatePicker, [{
    key: "render",
    value: function render() {
      var _this$state = this.state,
          date = _this$state.date,
          calendarDate = _this$state.calendarDate,
          open = _this$state.open,
          clear = _this$state.clear;

      var _this$props = this.props,
          onChange = _this$props.onChange,
          closeOnSelect = _this$props.closeOnSelect,
          propsDate = _this$props.date,
          weekLabels = _this$props.weekLabels,
          monthsLabels = _this$props.monthsLabels,
          firstDayOfWeek = _this$props.firstDayOfWeek,
          minDate = _this$props.minDate,
          props = _objectWithoutProperties(_this$props, ["onChange", "closeOnSelect", "date", "weekLabels", "monthsLabels", "firstDayOfWeek", "minDate"]);

      return _react["default"].createElement(_Util.ClickOutside, {
        onOutsideClick: this.handleOutsideClick
      }, _react["default"].createElement(_DatePicker.Container, null, _react["default"].createElement(_DropDown.SimpleDropDown, {
        open: open,
        customButton: _react["default"].createElement(_DatePicker.Field, _extends({
          width: "340px"
        }, props, {
          value: date,
          version: "2",
          onChange: this.handleChange,
          mask: "99/99/9999",
          maskChar: null,
          onFocus: this.handleFocus,
          onMouseEnter: this.handleOnMouseEnter,
          onMouseLeave: this.handleOnMouseLeave
        }))
      }, _react["default"].createElement(_DatePicker.CalendarContainer, null, _react["default"].createElement(_MonthCalendar["default"], {
        version: "2",
        date: calendarDate,
        dayRenderer: this.renderDay,
        onClick: this.handleClick,
        onNavigate: this.handleNavigate,
        weekLabels: weekLabels,
        monthsLabels: monthsLabels,
        firstDayOfWeek: firstDayOfWeek,
        minDate: minDate
      }))), _react["default"].createElement(_DatePicker.Icon, {
        hide: clear
      }), _react["default"].createElement(_DatePicker.Close // eslint-disable-line
      , {
        show: clear,
        onMouseEnter: this.handleOnMouseEnter,
        onClick: this.clearInput
      })));
    }
  }], [{
    key: "getDerivedStateFromProps",
    value: function getDerivedStateFromProps(props, state) {
      if (props.date) {
        return {
          date: (0, _moment["default"])(props.date, 'DD/MM/YYYY').format('DD/MM/YYYY')
        };
      }

      return state;
    }
  }]);

  return DatePicker;
}(_react.PureComponent);

DatePicker.propTypes = {
  label: _propTypes["default"].string,
  closeOnSelect: _propTypes["default"].bool,
  weekLabels: _propTypes["default"].arrayOf(_propTypes["default"].string),
  monthsLabels: _propTypes["default"].arrayOf(_propTypes["default"].string),
  firstDayOfWeek: _propTypes["default"].oneOf([0, 1]),
  // eslint-disable-next-line
  date: _propTypes["default"].oneOfType([_propTypes["default"].string, _propTypes["default"].instanceOf(_moment["default"])]),
  minDate: _propTypes["default"].oneOfType([_propTypes["default"].string, _propTypes["default"].instanceOf(_moment["default"])]),
  onChange: _propTypes["default"].func
};
DatePicker.defaultProps = {
  label: '',
  closeOnSelect: false,
  date: null,
  firstDayOfWeek: undefined,
  weekLabels: undefined,
  monthsLabels: undefined,
  minDate: null,
  onChange: function onChange() {}
};
var _default = DatePicker;
exports["default"] = _default;