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
exports.InnerCardHeader = exports.InnerCard = exports.CardFooter = exports.CardContent = exports.CardHeader = exports.Card = void 0;

var _styledComponents = _interopRequireWildcard(require("styled-components"));

var _Themes = require("../Themes");

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function _getRequireWildcardCache() { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; if (obj != null) { var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

var getTheme = function getTheme(key, def) {
  return (0, _styledComponents.css)(["", ""], function (props) {
    return (0, _Themes.handleThemeFromObject)(props.theme, key, def);
  });
};

var elevation = function elevation() {
  var level = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : '1';
  return {
    1: (0, _styledComponents.css)(["", ""], getTheme('box-shadows.1', (0, _styledComponents.css)(["box-shadow:0 1px 2px 0 rgba(64,95,113,0.12);"]))),
    2: (0, _styledComponents.css)(["", ""], getTheme('box-shadows.2', (0, _styledComponents.css)(["box-shadow:0 2px 4px 0 rgba(64,95,113,0.12);"]))),
    3: (0, _styledComponents.css)(["", ""], getTheme('box-shadows.3', (0, _styledComponents.css)(["box-shadow:0 4px 12px 0 rgba(64,95,113,0.12);"])))
  }[level];
};

var highlight = function highlight() {
  var color = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 'default';
  return {
    "default": (0, _styledComponents.css)(["transparent"]),
    dark: (0, _styledComponents.css)(["", ""], getTheme('colors.dark-text', '#405f71')),
    primary: (0, _styledComponents.css)(["", ""], getTheme('colors.primary', '#009dff')),
    success: (0, _styledComponents.css)(["", ""], getTheme('colors.success', '#13ce66')),
    alert: (0, _styledComponents.css)(["", ""], getTheme('colors.alert', '#fabe00')),
    error: (0, _styledComponents.css)(["", ""], getTheme('colors.error', '#dc3545'))
  }[color];
};

var Card = _styledComponents["default"].div.withConfig({
  displayName: "CardV2__Card",
  componentId: "mom78k-0"
})(["", " border-radius:4px;background-color:", ";min-width:50px;min-height:50px;display:flex;flex-direction:column;justify-content:flex-start;align-items:center;"], function (props) {
  return elevation(props.elevation);
}, getTheme('colors.white', '#ffffff'));

exports.Card = Card;
var headerTg = (0, _styledComponents.css)(["font-size:16px;font-weight:500;line-height:22px;"]);

var CardHeader = _styledComponents["default"].div.withConfig({
  displayName: "CardV2__CardHeader",
  componentId: "mom78k-1"
})(["", " font-family:", ";color:", ";border-bottom:1px solid ", ";width:100%;height:48px;display:flex;align-items:center;justify-content:center;text-align:center;padding:0px 24px;box-sizing:border-box;position:relative;&:after{content:\"\";position:absolute;bottom:-1px;height:0px;left:24px;width:calc(100% - 48px);border-bottom:2px solid ", ";}"], getTheme('typography.subhead', headerTg), getTheme('font-family', 'Roboto'), getTheme('colors.dark-text', '#405f71'), getTheme('colors.border', '#e8ebee') || 'transparent', function (props) {
  return highlight(props.highlight);
});

exports.CardHeader = CardHeader;
var contentTg = (0, _styledComponents.css)(["font-size:16px;font-weight:400;line-height:22px;"]);

var CardContent = _styledComponents["default"].div.withConfig({
  displayName: "CardV2__CardContent",
  componentId: "mom78k-2"
})(["", " color:", ";flex-grow:1;padding:24px;"], getTheme('typography.body', contentTg), getTheme('colors.dar-text70', '#798e9b'));

exports.CardContent = CardContent;

var CardFooter = _styledComponents["default"].div.withConfig({
  displayName: "CardV2__CardFooter",
  componentId: "mom78k-3"
})(["", " font-family:", ";color:", ";border-top:1px solid ", ";width:100%;height:48px;display:flex;align-items:center;justify-content:center;text-align:center;"], getTheme('typography.subhead', headerTg), getTheme('font-family', 'Roboto'), getTheme('colors.dark-text38', '#b6c2c9'), getTheme('colors.border', '#e8ebee'));

exports.CardFooter = CardFooter;
var InnerCard = (0, _styledComponents["default"])(Card).withConfig({
  displayName: "CardV2__InnerCard",
  componentId: "mom78k-4"
})(["box-shadow:unset;border:1px solid ", ";background-color:", ";"], getTheme('colors.border', '#e8ebee'), getTheme('colors.header', '#f9fafa'));
exports.InnerCard = InnerCard;
var InnerCardHeader = (0, _styledComponents["default"])(CardHeader).withConfig({
  displayName: "CardV2__InnerCardHeader",
  componentId: "mom78k-5"
})(["justify-content:left;text-align:flex-start;font-weight:", ";"], getTheme('font-weights.regular', '400'));
exports.InnerCardHeader = InnerCardHeader;