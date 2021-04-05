"use strict";

require("core-js/modules/es6.object.define-property");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _styles = require("./styles");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var WhatToDo = function WhatToDo(_ref) {
  var children = _ref.children;
  return _react["default"].createElement(_styles.Box, null, _react["default"].createElement(_styles.Question, null), _react["default"].createElement(_styles.Title, null, "O que fazer?"), _react["default"].createElement(_styles.Separator, null), children);
};

WhatToDo.propTypes = {
  children: _propTypes["default"].oneOfType([_propTypes["default"].string, _propTypes["default"].element, _propTypes["default"].arrayOf(_propTypes["default"].string), _propTypes["default"].arrayOf(_propTypes["default"].element)])
};
WhatToDo.defaultProps = {
  children: ''
};
var _default = WhatToDo;
exports["default"] = _default;