"use strict";

require("core-js/modules/es6.object.define-property");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

require("core-js/modules/es6.symbol");

require("core-js/modules/es6.array.index-of");

require("core-js/modules/web.dom.iterable");

require("core-js/modules/es6.array.iterator");

require("core-js/modules/es6.object.to-string");

require("core-js/modules/es6.object.keys");

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _Helpers = require("../Helpers");

var _KeyValueDisplay = require("./KeyValueDisplay.styles");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

var KeyValueDisplay = function KeyValueDisplay(_ref) {
  var label = _ref.label,
      children = _ref.children,
      tooltip = _ref.tooltip,
      tooltipIcon = _ref.tooltipIcon,
      tooltipDirection = _ref.tooltipDirection,
      props = _objectWithoutProperties(_ref, ["label", "children", "tooltip", "tooltipIcon", "tooltipDirection"]);

  return _react["default"].createElement(_KeyValueDisplay.Box, props, _react["default"].createElement(_KeyValueDisplay.Label, null, label), _react["default"].createElement(_KeyValueDisplay.Value, null, children), tooltip && _react["default"].createElement(_KeyValueDisplay.TooltipContainer, null, _react["default"].createElement(_Helpers.TooltipBox, {
    content: tooltip,
    mount: tooltipDirection,
    fixed: true
  }, _react["default"].createElement(_KeyValueDisplay.IconContainer, null, tooltipIcon))));
};

KeyValueDisplay.propTypes = {
  label: _propTypes["default"].string,
  children: _propTypes["default"].oneOfType([_propTypes["default"].string, _propTypes["default"].number, _propTypes["default"].element, _propTypes["default"].arrayOf(_propTypes["default"].element)]),
  tooltip: _propTypes["default"].oneOfType([_propTypes["default"].string, _propTypes["default"].number, _propTypes["default"].element]),
  tooltipIcon: _propTypes["default"].oneOfType([_propTypes["default"].element]),
  tooltipDirection: _propTypes["default"].string
};
KeyValueDisplay.defaultProps = {
  label: 'Chave',
  children: 'Valor',
  tooltip: null,
  tooltipIcon: _react["default"].createElement(_KeyValueDisplay.Icon, null),
  tooltipDirection: 'top'
};
var _default = KeyValueDisplay;
exports["default"] = _default;