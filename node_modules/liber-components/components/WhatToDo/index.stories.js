"use strict";

var _react = _interopRequireDefault(require("react"));

var _react2 = require("@storybook/react");

var _WhatToDo = _interopRequireDefault(require("./WhatToDo"));

var _NotificationBox = _interopRequireDefault(require("./NotificationBox"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

(0, _react2.storiesOf)('Components 1.0|WhatToDo/Notification Box', module).addParameters({
  jest: ['WhatToDo']
}).add('default', function () {
  return _react["default"].createElement(_NotificationBox["default"], null);
}).add('with label', function () {
  return _react["default"].createElement(_NotificationBox["default"], {
    label: "Conteudo"
  });
}).add('with children', function () {
  return _react["default"].createElement(_NotificationBox["default"], {
    label: "Conteudo"
  }, "Texto");
});
(0, _react2.storiesOf)('Components 1.0|WhatToDo/What To Do', module).add('default', function () {
  return _react["default"].createElement(_WhatToDo["default"], null);
}).add('with children', function () {
  return _react["default"].createElement(_WhatToDo["default"], null, "Conteudo");
});