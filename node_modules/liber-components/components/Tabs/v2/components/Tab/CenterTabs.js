"use strict";

require("core-js/modules/es6.weak-map");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

require("core-js/modules/es6.array.index-of");

require("core-js/modules/es6.string.iterator");

require("core-js/modules/es6.array.from");

require("core-js/modules/es6.regexp.to-string");

require("core-js/modules/es6.date.to-string");

require("core-js/modules/es7.symbol.async-iterator");

require("core-js/modules/es6.array.is-array");

require("core-js/modules/es6.object.define-properties");

require("core-js/modules/es7.object.get-own-property-descriptors");

require("core-js/modules/es6.array.for-each");

require("core-js/modules/es6.array.filter");

require("core-js/modules/es6.symbol");

require("core-js/modules/web.dom.iterable");

require("core-js/modules/es6.array.iterator");

require("core-js/modules/es6.object.to-string");

require("core-js/modules/es6.object.keys");

require("core-js/modules/es6.object.define-property");

require("core-js/modules/es6.array.reduce");

var _react = _interopRequireWildcard(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _lodash = require("lodash");

var _TabsCtrl = _interopRequireDefault(require("./TabsCtrl"));

var _SimpleTab = require("../SimpleTab");

var _types = require("@babel/types");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function _getRequireWildcardCache() { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; if (obj != null) { var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance"); }

function _iterableToArrayLimit(arr, i) { if (!(Symbol.iterator in Object(arr) || Object.prototype.toString.call(arr) === "[object Arguments]")) { return; } var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance"); }

function _iterableToArray(iter) { if (Symbol.iterator in Object(iter) || Object.prototype.toString.call(iter) === "[object Arguments]") return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = new Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(source, true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(source).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var handleClick = function handleClick(index, setActive) {
  return function () {
    setActive(index);
  };
};

var setAction = function setAction(child, index, active, setActive, styleProps) {
  var _child$props = child.props,
      label = _child$props.label,
      children = _child$props.children;
  return {
    actionTab: [_react["default"].cloneElement(child, _objectSpread({
      key: (0, _lodash.uniqueId)("tab_".concat(label)),
      as: 'div',
      onClick: handleClick(index, setActive),
      active: active === index,
      children: label
    }, styleProps))],
    tab: [{
      key: (0, _lodash.uniqueId)(label),
      content: children
    }],
    counter: 1
  };
};

var mapDropDownChildren = function mapDropDownChildren(active, setActive) {
  return function (current, child) {
    var _setAction = setAction(child, current.index, active, setActive),
        actionTab = _setAction.actionTab,
        tab = _setAction.tab,
        counter = _setAction.counter;

    return {
      mappedTabs: [].concat(_toConsumableArray(current.mappedTabs), _toConsumableArray(actionTab)),
      tabs: [].concat(_toConsumableArray(current.tabs), _toConsumableArray(tab)),
      index: current.index + counter
    };
  };
};

var setDropDownAction = function setDropDownAction(dropdown, index, active, setActive) {
  var children = _react["default"].Children.toArray(dropdown.props.children);

  var _children$reduce = children.reduce(mapDropDownChildren(active, setActive), {
    mappedTabs: [],
    tabs: [],
    index: index
  }),
      mappedTabs = _children$reduce.mappedTabs,
      tab = _children$reduce.tabs,
      counter = _children$reduce.index;

  return {
    actionTab: [_react["default"].cloneElement(dropdown, {
      children: mappedTabs,
      active: active >= index && active < counter,
      as: 'div'
    })],
    tab: tab,
    counter: counter - index
  };
};

var isDropDown = function isDropDown(child) {
  return child.type.displayName === 'DropDownTab';
};

var mapChildren = function mapChildren(active, setActive, styleProps) {
  return function (current, child) {
    var action = isDropDown(child) ? setDropDownAction : setAction;

    var _action = action(child, current.index, active, setActive, styleProps),
        actionTab = _action.actionTab,
        tab = _action.tab,
        counter = _action.counter;

    return {
      mappedTabs: [].concat(_toConsumableArray(current.mappedTabs), _toConsumableArray(actionTab)),
      tabs: [].concat(_toConsumableArray(current.tabs), _toConsumableArray(tab)),
      index: current.index + counter
    };
  };
};

var Tabs = function Tabs(props) {
  var _useState = (0, _react.useState)(0),
      _useState2 = _slicedToArray(_useState, 2),
      active = _useState2[0],
      setActive = _useState2[1];

  var children = props.children,
      _props$activeTab = props.activeTab,
      activeTab = _props$activeTab === void 0 ? active : _props$activeTab,
      _props$onChange = props.onChange,
      onChange = _props$onChange === void 0 ? setActive : _props$onChange,
      ControlComponent = props.ControlComponent,
      styleProps = _objectWithoutProperties(props, ["children", "activeTab", "onChange", "ControlComponent"]);

  var _React$Children$toArr = _react["default"].Children.toArray(children).reduce(mapChildren(activeTab, onChange, styleProps), {
    mappedTabs: [],
    tabs: [],
    index: 0
  }),
      mappedTabs = _React$Children$toArr.mappedTabs,
      tabs = _React$Children$toArr.tabs;

  var header = _react["default"].createElement(_SimpleTab.SimpleTabs, null, mappedTabs);

  return _react["default"].cloneElement(ControlComponent, {
    header: header,
    active: activeTab,
    tabs: tabs
  });
};

Tabs.propTypes = {
  children: _propTypes["default"].oneOfType([_propTypes["default"].node, _propTypes["default"].arrayOf(_propTypes["default"].node)]).isRequired,
  activeTab: _propTypes["default"].number,
  onChange: _propTypes["default"].func,
  ControlComponent: _propTypes["default"].element
};
Tabs.defaultProps = {
  activeTab: undefined,
  onChange: undefined,
  ControlComponent: _react["default"].createElement(_TabsCtrl["default"], {
    header: _react["default"].createElement("div", null),
    active: 0,
    tabs: []
  })
};
var _default = Tabs;
exports["default"] = _default;