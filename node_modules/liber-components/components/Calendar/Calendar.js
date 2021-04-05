"use strict";

require("core-js/modules/es6.object.define-property");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = exports.CalendarFilter = exports.WeeklyCalendar = exports.MonthlyCalendar = void 0;

require("core-js/modules/es6.symbol");

require("core-js/modules/es6.array.index-of");

require("core-js/modules/web.dom.iterable");

require("core-js/modules/es6.array.iterator");

require("core-js/modules/es6.object.to-string");

require("core-js/modules/es6.object.keys");

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _VersionWrapper = require("../Util/VersionWrapper");

var _MonthCalendar = _interopRequireDefault(require("./v1/MonthCalendar"));

var _WeekCalendar = _interopRequireDefault(require("./v1/WeekCalendar"));

var _Filter = _interopRequireDefault(require("./v1/Filter"));

var _MonthCalendar2 = _interopRequireDefault(require("./v2/MonthCalendar"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

var MonthlyCalendar = (0, _VersionWrapper.wrapper)([_MonthCalendar["default"], _MonthCalendar2["default"]]);
exports.MonthlyCalendar = MonthlyCalendar;
var WeeklyCalendar = (0, _VersionWrapper.wrapper)([_WeekCalendar["default"]]);
exports.WeeklyCalendar = WeeklyCalendar;
var CalendarFilter = (0, _VersionWrapper.wrapper)([_Filter["default"]]);
exports.CalendarFilter = CalendarFilter;

var Calendar = function Calendar(_ref) {
  var view = _ref.view,
      props = _objectWithoutProperties(_ref, ["view"]);

  switch (view) {
    case 'month':
      return _react["default"].createElement(MonthlyCalendar, props);

    case 'week':
      return _react["default"].createElement(WeeklyCalendar, props);

    default:
      return 'Not Implemented Yet';
  }
};

Calendar.propTypes = {
  view: _propTypes["default"].string
};
Calendar.defaultProps = {
  view: 'month'
};
var _default = Calendar;
exports["default"] = _default;