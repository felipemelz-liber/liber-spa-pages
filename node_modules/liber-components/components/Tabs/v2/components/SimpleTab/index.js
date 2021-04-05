"use strict";

require("core-js/modules/es6.object.define-property");

Object.defineProperty(exports, "__esModule", {
  value: true
});
Object.defineProperty(exports, "SimpleTab", {
  enumerable: true,
  get: function get() {
    return _SimpleTab["default"];
  }
});
Object.defineProperty(exports, "SimpleTabs", {
  enumerable: true,
  get: function get() {
    return _SimpleTab2.SimpleTabs;
  }
});

var _SimpleTab = _interopRequireDefault(require("./SimpleTab"));

var _SimpleTab2 = require("./SimpleTab.styles");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }