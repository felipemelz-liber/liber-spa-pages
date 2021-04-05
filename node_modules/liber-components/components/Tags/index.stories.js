"use strict";

require("core-js/modules/es6.object.define-property");

require("core-js/modules/es6.array.iterator");

require("core-js/modules/es6.string.iterator");

require("core-js/modules/es6.weak-map");

require("core-js/modules/es6.regexp.to-string");

require("core-js/modules/es6.date.to-string");

require("core-js/modules/es6.object.to-string");

require("core-js/modules/es7.symbol.async-iterator");

require("core-js/modules/es6.symbol");

require("core-js/modules/web.dom.iterable");

require("core-js/modules/es6.array.is-array");

var _react = _interopRequireDefault(require("react"));

var _styledComponents = _interopRequireWildcard(require("styled-components"));

var _react2 = require("@storybook/react");

var _Icons = require("../Icons");

var _Tags = require("./Tags");

var _ModalTag = _interopRequireDefault(require("./ModalTag"));

var _StickyBar = _interopRequireDefault(require("../StickyBar"));

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function _getRequireWildcardCache() { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; if (obj != null) { var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance"); }

function _iterableToArrayLimit(arr, i) { if (!(Symbol.iterator in Object(arr) || Object.prototype.toString.call(arr) === "[object Arguments]")) { return; } var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

var StyledModalTag = (0, _styledComponents["default"])(_ModalTag["default"]).withConfig({
  displayName: "indexstories__StyledModalTag",
  componentId: "sc-1gaour2-0"
})(["", ""], function (_ref) {
  var content = _ref.content;
  return content ? (0, _styledComponents.css)(["--tag-border-color:unset;--tag-background-color:unset;--tag-color:unset;"]) : null;
});

var Center = _styledComponents["default"].div.withConfig({
  displayName: "indexstories__Center",
  componentId: "sc-1gaour2-1"
})(["display:flex;justify-content:center;align-items:center;width:100vw;height:100vh;"]);

var Content = _styledComponents["default"].div.withConfig({
  displayName: "indexstories__Content",
  componentId: "sc-1gaour2-2"
})(["width:250px;height:150px;"]);

var Row = _styledComponents["default"].div.withConfig({
  displayName: "indexstories__Row",
  componentId: "sc-1gaour2-3"
})(["display:flex;align-items:center;justify-content:flex-start;"]);

var RowLine = _styledComponents["default"].div.withConfig({
  displayName: "indexstories__RowLine",
  componentId: "sc-1gaour2-4"
})(["width:80vw;display:flex;justify-content:center;align-items:center;background-color:#fafafa;padding:0px 20px;height:68px;padding-bottom:38px;"]);

var Height = _styledComponents["default"].div.withConfig({
  displayName: "indexstories__Height",
  componentId: "sc-1gaour2-5"
})(["height:200vh;"]);

var Header = _styledComponents["default"].div.withConfig({
  displayName: "indexstories__Header",
  componentId: "sc-1gaour2-6"
})(["height:300px;width:100%;background-color:yellow;"]);

(0, _react2.storiesOf)('Components 2.0|ModalTag', module).addParameters({
  jest: ['ModalTag']
}).add('closable', function () {
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
}).add('bottom-left', function () {
  return _react["default"].createElement(_react["default"].Fragment, null, _react["default"].createElement(Center, null, _react["default"].createElement(_ModalTag["default"], {
    label: "Bottom-Left"
  }, _react["default"].createElement(Content, null, ":)"))));
}).add('bottom-right', function () {
  return _react["default"].createElement(_react["default"].Fragment, null, _react["default"].createElement(Center, null, _react["default"].createElement(_ModalTag["default"], {
    label: "Bottom-Right",
    mount: "bottom-right"
  }, _react["default"].createElement(Content, null, ":)"))));
}).add('top-left', function () {
  return _react["default"].createElement(_react["default"].Fragment, null, _react["default"].createElement(Center, null, _react["default"].createElement(_ModalTag["default"], {
    label: "Top-Left",
    mount: "top-left"
  }, _react["default"].createElement(Content, null, ":)"))));
}).add('top-right', function () {
  return _react["default"].createElement(_react["default"].Fragment, null, _react["default"].createElement(Center, null, _react["default"].createElement(_ModalTag["default"], {
    label: "Top-Right",
    mount: "top-right"
  }, _react["default"].createElement(Content, null, ":)"))));
});
(0, _react2.storiesOf)('Components 2.0|Tags', module).addParameters({
  jest: ['Tag']
}).add('simple', function () {
  return _react["default"].createElement(Row, null, _react["default"].createElement(_Tags.Tag, {
    disabled: true
  }, "TAG"), _react["default"].createElement(_Tags.Tag, null, "TAG"), _react["default"].createElement(_Tags.Tag, {
    closable: true
  }, "TAG"), _react["default"].createElement(_Tags.Tag, null, _react["default"].createElement(_Icons.MdHelpCircle, null), "TAG"));
}).add('primary', function () {
  return _react["default"].createElement(Row, null, _react["default"].createElement(_Tags.PrimaryTag, {
    disabled: true
  }, "TAG"), _react["default"].createElement(_Tags.PrimaryTag, null, "TAG"), _react["default"].createElement(_Tags.PrimaryTag, {
    closable: true
  }, "TAG"), _react["default"].createElement(_Tags.PrimaryTag, null, _react["default"].createElement(_Icons.MdHelpCircle, null), "TAG"));
}).add('success', function () {
  return _react["default"].createElement(Row, null, _react["default"].createElement(_Tags.SuccessTag, {
    disabled: true
  }, "TAG"), _react["default"].createElement(_Tags.SuccessTag, null, "TAG"), _react["default"].createElement(_Tags.SuccessTag, {
    closable: true
  }, "TAG"), _react["default"].createElement(_Tags.SuccessTag, null, _react["default"].createElement(_Icons.MdHelpCircle, null), "TAG"));
}).add('alert', function () {
  return _react["default"].createElement(Row, null, _react["default"].createElement(_Tags.AlertTag, {
    disabled: true
  }, "TAG"), _react["default"].createElement(_Tags.AlertTag, null, "TAG"), _react["default"].createElement(_Tags.AlertTag, {
    closable: true
  }, "TAG"), _react["default"].createElement(_Tags.AlertTag, null, _react["default"].createElement(_Icons.MdHelpCircle, null), "TAG"));
}).add('error', function () {
  return _react["default"].createElement(Row, null, _react["default"].createElement(_Tags.ErrorTag, {
    disabled: true
  }, "TAG"), _react["default"].createElement(_Tags.ErrorTag, null, "TAG"), _react["default"].createElement(_Tags.ErrorTag, {
    closable: true
  }, "TAG"), _react["default"].createElement(_Tags.ErrorTag, null, _react["default"].createElement(_Icons.MdHelpCircle, null), "TAG"));
}).add('white', function () {
  return _react["default"].createElement(Row, null, _react["default"].createElement(_Tags.WhiteTag, {
    disabled: true
  }, "TAG"), _react["default"].createElement(_Tags.WhiteTag, null, "TAG"), _react["default"].createElement(_Tags.WhiteTag, {
    closable: true
  }, "TAG"), _react["default"].createElement(_Tags.WhiteTag, null, _react["default"].createElement(_Icons.MdHelpCircle, null), "TAG"));
});