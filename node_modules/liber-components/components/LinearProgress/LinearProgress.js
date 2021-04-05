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

var LinearProgress = function LinearProgress(_ref) {
  var determinate = _ref.determinate,
      value = _ref.value,
      background = _ref.background,
      height = _ref.height;

  if (determinate) {
    return _react["default"].createElement(_styles.BackgroundBar, {
      height: height
    }, _react["default"].createElement(_styles.DeterminateBar, {
      size: value,
      background: background
    }));
  }

  return _react["default"].createElement(_styles.BackgroundBar, {
    height: height
  }, _react["default"].createElement(_styles.IndeterminateBar, null));
};

LinearProgress.propTypes = {
  determinate: _propTypes["default"].bool,
  value: _propTypes["default"].number,
  background: _propTypes["default"].string,
  height: _propTypes["default"].number
};
LinearProgress.defaultProps = {
  determinate: false,
  value: 0,
  height: null,
  background: 'linear-gradient(to left, #83deff, #009dff);'
};
var _default = LinearProgress;
exports["default"] = _default;