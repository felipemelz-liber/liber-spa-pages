"use strict";

require("core-js/modules/es6.object.define-property");

require("core-js/modules/es6.array.iterator");

require("core-js/modules/es6.weak-map");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.emptyWithCustom = exports.withTwoLineContent = exports.emptyTable = exports.withoutActions = exports.withSelectionControl = exports.withSorting = exports.withWeightedColumns = exports.withHiddenColumns = exports.withoutSelection = exports.withTooltipOnUnselectable = exports.withUnselectableItems = exports.withoutFilters = exports.stickyCompleteTable = exports.withoutPagination = exports.completeTable = exports["default"] = void 0;

require("core-js/modules/es6.string.iterator");

require("core-js/modules/es6.array.from");

require("core-js/modules/es6.regexp.to-string");

require("core-js/modules/es6.date.to-string");

require("core-js/modules/es6.object.to-string");

require("core-js/modules/es7.symbol.async-iterator");

require("core-js/modules/es6.symbol");

require("core-js/modules/web.dom.iterable");

require("core-js/modules/es6.array.is-array");

require("core-js/modules/es6.array.filter");

require("core-js/modules/es6.function.name");

require("core-js/modules/es6.array.index-of");

require("core-js/modules/es7.array.includes");

require("core-js/modules/es6.string.includes");

require("core-js/modules/es6.string.small");

var _react = _interopRequireWildcard(require("react"));

var _styledComponents = _interopRequireDefault(require("styled-components"));

var _CompleteTable = _interopRequireDefault(require("./CompleteTable"));

