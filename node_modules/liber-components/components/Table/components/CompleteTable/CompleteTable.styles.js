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
exports.CancelIcon = exports.DefaultEmptyState = exports.PaginationContainer = exports.Checkbox = exports.DropDownContentRow = exports.DropDownContent = exports.DropDownButton = exports.MoreVertButtonContainer = exports.MoreVertIcon = exports.ActionsCell = exports.ContentRow = exports.CheckboxCell = exports.TableCell = exports.RowFreeWidth = exports.Row = exports.Table = exports.FilterContainer = exports.StickyContainer = void 0;

var _styledComponents = _interopRequireWildcard(require("styled-components"));

var _StickyBar = _interopRequireDefault(require("../../../StickyBar/StickyBar"));

var _Themes = require("../../../Themes");

var _SelectionTable = require("../SelectionTable/SelectionTable");

var _Icons = require("../../../Icons");

var _Buttons = require("../../../Buttons");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function _getRequireWildcardCache() { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; if (obj != null) { var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

var StickyContainer = (0, _styledComponents["default"])(_StickyBar["default"]).withConfig({
  displayName: "CompleteTablestyles__StickyContainer",
  componentId: "ihsn40-0"
})(["position:sticky;top:0px;z-index:200;background-color:#fff;"]);
exports.StickyContainer = StickyContainer;

var FilterContainer = _styledComponents["default"].div.withConfig({
  displayName: "CompleteTablestyles__FilterContainer",
  componentId: "ihsn40-1"
})(["padding:16px;display:flex;align-items:center;", " ", " ", ""], function (_ref) {
  var theme = _ref.theme;
  return (0, _styledComponents.css)(["border:1px solid ", ";"], (0, _Themes.handleThemeFromObject)(theme, 'colors.darkBorder', '#cdd7df'));
}, function (_ref2) {
  var _ref2$borderTop = _ref2.borderTop,
      borderTop = _ref2$borderTop === void 0 ? true : _ref2$borderTop;
  return borderTop ? (0, _styledComponents.css)(["border-top-right-radius:4px;border-top-left-radius:4px;"]) : (0, _styledComponents.css)(["border-top:none;"]);
}, function (_ref3) {
  var borderBottom = _ref3.borderBottom;
  return borderBottom ? null : (0, _styledComponents.css)(["border-bottom:none;"]);
});

exports.FilterContainer = FilterContainer;
var Table = (0, _styledComponents["default"])(_SelectionTable.SelectionTable).withConfig({
  displayName: "CompleteTablestyles__Table",
  componentId: "ihsn40-2"
})(["width:100%;"]);
exports.Table = Table;
var Row = (0, _styledComponents["default"])(_SelectionTable.SelectionTableRow).withConfig({
  displayName: "CompleteTablestyles__Row",
  componentId: "ihsn40-3"
})(["display:flex;width:100%;align-items:flex-start;justify-content:space-between;&:first-of-type{border-top:none;}", " &{&:hover{background-color:", ";}}", ""], _SelectionTable.SelectionTableBody, function (_ref4) {
  var hasSelection = _ref4.hasSelection;
  return hasSelection ? '#f4f5f7' : 'transparent';
}, function (_ref5) {
  var selected = _ref5.selected;
  return selected && 'background-color: #f4f5f7; font-weight: 500;';
});
exports.Row = Row;

var RowFreeWidth = _styledComponents["default"].div.withConfig({
  displayName: "CompleteTablestyles__RowFreeWidth",
  componentId: "ihsn40-4"
})(["height:100%;width:", "%;display:flex;align-items:flex-start;justify-content:space-between;"], function (_ref6) {
  var percentWidth = _ref6.percentWidth;
  return percentWidth || '100';
});

exports.RowFreeWidth = RowFreeWidth;
var TableCell = (0, _styledComponents["default"])(_SelectionTable.SelectionTableRowColumn).withConfig({
  displayName: "CompleteTablestyles__TableCell",
  componentId: "ihsn40-5"
})(["display:flex;height:100%;align-items:center;min-height:unset;min-width:50px;padding:13px 8px;", ""], function (_ref7) {
  var align = _ref7.align;

  switch (align) {
    case 'right':
      return 'justify-content: flex-end;';

    case 'left':
      return 'justify-content: flex-start;';

    case 'center':
      return 'justify-content: center;';

    default:
      return 'justify-content: flex-start;';
  }
});
exports.TableCell = TableCell;
var CheckboxCell = (0, _styledComponents["default"])(TableCell).withConfig({
  displayName: "CompleteTablestyles__CheckboxCell",
  componentId: "ihsn40-6"
})(["padding:13px 8px;"]);
exports.CheckboxCell = CheckboxCell;
var ContentRow = (0, _styledComponents["default"])(TableCell).withConfig({
  displayName: "CompleteTablestyles__ContentRow",
  componentId: "ihsn40-7"
})(["padding:0px;"]);
exports.ContentRow = ContentRow;
var ActionsCell = (0, _styledComponents["default"])(TableCell).withConfig({
  displayName: "CompleteTablestyles__ActionsCell",
  componentId: "ihsn40-8"
})(["padding:5px 8px;"]);
exports.ActionsCell = ActionsCell;
var MoreVertIcon = (0, _styledComponents["default"])(_Icons.MoreVert).withConfig({
  displayName: "CompleteTablestyles__MoreVertIcon",
  componentId: "ihsn40-9"
})(["width:16px;height:16px;"]);
exports.MoreVertIcon = MoreVertIcon;

var MoreVertButtonContainer = _styledComponents["default"].div.withConfig({
  displayName: "CompleteTablestyles__MoreVertButtonContainer",
  componentId: "ihsn40-10"
})(["position:relative;padding:4px 0px;width:32px;"]);

exports.MoreVertButtonContainer = MoreVertButtonContainer;
var DropDownButton = (0, _styledComponents["default"])(_Buttons.Button).withConfig({
  displayName: "CompleteTablestyles__DropDownButton",
  componentId: "ihsn40-11"
})(["width:32px;height:32px;padding:8px;background-color:#ecf0f3;"]);
exports.DropDownButton = DropDownButton;

var DropDownContent = _styledComponents["default"].div.withConfig({
  displayName: "CompleteTablestyles__DropDownContent",
  componentId: "ihsn40-12"
})(["padding:14px;display:flex;flex-direction:column;"]);

exports.DropDownContent = DropDownContent;

var DropDownContentRow = _styledComponents["default"].a.withConfig({
  displayName: "CompleteTablestyles__DropDownContentRow",
  componentId: "ihsn40-13"
})(["display:flex;flex-direction:row;margin-bottom:3px;margin-top:3px;color:inherit;& > svg{margin-right:8px;margin-top:4px;}:hover{color:#009dff;& > svg{fill:#009dff;}}"]);

exports.DropDownContentRow = DropDownContentRow;
var Checkbox = (0, _styledComponents["default"])(_SelectionTable.CheckboxTable).withConfig({
  displayName: "CompleteTablestyles__Checkbox",
  componentId: "ihsn40-14"
})(["margin-top:0px;margin-left:16px;& > span{padding:0px;}"]);
exports.Checkbox = Checkbox;

var PaginationContainer = _styledComponents["default"].div.withConfig({
  displayName: "CompleteTablestyles__PaginationContainer",
  componentId: "ihsn40-15"
})(["margin-top:24px;width:calc(100% - 16px);padding:0px 8px;"]);

exports.PaginationContainer = PaginationContainer;

var DefaultEmptyState = _styledComponents["default"].div.withConfig({
  displayName: "CompleteTablestyles__DefaultEmptyState",
  componentId: "ihsn40-16"
})(["font-size:16px;font-weight:normal;color:", ";width:100%;height:200px;display:flex;align-items:center;justify-content:center;"], function (_ref8) {
  var theme = _ref8.theme,
      headerColor = _ref8.headerColor;
  return (0, _Themes.handleThemeFromObject)(theme, 'table.header.color', '#4b6f85', headerColor);
});

exports.DefaultEmptyState = DefaultEmptyState;
var CancelIcon = (0, _styledComponents["default"])(_Icons.MdCancel).withConfig({
  displayName: "CompleteTablestyles__CancelIcon",
  componentId: "ihsn40-17"
})(["fill:#6287a7;width:16px;height:16px;margin-left:16px;"]);
exports.CancelIcon = CancelIcon;