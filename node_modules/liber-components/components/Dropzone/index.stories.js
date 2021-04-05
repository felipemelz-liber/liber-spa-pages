"use strict";

require("core-js/modules/es6.object.define-property");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.defaultStory = exports["default"] = void 0;

var _react = _interopRequireDefault(require("react"));

var _Dropzone = _interopRequireDefault(require("./Dropzone"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var _default = {
  title: 'Components 1.0|Dropzone',
  parameters: {
    jest: ['Dropzone']
  }
};
exports["default"] = _default;

var defaultStory = function defaultStory() {
  return _react["default"].createElement(_Dropzone["default"], null, "Insira sua imagem aqui");
};

exports.defaultStory = defaultStory;
defaultStory.story = {
  name: 'default'
};