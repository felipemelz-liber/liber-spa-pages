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

require("core-js/modules/es6.array.map");

var _react = _interopRequireWildcard(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _Tabs = require("./Tabs.styles");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function _getRequireWildcardCache() { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; if (obj != null) { var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance"); }

function _iterableToArrayLimit(arr, i) { if (!(Symbol.iterator in Object(arr) || Object.prototype.toString.call(arr) === "[object Arguments]")) { return; } var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

var isBetween = function isBetween(value, min, max) {
  return value >= min && value <= max;
};

var TabsCtrl = function TabsCtrl(_ref) {
  var tabs = _ref.tabs,
      ctrlActive = _ref.active,
      header = _ref.header;

  var _React$useState = _react["default"].useState(false),
      _React$useState2 = _slicedToArray(_React$useState, 2),
      transitioning = _React$useState2[0],
      setTransitioning = _React$useState2[1];

  var _useState = (0, _react.useState)(true),
      _useState2 = _slicedToArray(_useState, 2),
      isFirstLoad = _useState2[0],
      setIsFirstLoad = _useState2[1];

  var active = isBetween(ctrlActive, 0, tabs.length - 1) ? ctrlActive : 0;
  var mappedChildren = tabs.map(function (tab, index) {
    return _react["default"].createElement(_Tabs.TabContent, {
      key: tab.key,
      active: active === index
    }, tab.content);
  });

  _react["default"].useEffect(function () {
    if (!isFirstLoad) {
      setTransitioning(true);
    } else {
      setIsFirstLoad(false);
    }
  }, [ctrlActive]);

  return _react["default"].createElement(_Tabs.TabContainer, {
    transitioning: transitioning
  }, header, _react["default"].createElement(_Tabs.TabContentDisplay, {
    onTransitionEnd: function onTransitionEnd() {
      return setTransitioning(false);
    },
    active: active
  }, mappedChildren));
};

TabsCtrl.propTypes = {
  tabs: _propTypes["default"].arrayOf(_propTypes["default"].shape({
    key: _propTypes["default"].string,
    content: _propTypes["default"].any
  })).isRequired,
  active: _propTypes["default"].number.isRequired,
  header: _propTypes["default"].node.isRequired
};
var _default = TabsCtrl;
exports["default"] = _default;