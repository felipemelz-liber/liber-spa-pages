"use strict";

require("core-js/modules/es6.object.define-property");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.CardListContent = exports.CardListItem = exports.CardFooter = exports.CardContent = exports.CardHeader = exports.CardTitle = exports.Card = void 0;

require("core-js/modules/es6.object.define-properties");

require("core-js/modules/es6.object.freeze");

var _styledComponents = _interopRequireDefault(require("styled-components"));

var _Themes = require("../Themes");

var _Util = require("../Util");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _templateObject2() {
  var data = _taggedTemplateLiteral(["\n    margin-right: 25px;\n    height: ", ";\n    width: ", ";\n  "]);

  _templateObject2 = function _templateObject2() {
    return data;
  };

  return data;
}

function _templateObject() {
  var data = _taggedTemplateLiteral(["\n    margin-right: 25px;\n    height: ", ";\n    width: ", ";\n  "]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

var generateBorder = function generateBorder() {
  var position = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 'left';
  var color = arguments.length > 1 ? arguments[1] : undefined;
  return color ? "border-".concat(position, ": 4px solid ").concat(color) : null;
};

var Card = _styledComponents["default"].div.withConfig({
  displayName: "Card",
  componentId: "kwfx93-0"
})(["height:unset;width:100%;background-color:", ";box-shadow:0 2px 5px 0 rgba(0,0,0,0.2);display:inline-flex;position:relative;margin:8px 25px 16px 0;margin-right:0px;flex-direction:column;z-index:5;box-sizing:border-box;border-radius:4px;overflow:hidden;", ";", " ", ""], function (props) {
  return (0, _Themes.handleThemeFromObject)(props.theme, 'card.background', '#ffffff');
}, function (props) {
  return generateBorder(props.borderPosition, props.borderColor);
}, _Util.media.large(_templateObject(), function (props) {
  return props.height ? props.height : 'unset';
}, function (props) {
  return props.width ? props.width : 'unset';
}), _Util.media.extraLarge(_templateObject2(), function (props) {
  return props.height ? props.height : 'unset';
}, function (props) {
  return props.width ? props.width : 'unset';
}));

exports.Card = Card;

var CardTitle = _styledComponents["default"].div.withConfig({
  displayName: "Card__CardTitle",
  componentId: "kwfx93-1"
})(["font-family:Roboto;font-size:25px;font-weight:900;text-align:center;color:", ";background-color:", ";border-radius:2px 2px 0px 0;padding:14px 0;text-transform:uppercase;box-sizing:border-box;"], function (props) {
  return (0, _Themes.handleThemeFromObject)(props.theme, 'card.title.color', '#ffffff', props.color);
}, function (props) {
  return (0, _Themes.handleThemeFromObject)(props.theme, 'card.title.background', '#009dff', props.backgroundColor);
});

exports.CardTitle = CardTitle;

var CardHeader = _styledComponents["default"].div.withConfig({
  displayName: "Card__CardHeader",
  componentId: "kwfx93-2"
})(["height:", ";background-color:", ";border-bottom:solid 1px ", ";padding:23px;box-sizing:border-box;font-family:", ";font-size:", ";font-weight:", ";color:", ";"], function (props) {
  return props.height ? props.height : '69px';
}, function (props) {
  return (0, _Themes.handleThemeFromObject)(props.theme, 'card.header.background', 'rgba(243, 243, 243, 0.22)');
}, function (props) {
  return (0, _Themes.handleThemeFromObject)(props.theme, 'card.border', '#e6e6e6');
}, function (props) {
  return (0, _Themes.handleThemeFromObject)(props.theme, 'card.header.fontFamily', 'Roboto');
}, function (props) {
  return (0, _Themes.handleThemeFromObject)(props.theme, 'card.header.fontSize', '20px');
}, function (props) {
  return (0, _Themes.handleThemeFromObject)(props.theme, 'card.header.fontWeight', '500');
}, function (props) {
  return (0, _Themes.handleThemeFromObject)(props.theme, 'card.header.color', '#717171');
});

exports.CardHeader = CardHeader;

var CardContent = _styledComponents["default"].div.withConfig({
  displayName: "Card__CardContent",
  componentId: "kwfx93-3"
})(["flex-grow:1;padding:23px;overflow:hidden;font-family:Roboto;box-sizing:border-box;"]);

exports.CardContent = CardContent;

var CardFooter = _styledComponents["default"].div.withConfig({
  displayName: "Card__CardFooter",
  componentId: "kwfx93-4"
})(["min-height:", ";background-color:", ";border-top:solid 1px ", ";padding:23px;box-sizing:border-box;font-family:Roboto;"], function (props) {
  return props.height ? props.height : '69px';
}, function (props) {
  return (0, _Themes.handleThemeFromObject)(props.theme, 'card.footer.background', 'rgba(243, 243, 243, 0.22)');
}, function (props) {
  return (0, _Themes.handleThemeFromObject)(props.theme, 'card.border', '#e6e6e6');
});

exports.CardFooter = CardFooter;

var CardListItem = _styledComponents["default"].li.withConfig({
  displayName: "Card__CardListItem",
  componentId: "kwfx93-5"
})(["height:", ";min-height:", ";border-bottom:solid 1px ", ";font-family:Roboto;font-size:20px;font-weight:bold;list-style-type:none;&:hover{background-color:", ";}&:last-child{border-bottom:", ";}"], function (props) {
  return props.height ? props.height : '69px';
}, function (props) {
  return props.height ? props.height : '69px';
}, function (props) {
  return (0, _Themes.handleThemeFromObject)(props.theme, 'card.border', '#e6e6e6');
}, function (props) {
  return (0, _Themes.handleThemeFromObject)(props.theme, 'card.listItem.hover', 'rgba(230, 230, 230, 0.5)');
}, function (props) {
  return props.last ? '0px' : null;
});

exports.CardListItem = CardListItem;

var CardListContent = _styledComponents["default"].ul.withConfig({
  displayName: "Card__CardListContent",
  componentId: "kwfx93-6"
})(["flex-grow:1;overflow:auto;margin:0;padding:0;display:flex;flex-direction:column;justify-content:center;align-items:stretch;", ""], function (props) {
  if (props.adapt) {
    return "\n        & > li{\n          flex-grow: 1;\n          height: unset;\n          min-height: unset;\n        }\n\n        & > li:last-child {\n          border-bottom: 0px;\n        }\n      ";
  }

  return null;
});

exports.CardListContent = CardListContent;