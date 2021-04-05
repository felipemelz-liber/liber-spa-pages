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
exports.AlertIcon = exports.AlertAdditionalInfoContent = exports.AlertInfoContent = exports.AlertContent = exports.AlertBox = exports.CloseIcon = void 0;

var _styledComponents = _interopRequireWildcard(require("styled-components"));

var _MaterialDesign = require("../Icons/MaterialDesign");

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function _getRequireWildcardCache() { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; if (obj != null) { var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

var icon = (0, _styledComponents.css)(["--size:24px;min-width:var(--size);max-width:var(--size);min-height:var(--size);max-height:var(--size);"]);
var CloseIcon = (0, _styledComponents["default"])(_MaterialDesign.MdClose).withConfig({
  displayName: "styles__CloseIcon",
  componentId: "sc-12xyi64-0"
})(["", " &:hover{cursor:pointer;}"], icon);
exports.CloseIcon = CloseIcon;

var AlertBox = _styledComponents["default"].div.withConfig({
  displayName: "styles__AlertBox",
  componentId: "sc-12xyi64-1"
})(["display:flex;flex-direction:row;align-items:center;width:100%;"]);

exports.AlertBox = AlertBox;

var AlertContent = _styledComponents["default"].div.withConfig({
  displayName: "styles__AlertContent",
  componentId: "sc-12xyi64-2"
})(["display:flex;flex-grow:1;flex-direction:column;padding:24px 0;"]);

exports.AlertContent = AlertContent;

var AlertInfoContent = _styledComponents["default"].div.withConfig({
  displayName: "styles__AlertInfoContent",
  componentId: "sc-12xyi64-3"
})(["font-family:Roboto;font-size:16px;font-weight:500;line-height:1.38;letter-spacing:normal;color:#405f71;"]);

exports.AlertInfoContent = AlertInfoContent;

var AlertAdditionalInfoContent = _styledComponents["default"].div.withConfig({
  displayName: "styles__AlertAdditionalInfoContent",
  componentId: "sc-12xyi64-4"
})(["font-family:Roboto;font-size:16px;font-weight:normal;line-height:1.38;letter-spacing:0px;color:#587383;padding-top:4px;"]);

exports.AlertAdditionalInfoContent = AlertAdditionalInfoContent;

var AlertIcon = _styledComponents["default"].div.withConfig({
  displayName: "styles__AlertIcon",
  componentId: "sc-12xyi64-5"
})(["display:flex;flex-grow:0;align-items:center;padding:24px;"]);

exports.AlertIcon = AlertIcon;