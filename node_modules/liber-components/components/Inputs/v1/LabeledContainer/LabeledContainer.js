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

var _LabeledContainer = require("./LabeledContainer.styles");

var _Base = require("../Base.styles");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

var LabeledContainer = function LabeledContainer(_ref) {
  var children = _ref.children,
      errorMessage = _ref.errorMessage,
      label = _ref.label,
      props = _objectWithoutProperties(_ref, ["children", "errorMessage", "label"]);

  return _react["default"].createElement("div", props, _react["default"].createElement(_LabeledContainer.LabelContainer, null, _react["default"].createElement("span", null, label), _react["default"].createElement(_Base.InputError, {
    visible: Boolean(errorMessage)
  }, errorMessage)), children);
};

LabeledContainer.propTypes = {
  children: _propTypes["default"].oneOfType([_propTypes["default"].element, _propTypes["default"].arrayOf(_propTypes["default"].element)]),
  errorMessage: _propTypes["default"].string,
  label: _propTypes["default"].string.isRequired
};
LabeledContainer.defaultProps = {
  children: null,
  errorMessage: ''
};
var _default = LabeledContainer;
exports["default"] = _default;