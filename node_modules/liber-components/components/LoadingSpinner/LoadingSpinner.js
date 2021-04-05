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

var _styles = require("./styles");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

var LoadingSpinner = function LoadingSpinner(_ref) {
  var color = _ref.color,
      size = _ref.size,
      thickness = _ref.thickness,
      props = _objectWithoutProperties(_ref, ["color", "size", "thickness"]);

  return _react["default"].createElement(_styles.Container, props, _react["default"].createElement(_styles.Spinner, {
    color: color,
    size: size,
    thickness: thickness
  }, _react["default"].createElement("span", null)));
};

LoadingSpinner.propTypes = {
  color: _propTypes["default"].string,
  size: _propTypes["default"].string,
  thickness: _propTypes["default"].string
};
LoadingSpinner.defaultProps = {
  color: null,
  size: null,
  thickness: null
};
var _default = LoadingSpinner;
exports["default"] = _default;