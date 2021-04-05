"use strict";

require("core-js/modules/es6.object.define-property");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.monthCalendar = exports["default"] = void 0;

var _react = _interopRequireDefault(require("react"));

var _addonActions = require("@storybook/addon-actions");

var _styledComponents = _interopRequireDefault(require("styled-components"));

var _Calendar = _interopRequireDefault(require("../Calendar"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var Container = _styledComponents["default"].div.withConfig({
  displayName: "indexstories__Container",
  componentId: "n9h17z-0"
})(["width:500px;height:500px;"]);

var _default = {
  title: 'Components 2.0|Calendar',
  parameters: {
    jest: ['Calendar']
  }
};
exports["default"] = _default;

var monthCalendar = function monthCalendar() {
  return _react["default"].createElement(Container, null, _react["default"].createElement(_Calendar["default"], {
    view: "month",
    version: "2",
    onClick: (0, _addonActions.action)('onClick'),
    onNavigate: (0, _addonActions.action)('onNavigate'),
    minDate: "07/06/2019"
  }));
};

exports.monthCalendar = monthCalendar;
monthCalendar.story = {
  name: 'month calendar'
};