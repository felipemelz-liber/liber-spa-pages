"use strict";

require("core-js/modules/es6.object.define-property");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Icon = exports.Label = void 0;

require("core-js/modules/es6.object.define-properties");

require("core-js/modules/es6.object.freeze");

var _styledComponents = _interopRequireDefault(require("styled-components"));

var _Util = require("../../../Util");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _templateObject4() {
  var data = _taggedTemplateLiteral(["\n    margin-right: ", ";\n  "]);

  _templateObject4 = function _templateObject4() {
    return data;
  };

  return data;
}

function _templateObject3() {
  var data = _taggedTemplateLiteral(["\n    margin-right: ", ";\n  "]);

  _templateObject3 = function _templateObject3() {
    return data;
  };

  return data;
}

function _templateObject2() {
  var data = _taggedTemplateLiteral(["\n    width: ", ";\n    opacity: ", ";\n  "]);

  _templateObject2 = function _templateObject2() {
    return data;
  };

  return data;
}

function _templateObject() {
  var data = _taggedTemplateLiteral(["\n    width: ", ";\n    opacity: ", ";\n  "]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

var Label = _styledComponents["default"].div.withConfig({
  displayName: "styles__Label",
  componentId: "wminmz-0"
})(["text-align:center;width:unset;opacity:1;transition:all 300ms  ", ";white-space:nowrap;color:inherit;", " ", ""], function (props) {
  return props.hover ? 'ease-out' : 'ease-in';
}, _Util.media.large(_templateObject(), function (props) {
  return props.hover ? props.size || '0px' : '0px';
}, function (props) {
  return props.hover ? '1' : '0';
}), _Util.media.extraLarge(_templateObject2(), function (props) {
  return props.hover ? props.size || '0px' : '0px';
}, function (props) {
  return props.hover ? '1' : '0';
}));

exports.Label = Label;

var Icon = _styledComponents["default"].div.withConfig({
  displayName: "styles__Icon",
  componentId: "wminmz-1"
})(["margin-right:15px;transition:margin 300ms  ", ";", " ", ""], function (props) {
  return props.hover ? 'ease-out' : 'ease-in';
}, _Util.media.large(_templateObject3(), function (props) {
  return props.hover ? '15px' : '0px';
}), _Util.media.extraLarge(_templateObject4(), function (props) {
  return props.hover ? '15px' : '0px';
}));

exports.Icon = Icon;