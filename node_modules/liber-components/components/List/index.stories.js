"use strict";

require("core-js/modules/es6.object.define-property");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.withSelectionControl = exports.SelectionWithFixedWidth = exports.selectionWithSubItens = exports.simpleSelection = exports.withData = exports.withFixedWidth = exports.withSubItens = exports.simple = exports["default"] = void 0;

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

var _addonActions = require("@storybook/addon-actions");

var _List = require("./List");

var _Icons = require("../Icons");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance"); }

function _iterableToArrayLimit(arr, i) { if (!(Symbol.iterator in Object(arr) || Object.prototype.toString.call(arr) === "[object Arguments]")) { return; } var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance"); }

function _iterableToArray(iter) { if (Symbol.iterator in Object(iter) || Object.prototype.toString.call(iter) === "[object Arguments]") return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = new Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } }

var Center = _styledComponents["default"].div.withConfig({
  displayName: "indexstories__Center",
  componentId: "sc-15wf1ol-0"
})(["width:100%;height:100vh;display:flex;justify-content:center;align-items:center;background-color:#fafdff;"]);

var ListItemContainer = _styledComponents["default"].div.withConfig({
  displayName: "indexstories__ListItemContainer",
  componentId: "sc-15wf1ol-1"
})(["display:flex;justify-content:space-between;"]);

var ListItemKey = _styledComponents["default"].div.withConfig({
  displayName: "indexstories__ListItemKey",
  componentId: "sc-15wf1ol-2"
})(["font-family:Roboto;font-size:16px;color:#798e9b;"]);

var ListItemValue = _styledComponents["default"].div.withConfig({
  displayName: "indexstories__ListItemValue",
  componentId: "sc-15wf1ol-3"
})(["font-family:Roboto;font-size:16px;color:#405f71;font-weight:500;"]);

var ListItemValueAlert = _styledComponents["default"].div.withConfig({
  displayName: "indexstories__ListItemValueAlert",
  componentId: "sc-15wf1ol-4"
})(["font-family:Roboto;font-size:16px;color:#fabe00;font-weight:500;"]);

var ListItemValueError = _styledComponents["default"].div.withConfig({
  displayName: "indexstories__ListItemValueError",
  componentId: "sc-15wf1ol-5"
})(["font-family:Roboto;font-size:16px;color:#dc3545;font-weight:500;"]);

var ListItemValueSuccess = _styledComponents["default"].div.withConfig({
  displayName: "indexstories__ListItemValueSuccess",
  componentId: "sc-15wf1ol-6"
})(["font-family:Roboto;font-size:16px;color:#13ce66;font-weight:500;"]);

var ListItemAction = _styledComponents["default"].div.withConfig({
  displayName: "indexstories__ListItemAction",
  componentId: "sc-15wf1ol-7"
})(["font-family:Roboto;font-size:16px;background-color:#ffffff;color:#009dff;font-weight:500;display:flex;align-items:center;&:hover{cursor:pointer;}"]);

var ListItemActionIcon = (0, _styledComponents["default"])(_Icons.MdDownload).withConfig({
  displayName: "indexstories__ListItemActionIcon",
  componentId: "sc-15wf1ol-8"
})(["fill:#009dff;width:16px;height:16px;margin-right:6px;"]);

var ListHeaderContainer = _styledComponents["default"].div.withConfig({
  displayName: "indexstories__ListHeaderContainer",
  componentId: "sc-15wf1ol-9"
})(["display:flex;"]);

var ListHeaderLabelContainer = _styledComponents["default"].div.withConfig({
  displayName: "indexstories__ListHeaderLabelContainer",
  componentId: "sc-15wf1ol-10"
})(["display:flex;justify-content:space-between;align-items:center;width:100%;"]);

var ListHeaderIconsContainer = _styledComponents["default"].div.withConfig({
  displayName: "indexstories__ListHeaderIconsContainer",
  componentId: "sc-15wf1ol-11"
})(["display:flex;align-items:center;width:fit-content;"]);

