"use strict";

require("core-js/modules/es6.object.define-property");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

require("core-js/modules/es7.symbol.async-iterator");

require("core-js/modules/es6.symbol");

require("core-js/modules/es6.array.find-index");

require("core-js/modules/es6.array.is-array");

require("core-js/modules/web.dom.iterable");

require("core-js/modules/es6.array.iterator");

require("core-js/modules/es6.object.to-string");

require("core-js/modules/es6.object.keys");

require("core-js/modules/es6.array.map");

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _lodash = _interopRequireDefault(require("lodash"));

var _GenericStyles = require("../../GenericStyles");

var _Step = _interopRequireDefault(require("./Step"));

var _styles = require("./styles");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

var generateSteps = function generateSteps(steps, completed, current, _onClick) {
  if (_typeof(steps) === 'object') {
    return Object.keys(steps).map(function (label, index) {
      var key = _lodash["default"].uniqueId(label);

      var num = index + 1;
      return _react["default"].createElement(_Step["default"], {
        key: key,
        active: current === num,
        connect: num > 1,
        complete: completed ? num <= completed : current > num,
        label: steps[label],
        number: num,
        clickable: completed ? num <= completed + 1 : false,
        onClick: function onClick() {
          return typeof _onClick === 'function' ? _onClick(steps[label], num) : {};
        }
      });
    });
  }

  return steps.map(function (label, index) {
    var key = _lodash["default"].uniqueId(label);

    var num = index + 1;
    return _react["default"].createElement(_Step["default"], {
      key: key,
      active: current === num,
      connect: num > 1,
      complete: completed ? num <= completed : current > num,
      label: label,
      number: num,
      clickable: completed ? num <= completed + 1 : Boolean(_onClick),
      onClick: function onClick() {
        return _onClick(steps[label], num);
      }
    });
  });
};

var getStepNum = function getStepNum(steps, current) {
  if (typeof current === 'string') {
    if (Array.isArray(steps)) {
      return steps.findIndex(function (step) {
        return step === current;
      }) + 1;
    }

    return Object.keys(steps).findIndex(function (step) {
      return step === current;
    }) + 1;
  }

  return current;
};

var ProgressBar = function ProgressBar(_ref) {
  var steps = _ref.steps,
      completed = _ref.completed,
      current = _ref.current,
      label = _ref.label,
      onClick = _ref.onClick;
  var stepNum = getStepNum(steps, current);
  return _react["default"].createElement(_styles.Progress, null, _react["default"].createElement(_GenericStyles.Container, null, _react["default"].createElement(_styles.LabelUpper, null, "Cadastro | ", label || "Etapa ".concat(stepNum)), _react["default"].createElement(_styles.Steps, null, generateSteps(steps, completed, stepNum, onClick)), _react["default"].createElement(_styles.LabelLower, null, "Cadastro | ", label || "Etapa ".concat(stepNum))));
};

ProgressBar.propTypes = {
  steps: _propTypes["default"].oneOfType([_propTypes["default"].arrayOf(_propTypes["default"].string), _propTypes["default"].objectOf(_propTypes["default"].string)]).isRequired,
  completed: _propTypes["default"].number,
  current: _propTypes["default"].oneOfType([_propTypes["default"].number, _propTypes["default"].string]).isRequired,
  label: _propTypes["default"].string,
  onClick: _propTypes["default"].func
};
ProgressBar.defaultProps = {
  completed: undefined,
  label: '',
  onClick: undefined
};
var _default = ProgressBar;
exports["default"] = _default;