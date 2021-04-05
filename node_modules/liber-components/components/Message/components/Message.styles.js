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
exports.AnimationContainer = exports.Action = exports.MsgContent = exports.Message = exports.Fixed = void 0;

var _styledComponents = _interopRequireWildcard(require("styled-components"));

var _Themes = require("../../Themes");

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function _getRequireWildcardCache() { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; if (obj != null) { var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

var getTheme = function getTheme(key, def) {
  return (0, _styledComponents.css)(["", ""], function (props) {
    return (0, _Themes.handleThemeFromObject)(props.theme, key, def);
  });
};

var Fixed = _styledComponents["default"].div.withConfig({
  displayName: "Messagestyles__Fixed",
  componentId: "sc-18juc5y-0"
})(["position:fixed;top:16px;left:calc(50% - 250px);width:500px;z-index:9999;display:flex;flex-direction:column;justify-content:flex-start;align-items:center;"]);

exports.Fixed = Fixed;

var backgrounds = function backgrounds() {
  var type = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 'basic';
  return {
    basic: (0, _styledComponents.css)(["", ""], getTheme('colors.white', '#ffffff')),
    dark: (0, _styledComponents.css)(["", ""], getTheme('colors.dark-text', '#405f71')),
    success: (0, _styledComponents.css)(["", ""], getTheme('colors.success', '#13ce66')),
    alert: (0, _styledComponents.css)(["", ""], getTheme('colors.alert', '#fabe00')),
    error: (0, _styledComponents.css)(["", ""], getTheme('colors.error', '#dc3545')),
    primary: (0, _styledComponents.css)(["", ""], getTheme('colors.primary', '#009dff'))
  }[type];
};

var colors = function colors() {
  var type = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 'basic';
  return {
    basic: (0, _styledComponents.css)(["", ""], getTheme('colors.dark-text', '#405f71')),
    dark: (0, _styledComponents.css)(["", ""], getTheme('colors.white', '#ffffff')),
    success: (0, _styledComponents.css)(["", ""], getTheme('colors.white', '#ffffff')),
    alert: (0, _styledComponents.css)(["", ""], getTheme('colors.white', '#ffffff')),
    error: (0, _styledComponents.css)(["", ""], getTheme('colors.white', '#ffffff')),
    primary: (0, _styledComponents.css)(["", ""], getTheme('colors.white', '#ffffff'))
  }[type];
};

var Message = _styledComponents["default"].div.withConfig({
  displayName: "Messagestyles__Message",
  componentId: "sc-18juc5y-1"
})(["--message-bg:", ";color:", ";padding:16px 24px;border-radius:4px;border:0px;margin-bottom:16px;max-width:480px;overflow:hidden;box-sizing:border-box;", " background-color:var(--message-bg);font-size:", ";line-height:20px;font-weight:", ";display:flex;justify-content:space-between;align-items:center;"], function (props) {
  return backgrounds(props.type);
}, function (props) {
  return colors(props.type);
}, getTheme('box-shadows.3', (0, _styledComponents.css)(["box-shadow:0 4px 12px 0 rgba(64,95,113,0.12);"])), getTheme('font-sizes.mobile-large', '14px'), getTheme('font-weights.regular', '400'));

exports.Message = Message;

var MsgContent = _styledComponents["default"].div.attrs(function (_ref) {
  var children = _ref.children;
  return {
    style: {
      '--margin-elipsis': children.length <= 120 ? '-1em' : 'unset'
    }
  };
}).withConfig({
  displayName: "Messagestyles__MsgContent",
  componentId: "sc-18juc5y-2"
})(["flex-grow:1;overflow:hidden;position:relative;max-height:40px;text-align:justify;padding-right:1em;margin-right:var(--margin-elipsis);&:before{content:'...';position:absolute;right:0;bottom:0;}&:after{content:'';position:absolute;right:0;width:1em;height:1em;margin-top:0.2em;background:var(--message-bg);}"]);

exports.MsgContent = MsgContent;

var Action = _styledComponents["default"].div.withConfig({
  displayName: "Messagestyles__Action",
  componentId: "sc-18juc5y-3"
})(["margin-left:24px;height:100%;"]);

exports.Action = Action;
var enter = (0, _styledComponents.keyframes)(["100%{max-height:150px;opacity:1;}0%{max-height:0;opacity:0;}"]);
var leave = (0, _styledComponents.keyframes)(["0%{max-height:150px;opacity:1;}100%{max-height:0;opacity:0;}"]);

var AnimationContainer = _styledComponents["default"].div.withConfig({
  displayName: "Messagestyles__AnimationContainer",
  componentId: "sc-18juc5y-4"
})(["animation:", " forwards;animation-duration:", "ms;"], function (props) {
  return props.state === 'entering' || props.state === 'entered' ? enter : leave;
}, function (props) {
  return props.duration;
});

exports.AnimationContainer = AnimationContainer;