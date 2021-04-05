"use strict";

require("core-js/modules/es6.object.define-property");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.defaultStory = exports["default"] = void 0;

var _react = _interopRequireDefault(require("react"));

var _styledComponents = _interopRequireDefault(require("styled-components"));

var _Inputs = require("../Inputs");

var _Tags = require("../../Tags");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var Center = _styledComponents["default"].div.withConfig({
  displayName: "simpleselectstories__Center",
  componentId: "sc-1951dc0-0"
})(["width:100%;height:100vh;display:flex;justify-content:center;align-items:center;background-color:#fafdff;padding:64px;box-sizing:border-box;"]);

var _default = {
  title: 'Components 2.0|Input/SimpleSelect',
  parameters: {
    jest: ['SimpleSelect']
  }
};
exports["default"] = _default;

var defaultStory = function defaultStory() {
  return _react["default"].createElement(Center, null, _react["default"].createElement(_Inputs.SimpleSelect, null, _react["default"].createElement("option", null, "10"), _react["default"].createElement("option", null, "25"), _react["default"].createElement("option", null, "50"), _react["default"].createElement("option", null, "100")));
};

exports.defaultStory = defaultStory;
defaultStory.story = {
  name: 'default'
};