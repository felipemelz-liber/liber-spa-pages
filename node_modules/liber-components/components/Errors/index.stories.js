"use strict";

var _react = _interopRequireDefault(require("react"));

var _react2 = require("@storybook/react");

var _NotFound = _interopRequireDefault(require("./NotFound"));

var _Unprocessable = _interopRequireDefault(require("./Unprocessable"));

var _InternalServerError = _interopRequireDefault(require("./InternalServerError"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

(0, _react2.storiesOf)('Components 1.0|Errors/Internal Error', module).addParameters({
  jest: ['InternalServerError']
}).add('default', function () {
  return _react["default"].createElement(_InternalServerError["default"], null);
});
(0, _react2.storiesOf)('Components 1.0|Errors/Not Found', module).addParameters({
  jest: ['NotFound']
}).add('default', function () {
  return _react["default"].createElement(_NotFound["default"], null);
});
(0, _react2.storiesOf)('Components 1.0|Errors/Unprocessable', module).addParameters({
  jest: ['Unprocessable']
}).add('default', function () {
  return _react["default"].createElement(_Unprocessable["default"], null);
});