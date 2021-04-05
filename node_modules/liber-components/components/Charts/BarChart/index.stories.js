"use strict";

require("core-js/modules/es6.object.define-property");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.defaultStory = exports["default"] = void 0;

var _react = _interopRequireDefault(require("react"));

var _moment = _interopRequireDefault(require("moment"));

var _BarChart = _interopRequireDefault(require("./BarChart"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var _default = {
  title: 'Components 1.0|Charts/Bar Chart',
  parameters: {
    jest: ['BarChart']
  }
};
exports["default"] = _default;

var defaultStory = function defaultStory() {
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
};

exports.defaultStory = defaultStory;
defaultStory.story = {
  name: 'default'
};