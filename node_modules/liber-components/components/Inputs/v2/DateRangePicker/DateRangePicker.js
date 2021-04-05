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

require("core-js/modules/es6.string.trim");

var _react = _interopRequireWildcard(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _moment = _interopRequireDefault(require("moment"));

var _DateRangePicker = require("./DateRangePicker.styles");

var _DropDown = require("../../../DropDown");

var _Util = require("../../../Util");

var _RangePickers = require("../RangePickers");

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

var DATE_FORMAT = 'DD/MM/YYYY';

var DateRangePicker =
/*#__PURE__*/
function (_Component) {
  _inherits(DateRangePicker, _Component);

  function DateRangePicker(props) {
    var _this;

    _classCallCheck(this, DateRangePicker);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(DateRangePicker).call(this, props));

    _this.focusInput = function () {
      _this.input.current.focus();
    };

    _this.handleInputFocus = function () {
      _this.setState({
        open: true
      });
    };

    _this.handleOutsideClick = function () {
      _this.setState({
        open: false
      });
    };

    _this.setCallbackValue = function () {
      var start = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : '';
      var end = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : '';

      if (start === '' && end === '') {
        return '';
      }

      if (end === '') {
        return start.trim();
      }

      return "".concat(start.trim(), " a ").concat(end.trim());
    };

    _this.getParsedValue = function () {
      var value = _this.props.value;

      if (value) {
        var _value$split = value.split('a'),
            _value$split2 = _slicedToArray(_value$split, 2),
            _value$split2$ = _value$split2[0],
            startDate = _value$split2$ === void 0 ? '' : _value$split2$,
            _value$split2$2 = _value$split2[1],
            endDate = _value$split2$2 === void 0 ? '' : _value$split2$2;

        startDate = startDate.trim();
        endDate = endDate.trim();
        return {
          startDate: startDate,
          endDate: endDate
        };
      }

      return {};
    };

    _this.timeout = function (delay) {
      _this.delay = setTimeout(function () {
        _this.setState({
          open: false
        });
      }, delay);
    };

    _this.handleDateSelection = function (mStartDate, mEndDate) {
      var _this$props = _this.props,
          onChange = _this$props.onChange,
          closeDelay = _this$props.closeDelay,
          closeOnSelect = _this$props.closeOnSelect;
      var startDate = mStartDate ? mStartDate.format('DD/MM/YYYY') : '';
      var endDate = mEndDate ? mEndDate.format('DD/MM/YYYY') : '';

      if (onChange) {
        onChange(_this.setCallbackValue(startDate, endDate));
      } else {
        var displayDate = mStartDate ? (0, _moment["default"])(mStartDate).startOf('month') : undefined;

        _this.setState({
          startDate: startDate,
          endDate: endDate,
          displayDate: displayDate
        });
      }

      if ((0, _moment["default"])(mEndDate).isValid() && closeOnSelect) {
        _this.timeout(closeDelay);
      }
    };

    _this.handleStartChange = function (endDate) {
      return function (event) {
        var onChange = _this.props.onChange;

        if (onChange) {
          onChange(_this.setCallbackValue(event.target.value, endDate));
        } else {
          var displayDate = (0, _moment["default"])(event.target.value, DATE_FORMAT).startOf('month');

          _this.setState({
            startDate: event.target.value,
            displayDate: displayDate.isValid() ? displayDate : undefined
          });
        }
      };
    };

    _this.handleEndChange = function (startDate) {
      return function (event) {
        var _this$props2 = _this.props,
            onChange = _this$props2.onChange,
            closeDelay = _this$props2.closeDelay,
            closeOnSelect = _this$props2.closeOnSelect;
        var value = event.target.value;

        if (onChange) {
          onChange(_this.setCallbackValue(startDate, value));
        } else {
          _this.setState({
            endDate: value
          });
        }

        if (value.length >= 10 && (0, _moment["default"])(value, DATE_FORMAT).isValid() && closeOnSelect) {
          _this.timeout(closeDelay);
        }
      };
    };

    _this.handleOnMouseEnter = function () {
      var _this$state = _this.state,
          stateStartDate = _this$state.startDate,
          stateEndDate = _this$state.endDate;

      var _this$getParsedValue = _this.getParsedValue(),
          _this$getParsedValue$ = _this$getParsedValue.startDate,
          startDate = _this$getParsedValue$ === void 0 ? stateStartDate : _this$getParsedValue$,
          _this$getParsedValue$2 = _this$getParsedValue.endDate,
          endDate = _this$getParsedValue$2 === void 0 ? stateEndDate : _this$getParsedValue$2;

      if (startDate.trim() !== '' || endDate.trim() !== '') {
        _this.setState({
          clear: true
        });
      }
    };

    _this.handleOnMouseLeave = function () {
      _this.setState({
        clear: false
      });
    };

    _this.handleNavigate = function (displayDate) {
      _this.setState({
        displayDate: displayDate
      });
    };

    _this.clearInput = function () {
      var onChange = _this.props.onChange;

      if (onChange) {
        onChange('');

        _this.setState({
          clear: false
        });
      } else {
        _this.setState({
          startDate: '',
          endDate: '',
          clear: false
        });
      }
    };

    _this.renderShell = function (startDate, endDate, open, error, disabled) {
      return _react["default"].createElement(_RangePickers.InputShell, {
        onClick: _this.focusInput,
        onMouseEnter: _this.handleOnMouseEnter,
        handleOnMouseLeave: _this.handleOnMouseLeave,
        open: open,
        error: error,
        disabled: disabled
      }, _react["default"].createElement(_RangePickers.Input, {
        ref: _this.input,
        onFocus: _this.handleInputFocus,
        fields: [{
          value: startDate,
          mask: '99/99/9999',
          separator: 'a',
          onChange: !disabled ? _this.handleStartChange(endDate) : undefined,
          id: 'start_day_field',
          size: '87px',
          disabled: disabled
        }, {
          value: endDate,
          mask: '99/99/9999',
          onChange: !disabled ? _this.handleEndChange(startDate) : undefined,
          id: 'end_day_field',
          size: '87px',
          disabled: disabled
        }]
      }));
    };

    _this.state = {
      open: false,
      clear: false,
      startDate: '',
      endDate: '',
      displayDate: props.defaultDisplayDate || (0, _moment["default"])()
    };
    _this.input = _react["default"].createRef();
    return _this;
  }

  _createClass(DateRangePicker, [{
    key: "render",
    value: function render() {
      var _this$state2 = this.state,
          open = _this$state2.open,
          clear = _this$state2.clear,
          stateStartDate = _this$state2.startDate,
          stateEndDate = _this$state2.endDate,
          stateDisplayDate = _this$state2.displayDate;
      var _this$props3 = this.props,
          label = _this$props3.label,
          openLabel = _this$props3.openLabel,
          disabled = _this$props3.disabled,
          errorMessage = _this$props3.errorMessage,
          placeholder = _this$props3.placeholder,
          hintText = _this$props3.hintText,
          _this$props3$displayD = _this$props3.displayDate,
          displayDate = _this$props3$displayD === void 0 ? stateDisplayDate : _this$props3$displayD,
          _this$props3$onNaviga = _this$props3.onNavigate,
          onNavigate = _this$props3$onNaviga === void 0 ? this.handleNavigate : _this$props3$onNaviga,
          position = _this$props3.position,
          autoPosition = _this$props3.autoPosition;

      var _this$getParsedValue2 = this.getParsedValue(),
          _this$getParsedValue3 = _this$getParsedValue2.startDate,
          startDate = _this$getParsedValue3 === void 0 ? stateStartDate : _this$getParsedValue3,
          _this$getParsedValue4 = _this$getParsedValue2.endDate,
          endDate = _this$getParsedValue4 === void 0 ? stateEndDate : _this$getParsedValue4;

      return _react["default"].createElement(_Util.ClickOutside, {
        onOutsideClick: this.handleOutsideClick
      }, _react["default"].createElement(_DateRangePicker.Container, null, label !== '' && _react["default"].createElement(_RangePickers.Label, {
        open: (openLabel || open || startDate !== '' || endDate !== '') && !disabled,
        error: errorMessage !== '',
        disabled: disabled
      }, label), _react["default"].createElement(_RangePickers.Hint, {
        visible: (open || !label) && !(startDate !== '' || endDate !== '')
      }, placeholder || hintText), errorMessage !== '' && _react["default"].createElement(_RangePickers.Error, {
        visible: errorMessage !== ''
      }, errorMessage), _react["default"].createElement(_DropDown.SimpleDropDown, {
        open: open && !disabled,
        position: position,
        autoPosition: autoPosition,
        customButton: this.renderShell(startDate, endDate, open, errorMessage !== '', disabled),
        hasOutsideLabel: label !== ''
      }, _react["default"].createElement(_RangePickers.Range, {
        showTime: false,
        startDate: startDate.length >= 10 ? (0, _moment["default"])(startDate, DATE_FORMAT) : null,
        endDate: endDate.length >= 10 ? (0, _moment["default"])(endDate, DATE_FORMAT) : null,
        onChangeDates: !disabled ? this.handleDateSelection : undefined,
        displayDate: displayDate,
        onNavigate: onNavigate
      })), _react["default"].createElement(_DateRangePicker.Icon, {
        hide: clear,
        error: errorMessage !== ''
      }), _react["default"].createElement(_DateRangePicker.Close, {
        show: clear,
        onMouseEnter: this.handleOnMouseEnter,
        onClick: this.clearInput
      })));
    }
  }]);

  return DateRangePicker;
}(_react.PureComponent);

DateRangePicker.propTypes = {
  label: _propTypes["default"].string,
  openLabel: _propTypes["default"].bool,
  value: _propTypes["default"].string,
  disabled: _propTypes["default"].bool,
  errorMessage: _propTypes["default"].string,
  placeholder: _propTypes["default"].string,
  hintText: _propTypes["default"].string,
  displayDate: _propTypes["default"].instanceOf(_moment["default"]),
  defaultDisplayDate: _propTypes["default"].instanceOf(_moment["default"]),
  onChange: _propTypes["default"].func,
  onNavigate: _propTypes["default"].func,
  closeOnSelect: _propTypes["default"].bool,
  closeDelay: _propTypes["default"].number,
  position: _propTypes["default"].string,
  autoPosition: _propTypes["default"].bool
};
DateRangePicker.defaultProps = {
  label: '',
  openLabel: false,
  value: null,
  disabled: false,
  errorMessage: '',
  placeholder: '',
  hintText: '',
  displayDate: undefined,
  defaultDisplayDate: undefined,
  onChange: undefined,
  onNavigate: undefined,
  closeOnSelect: true,
  closeDelay: 500,
  position: 'bottom-left',
  autoPosition: true
};
var _default = DateRangePicker;
exports["default"] = _default;