"use strict";

require("core-js/modules/es6.object.define-property");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.white = exports.error = exports.alert = exports.success = exports.primary = exports.withHeight = exports.rounded = exports.simple = exports["default"] = void 0;

var _react = _interopRequireDefault(require("react"));

var _styledComponents = _interopRequireDefault(require("styled-components"));

var _Icons = require("../Icons");

var _Tags = require("./Tags");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var Row = _styledComponents["default"].div.withConfig({
  displayName: "tagstories__Row",
  componentId: "d6k148-0"
})(["display:flex;align-items:center;justify-content:flex-start;margin-top:24px;"]);

var _default = {
  title: 'Components 2.0|Tags',
  parameters: {
    jest: ['Tag']
  }
};
exports["default"] = _default;

var simple = function simple() {
  return _react["default"].createElement(Row, null, _react["default"].createElement(_Tags.Tag, {
    disabled: true
  }, "TAG"), _react["default"].createElement(_Tags.Tag, null, "TAG"), _react["default"].createElement(_Tags.Tag, {
    closable: true
  }, "TAG"), _react["default"].createElement(_Tags.Tag, null, _react["default"].createElement(_Icons.MdHelpCircle, null), "TAG"));
};

exports.simple = simple;

var rounded = function rounded() {
  return _react["default"].createElement(Row, null, _react["default"].createElement(_Tags.Tag, {
    variant: "rounded",
    disabled: true
  }, "TAG"), _react["default"].createElement(_Tags.Tag, {
    variant: "rounded"
  }, "TAG"), _react["default"].createElement(_Tags.Tag, {
    variant: "rounded",
    closable: true
  }, "TAG"), _react["default"].createElement(_Tags.Tag, {
    variant: "rounded"
  }, _react["default"].createElement(_Icons.MdHelpCircle, null), "TAG"));
};

exports.rounded = rounded;

var withHeight = function withHeight() {
  return _react["default"].createElement(Row, null, _react["default"].createElement(_Tags.Tag, {
    height: 36,
    disabled: true
  }, "TAG"), _react["default"].createElement(_Tags.Tag, {
    height: 36
  }, "TAG"), _react["default"].createElement(_Tags.Tag, {
    height: 36,
    closable: true
  }, "TAG"), _react["default"].createElement(_Tags.Tag, {
    height: 36
  }, _react["default"].createElement(_Icons.MdHelpCircle, null), "TAG"));
};

exports.withHeight = withHeight;

var primary = function primary() {
  return _react["default"].createElement(Row, null, _react["default"].createElement(_Tags.PrimaryTag, {
    disabled: true
  }, "TAG"), _react["default"].createElement(_Tags.PrimaryTag, null, "TAG"), _react["default"].createElement(_Tags.PrimaryTag, {
    closable: true
  }, "TAG"), _react["default"].createElement(_Tags.PrimaryTag, null, _react["default"].createElement(_Icons.MdHelpCircle, null), "TAG"));
};

exports.primary = primary;

var success = function success() {
  return _react["default"].createElement(Row, null, _react["default"].createElement(_Tags.SuccessTag, {
    disabled: true
  }, "TAG"), _react["default"].createElement(_Tags.SuccessTag, null, "TAG"), _react["default"].createElement(_Tags.SuccessTag, {
    closable: true
  }, "TAG"), _react["default"].createElement(_Tags.SuccessTag, null, _react["default"].createElement(_Icons.MdHelpCircle, null), "TAG"));
};

exports.success = success;

var alert = function alert() {
  return _react["default"].createElement(Row, null, _react["default"].createElement(_Tags.AlertTag, {
    disabled: true
  }, "TAG"), _react["default"].createElement(_Tags.AlertTag, null, "TAG"), _react["default"].createElement(_Tags.AlertTag, {
    closable: true
  }, "TAG"), _react["default"].createElement(_Tags.AlertTag, null, _react["default"].createElement(_Icons.MdHelpCircle, null), "TAG"));
};

exports.alert = alert;

var error = function error() {
  return _react["default"].createElement(Row, null, _react["default"].createElement(_Tags.ErrorTag, {
    disabled: true
  }, "TAG"), _react["default"].createElement(_Tags.ErrorTag, null, "TAG"), _react["default"].createElement(_Tags.ErrorTag, {
    closable: true
  }, "TAG"), _react["default"].createElement(_Tags.ErrorTag, null, _react["default"].createElement(_Icons.MdHelpCircle, null), "TAG"));
};

exports.error = error;

var white = function white() {
  return _react["default"].createElement(Row, null, _react["default"].createElement(_Tags.WhiteTag, {
    disabled: true
  }, "TAG"), _react["default"].createElement(_Tags.WhiteTag, null, "TAG"), _react["default"].createElement(_Tags.WhiteTag, {
    closable: true
  }, "TAG"), _react["default"].createElement(_Tags.WhiteTag, null, _react["default"].createElement(_Icons.MdHelpCircle, null), "TAG"));
};

exports.white = white;