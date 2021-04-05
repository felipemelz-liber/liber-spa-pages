"use strict";

var _react = _interopRequireDefault(require("react"));

var _react2 = require("@storybook/react");

var _moment = _interopRequireDefault(require("moment"));

var _PieChart = _interopRequireDefault(require("./PieChart"));

var _DonutChart = _interopRequireDefault(require("./DonutChart"));

var _BarChart = _interopRequireDefault(require("./BarChart"));

var _ChartContainer = _interopRequireDefault(require("./ChartContainer"));

var _ChartLabel = _interopRequireDefault(require("./ChartLabel"));

var _AreaChart = _interopRequireDefault(require("./AreaChart"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

(0, _react2.storiesOf)('Components 1.0|Charts/Area Chart', module).addParameters({
  jest: ['AreaChart']
}).add('default', function () {
  return _react["default"].createElement(_AreaChart["default"], null);
});
(0, _react2.storiesOf)('Components 1.0|Charts/Bar Chart', module).addParameters({
  jest: ['BarChart']
}).add('default', function () {
  return _react["default"].createElement("div", {
    style: {
      "float": 'right'
    }
  }, _react["default"].createElement(_BarChart["default"], {
    data: [{
      x: (0, _moment["default"])('2018-10-02'),
      y: 30,
      tooltipContent: 'content 27',
      mount: 'top',
      dynamicMount: true
    }, {
      x: (0, _moment["default"])('2018-10-04'),
      y: 10,
      tooltipContent: 'content 27',
      mount: 'top',
      dynamicMount: true
    }, {
      x: (0, _moment["default"])('2018-10-18'),
      y: 26,
      tooltipContent: 'content 27',
      mount: 'top',
      dynamicMount: true
    }, {
      x: (0, _moment["default"])('2018-10-20'),
      y: 20,
      tooltipContent: 'content 27',
      mount: 'top',
      dynamicMount: true
    }, {
      x: (0, _moment["default"])('2018-10-27'),
      y: 20,
      tooltipContent: 'content 27',
      mount: 'top',
      dynamicMount: false
    }]
  }));
});
(0, _react2.storiesOf)('Components 1.0|Charts/Chart Container', module).addParameters({
  jest: ['ChartContainer']
}).add('with hover', function () {
  return _react["default"].createElement(_ChartContainer["default"], null, _react["default"].createElement(_PieChart["default"], null), _react["default"].createElement(_ChartLabel["default"], {
    eventKey: "0"
  }, "Conteudo 1"), _react["default"].createElement(_ChartLabel["default"], {
    eventKey: "1"
  }, "Conteudo 2"), _react["default"].createElement(_ChartLabel["default"], {
    eventKey: "2"
  }, "Conteudo 3"), _react["default"].createElement(_ChartLabel["default"], {
    eventKey: "3"
  }, "Conteudo 4"));
}).add('with click', function () {
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
});
(0, _react2.storiesOf)('Components 1.0|Charts/Chart Label', module).addParameters({
  jest: ['ChartLabel']
}).add('default', function () {
  return _react["default"].createElement(_ChartLabel["default"], null, _react["default"].createElement("div", null, "Valor"));
});
(0, _react2.storiesOf)('Components 1.0|Charts/Donut Chart', module).addParameters({
  jest: ['DonutChart']
}).add('default', function () {
  return _react["default"].createElement(_DonutChart["default"], null);
});
(0, _react2.storiesOf)('Components 1.0|Charts/Pie Chart', module).addParameters({
  jest: ['PieChart']
}).add('default', function () {
  return _react["default"].createElement(_PieChart["default"], null);
});