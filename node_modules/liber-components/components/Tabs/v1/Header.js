"use strict";

require("core-js/modules/es6.object.define-property");

require("core-js/modules/web.dom.iterable");

require("core-js/modules/es6.array.iterator");

require("core-js/modules/es6.object.to-string");

require("core-js/modules/es6.string.iterator");

require("core-js/modules/es6.weak-map");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireWildcard(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function _getRequireWildcardCache() { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; if (obj != null) { var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

var Header = function Header(_ref) {
  var children = _ref.children,
      labels = _ref.labels,
      slider = _ref.slider,
      header = _ref.header,
      asList = _ref.asList;
  return _react["default"].createElement(_react.Fragment, null, asList ? children(labels, slider, header) : children(labels));
};

Header.propTypes = {
  children: _propTypes["default"].func,
  labels: _propTypes["default"].oneOfType([_propTypes["default"].any]),
  slider: _propTypes["default"].oneOfType([_propTypes["default"].any]),
  header: _propTypes["default"].oneOfType([_propTypes["default"].any]),
  asList: _propTypes["default"].bool
};
Header.defaultProps = {
  children: function children() {},
  labels: null,
  slider: null,
  header: null,
  asList: false
};
var _default = Header;
exports["default"] = _default;