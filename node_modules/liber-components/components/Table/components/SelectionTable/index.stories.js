"use strict";

require("core-js/modules/es6.object.define-property");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.responsiveSelectionTable = exports.selectionTable = exports["default"] = void 0;

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

require("core-js/modules/es7.array.includes");

require("core-js/modules/es6.string.includes");

var _react = _interopRequireDefault(require("react"));

var _styledComponents = _interopRequireDefault(require("styled-components"));

var _SelectionTable = require("./SelectionTable");

var _DropDown = require("../../../DropDown");

var _Buttons = require("../../../Buttons");

var _Icons = require("../../../Icons");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance"); }

function _iterableToArrayLimit(arr, i) { if (!(Symbol.iterator in Object(arr) || Object.prototype.toString.call(arr) === "[object Arguments]")) { return; } var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance"); }

function _iterableToArray(iter) { if (Symbol.iterator in Object(iter) || Object.prototype.toString.call(iter) === "[object Arguments]") return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = new Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } }

var Container = _styledComponents["default"].div.withConfig({
  displayName: "indexstories__Container",
  componentId: "rbnwqc-0"
})(["margin:20px;"]);

var ResponsiveContainer = _styledComponents["default"].div.withConfig({
  displayName: "indexstories__ResponsiveContainer",
  componentId: "rbnwqc-1"
})(["margin:20px;overflow-y:hidden;overflow-x:auto;"]);

var MoreVertIcon = (0, _styledComponents["default"])(_Icons.MoreVert).withConfig({
  displayName: "indexstories__MoreVertIcon",
  componentId: "rbnwqc-2"
})(["width:16px;height:16px;"]);
var DropDownButton = (0, _styledComponents["default"])(_Buttons.Button).withConfig({
  displayName: "indexstories__DropDownButton",
  componentId: "rbnwqc-3"
})(["width:32px;height:32px;padding:8px;background-color:#ecf0f3;"]);

var DropDownContent = _styledComponents["default"].div.withConfig({
  displayName: "indexstories__DropDownContent",
  componentId: "rbnwqc-4"
})(["padding:14px;display:flex;flex-direction:column;"]);

var DropDownContentRow = _styledComponents["default"].a.withConfig({
  displayName: "indexstories__DropDownContentRow",
  componentId: "rbnwqc-5"
})(["display:flex;flex-direction:row;margin-bottom:3px;margin-top:3px;"]);

var DropDownContentRowIcon = _styledComponents["default"].div.withConfig({
  displayName: "indexstories__DropDownContentRowIcon",
  componentId: "rbnwqc-6"
})(["margin-right:8px;"]);

var MoneyIcon = (0, _styledComponents["default"])(_Icons.AttachMoney).withConfig({
  displayName: "indexstories__MoneyIcon",
  componentId: "rbnwqc-7"
})(["width:16px;height:16px;fill:#4b6f85;"]);
var DescriptionIcon = (0, _styledComponents["default"])(_Icons.Description).withConfig({
  displayName: "indexstories__DescriptionIcon",
  componentId: "rbnwqc-8"
})(["width:16px;height:16px;fill:#4b6f85;"]);

var makeSelection = function makeSelection(selected, value) {
  if (selected.includes(value)) {
    return selected.filter(function (item) {
      return item !== value;
    });
  }

  return [].concat(_toConsumableArray(selected), [value]);
};

var _default = {
  title: 'Components 2.0|Table/Selection Table',
  parameters: {
    jest: ['SelectionTable']
  }
};
exports["default"] = _default;

