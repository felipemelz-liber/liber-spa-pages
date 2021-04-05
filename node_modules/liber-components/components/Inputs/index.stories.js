"use strict";

require("core-js/modules/es6.regexp.to-string");

require("core-js/modules/es6.date.to-string");

require("core-js/modules/es6.object.to-string");

require("core-js/modules/es7.symbol.async-iterator");

require("core-js/modules/es6.symbol");

require("core-js/modules/web.dom.iterable");

require("core-js/modules/es6.array.is-array");

var _react = _interopRequireDefault(require("react"));

var _react2 = require("@storybook/react");

var _addonActions = require("@storybook/addon-actions");

var _styledComponents = _interopRequireDefault(require("styled-components"));

var _Inputs = require("./Inputs");

var _RangePickers = require("./v2/RangePickers");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance"); }

function _iterableToArrayLimit(arr, i) { if (!(Symbol.iterator in Object(arr) || Object.prototype.toString.call(arr) === "[object Arguments]")) { return; } var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

var Center = _styledComponents["default"].div.withConfig({
  displayName: "indexstories__Center",
  componentId: "elmvlg-0"
})(["width:100%;height:100vh;display:flex;justify-content:center;align-items:center;background-color:#fafdff;padding:64px;box-sizing:border-box;"]);

var Size = _styledComponents["default"].div.withConfig({
  displayName: "indexstories__Size",
  componentId: "elmvlg-1"
})(["width:570px;"]);

var DateRangeFunction = function DateRangeFunction() {
  var _React$useState = _react["default"].useState(''),
      _React$useState2 = _slicedToArray(_React$useState, 2),
      value = _React$useState2[0],
      setValue = _React$useState2[1];

  return _react["default"].createElement(Size, null, _react["default"].createElement(_Inputs.DateRangePicker, {
    label: "Date Range",
    onChange: function onChange(v) {
      setValue(v);
    },
    value: value
  }));
};

(0, _react2.storiesOf)('Components 1.0|Input/TextField', module).addParameters({
  jest: ['TextField']
}).add('default', function () {
  return _react["default"].createElement(_Inputs.TextField, null);
}).add('disabled', function () {
  return _react["default"].createElement(_Inputs.TextField, {
    disabled: true
  });
}).add('with label', function () {
  return _react["default"].createElement(_Inputs.TextField, {
    label: "Name"
  });
}).add('with open label', function () {
  return _react["default"].createElement(_Inputs.TextField, {
    openLabel: true,
    label: "Name"
  });
}).add('with value', function () {
  return _react["default"].createElement(_Inputs.TextField, {
    label: "Name",
    value: "Jon Snow"
  });
}).add('with prefix', function () {
  return _react["default"].createElement(_Inputs.TextField, {
    prefix: "$",
    value: "1000,00"
  });
}).add('with error message', function () {
  return _react["default"].createElement(_Inputs.TextField, {
    errorMessage: "Campo obrigatório"
  });
}).add('with helper', function () {
  return _react["default"].createElement(_Inputs.TextField, {
    helper: "Insira um e-mail válido"
  });
}).add('with hint text', function () {
  return _react["default"].createElement(_Inputs.TextField, {
    hintText: "Insira o nome"
  });
});
(0, _react2.storiesOf)('Components 1.0|Input/Checkbox', module).addParameters({
  jest: ['Checkbox']
}).add('default', function () {
  return _react["default"].createElement(_Inputs.Checkbox, null);
}).add('checked', function () {
  return _react["default"].createElement(_Inputs.Checkbox, {
    checked: true
  });
});
(0, _react2.storiesOf)('Components 1.0|Input/RadioButton', module).addParameters({
  jest: ['RadioButton']
}).add('default', function () {
  return _react["default"].createElement(_Inputs.RadioButton, null, "Arya Stark");
}).add('checked', function () {
  return _react["default"].createElement(_Inputs.RadioButton, {
    checked: true
  }, "Jon Snow");
});
(0, _react2.storiesOf)('Components 1.0|Input/SelectField', module).addParameters({
  jest: ['SelectField']
}).add('default', function () {
  return _react["default"].createElement(_Inputs.SelectField, null, _react["default"].createElement("option", {
    value: "pf"
  }, "Pessoa F\xEDsica"), _react["default"].createElement("option", {
    value: "factoring"
  }, "Factoring"), _react["default"].createElement("option", {
    value: "fidc"
  }, "FIDC"), _react["default"].createElement("option", {
    value: "securitizadora"
  }, "Securitizadora"), _react["default"].createElement("option", {
    value: "banco"
  }, "Banco"));
}).add('searchable', function () {
  return _react["default"].createElement(_Inputs.SelectField, {
    searchable: true
  }, _react["default"].createElement("option", {
    value: "pf"
  }, "Pessoa F\xEDsica"), _react["default"].createElement("option", {
    value: "factoring"
  }, "Factoring"), _react["default"].createElement("option", {
    value: "fidc"
  }, "FIDC"), _react["default"].createElement("option", {
    value: "securitizadora"
  }, "Securitizadora"), _react["default"].createElement("option", {
    value: "banco"
  }, "Banco"));
}).add('with error message', function () {
  return _react["default"].createElement(_Inputs.SelectField, {
    errorMessage: "Campo obrigatório"
  }, _react["default"].createElement("option", {
    value: "pf"
  }, "Pessoa F\xEDsica"), _react["default"].createElement("option", {
    value: "factoring"
  }, "Factoring"), _react["default"].createElement("option", {
    value: "fidc"
  }, "FIDC"), _react["default"].createElement("option", {
    value: "securitizadora"
  }, "Securitizadora"), _react["default"].createElement("option", {
    value: "banco"
  }, "Banco"));
}).add('with full width', function () {
  return _react["default"].createElement(_Inputs.SelectField, {
    fullWidth: true
  }, _react["default"].createElement("option", {
    value: "pf"
  }, "Pessoa F\xEDsica"), _react["default"].createElement("option", {
    value: "factoring"
  }, "Factoring"), _react["default"].createElement("option", {
    value: "fidc"
  }, "FIDC"), _react["default"].createElement("option", {
    value: "securitizadora"
  }, "Securitizadora"), _react["default"].createElement("option", {
    value: "banco"
  }, "Banco"));
});
(0, _react2.storiesOf)('Components 1.0|Input/RangeField', module).addParameters({
  jest: ['RangeField']
}).add('default', function () {
  return _react["default"].createElement(_Inputs.RangeField, null);
}).add('with label', function () {
  return _react["default"].createElement(_Inputs.RangeField, {
    label: "Selecione o valor"
  });
}).add('with min', function () {
  return _react["default"].createElement(_Inputs.RangeField, {
    min: 20
  });
}).add('with max', function () {
  return _react["default"].createElement(_Inputs.RangeField, {
    max: 50
  });
}).add('with selected range', function () {
  return _react["default"].createElement(_Inputs.RangeField, {
    from: 15,
    to: 25
  });
});
(0, _react2.storiesOf)('Components 2.0|Input/TextArea', module).addParameters({
  jest: ['TextArea']
}).add('default', function () {
  return _react["default"].createElement(Center, null, _react["default"].createElement(_Inputs.TextArea, {
    version: 2,
    label: "CPF",
    rows: "6"
  }));
}).add('with error message', function () {
  return _react["default"].createElement(Center, null, _react["default"].createElement(_Inputs.TextArea, {
    version: 2,
    label: "CPF",
    value: "226.718.96-0-77",
    errorMessage: "CPF inválido"
  }));
}).add('with helper', function () {
  return _react["default"].createElement(Center, null, _react["default"].createElement(_Inputs.TextArea, {
    version: 2,
    helper: "Insira um CPF válido",
    label: "CPF",
    hintText: "999.999.999-9999999999999999999999"
  }));
});
(0, _react2.storiesOf)('Components 2.0|Input/TextField', module).addParameters({
  jest: ['TextField']
}).add('default', function () {
  return _react["default"].createElement(Center, null, _react["default"].createElement(_Inputs.TextField, {
    version: 2,
    label: "CPF"
  }));
}).add('disabled', function () {
  return _react["default"].createElement(Center, null, _react["default"].createElement(_Inputs.TextField, {
    version: 2,
    disabled: true,
    label: "CPF"
  }));
}).add('hint', function () {
  return _react["default"].createElement(Center, null, _react["default"].createElement(_Inputs.TextField, {
    version: 2,
    hintText: "999.999.999-99"
  }));
}).add('with open label', function () {
  return _react["default"].createElement(Center, null, _react["default"].createElement(_Inputs.TextField, {
    version: 2,
    openLabel: true,
    label: "CPF"
  }));
}).add('with value', function () {
  return _react["default"].createElement(Center, null, _react["default"].createElement(_Inputs.TextField, {
    version: 2,
    label: "CPF",
    value: "226.718.960-77"
  }));
}).add('with prefix', function () {
  return _react["default"].createElement(Center, null, _react["default"].createElement(_Inputs.TextField, {
    version: 2,
    label: "Total",
    prefix: "$",
    value: "1000,00"
  }));
}).add('with error message', function () {
  return _react["default"].createElement(Center, null, _react["default"].createElement(_Inputs.TextField, {
    version: 2,
    label: "CPF",
    value: "226.718.96-0-77",
    errorMessage: "CPF inválido"
  }));
}).add('with helper', function () {
  return _react["default"].createElement(Center, null, _react["default"].createElement(_Inputs.TextField, {
    version: 2,
    helper: "Insira um CPF válido",
    label: "CPF",
    hintText: "999.999.999-99"
  }));
}).add('with auto complete', function () {
  return _react["default"].createElement(Center, null, _react["default"].createElement(_Inputs.TextField, {
    version: 2,
    autoComplete: true,
    autoCompleteList: ['Item encontrado 1', 'Item encontrado 2', 'Item encontrado 3', 'Item encontrado 4', 'Item sob efeito de hover'],
    hintText: "Comece digitando algo"
  }));
}).add('with password', function () {
  return _react["default"].createElement(Center, null, _react["default"].createElement(_Inputs.TextField, {
    version: 2,
    type: "password",
    showPasswordToggle: true
  }));
});
(0, _react2.storiesOf)('Components 2.0|Input/SimpleSelect', module).addParameters({
  jest: ['SimpleSelect']
}).add('default', function () {
  return _react["default"].createElement(Center, null, _react["default"].createElement(_Inputs.SimpleSelect, null, _react["default"].createElement("option", null, "10"), _react["default"].createElement("option", null, "25"), _react["default"].createElement("option", null, "50"), _react["default"].createElement("option", null, "100")));
});
(0, _react2.storiesOf)('Components 2.0|Input/DatePicker', module).addParameters({
  jest: ['DatePicker']
}).add('default', function () {
  return _react["default"].createElement(Center, null, _react["default"].createElement(_Inputs.DatePicker, {
    onChange: (0, _addonActions.action)('onChange')
  }));
});
(0, _react2.storiesOf)('Components 2.0|Calendar/RangePicker', module).addParameters({
  jest: ['DatePicker']
}).add('default', function () {
  return _react["default"].createElement(Center, null, _react["default"].createElement(_RangePickers.Range, {
    showTime: false
  }));
});
(0, _react2.storiesOf)('Components 2.0|Input/DateRangePicker', module).addParameters({
  jest: ['DateRangePicker']
}).add('default', function () {
  return _react["default"].createElement(Center, null, _react["default"].createElement(DateRangeFunction, null));
});
(0, _react2.storiesOf)('Components 2.0|Input/TimePicker', module).addParameters({
  jest: ['TimePicker']
}).add('default', function () {
  return _react["default"].createElement(Center, null, _react["default"].createElement(_Inputs.TimePicker, {
    label: "Time",
    onChange: (0, _addonActions.action)('onChange')
  }));
});
(0, _react2.storiesOf)('Components 2.0|Input/DateTimePicker', module).addParameters({
  jest: ['DateTimePicker']
}).add('default', function () {
  return _react["default"].createElement(Center, null, _react["default"].createElement(_Inputs.DateTimePicker, {
    label: "Time",
    onChange: (0, _addonActions.action)('onChange')
  }));
});
(0, _react2.storiesOf)('Components 2.0|Input/DateTimeRangePicker', module).addParameters({
  jest: ['DateTimeRangePicker']
}).add('default', function () {
  return _react["default"].createElement(Center, null, _react["default"].createElement(_Inputs.DateTimeRangePicker, {
    onChange: (0, _addonActions.action)('onChange'),
    label: "DateTimeRangePicker"
  }));
}).add('wihthout label', function () {
  return _react["default"].createElement(Center, null, _react["default"].createElement(_Inputs.DateTimeRangePicker, {
    onChange: (0, _addonActions.action)('onChange')
  }));
}).add('with placeholder(hintText)', function () {
  return _react["default"].createElement(Center, null, _react["default"].createElement(_Inputs.DateTimeRangePicker, {
    label: "DateTimeRangePicker",
    onChange: (0, _addonActions.action)('onChange'),
    placeholder: "placeholder"
  }));
}).add('error', function () {
  return _react["default"].createElement(Center, null, _react["default"].createElement(_Inputs.DateTimeRangePicker, {
    label: "DateTimeRangePicker",
    onChange: (0, _addonActions.action)('onChange'),
    errorMessage: "Error Message"
  }));
}).add('disabled', function () {
  return _react["default"].createElement(Center, null, _react["default"].createElement(_Inputs.DateTimeRangePicker, {
    label: "DateTimeRangePicker",
    onChange: (0, _addonActions.action)('onChange'),
    disabled: true
  }));
});
(0, _react2.storiesOf)('Components 2.0|Input/NumberField', module).addParameters({
  jest: ['NumberField']
}).add('default', function () {
  return _react["default"].createElement(Center, null, _react["default"].createElement(_Inputs.NumberField, {
    label: "Label do input"
  }));
}).add('with min value', function () {
  return _react["default"].createElement(Center, null, _react["default"].createElement(_Inputs.NumberField, {
    label: "Label do input",
    min: 0
  }));
}).add('with max value', function () {
  return _react["default"].createElement(Center, null, _react["default"].createElement(_Inputs.NumberField, {
    label: "Label do input",
    max: 10
  }));
}).add('with min and max value', function () {
  return _react["default"].createElement(Center, null, _react["default"].createElement(_Inputs.NumberField, {
    label: "Label do input",
    min: 2,
    max: 10
  }));
}).add('with float value', function () {
  return _react["default"].createElement(Center, null, _react["default"].createElement(_Inputs.NumberField, {
    label: "Label do input",
    step: 0.01,
    precision: 2
  }));
});
(0, _react2.storiesOf)('Components 2.0|Input/SelectField', module).addParameters({
  jest: ['SelectField']
}).add('default', function () {
  return _react["default"].createElement(Center, null, _react["default"].createElement(_Inputs.SelectField, {
    version: "2",
    label: "Select",
    openLabel: true
  }, _react["default"].createElement("option", {
    value: "pf"
  }, "Pessoa F\xEDsica"), _react["default"].createElement("option", {
    value: "factoring"
  }, "Factoring"), _react["default"].createElement("option", {
    value: "fidc"
  }, "FIDC"), _react["default"].createElement("option", {
    value: "securitizadora"
  }, "Securitizadora"), _react["default"].createElement("option", {
    value: "banco"
  }, "Banco"), _react["default"].createElement("option", {
    value: "pf2"
  }, "Pessoa F\xEDsica2"), _react["default"].createElement("option", {
    value: "factoring2"
  }, "Factoring2"), _react["default"].createElement("option", {
    value: "fidc2"
  }, "FIDC2"), _react["default"].createElement("option", {
    value: "securitizadora2"
  }, "Securitizadora2"), _react["default"].createElement("option", {
    value: "banco2"
  }, "Banco2")));
}).add('searchable', function () {
  return _react["default"].createElement(Center, null, _react["default"].createElement(_Inputs.SelectField, {
    version: "2",
    searchable: true,
    label: "label"
  }, _react["default"].createElement("option", {
    value: "pf"
  }, "Pessoa F\xEDsica"), _react["default"].createElement("option", {
    value: "factoring"
  }, "Factoring"), _react["default"].createElement("option", {
    value: "fidc"
  }, "FIDC"), _react["default"].createElement("option", {
    value: "securitizadora"
  }, "Securitizadora"), _react["default"].createElement("option", {
    value: "banco"
  }, "Banco"), _react["default"].createElement("option", {
    value: "pf2"
  }, "Pessoa F\xEDsica2"), _react["default"].createElement("option", {
    value: "factoring2"
  }, "Factoring2"), _react["default"].createElement("option", {
    value: "fidc2"
  }, "FIDC2"), _react["default"].createElement("option", {
    value: "securitizadora2"
  }, "Securitizadora2"), _react["default"].createElement("option", {
    value: "banco2"
  }, "Banco2")));
}).add('multiple', function () {
  return _react["default"].createElement(Center, null, _react["default"].createElement(Size, null, _react["default"].createElement(_Inputs.SelectField, {
    version: "2",
    multiple: true,
    onChange: (0, _addonActions.action)('onChange')
  }, _react["default"].createElement("option", {
    value: "pf"
  }, "Pessoa F\xEDsica"), _react["default"].createElement("option", {
    value: "factoring"
  }, "Factoring"), _react["default"].createElement("option", {
    value: "fidc"
  }, "FIDC"), _react["default"].createElement("option", {
    value: "securitizadora"
  }, "Securitizadora"), _react["default"].createElement("option", {
    value: "banco"
  }, "Banco"))));
}).add('multiple searchable', function () {
  return _react["default"].createElement(Center, null, _react["default"].createElement(Size, null, _react["default"].createElement(_Inputs.SelectField, {
    version: "2",
    multiple: true,
    searchable: true,
    onChange: (0, _addonActions.action)('onChange')
  }, _react["default"].createElement("option", {
    value: "pf"
  }, "Pessoa F\xEDsica"), _react["default"].createElement("option", {
    value: "factoring"
  }, "Factoring"), _react["default"].createElement("option", {
    value: "fidc"
  }, "FIDC"), _react["default"].createElement("option", {
    value: "securitizadora"
  }, "Securitizadora"), _react["default"].createElement("option", {
    value: "banco"
  }, "Banco"))));
}).add('with error message', function () {
  return _react["default"].createElement(Center, null, _react["default"].createElement(_Inputs.SelectField, {
    version: "2",
    errorMessage: "Campo obrigatório"
  }, _react["default"].createElement("option", {
    value: "pf"
  }, "Pessoa F\xEDsica"), _react["default"].createElement("option", {
    value: "factoring"
  }, "Factoring"), _react["default"].createElement("option", {
    value: "fidc"
  }, "FIDC"), _react["default"].createElement("option", {
    value: "securitizadora"
  }, "Securitizadora"), _react["default"].createElement("option", {
    value: "banco"
  }, "Banco")));
}).add('with hint text', function () {
  return _react["default"].createElement(Center, null, _react["default"].createElement(_Inputs.SelectField, {
    version: "2",
    hintText: "Hint Text"
  }, _react["default"].createElement("option", {
    value: "pf"
  }, "Pessoa F\xEDsica"), _react["default"].createElement("option", {
    value: "factoring"
  }, "Factoring"), _react["default"].createElement("option", {
    value: "fidc"
  }, "FIDC"), _react["default"].createElement("option", {
    value: "securitizadora"
  }, "Securitizadora"), _react["default"].createElement("option", {
    value: "banco"
  }, "Banco")));
});