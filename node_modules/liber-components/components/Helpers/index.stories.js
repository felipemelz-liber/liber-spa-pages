"use strict";

require("core-js/modules/es6.object.define-property");

require("core-js/modules/web.dom.iterable");

require("core-js/modules/es6.array.iterator");

require("core-js/modules/es6.object.to-string");

require("core-js/modules/es6.string.iterator");

require("core-js/modules/es6.weak-map");

var _react = _interopRequireDefault(require("react"));

var _react2 = require("@storybook/react");

var _styledComponents = _interopRequireDefault(require("styled-components"));

var _InfoLabel = _interopRequireDefault(require("./InfoLabel"));

var _Tooltip = _interopRequireWildcard(require("./Tooltip"));

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function _getRequireWildcardCache() { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; if (obj != null) { var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var TooltipContent = _styledComponents["default"].div.withConfig({
  displayName: "indexstories__TooltipContent",
  componentId: "dk9aa4-0"
})(["width:100%;height:100%;display:flex;justify-content:center;align-items:center;padding:100px;box-sizing:border-box;"]);

var Content = _styledComponents["default"].div.withConfig({
  displayName: "indexstories__Content",
  componentId: "dk9aa4-1"
})(["width:128px;font-size:16px;"]);

var FixedTootlipContent = (0, _styledComponents["default"])(TooltipContent).withConfig({
  displayName: "indexstories__FixedTootlipContent",
  componentId: "dk9aa4-2"
})(["width:50%;height:100px;margin:100px;margin-left:200px;padding:0px;border:1px solid blue;"]);

var tooltipContentComponent = _react["default"].createElement(TooltipContent, null, "Conteudo");

(0, _react2.storiesOf)('Components 1.0|Helpers/Info Label', module).addParameters({
  jest: ['InfoLabel']
}).add('default', function () {
  return _react["default"].createElement(TooltipContent, null, _react["default"].createElement(_InfoLabel["default"], null));
}).add('with color', function () {
  return _react["default"].createElement(TooltipContent, null, _react["default"].createElement(_InfoLabel["default"], {
    color: "blue"
  }));
}).add('with label', function () {
  return _react["default"].createElement(TooltipContent, null, _react["default"].createElement(_InfoLabel["default"], {
    color: "blue",
    label: "Conteudo"
  }));
});
(0, _react2.storiesOf)('Components 1.0|Helpers/Tooltip', module).addParameters({
  jest: ['Tooltip']
}).add('default', function () {
  return _react["default"].createElement(TooltipContent, null, _react["default"].createElement(_Tooltip["default"], null));
}).add('with label', function () {
  return _react["default"].createElement(TooltipContent, null, _react["default"].createElement(_Tooltip["default"], {
    label: "Prazo de Vencimento"
  }, _react["default"].createElement(Content, null, "10 dias \xFAteis")));
});
(0, _react2.storiesOf)('Components 1.0|Helpers/Tooltip Box', module).addParameters({
  jest: ['TooltipBox']
}).add('default', function () {
  return _react["default"].createElement(_Tooltip.TooltipBox, {
    content: tooltipContentComponent
  }, _react["default"].createElement(TooltipContent, null, "Passe o mouse aqui!"));
}).add('default contentPosition = start', function () {
  return _react["default"].createElement(_Tooltip.TooltipBox, {
    contentPosition: "start",
    content: tooltipContentComponent
  }, _react["default"].createElement(TooltipContent, null, "Passe o mouse aqui!"));
}).add('default with contentPosition = middle', function () {
  return _react["default"].createElement(_Tooltip.TooltipBox, {
    contentPosition: "middle",
    content: tooltipContentComponent
  }, _react["default"].createElement(TooltipContent, null, "Passe o mouse aqui!"));
}).add('default contentPosition = end', function () {
  return _react["default"].createElement(_Tooltip.TooltipBox, {
    contentPosition: "end",
    content: tooltipContentComponent
  }, _react["default"].createElement(TooltipContent, null, "Passe o mouse aqui!"));
}).add('fixed', function () {
  return _react["default"].createElement(_Tooltip.TooltipBox, {
    fixed: true,
    content: tooltipContentComponent
  }, _react["default"].createElement(FixedTootlipContent, null, "Passe o mouse aqui!"));
}).add('fixed with contentPosition = start', function () {
  return _react["default"].createElement(_Tooltip.TooltipBox, {
    fixed: true,
    contentPosition: "start",
    content: tooltipContentComponent
  }, _react["default"].createElement(FixedTootlipContent, null, "Passe o mouse aqui!"));
}).add('fixed with contentPosition = middle', function () {
  return _react["default"].createElement(_Tooltip.TooltipBox, {
    fixed: true,
    contentPosition: "middle",
    content: tooltipContentComponent
  }, _react["default"].createElement(FixedTootlipContent, null, "Passe o mouse aqui!"));
}).add('fixed with contentPosition = end', function () {
  return _react["default"].createElement(_Tooltip.TooltipBox, {
    fixed: true,
    contentPosition: "end",
    content: tooltipContentComponent
  }, _react["default"].createElement(FixedTootlipContent, null, "Passe o mouse aqui!"));
}).add('fixed with contentPosition = start on bottom', function () {
  return _react["default"].createElement(_Tooltip.TooltipBox, {
    fixed: true,
    contentPosition: "start",
    mount: "bottom",
    content: tooltipContentComponent
  }, _react["default"].createElement(FixedTootlipContent, null, "Passe o mouse aqui!"));
});