var selectionTable = function selectionTable() {
  var _React$useState = _react["default"].useState([]),
      _React$useState2 = _slicedToArray(_React$useState, 2),
      selected = _React$useState2[0],
      setSelected = _React$useState2[1];

  return _react["default"].createElement(Container, null, _react["default"].createElement(_SelectionTable.SelectionTable, null, _react["default"].createElement(_SelectionTable.SelectionTableHeader, null, _react["default"].createElement(_SelectionTable.SelectionTableRow, null, _react["default"].createElement(_SelectionTable.SelectionTableHeaderColumn, {
    width: 40
  }, _react["default"].createElement(_SelectionTable.CheckboxTable, {
    borderSize: 2,
    checked: selected.length === 4,
    onChange: function onChange() {
      if (selected.length === 4) {
        setSelected([]);
      } else {
        setSelected([0, 1, 2, 3]);
      }
    }
  })), _react["default"].createElement(_SelectionTable.SelectionTableHeaderColumn, null, "N\xFAmero"), _react["default"].createElement(_SelectionTable.SelectionTableHeaderColumn, null, "Vencimento"), _react["default"].createElement(_SelectionTable.SelectionTableHeaderColumn, null, "Valor Face"), _react["default"].createElement(_SelectionTable.SelectionTableHeaderColumn, null, "Taxa de Desconto"), _react["default"].createElement(_SelectionTable.SelectionTableHeaderColumn, {
    width: 45
  }, "A\xE7\xF5es"))), _react["default"].createElement(_SelectionTable.SelectionTableBody, null, _react["default"].createElement(_SelectionTable.SelectionTableRow, {
    selected: selected.includes(0)
  }, _react["default"].createElement(_SelectionTable.SelectionTableRowColumn, null, _react["default"].createElement(_SelectionTable.CheckboxTable, {
    checked: selected.includes(0),
    onChange: function onChange() {
      setSelected(makeSelection(selected, 0));
    }
  })), _react["default"].createElement(_SelectionTable.SelectionTableRowColumn, null, "6275"), _react["default"].createElement(_SelectionTable.SelectionTableRowColumn, null, "28/04/2019"), _react["default"].createElement(_SelectionTable.SelectionTableRowColumn, null, "R$ 101.360,00"), _react["default"].createElement(_SelectionTable.SelectionTableRowColumn, null, "0,90% a.m."), _react["default"].createElement(_SelectionTable.SelectionTableRowColumn, null, _react["default"].createElement(_DropDown.SimpleDropDown, {
    customButton: _react["default"].createElement(DropDownButton, null, _react["default"].createElement(MoreVertIcon, null)),
    position: "bottom-center-right"
  }, _react["default"].createElement(DropDownContent, null, _react["default"].createElement(DropDownContentRow, null, _react["default"].createElement(DropDownContentRowIcon, null, _react["default"].createElement(MoneyIcon, null)), _react["default"].createElement("div", null, "Solicitar adiantamento")), _react["default"].createElement(DropDownContentRow, null, _react["default"].createElement(DropDownContentRowIcon, null, _react["default"].createElement(DescriptionIcon, null)), _react["default"].createElement("div", null, "Detalhes do t\xEDtulo")))))), _react["default"].createElement(_SelectionTable.SelectionTableRow, {
    selected: selected.includes(1)
  }, _react["default"].createElement(_SelectionTable.SelectionTableRowColumn, null, _react["default"].createElement(_SelectionTable.CheckboxTable, {
    checked: selected.includes(1),
    onChange: function onChange() {
      setSelected(makeSelection(selected, 1));
    }
  })), _react["default"].createElement(_SelectionTable.SelectionTableRowColumn, null, "5961"), _react["default"].createElement(_SelectionTable.SelectionTableRowColumn, null, "03/05/2019"), _react["default"].createElement(_SelectionTable.SelectionTableRowColumn, null, "R$ 101.360,00"), _react["default"].createElement(_SelectionTable.SelectionTableRowColumn, null, "0,90% a.m."), _react["default"].createElement(_SelectionTable.SelectionTableRowColumn, null, _react["default"].createElement(_DropDown.SimpleDropDown, {
    customButton: _react["default"].createElement(DropDownButton, null, _react["default"].createElement(MoreVertIcon, null)),
    position: "bottom-center-right"
  }, _react["default"].createElement(DropDownContent, null, _react["default"].createElement(DropDownContentRow, null, _react["default"].createElement(DropDownContentRowIcon, null, _react["default"].createElement(MoneyIcon, null)), _react["default"].createElement("div", null, "Solicitar adiantamento")), _react["default"].createElement(DropDownContentRow, null, _react["default"].createElement(DropDownContentRowIcon, null, _react["default"].createElement(DescriptionIcon, null)), _react["default"].createElement("div", null, "Detalhes do t\xEDtulo")))))), _react["default"].createElement(_SelectionTable.SelectionTableRow, {
    selected: selected.includes(2)
  }, _react["default"].createElement(_SelectionTable.SelectionTableRowColumn, null, _react["default"].createElement(_SelectionTable.CheckboxTable, {
    checked: selected.includes(2),
    onChange: function onChange() {
      setSelected(makeSelection(selected, 2));
    }
  })), _react["default"].createElement(_SelectionTable.SelectionTableRowColumn, null, "1498"), _react["default"].createElement(_SelectionTable.SelectionTableRowColumn, null, "07/06/2019"), _react["default"].createElement(_SelectionTable.SelectionTableRowColumn, null, "R$ 101.360,00"), _react["default"].createElement(_SelectionTable.SelectionTableRowColumn, null, "0,90% a.m."), _react["default"].createElement(_SelectionTable.SelectionTableRowColumn, null, _react["default"].createElement(_DropDown.SimpleDropDown, {
    customButton: _react["default"].createElement(DropDownButton, null, _react["default"].createElement(MoreVertIcon, null)),
    position: "bottom-center-right"
  }, _react["default"].createElement(DropDownContent, null, _react["default"].createElement(DropDownContentRow, null, _react["default"].createElement(DropDownContentRowIcon, null, _react["default"].createElement(MoneyIcon, null)), _react["default"].createElement("div", null, "Solicitar adiantamento")), _react["default"].createElement(DropDownContentRow, null, _react["default"].createElement(DropDownContentRowIcon, null, _react["default"].createElement(DescriptionIcon, null)), _react["default"].createElement("div", null, "Detalhes do t\xEDtulo")))))), _react["default"].createElement(_SelectionTable.SelectionTableRow, {
    selected: selected.includes(3)
  }, _react["default"].createElement(_SelectionTable.SelectionTableRowColumn, null, _react["default"].createElement(_SelectionTable.CheckboxTable, {
    checked: selected.includes(3),
    onChange: function onChange() {
      setSelected(makeSelection(selected, 3));
    }
  })), _react["default"].createElement(_SelectionTable.SelectionTableRowColumn, null, "7842"), _react["default"].createElement(_SelectionTable.SelectionTableRowColumn, null, "25/08/2019"), _react["default"].createElement(_SelectionTable.SelectionTableRowColumn, null, "R$ 101.360,00"), _react["default"].createElement(_SelectionTable.SelectionTableRowColumn, null, "0,90% a.m."), _react["default"].createElement(_SelectionTable.SelectionTableRowColumn, null, _react["default"].createElement(_DropDown.SimpleDropDown, {
    customButton: _react["default"].createElement(DropDownButton, null, _react["default"].createElement(MoreVertIcon, null)),
    position: "bottom-center-right"
  }, _react["default"].createElement(DropDownContent, null, _react["default"].createElement(DropDownContentRow, null, _react["default"].createElement(DropDownContentRowIcon, null, _react["default"].createElement(MoneyIcon, null)), _react["default"].createElement("div", null, "Solicitar adiantamento")), _react["default"].createElement(DropDownContentRow, null, _react["default"].createElement(DropDownContentRowIcon, null, _react["default"].createElement(DescriptionIcon, null)), _react["default"].createElement("div", null, "Detalhes do t\xEDtulo")))))))));
};

