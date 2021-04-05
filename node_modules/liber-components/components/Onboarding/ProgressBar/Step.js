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

var renderIcon = function renderIcon(number, active, complete, onClick, clickable) {
  if (complete) {
    return _react["default"].createElement(_styles.StepIcon, {
      complete: complete,
      onClick: clickable ? onClick : undefined,
      clickable: clickable
    }, _react["default"].createElement(_styles.StepCheck, null));
  }

  return _react["default"].createElement(_styles.StepIcon, {
    active: active,
    complete: complete,
    onClick: clickable ? onClick : undefined,
    clickable: clickable
  }, number);
};

var renderConnect = function renderConnect(connect, active, complete) {
  if (connect) {
    return _react["default"].createElement(_styles.StepConnect, {
      active: active,
      complete: complete
    });
  }

  return null;
};

var renderLabel = function renderLabel(label) {
  if (label) {
    return _react["default"].createElement(_styles.StepLabel, null, label);
  }

  return null;
};

var Step = function Step(_ref) {
  var active = _ref.active,
      clickable = _ref.clickable,
      connect = _ref.connect,
      complete = _ref.complete,
      number = _ref.number,
      label = _ref.label,
      onClick = _ref.onClick;
  return _react["default"].createElement(_styles.StepContainer, {
    active: active,
    complete: complete
  }, renderIcon(number, active, complete, onClick, clickable), renderConnect(connect, active, complete), renderLabel(label));
};

Step.propTypes = {
  active: _propTypes["default"].bool,
  clickable: _propTypes["default"].bool,
  connect: _propTypes["default"].bool,
  complete: _propTypes["default"].bool,
  number: _propTypes["default"].number.isRequired,
  label: _propTypes["default"].string,
  onClick: _propTypes["default"].func
};
Step.defaultProps = {
  active: false,
  clickable: false,
  connect: false,
  complete: false,
  label: '',
  onClick: function onClick() {}
};
var _default = Step;
exports["default"] = _default;