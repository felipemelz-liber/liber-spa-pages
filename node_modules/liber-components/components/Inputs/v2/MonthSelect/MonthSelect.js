"use strict";

require("core-js/modules/es6.object.define-property");

require("core-js/modules/es6.string.iterator");

require("core-js/modules/es6.weak-map");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

require("core-js/modules/es6.regexp.to-string");

require("core-js/modules/es6.date.to-string");

require("core-js/modules/es7.symbol.async-iterator");

require("core-js/modules/es6.array.is-array");

require("core-js/modules/es6.symbol");

require("core-js/modules/es6.array.index-of");

require("core-js/modules/web.dom.iterable");

require("core-js/modules/es6.array.iterator");

require("core-js/modules/es6.object.to-string");

require("core-js/modules/es6.object.keys");

require("core-js/modules/es6.array.map");

var _react = _interopRequireWildcard(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _moment = _interopRequireDefault(require("moment"));

var _reactTransitionGroup = require("react-transition-group");

var _Assets = require("../../../Assets");

var _Util = require("../../../Util");

var _SelectField = require("../SelectField/SelectField.styles");

var _DropDown = require("../../../DropDown");

var _MonthSelect = require("./MonthSelect.styles");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function _getRequireWildcardCache() { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; if (obj != null) { var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance"); }

function _iterableToArrayLimit(arr, i) { if (!(Symbol.iterator in Object(arr) || Object.prototype.toString.call(arr) === "[object Arguments]")) { return; } var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

var DATE_FORMAT = 'DD/MM/YYYY';
var ANIMATION_TIMEOUT = 150;

var renderOption = function renderOption(value, onChange, setOpen, dateFormat) {
  return function (option) {
    var momentObject = option.momentObject,
        label = option.label;
    var isSelected = momentObject.isSame(value, 'year') && momentObject.isSame(value, 'month');
    return _react["default"].createElement(_MonthSelect.Option, {
      key: "option-".concat(label),
      selected: isSelected,
      onClick: function onClick() {
        setOpen(false);
        onChange({
          start: momentObject.startOf('month').format(dateFormat),
          end: momentObject.endOf('month').format(dateFormat),
          moment: momentObject
        });
      }
    }, label);
  };
};

var MonthSelect = function MonthSelect(_ref) {
  var openLabel = _ref.openLabel,
      errorMessage = _ref.errorMessage,
      onChange = _ref.onChange,
      disabled = _ref.disabled,
      value = _ref.value,
      label = _ref.label,
      dateFormat = _ref.dateFormat,
      props = _objectWithoutProperties(_ref, ["openLabel", "errorMessage", "onChange", "disabled", "value", "label", "dateFormat"]);

  var referenceValue = value || (0, _moment["default"])();

  var _useState = (0, _react.useState)(false),
      _useState2 = _slicedToArray(_useState, 2),
      open = _useState2[0],
      setOpen = _useState2[1];

  var _useState3 = (0, _react.useState)(referenceValue.year()),
      _useState4 = _slicedToArray(_useState3, 2),
      year = _useState4[0],
      setYear = _useState4[1];

  var _useState5 = (0, _react.useState)([]),
      _useState6 = _slicedToArray(_useState5, 2),
      options = _useState6[0],
      setOptions = _useState6[1];

  var _useState7 = (0, _react.useState)(false),
      _useState8 = _slicedToArray(_useState7, 2),
      animate = _useState8[0],
      setAnimate = _useState8[1];

  _react["default"].useEffect(function () {
    _moment["default"].locale('pt-br');

    var newOptions = _moment["default"].months().map(function (month, index) {
      return {
        momentObject: (0, _moment["default"])().year(year).month(index),
        label: month
      };
    });

    setOptions(newOptions);
  }, [year]);

  var doAnimation = (0, _react.useCallback)(function (selectedYear) {
    setAnimate(true);
    setTimeout(function () {
      setAnimate(false);
      setYear(selectedYear);
    }, ANIMATION_TIMEOUT);
  }, []);

  var changeYear = function changeYear(direction) {
    var method = direction === 'left' ? 'subtract' : 'add';
    var newYear = (0, _moment["default"])().year(year)[method](1, 'year').year();
    doAnimation(newYear);
  };

  return _react["default"].createElement(_react["default"].Fragment, null, _react["default"].createElement(_Assets.PsGlobalStyle, null), _react["default"].createElement(_Util.ClickOutside, {
    onOutsideClick: function onOutsideClick() {
      return setOpen(false);
    }
  }, _react["default"].createElement(_SelectField.Container, props, Boolean(label) && _react["default"].createElement(_SelectField.Label, {
    focused: openLabel || open || Boolean(value),
    error: Boolean(errorMessage),
    disabled: disabled,
    open: open
  }, label), Boolean(errorMessage) && _react["default"].createElement(_SelectField.Error, {
    visible: Boolean(errorMessage)
  }, errorMessage), _react["default"].createElement(_DropDown.SimpleDropDown, {
    open: open && !disabled,
    position: "bottom-left",
    customButton: _react["default"].createElement(_MonthSelect.Shell, {
      error: Boolean(errorMessage),
      disabled: disabled,
      tabIndex: "0",
      open: open,
      onClick: function onClick() {
        return setOpen(true);
      },
      hasValue: Boolean(value)
    }, value ? "".concat(value.format('MMMM'), " de ").concat(value.format('YYYY')) : null, _react["default"].createElement(_MonthSelect.CalendarIcon, {
      open: open,
      error: Boolean(errorMessage)
    }))
  }, _react["default"].createElement(_MonthSelect.DropdownContent, null, _react["default"].createElement(_MonthSelect.YearSelection, null, _react["default"].createElement(_MonthSelect.IconButton, {
    onClick: function onClick() {
      changeYear('left');
    }
  }, _react["default"].createElement(_MonthSelect.Arrow, null)), _react["default"].createElement(_MonthSelect.TextContainer, null, _react["default"].createElement(_reactTransitionGroup.Transition, {
    "in": animate,
    timeout: ANIMATION_TIMEOUT
  }, function (state) {
    return _react["default"].createElement(_MonthSelect.YearText, {
      timeout: ANIMATION_TIMEOUT,
      transitionState: state
    }, year);
  })), _react["default"].createElement(_MonthSelect.IconButton, {
    onClick: function onClick() {
      changeYear('right');
    }
  }, _react["default"].createElement(_MonthSelect.Arrow, {
    direction: "right"
  }))), _react["default"].createElement(_MonthSelect.OptionsContainer, null, options.map(renderOption(value, onChange, setOpen, dateFormat))))))));
};

MonthSelect.propTypes = {
  disabled: _propTypes["default"].bool,
  errorMessage: _propTypes["default"].string,
  label: _propTypes["default"].string,
  openLabel: _propTypes["default"].bool,
  value: _propTypes["default"].instanceOf(_moment["default"]),
  onChange: _propTypes["default"].func,
  dateFormat: _propTypes["default"].string
};
MonthSelect.defaultProps = {
  label: '',
  disabled: false,
  errorMessage: null,
  openLabel: false,
  value: null,
  onChange: function onChange() {},
  dateFormat: DATE_FORMAT
};
var _default = MonthSelect;
exports["default"] = _default;