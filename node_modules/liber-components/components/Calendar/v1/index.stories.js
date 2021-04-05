"use strict";

require("core-js/modules/es6.object.define-property");

require("core-js/modules/es6.array.iterator");

require("core-js/modules/es6.string.iterator");

require("core-js/modules/es6.weak-map");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.monthCalendar = exports.weekCalendar = exports["default"] = void 0;

require("core-js/modules/es6.regexp.to-string");

require("core-js/modules/es6.date.to-string");

require("core-js/modules/es6.object.to-string");

require("core-js/modules/es7.symbol.async-iterator");

require("core-js/modules/es6.symbol");

require("core-js/modules/web.dom.iterable");

require("core-js/modules/es6.array.is-array");

var _react = _interopRequireWildcard(require("react"));

var _styledComponents = _interopRequireDefault(require("styled-components"));

var _moment = _interopRequireDefault(require("moment"));

var _Calendar = _interopRequireDefault(require("../Calendar"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function _getRequireWildcardCache() { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; if (obj != null) { var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance"); }

function _iterableToArrayLimit(arr, i) { if (!(Symbol.iterator in Object(arr) || Object.prototype.toString.call(arr) === "[object Arguments]")) { return; } var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

var Container = _styledComponents["default"].div.withConfig({
  displayName: "indexstories__Container",
  componentId: "sc-19nt1i5-0"
})(["width:500px;height:500px;"]);

var _default = {
  title: 'Components 1.0|Calendar',
  parameters: {
    jest: ['Calendar']
  }
};
exports["default"] = _default;

var weekCalendar = function weekCalendar() {
  var _useState = (0, _react.useState)(null),
      _useState2 = _slicedToArray(_useState, 2),
      date = _useState2[0],
      setDate = _useState2[1];

  return _react["default"].createElement(Container, null, _react["default"].createElement("button", {
    type: "button",
    onClick: function onClick() {
      return setDate((0, _moment["default"])().add(1, 'week'));
    }
  }, "Add week"), _react["default"].createElement(_Calendar["default"], {
    view: "week",
    date: date
  }));
};

exports.weekCalendar = weekCalendar;

var monthCalendar = function monthCalendar() {
  var _useState3 = (0, _react.useState)(null),
      _useState4 = _slicedToArray(_useState3, 2),
      date = _useState4[0],
      setDate = _useState4[1];

  return _react["default"].createElement(Container, null, _react["default"].createElement("button", {
    type: "button",
    onClick: function onClick() {
      return setDate((0, _moment["default"])().add(1, 'month'));
    }
  }, "Add month"), _react["default"].createElement(_Calendar["default"], {
    view: "month",
    date: date
  }));
};

exports.monthCalendar = monthCalendar;
monthCalendar.story = {
  name: 'month calendar'
};