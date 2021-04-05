"use strict";

require("core-js/modules/web.dom.iterable");

require("core-js/modules/es6.array.iterator");

require("core-js/modules/es6.string.iterator");

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

require("core-js/modules/es6.regexp.to-string");

require("core-js/modules/es6.date.to-string");

require("core-js/modules/es6.object.to-string");

var _react = _interopRequireWildcard(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _Util = require("../../../Util");

var _RangeField = require("./RangeField.styles");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function _getRequireWildcardCache() { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; if (obj != null) { var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

var parseInRange = function parseInRange(input, min, max, empty) {
  var parsedInt = parseInt(input, 10);
  var parsed = {};

  if (input === '') {
    parsed.value = empty;
    parsed.input = input;
  } else if (parsedInt > max) {
    parsed.value = max;
    parsed.input = max.toString();
  } else if (parsedInt < min) {
    parsed.value = min;
    parsed.input = min.toString();
  } else {
    parsed.value = parsedInt;
    parsed.input = input;
  }

  return parsed;
};

var normalizeRange = function normalizeRange(inputMin, min, inputMax, max) {
  var normalized = {};

  if (min <= max) {
    normalized.min = min;
    normalized.inputMin = inputMin;
    normalized.max = max;
    normalized.inputMax = inputMax;
  } else {
    normalized.min = max;
    normalized.inputMin = inputMax;
    normalized.max = min;
    normalized.inputMax = inputMin;
  }

  return normalized;
};

var getNonEmptyValue = function getNonEmptyValue(input, value, def) {
  if (input === '') return {
    input: def.toString(),
    value: def
  };
  return {
    input: input,
    value: value
  };
};

var RangeField =
/*#__PURE__*/
function (_PureComponent) {
  _inherits(RangeField, _PureComponent);

  function RangeField(props) {
    var _this;

    _classCallCheck(this, RangeField);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(RangeField).call(this, props));

    _initialiseProps.call(_assertThisInitialized(_this));

    var _props$from = props.from,
        propsFrom = _props$from === void 0 ? '' : _props$from,
        _props$to = props.to,
        propsTo = _props$to === void 0 ? '' : _props$to,
        min = props.min,
        max = props.max;

    var _parseInRange = parseInRange(propsFrom, min, max, min),
        from = _parseInRange.value,
        inputFrom = _parseInRange.input;

    var _parseInRange2 = parseInRange(propsTo, min, max, max),
        to = _parseInRange2.value,
        inputTo = _parseInRange2.input;

    _this.state = {
      from: from,
      to: to,
      inputFrom: inputFrom,
      inputTo: inputTo,
      selection: 'not-selecting',
      // eslint-disable-line
      open: false,
      unselected: inputFrom === '' && inputTo === ''
    };
    return _this;
  }

  _createClass(RangeField, [{
    key: "render",
    value: function render() {
      var _this$props = this.props,
          min = _this$props.min,
          max = _this$props.max,
          position = _this$props.position,
          label = _this$props.label;
      var _this$state = this.state,
          from = _this$state.from,
          inputFrom = _this$state.inputFrom,
          to = _this$state.to,
          inputTo = _this$state.inputTo,
          open = _this$state.open,
          unselected = _this$state.unselected;
      var layout;
      if (open) layout = 'open';else if (!open && !unselected) layout = 'selected';else layout = 'unselected';
      return _react["default"].createElement(_RangeField.FieldContainer, null, _react["default"].createElement(_RangeField.Label, {
        layout: layout
      }, label), _react["default"].createElement(_Util.ClickOutside, {
        onOutsideClick: this.handleClose
      }, _react["default"].createElement(_react.Fragment, null, _react["default"].createElement(_RangeField.FieldBox, {
        onClick: this.handleOpenToogle,
        layout: layout
      }, unselected ? null : "De ".concat(from, " a ").concat(to)), _react["default"].createElement(_RangeField.RangeContainer, {
        open: open,
        position: position
      }, _react["default"].createElement(_RangeField.CardContent, null, _react["default"].createElement(_RangeField.ValueContainer, null, _react["default"].createElement(_RangeField.ValueLabel, null, "de:", _react["default"].createElement(_RangeField.ValueField, {
        id: "input_range_from",
        value: inputFrom,
        placeholder: min,
        unselected: unselected,
        onChange: this.handleFromInputChange,
        onFocus: this.handleFocus,
        onKeyDown: this.handleFromKeyDown
      })), _react["default"].createElement(_RangeField.ValueLabel, null, "a:", _react["default"].createElement(_RangeField.ValueField, {
        id: "input_range_to",
        value: inputTo,
        placeholder: max,
        unselected: unselected,
        onChange: this.handleToInputChange,
        onFocus: this.handleFocus,
        onKeyDown: this.handleToKeyDown
      }))), _react["default"].createElement(_RangeField.RangeInputContainer, null, _react["default"].createElement(_RangeField.DiffBar, {
        from: from < to ? this.getFromPos(from, min, max) : this.getToPos(to, min, max),
        to: to > from ? this.getToPos(to, min, max) : this.getFromPos(from, min, max)
      }, _react["default"].createElement(_RangeField.FromTooltip, {
        unselected: unselected
      }, from < to ? from : to), _react["default"].createElement(_RangeField.ToTooltip, {
        unselected: unselected
      }, to > from ? to : from)), _react["default"].createElement(_RangeField.RangeInputFrom, {
        value: from.length !== 0 ? from : min,
        min: min,
        max: max,
        onChange: this.handleFromRangeChange,
        onMouseUp: this.handleEndRange,
        onMouseDown: this.handleSelectionStart,
        onBlur: this.handleBlur
      }), _react["default"].createElement(_RangeField.RangeInputTo, {
        value: to.length !== 0 ? to : max,
        min: min,
        max: max,
        onChange: this.handleToRangeChange,
        onMouseUp: this.handleEndRange,
        onMouseDown: this.handleSelectionStart,
        onBlur: this.handleBlur
      })))))));
    }
  }], [{
    key: "getDerivedStateFromProps",
    value: function getDerivedStateFromProps(props, state) {
      var propsInputFrom = props.from,
          propsInputTo = props.to,
          min = props.min,
          max = props.max;

      if (propsInputFrom !== undefined && propsInputTo !== undefined && state.selection === 'not-selecting' && (props.from !== state.inputFrom || props.to !== state.inputTo)) {
        if (propsInputFrom === '' && propsInputTo === '') {
          return {
            from: min,
            to: max,
            inputFrom: '',
            inputTo: '',
            unselected: true // eslint-disable-line

          };
        }

        var _parseInRange3 = parseInRange(propsInputFrom, min, max, min),
            parsedFrom = _parseInRange3.value,
            parsedInputFrom = _parseInRange3.input;

        var _parseInRange4 = parseInRange(propsInputTo, min, max, max),
            parsedTo = _parseInRange4.value,
            parsedInputTo = _parseInRange4.input;

        var _normalizeRange = normalizeRange(parsedInputFrom, parsedFrom, parsedInputTo, parsedTo),
            from = _normalizeRange.min,
            inputFrom = _normalizeRange.inputMin,
            to = _normalizeRange.max,
            inputTo = _normalizeRange.inputMax;

        return {
          from: from,
          to: to,
          inputFrom: inputFrom,
          inputTo: inputTo,
          unselected: false
        };
      }

      return {};
    }
  }]);

  return RangeField;
}(_react.PureComponent);

var _initialiseProps = function _initialiseProps() {
  var _this2 = this;

  this.getFromPos = function (from, min, max) {
    if (from.length === 0) {
      return '0%';
    }

    return "".concat(100 * ((from - min) / (max - min)), "%");
  };

  this.getToPos = function (to, min, max) {
    if (to.length === 0) {
      return '100%';
    }

    return "".concat(100 * ((to - min) / (max - min)), "%");
  };

  this.handleFromInputChange = function (_ref) {
    var target = _ref.target;

    _this2.setState({
      inputFrom: target.value
    });
  };

  this.handleToInputChange = function (_ref2) {
    var target = _ref2.target;

    _this2.setState({
      inputTo: target.value
    });
  };

  this.handleFocus = function () {
    _this2.setState({
      selection: 'selecting'
    }); // eslint-disable-line

  };

  this.handleBlur = function () {
    _this2.setState({
      selection: 'not-selecting'
    }); // eslint-disable-line

  };

  this.handleFromKeyDown = function (_ref3) {
    var keyCode = _ref3.keyCode,
        target = _ref3.target;
    var _this2$props = _this2.props,
        min = _this2$props.min,
        max = _this2$props.max,
        onChange = _this2$props.onChange;

    if (keyCode === 13) {
      _this2.setState(function (state) {
        var currentInputFrom = state.inputFrom,
            currentInputTo = state.inputTo,
            currentTo = state.to;

        if (currentInputFrom.length !== 0) {
          var _parseInRange5 = parseInRange(currentInputFrom, min, max),
              parsedFrom = _parseInRange5.value,
              parsedInputFrom = _parseInRange5.input;

          var _getNonEmptyValue = getNonEmptyValue(currentInputTo, currentTo, max),
              parsedTo = _getNonEmptyValue.value,
              parsedInputTo = _getNonEmptyValue.input;

          var _normalizeRange2 = normalizeRange(parsedInputFrom, parsedFrom, parsedInputTo, parsedTo),
              from = _normalizeRange2.min,
              inputFrom = _normalizeRange2.inputMin,
              to = _normalizeRange2.max,
              inputTo = _normalizeRange2.inputMax;

          onChange(inputFrom, inputTo);
          return {
            from: from,
            inputFrom: inputFrom,
            to: to,
            inputTo: inputTo,
            unselected: false,
            selection: 'not-selecting'
          };
        }

        onChange('', '');
        return {
          inputFrom: '',
          inputTo: '',
          from: min,
          to: max,
          unselected: true,
          selection: 'not-selecting'
        };
      }, function () {
        target.blur();
      });
    }
  };

  this.handleToKeyDown = function (_ref4) {
    var keyCode = _ref4.keyCode,
        target = _ref4.target;
    var _this2$props2 = _this2.props,
        min = _this2$props2.min,
        max = _this2$props2.max,
        onChange = _this2$props2.onChange;

    if (keyCode === 13) {
      _this2.setState(function (state) {
        var currentInputFrom = state.inputFrom,
            currentFrom = state.from,
            currentInputTo = state.inputTo;

        if (currentInputTo.length !== 0) {
          var _parseInRange6 = parseInRange(currentInputTo, min, max),
              parsedTo = _parseInRange6.value,
              parsedInputTo = _parseInRange6.input;

          var _getNonEmptyValue2 = getNonEmptyValue(currentInputFrom, currentFrom, min),
              parsedFrom = _getNonEmptyValue2.value,
              parsedInputFrom = _getNonEmptyValue2.input;

          var _normalizeRange3 = normalizeRange(parsedInputFrom, parsedFrom, parsedInputTo, parsedTo),
              from = _normalizeRange3.min,
              inputFrom = _normalizeRange3.inputMin,
              to = _normalizeRange3.max,
              inputTo = _normalizeRange3.inputMax;

          onChange(inputFrom, inputTo);
          return {
            from: from,
            inputFrom: inputFrom,
            to: to,
            inputTo: inputTo,
            unselected: false,
            selection: 'not-selecting'
          };
        }

        onChange('', '');
        return {
          inputFrom: '',
          inputTo: '',
          from: min,
          to: max,
          unselected: true,
          selection: 'not-selecting'
        };
      }, function () {
        target.blur();
      });
    }
  };

  this.handleFromRangeChange = function (_ref5) {
    var target = _ref5.target;

    _this2.setState({
      from: parseInt(target.value, 10),
      selection: 'selecting' // eslint-disable-line

    });
  };

  this.handleToRangeChange = function (_ref6) {
    var target = _ref6.target;

    _this2.setState({
      to: parseInt(target.value, 10),
      selection: 'selecting' // eslint-disable-line

    });
  };

  this.handleEndRange = function (_ref7) {
    var target = _ref7.target;
    var onChange = _this2.props.onChange;

    _this2.setState(function (state) {
      var currentFrom = state.from,
          currentTo = state.to;

      var _normalizeRange4 = normalizeRange(currentFrom.toString(), currentFrom, currentTo.toString(), currentTo),
          from = _normalizeRange4.min,
          inputFrom = _normalizeRange4.inputMin,
          to = _normalizeRange4.max,
          inputTo = _normalizeRange4.inputMax;

      onChange(inputFrom, inputTo);
      return {
        from: from,
        to: to,
        inputFrom: inputFrom,
        inputTo: inputTo,
        selection: 'finishing-selection'
      };
    }, function () {
      target.blur();
    });
  };

  this.handleClose = function () {
    _this2.setState(function (state) {
      if (state.open && state.unselected) {
        return {
          open: false,
          inputFrom: '',
          inputTo: ''
        };
      }

      return {
        open: false
      };
    });
  };

  this.handleOpenToogle = function () {
    _this2.setState(function (state) {
      if (state.open && state.unselected) {
        return {
          open: !state.open,
          inputFrom: '',
          inputTo: ''
        };
      }

      return {
        open: !state.open
      };
    });
  };

  this.handleSelectionStart = function () {
    _this2.setState({
      unselected: false,
      selection: 'selecting' // eslint-disable-line

    });
  };
};

RangeField.propTypes = {
  from: _propTypes["default"].oneOfType([_propTypes["default"].number, _propTypes["default"].string]),
  to: _propTypes["default"].oneOfType([_propTypes["default"].number, _propTypes["default"].string]),
  min: _propTypes["default"].number,
  max: _propTypes["default"].number,
  label: _propTypes["default"].string,
  position: _propTypes["default"].string,
  onChange: _propTypes["default"].func
};
RangeField.defaultProps = {
  from: undefined,
  to: undefined,
  min: 10,
  max: 200,
  position: 'left',
  label: '',
  onChange: function onChange() {}
};
var _default = RangeField;
exports["default"] = _default;