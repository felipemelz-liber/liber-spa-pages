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
exports.HeaderColumn = exports.HeaderRow = exports.HeaderContent = exports.Header = exports.Table = void 0;

var _styledComponents = _interopRequireWildcard(require("styled-components"));

var _Themes = require("../../../Themes");

var _SelectionTable = require("../SelectionTable/SelectionTable");

var _CompleteTable = require("./CompleteTable.styles");

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function _getRequireWildcardCache() { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; if (obj != null) { var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

var Table = (0, _styledComponents["default"])(_SelectionTable.SelectionTable).withConfig({
  displayName: "TableHeaderstyles__Table",
  componentId: "rphg8a-0"
})(["width:100%;"]);
exports.Table = Table;
var Header = (0, _styledComponents["default"])(_SelectionTable.SelectionTableHeader).withConfig({
  displayName: "TableHeaderstyles__Header",
  componentId: "rphg8a-1"
})(["", " ", " & > tr{border-bottom:none;}& th{border-bottom:none;}"], function (_ref) {
  var theme = _ref.theme;
  return (0, _styledComponents.css)(["border:1px solid ", ";"], (0, _Themes.handleThemeFromObject)(theme, 'colors.darkBorder', '#cdd7df'));
}, function (_ref2) {
  var _ref2$borderTop = _ref2.borderTop,
      borderTop = _ref2$borderTop === void 0 ? true : _ref2$borderTop;
  return borderTop ? null : (0, _styledComponents.css)(["border-top:none;"]);
});
exports.Header = Header;
var HeaderContent = (0, _styledComponents["default"])(Header).withConfig({
  displayName: "TableHeaderstyles__HeaderContent",
  componentId: "rphg8a-2"
})(["border:none;"]);
exports.HeaderContent = HeaderContent;
var HeaderRow = (0, _styledComponents["default"])(_CompleteTable.Row).withConfig({
  displayName: "TableHeaderstyles__HeaderRow",
  componentId: "rphg8a-3"
})(["padding:5px 0px;"]);
exports.HeaderRow = HeaderRow;
var HeaderColumn = (0, _styledComponents["default"])(_SelectionTable.SelectionTableHeaderColumn).withConfig({
  displayName: "TableHeaderstyles__HeaderColumn",
  componentId: "rphg8a-4"
})(["min-width:50px;text-align:", ";", " ", ""], function (_ref3) {
  var align = _ref3.align;
  return align;
}, function (_ref4) {
  var isSorted = _ref4.isSorted;
  return isSorted && (0, _styledComponents.css)(["color:#009def;"]);
}, function (_ref5) {
  var isSortingEnabled = _ref5.isSortingEnabled;
  return isSortingEnabled && (0, _styledComponents.css)(["cursor:pointer;"]);
});
exports.HeaderColumn = HeaderColumn;