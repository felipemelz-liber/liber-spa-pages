"use strict";

require("core-js/modules/es6.object.define-property");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

require("core-js/modules/es6.array.map");

require("core-js/modules/es7.array.includes");

require("core-js/modules/es6.string.includes");

require("core-js/modules/es6.function.name");

require("core-js/modules/es6.array.filter");

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _lodash = require("lodash");

var _TableHeaderColumn = _interopRequireDefault(require("./TableHeaderColumn"));

var _utils = require("../../utils");

var _TableHeader = require("./TableHeader.styles");

var _CompleteTable = require("./CompleteTable.styles");

var _TableContentRow = _interopRequireDefault(require("./TableContentRow"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var TableHeader = function TableHeader(_ref) {
  var columns = _ref.columns,
      onSelectAll = _ref.onSelectAll,
      allChecked = _ref.allChecked,
      sortingProps = _ref.sortingProps,
      hasActions = _ref.hasActions,
      availableSpace = _ref.availableSpace,
      borderTop = _ref.borderTop,
      hiddenColumns = _ref.hiddenColumns,
      weightedColumns = _ref.weightedColumns;
  var columnsToRender = columns.filter(function (_ref2) {
    var name = _ref2.name;
    return !hiddenColumns.includes(name);
  });

  var getWidth = function getWidth(width) {
    if (weightedColumns) {
      return width / columnsToRender.length * availableSpace * 100;
    }

    return width * availableSpace;
  };

  return _react["default"].createElement(_TableHeader.Table, null, _react["default"].createElement(_TableHeader.Header, {
    borderTop: borderTop
  }, _react["default"].createElement(_TableHeader.HeaderRow, null, onSelectAll && _react["default"].createElement(_TableHeader.HeaderColumn, {
    width: "".concat(_utils.SELECTION_SPACE * 100, "%")
  }, _react["default"].createElement(_CompleteTable.Checkbox, {
    id: "header-checkbox",
    borderSize: 2,
    checked: allChecked,
    onChange: onSelectAll
  })), _react["default"].createElement(_TableContentRow["default"], {
    availableSpace: availableSpace,
    isHeader: true
  }, columnsToRender.map(function (column) {
    var label = column.label,
        width = column.width;
    return _react["default"].createElement(_TableHeaderColumn["default"], {
      key: "".concat((0, _lodash.uniqueId)(label), "-header"),
      sortingProps: sortingProps,
      column: column,
      width: "".concat(getWidth(width), "%")
    });
  })), hasActions && _react["default"].createElement(_TableHeaderColumn["default"], {
    column: {
      align: 'center',
      label: 'Ações'
    },
    width: "".concat(_utils.ACTIONS_SPACE * 100, "%"),
    align: "center"
  }))));
};

TableHeader.propTypes = {
  columns: _propTypes["default"].arrayOf(_utils.columnShape.isRequired).isRequired,
  hasActions: _propTypes["default"].bool.isRequired,
  onSelectAll: _propTypes["default"].func,
  allChecked: _propTypes["default"].bool,
  sortingProps: _utils.sortingShape,
  availableSpace: _propTypes["default"].number.isRequired,
  borderTop: _propTypes["default"].bool,
  hiddenColumns: _propTypes["default"].arrayOf(_propTypes["default"].string),
  weightedColumns: _propTypes["default"].bool
};
TableHeader.defaultProps = {
  onSelectAll: null,
  allChecked: false,
  sortingProps: {
    onSort: function onSort() {},
    sortedColumns: []
  },
  borderTop: true,
  hiddenColumns: [],
  weightedColumns: false
};
var _default = TableHeader;
exports["default"] = _default;