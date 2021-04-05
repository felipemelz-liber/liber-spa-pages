"use strict";

require("core-js/modules/es6.object.define-property");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.withColor = exports.circularChild = exports.large = exports.topLeft = exports.topRight = exports.bottomLeft = exports.basic = exports["default"] = void 0;

var _react = _interopRequireDefault(require("react"));

var _styledComponents = _interopRequireDefault(require("styled-components"));

var _StyledButtons = require("../Buttons/v2/StyledButtons");

var _Badge = _interopRequireDefault(require("./Badge"));

var _Icons = require("../Icons");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var Center = _styledComponents["default"].div.withConfig({
  displayName: "badgestories__Center",
  componentId: "sc-1jgddp9-0"
})(["width:100%;height:100vh;display:flex;justify-content:center;align-items:center;"]);

var Circle = _styledComponents["default"].div.withConfig({
  displayName: "badgestories__Circle",
  componentId: "sc-1jgddp9-1"
})(["display:flex;align-items:center;justify-content:center;background-color:#3c596b;width:45px;height:45px;border-radius:50%;"]);

var MdFile = (0, _styledComponents["default"])(_Icons.MdFile).withConfig({
  displayName: "badgestories__MdFile",
  componentId: "sc-1jgddp9-2"
})(["fill:white;width:32px;height:32px;"]);
var _default = {
  title: 'Components 2.0|Badge'
};
exports["default"] = _default;

var basic = function basic() {
  return _react["default"].createElement(Center, null, _react["default"].createElement(_Badge["default"], {
    content: 7
  }, _react["default"].createElement(_StyledButtons.PrimaryButton, null, "SOLICITAR")));
};

exports.basic = basic;

var bottomLeft = function bottomLeft() {
  return _react["default"].createElement(Center, null, _react["default"].createElement(_Badge["default"], {
    position: {
      vertical: 'bottom',
      horizontal: 'left'
    },
    content: 27
  }, _react["default"].createElement(_StyledButtons.PrimaryButton, null, "SOLICITAR")));
};

exports.bottomLeft = bottomLeft;

var topRight = function topRight() {
  return _react["default"].createElement(Center, null, _react["default"].createElement(_Badge["default"], {
    position: {
      vertical: 'top',
      horizontal: 'right'
    },
    content: 2778
  }, _react["default"].createElement(_StyledButtons.PrimaryButton, null, "SOLICITAR")));
};

exports.topRight = topRight;

var topLeft = function topLeft() {
  return _react["default"].createElement(Center, null, _react["default"].createElement(_Badge["default"], {
    position: {
      vertical: 'top',
      horizontal: 'left'
    },
    content: 278
  }, _react["default"].createElement(_StyledButtons.PrimaryButton, null, "SOLICITAR")));
};

exports.topLeft = topLeft;

var large = function large() {
  return _react["default"].createElement(Center, null, _react["default"].createElement(_Badge["default"], {
    size: "large",
    content: 278
  }, _react["default"].createElement(_StyledButtons.PrimaryButton, null, "SOLICITAR")));
};

exports.large = large;

var circularChild = function circularChild() {
  return _react["default"].createElement(Center, null, _react["default"].createElement(_Badge["default"], {
    childShape: "circle",
    content: 1
  }, _react["default"].createElement(Circle, null, _react["default"].createElement(MdFile, null))));
};

exports.circularChild = circularChild;

var withColor = function withColor() {
  return _react["default"].createElement(Center, null, _react["default"].createElement(_Badge["default"], {
    color: "#3C596B",
    textColor: "#59dc93",
    content: 27
  }, _react["default"].createElement(_StyledButtons.PrimaryButton, null, "SOLICITAR")));
};

exports.withColor = withColor;