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

var _DropDown = require("../../../DropDown");

var _CompleteTable = require("./CompleteTable.styles");

var _utils = require("../../utils");

var _TableContentRow = _interopRequireDefault(require("./TableContentRow"));

var _Helpers = require("../../../Helpers");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var TableRow = function TableRow(_ref) {
  var item = _ref.item,
      actions = _ref.actions,
      columns = _ref.columns,
      availableSpace = _ref.availableSpace,
      hasSelection = _ref.hasSelection,
      isItemSelected = _ref.isItemSelected,
      isItemSelectable = _ref.isItemSelectable,
      onSelect = _ref.onSelect,
      tooltipContent = _ref.tooltipContent,
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

  return _react["default"].createElement(_CompleteTable.Row, {
    onClick: isItemSelectable(item) && hasSelection ? function () {
      return onSelect(item);
    } : undefined,
    hasSelection: hasSelection,
    selected: isItemSelectable(item) && isItemSelected(item)
  }, hasSelection ? _react["default"].createElement(_Helpers.TooltipBox, {
    mount: "bottom",
    fixed: true,
    contentPosition: "start",
    show: tooltipContent(item),
    content: tooltipContent(item)
  }, _react["default"].createElement(_CompleteTable.CheckboxCell, {
    width: "".concat(_utils.SELECTION_SPACE * 100, "%")
  }, isItemSelectable(item) ? _react["default"].createElement(_CompleteTable.Checkbox, {
    id: "checkbox-".concat((0, _lodash.uniqueId)()),
    checked: isItemSelected(item),
    onChange: function onChange() {
      return onSelect(item);
    }
  }) : _react["default"].createElement(_CompleteTable.CancelIcon, null))) : null, _react["default"].createElement(_TableContentRow["default"], {
    availableSpace: availableSpace
  }, columnsToRender.map(function (_ref3) {
    var name = _ref3.name,
        width = _ref3.width,
        align = _ref3.align,
        getCellValue = _ref3.getCellValue;
    return _react["default"].createElement(_CompleteTable.TableCell, {
      key: name,
      width: "".concat(getWidth(width), "%"),
      align: align
    }, getCellValue ? getCellValue(item) : item[name]);
  })), actions && _react["default"].createElement(_CompleteTable.ActionsCell, {
    width: "".concat(_utils.ACTIONS_SPACE * 100, "%"),
    align: "center"
  }, _react["default"].createElement(_CompleteTable.MoreVertButtonContainer, null, _react["default"].createElement(_DropDown.SimpleDropDown, {
    customButton: _react["default"].createElement(_CompleteTable.DropDownButton, {
      onClick: function onClick(event) {
        return event.stopPropagation();
      }
    }, _react["default"].createElement(_CompleteTable.MoreVertIcon, null)),
    position: "bottom-right-down-left"
  }, _react["default"].createElement(_CompleteTable.DropDownContent, {
    onClick: function onClick(event) {
      return event.stopPropagation();
    }
  }, actions instanceof Function ? actions(item) : actions)))));
};

TableRow.propTypes = {
  item: _propTypes["default"].object.isRequired,
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
TableRow.defaultProps = {
  actions: null,
  isItemSelected: function isItemSelected() {
    return false;
  },
  isItemSelectable: function isItemSelectable() {
    return true;
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
var _default = TableRow;
exports["default"] = _default;