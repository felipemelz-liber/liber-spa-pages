"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.generateColorAndFill = exports["default"] = void 0;

require("core-js/modules/es6.object.define-properties");

require("core-js/modules/es7.object.get-own-property-descriptors");

require("core-js/modules/es6.array.for-each");

require("core-js/modules/es6.array.filter");

require("core-js/modules/es6.symbol");

require("core-js/modules/web.dom.iterable");

require("core-js/modules/es6.array.iterator");

require("core-js/modules/es6.object.to-string");

require("core-js/modules/es6.object.keys");

require("core-js/modules/es6.object.define-property");

require("core-js/modules/es6.array.is-array");

var _styledComponents = require("styled-components");

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(source, true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(source).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var _default = function _default(color, config) {
  var _defaultColor$positio = _objectSpread({
    defaultColor: '#cecece',
    position: -1
  }, config),
      defaultColor = _defaultColor$positio.defaultColor,
      position = _defaultColor$positio.position;

  if (!color) {
    return defaultColor;
  }

  if (Array.isArray(color)) {
    if (position > -1) {
      return color[position];
    }

    return "linear-gradient(to left, ".concat(color.join(', '), ")");
  }

  return color;
};

exports["default"] = _default;

var generateColorAndFill = function generateColorAndFill(color, important) {
  return (0, _styledComponents.css)(["color:", " ", ";fill:", " ", ";"], color, important ? '!important' : '', color, important ? '!important' : '');
};

exports.generateColorAndFill = generateColorAndFill;