"use strict";

require("core-js/modules/es6.object.define-property");

require("core-js/modules/es6.string.fixed");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.fixedWithContentPositionStartOnBottom = exports.fixedWithContentPositionEnd = exports.fixedWithContentPositionMiddle = exports.fixedWithContentPositionStart = exports.fixed = exports.defaultContentPositionEnd = exports.defaultWithContentPositionMiddle = exports.defaultContentPositionStart = exports.defaultStory = exports["default"] = void 0;

var _react = _interopRequireDefault(require("react"));

var _styledComponents = _interopRequireDefault(require("styled-components"));

var _TooltipBox = _interopRequireDefault(require("./TooltipBox"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var TooltipContent = _styledComponents["default"].div.withConfig({
  displayName: "tooltipboxstories__TooltipContent",
  componentId: "sc-1pdmkfn-0"
})(["width:100%;height:100%;display:flex;justify-content:center;align-items:center;padding:100px;box-sizing:border-box;"]);

var FixedTootlipContent = (0, _styledComponents["default"])(TooltipContent).withConfig({
  displayName: "tooltipboxstories__FixedTootlipContent",
  componentId: "sc-1pdmkfn-1"
})(["width:50%;height:100px;margin:100px;margin-left:200px;padding:0px;border:1px solid blue;"]);

var tooltipContentComponent = _react["default"].createElement(TooltipContent, null, "Conteudo");

var _default = {
  title: 'Components 1.0|Helpers/Tooltip Box',
  parameters: {
    jest: ['TooltipBox']
  }
};
exports["default"] = _default;

var defaultStory = function defaultStory() {
  return _react["default"].createElement(_TooltipBox["default"], {
    content: tooltipContentComponent
  }, _react["default"].createElement(TooltipContent, null, "Passe o mouse aqui!"));
};

exports.defaultStory = defaultStory;
defaultStory.story = {
  name: 'default'
};

var defaultContentPositionStart = function defaultContentPositionStart() {
  return _react["default"].createElement(_TooltipBox["default"], {
    contentPosition: "start",
    content: tooltipContentComponent
  }, _react["default"].createElement(TooltipContent, null, "Passe o mouse aqui!"));
};

exports.defaultContentPositionStart = defaultContentPositionStart;
defaultContentPositionStart.story = {
  name: 'default contentPosition = start'
};

var defaultWithContentPositionMiddle = function defaultWithContentPositionMiddle() {
  return _react["default"].createElement(_TooltipBox["default"], {
    contentPosition: "middle",
    content: tooltipContentComponent
  }, _react["default"].createElement(TooltipContent, null, "Passe o mouse aqui!"));
};

exports.defaultWithContentPositionMiddle = defaultWithContentPositionMiddle;
defaultWithContentPositionMiddle.story = {
  name: 'default with contentPosition = middle'
};

var defaultContentPositionEnd = function defaultContentPositionEnd() {
  return _react["default"].createElement(_TooltipBox["default"], {
    contentPosition: "end",
    content: tooltipContentComponent
  }, _react["default"].createElement(TooltipContent, null, "Passe o mouse aqui!"));
};

exports.defaultContentPositionEnd = defaultContentPositionEnd;
defaultContentPositionEnd.story = {
  name: 'default contentPosition = end'
};

var fixed = function fixed() {
  return _react["default"].createElement(_TooltipBox["default"], {
    fixed: true,
    content: tooltipContentComponent
  }, _react["default"].createElement(FixedTootlipContent, null, "Passe o mouse aqui!"));
};

exports.fixed = fixed;

var fixedWithContentPositionStart = function fixedWithContentPositionStart() {
  return _react["default"].createElement(_TooltipBox["default"], {
    fixed: true,
    contentPosition: "start",
    content: tooltipContentComponent
  }, _react["default"].createElement(FixedTootlipContent, null, "Passe o mouse aqui!"));
};

exports.fixedWithContentPositionStart = fixedWithContentPositionStart;
fixedWithContentPositionStart.story = {
  name: 'fixed with contentPosition = start'
};

var fixedWithContentPositionMiddle = function fixedWithContentPositionMiddle() {
  return _react["default"].createElement(_TooltipBox["default"], {
    fixed: true,
    contentPosition: "middle",
    content: tooltipContentComponent
  }, _react["default"].createElement(FixedTootlipContent, null, "Passe o mouse aqui!"));
};

exports.fixedWithContentPositionMiddle = fixedWithContentPositionMiddle;
fixedWithContentPositionMiddle.story = {
  name: 'fixed with contentPosition = middle'
};

var fixedWithContentPositionEnd = function fixedWithContentPositionEnd() {
  return _react["default"].createElement(_TooltipBox["default"], {
    fixed: true,
    contentPosition: "end",
    content: tooltipContentComponent
  }, _react["default"].createElement(FixedTootlipContent, null, "Passe o mouse aqui!"));
};

exports.fixedWithContentPositionEnd = fixedWithContentPositionEnd;
fixedWithContentPositionEnd.story = {
  name: 'fixed with contentPosition = end'
};

var fixedWithContentPositionStartOnBottom = function fixedWithContentPositionStartOnBottom() {
  return _react["default"].createElement(_TooltipBox["default"], {
    fixed: true,
    contentPosition: "start",
    mount: "bottom",
    content: tooltipContentComponent
  }, _react["default"].createElement(FixedTootlipContent, null, "Passe o mouse aqui!"));
};

exports.fixedWithContentPositionStartOnBottom = fixedWithContentPositionStartOnBottom;
fixedWithContentPositionStartOnBottom.story = {
  name: 'fixed with contentPosition = start on bottom'
};