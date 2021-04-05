"use strict";

require("core-js/modules/es6.object.define-property");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.filtered = exports.coins = exports.coin = exports.calendarArrow = exports.calendarClock = exports.wallet = exports.money = exports.bill = exports.magnifyChartIcon = exports.fileXml = exports.filePlus = exports.emptyWon = exports.emptyScheduled = exports.emptyOpen = exports.analysis = exports["default"] = void 0;

var _react = _interopRequireDefault(require("react"));

var _Liber = require("./Liber");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var _default = {
  title: 'UI|Icons/Liber',
  parameters: {
    jest: ['LiberIcons']
  }
};
exports["default"] = _default;

var analysis = function analysis() {
  return _react["default"].createElement(_Liber.Analysis, null);
};

exports.analysis = analysis;

var emptyOpen = function emptyOpen() {
  return _react["default"].createElement(_Liber.EmptyOpen, null);
};

exports.emptyOpen = emptyOpen;

var emptyScheduled = function emptyScheduled() {
  return _react["default"].createElement(_Liber.EmptyScheduled, null);
};

exports.emptyScheduled = emptyScheduled;

var emptyWon = function emptyWon() {
  return _react["default"].createElement(_Liber.EmptyWon, null);
};

exports.emptyWon = emptyWon;

var filePlus = function filePlus() {
  return _react["default"].createElement(_Liber.FilePlus, null);
};

exports.filePlus = filePlus;

var fileXml = function fileXml() {
  return _react["default"].createElement(_Liber.FileXml, null);
};

exports.fileXml = fileXml;

var magnifyChartIcon = function magnifyChartIcon() {
  return _react["default"].createElement(_Liber.MagnifyChartIcon, null);
};

exports.magnifyChartIcon = magnifyChartIcon;

var bill = function bill() {
  return _react["default"].createElement(_Liber.Bill, null);
};

exports.bill = bill;

var money = function money() {
  return _react["default"].createElement(_Liber.Money, null);
};

exports.money = money;

var wallet = function wallet() {
  return _react["default"].createElement(_Liber.Wallet, null);
};

exports.wallet = wallet;

var calendarClock = function calendarClock() {
  return _react["default"].createElement(_Liber.CalendarClock, null);
};

exports.calendarClock = calendarClock;

var calendarArrow = function calendarArrow() {
  return _react["default"].createElement(_Liber.CalendarArrow, null);
};

exports.calendarArrow = calendarArrow;

var coin = function coin() {
  return _react["default"].createElement(_Liber.Coin, null);
};

exports.coin = coin;

var coins = function coins() {
  return _react["default"].createElement(_Liber.Coins, null);
};

exports.coins = coins;

var filtered = function filtered() {
  return _react["default"].createElement(_Liber.Filtered, null);
};

exports.filtered = filtered;