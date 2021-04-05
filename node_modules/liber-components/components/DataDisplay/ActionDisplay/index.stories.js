"use strict";

require("core-js/modules/es6.object.define-property");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.withCurrency = exports.withLabel = exports.withValue = exports["default"] = void 0;

var _react = _interopRequireDefault(require("react"));

var _styledComponents = _interopRequireDefault(require("styled-components"));

var _styles = require("./styles");

var _ActionDisplay = _interopRequireDefault(require("./ActionDisplay"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var Center = _styledComponents["default"].div.withConfig({
  displayName: "indexstories__Center",
  componentId: "sc-189or1h-0"
})(["width:100vw;height:100vh;display:flex;justify-content:center;align-items:center;"]);

var Box = _styledComponents["default"].div.withConfig({
  displayName: "indexstories__Box",
  componentId: "sc-189or1h-1"
})(["width:200px;"]);

var _default = {
  title: 'Components 1.0|DataDisplay/Action Display',
  parameters: {
    jest: ['ActionDisplay']
  }
};
exports["default"] = _default;

var withValue = function withValue() {
  return _react["default"].createElement(Center, null, _react["default"].createElement(Box, null, _react["default"].createElement(_ActionDisplay["default"], {
    value: 100000
  }, _react["default"].createElement(_styles.ActionContainer, null))));
};

exports.withValue = withValue;

var withLabel = function withLabel() {
  return _react["default"].createElement(Center, null, _react["default"].createElement(Box, null, _react["default"].createElement(_ActionDisplay["default"], {
    value: 100000,
    label: "Valor a liquidar"
  }, _react["default"].createElement(_styles.ActionContainer, null))));
};

exports.withLabel = withLabel;

var withCurrency = function withCurrency() {
  return _react["default"].createElement(Center, null, _react["default"].createElement(Box, null, _react["default"].createElement(_ActionDisplay["default"], {
    value: 100000,
    label: "Valor a liquidar",
    currency: "R$"
  }, _react["default"].createElement(_styles.ActionContainer, null))));
};

exports.withCurrency = withCurrency;