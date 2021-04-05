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
exports.Neutral = exports.Descending = exports.Ascending = void 0;

var _styledComponents = _interopRequireWildcard(require("styled-components"));

var _Icons = require("../../../Icons");

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function _getRequireWildcardCache() { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; if (obj != null) { var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

var getIconStyle = function getIconStyle() {
  return (0, _styledComponents.css)(["width:16px;height:16px;fill:#4b6f85;margin-left:8px;vertical-align:middle;"]);
};

var Ascending = (0, _styledComponents["default"])(_Icons.MdSortAscending).withConfig({
  displayName: "SortIconstyles__Ascending",
  componentId: "sc-44mptq-0"
})(["", ""], getIconStyle);
exports.Ascending = Ascending;
var Descending = (0, _styledComponents["default"])(_Icons.MdSortDescending).withConfig({
  displayName: "SortIconstyles__Descending",
  componentId: "sc-44mptq-1"
})(["", ""], getIconStyle);
exports.Descending = Descending;
var Neutral = (0, _styledComponents["default"])(_Icons.MdSort).withConfig({
  displayName: "SortIconstyles__Neutral",
  componentId: "sc-44mptq-2"
})(["", ""], getIconStyle);
exports.Neutral = Neutral;