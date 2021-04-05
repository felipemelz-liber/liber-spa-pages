"use strict";

require("core-js/modules/es6.object.define-property");

Object.defineProperty(exports, "__esModule", {
  value: true
});
Object.defineProperty(exports, "NumberField", {
  enumerable: true,
  get: function get() {
    return _InputField.NumberField;
  }
});
Object.defineProperty(exports, "Checkbox", {
  enumerable: true,
  get: function get() {
    return _Checkbox["default"];
  }
});
Object.defineProperty(exports, "LabeledContainer", {
  enumerable: true,
  get: function get() {
    return _LabeledContainer["default"];
  }
});
Object.defineProperty(exports, "RadioButton", {
  enumerable: true,
  get: function get() {
    return _RadioButton["default"];
  }
});
Object.defineProperty(exports, "RangeField", {
  enumerable: true,
  get: function get() {
    return _RangeField["default"];
  }
});
Object.defineProperty(exports, "SelectMultiple", {
  enumerable: true,
  get: function get() {
    return _SelectMultiple["default"];
  }
});
Object.defineProperty(exports, "SimpleSelect", {
  enumerable: true,
  get: function get() {
    return _SimpleSelect["default"];
  }
});
Object.defineProperty(exports, "DatePicker", {
  enumerable: true,
  get: function get() {
    return _DatePicker["default"];
  }
});
Object.defineProperty(exports, "DateRangePicker", {
  enumerable: true,
  get: function get() {
    return _DateRangePicker["default"];
  }
});
Object.defineProperty(exports, "TimePicker", {
  enumerable: true,
  get: function get() {
    return _TimePicker["default"];
  }
});
Object.defineProperty(exports, "DateTimePicker", {
  enumerable: true,
  get: function get() {
    return _DateTimePicker["default"];
  }
});
Object.defineProperty(exports, "DateTimeRangePicker", {
  enumerable: true,
  get: function get() {
    return _DateTimeRangePicker["default"];
  }
});
Object.defineProperty(exports, "TextArea", {
  enumerable: true,
  get: function get() {
    return _TextArea["default"];
  }
});
Object.defineProperty(exports, "MonthSelect", {
  enumerable: true,
  get: function get() {
    return _MonthSelect["default"];
  }
});
exports.TextField = exports.SelectField = void 0;

var _VersionWrapper = require("../Util/VersionWrapper");

var _SelectField = _interopRequireDefault(require("./v1/SelectField"));

var _TextField = _interopRequireDefault(require("./v1/TextField"));

var _InputField = require("./v2/InputField");

var _SelectField2 = _interopRequireDefault(require("./v2/SelectField"));

var _Checkbox = _interopRequireDefault(require("./v1/Checkbox"));

var _LabeledContainer = _interopRequireDefault(require("./v1/LabeledContainer"));

var _RadioButton = _interopRequireDefault(require("./v1/RadioButton"));

var _RangeField = _interopRequireDefault(require("./v1/RangeField"));

var _SelectMultiple = _interopRequireDefault(require("./v1/SelectMultiple"));

var _SimpleSelect = _interopRequireDefault(require("./v2/SimpleSelect"));

var _DatePicker = _interopRequireDefault(require("./v2/DatePicker"));

var _DateRangePicker = _interopRequireDefault(require("./v2/DateRangePicker"));

var _TimePicker = _interopRequireDefault(require("./v2/TimePicker"));

var _DateTimePicker = _interopRequireDefault(require("./v2/DateTimePicker"));

var _DateTimeRangePicker = _interopRequireDefault(require("./v2/DateTimeRangePicker"));

var _TextArea = _interopRequireDefault(require("./v2/TextArea"));

var _MonthSelect = _interopRequireDefault(require("./v2/MonthSelect/MonthSelect"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

// import V1Checkbox from './v1/Checkbox';
// import V1LabeledContainer from './v1/LabeledContainer';
// import V1RadioButton from './v1/RadioButton';
// import V1RangeField from './v1/RangeField';
// import V1SelectMultiple from './v1/SelectMultiple';
// import V2DatePicker from './v2/DatePicker';
// import V2DateRangePicker from './v2/DateRangePicker';
// import V2TimePicker from './v2/TimePicker';
// export const Checkbox = wrapper([V1Checkbox]);
// export const LabeledContainer = wrapper([V1LabeledContainer]);
var SelectField = (0, _VersionWrapper.wrapper)([_SelectField["default"], _SelectField2["default"]]);
exports.SelectField = SelectField;
var TextField = (0, _VersionWrapper.wrapper)([_TextField["default"], _InputField.TextField]); // export const RadioButton = wrapper([V1RadioButton]);
// export const RangeField = wrapper([V1RangeField]);
// export const SelectMultiple = wrapper([V1SelectMultiple]);
// export const SimpleSelect = wrapper([V2SimpleSelect]);
// export const DatePicker = wrapper([V2DatePicker]);
// export const DateRangePicker = wrapper([V2DateRangePicker]);
// export const TimePicker = wrapper([V2TimePicker]);

exports.TextField = TextField;