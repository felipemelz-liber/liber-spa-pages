"use strict";

require("core-js/modules/es6.object.define-property");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.TWO_LINE_ITEMS = exports.TWO_LINE_COLUMNS = exports.ITEMS_EXTENDED = exports.ITEMS = exports.WEIGHTED_COLUMNS = exports.COLUMNS = exports.formatMoney = exports.SELECTION_SPACE = exports.ACTIONS_SPACE = exports.sortingShape = exports.columnShape = void 0;

require("core-js/modules/es6.regexp.replace");

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var columnShape = _propTypes["default"].shape({
  name: _propTypes["default"].string,
  label: _propTypes["default"].node.isRequired,
  width: _propTypes["default"].number,
  align: _propTypes["default"].oneOf(['left', 'center', 'right']),
  getCellValue: _propTypes["default"].func
});

exports.columnShape = columnShape;

var sortingShape = _propTypes["default"].shape({
  onSort: _propTypes["default"].func,
  sorting: _propTypes["default"].arrayOf(_propTypes["default"].shape({
    columnName: _propTypes["default"].string,
    direction: _propTypes["default"].oneOf(['asc', 'desc', 'none'])
  })),
  sortedColumns: _propTypes["default"].oneOfType([_propTypes["default"].bool, _propTypes["default"].arrayOf(_propTypes["default"].string)])
});

exports.sortingShape = sortingShape;
var ACTIONS_SPACE = 0.1;
exports.ACTIONS_SPACE = ACTIONS_SPACE;
var SELECTION_SPACE = 0.03;
exports.SELECTION_SPACE = SELECTION_SPACE;

var formatMoney = function formatMoney(value) {
  return String(value.toFixed(2)).replace('.', ',');
};

exports.formatMoney = formatMoney;
var COLUMNS = [{
  width: 12,
  name: 'name',
  label: 'Nome',
  align: 'center'
}, {
  width: 20,
  name: 'date',
  label: 'Data',
  align: 'right'
}, {
  width: 25,
  name: 'value',
  label: 'Valor',
  align: 'left',
  getCellValue: function getCellValue(_ref) {
    var value = _ref.value;
    return "R$ ".concat(formatMoney(value));
  }
}];
exports.COLUMNS = COLUMNS;
var WEIGHTED_COLUMNS = [{
  width: 2,
  name: 'name',
  label: 'Nome',
  align: 'center'
}, {
  width: 0.5,
  name: 'date',
  label: 'Data',
  align: 'right'
}, {
  width: 0.5,
  name: 'value',
  label: 'Valor',
  align: 'left',
  getCellValue: function getCellValue(_ref2) {
    var value = _ref2.value;
    return "R$ ".concat(formatMoney(value));
  }
}];
exports.WEIGHTED_COLUMNS = WEIGHTED_COLUMNS;
var ITEMS = [{
  id: 1,
  name: 'Item 1',
  date: '01/01/2020',
  value: 100
}, {
  id: 2,
  name: 'Item 2',
  date: '01/01/2020',
  value: 200
}, {
  id: 3,
  name: 'Item 3',
  date: '01/01/2020',
  value: 700
}, {
  id: 4,
  name: 'Item 4',
  date: '01/01/2020',
  value: 300
}, {
  id: 5,
  name: 'Item 5',
  date: '01/01/2020',
  value: 450
}, {
  id: 6,
  name: 'Item 6',
  date: '01/01/2020',
  value: 905
}];
exports.ITEMS = ITEMS;
var ITEMS_EXTENDED = [{
  id: 1,
  name: 'Item 1',
  date: '01/01/2020',
  value: 100
}, {
  id: 2,
  name: 'Item 2',
  date: '01/01/2020',
  value: 200
}, {
  id: 3,
  name: 'Item 3',
  date: '01/01/2020',
  value: 700
}, {
  id: 4,
  name: 'Item 4',
  date: '01/01/2020',
  value: 300
}, {
  id: 5,
  name: 'Item 5',
  date: '01/01/2020',
  value: 450
}, {
  id: 6,
  name: 'Item 6',
  date: '01/01/2020',
  value: 905
}, {
  id: 7,
  name: 'Item 7',
  date: '01/01/2020',
  value: 100
}, {
  id: 8,
  name: 'Item 8',
  date: '01/01/2020',
  value: 200
}, {
  id: 9,
  name: 'Item 9',
  date: '01/01/2020',
  value: 700
}, {
  id: 10,
  name: 'Item 10',
  date: '01/01/2020',
  value: 300
}, {
  id: 11,
  name: 'Item 11',
  date: '01/01/2020',
  value: 450
}, {
  id: 6,
  name: 'Item 12',
  date: '01/01/2020',
  value: 905
}, {
  id: 2,
  name: 'Item 13',
  date: '01/01/2020',
  value: 200
}, {
  id: 3,
  name: 'Item 14',
  date: '01/01/2020',
  value: 700
}, {
  id: 4,
  name: 'Item 15',
  date: '01/01/2020',
  value: 300
}, {
  id: 5,
  name: 'Item 16',
  date: '01/01/2020',
  value: 450
}, {
  id: 6,
  name: 'Item 17',
  date: '01/01/2020',
  value: 905
}, {
  id: 1,
  name: 'Item 18',
  date: '01/01/2020',
  value: 100
}, {
  id: 2,
  name: 'Item 19',
  date: '01/01/2020',
  value: 200
}, {
  id: 3,
  name: 'Item 20',
  date: '01/01/2020',
  value: 700
}, {
  id: 4,
  name: 'Item 21',
  date: '01/01/2020',
  value: 300
}, {
  id: 5,
  name: 'Item 22',
  date: '01/01/2020',
  value: 450
}, {
  id: 6,
  name: 'Item 23',
  date: '01/01/2020',
  value: 905
}, {
  id: 1,
  name: 'Item 24',
  date: '01/01/2020',
  value: 100
}, {
  id: 2,
  name: 'Item 25',
  date: '01/01/2020',
  value: 200
}, {
  id: 3,
  name: 'Item 26',
  date: '01/01/2020',
  value: 700
}, {
  id: 4,
  name: 'Item 27',
  date: '01/01/2020',
  value: 300
}];
exports.ITEMS_EXTENDED = ITEMS_EXTENDED;
var TWO_LINE_COLUMNS = [{
  width: 12,
  name: 'name',
  label: 'Nome',
  align: 'center'
}, {
  width: 20,
  name: 'date',
  label: _react["default"].createElement(_react["default"].Fragment, null, "Data 2", _react["default"].createElement("br", null), "Data 2"),
  align: 'right'
}, {
  width: 25,
  name: 'value',
  label: 'Valor',
  align: 'left',
  getCellValue: function getCellValue(_ref3) {
    var value = _ref3.value;
    return "R$ ".concat(formatMoney(value));
  }
}];
exports.TWO_LINE_COLUMNS = TWO_LINE_COLUMNS;
var TWO_LINE_ITEMS = [{
  id: 1,
  name: 'Item 1',
  date: _react["default"].createElement(_react["default"].Fragment, null, "01/01/2020", _react["default"].createElement("br", null), "15/01/2020"),
  value: 100
}, {
  id: 2,
  name: 'Item 2',
  date: _react["default"].createElement(_react["default"].Fragment, null, "01/01/2020", _react["default"].createElement("br", null), "15/01/2020"),
  value: 200
}, {
  id: 3,
  name: 'Item 3',
  date: _react["default"].createElement(_react["default"].Fragment, null, "01/01/2020", _react["default"].createElement("br", null), "15/01/2020"),
  value: 700
}, {
  id: 4,
  name: 'Item 4',
  date: _react["default"].createElement(_react["default"].Fragment, null, "01/01/2020", _react["default"].createElement("br", null), "15/01/2020"),
  value: 300
}, {
  id: 5,
  name: 'Item 5',
  date: _react["default"].createElement(_react["default"].Fragment, null, "01/01/2020", _react["default"].createElement("br", null), "15/01/2020"),
  value: 450
}, {
  id: 6,
  name: 'Item 6',
  date: _react["default"].createElement(_react["default"].Fragment, null, "01/01/2020", _react["default"].createElement("br", null), "15/01/2020"),
  value: 905
}];
exports.TWO_LINE_ITEMS = TWO_LINE_ITEMS;