"use strict";

require("core-js/modules/es6.object.define-property");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

require("core-js/modules/es6.array.map");

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _lodash = require("lodash");

var _SelectionTable = require("../SelectionTable/SelectionTable");

var _utils = require("../../utils");

var _CompleteTable = require("./CompleteTable.styles");

var _TableRow = _interopRequireDefault(require("./TableRow"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var TableBody = function TableBody(_ref) {
  var items = _ref.items,
      columns = _ref.columns,
      actions = _ref.actions,
      availableSpace = _ref.availableSpace,
      hasSelection = _ref.hasSelection,
      isItemSelected = _ref.isItemSelected,
      isItemSelectable = _ref.isItemSelectable,
      onSelect = _ref.onSelect,
      tooltipContent = _ref.tooltipContent,
      hiddenColumns = _ref.hiddenColumns,
      weightedColumns = _ref.weightedColumns;
  return _react["default"].createElement(_CompleteTable.Table, null, _react["default"].createElement(_SelectionTable.SelectionTableBody, null, items.map(function (item) {
    return _react["default"].createElement(_TableRow["default"], {
      key: "row-".concat((0, _lodash.uniqueId)()),
      item: item,
      columns: columns,
      actions: actions,
      availableSpace: availableSpace,
      hasSelection: hasSelection,
      isItemSelected: isItemSelected,
      isItemSelectable: isItemSelectable,
      onSelect: onSelect,
      tooltipContent: tooltipContent,
      hiddenColumns: hiddenColumns,
      weightedColumns: weightedColumns
    });
  })));
};

TableBody.propTypes = {
  items: _propTypes["default"].arrayOf(_propTypes["default"].object.isRequired).isRequired,
  columns: _propTypes["default"].arrayOf(_utils.columnShape.isRequired).isRequired,
  actions: _propTypes["default"].oneOfType([_propTypes["default"].node, _propTypes["default"].func]),
  availableSpace: _propTypes["default"].number.isRequired,
  hasSelection: _propTypes["default"].bool.isRequired,
  isItemSelected: _propTypes["default"].func,
  isItemSelectable: _propTypes["default"].func,
  onSelect: _propTypes["default"].func,
  tooltipContent: _propTypes["default"].func,
  hiddenColumns: _propTypes["default"].arrayOf(_propTypes["default"].string),
  weightedColumns: _propTypes["default"].bool
};
TableBody.defaultProps = {
  actions: null,
  isItemSelected: function isItemSelected() {
    return false;
  },
  isItemSelectable: function isItemSelectable() {
    return false;
  },
  onSelect: function onSelect() {
    return null;
  },
  tooltipContent: function tooltipContent() {
    return null;
  },
  hiddenColumns: [],
  weightedColumns: false
};
var _default = TableBody;
exports["default"] = _default;