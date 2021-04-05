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
exports.BadgeCircle = exports.Container = void 0;

var _styledComponents = _interopRequireWildcard(require("styled-components"));

var _Themes = require("../Themes");

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function _getRequireWildcardCache() { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; if (obj != null) { var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

var Container = _styledComponents["default"].div.withConfig({
  displayName: "Badgestyles__Container",
  componentId: "sc-1b6q7ye-0"
})(["position:relative;width:fit-content;height:fit-content;display:flex;"]);

exports.Container = Container;

var typography = function typography(_ref) {
  var radius = _ref.radius;
  return (0, _styledComponents.css)(["font-family:Roboto;font-size:12px;font-weight:500;font-stretch:normal;font-style:normal;line-height:", "px;letter-spacing:normal;text-align:left;"], 2 * radius);
};

var sizeStyles = function sizeStyles(_ref2) {
  var radius = _ref2.radius;
  return (0, _styledComponents.css)(["border-radius:", "px;min-width:", "px;height:", "px;"], radius, 2 * radius, radius * 2);
};

var getStartingPoint = function getStartingPoint(_ref3) {
  var childShape = _ref3.childShape;
  return childShape === 'circle' ? '14%' : 0;
};

var getPosition = function getPosition(_ref4) {
  var position = _ref4.position,
      visible = _ref4.visible;
  var vertical = position.vertical,
      horizontal = position.horizontal;

  switch ("".concat(vertical, "-").concat(horizontal)) {
    case 'bottom-right':
      return (0, _styledComponents.css)(["bottom:", ";right:", ";transform:scale(", ") translate(50%,50%);"], getStartingPoint, getStartingPoint, visible ? 1 : 0);

    case 'top-right':
      return (0, _styledComponents.css)(["top:", ";right:", ";transform:scale(", ") translate(50%,-50%);"], getStartingPoint, getStartingPoint, visible ? 1 : 0);

    case 'bottom-left':
      return (0, _styledComponents.css)(["bottom:", ";left:", ";transform:scale(", ") translate(-50%,50%);"], getStartingPoint, getStartingPoint, visible ? 1 : 0);

    case 'top-left':
      return (0, _styledComponents.css)(["top:", ";left:", ";transform:scale(", ") translate(-50%,-50%);"], getStartingPoint, getStartingPoint, visible ? 1 : 0);

    default:
      return (0, _styledComponents.css)(["bottom:", ";right:", ";transform:scale(", ") translate(50%,50%);"], getStartingPoint, getStartingPoint, visible ? 1 : 0);
  }
};

var BadgeCircle = _styledComponents["default"].span.withConfig({
  displayName: "Badgestyles__BadgeCircle",
  componentId: "sc-1b6q7ye-1"
})(["z-index:200;position:absolute;box-sizing:border-box;background-color:", ";color:", ";display:flex;align-items:center;justify-content:center;padding:", ";transition:transform 150ms;", " ", " ", ""], function (_ref5) {
  var color = _ref5.color,
      theme = _ref5.theme;
  return color || (0, _Themes.handleThemeFromObject)(theme, 'colors.red', '#dc3545');
}, function (_ref6) {
  var textColor = _ref6.textColor;
  return textColor || 'white';
}, function (_ref7) {
  var padding = _ref7.padding;
  return "0px ".concat(padding, "px");
}, sizeStyles, typography, getPosition);

exports.BadgeCircle = BadgeCircle;