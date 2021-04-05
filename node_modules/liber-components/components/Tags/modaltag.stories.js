"use strict";

require("core-js/modules/es6.object.define-property");

require("core-js/modules/es6.array.iterator");

require("core-js/modules/es6.string.iterator");

require("core-js/modules/es6.weak-map");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.topRight = exports.topLeft = exports.bottomRight = exports.bottomLeft = exports.closable = exports["default"] = void 0;

require("core-js/modules/es6.regexp.to-string");

require("core-js/modules/es6.date.to-string");

require("core-js/modules/es6.object.to-string");

require("core-js/modules/es7.symbol.async-iterator");

require("core-js/modules/es6.symbol");

require("core-js/modules/web.dom.iterable");

require("core-js/modules/es6.array.is-array");

var _react = _interopRequireDefault(require("react"));

var _styledComponents = _interopRequireWildcard(require("styled-components"));

var _ModalTag = _interopRequireDefault(require("./ModalTag"));

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function _getRequireWildcardCache() { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; if (obj != null) { var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance"); }

function _iterableToArrayLimit(arr, i) { if (!(Symbol.iterator in Object(arr) || Object.prototype.toString.call(arr) === "[object Arguments]")) { return; } var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

var StyledModalTag = (0, _styledComponents["default"])(_ModalTag["default"]).withConfig({
  displayName: "modaltagstories__StyledModalTag",
  componentId: "sc-16s1ufj-0"
})(["", ""], function (_ref) {
  var content = _ref.content;
  return content ? (0, _styledComponents.css)(["--tag-border-color:unset;--tag-background-color:unset;--tag-color:unset;"]) : null;
});

var Center = _styledComponents["default"].div.withConfig({
  displayName: "modaltagstories__Center",
  componentId: "sc-16s1ufj-1"
})(["display:flex;justify-content:center;align-items:center;width:100vw;height:100vh;"]);

var Content = _styledComponents["default"].div.withConfig({
  displayName: "modaltagstories__Content",
  componentId: "sc-16s1ufj-2"
})(["width:250px;height:150px;"]);

var RowLine = _styledComponents["default"].div.withConfig({
  displayName: "modaltagstories__RowLine",
  componentId: "sc-16s1ufj-3"
})(["width:80vw;display:flex;justify-content:center;align-items:center;background-color:#fafafa;padding:0px 20px;height:68px;padding-bottom:38px;"]);

var Height = _styledComponents["default"].div.withConfig({
  displayName: "modaltagstories__Height",
  componentId: "sc-16s1ufj-4"
})(["height:200vh;"]);

var _default = {
  title: 'Components 2.0|ModalTag',
  parameters: {
    jest: ['ModalTag']
  }
};
exports["default"] = _default;

var closable = function closable() {
  var _React$useState = _react["default"].useState(null),
      _React$useState2 = _slicedToArray(_React$useState, 2),
      content = _React$useState2[0],
      setContent = _React$useState2[1];

  return _react["default"].createElement(_react["default"].Fragment, null, _react["default"].createElement(RowLine, null, _react["default"].createElement(StyledModalTag, {
    mount: "top-left",
    overflow: "center",
    label: content || 'Closable',
    content: content,
    closable: content,
    onClose: function onClose() {
      return setContent(null);
    }
  }, _react["default"].createElement(Content, null, _react["default"].createElement("button", {
    type: "button",
    onClick: function onClick() {
      return setContent(':)');
    }
  }, ":)")))), _react["default"].createElement(Height, null));
};

exports.closable = closable;

var bottomLeft = function bottomLeft() {
  return _react["default"].createElement(_react["default"].Fragment, null, _react["default"].createElement(Center, null, _react["default"].createElement(_ModalTag["default"], {
    label: "Bottom-Left"
  }, _react["default"].createElement(Content, null, ":)"))));
};

exports.bottomLeft = bottomLeft;
bottomLeft.story = {
  name: 'bottom-left'
};

var bottomRight = function bottomRight() {
  return _react["default"].createElement(_react["default"].Fragment, null, _react["default"].createElement(Center, null, _react["default"].createElement(_ModalTag["default"], {
    label: "Bottom-Right",
    mount: "bottom-right"
  }, _react["default"].createElement(Content, null, ":)"))));
};

exports.bottomRight = bottomRight;
bottomRight.story = {
  name: 'bottom-right'
};

var topLeft = function topLeft() {
  return _react["default"].createElement(_react["default"].Fragment, null, _react["default"].createElement(Center, null, _react["default"].createElement(_ModalTag["default"], {
    label: "Top-Left",
    mount: "top-left"
  }, _react["default"].createElement(Content, null, ":)"))));
};

exports.topLeft = topLeft;
topLeft.story = {
  name: 'top-left'
};

var topRight = function topRight() {
  return _react["default"].createElement(_react["default"].Fragment, null, _react["default"].createElement(Center, null, _react["default"].createElement(_ModalTag["default"], {
    label: "Top-Right",
    mount: "top-right"
  }, _react["default"].createElement(Content, null, ":)"))));
};

exports.topRight = topRight;
topRight.story = {
  name: 'top-right'
};