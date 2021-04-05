"use strict";

require("core-js/modules/es6.object.define-property");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.defaultStory = exports["default"] = void 0;

var _react = _interopRequireDefault(require("react"));

var _styledComponents = _interopRequireDefault(require("styled-components"));

var _tabsComponents = require("../tabsComponents");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var TabLabel = _styledComponents["default"].div.withConfig({
  displayName: "indexstories__TabLabel",
  componentId: "sc-1fyaeh7-0"
})(["& > div{padding:4px;}"]);

var Container = _styledComponents["default"].div.withConfig({
  displayName: "indexstories__Container",
  componentId: "sc-1fyaeh7-1"
})(["margin:30px;"]);

var _default = {
  title: 'Components 1.0|Tabs',
  parameters: {
    jest: ['Tabs']
  }
};
exports["default"] = _default;

var defaultStory = function defaultStory() {
  return _react["default"].createElement(Container, null, _react["default"].createElement(_tabsComponents.Tabs, null, _react["default"].createElement(_tabsComponents.TabHeader, null, function (labels) {
    return _react["default"].createElement(TabLabel, null, labels);
  }), _react["default"].createElement(_tabsComponents.Tab, {
    label: "Todos"
  }, "Todos"), _react["default"].createElement(_tabsComponents.Tab, {
    label: "Disponível"
  }, "Dispon\xEDvel"), _react["default"].createElement(_tabsComponents.Tab, {
    label: "Em Negociação"
  }, "Em Negocia\xE7\xE3o"), _react["default"].createElement(_tabsComponents.Tab, {
    label: "Em Negociação"
  }, "Em Negocia\xE7\xE3o"), _react["default"].createElement(_tabsComponents.Tab, {
    label: "Antecipados"
  }, "Antecipados"), _react["default"].createElement(_tabsComponents.Tab, {
    label: "Vencidos"
  }, "Vencidos")));
};

exports.defaultStory = defaultStory;
defaultStory.story = {
  name: 'default'
};