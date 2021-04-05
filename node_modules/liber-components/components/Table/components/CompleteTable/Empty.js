"use strict";

require("core-js/modules/es6.object.define-property");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireDefault(require("react"));

var _CompleteTable = require("./CompleteTable.styles");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var Empty = function Empty() {
  return _react["default"].createElement(_CompleteTable.DefaultEmptyState, null, "Nenhum item para ser exibido.");
};

var _default = Empty;
exports["default"] = _default;