exports.selectionTable = selectionTable;
selectionTable.story = {
  name: 'selection table'
};

var responsiveSelectionTable = function responsiveSelectionTable() {
  return _react["default"].createElement(ResponsiveContainer, null, _react["default"].createElement(_SelectionTable.SelectionTable, null, _react["default"].createElement(_SelectionTable.SelectionTableHeader, null, _react["default"].createElement(_SelectionTable.SelectionTableRow, null, _react["default"].createElement(_SelectionTable.SelectionTableHeaderColumn, {
    width: 40
  }, _react["default"].createElement(_SelectionTable.CheckboxTable, {
    borderSize: 2
  })), _react["default"].createElement(_SelectionTable.SelectionTableHeaderColumn, null, "N\xFAmero"), _react["default"].createElement(_SelectionTable.SelectionTableHeaderColumn, null, "Vencimento"), _react["default"].createElement(_SelectionTable.SelectionTableHeaderColumn, null, "Valor Face"), _react["default"].createElement(_SelectionTable.SelectionTableHeaderColumn, null, "Taxa de Desconto"), _react["default"].createElement(_SelectionTable.SelectionTableHeaderColumn, {
    width: 45
  }, "A\xE7\xF5es"))), _react["default"].createElement(_SelectionTable.SelectionTableBody, null, _react["default"].createElement(_SelectionTable.SelectionTableRow, null, _react["default"].createElement(_SelectionTable.SelectionTableRowColumn, null, _react["default"].createElement(_SelectionTable.CheckboxTable, null)), _react["default"].createElement(_SelectionTable.SelectionTableRowColumn, null, "6275"), _react["default"].createElement(_SelectionTable.SelectionTableRowColumn, null, "28/04/2019"), _react["default"].createElement(_SelectionTable.SelectionTableRowColumn, null, "R$ 101.360,00"), _react["default"].createElement(_SelectionTable.SelectionTableRowColumn, null, "0,90% a.m."), _react["default"].createElement(_SelectionTable.SelectionTableRowColumn, null, _react["default"].createElement(_DropDown.SimpleDropDown, {
    customButton: _react["default"].createElement(DropDownButton, null, _react["default"].createElement(MoreVertIcon, null)),
    position: "bottom-center-right"
  }, _react["default"].createElement(DropDownContent, null, _react["default"].createElement(DropDownContentRow, null, _react["default"].createElement(DropDownContentRowIcon, null, _react["default"].createElement(MoneyIcon, null)), _react["default"].createElement("div", null, "Solicitar adiantamento")), _react["default"].createElement(DropDownContentRow, null, _react["default"].createElement(DropDownContentRowIcon, null, _react["default"].createElement(DescriptionIcon, null)), _react["default"].createElement("div", null, "Detalhes do t\xEDtulo")))))), _react["default"].createElement(_SelectionTable.SelectionTableRow, null, _react["default"].createElement(_SelectionTable.SelectionTableRowColumn, null, _react["default"].createElement(_SelectionTable.CheckboxTable, null)), _react["default"].createElement(_SelectionTable.SelectionTableRowColumn, null, "5961"), _react["default"].createElement(_SelectionTable.SelectionTableRowColumn, null, "03/05/2019"), _react["default"].createElement(_SelectionTable.SelectionTableRowColumn, null, "R$ 101.360,00"), _react["default"].createElement(_SelectionTable.SelectionTableRowColumn, null, "0,90% a.m."), _react["default"].createElement(_SelectionTable.SelectionTableRowColumn, null, _react["default"].createElement(_DropDown.SimpleDropDown, {
    customButton: _react["default"].createElement(DropDownButton, null, _react["default"].createElement(MoreVertIcon, null)),
    position: "bottom-center-right"
  }, _react["default"].createElement(DropDownContent, null, _react["default"].createElement(DropDownContentRow, null, _react["default"].createElement(DropDownContentRowIcon, null, _react["default"].createElement(MoneyIcon, null)), _react["default"].createElement("div", null, "Solicitar adiantamento")), _react["default"].createElement(DropDownContentRow, null, _react["default"].createElement(DropDownContentRowIcon, null, _react["default"].createElement(DescriptionIcon, null)), _react["default"].createElement("div", null, "Detalhes do t\xEDtulo")))))), _react["default"].createElement(_SelectionTable.SelectionTableRow, null, _react["default"].createElement(_SelectionTable.SelectionTableRowColumn, null, _react["default"].createElement(_SelectionTable.CheckboxTable, null)), _react["default"].createElement(_SelectionTable.SelectionTableRowColumn, null, "1498"), _react["default"].createElement(_SelectionTable.SelectionTableRowColumn, null, "07/06/2019"), _react["default"].createElement(_SelectionTable.SelectionTableRowColumn, null, "R$ 101.360,00"), _react["default"].createElement(_SelectionTable.SelectionTableRowColumn, null, "0,90% a.m."), _react["default"].createElement(_SelectionTable.SelectionTableRowColumn, null, _react["default"].createElement(_DropDown.SimpleDropDown, {
    customButton: _react["default"].createElement(DropDownButton, null, _react["default"].createElement(MoreVertIcon, null)),
    position: "bottom-center-right"
  }, _react["default"].createElement(DropDownContent, null, _react["default"].createElement(DropDownContentRow, null, _react["default"].createElement(DropDownContentRowIcon, null, _react["default"].createElement(MoneyIcon, null)), _react["default"].createElement("div", null, "Solicitar adiantamento")), _react["default"].createElement(DropDownContentRow, null, _react["default"].createElement(DropDownContentRowIcon, null, _react["default"].createElement(DescriptionIcon, null)), _react["default"].createElement("div", null, "Detalhes do t\xEDtulo")))))), _react["default"].createElement(_SelectionTable.SelectionTableRow, null, _react["default"].createElement(_SelectionTable.SelectionTableRowColumn, null, _react["default"].createElement(_SelectionTable.CheckboxTable, null)), _react["default"].createElement(_SelectionTable.SelectionTableRowColumn, null, "7842"), _react["default"].createElement(_SelectionTable.SelectionTableRowColumn, null, "25/08/2019"), _react["default"].createElement(_SelectionTable.SelectionTableRowColumn, null, "R$ 101.360,00"), _react["default"].createElement(_SelectionTable.SelectionTableRowColumn, null, "0,90% a.m."), _react["default"].createElement(_SelectionTable.SelectionTableRowColumn, null, _react["default"].createElement(_DropDown.SimpleDropDown, {
    customButton: _react["default"].createElement(DropDownButton, null, _react["default"].createElement(MoreVertIcon, null)),
    position: "bottom-center-right"
  }, _react["default"].createElement(DropDownContent, null, _react["default"].createElement(DropDownContentRow, null, _react["default"].createElement(DropDownContentRowIcon, null, _react["default"].createElement(MoneyIcon, null)), _react["default"].createElement("div", null, "Solicitar adiantamento")), _react["default"].createElement(DropDownContentRow, null, _react["default"].createElement(DropDownContentRowIcon, null, _react["default"].createElement(DescriptionIcon, null)), _react["default"].createElement("div", null, "Detalhes do t\xEDtulo")))))))));
};

exports.responsiveSelectionTable = responsiveSelectionTable;