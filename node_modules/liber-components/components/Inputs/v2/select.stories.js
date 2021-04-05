"use strict";

require("core-js/modules/es6.object.define-property");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.withHintText = exports.withErrorMessage = exports.multipleSearchable = exports.multiple = exports.controlledAndSearchable = exports.controlled = exports.searchable = exports.defaultStory = exports["default"] = void 0;

require("core-js/modules/es6.regexp.to-string");

require("core-js/modules/es6.date.to-string");

require("core-js/modules/es6.object.to-string");

require("core-js/modules/es7.symbol.async-iterator");

require("core-js/modules/es6.symbol");

require("core-js/modules/web.dom.iterable");

require("core-js/modules/es6.array.is-array");

var _react = _interopRequireDefault(require("react"));

var _addonActions = require("@storybook/addon-actions");

var _styledComponents = _interopRequireDefault(require("styled-components"));

var _Inputs = require("../Inputs");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance"); }

function _iterableToArrayLimit(arr, i) { if (!(Symbol.iterator in Object(arr) || Object.prototype.toString.call(arr) === "[object Arguments]")) { return; } var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

var Center = _styledComponents["default"].div.withConfig({
  displayName: "selectstories__Center",
  componentId: "sc-1qtqet0-0"
})(["width:100%;height:100vh;display:flex;flex-direction:column;justify-content:center;align-items:center;background-color:#fafdff;padding:64px;box-sizing:border-box;"]);

var WithMargin = _styledComponents["default"].div.withConfig({
  displayName: "selectstories__WithMargin",
  componentId: "sc-1qtqet0-1"
})(["margin-top:16px;"]);

var Size = _styledComponents["default"].div.withConfig({
  displayName: "selectstories__Size",
  componentId: "sc-1qtqet0-2"
})(["width:570px;"]);

var _default = {
  title: 'Components 2.0|Input/SelectField',
  parameters: {
    jest: ['SelectField']
  }
};
exports["default"] = _default;

var defaultStory = function defaultStory() {
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
};

exports.defaultStory = defaultStory;
defaultStory.story = {
  name: 'default'
};

var searchable = function searchable() {
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
};

exports.searchable = searchable;

var controlled = function controlled() {
  var _React$useState = _react["default"].useState('pf'),
      _React$useState2 = _slicedToArray(_React$useState, 2),
      value = _React$useState2[0],
      setValue = _React$useState2[1];

  return _react["default"].createElement(Center, null, _react["default"].createElement(_Inputs.SelectField, {
    version: "2",
    openLabel: true,
    label: "Label",
    value: value,
    onChange: setValue
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
  }, "Banco2")), _react["default"].createElement(WithMargin, null, "Input value: ", value), _react["default"].createElement(WithMargin, null, _react["default"].createElement("button", {
    type: "button",
    onClick: function onClick() {
      return setValue('fidc');
    }
  }, "Set as FIDC from outside")), _react["default"].createElement(WithMargin, null, _react["default"].createElement("button", {
    type: "button",
    onClick: function onClick() {
      return setValue('');
    }
  }, "Set empty from outside")));
};

exports.controlled = controlled;

var controlledAndSearchable = function controlledAndSearchable() {
  var _React$useState3 = _react["default"].useState('pf'),
      _React$useState4 = _slicedToArray(_React$useState3, 2),
      value = _React$useState4[0],
      setValue = _React$useState4[1];

  return _react["default"].createElement(Center, null, _react["default"].createElement(_Inputs.SelectField, {
    version: "2",
    openLabel: true,
    searchable: true,
    label: "Label",
    value: value,
    onChange: setValue
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
  }, "Banco2")), _react["default"].createElement(WithMargin, null, "Input value: ", value), _react["default"].createElement(WithMargin, null, _react["default"].createElement("button", {
    type: "button",
    onClick: function onClick() {
      return setValue('fidc');
    }
  }, "Set as FIDC from outside")), _react["default"].createElement(WithMargin, null, _react["default"].createElement("button", {
    type: "button",
    onClick: function onClick() {
      return setValue('');
    }
  }, "Set empty from outside")));
};

exports.controlledAndSearchable = controlledAndSearchable;

var multiple = function multiple() {
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
};

exports.multiple = multiple;

var multipleSearchable = function multipleSearchable() {
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
};

exports.multipleSearchable = multipleSearchable;

var withErrorMessage = function withErrorMessage() {
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
};

exports.withErrorMessage = withErrorMessage;

var withHintText = function withHintText() {
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
};

exports.withHintText = withHintText;