"use strict";

require("core-js/modules/es6.object.define-property");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

require("core-js/modules/es6.regexp.to-string");

require("core-js/modules/es6.date.to-string");

require("core-js/modules/es6.object.to-string");

require("core-js/modules/es7.symbol.async-iterator");

require("core-js/modules/es6.symbol");

require("core-js/modules/web.dom.iterable");

require("core-js/modules/es6.array.is-array");

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _ClickOutside = _interopRequireDefault(require("../../../../Util/ClickOutside"));

var _DropDownTab = require("./DropDownTab.styles");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance"); }

function _iterableToArrayLimit(arr, i) { if (!(Symbol.iterator in Object(arr) || Object.prototype.toString.call(arr) === "[object Arguments]")) { return; } var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

var toogleContent = function toogleContent(open, setOpen) {
  return function () {
    setOpen(!open);
  };
};

var closeContent = function closeContent(setOpen) {
  return function () {
    setOpen(false);
  };
};

var handleSelection = function handleSelection(setCurrent) {
  return function (event) {
    var target = event.target;
    var label = target.getAttribute('label');

    if (label) {
      setCurrent(label);
    }
  };
};

var DropDownTab = function DropDownTab(_ref) {
  var active = _ref.active,
      minWidth = _ref.minWidth,
      childrenProp = _ref.children,
      strongBorder = _ref.strongBorder,
      label = _ref.label;

  var children = _react["default"].Children.toArray(childrenProp);

  if (!children || children.length < 2) {
    throw new Error('You need at least two children, dumbass!');
  }

  var _React$useState = _react["default"].useState(false),
      _React$useState2 = _slicedToArray(_React$useState, 2),
      open = _React$useState2[0],
      setOpen = _React$useState2[1];

  return _react["default"].createElement(_DropDownTab.Tab, {
    as: "div",
    active: active,
    onClick: toogleContent(open, setOpen),
    minWidth: minWidth,
    strongBorder: strongBorder
  }, _react["default"].createElement(_ClickOutside["default"], {
    onOutsideClick: closeContent(setOpen)
  }, label, _react["default"].createElement(_DropDownTab.Content, {
    open: open,
    strongBorder: strongBorder
  }, children)));
};

DropDownTab.propTypes = {
  children: _propTypes["default"].arrayOf(_propTypes["default"].element).isRequired,
  active: _propTypes["default"].bool,
  minWidth: _propTypes["default"].number,
  strongBorder: _propTypes["default"].bool,
  label: _propTypes["default"].node
};
DropDownTab.defaultProps = {
  active: false,
  minWidth: undefined,
  strongBorder: false,
  label: 'Opções'
};
DropDownTab.displayName = 'DropDownTab';
var _default = DropDownTab;
exports["default"] = _default;