"use strict";

require("core-js/modules/es6.object.define-property");

Object.defineProperty(exports, "__esModule", {
  value: true
});
Object.defineProperty(exports, "TextField", {
  enumerable: true,
  get: function get() {
    return _TextField["default"];
  }
});
Object.defineProperty(exports, "NumberField", {
  enumerable: true,
  get: function get() {
    return _NumberField["default"];
  }
});

var _TextField = _interopRequireDefault(require("./TextField"));

var _NumberField = _interopRequireDefault(require("./NumberField"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }