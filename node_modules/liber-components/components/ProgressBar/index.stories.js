"use strict";

require("core-js/modules/es6.object.define-property");

require("core-js/modules/es6.array.iterator");

require("core-js/modules/es6.string.iterator");

require("core-js/modules/es6.weak-map");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.defaultStory = exports["default"] = void 0;

require("core-js/modules/es6.regexp.to-string");

require("core-js/modules/es6.date.to-string");

require("core-js/modules/es6.object.to-string");

require("core-js/modules/es7.symbol.async-iterator");

require("core-js/modules/es6.symbol");

require("core-js/modules/web.dom.iterable");

require("core-js/modules/es6.array.is-array");

var _react = _interopRequireWildcard(require("react"));

var _Icons = require("../Icons");

var _ProgressBar = require("./ProgressBar");

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function _getRequireWildcardCache() { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; if (obj != null) { var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance"); }

function _iterableToArrayLimit(arr, i) { if (!(Symbol.iterator in Object(arr) || Object.prototype.toString.call(arr) === "[object Arguments]")) { return; } var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

var changeStep = function changeStep(callback, stage) {
  return function () {
    callback(stage);
  };
};

var Progress = function Progress() {
  var _useState = (0, _react.useState)(0),
      _useState2 = _slicedToArray(_useState, 2),
      stage = _useState2[0],
      onChange = _useState2[1];

  return _react["default"].createElement(_ProgressBar.ProgressContainer, null, _react["default"].createElement(_ProgressBar.Step, {
    onClick: changeStep(onChange, 0),
    type: "checked"
  }, "1", _react["default"].createElement(_ProgressBar.Label, {
    checked: true
  }, "Documento")), _react["default"].createElement(_ProgressBar.Separator, {
    full: stage >= 1
  }), _react["default"].createElement(_ProgressBar.Step, {
    onClick: changeStep(onChange, 1),
    type: stage >= 1 ? 'checked' : 'basic'
  }, "2", _react["default"].createElement(_ProgressBar.Label, {
    checked: stage >= 1
  }, "Partes")), _react["default"].createElement(_ProgressBar.Separator, {
    full: stage >= 2
  }), _react["default"].createElement(_ProgressBar.Step, {
    onClick: changeStep(onChange, 2),
    type: stage >= 2 ? 'checked' : 'final'
  }, _react["default"].createElement(_Icons.MdCheck, null), _react["default"].createElement(_ProgressBar.Label, {
    checked: stage >= 2
  }, "Solicita\xE7\xE3o criada")));
};

var _default = {
  title: 'Components 2.0|ProgressBar',
  parameters: {
    jest: ['ProgressBar']
  }
};
exports["default"] = _default;

var defaultStory = function defaultStory() {
  return _react["default"].createElement(Progress, null);
};

exports.defaultStory = defaultStory;
defaultStory.story = {
  name: 'default'
};