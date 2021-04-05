"use strict";

require("core-js/modules/es6.object.define-property");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

require("core-js/modules/es6.regexp.replace");

var _default = function _default(text) {
  var normalized = text.replace(/[ÀÁÂÃÄÅ]/, 'A');
  normalized = normalized.replace(/[àáâãäå]/, 'a');
  normalized = normalized.replace(/[ÈÉÊË]/, 'E');
  normalized = normalized.replace(/[èéêë]/, 'e');
  normalized = normalized.replace(/[Ç]/, 'C');
  normalized = normalized.replace(/[ç]/, 'c');
  normalized = normalized.replace(/[ÌÍÎÏ]/, 'I');
  normalized = normalized.replace(/[ìíîï]/, 'i');
  normalized = normalized.replace(/[ÒÓÔÖÕ]/, 'O');
  normalized = normalized.replace(/[òóôöõ]/, 'o');
  normalized = normalized.replace(/[ÙÚÛÜ]/, 'U');
  normalized = normalized.replace(/[ùúûü]/, 'u');
  normalized = normalized.replace(/[Ñ]/, 'N');
  normalized = normalized.replace(/[ñ]/, 'n');
  return normalized;
};

exports["default"] = _default;