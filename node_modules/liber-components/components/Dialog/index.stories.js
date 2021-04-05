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

var _react = _interopRequireWildcard(require("react"));

var _styledComponents = _interopRequireDefault(require("styled-components"));

var _react2 = require("@storybook/react");

var _addonActions = require("@storybook/addon-actions");

var _Modal = _interopRequireDefault(require("./Modal"));

var _Drawer = _interopRequireDefault(require("./Drawer"));

var _Buttons = require("../Buttons");

var _GenericStyles = require("../GenericStyles");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function _getRequireWildcardCache() { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; if (obj != null) { var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance"); }

function _iterableToArrayLimit(arr, i) { if (!(Symbol.iterator in Object(arr) || Object.prototype.toString.call(arr) === "[object Arguments]")) { return; } var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

var Container = _styledComponents["default"].div.withConfig({
  displayName: "indexstories__Container",
  componentId: "sc-16g5znd-0"
})(["width:200px;height:150px;background-color:#fafafa;display:flex;justify-content:center;align-items:center;"]);

var Height = _styledComponents["default"].div.withConfig({
  displayName: "indexstories__Height",
  componentId: "sc-16g5znd-1"
})(["height:200vh;"]);

(0, _react2.storiesOf)('Components 1.0|Dialog/Modal', module).addParameters({
  jest: ['Modal']
}).add('default', function () {
  var _React$useState = _react["default"].useState(false),
      _React$useState2 = _slicedToArray(_React$useState, 2),
      state = _React$useState2[0],
      setState = _React$useState2[1];

  return _react["default"].createElement(_react["default"].Fragment, null, _react["default"].createElement("button", {
    type: "button",
    onClick: function onClick() {
      setState(true);
    }
  }, "Open Modal"), _react["default"].createElement(_Modal["default"], {
    show: state,
    elementId: "root",
    onLeaved: function onLeaved() {
      setState(false);
      (0, _addonActions.action)('left');
    }
  }, _react["default"].createElement(_GenericStyles.ModalContainer, null, _react["default"].createElement(_GenericStyles.ModalContent, null, "Content"), _react["default"].createElement(_GenericStyles.ModalButtons, null, _react["default"].createElement(_Buttons.PrimaryButton, null, "Fechar")))));
}).add('with position', function () {
  var _React$useState3 = _react["default"].useState(false),
      _React$useState4 = _slicedToArray(_React$useState3, 2),
      state = _React$useState4[0],
      setState = _React$useState4[1];

  return _react["default"].createElement(_react["default"].Fragment, null, _react["default"].createElement("button", {
    type: "button",
    onClick: function onClick() {
      setState(true);
    }
  }, "Open Modal"), _react["default"].createElement(_Modal["default"], {
    show: state,
    elementId: "root",
    position: {
      x: 20,
      y: 20
    } // animation="ease-in-out"
    ,
    animateFrom: "-40px",
    duration: 120,
    onLeaved: function onLeaved() {
      setState(false);
      (0, _addonActions.action)('left');
    }
  }, _react["default"].createElement(Container, null, ";)")));
}).add('fast', function () {
  var _React$useState5 = _react["default"].useState(false),
      _React$useState6 = _slicedToArray(_React$useState5, 2),
      state = _React$useState6[0],
      setState = _React$useState6[1];

  return _react["default"].createElement(_react["default"].Fragment, null, _react["default"].createElement("button", {
    type: "button",
    onClick: function onClick() {
      setState(true);
      setTimeout(function () {
        setState(false);
      }, 500);
    }
  }, "Open Modal"), _react["default"].createElement(_Modal["default"], {
    show: state,
    elementId: "root",
    onLeaved: (0, _addonActions.action)('left')
  }, _react["default"].createElement(_GenericStyles.ModalContainer, null, _react["default"].createElement(_GenericStyles.ModalContent, null, "Content"), _react["default"].createElement(_GenericStyles.ModalButtons, null, _react["default"].createElement(_Buttons.PrimaryButton, null, "Fechar")))));
});
(0, _react2.storiesOf)('Components 1.0|Dialog/Drawer', module).addParameters({
  jest: ['Drawer']
}).add('default', function () {
  var _useState = (0, _react.useState)(false),
      _useState2 = _slicedToArray(_useState, 2),
      open = _useState2[0],
      setOpen = _useState2[1];

  return _react["default"].createElement(_react["default"].Fragment, null, _react["default"].createElement("button", {
    type: "button",
    onClick: function onClick() {
      return setOpen(true);
    }
  }, "Open Drawer"), _react["default"].createElement(_Drawer["default"], {
    onLeaved: function onLeaved() {
      return setOpen(false);
    },
    show: open,
    elementId: "root"
  }, "Content"));
}).add('fast', function () {
  var _useState3 = (0, _react.useState)(false),
      _useState4 = _slicedToArray(_useState3, 2),
      open = _useState4[0],
      setOpen = _useState4[1];

  return _react["default"].createElement(_react["default"].Fragment, null, _react["default"].createElement("button", {
    type: "button",
    onClick: function onClick() {
      setOpen(true);
      setTimeout(function () {
        setOpen(false);
      }, 500);
    }
  }, "Open Drawer"), _react["default"].createElement(_Drawer["default"], {
    onLeaved: function onLeaved() {
      return setOpen(false);
    },
    show: open,
    elementId: "root",
    position: "top"
  }, "Content"));
}).add('on top', function () {
  var _useState5 = (0, _react.useState)(false),
      _useState6 = _slicedToArray(_useState5, 2),
      open = _useState6[0],
      setOpen = _useState6[1];

  return _react["default"].createElement(_react["default"].Fragment, null, _react["default"].createElement("button", {
    type: "button",
    onClick: function onClick() {
      setOpen(true);
    }
  }, "Open Drawer"), _react["default"].createElement(_Drawer["default"], {
    onLeaved: function onLeaved() {
      return setOpen(false);
    },
    show: open,
    elementId: "root",
    position: "top"
  }, "Content"));
}).add('on right', function () {
  var _useState7 = (0, _react.useState)(false),
      _useState8 = _slicedToArray(_useState7, 2),
      open = _useState8[0],
      setOpen = _useState8[1];

  return _react["default"].createElement(_react["default"].Fragment, null, _react["default"].createElement("button", {
    type: "button",
    onClick: function onClick() {
      return setOpen(true);
    }
  }, "Open Drawer"), _react["default"].createElement(_Drawer["default"], {
    onLeaved: function onLeaved() {
      return setOpen(false);
    },
    show: open,
    elementId: "root",
    position: "right"
  }, "Content"));
}).add('on bottom', function () {
  var _useState9 = (0, _react.useState)(false),
      _useState10 = _slicedToArray(_useState9, 2),
      open = _useState10[0],
      setOpen = _useState10[1];

  return _react["default"].createElement(_react["default"].Fragment, null, _react["default"].createElement("button", {
    type: "button",
    onClick: function onClick() {
      return setOpen(true);
    }
  }, "Open Drawer"), _react["default"].createElement(_Drawer["default"], {
    onLeaved: function onLeaved() {
      return setOpen(false);
    },
    show: open,
    elementId: "root",
    position: "bottom"
  }, "Content"), _react["default"].createElement(Height, null));
}).add('not blocking navigation', function () {
  var _useState11 = (0, _react.useState)(false),
      _useState12 = _slicedToArray(_useState11, 2),
      open = _useState12[0],
      setOpen = _useState12[1];

  return _react["default"].createElement(_react["default"].Fragment, null, _react["default"].createElement("button", {
    type: "button",
    onClick: function onClick() {
      return setOpen(true);
    }
  }, "Open Drawer"), _react["default"].createElement("button", {
    type: "button",
    onClick: function onClick() {
      return setOpen(false);
    }
  }, "Close Drawer"), _react["default"].createElement(_Drawer["default"], {
    show: open,
    elementId: "root",
    position: "bottom",
    blockNavigation: false
  }, "Content"), _react["default"].createElement(Height, null));
}).add('not blocking navigation with drawer size', function () {
  var _useState13 = (0, _react.useState)(false),
      _useState14 = _slicedToArray(_useState13, 2),
      open = _useState14[0],
      setOpen = _useState14[1];

  return _react["default"].createElement(_react["default"].Fragment, null, _react["default"].createElement("button", {
    type: "button",
    onClick: function onClick() {
      return setOpen(true);
    }
  }, "Open Drawer"), _react["default"].createElement("button", {
    type: "button",
    onClick: function onClick() {
      return setOpen(false);
    }
  }, "Close Drawer"), _react["default"].createElement(_Drawer["default"], {
    show: open,
    elementId: "root",
    position: "bottom",
    blockNavigation: false,
    drawerSize: 300
  }, "Content"), _react["default"].createElement(Height, null));
}).add('with drawer size', function () {
  var _useState15 = (0, _react.useState)(false),
      _useState16 = _slicedToArray(_useState15, 2),
      open = _useState16[0],
      setOpen = _useState16[1];

  return _react["default"].createElement(_react["default"].Fragment, null, _react["default"].createElement("button", {
    type: "button",
    onClick: function onClick() {
      return setOpen(true);
    }
  }, "Open Drawer"), _react["default"].createElement(_Drawer["default"], {
    show: open,
    onLeaved: function onLeaved() {
      return setOpen(false);
    },
    elementId: "root",
    position: "right",
    drawerSize: 300
  }, "Content"));
});