"use strict";

require("core-js/modules/es6.object.define-property");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.withEasing = exports.withTranslatex = exports.withDuration = exports.withOpacity = exports.defaultStory = exports["default"] = void 0;

var _react = _interopRequireDefault(require("react"));

var _SimpleAnime = _interopRequireDefault(require("./SimpleAnime"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var _default = {
  title: 'Components 1.0|SimpleAnime',
  parameters: {
    jest: ['SimpleAnime']
  }
};
exports["default"] = _default;

var defaultStory = function defaultStory() {
  return _react["default"].createElement(_SimpleAnime["default"], null, _react["default"].createElement("div", null, "Conteudo"));
};

exports.defaultStory = defaultStory;
defaultStory.story = {
  name: 'default'
};

var withOpacity = function withOpacity() {
  return _react["default"].createElement(_SimpleAnime["default"], {
    opacity: [0, 1]
  }, _react["default"].createElement("div", null, "Conteudo"));
};

exports.withOpacity = withOpacity;
withOpacity.story = {
  name: 'with opacity'
};

var withDuration = function withDuration() {
  return _react["default"].createElement(_SimpleAnime["default"], {
    opacity: [0, 1],
    duration: 3000
  }, _react["default"].createElement("div", null, "Conteudo"));
};

exports.withDuration = withDuration;
withDuration.story = {
  name: 'with duration'
};

var withTranslatex = function withTranslatex() {
  return _react["default"].createElement(_SimpleAnime["default"], {
    opacity: [0, 1],
    duration: 3000,
    translateX: ['-50px', '0px']
  }, _react["default"].createElement("div", null, "Conteudo"));
};

exports.withTranslatex = withTranslatex;
withTranslatex.story = {
  name: 'with translatex'
};

var withEasing = function withEasing() {
  return _react["default"].createElement(_SimpleAnime["default"], {
    opacity: [0, 1],
    duration: 3000,
    translateX: ['-50px', '0px'],
    easing: "easeOutElastic"
  }, _react["default"].createElement("div", null, "Conteudo"));
};

exports.withEasing = withEasing;
withEasing.story = {
  name: 'with easing'
};