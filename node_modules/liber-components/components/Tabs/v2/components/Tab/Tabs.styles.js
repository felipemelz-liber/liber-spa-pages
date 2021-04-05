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
exports.Slider = exports.HeaderContainer = exports.TabContent = exports.TabContentDisplay = exports.TabContainer = void 0;

var _styledComponents = _interopRequireWildcard(require("styled-components"));

var _Themes = require("../../../../Themes");

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function _getRequireWildcardCache() { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; if (obj != null) { var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

var TabContainer = _styledComponents["default"].div.withConfig({
  displayName: "Tabsstyles__TabContainer",
  componentId: "sc-1vor55y-0"
})(["width:100%;display:flex;flex-direction:column;overflow:", ";"], function (_ref) {
  var transitioning = _ref.transitioning;
  return transitioning ? 'hidden' : null;
});

exports.TabContainer = TabContainer;

var handleActive = function handleActive() {
  var active = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 0;
  return "-".concat(active * 100, "%");
};

var TabContentDisplay = _styledComponents["default"].div.withConfig({
  displayName: "Tabsstyles__TabContentDisplay",
  componentId: "sc-1vor55y-1"
})(["display:flex;transition:margin-left 450ms cubic-bezier(0.23,1,0.32,1) 0ms;will-change:margin-left;margin-left:", ";flex-direction:row;width:100%;"], function (props) {
  return handleActive(props.active);
});

exports.TabContentDisplay = TabContentDisplay;
var hide = (0, _styledComponents.css)(["height:0;padding:0 !important;overflow:hidden;opacity:0;pointer-events:none;"]);

var TabContent = _styledComponents["default"].div.withConfig({
  displayName: "Tabsstyles__TabContent",
  componentId: "sc-1vor55y-2"
})(["flex-shrink:0;width:100%;transition:opacity 0.45s;", ";color:", ";"], function (props) {
  return !props.active && hide;
}, function (props) {
  return (0, _Themes.handleThemeFromObject)(props.theme, 'colors.dark-text70', '#798e9b');
});

exports.TabContent = TabContent;

var HeaderContainer = _styledComponents["default"].div.withConfig({
  displayName: "Tabsstyles__HeaderContainer",
  componentId: "sc-1vor55y-3"
})(["position:relative;"]);

exports.HeaderContainer = HeaderContainer;

var Slider = _styledComponents["default"].span.attrs(function (_ref2) {
  var _ref2$active = _ref2.active,
      active = _ref2$active === void 0 ? 0 : _ref2$active,
      _ref2$size = _ref2.size,
      size = _ref2$size === void 0 ? 225 : _ref2$size;
  var position = 24 + active * size;
  return {
    style: {
      '--slider-position': "".concat(position, "px"),
      '--slider-size': "".concat(size, "px")
    }
  };
}).withConfig({
  displayName: "Tabsstyles__Slider",
  componentId: "sc-1vor55y-4"
})(["position:absolute;width:var(--slider-size);height:0px;border-bottom:2px solid ", ";left:var(--slider-position);bottom:0px;transition:left 450ms cubic-bezier(0.23,1,0.32,1) 0ms,width 450ms cubic-bezier(0.23,1,0.32,1) 0ms;will-change:left,width;"], function (props) {
  return (0, _Themes.handleThemeFromObject)(props.theme, 'colors.primary', '#009dff');
});

exports.Slider = Slider;