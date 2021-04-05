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
  ModalTag: true
};
Object.defineProperty(exports, "ModalTag", {
  enumerable: true,
  get: function get() {
    return _ModalTag["default"];
  }
});

var _Tags = require("./Tags");

Object.keys(_Tags).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  if (Object.prototype.hasOwnProperty.call(_exportNames, key)) return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function get() {
      return _Tags[key];
    }
  });
});

var _ModalTag = _interopRequireDefault(require("./ModalTag"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }