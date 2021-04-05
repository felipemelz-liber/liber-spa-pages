"use strict";

require("core-js/modules/es6.object.define-property");

Object.defineProperty(exports, "__esModule", {
  value: true
});
Object.defineProperty(exports, "SimpleTab", {
  enumerable: true,
  get: function get() {
    return _SimpleTab.SimpleTab;
  }
});
Object.defineProperty(exports, "SimpleTabs", {
  enumerable: true,
  get: function get() {
    return _SimpleTab.SimpleTabs;
  }
});
Object.defineProperty(exports, "Tabs", {
  enumerable: true,
  get: function get() {
    return _Tab.Tabs;
  }
});
Object.defineProperty(exports, "DropDownTab", {
  enumerable: true,
  get: function get() {
    return _DropDownTab["default"];
  }
});

var _SimpleTab = require("./components/SimpleTab");

var _Tab = require("./components/Tab");

var _DropDownTab = _interopRequireDefault(require("./components/DropDownTab"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }