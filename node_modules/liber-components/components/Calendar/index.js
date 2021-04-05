"use strict";

require("core-js/modules/es6.object.define-property");

require("core-js/modules/web.dom.iterable");

require("core-js/modules/es6.array.iterator");

require("core-js/modules/es6.object.to-string");

require("core-js/modules/es6.string.iterator");

require("core-js/modules/es6.weak-map");

Object.defineProperty(exports, "__esModule", {
  value: true
});
Object.defineProperty(exports, "Unit", {
  enumerable: true,
  get: function get() {
    return _MonthCalendar.Unit;
  }
});
Object.defineProperty(exports, "default", {
  enumerable: true,
  get: function get() {
    return _Calendar["default"];
  }
});
Object.defineProperty(exports, "MonthlyCalendar", {
  enumerable: true,
  get: function get() {
    return _Calendar.MonthlyCalendar;
  }
});
Object.defineProperty(exports, "WeeklyCalendar", {
  enumerable: true,
  get: function get() {
    return _Calendar.WeeklyCalendar;
  }
});
Object.defineProperty(exports, "CalendarFilter", {
  enumerable: true,
  get: function get() {
    return _Calendar.CalendarFilter;
  }
});

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _MonthCalendar = require("./v2/MonthCalendar");

var _Calendar = _interopRequireWildcard(require("./Calendar"));

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function _getRequireWildcardCache() { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; if (obj != null) { var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }