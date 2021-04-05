"use strict";

require("core-js/modules/es6.object.define-property");

Object.defineProperty(exports, "__esModule", {
  value: true
});
Object.defineProperty(exports, "default", {
  enumerable: true,
  get: function get() {
    return _WhatToDo["default"];
  }
});
Object.defineProperty(exports, "NotificationBox", {
  enumerable: true,
  get: function get() {
    return _NotificationBox["default"];
  }
});

var _WhatToDo = _interopRequireDefault(require("./WhatToDo"));

var _NotificationBox = _interopRequireDefault(require("./NotificationBox"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }