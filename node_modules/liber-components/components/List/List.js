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
exports.CheckboxList = exports.ListFooter = exports.ListSubItemSelection = exports.ListSubItem = exports.ListItem = exports.ListRow = exports.ListHeader = exports.List = void 0;

var _styledComponents = _interopRequireWildcard(require("styled-components"));

var _Themes = require("../Themes");

var _SelectionTable = require("../Table/components/SelectionTable");

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function _getRequireWildcardCache() { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; if (obj != null) { var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

var subhead = (0, _styledComponents.css)(["font-size:16px;font-weight:500;line-height:22px;"]);
var body = (0, _styledComponents.css)(["font-size:16px;font-weight:400;line-height:22px;"]);

var List = _styledComponents["default"].div.withConfig({
  displayName: "List",
  componentId: "ns6omh-0"
})(["width:", ";display:inline-block;background-color:", ";"], function (props) {
  return props.width;
}, function (props) {
  return (0, _Themes.handleThemeFromObject)(props.theme, 'colors.white', '#ffffff');
});

exports.List = List;

var ListHeader = _styledComponents["default"].div.withConfig({
  displayName: "List__ListHeader",
  componentId: "ns6omh-1"
})(["", ";font-family:", ";color:", ";padding:15px 24px;"], function (props) {
  return (0, _Themes.handleThemeFromObject)(props.theme, 'typography.subhead', subhead);
}, function (props) {
  return (0, _Themes.handleThemeFromObject)(props.theme, 'fontFamily', 'Roboto');
}, function (props) {
  return (0, _Themes.handleThemeFromObject)(props.theme, 'colors.darkText', '#405f71');
});

exports.ListHeader = ListHeader;

var ListRow = _styledComponents["default"].div.withConfig({
  displayName: "List__ListRow",
  componentId: "ns6omh-2"
})(["border-top:1px solid ", ";padding:15px 24px;margin:0px;"], function (props) {
  return (0, _Themes.handleThemeFromObject)(props.theme, 'colors.border', '#e8ebee');
});

exports.ListRow = ListRow;

var ListItem = _styledComponents["default"].div.withConfig({
  displayName: "List__ListItem",
  componentId: "ns6omh-3"
})(["", ";font-family:", ";color:", ";"], function (props) {
  return (0, _Themes.handleThemeFromObject)(props.theme, 'typography.body', body);
}, function (props) {
  return (0, _Themes.handleThemeFromObject)(props.theme, 'fontFamily', 'Roboto');
}, function (props) {
  return (0, _Themes.handleThemeFromObject)(props.theme, 'colors.darkText70', '#798e9b');
});

exports.ListItem = ListItem;

var ListSubItem = _styledComponents["default"].div.withConfig({
  displayName: "List__ListSubItem",
  componentId: "ns6omh-4"
})(["padding-top:4px;font-family:", ";font-size:", ";color:", ";"], function (props) {
  return (0, _Themes.handleThemeFromObject)(props.theme, 'fontFamily', 'Roboto');
}, function (props) {
  return (0, _Themes.handleThemeFromObject)(props.theme, 'fontSizes.mobileLarge', '14px');
}, function (props) {
  return (0, _Themes.handleThemeFromObject)(props.theme, 'colors.darkText38', '#b6c2c9');
});

exports.ListSubItem = ListSubItem;
var ListSubItemSelection = (0, _styledComponents["default"])(ListSubItem).withConfig({
  displayName: "List__ListSubItemSelection",
  componentId: "ns6omh-5"
})(["padding-left:39px;"]);
exports.ListSubItemSelection = ListSubItemSelection;

var ListFooter = _styledComponents["default"].div.withConfig({
  displayName: "List__ListFooter",
  componentId: "ns6omh-6"
})(["", ";font-family:", ";color:", ";padding:15px 24px;border-top:1px solid ", ";"], function (props) {
  return (0, _Themes.handleThemeFromObject)(props.theme, 'typography.subhead', subhead);
}, function (props) {
  return (0, _Themes.handleThemeFromObject)(props.theme, 'fontFamily', 'Roboto');
}, function (props) {
  return (0, _Themes.handleThemeFromObject)(props.theme, 'colors.darkText', '#405f71');
}, function (props) {
  return (0, _Themes.handleThemeFromObject)(props.theme, 'colors.border', '#e8ebee');
});

exports.ListFooter = ListFooter;
var CheckboxList = (0, _styledComponents["default"])(_SelectionTable.CheckboxTable).withConfig({
  displayName: "List__CheckboxList",
  componentId: "ns6omh-7"
})(["margin-top:0px;span{padding:0px;padding-right:39px;}"]);
exports.CheckboxList = CheckboxList;