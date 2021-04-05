"use strict";

require("core-js/modules/es6.object.define-property");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.withLoop = exports.defaultStory = exports["default"] = void 0;

var _react = _interopRequireDefault(require("react"));

var _styledComponents = _interopRequireDefault(require("styled-components"));

var _Bunny = _interopRequireDefault(require("./Bunny"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var Container = _styledComponents["default"].div.withConfig({
  displayName: "indexstories__Container",
  componentId: "sc-14k83y1-0"
})(["width:240px;height:240px;"]);

var _default = {
  title: 'UI|Loading/Bunny',
  parameters: {
    jest: ['Bunny']
  }
};
exports["default"] = _default;

var defaultStory = function defaultStory() {
  return _react["default"].createElement(Container, null, _react["default"].createElement(_Bunny["default"], null));
};

exports.defaultStory = defaultStory;
defaultStory.story = {
  name: 'default'
};

var withLoop = function withLoop() {
  return _react["default"].createElement(Container, null, _react["default"].createElement(_Bunny["default"], {
    loop: true
  }));
};

exports.withLoop = withLoop;
withLoop.story = {
  name: 'with loop'
};