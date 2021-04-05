"use strict";

require("core-js/modules/es6.object.define-property");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.getScreenSize = exports["default"] = exports.sizes = void 0;

require("core-js/modules/web.dom.iterable");

require("core-js/modules/es6.array.iterator");

require("core-js/modules/es6.object.to-string");

require("core-js/modules/es6.object.keys");

require("core-js/modules/es6.array.reduce");

var _styledComponents = require("styled-components");

var sizes = {
  small: '576px',
  medium: '768px',
  large: '992px',
  extraLarge: '1200px'
};
exports.sizes = sizes;

var _default = Object.keys(sizes).reduce(function (acc, label) {
  acc[label] = function () {
    return (0, _styledComponents.css)(["@media (min-width:", "){", "}"], sizes[label], _styledComponents.css.apply(void 0, arguments));
  };

  return acc;
}, {});

exports["default"] = _default;

var getScreenSize = function getScreenSize(window) {
  if (window) {
    var innerWidth = window.innerWidth;

    if (innerWidth) {
      var screenSize = Object.keys(sizes).reduce(function (prev, next) {
        if (parseInt(sizes[next].slice(0, -2), 10) <= innerWidth) return next;
        return prev;
      }, 'small');
      return screenSize;
    }
  }

  return null;
};

exports.getScreenSize = getScreenSize;