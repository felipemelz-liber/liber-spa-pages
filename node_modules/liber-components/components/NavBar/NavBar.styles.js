"use strict";

require("core-js/modules/es6.object.define-property");

require("core-js/modules/web.dom.iterable");

require("core-js/modules/es6.array.iterator");

require("core-js/modules/es6.object.to-string");

require("core-js/modules/es6.string.iterator");

require("core-js/modules/es6.weak-map");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Sandwich = exports.Label = exports.Menu = exports.Logo = exports.Content = exports.Nav = void 0;

var _styledComponents = _interopRequireWildcard(require("styled-components"));

var _Logo = require("../Logo");

var _Icons = require("../Icons");

var _Themes = require("../Themes");

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function _getRequireWildcardCache() { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; if (obj != null) { var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

var getTheme = function getTheme(value, fallback) {
  return (0, _styledComponents.css)(["", ""], function (props) {
    return (0, _Themes.handleThemeFromObject)(props.theme, value, fallback);
  });
};

var Nav = _styledComponents["default"].nav.withConfig({
  displayName: "NavBarstyles__Nav",
  componentId: "sc-1m4mju1-0"
})(["width:100vw;max-width:100%;min-height:96px;max-height:96px;background-color:", ";margin-bottom:12px;display:flex;justify-content:center;align-items:center;"], getTheme('colors.white', '#ffffff'));

exports.Nav = Nav;

var Content = _styledComponents["default"].div.withConfig({
  displayName: "NavBarstyles__Content",
  componentId: "sc-1m4mju1-1"
})(["height:100%;width:", ";max-width:100%;display:flex;justify-content:flex-start;align-items:center;"], function (props) {
  return props.width || '1280px';
});

exports.Content = Content;
var Logo = (0, _styledComponents["default"])(_Logo.Logo).withConfig({
  displayName: "NavBarstyles__Logo",
  componentId: "sc-1m4mju1-2"
})(["--size:96px;min-width:var(--size);min-height:var(--size);max-width:var(--size);max-height:var(--size);"]);
exports.Logo = Logo;

var Menu = _styledComponents["default"].div.withConfig({
  displayName: "NavBarstyles__Menu",
  componentId: "sc-1m4mju1-3"
})(["margin-left:auto;margin-right:32px;display:flex;justify-content:center;align-items:center;position:relative;"]);

exports.Menu = Menu;

var Label = _styledComponents["default"].ul.withConfig({
  displayName: "NavBarstyles__Label",
  componentId: "sc-1m4mju1-4"
})(["font-family:Roboto;font-size:16px;font-weight:500;line-height:22px;text-align:right;color:#405f71;margin:0px;list-style-type:none;& > li > svg{fill:#798e9b;}& > li > span{font-family:Roboto;font-size:12px;line-height:17px;letter-spacing:0px;text-align:right;color:#b6c2c9;}"]);

exports.Label = Label;
var Sandwich = (0, _styledComponents["default"])(_Icons.MdMenu).withConfig({
  displayName: "NavBarstyles__Sandwich",
  componentId: "sc-1m4mju1-5"
})(["--size:32px;min-width:var(--size);min-height:var(--size);max-width:var(--size);max-height:var(--size);fill:#798e9b;"]);
exports.Sandwich = Sandwich;