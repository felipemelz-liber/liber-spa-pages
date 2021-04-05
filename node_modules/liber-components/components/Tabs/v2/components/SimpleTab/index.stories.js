"use strict";

require("core-js/modules/es6.object.define-property");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.left = exports.center = exports["default"] = void 0;

var _react = _interopRequireDefault(require("react"));

var _styledComponents = _interopRequireDefault(require("styled-components"));

var _tabsComponents = require("../../../tabsComponents");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var Container = _styledComponents["default"].div.withConfig({
  displayName: "indexstories__Container",
  componentId: "sc-13f6c6e-0"
})(["margin:30px;"]);

var _default = {
  title: 'Components 2.0|SimpleTabs',
  parameters: {
    jest: ['SimpleTabs']
  }
};
exports["default"] = _default;

var center = function center() {
  return _react["default"].createElement(Container, null, _react["default"].createElement(_tabsComponents.SimpleTabs, null, _react["default"].createElement(_tabsComponents.SimpleTab, {
    href: "#"
  }, "Todos"), _react["default"].createElement(_tabsComponents.SimpleTab, {
    href: "#",
    tooltip: "tooltip",
    active: true
  }, "Dispon\xEDveis"), _react["default"].createElement(_tabsComponents.SimpleTab, {
    href: "#",
    disabled: true
  }, "Em Negocia\xE7\xE3o")));
};

exports.center = center;

var left = function left() {
  return _react["default"].createElement(Container, null, _react["default"].createElement(_tabsComponents.SimpleTabs, {
    left: true
  }, _react["default"].createElement(_tabsComponents.SimpleTab, {
    href: "#",
    left: true,
    active: true
  }, "Todos"), _react["default"].createElement(_tabsComponents.SimpleTab, {
    href: "#",
    left: true,
    tooltip: "tooltip"
  }, "Dispon\xEDveis"), _react["default"].createElement(_tabsComponents.SimpleTab, {
    href: "#",
    left: true,
    disabled: true
  }, "Em Negocia\xE7\xE3o")));
};

exports.left = left;