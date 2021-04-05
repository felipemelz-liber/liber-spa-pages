"use strict";

require("core-js/modules/es6.object.define-property");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.withTooltipCustomIcon = exports.withTooltipOnLeft = exports.withTooltipOnBottom = exports.withTooltipOnRight = exports.withTooltipOnTop = exports.withTooltip = exports.defaultStory = exports["default"] = void 0;

var _react = _interopRequireDefault(require("react"));

var _styledComponents = _interopRequireDefault(require("styled-components"));

var _Icons = require("../Icons");

var _KeyValueDisplay = _interopRequireDefault(require("./KeyValueDisplay"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var Center = _styledComponents["default"].div.withConfig({
  displayName: "indexstories__Center",
  componentId: "sc-1j1hb07-0"
})(["width:100%;height:100vh;display:flex;justify-content:center;align-items:center;background-color:#fafdff;padding:64px;box-sizing:border-box;"]);

var Icon = (0, _styledComponents["default"])(_Icons.FaExclamationCircle).withConfig({
  displayName: "indexstories__Icon",
  componentId: "sc-1j1hb07-1"
})(["fill:#009dff;--size:16px;min-width:var(--size);min-height:var(--size);max-width:var(--size);max-height:var(--size);"]);
var _default = {
  title: 'Components 2.0|KeyValueDisplay',
  parameters: {
    jest: ['KeyValueDisplay']
  }
};
exports["default"] = _default;

var defaultStory = function defaultStory() {
  return _react["default"].createElement(Center, null, _react["default"].createElement(_KeyValueDisplay["default"], null));
};

exports.defaultStory = defaultStory;
defaultStory.story = {
  name: 'default'
};

var withTooltip = function withTooltip() {
  return _react["default"].createElement(Center, null, _react["default"].createElement(_KeyValueDisplay["default"], {
    tooltip: "Tooltip text",
    label: "lalala"
  }));
};

exports.withTooltip = withTooltip;
withTooltip.story = {
  name: 'with tooltip'
};

var withTooltipOnTop = function withTooltipOnTop() {
  return _react["default"].createElement(Center, null, _react["default"].createElement(_KeyValueDisplay["default"], {
    tooltip: "Tooltip text",
    tooltipDirection: "top"
  }));
};

exports.withTooltipOnTop = withTooltipOnTop;
withTooltipOnTop.story = {
  name: 'with tooltip on top'
};

var withTooltipOnRight = function withTooltipOnRight() {
  return _react["default"].createElement(Center, null, _react["default"].createElement(_KeyValueDisplay["default"], {
    tooltip: "Tooltip text",
    tooltipDirection: "right"
  }));
};

exports.withTooltipOnRight = withTooltipOnRight;
withTooltipOnRight.story = {
  name: 'with tooltip on right'
};

var withTooltipOnBottom = function withTooltipOnBottom() {
  return _react["default"].createElement(Center, null, _react["default"].createElement(_KeyValueDisplay["default"], {
    tooltip: "Tooltip text",
    tooltipDirection: "bottom"
  }));
};

exports.withTooltipOnBottom = withTooltipOnBottom;
withTooltipOnBottom.story = {
  name: 'with tooltip on bottom'
};

var withTooltipOnLeft = function withTooltipOnLeft() {
  return _react["default"].createElement(Center, null, _react["default"].createElement(_KeyValueDisplay["default"], {
    tooltip: "Tooltip text",
    tooltipDirection: "left"
  }));
};

exports.withTooltipOnLeft = withTooltipOnLeft;
withTooltipOnLeft.story = {
  name: 'with tooltip on left'
};

var withTooltipCustomIcon = function withTooltipCustomIcon() {
  return _react["default"].createElement(Center, null, _react["default"].createElement(_KeyValueDisplay["default"], {
    tooltip: "Tooltip text",
    tooltipIcon: _react["default"].createElement(Icon, null)
  }));
};

exports.withTooltipCustomIcon = withTooltipCustomIcon;
withTooltipCustomIcon.story = {
  name: 'with tooltip custom icon'
};