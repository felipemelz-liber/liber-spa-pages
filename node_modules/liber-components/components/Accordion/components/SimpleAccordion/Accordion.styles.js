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
exports.ContentItem = exports.Accordion = exports.Item = exports.Button = exports.Content = void 0;

var _styledComponents = _interopRequireWildcard(require("styled-components"));

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function _getRequireWildcardCache() { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; if (obj != null) { var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

var Content = _styledComponents["default"].div.attrs(function (_ref) {
  var size = _ref.contentSize;
  return {
    style: {
      '--height': "".concat(size, "px")
    }
  };
}).withConfig({
  displayName: "Accordionstyles__Content",
  componentId: "sc-1fszrx7-0"
})(["overflow:hidden;transition:all 450ms cubic-bezier(0.23,1,0.32,1) 0ms;display:flex;flex-direction:column;", " opacity:", ";background-color:transparent;"], function (props) {
  if (props.contentSize) {
    return (0, _styledComponents.css)(["height:", ";"], props.open ? 'var(--height)' : '0px');
  }

  return (0, _styledComponents.css)(["max-height:", ";"], props.open ? '9999px' : '0px');
}, function (props) {
  return props.open ? 1 : 0;
});

exports.Content = Content;

var Button = _styledComponents["default"].button.withConfig({
  displayName: "Accordionstyles__Button",
  componentId: "sc-1fszrx7-1"
})(["display:block;border:0px;background-color:#fafafa;cursor:pointer;padding:5px 42px 5px 8px;width:100%;text-align:left;font-family:Roboto;font-size:14px;height:30px;transition:all 250ms cubic-bezier(0.23,1,0.32,1) 0ms;display:flex;align-items:center;justify-content:space-between;color:var(--black);white-space:nowrap;overflow:hidden;& > *{pointer-events:none;}&:focus{outline:0;}&::-moz-focus-inner{border:0;}&:after{content:'';transition:all 250ms cubic-bezier(0.23,1,0.32,1) 0ms;position:absolute;border-left:6px solid transparent;border-top:6px solid var(--color);border-right:6px solid transparent;top:calc(15px - 3px);right:16px;transform:", ";}&:hover{background-color:#f0f0f0;}&:hover:after{border-top:6px solid #a4a4a4;}& > span:first-child{max-width:40%;overflow:hidden;text-overflow:ellipsis;}"], function (props) {
  return props.open ? 'rotate(90deg)' : null;
});

exports.Button = Button;

var Item = _styledComponents["default"].div.withConfig({
  displayName: "Accordionstyles__Item",
  componentId: "sc-1fszrx7-2"
})(["--color:#c0c0c0;position:relative;display:flex;flex-direction:column-reverse;"]);

exports.Item = Item;

var Accordion = _styledComponents["default"].div.withConfig({
  displayName: "Accordionstyles__Accordion",
  componentId: "sc-1fszrx7-3"
})(["width:100%;z-index:500;"]);

exports.Accordion = Accordion;

var ContentItem = _styledComponents["default"].div.attrs(function (_ref2) {
  var onClick = _ref2.onClick;
  return {
    style: onClick ? {
      '--pointer': 'pointer'
    } : {
      '--pointer': 'unset'
    }
  };
}).withConfig({
  displayName: "Accordionstyles__ContentItem",
  componentId: "sc-1fszrx7-4"
})(["width:100%;max-height:32px;min-height:32px;padding:4px 16px;box-sizing:border-box;display:flex;justify-content:space-between;align-items:center;cursor:var(--pointer);"]);

exports.ContentItem = ContentItem;