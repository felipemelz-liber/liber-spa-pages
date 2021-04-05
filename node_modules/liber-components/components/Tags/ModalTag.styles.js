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
exports.Container = exports.FloatingTag = exports.WhiteTag = void 0;

var _styledComponents = _interopRequireWildcard(require("styled-components"));

var _Tags = require("./Tags");

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function _getRequireWildcardCache() { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; if (obj != null) { var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

var WhiteTag = (0, _styledComponents["default"])(_Tags.WhiteTag).withConfig({
  displayName: "ModalTagstyles__WhiteTag",
  componentId: "ghsnch-0"
})(["cursor:pointer;margin:0;"]);
exports.WhiteTag = WhiteTag;

var addPosition = function addPosition(_ref) {
  var position = _ref.position;
  return (0, _styledComponents.css)(["top:", "px;left:", "px;"], position.y, position.x);
};

var FloatingTag = (0, _styledComponents["default"])(_Tags.WhiteTag).withConfig({
  displayName: "ModalTagstyles__FloatingTag",
  componentId: "ghsnch-1"
})(["position:absolute;pointer-events:none;", ""], addPosition);
exports.FloatingTag = FloatingTag;
FloatingTag.defaultProps = {
  position: {}
};

var Container = _styledComponents["default"].div.withConfig({
  displayName: "ModalTagstyles__Container",
  componentId: "ghsnch-2"
})(["padding-right:12px;position:relative;"]);

exports.Container = Container;