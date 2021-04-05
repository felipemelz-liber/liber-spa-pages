"use strict";

require("core-js/modules/es6.object.define-property");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _styles = require("./styles");

var _MaterialDesign = require("../Icons/MaterialDesign");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var Alert = function Alert(_ref) {
  var additionalInfoContent = _ref.additionalInfoContent,
      className = _ref.className,
      children = _ref.children,
      icon = _ref.icon,
      onClose = _ref.onClose;
  return _react["default"].createElement("div", {
    className: className
  }, _react["default"].createElement(_styles.AlertIcon, null, icon), _react["default"].createElement(_styles.AlertContent, null, _react["default"].createElement(_styles.AlertInfoContent, null, children), additionalInfoContent && _react["default"].createElement(_styles.AlertAdditionalInfoContent, null, additionalInfoContent)), _react["default"].createElement(_styles.AlertIcon, null, _react["default"].createElement(_styles.CloseIcon, {
    onClick: onClose
  })));
};

Alert.propTypes = {
  additionalInfoContent: _propTypes["default"].string,
  className: _propTypes["default"].string,
  children: _propTypes["default"].oneOfType([_propTypes["default"].string, _propTypes["default"].element, _propTypes["default"].arrayOf(_propTypes["default"].element), _propTypes["default"].arrayOf(_propTypes["default"].string)]),
  icon: _propTypes["default"].node,
  onClose: _propTypes["default"].func
};
Alert.defaultProps = {
  additionalInfoContent: '',
  className: '',
  children: '',
  icon: _react["default"].createElement(_MaterialDesign.MdAlertCircle, null),
  onClose: function onClose() {}
};
var _default = Alert;
exports["default"] = _default;