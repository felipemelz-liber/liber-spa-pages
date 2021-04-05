"use strict";

require("core-js/modules/es6.object.define-property");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.autoPosition = exports.customButton = exports.changingPosition = exports.defaultStory = exports["default"] = void 0;

var _react = _interopRequireDefault(require("react"));

var _styledComponents = _interopRequireDefault(require("styled-components"));

var _SimpleDropDown = _interopRequireDefault(require("./components/SimpleDropDown"));

var _Buttons = require("../Buttons");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var Center = _styledComponents["default"].div.withConfig({
  displayName: "simplestories__Center",
  componentId: "w8dza8-0"
})(["width:100%;height:100vh;display:flex;justify-content:center;align-items:center;background-color:#fafdff;padding:64px;box-sizing:border-box;& > div{position:relative;background-color:#fff;padding:4px 12px;border-radius:4px;}"]);

var _default = {
  title: 'Components 2.0|SimpleDropDown',
  parameters: {
    jest: ['SimpleDropDown']
  }
};
exports["default"] = _default;

var defaultStory = function defaultStory() {
  return _react["default"].createElement(Center, null, _react["default"].createElement("div", null, _react["default"].createElement(_SimpleDropDown["default"], {
    label: "label"
  }, "content")));
};

exports.defaultStory = defaultStory;
defaultStory.story = {
  name: 'default'
};

var changingPosition = function changingPosition() {
  return _react["default"].createElement(Center, null, _react["default"].createElement("div", null, _react["default"].createElement(_SimpleDropDown["default"], {
    label: "label",
    position: "bottom-center-left"
  }, "content")));
};

exports.changingPosition = changingPosition;
changingPosition.story = {
  name: 'changing position'
};

var customButton = function customButton() {
  return _react["default"].createElement(Center, null, _react["default"].createElement("div", null, _react["default"].createElement(_SimpleDropDown["default"], {
    customButton: _react["default"].createElement(_Buttons.Button, null, "o/")
  }, "content")));
};

exports.customButton = customButton;
customButton.story = {
  name: 'custom button'
};

var autoPosition = function autoPosition() {
  return _react["default"].createElement(Center, null, _react["default"].createElement("div", null, _react["default"].createElement(_SimpleDropDown["default"], {
    autoPosition: true
  }, "content")));
};

exports.autoPosition = autoPosition;