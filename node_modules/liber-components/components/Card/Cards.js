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
exports.CardFooter = exports.CardContent = exports.CardHeader = exports.Card = exports.InnerCardHeader = exports.InnerCard = exports.CardTitle = exports.CardListContent = exports.CardListItem = void 0;

var _styledComponents = _interopRequireDefault(require("styled-components"));

var _VersionWrapper = require("../Util/VersionWrapper");

var v1 = _interopRequireWildcard(require("./Card"));

var v2 = _interopRequireWildcard(require("./CardV2"));

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function _getRequireWildcardCache() { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; if (obj != null) { var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var CardListItem = v1.CardListItem,
    CardListContent = v1.CardListContent,
    CardTitle = v1.CardTitle;
exports.CardTitle = CardTitle;
exports.CardListContent = CardListContent;
exports.CardListItem = CardListItem;
var InnerCard = v2.InnerCard,
    InnerCardHeader = v2.InnerCardHeader;
exports.InnerCardHeader = InnerCardHeader;
exports.InnerCard = InnerCard;
var Card = (0, _styledComponents["default"])((0, _VersionWrapper.wrapper)([v1.Card, v2.Card])).withConfig({
  displayName: "Cards__Card",
  componentId: "sc-1kn0psw-0"
})([""]);
exports.Card = Card;
var CardHeader = (0, _styledComponents["default"])((0, _VersionWrapper.wrapper)([v1.CardHeader, v2.CardHeader])).withConfig({
  displayName: "Cards__CardHeader",
  componentId: "sc-1kn0psw-1"
})([""]);
exports.CardHeader = CardHeader;
var CardContent = (0, _styledComponents["default"])((0, _VersionWrapper.wrapper)([v1.CardContent, v2.CardContent])).withConfig({
  displayName: "Cards__CardContent",
  componentId: "sc-1kn0psw-2"
})([""]);
exports.CardContent = CardContent;
var CardFooter = (0, _styledComponents["default"])((0, _VersionWrapper.wrapper)([v1.CardFooter, v2.CardFooter])).withConfig({
  displayName: "Cards__CardFooter",
  componentId: "sc-1kn0psw-3"
})([""]);
exports.CardFooter = CardFooter;