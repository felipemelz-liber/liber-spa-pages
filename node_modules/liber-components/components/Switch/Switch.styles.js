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
exports.Container = exports.Circle = void 0;

var _styledComponents = _interopRequireWildcard(require("styled-components"));

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function _getRequireWildcardCache() { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; if (obj != null) { var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

var Circle = _styledComponents["default"].div.withConfig({
  displayName: "Switchstyles__Circle",
  componentId: "ohl1sr-0"
})(["width:24px;height:24px;background-color:#cdd7df;border-radius:20px;transition-duration:0.3s;"]);

exports.Circle = Circle;

var Container = _styledComponents["default"].div.withConfig({
  displayName: "Switchstyles__Container",
  componentId: "ohl1sr-1"
})(["width:48px;height:24px;border-radius:20px;border:solid 1px #cdd7df;background-color:#fafafa;display:flex;align-items:center;cursor:pointer;justify-content:center;", ""], function (_ref) {
  var checked = _ref.checked;
  return checked ? (0, _styledComponents.css)(["& > ", "{transform:translate(12px);background-color:#009dff;}"], Circle) : (0, _styledComponents.css)(["& > ", "{transform:translate(-12px);}"], Circle);
});

exports.Container = Container;