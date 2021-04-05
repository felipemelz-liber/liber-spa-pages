"use strict";

require("core-js/modules/es6.object.define-property");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var Tab = function Tab(_ref) {
  var label = _ref.label,
      children = _ref.children;
  return _react["default"].createElement("div", {
    "data-ref": label
  }, children);
};

Tab.propTypes = {
  label: _propTypes["default"].string,
  children: _propTypes["default"].oneOfType([_propTypes["default"].any])
};
Tab.defaultProps = {
  label: '',
  children: ''
};
var _default = Tab;
exports["default"] = _default;