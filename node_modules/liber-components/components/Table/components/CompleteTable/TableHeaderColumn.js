"use strict";

require("core-js/modules/es6.object.define-property");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

require("core-js/modules/es6.object.assign");

require("core-js/modules/es6.regexp.to-string");

require("core-js/modules/es6.date.to-string");

require("core-js/modules/es7.symbol.async-iterator");

require("core-js/modules/es6.array.is-array");

require("core-js/modules/es6.symbol");

require("core-js/modules/es6.array.index-of");

require("core-js/modules/web.dom.iterable");

require("core-js/modules/es6.array.iterator");

require("core-js/modules/es6.object.to-string");

require("core-js/modules/es6.object.keys");

require("core-js/modules/es7.array.includes");

require("core-js/modules/es6.string.includes");

require("core-js/modules/es6.array.filter");

require("core-js/modules/es6.function.name");

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _TableHeader = require("./TableHeader.styles");

var _utils = require("../../utils");

var _SortIcon = _interopRequireDefault(require("../SortIcon/SortIcon"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance"); }

function _iterableToArrayLimit(arr, i) { if (!(Symbol.iterator in Object(arr) || Object.prototype.toString.call(arr) === "[object Arguments]")) { return; } var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

var TableHeaderColumn = function TableHeaderColumn(_ref) {
  var column = _ref.column,
      sortingProps = _ref.sortingProps,
      props = _objectWithoutProperties(_ref, ["column", "sortingProps"]);

  var align = column.align,
      name = column.name,
      label = column.label,
      _column$groupedColumn = column.groupedColumns,
      groupedColumns = _column$groupedColumn === void 0 ? [] : _column$groupedColumn;
  var onSort = sortingProps.onSort,
      sorting = sortingProps.sorting,
      _sortingProps$sortedC = sortingProps.sortedColumns,
      sortedColumns = _sortingProps$sortedC === void 0 ? true : _sortingProps$sortedC;

  var _sorting$filter = sorting.filter(function (_ref2) {
    var columnName = _ref2.columnName;
    return columnName === name || groupedColumns.includes(columnName);
  }),
      _sorting$filter2 = _slicedToArray(_sorting$filter, 1),
      columnSort = _sorting$filter2[0];

  var onColumnSort = function onColumnSort() {
    return onSort(column, columnSort);
  };

  var isSortingEnabled = function isSortingEnabled() {
    if (typeof sortedColumns === 'boolean') {
      return sortedColumns;
    }

    return sortedColumns.length && sortedColumns.includes(name);
  };

  return _react["default"].createElement(_TableHeader.HeaderColumn, _extends({
    align: align,
    onClick: isSortingEnabled() && name ? onColumnSort : undefined,
    isSorted: isSortingEnabled() && Boolean(columnSort),
    isSortingEnabled: isSortingEnabled()
  }, props), label, isSortingEnabled() && _react["default"].createElement(_SortIcon["default"], {
    direction: columnSort ? columnSort.direction : null
  }));
};

TableHeaderColumn.propTypes = {
  column: _utils.columnShape.isRequired,
  sortingProps: _utils.sortingShape,
  sorting: _propTypes["default"].oneOfType([_propTypes["default"].bool, _propTypes["default"].arrayOf(_propTypes["default"].string)])
};
TableHeaderColumn.defaultProps = {
  sortingProps: {
    onSort: function onSort() {},
    sorting: [],
    sortedColumns: false
  },
  sorting: false
};
var _default = TableHeaderColumn;
exports["default"] = _default;