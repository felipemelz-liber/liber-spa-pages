"use strict";

require("core-js/modules/es6.object.define-property");

Object.defineProperty(exports, "__esModule", {
  value: true
});
Object.defineProperty(exports, "Tabs", {
  enumerable: true,
  get: function get() {
    return _Tabs["default"];
  }
});
Object.defineProperty(exports, "Tab", {
  enumerable: true,
  get: function get() {
    return _Tab["default"];
  }
});
Object.defineProperty(exports, "TabHeader", {
  enumerable: true,
  get: function get() {
    return _Header["default"];
  }
});

var _Tabs = _interopRequireDefault(require("./Tabs"));

var _Tab = _interopRequireDefault(require("./Tab"));

var _Header = _interopRequireDefault(require("./Header"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }