"use strict";

require("core-js/modules/es6.object.define-property");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _default = function _default(n) {
  return (n < 10 ? '0' : '') + n;
};

exports["default"] = _default;