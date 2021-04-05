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
exports.Global = exports.DialogContainer = exports.Bg = void 0;

require("core-js/modules/es6.object.define-properties");

require("core-js/modules/es6.object.freeze");

var _styledComponents = _interopRequireWildcard(require("styled-components"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _Util = require("../Util");

var _Themes = require("../Themes");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function _getRequireWildcardCache() { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; if (obj != null) { var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _templateObject2() {
  var data = _taggedTemplateLiteral(["\n      min-width: calc(100vw - 15px);\n    "]);

  _templateObject2 = function _templateObject2() {
    return data;
  };

  return data;
}

function _templateObject() {
  var data = _taggedTemplateLiteral(["\n  body {\n    min-width: 100vw;\n    ", "\n  }\n  body.modal-open{\n    overflow: hidden;\n    position: fixed;\n  }\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

var Bg = _styledComponents["default"].div.withConfig({
  displayName: "DialogStyles__Bg",
  componentId: "sc-1tnwai9-0"
})(["width:100%;height:100%;background-color:", ";position:fixed;top:0px;left:0px;"], function (props) {
  return (0, _Themes.handleThemeFromObject)(props.theme, 'dialog.background', '#717171');
});

exports.Bg = Bg;

var DialogContainer = _styledComponents["default"].div.withConfig({
  displayName: "DialogStyles__DialogContainer",
  componentId: "sc-1tnwai9-1"
})(["position:fixed;pointer-events:", ";top:0px;left:0px;width:100vw;height:100vh;z-index:9999;display:", ";justify-content:center;align-items:center;"], function (_ref) {
  var blockNavigation = _ref.blockNavigation;
  return blockNavigation ? 'unset' : 'none';
}, function (props) {
  return props.show ? 'flex' : 'none';
});

exports.DialogContainer = DialogContainer;
DialogContainer.propTypes = {
  blockNavigation: _propTypes["default"].bool
};
DialogContainer.defaultProps = {
  blockNavigation: true
};
var Global = (0, _styledComponents.createGlobalStyle)(_templateObject(), _Util.media.large(_templateObject2()));
exports.Global = Global;