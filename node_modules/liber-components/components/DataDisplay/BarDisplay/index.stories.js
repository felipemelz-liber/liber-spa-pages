"use strict";

require("core-js/modules/es6.object.define-property");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.withSectors = exports.withPrefix = exports.withLabel = exports.defaultStory = exports["default"] = void 0;

var _react = _interopRequireDefault(require("react"));

var _styledComponents = _interopRequireDefault(require("styled-components"));

var _BarDisplay = _interopRequireDefault(require("./BarDisplay"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var Center = _styledComponents["default"].div.withConfig({
  displayName: "indexstories__Center",
  componentId: "b3aif3-0"
})(["width:100vw;height:100vh;display:flex;justify-content:center;align-items:center;"]);

var Box = _styledComponents["default"].div.withConfig({
  displayName: "indexstories__Box",
  componentId: "b3aif3-1"
})(["width:200px;"]);

var _default = {
  title: 'Components 1.0|DataDisplay/Bar Display',
  parameters: {
    jest: ['BarDisplay']
  }
};
exports["default"] = _default;

var defaultStory = function defaultStory() {
  return _react["default"].createElement(Center, null, _react["default"].createElement(Box, null, _react["default"].createElement(_BarDisplay["default"], null, "100.000,00")));
};

exports.defaultStory = defaultStory;
defaultStory.story = {
  name: 'default'
};

var withLabel = function withLabel() {
  return _react["default"].createElement(Center, null, _react["default"].createElement(Box, null, _react["default"].createElement(_BarDisplay["default"], {
    label: "Patrimônio"
  }, "100.000,00")));
};

exports.withLabel = withLabel;

var withPrefix = function withPrefix() {
  return _react["default"].createElement(Center, null, _react["default"].createElement(Box, null, _react["default"].createElement(_BarDisplay["default"], {
    label: "Patrimônio",
    prefix: "R$"
  }, "100.000,00")));
};

exports.withPrefix = withPrefix;

var withSectors = function withSectors() {
  return _react["default"].createElement(Center, null, _react["default"].createElement(Box, null, _react["default"].createElement(_BarDisplay["default"], {
    label: "Patrimônio",
    prefix: "R$",
    sectors: [{
      percentage: '100%',
      color: ['#2DE8BF', '#88f3e2']
    }]
  }, "100.000,00")));
};

exports.withSectors = withSectors;