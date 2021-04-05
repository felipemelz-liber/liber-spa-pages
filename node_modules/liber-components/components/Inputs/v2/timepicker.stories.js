"use strict";

require("core-js/modules/es6.object.define-property");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.defaultStory = exports["default"] = void 0;

var _react = _interopRequireDefault(require("react"));

var _addonActions = require("@storybook/addon-actions");

var _styledComponents = _interopRequireDefault(require("styled-components"));

var _Inputs = require("../Inputs");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var Center = _styledComponents["default"].div.withConfig({
  displayName: "timepickerstories__Center",
  componentId: "gjk49l-0"
})(["width:100%;height:100vh;display:flex;justify-content:center;align-items:center;background-color:#fafdff;padding:64px;box-sizing:border-box;"]);

var _default = {
  title: 'Components 2.0|Input/TimePicker',
  parameters: {
    jest: ['TimePicker']
  }
};
exports["default"] = _default;

var defaultStory = function defaultStory() {
  return _react["default"].createElement(Center, null, _react["default"].createElement(_Inputs.TimePicker, {
    label: "Time",
    onChange: (0, _addonActions.action)('onChange')
  }));
};

exports.defaultStory = defaultStory;
defaultStory.story = {
  name: 'default'
};