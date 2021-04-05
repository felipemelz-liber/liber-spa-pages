'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _Helpers = require('../../../Helpers');

var _TableTab = require('./TableTab.styles');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

var TableTab = function TableTab(_ref) {
  var children = _ref.children,
      tooltip = _ref.tooltip,
      tooltipIcon = _ref.tooltipIcon,
      tooltipDirection = _ref.tooltipDirection,
      props = _objectWithoutProperties(_ref, ['children', 'tooltip', 'tooltipIcon', 'tooltipDirection']);

  return _react2.default.createElement(
    _TableTab.Tab,
    props,
    children,
    tooltip && _react2.default.createElement(
      _TableTab.TooltipContainer,
      null,
      _react2.default.createElement(
        _Helpers.TooltipBox,
        {
          content: tooltip,
          mount: tooltipDirection,
          fixed: true
        },
        _react2.default.createElement(
          _TableTab.IconContainer,
          null,
          tooltipIcon
        )
      )
    )
  );
};

TableTab.propTypes = {
  children: _propTypes2.default.oneOfType([_propTypes2.default.string, _propTypes2.default.number, _propTypes2.default.element, _propTypes2.default.arrayOf(_propTypes2.default.element)]),
  tooltip: _propTypes2.default.oneOfType([_propTypes2.default.string, _propTypes2.default.number, _propTypes2.default.element]),
  tooltipIcon: _propTypes2.default.oneOfType([_propTypes2.default.element]),
  tooltipDirection: _propTypes2.default.string
};
TableTab.defaultProps = {
  children: '',
  tooltip: null,
  tooltipIcon: _react2.default.createElement(_TableTab.Icon, null),
  tooltipDirection: 'bottom'
};

exports.default = TableTab;