"use strict";

require("core-js/modules/es6.object.define-property");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.withLabel = exports.withColor = exports.defaultStory = exports["default"] = void 0;

var _react = _interopRequireDefault(require("react"));

var _styledComponents = _interopRequireDefault(require("styled-components"));

var _InfoLabel = _interopRequireDefault(require("./InfoLabel"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var TooltipContent = _styledComponents["default"].div.withConfig({
  displayName: "indexstories__TooltipContent",
  componentId: "lph8nu-0"
})(["width:100%;height:100%;display:flex;justify-content:center;align-items:center;padding:100px;box-sizing:border-box;"]);

var _default = {
  title: 'Components 1.0|Helpers/Info Label',
  parameters: {
    jest: ['InfoLabel']
  }
};
exports["default"] = _default;

var defaultStory = function defaultStory() {
  return _react["default"].createElement(TooltipContent, null, _react["default"].createElement(_InfoLabel["default"], null));
};

exports.defaultStory = defaultStory;
defaultStory.story = {
  name: 'default'
};

var withColor = function withColor() {
  return _react["default"].createElement(TooltipContent, null, _react["default"].createElement(_InfoLabel["default"], {
    color: "blue"
  }));
};

exports.withColor = withColor;

var withLabel = function withLabel() {
  return _react["default"].createElement(TooltipContent, null, _react["default"].createElement(_InfoLabel["default"], {
    color: "blue",
    label: "Conteudo"
  }));
};

exports.withLabel = withLabel;