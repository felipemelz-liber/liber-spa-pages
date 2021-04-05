"use strict";

var _react = _interopRequireDefault(require("react"));

var _styledComponents = _interopRequireDefault(require("styled-components"));

var _react2 = require("@storybook/react");

var _styles = require("./ActionDisplay/styles");

var _ActionDisplay = _interopRequireDefault(require("./ActionDisplay"));

var _BarDisplay = _interopRequireDefault(require("./BarDisplay"));

var _SimpleDisplay = _interopRequireDefault(require("./SimpleDisplay"));

var _Resizable = _interopRequireDefault(require("./Resizable"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var Center = _styledComponents["default"].div.withConfig({
  displayName: "indexstories__Center",
  componentId: "dlq7oi-0"
})(["width:100vw;height:100vh;display:flex;justify-content:center;align-items:center;"]);

var Box = _styledComponents["default"].div.withConfig({
  displayName: "indexstories__Box",
  componentId: "dlq7oi-1"
})(["width:200px;"]);

(0, _react2.storiesOf)('Components 1.0|DataDisplay/Action Display', module).addParameters({
  jest: ['ActionDisplay']
}).add('with value', function () {
  return _react["default"].createElement(Center, null, _react["default"].createElement(Box, null, _react["default"].createElement(_ActionDisplay["default"], {
    value: 100000
  }, _react["default"].createElement(_styles.ActionContainer, null))));
}).add('with label', function () {
  return _react["default"].createElement(Center, null, _react["default"].createElement(Box, null, _react["default"].createElement(_ActionDisplay["default"], {
    value: 100000,
    label: "Valor a liquidar"
  }, _react["default"].createElement(_styles.ActionContainer, null))));
}).add('with currency', function () {
  return _react["default"].createElement(Center, null, _react["default"].createElement(Box, null, _react["default"].createElement(_ActionDisplay["default"], {
    value: 100000,
    label: "Valor a liquidar",
    currency: "R$"
  }, _react["default"].createElement(_styles.ActionContainer, null))));
});
(0, _react2.storiesOf)('Components 1.0|DataDisplay/Bar Display', module).addParameters({
  jest: ['BarDisplay']
}).add('default', function () {
  return _react["default"].createElement(Center, null, _react["default"].createElement(Box, null, _react["default"].createElement(_BarDisplay["default"], null, "100.000,00")));
}).add('with label', function () {
  return _react["default"].createElement(Center, null, _react["default"].createElement(Box, null, _react["default"].createElement(_BarDisplay["default"], {
    label: "Patrimônio"
  }, "100.000,00")));
}).add('with prefix', function () {
  return _react["default"].createElement(Center, null, _react["default"].createElement(Box, null, _react["default"].createElement(_BarDisplay["default"], {
    label: "Patrimônio",
    prefix: "R$"
  }, "100.000,00")));
}).add('with sectors', function () {
  return _react["default"].createElement(Center, null, _react["default"].createElement(Box, null, _react["default"].createElement(_BarDisplay["default"], {
    label: "Patrimônio",
    prefix: "R$",
    sectors: [{
      percentage: '100%',
      color: ['#2DE8BF', '#88f3e2']
    }]
  }, "100.000,00")));
});
(0, _react2.storiesOf)('Components 1.0|DataDisplay/Resizable', module).addParameters({
  jest: ['Resizable']
}).add('default', function () {
  return _react["default"].createElement(Center, null, _react["default"].createElement(Box, null, _react["default"].createElement(_Resizable["default"], null, 10)));
});
(0, _react2.storiesOf)('Components 1.0|DataDisplay/Simple Display', module).addParameters({
  jest: ['SimpleDisplay']
}).add('default', function () {
  return _react["default"].createElement(_SimpleDisplay["default"], null, "752.235,65");
}).add('with label', function () {
  return _react["default"].createElement(_SimpleDisplay["default"], {
    label: "Valor a Receber"
  }, "752.235,65");
}).add('with prefix', function () {
  return _react["default"].createElement(_SimpleDisplay["default"], {
    label: "Valor a Receber",
    prefix: "R$"
  }, "752.235,65");
});