var ListHeaderViewIcon = (0, _styledComponents["default"])(_Icons.MdEye).withConfig({
  displayName: "indexstories__ListHeaderViewIcon",
  componentId: "sc-15wf1ol-12"
})(["fill:#798e9b;width:16px;height:16px;margin:0px 8px;cursor:pointer;"]);
var ListHeaderEditIcon = (0, _styledComponents["default"])(_Icons.MdEdit).withConfig({
  displayName: "indexstories__ListHeaderEditIcon",
  componentId: "sc-15wf1ol-13"
})(["fill:#798e9b;width:16px;height:16px;margin:0px 8px;cursor:pointer;"]);
var ListHeaderDeleteIcon = (0, _styledComponents["default"])(_Icons.MdDelete).withConfig({
  displayName: "indexstories__ListHeaderDeleteIcon",
  componentId: "sc-15wf1ol-14"
})(["fill:#798e9b;width:16px;height:16px;margin:0px 8px;cursor:pointer;"]);

var makeSelection = function makeSelection(selected, value) {
  if (selected.includes(value)) {
    return selected.filter(function (item) {
      return item !== value;
    });
  }

  return [].concat(_toConsumableArray(selected), [value]);
};

var _default = {
  title: 'Components 2.0|List',
  parameters: {
    jest: ['List']
  }
};
exports["default"] = _default;

var simple = function simple() {
  return _react["default"].createElement(Center, null, _react["default"].createElement(_List.List, null, _react["default"].createElement(_List.ListHeader, null, "Header"), _react["default"].createElement(_List.ListRow, null, _react["default"].createElement(_List.ListItem, null, "Exemplo de conte\xFAdo para lista simples.")), _react["default"].createElement(_List.ListRow, null, _react["default"].createElement(_List.ListItem, null, "Exemplo de conte\xFAdo para lista simples.")), _react["default"].createElement(_List.ListRow, null, _react["default"].createElement(_List.ListItem, null, "Exemplo de conte\xFAdo para lista simples.")), _react["default"].createElement(_List.ListRow, null, _react["default"].createElement(_List.ListItem, null, "Exemplo de conte\xFAdo para lista simples.")), _react["default"].createElement(_List.ListFooter, null, "Footer")));
};

exports.simple = simple;

var withSubItens = function withSubItens() {
  return _react["default"].createElement(Center, null, _react["default"].createElement(_List.List, null, _react["default"].createElement(_List.ListHeader, null, "Header"), _react["default"].createElement(_List.ListRow, null, _react["default"].createElement(_List.ListItem, null, "Exemplo de conteudo para lista com sub items."), _react["default"].createElement(_List.ListSubItem, null, "Exemplo de conteudo para lista com sub items.")), _react["default"].createElement(_List.ListRow, null, _react["default"].createElement(_List.ListItem, null, "Exemplo de conteudo para lista com sub items."), _react["default"].createElement(_List.ListSubItem, null, "Exemplo de conteudo para lista com sub items.")), _react["default"].createElement(_List.ListRow, null, _react["default"].createElement(_List.ListItem, null, "Exemplo de conteudo para lista com sub items.")), _react["default"].createElement(_List.ListRow, null, _react["default"].createElement(_List.ListItem, null, "Exemplo de conteudo para lista com sub items.")), _react["default"].createElement(_List.ListFooter, null, "Footer")));
};

exports.withSubItens = withSubItens;

var withFixedWidth = function withFixedWidth() {
  return _react["default"].createElement(Center, null, _react["default"].createElement(_List.List, {
    width: "250px"
  }, _react["default"].createElement(_List.ListHeader, null, "Header"), _react["default"].createElement(_List.ListRow, null, _react["default"].createElement(_List.ListItem, null, "Exemplo de conteudo para lista com sub items."), _react["default"].createElement(_List.ListSubItem, null, "Exemplo de conteudo para lista com sub items.")), _react["default"].createElement(_List.ListRow, null, _react["default"].createElement(_List.ListItem, null, "Exemplo de conteudo para lista com sub items."), _react["default"].createElement(_List.ListSubItem, null, "Exemplo de conteudo para lista com sub items.")), _react["default"].createElement(_List.ListRow, null, _react["default"].createElement(_List.ListItem, null, "Exemplo de conteudo para lista com sub items.")), _react["default"].createElement(_List.ListRow, null, _react["default"].createElement(_List.ListItem, null, "Exemplo de conteudo para lista com sub items.")), _react["default"].createElement(_List.ListFooter, null, "Footer")));
};

exports.withFixedWidth = withFixedWidth;

var withData = function withData() {
  return _react["default"].createElement(Center, null, _react["default"].createElement(_List.List, {
    width: "300px"
  }, _react["default"].createElement(_List.ListHeader, null, "Header"), _react["default"].createElement(_List.ListRow, null, _react["default"].createElement(_List.ListItem, null, _react["default"].createElement(ListItemContainer, null, _react["default"].createElement(ListItemKey, null, "Conte\xFAdo da lista"), _react["default"].createElement(ListItemValue, null, "Texto")))), _react["default"].createElement(_List.ListRow, null, _react["default"].createElement(_List.ListItem, null, _react["default"].createElement(ListItemContainer, null, _react["default"].createElement(ListItemKey, null, "Conte\xFAdo da lista"), _react["default"].createElement(ListItemValueError, null, "Erro")))), _react["default"].createElement(_List.ListRow, null, _react["default"].createElement(_List.ListItem, null, _react["default"].createElement(ListItemContainer, null, _react["default"].createElement(ListItemKey, null, "Conte\xFAdo da lista"), _react["default"].createElement(ListItemValueAlert, null, "Alerta")))), _react["default"].createElement(_List.ListRow, null, _react["default"].createElement(_List.ListItem, null, _react["default"].createElement(ListItemContainer, null, _react["default"].createElement(ListItemKey, null, "Conte\xFAdo da lista"), _react["default"].createElement(ListItemValueSuccess, null, "Sucesso")))), _react["default"].createElement(_List.ListRow, null, _react["default"].createElement(_List.ListItem, null, _react["default"].createElement(ListItemContainer, null, _react["default"].createElement(ListItemKey, null, "Conte\xFAdo da lista"), _react["default"].createElement(ListItemAction, {
    onClick: (0, _addonActions.action)('click')
  }, _react["default"].createElement(ListItemActionIcon, null), "Download")))), _react["default"].createElement(_List.ListFooter, null, "Footer")));
};

exports.withData = withData;

var simpleSelection = function simpleSelection() {
  var _React$useState = _react["default"].useState([]),
      _React$useState2 = _slicedToArray(_React$useState, 2),
      selected = _React$useState2[0],
      setSelected = _React$useState2[1];

  return _react["default"].createElement(Center, null, _react["default"].createElement(_List.List, null, _react["default"].createElement(_List.ListHeader, null, _react["default"].createElement(_List.CheckboxList, {
    borderSize: 2,
    checked: selected.length === 4,
    onChange: function onChange() {
      if (selected.length === 4) {
        setSelected([]);
      } else {
        setSelected([0, 1, 2, 3]);
      }
    }
  }), "Header"), _react["default"].createElement(_List.ListRow, null, _react["default"].createElement(_List.ListItem, null, _react["default"].createElement(_List.CheckboxList, {
    checked: selected.includes(0),
    onChange: function onChange() {
      setSelected(makeSelection(selected, 0));
    }
  }), "Exemplo de conte\xFAdo para lista simples.")), _react["default"].createElement(_List.ListRow, null, _react["default"].createElement(_List.ListItem, null, _react["default"].createElement(_List.CheckboxList, {
    checked: selected.includes(1),
    onChange: function onChange() {
      setSelected(makeSelection(selected, 1));
    }
  }), "Exemplo de conte\xFAdo para lista simples.")), _react["default"].createElement(_List.ListRow, null, _react["default"].createElement(_List.ListItem, null, _react["default"].createElement(_List.CheckboxList, {
    checked: selected.includes(2),
    onChange: function onChange() {
      setSelected(makeSelection(selected, 2));
    }
  }), "Exemplo de conte\xFAdo para lista simples.")), _react["default"].createElement(_List.ListRow, null, _react["default"].createElement(_List.ListItem, null, _react["default"].createElement(_List.CheckboxList, {
    checked: selected.includes(3),
    onChange: function onChange() {
      setSelected(makeSelection(selected, 3));
    }
  }), "Exemplo de conte\xFAdo para lista simples.")), _react["default"].createElement(_List.ListFooter, null, "Footer")));
};

exports.simpleSelection = simpleSelection;

var selectionWithSubItens = function selectionWithSubItens() {
  var _React$useState3 = _react["default"].useState([]),
      _React$useState4 = _slicedToArray(_React$useState3, 2),
      selected = _React$useState4[0],
      setSelected = _React$useState4[1];

  return _react["default"].createElement(Center, null, _react["default"].createElement(_List.List, null, _react["default"].createElement(_List.ListHeader, null, _react["default"].createElement(_List.CheckboxList, {
    borderSize: 2,
    checked: selected.length === 4,
    onChange: function onChange() {
      if (selected.length === 4) {
        setSelected([]);
      } else {
        setSelected([0, 1, 2, 3]);
      }
    }
  }), "Header"), _react["default"].createElement(_List.ListRow, null, _react["default"].createElement(_List.ListItem, null, _react["default"].createElement(_List.CheckboxList, {
    checked: selected.includes(0),
    onChange: function onChange() {
      setSelected(makeSelection(selected, 0));
    }
  }), "T\xEDtulo registrado"), _react["default"].createElement(_List.ListSubItemSelection, null, "Exemplo de conteudo para lista com sub items.")), _react["default"].createElement(_List.ListRow, null, _react["default"].createElement(_List.ListItem, null, _react["default"].createElement(_List.CheckboxList, {
    checked: selected.includes(1),
    onChange: function onChange() {
      setSelected(makeSelection(selected, 1));
    }
  }), "T\xEDtulo registrado"), _react["default"].createElement(_List.ListSubItemSelection, null, "Exemplo de conteudo para lista com sub items.")), _react["default"].createElement(_List.ListRow, null, _react["default"].createElement(_List.ListItem, null, _react["default"].createElement(_List.CheckboxList, {
    checked: selected.includes(2),
    onChange: function onChange() {
      setSelected(makeSelection(selected, 2));
    }
  }), "T\xEDtulo registrado"), _react["default"].createElement(_List.ListSubItemSelection, null, "Exemplo de conteudo para lista com sub items.")), _react["default"].createElement(_List.ListRow, null, _react["default"].createElement(_List.ListItem, null, _react["default"].createElement(_List.CheckboxList, {
    checked: selected.includes(3),
    onChange: function onChange() {
      setSelected(makeSelection(selected, 3));
    }
  }), "T\xEDtulo registrado"), _react["default"].createElement(_List.ListSubItemSelection, null, "Exemplo de conteudo para lista com sub items.")), _react["default"].createElement(_List.ListFooter, null, "Footer")));
};

exports.selectionWithSubItens = selectionWithSubItens;

var SelectionWithFixedWidth = function SelectionWithFixedWidth() {
  var _React$useState5 = _react["default"].useState([]),
      _React$useState6 = _slicedToArray(_React$useState5, 2),
      selected = _React$useState6[0],
      setSelected = _React$useState6[1];

  return _react["default"].createElement(Center, null, _react["default"].createElement(_List.List, {
    width: "350px"
  }, _react["default"].createElement(_List.ListHeader, null, _react["default"].createElement(_List.CheckboxList, {
    borderSize: 2,
    checked: selected.length === 4,
    onChange: function onChange() {
      if (selected.length === 4) {
        setSelected([]);
      } else {
        setSelected([0, 1, 2, 3]);
      }
    }
  }), "Header"), _react["default"].createElement(_List.ListRow, null, _react["default"].createElement(_List.ListItem, null, _react["default"].createElement(_List.CheckboxList, {
    checked: selected.includes(0),
    onChange: function onChange() {
      setSelected(makeSelection(selected, 0));
    }
  }), "T\xEDtulo registrado"), _react["default"].createElement(_List.ListSubItemSelection, null, "Exemplo de conte\xFAdo para lista de sele\xE7\xE3o com n\xFAmero de linhas igual a 2.")), _react["default"].createElement(_List.ListRow, null, _react["default"].createElement(_List.ListItem, null, _react["default"].createElement(_List.CheckboxList, {
    checked: selected.includes(1),
    onChange: function onChange() {
      setSelected(makeSelection(selected, 1));
    }
  }), "T\xEDtulo registrado"), _react["default"].createElement(_List.ListSubItemSelection, null, "Exemplo de conte\xFAdo para lista de sele\xE7\xE3o com n\xFAmero de linhas igual a 2.")), _react["default"].createElement(_List.ListRow, null, _react["default"].createElement(_List.ListItem, null, _react["default"].createElement(_List.CheckboxList, {
    checked: selected.includes(2),
    onChange: function onChange() {
      setSelected(makeSelection(selected, 2));
    }
  }), "T\xEDtulo registrado"), _react["default"].createElement(_List.ListSubItemSelection, null, "Exemplo de conte\xFAdo para lista de sele\xE7\xE3o com n\xFAmero de linhas igual a 2.")), _react["default"].createElement(_List.ListFooter, null, "Footer")));
};

exports.SelectionWithFixedWidth = SelectionWithFixedWidth;

var withSelectionControl = function withSelectionControl() {
  var _React$useState7 = _react["default"].useState([]),
      _React$useState8 = _slicedToArray(_React$useState7, 2),
      selected = _React$useState8[0],
      setSelected = _React$useState8[1];

  return _react["default"].createElement(Center, null, _react["default"].createElement(_List.List, null, _react["default"].createElement(_List.ListHeader, null, _react["default"].createElement(ListHeaderContainer, null, _react["default"].createElement(_List.CheckboxList, {
    borderSize: 2,
    checked: selected.length === 4,
    onChange: function onChange() {
      if (selected.length === 4) {
        setSelected([]);
      } else {
        setSelected([0, 1, 2, 3]);
      }
    }
  }), _react["default"].createElement(ListHeaderLabelContainer, null, selected.length === 0 ? 'Header' : "".concat(selected.length, " selecionado").concat(selected.length !== 1 ? 's' : ''), selected.length !== 0 && _react["default"].createElement(ListHeaderIconsContainer, null, _react["default"].createElement(ListHeaderViewIcon, {
    onClick: (0, _addonActions.action)('click')
  }), _react["default"].createElement(ListHeaderEditIcon, {
    onClick: (0, _addonActions.action)('click')
  }), _react["default"].createElement(ListHeaderDeleteIcon, {
    onClick: (0, _addonActions.action)('click')
  }))))), _react["default"].createElement(_List.ListRow, null, _react["default"].createElement(_List.ListItem, null, _react["default"].createElement(_List.CheckboxList, {
    checked: selected.includes(0),
    onChange: function onChange() {
      setSelected(makeSelection(selected, 0));
    }
  }), "T\xEDtulo registrado"), _react["default"].createElement(_List.ListSubItemSelection, null, "Exemplo de conteudo para lista com sub items.")), _react["default"].createElement(_List.ListRow, null, _react["default"].createElement(_List.ListItem, null, _react["default"].createElement(_List.CheckboxList, {
    checked: selected.includes(1),
    onChange: function onChange() {
      setSelected(makeSelection(selected, 1));
    }
  }), "T\xEDtulo registrado"), _react["default"].createElement(_List.ListSubItemSelection, null, "Exemplo de conteudo para lista com sub items.")), _react["default"].createElement(_List.ListRow, null, _react["default"].createElement(_List.ListItem, null, _react["default"].createElement(_List.CheckboxList, {
    checked: selected.includes(2),
    onChange: function onChange() {
      setSelected(makeSelection(selected, 2));
    }
  }), "T\xEDtulo registrado"), _react["default"].createElement(_List.ListSubItemSelection, null, "Exemplo de conteudo para lista com sub items.")), _react["default"].createElement(_List.ListRow, null, _react["default"].createElement(_List.ListItem, null, _react["default"].createElement(_List.CheckboxList, {
    checked: selected.includes(3),
    onChange: function onChange() {
      setSelected(makeSelection(selected, 3));
    }
  }), "T\xEDtulo registrado"), _react["default"].createElement(_List.ListSubItemSelection, null, "Exemplo de conteudo para lista com sub items.")), _react["default"].createElement(_List.ListFooter, null, "Footer")));
};

exports.withSelectionControl = withSelectionControl;