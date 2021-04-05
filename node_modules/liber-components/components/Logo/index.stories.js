"use strict";

require("core-js/modules/es6.object.define-property");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.simpleLogo = exports.defaultStory = exports["default"] = void 0;

var _react = _interopRequireDefault(require("react"));

var _styledComponents = _interopRequireDefault(require("styled-components"));

var _Logo = _interopRequireDefault(require("./Logo"));

var _SimpleLogo = _interopRequireDefault(require("./SimpleLogo"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var Container = _styledComponents["default"].div.withConfig({
  displayName: "indexstories__Container",
  componentId: "sc-2hud-0"
})(["width:180px;height:180px;"]);

var _default = {
  title: 'UI|Logo',
  parameters: {
    jest: ['Logo']
  }
};
exports["default"] = _default;

var defaultStory = function defaultStory() {
  return _react["default"].createElement(Container, null, _react["default"].createElement(_Logo["default"], null));
};

exports.defaultStory = defaultStory;
defaultStory.story = {
  name: 'default'
};

var simpleLogo = function simpleLogo() {
  return _react["default"].createElement(Container, null, _react["default"].createElement(_SimpleLogo["default"], null));
};

exports.simpleLogo = simpleLogo;
simpleLogo.story = {
  name: 'simple logo'
};