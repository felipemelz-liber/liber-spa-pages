"use strict";

require("core-js/modules/es6.object.define-property");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _SelectionTable = require("../SelectionTable/SelectionTable");

var _CompleteTable = require("./CompleteTable.styles");

var _TableHeader = require("./TableHeader.styles");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var TableContentRow = function TableContentRow(_ref) {
  var children = _ref.children,
      availableSpace = _ref.availableSpace,
      isHeader = _ref.isHeader;
  return _react["default"].createElement(_CompleteTable.ContentRow, {
    width: "".concat(availableSpace * 100, "%")
  }, _react["default"].createElement(_CompleteTable.RowFreeWidth, {
    percentWidth: "100"
  }, _react["default"].createElement(_CompleteTable.Table, null, isHeader ? _react["default"].createElement(_TableHeader.HeaderContent, null, _react["default"].createElement(_CompleteTable.Row, null, children)) : _react["default"].createElement(_SelectionTable.SelectionTableBody, null, _react["default"].createElement(_CompleteTable.Row, null, children)))));
};

TableContentRow.propTypes = {
  children: _propTypes["default"].node.isRequired,
  availableSpace: _propTypes["default"].number.isRequired,
  isHeader: _propTypes["default"].bool
};
TableContentRow.defaultProps = {
  isHeader: false
};
var _default = TableContentRow;
exports["default"] = _default;