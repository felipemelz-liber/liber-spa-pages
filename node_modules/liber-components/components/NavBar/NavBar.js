"use strict";

require("core-js/modules/es6.object.define-property");

require("core-js/modules/es6.array.iterator");

require("core-js/modules/es6.string.iterator");

require("core-js/modules/es6.weak-map");

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

var _react = _interopRequireWildcard(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _DropDown = require("../DropDown");

var _Util = require("../Util");

var _NavBar = require("./NavBar.styles");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function _getRequireWildcardCache() { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; if (obj != null) { var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance"); }

function _iterableToArrayLimit(arr, i) { if (!(Symbol.iterator in Object(arr) || Object.prototype.toString.call(arr) === "[object Arguments]")) { return; } var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

var button = function button(menu) {
  var _menu$icon = menu.icon,
      icon = _menu$icon === void 0 ? null : _menu$icon,
      label = menu.label,
      _menu$sublabel = menu.sublabel,
      sublabel = _menu$sublabel === void 0 ? null : _menu$sublabel;
  return _react["default"].createElement(_NavBar.Label, null, _react["default"].createElement("li", null, icon, label), sublabel && _react["default"].createElement("li", null, _react["default"].createElement("span", null, sublabel)));
};

var NavBar = function NavBar(_ref) {
  var children = _ref.children,
      menu = _ref.menu,
      contentSize = _ref.contentSize,
      window = _ref.window;
  var content = menu.content;

  var _useState = (0, _react.useState)(window ? (0, _Util.getScreenSize)(window) : 'large'),
      _useState2 = _slicedToArray(_useState, 2),
      screenSize = _useState2[0],
      setScreenSize = _useState2[1];

  (0, _react.useEffect)(function () {
    if (window) {
      var handleResize = function handleResize() {
        setScreenSize((0, _Util.getScreenSize)(window));
      };

      window.addEventListener('resize', handleResize);
      return function () {
        window.removeEventListener('resize', handleResize);
      };
    }

    return undefined;
  }, window);
  var small = screenSize === 'small' || screenSize === 'medium';
  return _react["default"].createElement(_NavBar.Nav, null, _react["default"].createElement(_NavBar.Content, {
    size: contentSize
  }, _react["default"].createElement(_NavBar.Logo, null), children, _react["default"].createElement(_NavBar.Menu, null, _react["default"].createElement(_DropDown.SimpleDropDown, {
    position: "bottom-left",
    label: !small ? button(menu) : undefined,
    customButton: small ? _react["default"].createElement(_NavBar.Sandwich, null) : undefined
  }, content))));
};

NavBar.propTypes = {
  children: _propTypes["default"].oneOfType([_propTypes["default"].any]),
  menu: _propTypes["default"].shape({
    icon: _propTypes["default"].node,
    label: _propTypes["default"].oneOfType([_propTypes["default"].node, _propTypes["default"].string]),
    sublabel: _propTypes["default"].string,
    content: _propTypes["default"].oneOfType([_propTypes["default"].any])
  }),
  contentSize: _propTypes["default"].string,
  window: _propTypes["default"].objectOf(_propTypes["default"].any)
};
NavBar.defaultProps = {
  children: null,
  menu: {},
  contentSize: null,
  window: null
};
var _default = NavBar;
exports["default"] = _default;