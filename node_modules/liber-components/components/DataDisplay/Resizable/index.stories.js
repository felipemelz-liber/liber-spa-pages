"use strict";

require("core-js/modules/es6.object.define-property");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.defaultStory = exports["default"] = void 0;

var _react = _interopRequireDefault(require("react"));

var _styledComponents = _interopRequireDefault(require("styled-components"));

var _Resizable = _interopRequireDefault(require("./Resizable"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var Center = _styledComponents["default"].div.withConfig({
  displayName: "indexstories__Center",
  componentId: "sc-1v89syb-0"
})(["width:100vw;height:100vh;display:flex;justify-content:center;align-items:center;"]);

var Box = _styledComponents["default"].div.withConfig({
  displayName: "indexstories__Box",
  componentId: "sc-1v89syb-1"
})(["width:200px;"]);

var _default = {
  title: 'Components 1.0|DataDisplay/Resizable',
  parameters: {
    jest: ['Resizable']
  }
};
exports["default"] = _default;

var defaultStory = function defaultStory() {
  return _react["default"].createElement(Center, null, _react["default"].createElement(Box, null, _react["default"].createElement(_Resizable["default"], null, 10)));
};

exports.defaultStory = defaultStory;
defaultStory.story = {
  name: 'default'
};