"use strict";

require("core-js/modules/es6.object.define-property");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.withLabel = exports.defaultStory = exports["default"] = void 0;

var _react = _interopRequireDefault(require("react"));

var _styledComponents = _interopRequireDefault(require("styled-components"));

var _Tooltip = _interopRequireDefault(require("./Tooltip"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var TooltipContent = _styledComponents["default"].div.withConfig({
  displayName: "tooltipstories__TooltipContent",
  componentId: "sc-2lfk0t-0"
})(["width:100%;height:100%;display:flex;justify-content:center;align-items:center;padding:100px;box-sizing:border-box;"]);

var Content = _styledComponents["default"].div.withConfig({
  displayName: "tooltipstories__Content",
  componentId: "sc-2lfk0t-1"
})(["width:128px;font-size:16px;"]);

var _default = {
  title: 'Components 1.0|Helpers/Tooltip',
  parameters: {
    jest: ['Tooltip']
  }
};
exports["default"] = _default;

var defaultStory = function defaultStory() {
  return _react["default"].createElement(TooltipContent, null, _react["default"].createElement(_Tooltip["default"], null));
};

exports.defaultStory = defaultStory;
defaultStory.story = {
  name: 'default'
};

var withLabel = function withLabel() {
  return _react["default"].createElement(TooltipContent, null, _react["default"].createElement(_Tooltip["default"], {
    label: "Prazo de Vencimento"
  }, _react["default"].createElement(Content, null, "10 dias \xFAteis")));
};

exports.withLabel = withLabel;