"use strict";

require("core-js/modules/es6.object.define-property");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

require("core-js/modules/es6.object.assign");

require("core-js/modules/es6.array.index-of");

require("core-js/modules/es6.array.iterator");

require("core-js/modules/es6.object.keys");

require("core-js/modules/es6.regexp.to-string");

require("core-js/modules/es6.date.to-string");

require("core-js/modules/es6.object.to-string");

require("core-js/modules/es7.symbol.async-iterator");

require("core-js/modules/es6.symbol");

require("core-js/modules/web.dom.iterable");

require("core-js/modules/es6.array.is-array");

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _useResizeObserver3 = _interopRequireDefault(require("use-resize-observer"));

var _TimePicker = require("../TimePicker");

var _MonthCalendar = _interopRequireDefault(require("../../../Calendar/v2/MonthCalendar"));

var _Buttons = require("../../../Buttons");

var _Range = require("./Range.styles");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance"); }

function _iterableToArrayLimit(arr, i) { if (!(Symbol.iterator in Object(arr) || Object.prototype.toString.call(arr) === "[object Arguments]")) { return; } var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

var onClick = function onClick(show, callback) {
  return function () {
    if (show === 'date') {
      callback('time');
    }

    if (show === 'time') {
      callback('date');
    }
  };
};

var DateTimeSelection = _react["default"].forwardRef(function (props, forwardedRef) {
  var _React$useState = _react["default"].useState('date'),
      _React$useState2 = _slicedToArray(_React$useState, 2),
      stateShow = _React$useState2[0],
      setShow = _React$useState2[1];

  var ref = forwardedRef;
  var height;
  var width; // eslint-disable-line

  if (!ref) {
    var _useResizeObserver = (0, _useResizeObserver3["default"])();

    var _useResizeObserver2 = _slicedToArray(_useResizeObserver, 3);

    ref = _useResizeObserver2[0];
    width = _useResizeObserver2[1];
    height = _useResizeObserver2[2];
  }

  var dateProps = props.dateProps,
      timeProps = props.timeProps,
      _props$show = props.show,
      show = _props$show === void 0 ? stateShow : _props$show,
      labels = props.labels,
      _props$onChange = props.onChange,
      onChange = _props$onChange === void 0 ? setShow : _props$onChange,
      showTime = props.showTime,
      bodyProps = _objectWithoutProperties(props, ["dateProps", "timeProps", "show", "labels", "onChange", "showTime"]);

  return _react["default"].createElement(_Range.SelectionBody, bodyProps, _react["default"].createElement(_Range.SelectionSlider, {
    show: show
  }, _react["default"].createElement(_Range.SelectionDateContainer, null, _react["default"].createElement(_MonthCalendar["default"], _extends({}, dateProps, {
    innerRef: ref
  }))), _react["default"].createElement(_Range.SelectionTimeContainer, {
    style: height ? {
      '--clock-container-size': "".concat(height + 64, "px")
    } : null
  }, _react["default"].createElement(_TimePicker.Clock, timeProps))), showTime && _react["default"].createElement(_Range.SelectionFooter, null, _react["default"].createElement(_Buttons.Button, {
    onClick: onClick(show, onChange),
    version: 2
  }, labels[show])));
});

DateTimeSelection.displayName = 'DateTimeSelection';
DateTimeSelection.propTypes = {
  dateProps: _propTypes["default"].objectOf(_propTypes["default"].any),
  timeProps: _propTypes["default"].objectOf(_propTypes["default"].any),
  show: _propTypes["default"].string,
  labels: _propTypes["default"].shape({
    date: _propTypes["default"].string,
    time: _propTypes["default"].string
  }),
  onChange: _propTypes["default"].func,
  showTime: _propTypes["default"].bool
};
DateTimeSelection.defaultProps = {
  dateProps: {},
  timeProps: {},
  show: undefined,
  labels: {
    date: 'SELECIONAR HORÁRIO',
    time: 'SELECIONAR DATA'
  },
  onChange: undefined,
  showTime: true
};
var _default = DateTimeSelection;
exports["default"] = _default;