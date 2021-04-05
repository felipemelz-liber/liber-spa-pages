"use strict";

require("core-js/modules/es6.object.define-property");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.navBar = exports["default"] = void 0;

var _react = _interopRequireDefault(require("react"));

var _styledComponents = _interopRequireDefault(require("styled-components"));

var _NavBar = _interopRequireDefault(require("./NavBar"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var Viewport = _styledComponents["default"].div.withConfig({
  displayName: "indexstories__Viewport",
  componentId: "sc-99m15p-0"
})(["width:100vw;height:100vh;background-color:#fafdff;"]);

var _default = {
  title: 'Components 2.0|NavBar',
  parameters: {
    jest: ['NavBar']
  }
};
exports["default"] = _default;

var navBar = function navBar() {
  return _react["default"].createElement(Viewport, null, _react["default"].createElement(_NavBar["default"], {
    menu: {
      label: 'Nome do usuário',
      sublabel: 'Nome da empresa'
    }
  }));
};

exports.navBar = navBar;
navBar.story = {
  name: 'NavBar'
};