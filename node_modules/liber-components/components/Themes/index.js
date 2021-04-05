"use strict";

require("core-js/modules/web.dom.iterable");

require("core-js/modules/es6.array.iterator");

require("core-js/modules/es6.object.to-string");

require("core-js/modules/es6.object.keys");

require("core-js/modules/es6.array.for-each");

require("core-js/modules/es6.object.define-property");

Object.defineProperty(exports, "__esModule", {
  value: true
});
var _exportNames = {
  Liber: true,
  LiberV4: true,
  LiberNew: true
};
Object.defineProperty(exports, "Liber", {
  enumerable: true,
  get: function get() {
    return _Liber["default"];
  }
});
Object.defineProperty(exports, "LiberV4", {
  enumerable: true,
  get: function get() {
    return _LiberV["default"];
  }
});
Object.defineProperty(exports, "LiberNew", {
  enumerable: true,
  get: function get() {
    return _LiberNew["default"];
  }
});

var _Liber = _interopRequireDefault(require("./Liber"));

var _LiberV = _interopRequireDefault(require("./LiberV4"));

var _LiberNew = _interopRequireDefault(require("./LiberNew"));

var _methods = require("./methods");

Object.keys(_methods).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  if (Object.prototype.hasOwnProperty.call(_exportNames, key)) return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function get() {
      return _methods[key];
    }
  });
});

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }