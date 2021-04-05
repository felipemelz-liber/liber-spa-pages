"use strict";

require("core-js/modules/es6.object.define-property");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.simpleTable = exports["default"] = void 0;

var _react = _interopRequireDefault(require("react"));

var _Table = require("./Table");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var _default = {
  title: 'Components 1.0|Table/Simple Table',
  parameters: {
    jest: ['Table']
  }
};
exports["default"] = _default;

var simpleTable = function simpleTable() {
  return _react["default"].createElement(_Table.Table, null, _react["default"].createElement(_Table.TableHeader, null, _react["default"].createElement(_Table.TableRow, null, _react["default"].createElement(_Table.TableHeaderColumn, null, "N\xFAmero"), _react["default"].createElement(_Table.TableHeaderColumn, null, "Fornecedor"), _react["default"].createElement(_Table.TableHeaderColumn, null, "Prazo"), _react["default"].createElement(_Table.TableHeaderColumn, null, "Valor a Receber"))), _react["default"].createElement(_Table.TableBody, null, _react["default"].createElement(_Table.TableRow, null, _react["default"].createElement(_Table.TableRowColumn, null, "1"), _react["default"].createElement(_Table.TableRowColumn, null, "Liber Capital"), _react["default"].createElement(_Table.TableRowColumn, null, "24/08/2019"), _react["default"].createElement(_Table.TableRowColumn, null, "R$ 2500")), _react["default"].createElement(_Table.TableRow, null, _react["default"].createElement(_Table.TableRowColumn, null, "2"), _react["default"].createElement(_Table.TableRowColumn, null, "Centauro"), _react["default"].createElement(_Table.TableRowColumn, null, "10/05/2019"), _react["default"].createElement(_Table.TableRowColumn, null, "R$ 1000"))));
};

exports.simpleTable = simpleTable;