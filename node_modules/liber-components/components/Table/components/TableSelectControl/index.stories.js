"use strict";

require("core-js/modules/es6.object.define-property");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.customizedSelectControl = exports.multipleType = exports.singleType = exports.emptyType = exports["default"] = void 0;

var _react = _interopRequireDefault(require("react"));

var _styledComponents = _interopRequireDefault(require("styled-components"));

var _addonActions = require("@storybook/addon-actions");

var _TableSelectControl = _interopRequireDefault(require("./TableSelectControl"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var Container = _styledComponents["default"].div.withConfig({
  displayName: "indexstories__Container",
  componentId: "sc-12crim1-0"
})(["margin:20px;"]);

var CustomizedSelectControl = (0, _styledComponents["default"])(_TableSelectControl["default"]).withConfig({
  displayName: "indexstories__CustomizedSelectControl",
  componentId: "sc-12crim1-1"
})(["width:auto;"]);
var _default = {
  title: 'Components 2.0|Table/Table Select Control'
};
exports["default"] = _default;

var emptyType = function emptyType() {
  return _react["default"].createElement(Container, null, _react["default"].createElement(_TableSelectControl["default"], {
    selectedTitles: 0,
    totalSelectedTitles: "0,00",
    onDeselect: (0, _addonActions.action)('clicked'),
    type: "empty"
  }));
};

exports.emptyType = emptyType;

var singleType = function singleType() {
  return _react["default"].createElement(Container, null, _react["default"].createElement(_TableSelectControl["default"], {
    selectedTitles: 1,
    totalSelectedTitles: "1.234,56",
    onDeselect: (0, _addonActions.action)('clicked'),
    type: "single"
  }));
};

exports.singleType = singleType;

var multipleType = function multipleType() {
  return _react["default"].createElement(Container, null, _react["default"].createElement(_TableSelectControl["default"], {
    selectedTitles: 15,
    totalSelectedTitles: "123.478,10",
    type: "multiple",
    onDeselect: (0, _addonActions.action)('clicked')
  }));
};

exports.multipleType = multipleType;

var customizedSelectControl = function customizedSelectControl() {
  return _react["default"].createElement(Container, null, _react["default"].createElement(CustomizedSelectControl, {
    selectedTitles: 15,
    totalSelectedTitles: "123.478,10",
    type: "multiple",
    onDeselect: (0, _addonActions.action)('clicked')
  }));
};

exports.customizedSelectControl = customizedSelectControl;