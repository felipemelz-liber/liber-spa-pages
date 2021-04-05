"use strict";

require("core-js/modules/es6.object.define-property");

require("core-js/modules/web.dom.iterable");

require("core-js/modules/es6.array.iterator");

require("core-js/modules/es6.object.to-string");

require("core-js/modules/es6.string.iterator");

require("core-js/modules/es6.weak-map");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Next = exports.Prev = exports.NextUnit = exports.PrevUnit = exports.NextIcon = exports.PrevIcon = exports.Unit = exports.Controls = exports.Row = exports.Column = void 0;

var _react = _interopRequireDefault(require("react"));

var _styledComponents = _interopRequireWildcard(require("styled-components"));

var _Themes = require("../../../Themes");

var _Icons = require("../../../Icons");

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function _getRequireWildcardCache() { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; if (obj != null) { var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var Column = _styledComponents["default"].div.withConfig({
  displayName: "MonthCalendarstyles__Column",
  componentId: "sc-1afnfnl-0"
})(["display:inline-flex;flex-direction:column;justify-content:flex-start;align-items:center;"]);

exports.Column = Column;

var Row = _styledComponents["default"].div.withConfig({
  displayName: "MonthCalendarstyles__Row",
  componentId: "sc-1afnfnl-1"
})(["width:100%;display:flex;justify-content:flex-start;align-items:center;"]);

exports.Row = Row;
var Controls = (0, _styledComponents["default"])(Row).withConfig({
  displayName: "MonthCalendarstyles__Controls",
  componentId: "sc-1afnfnl-2"
})(["margin-bottom:32px;font-size:", ";font-weight:", ";font-family:", ";color:", ";"], function (_ref) {
  var theme = _ref.theme;
  return (0, _Themes.handleThemeFromObject)(theme, 'font-sizes.mobile-large', '14px');
}, function (_ref2) {
  var theme = _ref2.theme;
  return (0, _Themes.handleThemeFromObject)(theme, 'font-weights.medium', '500');
}, function (_ref3) {
  var theme = _ref3.theme;
  return (0, _Themes.handleThemeFromObject)(theme, 'font-family', 'Roboto');
}, function (_ref4) {
  var theme = _ref4.theme;
  return (0, _Themes.handleThemeFromObject)(theme, 'colors.dark-text', '#405f71');
});
exports.Controls = Controls;

var defineType = function defineType() {
  var type = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 'basic';
  return {
    basic: (0, _styledComponents.css)(["background-color:transparent;color:", ";&:hover{background-color:", ";}"], function (_ref5) {
      var theme = _ref5.theme;
      return (0, _Themes.handleThemeFromObject)(theme, 'colors.dark-text87', '#587383');
    }, function (_ref6) {
      var theme = _ref6.theme;
      return (0, _Themes.handleThemeFromObject)(theme, 'colors.secondary', '#f0f2f4');
    }),
    past: (0, _styledComponents.css)(["background-color:transparent;color:", ";&:hover{background-color:", ";}"], function (_ref7) {
      var theme = _ref7.theme;
      return (0, _Themes.handleThemeFromObject)(theme, 'colors.dark-text38', '#b6c2c9');
    }, function (_ref8) {
      var theme = _ref8.theme;
      return (0, _Themes.handleThemeFromObject)(theme, 'colors.secondary', '#f0f2f4');
    }),
    range: (0, _styledComponents.css)(["color:", ";"], function (_ref9) {
      var theme = _ref9.theme;
      return (0, _Themes.handleThemeFromObject)(theme, 'colors.primary', '#009dff');
    }),
    'past-range': (0, _styledComponents.css)(["color:", ";"], function (_ref10) {
      var theme = _ref10.theme;
      return (0, _Themes.handleThemeFromObject)(theme, 'colors.dark-text38', '#b6c2c9');
    }),
    disabled: (0, _styledComponents.css)(["background-color:transparent;color:", ";pointer-events:none;&:hover{background-color:", ";}"], function (_ref11) {
      var theme = _ref11.theme;
      return (0, _Themes.handleThemeFromObject)(theme, 'colors.dark-text38', '#b6c2c9');
    }, function (_ref12) {
      var theme = _ref12.theme;
      return (0, _Themes.handleThemeFromObject)(theme, 'colors.secondary', '#f0f2f4');
    }),
    empty: (0, _styledComponents.css)(["color:transparent !important;pointer-events:none;"]),
    today: (0, _styledComponents.css)(["background-color:", ";color:", ";&:hover{background-color:", ";color:", ";}"], function (_ref13) {
      var theme = _ref13.theme;
      return (0, _Themes.handleThemeFromObject)(theme, 'colors.light-blue75', '#f0f9ff');
    }, function (_ref14) {
      var theme = _ref14.theme;
      return (0, _Themes.handleThemeFromObject)(theme, 'colors.primary87', '#66c4ff');
    }, function (_ref15) {
      var theme = _ref15.theme;
      return (0, _Themes.handleThemeFromObject)(theme, 'colors.light-blue50', '#a4dcff');
    }, function (_ref16) {
      var theme = _ref16.theme;
      return (0, _Themes.handleThemeFromObject)(theme, 'colors.liber-white', '#fafdff');
    }),
    checked: (0, _styledComponents.css)(["background-color:", ";color:", ";&:hover{background-color:", ";}"], function (_ref17) {
      var theme = _ref17.theme;
      return (0, _Themes.handleThemeFromObject)(theme, 'colors.liber-blue', '#009dff');
    }, function (_ref18) {
      var theme = _ref18.theme;
      return (0, _Themes.handleThemeFromObject)(theme, 'colors.liber-white', '#fafdff');
    }, function (_ref19) {
      var theme = _ref19.theme;
      return (0, _Themes.handleThemeFromObject)(theme, 'colors.dark-blue', '#0097f5');
    }),
    label: (0, _styledComponents.css)(["background-color:transparent;color:", ";font-weight:", ";"], function (_ref20) {
      var theme = _ref20.theme;
      return (0, _Themes.handleThemeFromObject)(theme, 'colors.dark-text', '#405f71');
    }, function (_ref21) {
      var theme = _ref21.theme;
      return (0, _Themes.handleThemeFromObject)(theme, 'font-weights.medium', '500');
    })
  }[type];
};

var Unit = _styledComponents["default"].div.withConfig({
  displayName: "MonthCalendarstyles__Unit",
  componentId: "sc-1afnfnl-3"
})(["--size:36px;width:var(--size);height:var(--size);display:flex;justify-content:center;align-items:center;border-radius:2px;font-family:", ";cursor:", ";", " margin-right:4px;transition:background-color 250ms cubic-bezier(0.23,1,0.32,1) 0ms,color 250ms cubic-bezier(0.23,1,0.32,1) 0ms;&:last-child{margin-right:0px;}"], function (_ref22) {
  var theme = _ref22.theme;
  return (0, _Themes.handleThemeFromObject)(theme, 'font-family', 'Roboto');
}, function (_ref23) {
  var onClick = _ref23.onClick;
  return onClick ? 'pointer' : 'default';
}, function (_ref24) {
  var type = _ref24.type;
  return defineType(type);
});

exports.Unit = Unit;
var chevron = (0, _styledComponents.css)(["--size:24px;min-width:var(--size);max-width:var(--size);min-height:var(--size);max-height:var(--size);fill:", ";"], function (_ref25) {
  var theme = _ref25.theme;
  return (0, _Themes.handleThemeFromObject)(theme, 'colors.dark-text87', '#587383');
});
var PrevIcon = (0, _styledComponents["default"])(_Icons.MdChevronLeft).withConfig({
  displayName: "MonthCalendarstyles__PrevIcon",
  componentId: "sc-1afnfnl-4"
})(["", ""], chevron);
exports.PrevIcon = PrevIcon;
var NextIcon = (0, _styledComponents["default"])(_Icons.MdChevronRight).withConfig({
  displayName: "MonthCalendarstyles__NextIcon",
  componentId: "sc-1afnfnl-5"
})(["", ""], chevron);
exports.NextIcon = NextIcon;
var PrevUnit = (0, _styledComponents["default"])(Unit).withConfig({
  displayName: "MonthCalendarstyles__PrevUnit",
  componentId: "sc-1afnfnl-6"
})(["margin-right:auto;"]);
exports.PrevUnit = PrevUnit;
var NextUnit = (0, _styledComponents["default"])(Unit).withConfig({
  displayName: "MonthCalendarstyles__NextUnit",
  componentId: "sc-1afnfnl-7"
})(["margin-left:auto;"]);
exports.NextUnit = NextUnit;

var Prev = function Prev(props) {
  return _react["default"].createElement(PrevUnit, props, _react["default"].createElement(PrevIcon, null));
};

exports.Prev = Prev;

var Next = function Next(props) {
  return _react["default"].createElement(NextUnit, props, _react["default"].createElement(NextIcon, null));
};

exports.Next = Next;