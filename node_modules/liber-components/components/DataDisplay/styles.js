"use strict";

require("core-js/modules/es6.object.define-property");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.DisplayRow = void 0;

require("core-js/modules/es6.object.define-properties");

require("core-js/modules/es6.object.freeze");

var _styledComponents = _interopRequireDefault(require("styled-components"));

var _Card = require("../Card");

var _Util = require("../Util");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _templateObject() {
  var data = _taggedTemplateLiteral(["\n    flex-direction: row;\n  "]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

var DisplayRow = (0, _styledComponents["default"])(_Card.CardContent).withConfig({
  displayName: "styles__DisplayRow",
  componentId: "sc-450gse-0"
})(["padding:0px;display:flex;flex-wrap:wrap;flex-basis:50%;box-sizing:border-box;flex-direction:column;", ""], _Util.media.large(_templateObject()));
exports.DisplayRow = DisplayRow;