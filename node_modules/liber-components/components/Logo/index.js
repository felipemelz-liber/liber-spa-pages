"use strict";

require("core-js/modules/es6.object.define-property");

Object.defineProperty(exports, "__esModule", {
  value: true
});
Object.defineProperty(exports, "Logo", {
  enumerable: true,
  get: function get() {
    return _Logo["default"];
  }
});
Object.defineProperty(exports, "SimpleLogo", {
  enumerable: true,
  get: function get() {
    return _SimpleLogo["default"];
  }
});

var _Logo = _interopRequireDefault(require("./Logo"));

var _SimpleLogo = _interopRequireDefault(require("./SimpleLogo"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }