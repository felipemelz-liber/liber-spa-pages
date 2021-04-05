"use strict";

require("core-js/modules/web.dom.iterable");

require("core-js/modules/es6.array.iterator");

require("core-js/modules/es6.object.to-string");

require("core-js/modules/es6.weak-map");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

require("core-js/modules/es7.symbol.async-iterator");

require("core-js/modules/es6.symbol");

require("core-js/modules/es6.object.define-property");

require("core-js/modules/es6.object.create");

require("core-js/modules/es6.object.set-prototype-of");

require("core-js/modules/es6.string.iterator");

require("core-js/modules/es6.array.from");

require("core-js/modules/es6.array.map");

var _react = _interopRequireWildcard(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _moment = _interopRequireDefault(require("moment"));

var _momentRange = require("moment-range");

var _styles = require("./styles");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function _getRequireWildcardCache() { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; if (obj != null) { var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

var moment = (0, _momentRange.extendMoment)(_moment["default"]);

var MonthPicker =
/*#__PURE__*/
function (_Component) {
  _inherits(MonthPicker, _Component);

  function MonthPicker() {
    var _getPrototypeOf2;

    var _temp, _this;

    _classCallCheck(this, MonthPicker);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _possibleConstructorReturn(_this, (_temp = _this = _possibleConstructorReturn(this, (_getPrototypeOf2 = _getPrototypeOf(MonthPicker)).call.apply(_getPrototypeOf2, [this].concat(args))), _this.state = {
      year: null,
      month: null
    }, _this.isDisabled = function (year, month) {
      var startDate = _this.props.startDate;
      var start = moment(startDate);
      var today = moment().startOf('day');

      if (today.year() === year && today.month() < month || start.year() === year && start.month() > month) {
        return true;
      }

      return false;
    }, _this.handleMonthClick = function (year, month) {
      var _this$props = _this.props,
          onSelect = _this$props.onSelect,
          months = _this$props.months;
      var date = {
        year: year,
        month: month
      };

      _this.setState(function (state) {
        if (month === state.month && year === state.year) {
          return {
            year: null,
            month: null
          };
        }

        return date;
      }, onSelect(date, months[month], moment(date)));
    }, _this.renderMonths = function (year) {
      var months = _this.props.months;
      var _this$state = _this.state,
          sYear = _this$state.year,
          sMonth = _this$state.month;
      return months.map(function (month, index) {
        var disabled = _this.isDisabled(year, index);

        return _react["default"].createElement(_styles.Cell, {
          key: "".concat(year, "_").concat(month)
        }, _react["default"].createElement(_styles.Month, {
          onClick: disabled ? null : function () {
            return _this.handleMonthClick(year, index);
          },
          selected: year === sYear && index === sMonth,
          disabled: disabled
        }, month));
      });
    }, _this.renderYears = function (number, startDate, endDate) {
      var end = moment(endDate).startOf('year');
      var start = startDate ? moment(startDate).startOf('year') : moment(end).subtract(number - 1, 'years');
      var yearRange = moment.range(start, end);
      var years = Array.from(yearRange.by('years'));
      return years.reverse().slice(0, number).map(function (year) {
        return _react["default"].createElement(_styles.YearContainer, {
          key: year.year()
        }, _react["default"].createElement(_styles.YearLabel, null, _react["default"].createElement(_styles.Cell, null, year.year()), _react["default"].createElement("span", null)), _react["default"].createElement(_styles.MonthContainer, null, _this.renderMonths(year.year())));
      });
    }, _temp));
  }

  _createClass(MonthPicker, [{
    key: "render",
    value: function render() {
      var _this$props2 = this.props,
          numberOfyears = _this$props2.numberOfyears,
          startDate = _this$props2.startDate,
          endDate = _this$props2.endDate;
      return _react["default"].createElement(_react.Fragment, null, this.renderYears(numberOfyears, startDate, endDate || moment().startOf('day').format('YYYY-MM-DD')));
    }
  }], [{
    key: "getDerivatedStateFromProps",
    value: function getDerivatedStateFromProps(props) {
      return {
        year: props.year,
        month: props.month
      };
    }
  }]);

  return MonthPicker;
}(_react.Component);

MonthPicker.propTypes = {
  startDate: _propTypes["default"].string,
  endDate: _propTypes["default"].string,
  numberOfyears: _propTypes["default"].number,
  months: _propTypes["default"].arrayOf(_propTypes["default"].string),
  onSelect: _propTypes["default"].func,
  month: _propTypes["default"].number,
  year: _propTypes["default"].number
};
MonthPicker.defaultProps = {
  startDate: null,
  endDate: null,
  numberOfyears: 2,
  months: ['Jan', 'Fev', 'Mar', 'Abr', 'Mai', 'Jun', 'Jul', 'Ago', 'Set', 'Out', 'Nov', 'Dez'],
  onSelect: function onSelect() {},
  month: null,
  year: null
};
var _default = MonthPicker;
exports["default"] = _default;