var _utils = require("../../utils");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function _getRequireWildcardCache() { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; if (obj != null) { var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance"); }

function _iterableToArray(iter) { if (Symbol.iterator in Object(iter) || Object.prototype.toString.call(iter) === "[object Arguments]") return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = new Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } }

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance"); }

function _iterableToArrayLimit(arr, i) { if (!(Symbol.iterator in Object(arr) || Object.prototype.toString.call(arr) === "[object Arguments]")) { return; } var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

var Container = _styledComponents["default"].div.withConfig({
  displayName: "indexstories__Container",
  componentId: "qxhi3l-0"
})(["padding:16px;", " ", ""], function (_ref) {
  var small = _ref.small;
  return small ? 'max-width: 420px;' : 'max-width: 720px;';
}, function (_ref2) {
  var limitHeight = _ref2.limitHeight;
  return limitHeight && 'max-height: 300px; overflow-y: auto;';
});

var EmptyContainer = _styledComponents["default"].div.withConfig({
  displayName: "indexstories__EmptyContainer",
  componentId: "qxhi3l-1"
})(["width:100%;height:200px;display:flex;align-items:center;justify-content:center;"]);

var Center = _styledComponents["default"].div.withConfig({
  displayName: "indexstories__Center",
  componentId: "qxhi3l-2"
})(["display:flex;align-items:center;justify-content:center;padding:8px;border:1px solid grey;"]);

var _default = {
  title: 'Components 2.0|Table/Complete Table',
  parameters: {
    jest: ['CompleteTable', 'CompleteTable.styles', 'TableHeader', 'TableHeader.styles', 'TableHeaderColumns', 'TableRow']
  }
};
exports["default"] = _default;

var completeTable = function completeTable() {
  var _useState = (0, _react.useState)([]),
      _useState2 = _slicedToArray(_useState, 2),
      items = _useState2[0],
      setItems = _useState2[1];

  var _useState3 = (0, _react.useState)([]),
      _useState4 = _slicedToArray(_useState3, 2),
      selected = _useState4[0],
      setSelected = _useState4[1];

  var _useState5 = (0, _react.useState)('1'),
      _useState6 = _slicedToArray(_useState5, 2),
      currentPage = _useState6[0],
      setCurrentPage = _useState6[1];

  var _useState7 = (0, _react.useState)('10'),
      _useState8 = _slicedToArray(_useState7, 2),
      listing = _useState8[0],
      setListing = _useState8[1];

  var getCurrentItems = function getCurrentItems() {
    return _utils.ITEMS_EXTENDED.slice(parseInt(currentPage) - 1 + (parseInt(currentPage) - 1) * parseInt(listing) - (parseInt(currentPage) - 1), parseInt(listing) * parseInt(currentPage));
  };

  (0, _react.useEffect)(function () {
    setItems(getCurrentItems());
    setSelected([]);
  }, [currentPage, listing]);
  (0, _react.useEffect)(function () {
    setCurrentPage('1');
    setItems(getCurrentItems());
  }, [listing]);

  var isItemSelected = function isItemSelected(item) {
    return selected.includes(item);
  };

  var onSelect = function onSelect(item) {
    if (!selected.includes(item)) setSelected([item].concat(_toConsumableArray(selected)));else {
      var currentSelected = _toConsumableArray(selected);

      currentSelected.splice(currentSelected.indexOf(item), 1);
      setSelected(_toConsumableArray(currentSelected));
    }
  };

  var onKeyDownPage = function onKeyDownPage(_ref3) {
    var key = _ref3.key,
        target = _ref3.target;

    if (key === 'Enter') {
      alert("P\xE1gina ".concat(target.value, " selecionada"));
    }
  };

  var pageTotal = function pageTotal(total, perPage) {
    return String(parseInt(total / perPage) + 1);
  };

  return _react["default"].createElement(Container, null, _react["default"].createElement(_CompleteTable["default"], {
    columns: _utils.COLUMNS,
    items: items,
    onSelectAll: function onSelectAll() {
      if (selected.length === items.length) {
        setSelected([]);
      } else {
        setSelected(_toConsumableArray(items));
      }
    },
    allChecked: selected.length === items.length,
    isItemSelected: isItemSelected,
    onSelect: onSelect,
    filters: _react["default"].createElement("div", null, "Filtros"),
    actions: _react["default"].createElement("div", null, "A\xE7\xF5es"),
    paginationProps: {
      currentPage: currentPage,
      pageTotal: pageTotal(_utils.ITEMS_EXTENDED.length, parseInt(listing)),
      onChangePage: function onChangePage(target) {
        return setCurrentPage(target.value);
      },
      onClickNext: function onClickNext() {
        return setCurrentPage("".concat(parseInt(currentPage, 10) + 1));
      },
      onClickPrev: function onClickPrev() {
        return setCurrentPage("".concat(parseInt(currentPage, 10) - 1));
      },
      onKeyDownPage: onKeyDownPage,
      hasListing: true,
      listingProps: {
        onSelectListing: function onSelectListing(selectedListing) {
          return setListing(selectedListing);
        },
        listing: listing,
        total: String(_utils.ITEMS_EXTENDED.length),
        listingLabelSingular: 'item',
        listingLabelPlural: 'itens'
      }
    }
  }));
};

exports.completeTable = completeTable;

var withoutPagination = function withoutPagination() {
  var _useState9 = (0, _react.useState)([]),
      _useState10 = _slicedToArray(_useState9, 2),
      selected = _useState10[0],
      setSelected = _useState10[1];

  var isItemSelected = function isItemSelected(item) {
    return selected.includes(item);
  };

  var onSelect = function onSelect(item) {
    if (!selected.includes(item)) setSelected([item].concat(_toConsumableArray(selected)));else {
      var currentSelected = _toConsumableArray(selected);

      currentSelected.splice(currentSelected.indexOf(item), 1);
      setSelected(_toConsumableArray(currentSelected));
    }
  };

  return _react["default"].createElement(Container, null, _react["default"].createElement(_CompleteTable["default"], {
    columns: _utils.COLUMNS,
    items: _utils.ITEMS,
    onSelectAll: function onSelectAll() {
      if (selected.length === _utils.ITEMS.length) {
        setSelected([]);
      } else {
        setSelected(_toConsumableArray(_utils.ITEMS));
      }
    },
    allChecked: selected.length === _utils.ITEMS.length,
    isItemSelected: isItemSelected,
    onSelect: onSelect,
    filters: _react["default"].createElement("div", null, "Filtros"),
    actions: _react["default"].createElement("div", null, "A\xE7\xF5es")
  }));
};

exports.withoutPagination = withoutPagination;

var stickyCompleteTable = function stickyCompleteTable() {
  var _useState11 = (0, _react.useState)([]),
      _useState12 = _slicedToArray(_useState11, 2),
      selected = _useState12[0],
      setSelected = _useState12[1];

  var isItemSelected = function isItemSelected(item) {
    return selected.includes(item);
  };

  var onSelect = function onSelect(item) {
    if (!selected.includes(item)) setSelected([item].concat(_toConsumableArray(selected)));else {
      var currentSelected = _toConsumableArray(selected);

      currentSelected.splice(currentSelected.indexOf(item), 1);
      setSelected(_toConsumableArray(currentSelected));
    }
  };

  return _react["default"].createElement(Container, {
    limitHeight: 1
  }, _react["default"].createElement(_CompleteTable["default"], {
    columns: _utils.COLUMNS,
    items: _utils.ITEMS,
    onSelectAll: function onSelectAll() {
      if (selected.length === _utils.ITEMS.length) {
        setSelected([]);
      } else {
        setSelected(_toConsumableArray(_utils.ITEMS));
      }
    },
    allChecked: selected.length === _utils.ITEMS.length,
    isItemSelected: isItemSelected,
    onSelect: onSelect,
    filters: _react["default"].createElement("div", null, "Filtros"),
    actions: _react["default"].createElement("div", null, "A\xE7\xF5es")
  }));
};

exports.stickyCompleteTable = stickyCompleteTable;

var withoutFilters = function withoutFilters() {
  var _useState13 = (0, _react.useState)([]),
      _useState14 = _slicedToArray(_useState13, 2),
      selected = _useState14[0],
      setSelected = _useState14[1];

  var isItemSelected = function isItemSelected(item) {
    return selected.includes(item);
  };

  var onSelect = function onSelect(item) {
    if (!selected.includes(item)) setSelected([item].concat(_toConsumableArray(selected)));else {
      var currentSelected = _toConsumableArray(selected);

      currentSelected.splice(currentSelected.indexOf(item), 1);
      setSelected(_toConsumableArray(currentSelected));
    }
  };

  return _react["default"].createElement(Container, null, _react["default"].createElement(_CompleteTable["default"], {
    columns: _utils.COLUMNS,
    items: _utils.ITEMS,
    onSelectAll: function onSelectAll() {
      if (selected.length === _utils.ITEMS.length) {
        setSelected([]);
      } else {
        setSelected(_toConsumableArray(_utils.ITEMS));
      }
    },
    allChecked: selected.length === _utils.ITEMS.length,
    isItemSelected: isItemSelected,
    onSelect: onSelect,
    actions: _react["default"].createElement("div", null, "A\xE7\xF5es")
  }));
};

exports.withoutFilters = withoutFilters;

var withUnselectableItems = function withUnselectableItems() {
  var _useState15 = (0, _react.useState)([]),
      _useState16 = _slicedToArray(_useState15, 2),
      selected = _useState16[0],
      setSelected = _useState16[1];

  var isItemSelected = function isItemSelected(item) {
    return selected.includes(item);
  };

  var isItemSelectable = function isItemSelectable(_ref4) {
    var id = _ref4.id;
    console.log('in selection', id);
    return id % 2 === 0;
  };

  var onSelect = function onSelect(item) {
    if (!selected.includes(item)) setSelected([item].concat(_toConsumableArray(selected)));else {
      var currentSelected = _toConsumableArray(selected);

      currentSelected.splice(currentSelected.indexOf(item), 1);
      setSelected(_toConsumableArray(currentSelected));
    }
  };

  return _react["default"].createElement(Container, null, _react["default"].createElement(_CompleteTable["default"], {
    columns: _utils.COLUMNS,
    items: _utils.ITEMS,
    isItemSelectable: isItemSelectable,
    onSelectAll: function onSelectAll() {
      if (selected.length === _utils.ITEMS.length) {
        setSelected([]);
      } else {
        setSelected(_toConsumableArray(_utils.ITEMS));
      }
    },
    allChecked: selected.length === _utils.ITEMS.length,
    isItemSelected: isItemSelected,
    onSelect: onSelect,
    actions: _react["default"].createElement("div", null, "A\xE7\xF5es")
  }));
};

exports.withUnselectableItems = withUnselectableItems;

var withTooltipOnUnselectable = function withTooltipOnUnselectable() {
  var _useState17 = (0, _react.useState)([]),
      _useState18 = _slicedToArray(_useState17, 2),
      selected = _useState18[0],
      setSelected = _useState18[1];

  var isItemSelected = function isItemSelected(item) {
    return selected.includes(item);
  };

  var isItemSelectable = function isItemSelectable(_ref5) {
    var id = _ref5.id;
    console.log('in selection', id);
    return id % 2 === 0;
  };

  var onSelect = function onSelect(item) {
    if (!selected.includes(item)) setSelected([item].concat(_toConsumableArray(selected)));else {
      var currentSelected = _toConsumableArray(selected);

      currentSelected.splice(currentSelected.indexOf(item), 1);
      setSelected(_toConsumableArray(currentSelected));
    }
  };

  var tooltipContent = function tooltipContent(_ref6) {
    var name = _ref6.name,
        id = _ref6.id;
    return isItemSelectable({
      id: id
    }) ? null : _react["default"].createElement("b", null, "O ", name, " n\xE3o pode ser selecionado por motivos desconhecidos");
  };

  return _react["default"].createElement(Container, null, _react["default"].createElement(_CompleteTable["default"], {
    columns: _utils.COLUMNS,
    items: _utils.ITEMS,
    isItemSelectable: isItemSelectable,
    onSelectAll: function onSelectAll() {
      if (selected.length === _utils.ITEMS.length) {
        setSelected([]);
      } else {
        setSelected(_toConsumableArray(_utils.ITEMS));
      }
    },
    allChecked: selected.length === _utils.ITEMS.length,
    isItemSelected: isItemSelected,
    onSelect: onSelect,
    actions: _react["default"].createElement("div", null, "A\xE7\xF5es"),
    tooltipContent: tooltipContent
  }));
};

exports.withTooltipOnUnselectable = withTooltipOnUnselectable;

var withoutSelection = function withoutSelection() {
  return _react["default"].createElement(Container, null, _react["default"].createElement(_CompleteTable["default"], {
    columns: _utils.COLUMNS,
    items: _utils.ITEMS,
    actions: _react["default"].createElement("div", null, "A\xE7\xF5es")
  }));
};

exports.withoutSelection = withoutSelection;

var withHiddenColumns = function withHiddenColumns() {
  var _useState19 = (0, _react.useState)([]),
      _useState20 = _slicedToArray(_useState19, 2),
      hiddenColumns = _useState20[0],
      setHiddenColumns = _useState20[1];

  var toggleColumn = function toggleColumn(key) {
    return function () {
      var updatedColumns;

      if (hiddenColumns.includes(key)) {
        updatedColumns = hiddenColumns.filter(function (column) {
          return column !== key;
        });
      } else {
        updatedColumns = [].concat(_toConsumableArray(hiddenColumns), [key]);
      }

      setHiddenColumns(updatedColumns);
    };
  };

  return _react["default"].createElement(Container, null, _react["default"].createElement("button", {
    type: "button",
    onClick: toggleColumn('name')
  }, "name"), _react["default"].createElement("button", {
    type: "button",
    onClick: toggleColumn('date')
  }, "date"), _react["default"].createElement("button", {
    type: "button",
    onClick: toggleColumn('value')
  }, "value"), _react["default"].createElement(_CompleteTable["default"], {
    columns: _utils.COLUMNS,
    items: _utils.ITEMS,
    actions: _react["default"].createElement("div", null, "A\xE7\xF5es"),
    hiddenColumns: hiddenColumns
  }));
};

exports.withHiddenColumns = withHiddenColumns;

var withWeightedColumns = function withWeightedColumns() {
  return _react["default"].createElement(Container, null, _react["default"].createElement(_CompleteTable["default"], {
    columns: _utils.WEIGHTED_COLUMNS,
    items: _utils.ITEMS,
    actions: _react["default"].createElement("div", null, "A\xE7\xF5es"),
    weightedColumns: true
  }));
};

exports.withWeightedColumns = withWeightedColumns;

var withSorting = function withSorting() {
  var _useState21 = (0, _react.useState)(_utils.ITEMS),
      _useState22 = _slicedToArray(_useState21, 2),
      items = _useState22[0],
      setItems = _useState22[1];

  var _useState23 = (0, _react.useState)([]),
      _useState24 = _slicedToArray(_useState23, 2),
      sorting = _useState24[0],
      setSorting = _useState24[1];

  var NEXT_DIRECTION = {
    asc: 'desc',
    desc: null
  };

  var onSort = function onSort(column, columnSort) {
    var newSortedColumns;

    if (columnSort) {
      var columnName = columnSort.columnName,
          prevDirection = columnSort.direction;
      var baseArray = sorting.filter(function (sortItem) {
        return sortItem.columnName !== columnName;
      });
      newSortedColumns = [].concat(_toConsumableArray(baseArray), [{
        columnName: columnName,
        direction: NEXT_DIRECTION[prevDirection]
      }]);
    } else {
      newSortedColumns = [].concat(_toConsumableArray(sorting), [{
        columnName: column.name,
        direction: 'asc'
      }]);
    }

    setSorting(newSortedColumns.filter(function (_ref7) {
      var direction = _ref7.direction;
      return Boolean(direction);
    }));
  };

  return _react["default"].createElement(Container, null, _react["default"].createElement(_CompleteTable["default"], {
    sortingProps: {
      onSort: onSort,
      sorting: sorting,
      sortedColumns: true
    },
    columns: _utils.COLUMNS,
    items: items,
    actions: _react["default"].createElement("div", null, "A\xE7\xF5es")
  }));
};

exports.withSorting = withSorting;

var withSelectionControl = function withSelectionControl() {
  return _react["default"].createElement(Container, null, _react["default"].createElement(_CompleteTable["default"], {
    selectionControl: _react["default"].createElement(Center, null, "Controls"),
    columns: _utils.COLUMNS,
    items: _utils.ITEMS,
    actions: _react["default"].createElement("div", null, "A\xE7\xF5es")
  }));
};

exports.withSelectionControl = withSelectionControl;

var withoutActions = function withoutActions() {
  return _react["default"].createElement(Container, {
    small: 1
  }, _react["default"].createElement(_CompleteTable["default"], {
    columns: _utils.COLUMNS,
    items: _utils.ITEMS
  }));
};

exports.withoutActions = withoutActions;

var emptyTable = function emptyTable() {
  return _react["default"].createElement(Container, null, _react["default"].createElement(_CompleteTable["default"], {
    columns: _utils.COLUMNS,
    items: [],
    onSelectAll: function onSelectAll() {
      return null;
    }
  }));
};

exports.emptyTable = emptyTable;

var withTwoLineContent = function withTwoLineContent() {
  return _react["default"].createElement(Container, null, _react["default"].createElement(_CompleteTable["default"], {
    columns: _utils.TWO_LINE_COLUMNS,
    items: _utils.TWO_LINE_ITEMS,
    onSelectAll: function onSelectAll() {
      return null;
    },
    actions: _react["default"].createElement("div", null, "A\xE7\xF5es")
  }));
};

exports.withTwoLineContent = withTwoLineContent;

var emptyWithCustom = function emptyWithCustom() {
  return _react["default"].createElement(Container, null, _react["default"].createElement(_CompleteTable["default"], {
    columns: _utils.COLUMNS,
    items: [],
    onSelectAll: function onSelectAll() {
      return null;
    },
    emptyState: _react["default"].createElement(EmptyContainer, null, "Insira qualquer coisa aqui como uma mensagem ou uma imagem.")
  }));
};

exports.emptyWithCustom = emptyWithCustom;