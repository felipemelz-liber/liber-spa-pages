"use strict";

require("core-js/modules/es6.object.define-property");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _styledComponents = _interopRequireDefault(require("styled-components"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var centralized = _styledComponents["default"].h1.withConfig({
  displayName: "styles__centralized",
  componentId: "sc-18kv00i-0"
})(["text-align:center;"]);

var _default = centralized;
exports["default"] = _default;