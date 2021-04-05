'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _TableSelectControl = require('./TableSelectControl.styles');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var renderSelectedTitlesLabel = function renderSelectedTitlesLabel(selectedTitles) {
  if (!selectedTitles) {
    return 'Nenhum título selecionado';
  }
  if (selectedTitles === 1) {
    return selectedTitles + ' t\xEDtulo selecionado';
  }
  return selectedTitles + ' t\xEDtulos selecionados';
}; /* TODO: add unit test */


var TableSelectControl = function TableSelectControl(_ref) {
  var totalSelectedTitles = _ref.totalSelectedTitles,
      selectedTitles = _ref.selectedTitles,
      onDeselect = _ref.onDeselect,
      type = _ref.type;
  return _react2.default.createElement(
    _TableSelectControl.Container,
    null,
    _react2.default.createElement(
      _TableSelectControl.SelectedTitles,
      { type: type },
      renderSelectedTitlesLabel(selectedTitles)
    ),
    _react2.default.createElement(
      _TableSelectControl.TotalSelectedTitles,
      { type: type, onClick: onDeselect },
      _react2.default.createElement(
        _TableSelectControl.Currency,
        { type: type },
        'R$'
      ),
      totalSelectedTitles,
      type !== 'empty' && _react2.default.createElement(_TableSelectControl.DeselectIndicator, { type: type })
    )
  );
};

TableSelectControl.propTypes = {
  selectedTitles: _propTypes2.default.number,
  totalSelectedTitles: _propTypes2.default.string,
  type: _propTypes2.default.string,
  onDeselect: _propTypes2.default.func
};

TableSelectControl.defaultProps = {
  selectedTitles: 0,
  totalSelectedTitles: '0,00',
  type: 'empty',
  onDeselect: function onDeselect() {}
};

exports.default = TableSelectControl;