"use strict";

require("core-js/modules/es6.object.define-property");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.withClick = exports.withHover = exports["default"] = void 0;

var _react = _interopRequireDefault(require("react"));

var _PieChart = _interopRequireDefault(require("../PieChart"));

var _ChartContainer = _interopRequireDefault(require("./ChartContainer"));

var _ChartLabel = _interopRequireDefault(require("../ChartLabel"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var _default = {
  title: 'Components 1.0|Charts/Chart Container',
  parameters: {
    jest: ['ChartContainer']
  }
};
exports["default"] = _default;

var withHover = function withHover() {
  return _react["default"].createElement(_ChartContainer["default"], null, _react["default"].createElement(_PieChart["default"], null), _react["default"].createElement(_ChartLabel["default"], {
    eventKey: "0"
  }, "Conteudo 1"), _react["default"].createElement(_ChartLabel["default"], {
    eventKey: "1"
  }, "Conteudo 2"), _react["default"].createElement(_ChartLabel["default"], {
    eventKey: "2"
  }, "Conteudo 3"), _react["default"].createElement(_ChartLabel["default"], {
    eventKey: "3"
  }, "Conteudo 4"));
};

exports.withHover = withHover;

var withClick = function withClick() {
  return _react["default"].createElement(_ChartContainer["default"], {
    event: "click"
  }, _react["default"].createElement(_PieChart["default"], null), _react["default"].createElement(_ChartLabel["default"], {
    eventKey: "0"
  }, "Conteudo 1"), _react["default"].createElement(_ChartLabel["default"], {
    eventKey: "1"
  }, "Conteudo 2"), _react["default"].createElement(_ChartLabel["default"], {
    eventKey: "2"
  }, "Conteudo 3"), _react["default"].createElement(_ChartLabel["default"], {
    eventKey: "3"
  }, "Conteudo 4"));
};

exports.withClick = withClick;