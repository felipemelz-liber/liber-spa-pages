"use strict";

require("core-js/modules/es6.object.define-property");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Text = exports.Title = void 0;

var _styledComponents = _interopRequireDefault(require("styled-components"));

var _Themes = require("../Themes");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var Title = _styledComponents["default"].div.withConfig({
  displayName: "Typography__Title",
  componentId: "sc-17kgwpd-0"
})(["font-family:", ";font-size:", ";line-height:", ";color:", ";font-weight:bold;"], (0, _Themes.getFontFamily)('title'), (0, _Themes.getFontSize)('', 'title'), (0, _Themes.getLineHeight)('', 'title'), (0, _Themes.getTypographyColor)('title'));

exports.Title = Title;

var Text = _styledComponents["default"].div.withConfig({
  displayName: "Typography__Text",
  componentId: "sc-17kgwpd-1"
})(["font-family:", ";font-size:", ";line-height:", ";color:", ";font-weight:normal;"], (0, _Themes.getFontFamily)(), (0, _Themes.getFontSize)(), (0, _Themes.getLineHeight)(), (0, _Themes.getTypographyColor)());

exports.Text = Text;