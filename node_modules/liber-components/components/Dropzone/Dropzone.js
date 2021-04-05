"use strict";

require("core-js/modules/es6.object.define-property");

require("core-js/modules/es6.string.iterator");

require("core-js/modules/es6.weak-map");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = exports.Container = void 0;

require("core-js/modules/es6.object.assign");

require("core-js/modules/es6.symbol");

require("core-js/modules/es6.array.index-of");

require("core-js/modules/web.dom.iterable");

require("core-js/modules/es6.array.iterator");

require("core-js/modules/es6.object.to-string");

require("core-js/modules/es6.object.keys");

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _reactDropzone = _interopRequireDefault(require("react-dropzone"));

var _styledComponents = _interopRequireWildcard(require("styled-components"));

var _Themes = require("../Themes");

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function _getRequireWildcardCache() { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; if (obj != null) { var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

var Container = _styledComponents["default"].div.withConfig({
  displayName: "Dropzone__Container",
  componentId: "sc-1mtb3oe-0"
})(["display:flex;align-items:center;padding:20px;border-radius:4px;border:dashed 2px ", ";color:", ";fill:", ";font-family:Roboto;font-weight:500;transition:all 0.2s ease;", ""], function (props) {
  return (0, _Themes.handleThemeFromObject)(props.theme, 'dropzone.color', '#a4a4a4', props.color);
}, function (props) {
  return (0, _Themes.handleThemeFromObject)(props.theme, 'dropzone.color', '#a4a4a4', props.color);
}, function (props) {
  return (0, _Themes.handleThemeFromObject)(props.theme, 'dropzone.color', '#a4a4a4', props.color);
}, function (props) {
  return props.isDragActive && (0, _styledComponents.css)(["transform:scale(1.1);background:", "22;"], (0, _Themes.handleThemeFromObject)(props.theme, 'dropzone.color', '#a4a4a4', props.color));
});

exports.Container = Container;

var Dropzone = _react["default"].forwardRef(function (_ref, ref) {
  var children = _ref.children,
      color = _ref.color,
      props = _objectWithoutProperties(_ref, ["children", "color"]);

  return _react["default"].createElement(_reactDropzone["default"], _extends({
    style: {},
    ref: ref
  }, props), function (_ref2) {
    var isDragActive = _ref2.isDragActive,
        isDragAccept = _ref2.isDragAccept,
        isDragReject = _ref2.isDragReject;
    return _react["default"].createElement(Container, {
      isDragActive: isDragActive,
      isDragAccept: isDragAccept,
      isDragReject: isDragReject,
      color: color
    }, children);
  });
});

Dropzone.propTypes = {
  children: _propTypes["default"].oneOfType([_propTypes["default"].any]),
  color: _propTypes["default"].string
};
Dropzone.defaultProps = {
  children: null,
  color: null
};
var _default = Dropzone;
exports["default"] = _default;