"use strict";

require("core-js/modules/es6.object.define-property");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.withChildren = exports.defaultStory = exports["default"] = void 0;

var _react = _interopRequireDefault(require("react"));

var _WhatToDo = _interopRequireDefault(require("./WhatToDo"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var _default = {
  title: 'Components 1.0|WhatToDo/What To Do'
};
exports["default"] = _default;

var defaultStory = function defaultStory() {
  return _react["default"].createElement(_WhatToDo["default"], null);
};

exports.defaultStory = defaultStory;
defaultStory.story = {
  name: 'default'
};

var withChildren = function withChildren() {
  return _react["default"].createElement(_WhatToDo["default"], null, "Conteudo");
};

exports.withChildren = withChildren;