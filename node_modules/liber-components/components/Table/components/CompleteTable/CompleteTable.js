"use strict";

require("core-js/modules/es6.object.define-property");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _Pagination = _interopRequireDefault(require("../../../Pagination/Pagination"));

var _CompleteTable = require("./CompleteTable.styles");

var _utils = require("../../utils");

var _TableHeader = _interopRequireDefault(require("./TableHeader"));

var _TableBody = _interopRequireDefault(require("./TableBody"));

var _Empty = _interopRequireDefault(require("./Empty"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var renderPagination = function renderPagination(args) {
  var currentPage = args.currentPage,
      pageTotal = args.pageTotal,
      onChangePage = args.onChangePage,
      onClickNext = args.onClickNext,
      onClickPrev = args.onClickPrev,
      onKeyDownPage = args.onKeyDownPage,
      hasListing = args.hasListing,
      listingProps = args.listingProps;
  return _react["default"].createElement(_CompleteTable.PaginationContainer, null, _react["default"].createElement(_Pagination["default"], {
    style: {
      marginTop: 24
    },
    page: currentPage,
    pageTotal: pageTotal,
    onChangePage: onChangePage,
    onClickNext: onClickNext,
    onClickPrev: onClickPrev,
    onKeyDownPage: onKeyDownPage,
    withListing: hasListing,
    listingProps: listingProps
  }));
};

var CompleteTable = function CompleteTable(_ref) {
  var columns = _ref.columns,
      items = _ref.items,
      onSelectAll = _ref.onSelectAll,
      allChecked = _ref.allChecked,
      filters = _ref.filters,
      borderBottom = _ref.borderBottom,
      filterBorderTop = _ref.filterBorderTop,
      headerBorderTop = _ref.headerBorderTop,
      actions = _ref.actions,
      isItemSelected = _ref.isItemSelected,
      onSelect = _ref.onSelect,
      paginationProps = _ref.paginationProps,
      emptyState = _ref.emptyState,
      selectionControl = _ref.selectionControl,
      isItemSelectable = _ref.isItemSelectable,
      tooltipContent = _ref.tooltipContent,
      sortingProps = _ref.sortingProps,
      hiddenColumns = _ref.hiddenColumns,
      weightedColumns = _ref.weightedColumns;
  var percentageSpaceAvailable = 1 - (actions ? _utils.ACTIONS_SPACE : 0) - (onSelectAll ? _utils.SELECTION_SPACE : 0);
  return _react["default"].createElement(_react["default"].Fragment, null, _react["default"].createElement(_CompleteTable.StickyContainer, null, filters && _react["default"].createElement(_CompleteTable.FilterContainer, {
    borderTop: filterBorderTop,
    borderBottom: borderBottom
  }, filters), _react["default"].createElement(_TableHeader["default"], {
    columns: columns,
    onSelectAll: onSelectAll,
    allChecked: allChecked,
    hasActions: actions !== null,
    availableSpace: percentageSpaceAvailable,
    borderTop: headerBorderTop,
    sortingProps: sortingProps,
    hiddenColumns: hiddenColumns,
    weightedColumns: weightedColumns
  })), selectionControl, _react["default"].createElement(_TableBody["default"], {
    actions: actions,
    columns: columns,
    items: items,
    hasSelection: onSelectAll !== null,
    availableSpace: percentageSpaceAvailable,
    isItemSelected: isItemSelected,
    isItemSelectable: isItemSelectable,
    onSelect: onSelect,
    tooltipContent: tooltipContent,
    hiddenColumns: hiddenColumns,
    weightedColumns: weightedColumns
  }), items.length === 0 && emptyState, paginationProps && items.length > 0 && renderPagination(paginationProps));
};

CompleteTable.propTypes = {
  columns: _propTypes["default"].arrayOf(_utils.columnShape.isRequired).isRequired,
  items: _propTypes["default"].arrayOf(_propTypes["default"].object.isRequired).isRequired,
  onSelectAll: _propTypes["default"].func,
  allChecked: _propTypes["default"].bool,
  isItemSelectable: _propTypes["default"].func,
  filters: _propTypes["default"].node,
  actions: _propTypes["default"].oneOfType([_propTypes["default"].node, _propTypes["default"].func]),
  borderBottom: _propTypes["default"].bool,
  filterBorderTop: _propTypes["default"].bool,
  headerBorderTop: _propTypes["default"].bool,
  isItemSelected: _propTypes["default"].func,
  onSelect: _propTypes["default"].func,
  selectionControl: _propTypes["default"].node,
  hiddenColumns: _propTypes["default"].arrayOf(_propTypes["default"].string),
  weightedColumns: _propTypes["default"].bool,
  paginationProps: _propTypes["default"].shape({
    currentPage: _propTypes["default"].oneOfType([_propTypes["default"].string, _propTypes["default"].number]),
    pageTotal: _propTypes["default"].oneOfType([_propTypes["default"].string, _propTypes["default"].number]),
    onChangePage: _propTypes["default"].func.isRequired,
    onClickNext: _propTypes["default"].func.isRequired,
    onClickPrev: _propTypes["default"].func.isRequired,
    onKeyDownPage: _propTypes["default"].func.isRequired,
    hasListing: _propTypes["default"].bool,
    listingProps: _propTypes["default"].shape({
      onSelectListing: _propTypes["default"].func.isRequired,
      listing: _propTypes["default"].oneOf(['10', '25', '50', '100']).isRequired,
      total: _propTypes["default"].oneOfType([_propTypes["default"].string, _propTypes["default"].number]),
      listingRef: _propTypes["default"].oneOfType([_propTypes["default"].any]),
      listingLabelSingular: _propTypes["default"].string,
      listingLabelPlural: _propTypes["default"].string
    })
  }),
  emptyState: _propTypes["default"].node,
  tooltipContent: _propTypes["default"].func,
  sortingProps: _utils.sortingShape
};
CompleteTable.defaultProps = {
  onSelectAll: null,
  allChecked: false,
  filters: null,
  actions: null,
  borderBottom: false,
  filterBorderTop: true,
  headerBorderTop: true,
  isItemSelected: function isItemSelected() {
    return false;
  },
  isItemSelectable: function isItemSelectable() {
    return true;
  },
  onSelect: function onSelect() {
    return null;
  },
  hiddenColumns: [],
  paginationProps: null,
  emptyState: _react["default"].createElement(_Empty["default"], null),
  selectionControl: null,
  tooltipContent: function tooltipContent() {
    return null;
  },
  sortingProps: {
    onSort: function onSort() {},
    sorting: [],
    sortedColumns: false
  },
  weightedColumns: false
};
var _default = CompleteTable;
exports["default"] = _default;