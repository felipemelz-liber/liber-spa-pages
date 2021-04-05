"use strict";

require("core-js/modules/es6.object.define-property");

Object.defineProperty(exports, "__esModule", {
  value: true
});
Object.defineProperty(exports, "default", {
  enumerable: true,
  get: function get() {
    return _MessageContainer["default"];
  }
});
Object.defineProperty(exports, "message", {
  enumerable: true,
  get: function get() {
    return _actions.message;
  }
});
Object.defineProperty(exports, "dispel", {
  enumerable: true,
  get: function get() {
    return _actions.dispel;
  }
});

var _MessageContainer = _interopRequireDefault(require("./components/MessageContainer"));

var _actions = require("./actions");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }