"use strict";

require("core-js/modules/es6.object.define-property");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _TableSelectControl = require("./TableSelectControl.styles");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var renderSelectedTitlesLabel = function renderSelectedTitlesLabel(selectedTitles) {
  if (!selectedTitles) {
    return 'Nenhum título selecionado';
  }

  if (selectedTitles === 1) {
    return "".concat(selectedTitles, " t\xEDtulo selecionado");
  }

  return "".concat(selectedTitles, " t\xEDtulos selecionados");
};

var TableSelectControl = function TableSelectControl(props) {
  var totalSelectedTitles = props.totalSelectedTitles,
      selectedTitles = props.selectedTitles,
      onDeselect = props.onDeselect,
      type = props.type;
  return _react["default"].createElement(_TableSelectControl.Container, props, _react["default"].createElement(_TableSelectControl.SelectedTitles, {
    type: type
  }, renderSelectedTitlesLabel(selectedTitles)), _react["default"].createElement(_TableSelectControl.TotalSelectedTitles, {
    type: type,
    onClick: onDeselect
  }, _react["default"].createElement(_TableSelectControl.Currency, {
    type: type
  }, "R$"), totalSelectedTitles, type !== 'empty' && _react["default"].createElement(_TableSelectControl.DeselectIndicator, {
    type: type
  })));
};

TableSelectControl.propTypes = {
  selectedTitles: _propTypes["default"].number,
  totalSelectedTitles: _propTypes["default"].string,
  type: _propTypes["default"].string,
  onDeselect: _propTypes["default"].func
};
TableSelectControl.defaultProps = {
  selectedTitles: 0,
  totalSelectedTitles: '0,00',
  type: 'empty',
  onDeselect: function onDeselect() {}
};
var _default = TableSelectControl;
exports["default"] = _default;