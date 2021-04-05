"use strict";

require("core-js/modules/es6.object.define-property");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.withChildren = exports.withLabel = exports.defaultStory = exports["default"] = void 0;

var _react = _interopRequireDefault(require("react"));

var _NotificationBox = _interopRequireDefault(require("./NotificationBox"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var _default = {
  title: 'Components 1.0|WhatToDo/Notification Box',
  parameters: {
    jest: ['WhatToDo']
  }
};
exports["default"] = _default;

var defaultStory = function defaultStory() {
  return _react["default"].createElement(_NotificationBox["default"], null);
};

exports.defaultStory = defaultStory;
defaultStory.story = {
  name: 'default'
};

var withLabel = function withLabel() {
  return _react["default"].createElement(_NotificationBox["default"], {
    label: "Conteudo"
  });
};

exports.withLabel = withLabel;

var withChildren = function withChildren() {
  return _react["default"].createElement(_NotificationBox["default"], {
    label: "Conteudo"
  }, "Texto");
};

exports.withChildren = withChildren;