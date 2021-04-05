"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.periodPicker = exports.monthPicker = exports["default"] = void 0;

require("core-js/modules/es6.object.define-property");

var _react = _interopRequireDefault(require("react"));

var _addonActions = require("@storybook/addon-actions");

var _MonthPicker = _interopRequireDefault(require("./MonthPicker"));

var _PeriodPicker = _interopRequireDefault(require("./PeriodPicker"));

var _DropDown = require("../DropDown");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var _default = {
  title: 'Components 1.0|Picker',
  parameters: _defineProperty({
    jest: ['MonthPicker']
  }, "jest", ['PeriodStyles'])
};
exports["default"] = _default;

var monthPicker = function monthPicker() {
  return _react["default"].createElement(_MonthPicker["default"], {
    numberOfyears: 1
  });
};

exports.monthPicker = monthPicker;
monthPicker.story = {
  name: 'month picker'
};

var periodPicker = function periodPicker() {
  return _react["default"].createElement(_PeriodPicker["default"], {
    value: "last-30",
    onSelect: (0, _addonActions.action)('select')
  }, _react["default"].createElement(_DropDown.DropDownOption, {
    value: "last-5"
  }, "\xDAltimos 05 dias"), _react["default"].createElement(_DropDown.DropDownOption, {
    value: "last-15"
  }, "\xDAltimos 15 dias"), _react["default"].createElement(_DropDown.DropDownOption, {
    value: "last-30"
  }, "\xDAltimos 30 dias"), _react["default"].createElement(_DropDown.DropDownOption, {
    value: "month-picker",
    hasAction: true
  }, "Selecionar M\xEAs"));
};

exports.periodPicker = periodPicker;
periodPicker.story = {
  name: 'period picker'
};