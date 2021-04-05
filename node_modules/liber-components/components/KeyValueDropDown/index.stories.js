"use strict";

require("core-js/modules/es6.object.define-property");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.defaultStory = exports["default"] = void 0;

var _react = _interopRequireDefault(require("react"));

var _styledComponents = _interopRequireDefault(require("styled-components"));

var _KeyValueDropDown = _interopRequireDefault(require("./KeyValueDropDown"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var Center = _styledComponents["default"].div.withConfig({
  displayName: "indexstories__Center",
  componentId: "a67ij4-0"
})(["width:100%;height:100vh;display:flex;justify-content:center;align-items:center;background-color:#fafdff;padding:64px;box-sizing:border-box;"]);

var _default = {
  title: 'Components 2.0|KeyValueDropDown',
  parameters: {
    jest: ['KeyValueDropDown']
  }
};
exports["default"] = _default;

var defaultStory = function defaultStory() {
  return _react["default"].createElement(Center, null, _react["default"].createElement(_KeyValueDropDown["default"], {
    keyLabel: "key",
    label: "label"
  }, "Content"));
};

exports.defaultStory = defaultStory;
defaultStory.story = {
  name: 'default'
};