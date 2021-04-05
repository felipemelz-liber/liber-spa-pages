"use strict";

require("core-js/modules/es6.object.define-property");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireDefault(require("react"));

var _reactRedux = require("react-redux");

var _ToastList = _interopRequireDefault(require("./ToastList"));

var _store = _interopRequireDefault(require("../store"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var _default = function _default(props) {
  return _react["default"].createElement(_reactRedux.Provider, {
    store: _store["default"]
  }, _react["default"].createElement(_ToastList["default"], props));
};

exports["default"] = _default;