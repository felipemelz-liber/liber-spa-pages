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
exports.Content = exports.Tab = void 0;

var _styledComponents = _interopRequireWildcard(require("styled-components"));

var _SimpleTab = require("../SimpleTab/SimpleTab.styles");

var _Themes = require("../../../../Themes");

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function _getRequireWildcardCache() { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; if (obj != null) { var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

var getTheme = function getTheme(key, fallback) {
  return (0, _styledComponents.css)(["", ""], function (_ref) {
    var theme = _ref.theme;
    return (0, _Themes.handleThemeFromObject)(theme, key, fallback);
  });
};

var Tab = (0, _styledComponents["default"])(_SimpleTab.CenterTab).withConfig({
  displayName: "DropDownTabstyles__Tab",
  componentId: "sc-1d7lgdx-0"
})(["position:relative;", " &:after{content:'';position:absolute;top:calc(50% - 9px);right:11px;width:0px;height:0px;border-top:5px solid ", ";border-right:5px solid transparent;border-bottom:5px solid transparent;border-left:5px solid transparent;transform:scale(0.75);margin:7px;}"], function (_ref2) {
  var minWidth = _ref2.minWidth;
  return minWidth && (0, _styledComponents.css)(["min-width:", "px;"], minWidth);
}, getTheme('colors.petroleum', '#4b6f85'));
exports.Tab = Tab;

var toogleView = function toogleView(_ref3) {
  var open = _ref3.open;

  if (open) {
    return (0, _styledComponents.css)(["opacity:1;transform:translateY(0);"]);
  }

  return (0, _styledComponents.css)(["opacity:0;transform:translateY(-15px);pointer-events:none;"]);
};

var Content = _styledComponents["default"].div.withConfig({
  displayName: "DropDownTabstyles__Content",
  componentId: "sc-1d7lgdx-1"
})(["position:absolute;top:calc(100% + 1px);left:-1px;border:solid 1px ", ";border-top:0px;border-radius:0px 0px 4px 4px;background-color:#fff;width:100%;transition:all 250ms cubic-bezier(0.23,1,0.32,1) 0ms;z-index:300;", " & > ", "{border:0px;background-color:transparent;width:100%;height:36px;}& ", "{pointer-events:none;}"], function (_ref4) {
  var strongBorder = _ref4.strongBorder;
  return strongBorder ? getTheme('colors.darkBorder', '#cdd7df') : getTheme('colors.grey5', '#ecf0f3');
}, toogleView, _SimpleTab.CenterTab, _SimpleTab.ChildContainer);

exports.Content = Content;