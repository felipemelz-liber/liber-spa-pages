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
exports.typography = exports.colors = exports["default"] = void 0;

var _react = _interopRequireDefault(require("react"));

var _styledComponents = _interopRequireWildcard(require("styled-components"));

var _LiberV = _interopRequireDefault(require("./LiberV4"));

var _methods = require("./methods");

var _Buttons = require("../Buttons");

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function _getRequireWildcardCache() { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; if (obj != null) { var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var Subhead = _styledComponents["default"].div.withConfig({
  displayName: "indexstories__Subhead",
  componentId: "q1zhi1-0"
})(["", ";color:", ";margin-bottom:32px;"], function (_ref) {
  var theme = _ref.theme;
  return (0, _methods.handleThemeFromObject)(theme, 'typography.subhead');
}, function (_ref2) {
  var theme = _ref2.theme;
  return (0, _methods.handleThemeFromObject)(theme, 'colors.dark-text');
});

var Body = _styledComponents["default"].div.withConfig({
  displayName: "indexstories__Body",
  componentId: "q1zhi1-1"
})(["padding:32px;display:flex;flex-direction:column;background-color:#fafdff;justify-content:flex-start;align-items:flex-start;font-family:", ";& button{margin-top:12px;margin-right:11px;}"], function (_ref3) {
  var theme = _ref3.theme;
  return (0, _methods.handleThemeFromObject)(theme, 'font-family');
});

var Row = _styledComponents["default"].div.withConfig({
  displayName: "indexstories__Row",
  componentId: "q1zhi1-2"
})(["display:flex;justify-content:space-between;align-items:center;"]);

var Box = _styledComponents["default"].div.withConfig({
  displayName: "indexstories__Box",
  componentId: "q1zhi1-3"
})(["width:174px;border-radius:4px;overflow:hidden;flex-direction:column;justify-content:flex-start;align-items:center;margin-right:11px;border:1px solid ", ";border-width:", ";font-size:12px;"], function (_ref4) {
  var theme = _ref4.theme;
  return (0, _methods.handleThemeFromObject)(theme, 'colors.border');
}, function (_ref5) {
  var border = _ref5.border;
  return border ? '1px' : '0px';
});

var Primary = _styledComponents["default"].div.withConfig({
  displayName: "indexstories__Primary",
  componentId: "q1zhi1-4"
})(["background-color:", ";color:", ";text-align:center;text-transform:uppercase;padding:11px;"], function (_ref6) {
  var theme = _ref6.theme;
  return (0, _methods.handleThemeFromObject)(theme, 'colors.primary');
}, function (_ref7) {
  var theme = _ref7.theme;
  return (0, _methods.handleThemeFromObject)(theme, 'colors.liberWhite');
});

var Primary70 = _styledComponents["default"].div.withConfig({
  displayName: "indexstories__Primary70",
  componentId: "q1zhi1-5"
})(["background-color:", ";color:", ";padding:11px 18px;flex-grow:1;"], function (_ref8) {
  var theme = _ref8.theme;
  return (0, _methods.handleThemeFromObject)(theme, 'colors.primary70');
}, function (_ref9) {
  var theme = _ref9.theme;
  return (0, _methods.handleThemeFromObject)(theme, 'colors.liberWhite');
});

var Primary38 = _styledComponents["default"].div.withConfig({
  displayName: "indexstories__Primary38",
  componentId: "q1zhi1-6"
})(["background-color:", ";color:", ";padding:11px 18px;flex-grow:1;"], function (_ref10) {
  var theme = _ref10.theme;
  return (0, _methods.handleThemeFromObject)(theme, 'colors.primary38');
}, function (_ref11) {
  var theme = _ref11.theme;
  return (0, _methods.handleThemeFromObject)(theme, 'colors.liberBlue');
});

var Primary6 = _styledComponents["default"].div.withConfig({
  displayName: "indexstories__Primary6",
  componentId: "q1zhi1-7"
})(["background-color:", ";color:", ";padding:11px 18px;flex-grow:1;"], function (_ref12) {
  var theme = _ref12.theme;
  return (0, _methods.handleThemeFromObject)(theme, 'colors.primary6');
}, function (_ref13) {
  var theme = _ref13.theme;
  return (0, _methods.handleThemeFromObject)(theme, 'colors.liberBlue');
});

var DarkText = _styledComponents["default"].div.withConfig({
  displayName: "indexstories__DarkText",
  componentId: "q1zhi1-8"
})(["background-color:", ";color:", ";text-align:center;text-transform:uppercase;padding:11px;"], function (_ref14) {
  var theme = _ref14.theme;
  return (0, _methods.handleThemeFromObject)(theme, 'colors.dark-text');
}, function (_ref15) {
  var theme = _ref15.theme;
  return (0, _methods.handleThemeFromObject)(theme, 'colors.liberWhite');
});

var DarkText70 = _styledComponents["default"].div.withConfig({
  displayName: "indexstories__DarkText70",
  componentId: "q1zhi1-9"
})(["background-color:", ";color:", ";padding:11px 18px;flex-grow:1;"], function (_ref16) {
  var theme = _ref16.theme;
  return (0, _methods.handleThemeFromObject)(theme, 'colors.dark-text70');
}, function (_ref17) {
  var theme = _ref17.theme;
  return (0, _methods.handleThemeFromObject)(theme, 'colors.liberWhite');
});

var DarkText38 = _styledComponents["default"].div.withConfig({
  displayName: "indexstories__DarkText38",
  componentId: "q1zhi1-10"
})(["background-color:", ";color:#798e9b;padding:11px 18px;flex-grow:1;"], function (_ref18) {
  var theme = _ref18.theme;
  return (0, _methods.handleThemeFromObject)(theme, 'colors.dark-text38');
});

var DarkText6 = _styledComponents["default"].div.withConfig({
  displayName: "indexstories__DarkText6",
  componentId: "q1zhi1-11"
})(["background-color:", ";color:#798e9b;padding:11px 18px;flex-grow:1;"], function (_ref19) {
  var theme = _ref19.theme;
  return (0, _methods.handleThemeFromObject)(theme, 'colors.dark-text6');
});

var LightText70 = _styledComponents["default"].div.withConfig({
  displayName: "indexstories__LightText70",
  componentId: "q1zhi1-12"
})(["background-color:", ";color:#798e9b;padding:11px 18px;border-right:1px solid ", ";flex-grow:1;"], function (_ref20) {
  var theme = _ref20.theme;
  return (0, _methods.handleThemeFromObject)(theme, 'colors.light-text70');
}, function (_ref21) {
  var theme = _ref21.theme;
  return (0, _methods.handleThemeFromObject)(theme, 'colors.border');
});

var LightText50 = _styledComponents["default"].div.withConfig({
  displayName: "indexstories__LightText50",
  componentId: "q1zhi1-13"
})(["background-color:", ";color:#798e9b;padding:11px 18px;border-right:1px solid ", ";flex-grow:1;"], function (_ref22) {
  var theme = _ref22.theme;
  return (0, _methods.handleThemeFromObject)(theme, 'colors.light-text50');
}, function (_ref23) {
  var theme = _ref23.theme;
  return (0, _methods.handleThemeFromObject)(theme, 'colors.border');
});

var LightText25 = _styledComponents["default"].div.withConfig({
  displayName: "indexstories__LightText25",
  componentId: "q1zhi1-14"
})(["background-color:", ";color:#798e9b;padding:11px 18px;flex-grow:1;"], function (_ref24) {
  var theme = _ref24.theme;
  return (0, _methods.handleThemeFromObject)(theme, 'colors.light-text25');
});

var LightText = _styledComponents["default"].div.withConfig({
  displayName: "indexstories__LightText",
  componentId: "q1zhi1-15"
})(["background-color:", ";color:", ";text-align:center;text-transform:uppercase;padding:11px;border-bottom:1px solid ", ";"], function (_ref25) {
  var theme = _ref25.theme;
  return (0, _methods.handleThemeFromObject)(theme, 'colors.light-text');
}, function (_ref26) {
  var theme = _ref26.theme;
  return (0, _methods.handleThemeFromObject)(theme, 'colors.dark-text');
}, function (_ref27) {
  var theme = _ref27.theme;
  return (0, _methods.handleThemeFromObject)(theme, 'colors.border');
});

var Success = _styledComponents["default"].div.withConfig({
  displayName: "indexstories__Success",
  componentId: "q1zhi1-16"
})(["background-color:", ";color:", ";text-align:center;text-transform:uppercase;padding:11px;"], function (_ref28) {
  var theme = _ref28.theme;
  return (0, _methods.handleThemeFromObject)(theme, 'colors.success');
}, function (_ref29) {
  var theme = _ref29.theme;
  return (0, _methods.handleThemeFromObject)(theme, 'colors.liberWhite');
});

var Success70 = _styledComponents["default"].div.withConfig({
  displayName: "indexstories__Success70",
  componentId: "q1zhi1-17"
})(["background-color:", ";color:", ";padding:11px 18px;flex-grow:1;"], function (_ref30) {
  var theme = _ref30.theme;
  return (0, _methods.handleThemeFromObject)(theme, 'colors.success70');
}, function (_ref31) {
  var theme = _ref31.theme;
  return (0, _methods.handleThemeFromObject)(theme, 'colors.liberWhite');
});

var Success38 = _styledComponents["default"].div.withConfig({
  displayName: "indexstories__Success38",
  componentId: "q1zhi1-18"
})(["background-color:", ";color:", ";padding:11px 18px;flex-grow:1;"], function (_ref32) {
  var theme = _ref32.theme;
  return (0, _methods.handleThemeFromObject)(theme, 'colors.success38');
}, function (_ref33) {
  var theme = _ref33.theme;
  return (0, _methods.handleThemeFromObject)(theme, 'colors.success');
});

var Success6 = _styledComponents["default"].div.withConfig({
  displayName: "indexstories__Success6",
  componentId: "q1zhi1-19"
})(["background-color:", ";color:", ";padding:11px 18px;flex-grow:1;"], function (_ref34) {
  var theme = _ref34.theme;
  return (0, _methods.handleThemeFromObject)(theme, 'colors.success6');
}, function (_ref35) {
  var theme = _ref35.theme;
  return (0, _methods.handleThemeFromObject)(theme, 'colors.success');
});

var Alert = _styledComponents["default"].div.withConfig({
  displayName: "indexstories__Alert",
  componentId: "q1zhi1-20"
})(["background-color:", ";color:", ";text-align:center;text-transform:uppercase;padding:11px;"], function (_ref36) {
  var theme = _ref36.theme;
  return (0, _methods.handleThemeFromObject)(theme, 'colors.alert');
}, function (_ref37) {
  var theme = _ref37.theme;
  return (0, _methods.handleThemeFromObject)(theme, 'colors.liberWhite');
});

var Alert70 = _styledComponents["default"].div.withConfig({
  displayName: "indexstories__Alert70",
  componentId: "q1zhi1-21"
})(["background-color:", ";color:", ";padding:11px 18px;flex-grow:1;"], function (_ref38) {
  var theme = _ref38.theme;
  return (0, _methods.handleThemeFromObject)(theme, 'colors.alert70');
}, function (_ref39) {
  var theme = _ref39.theme;
  return (0, _methods.handleThemeFromObject)(theme, 'colors.liberWhite');
});

var Alert38 = _styledComponents["default"].div.withConfig({
  displayName: "indexstories__Alert38",
  componentId: "q1zhi1-22"
})(["background-color:", ";color:", ";padding:11px 18px;flex-grow:1;"], function (_ref40) {
  var theme = _ref40.theme;
  return (0, _methods.handleThemeFromObject)(theme, 'colors.alert38');
}, function (_ref41) {
  var theme = _ref41.theme;
  return (0, _methods.handleThemeFromObject)(theme, 'colors.alert');
});

var Alert6 = _styledComponents["default"].div.withConfig({
  displayName: "indexstories__Alert6",
  componentId: "q1zhi1-23"
})(["background-color:", ";color:", ";padding:11px 18px;flex-grow:1;"], function (_ref42) {
  var theme = _ref42.theme;
  return (0, _methods.handleThemeFromObject)(theme, 'colors.alert6');
}, function (_ref43) {
  var theme = _ref43.theme;
  return (0, _methods.handleThemeFromObject)(theme, 'colors.alert');
});

var Error = _styledComponents["default"].div.withConfig({
  displayName: "indexstories__Error",
  componentId: "q1zhi1-24"
})(["background-color:", ";color:", ";text-align:center;text-transform:uppercase;padding:11px;"], function (_ref44) {
  var theme = _ref44.theme;
  return (0, _methods.handleThemeFromObject)(theme, 'colors.error');
}, function (_ref45) {
  var theme = _ref45.theme;
  return (0, _methods.handleThemeFromObject)(theme, 'colors.liberWhite');
});

var Error70 = _styledComponents["default"].div.withConfig({
  displayName: "indexstories__Error70",
  componentId: "q1zhi1-25"
})(["background-color:", ";color:", ";padding:11px 18px;flex-grow:1;"], function (_ref46) {
  var theme = _ref46.theme;
  return (0, _methods.handleThemeFromObject)(theme, 'colors.error70');
}, function (_ref47) {
  var theme = _ref47.theme;
  return (0, _methods.handleThemeFromObject)(theme, 'colors.liberWhite');
});

var Error38 = _styledComponents["default"].div.withConfig({
  displayName: "indexstories__Error38",
  componentId: "q1zhi1-26"
})(["background-color:", ";color:", ";padding:11px 18px;flex-grow:1;"], function (_ref48) {
  var theme = _ref48.theme;
  return (0, _methods.handleThemeFromObject)(theme, 'colors.error38');
}, function (_ref49) {
  var theme = _ref49.theme;
  return (0, _methods.handleThemeFromObject)(theme, 'colors.error');
});

var Error6 = _styledComponents["default"].div.withConfig({
  displayName: "indexstories__Error6",
  componentId: "q1zhi1-27"
})(["background-color:", ";color:", ";padding:11px 18px;flex-grow:1;"], function (_ref50) {
  var theme = _ref50.theme;
  return (0, _methods.handleThemeFromObject)(theme, 'colors.error6');
}, function (_ref51) {
  var theme = _ref51.theme;
  return (0, _methods.handleThemeFromObject)(theme, 'colors.error');
});

var Border = _styledComponents["default"].div.withConfig({
  displayName: "indexstories__Border",
  componentId: "q1zhi1-28"
})(["width:172px;height:72px;font-size:12px;background-color:", ";color:", ";margin-top:12px;margin-right:11px;display:flex;flex-direction:column;justify-content:center;align-items:center;border-radius:4px;& span{color:", ";}"], function (_ref52) {
  var theme = _ref52.theme;
  return (0, _methods.handleThemeFromObject)(theme, 'colors.border');
}, function (_ref53) {
  var theme = _ref53.theme;
  return (0, _methods.handleThemeFromObject)(theme, 'colors.dark-text');
}, function (_ref54) {
  var theme = _ref54.theme;
  return (0, _methods.handleThemeFromObject)(theme, 'colors.dark-text38');
});

var Secondary = _styledComponents["default"].div.withConfig({
  displayName: "indexstories__Secondary",
  componentId: "q1zhi1-29"
})(["width:172px;height:72px;font-size:12px;background-color:", ";border:1px solid ", ";color:", ";margin-top:12px;margin-right:11px;display:flex;flex-direction:column;justify-content:center;align-items:center;border-radius:4px;& span{color:", ";}"], function (_ref55) {
  var theme = _ref55.theme;
  return (0, _methods.handleThemeFromObject)(theme, 'colors.secondary');
}, function (_ref56) {
  var theme = _ref56.theme;
  return (0, _methods.handleThemeFromObject)(theme, 'colors.border');
}, function (_ref57) {
  var theme = _ref57.theme;
  return (0, _methods.handleThemeFromObject)(theme, 'colors.dark-text');
}, function (_ref58) {
  var theme = _ref58.theme;
  return (0, _methods.handleThemeFromObject)(theme, 'colors.dark-text38');
});

var Header = _styledComponents["default"].div.withConfig({
  displayName: "indexstories__Header",
  componentId: "q1zhi1-30"
})(["width:172px;height:72px;font-size:12px;background-color:", ";border:1px solid ", ";color:", ";margin-top:12px;margin-right:11px;display:flex;flex-direction:column;justify-content:center;align-items:center;border-radius:4px;& span{color:", ";}"], function (_ref59) {
  var theme = _ref59.theme;
  return (0, _methods.handleThemeFromObject)(theme, 'colors.header');
}, function (_ref60) {
  var theme = _ref60.theme;
  return (0, _methods.handleThemeFromObject)(theme, 'colors.border');
}, function (_ref61) {
  var theme = _ref61.theme;
  return (0, _methods.handleThemeFromObject)(theme, 'colors.dark-text');
}, function (_ref62) {
  var theme = _ref62.theme;
  return (0, _methods.handleThemeFromObject)(theme, 'colors.dark-text38');
});

var Surface = _styledComponents["default"].div.withConfig({
  displayName: "indexstories__Surface",
  componentId: "q1zhi1-31"
})(["width:172px;height:72px;font-size:12px;background-color:", ";border:1px solid ", ";color:", ";margin-top:12px;margin-right:11px;display:flex;flex-direction:column;justify-content:center;align-items:center;border-radius:4px;& span{color:", ";}"], function (_ref63) {
  var theme = _ref63.theme;
  return (0, _methods.handleThemeFromObject)(theme, 'colors.surface');
}, function (_ref64) {
  var theme = _ref64.theme;
  return (0, _methods.handleThemeFromObject)(theme, 'colors.border');
}, function (_ref65) {
  var theme = _ref65.theme;
  return (0, _methods.handleThemeFromObject)(theme, 'colors.dark-text');
}, function (_ref66) {
  var theme = _ref66.theme;
  return (0, _methods.handleThemeFromObject)(theme, 'colors.dark-text38');
});

var GenBackground = _styledComponents["default"].div.withConfig({
  displayName: "indexstories__GenBackground",
  componentId: "q1zhi1-32"
})(["width:172px;height:72px;font-size:12px;background-color:", ";border:1px solid ", ";color:", ";margin-top:12px;margin-right:11px;display:flex;flex-direction:column;justify-content:center;align-items:center;border-radius:4px;& span{color:", ";}"], function (_ref67) {
  var theme = _ref67.theme;
  return (0, _methods.handleThemeFromObject)(theme, 'colors.general-background');
}, function (_ref68) {
  var theme = _ref68.theme;
  return (0, _methods.handleThemeFromObject)(theme, 'colors.border');
}, function (_ref69) {
  var theme = _ref69.theme;
  return (0, _methods.handleThemeFromObject)(theme, 'colors.dark-text');
}, function (_ref70) {
  var theme = _ref70.theme;
  return (0, _methods.handleThemeFromObject)(theme, 'colors.dark-text38');
});

var TBox = _styledComponents["default"].div.withConfig({
  displayName: "indexstories__TBox",
  componentId: "q1zhi1-33"
})(["width:96px;height:96px;background-color:", ";display:flex;justify-content:center;align-items:center;color:", ";margin-right:12px;"], function (_ref71) {
  var theme = _ref71.theme;
  return (0, _methods.handleThemeFromObject)(theme, 'colors.gray7');
}, function (_ref72) {
  var theme = _ref72.theme;
  return (0, _methods.handleThemeFromObject)(theme, 'colors.dark-text');
});

var H1 = (0, _styledComponents["default"])(TBox).withConfig({
  displayName: "indexstories__H1",
  componentId: "q1zhi1-34"
})(["", ";"], function (_ref73) {
  var theme = _ref73.theme;
  return (0, _methods.handleThemeFromObject)(theme, 'typography.h1');
});
var H2 = (0, _styledComponents["default"])(TBox).withConfig({
  displayName: "indexstories__H2",
  componentId: "q1zhi1-35"
})(["", ";"], function (_ref74) {
  var theme = _ref74.theme;
  return (0, _methods.handleThemeFromObject)(theme, 'typography.h2');
});
var H3 = (0, _styledComponents["default"])(TBox).withConfig({
  displayName: "indexstories__H3",
  componentId: "q1zhi1-36"
})(["", ";"], function (_ref75) {
  var theme = _ref75.theme;
  return (0, _methods.handleThemeFromObject)(theme, 'typography.h3');
});
var H4 = (0, _styledComponents["default"])(TBox).withConfig({
  displayName: "indexstories__H4",
  componentId: "q1zhi1-37"
})(["", ";"], function (_ref76) {
  var theme = _ref76.theme;
  return (0, _methods.handleThemeFromObject)(theme, 'typography.h4');
});
var H5 = (0, _styledComponents["default"])(TBox).withConfig({
  displayName: "indexstories__H5",
  componentId: "q1zhi1-38"
})(["", ";"], function (_ref77) {
  var theme = _ref77.theme;
  return (0, _methods.handleThemeFromObject)(theme, 'typography.h5');
});
var H6 = (0, _styledComponents["default"])(TBox).withConfig({
  displayName: "indexstories__H6",
  componentId: "q1zhi1-39"
})(["", ";"], function (_ref78) {
  var theme = _ref78.theme;
  return (0, _methods.handleThemeFromObject)(theme, 'typography.h6');
});
var TSubhead = (0, _styledComponents["default"])(TBox).withConfig({
  displayName: "indexstories__TSubhead",
  componentId: "q1zhi1-40"
})(["", ";"], function (_ref79) {
  var theme = _ref79.theme;
  return (0, _methods.handleThemeFromObject)(theme, 'typography.subhead');
});
var TBody = (0, _styledComponents["default"])(TBox).withConfig({
  displayName: "indexstories__TBody",
  componentId: "q1zhi1-41"
})(["", ";"], function (_ref80) {
  var theme = _ref80.theme;
  return (0, _methods.handleThemeFromObject)(theme, 'typography.body');
});
var CaptionMd = (0, _styledComponents["default"])(TBox).withConfig({
  displayName: "indexstories__CaptionMd",
  componentId: "q1zhi1-42"
})(["", ";"], function (_ref81) {
  var theme = _ref81.theme;
  return (0, _methods.handleThemeFromObject)(theme, 'typography.captionMD');
});
var Caption = (0, _styledComponents["default"])(TBox).withConfig({
  displayName: "indexstories__Caption",
  componentId: "q1zhi1-43"
})(["", ";"], function (_ref82) {
  var theme = _ref82.theme;
  return (0, _methods.handleThemeFromObject)(theme, 'typography.caption');
});
var OverlineMd = (0, _styledComponents["default"])(TBox).withConfig({
  displayName: "indexstories__OverlineMd",
  componentId: "q1zhi1-44"
})(["", ";"], function (_ref83) {
  var theme = _ref83.theme;
  return (0, _methods.handleThemeFromObject)(theme, 'typography.overlineMD');
});
var Overline = (0, _styledComponents["default"])(TBox).withConfig({
  displayName: "indexstories__Overline",
  componentId: "q1zhi1-45"
})(["", ";"], function (_ref84) {
  var theme = _ref84.theme;
  return (0, _methods.handleThemeFromObject)(theme, 'typography.overline');
});
var Button = (0, _styledComponents["default"])(TBox).withConfig({
  displayName: "indexstories__Button",
  componentId: "q1zhi1-46"
})(["", ";"], function (_ref85) {
  var theme = _ref85.theme;
  return (0, _methods.handleThemeFromObject)(theme, 'typography.button');
});
var _default = {
  title: 'UI|Theme (v4)'
};
exports["default"] = _default;

var colors = function colors() {
  return _react["default"].createElement(_styledComponents.ThemeProvider, {
    theme: _LiberV["default"]
  }, _react["default"].createElement(Body, null, _react["default"].createElement(Subhead, null, "Colors"), _react["default"].createElement(Row, null, _react["default"].createElement(Box, null, _react["default"].createElement(Primary, null, "Primary"), _react["default"].createElement(Row, null, _react["default"].createElement(Primary70, null, "70%"), _react["default"].createElement(Primary38, null, "38%"), _react["default"].createElement(Primary6, null, "6%"))), _react["default"].createElement(Box, null, _react["default"].createElement(DarkText, null, "Texts"), _react["default"].createElement(Row, null, _react["default"].createElement(DarkText70, null, "70%"), _react["default"].createElement(DarkText38, null, "38%"), _react["default"].createElement(DarkText6, null, "6%"))), _react["default"].createElement(Box, {
    border: true
  }, _react["default"].createElement(LightText, null, "Texts"), _react["default"].createElement(Row, null, _react["default"].createElement(LightText70, null, "70%"), _react["default"].createElement(LightText50, null, "50%"), _react["default"].createElement(LightText25, null, "25%"))), _react["default"].createElement(Box, null, _react["default"].createElement(Success, null, "Success"), _react["default"].createElement(Row, null, _react["default"].createElement(Success70, null, "70%"), _react["default"].createElement(Success38, null, "38%"), _react["default"].createElement(Success6, null, "6%"))), _react["default"].createElement(Box, null, _react["default"].createElement(Alert, null, "Alert"), _react["default"].createElement(Row, null, _react["default"].createElement(Alert70, null, "70%"), _react["default"].createElement(Alert38, null, "38%"), _react["default"].createElement(Alert6, null, "6%"))), _react["default"].createElement(Box, null, _react["default"].createElement(Error, null, "Error"), _react["default"].createElement(Row, null, _react["default"].createElement(Error70, null, "70%"), _react["default"].createElement(Error38, null, "38%"), _react["default"].createElement(Error6, null, "6%")))), _react["default"].createElement(Row, null, _react["default"].createElement(Border, null, "BORDERS/DIVIDERS", _react["default"].createElement("span", null, "#405f71 - 12%")), _react["default"].createElement(Secondary, null, "SECONDARY", _react["default"].createElement("span", null, "#405f71 - 8%")), _react["default"].createElement(Header, null, "HEADER", _react["default"].createElement("span", null, "#405f71 - 3%")), _react["default"].createElement(Surface, null, "SURFACE", _react["default"].createElement("span", null, "#009DFF - 2%")), _react["default"].createElement(GenBackground, null, "GENERAL BACKGROUND", _react["default"].createElement("span", null, "#FFFFFF"))), _react["default"].createElement(Row, null, _react["default"].createElement(_Buttons.PrimaryButton, {
    version: "2"
  }, "Primary"), _react["default"].createElement(_Buttons.SecondaryButton, {
    version: "2"
  }, "Secondary"), _react["default"].createElement(_Buttons.SuccessButton, {
    version: "2"
  }, "Success"), _react["default"].createElement(_Buttons.AlertButton, {
    version: "2"
  }, "Alert"), _react["default"].createElement(_Buttons.ErrorButton, {
    version: "2"
  }, "Error"))));
};

exports.colors = colors;
colors.story = {
  name: 'Colors'
};

var typography = function typography() {
  return _react["default"].createElement(_styledComponents.ThemeProvider, {
    theme: _LiberV["default"]
  }, _react["default"].createElement(Body, null, _react["default"].createElement(Subhead, null, "Typography"), _react["default"].createElement(Row, null, _react["default"].createElement(H1, null, "H1"), _react["default"].createElement(H2, null, "H2"), _react["default"].createElement(H3, null, "H3"), _react["default"].createElement(H4, null, "H4"), _react["default"].createElement(H5, null, "H5"), _react["default"].createElement(H6, null, "H6")), _react["default"].createElement(Row, null, _react["default"].createElement(TSubhead, null, "Subhead"), _react["default"].createElement(TBody, null, "Body"), _react["default"].createElement(Button, null, "Button"), _react["default"].createElement(CaptionMd, null, "Caption MD"), _react["default"].createElement(Caption, null, "Caption"), _react["default"].createElement(OverlineMd, null, "Overline MD"), _react["default"].createElement(Overline, null, "Overline"))));
};

exports.typography = typography;
typography.story = {
  name: 'Typography'
};