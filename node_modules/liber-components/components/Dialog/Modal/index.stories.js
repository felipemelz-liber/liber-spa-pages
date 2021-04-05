"use strict";

require("core-js/modules/es6.object.define-property");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.fullscreen = exports.fast = exports.withPosition = exports.defaultStory = exports["default"] = void 0;

require("core-js/modules/es6.regexp.to-string");

require("core-js/modules/es6.date.to-string");

require("core-js/modules/es6.object.to-string");

require("core-js/modules/es7.symbol.async-iterator");

require("core-js/modules/es6.symbol");

require("core-js/modules/web.dom.iterable");

require("core-js/modules/es6.array.is-array");

var _react = _interopRequireDefault(require("react"));

var _styledComponents = _interopRequireDefault(require("styled-components"));

var _addonActions = require("@storybook/addon-actions");

var _Modal = _interopRequireDefault(require("./Modal"));

var _Buttons = require("../../Buttons");

var _GenericStyles = require("../../GenericStyles");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance"); }

function _iterableToArrayLimit(arr, i) { if (!(Symbol.iterator in Object(arr) || Object.prototype.toString.call(arr) === "[object Arguments]")) { return; } var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

var Container = _styledComponents["default"].div.withConfig({
  displayName: "indexstories__Container",
  componentId: "sc-1eu045c-0"
})(["width:200px;height:150px;background-color:#fafafa;display:flex;justify-content:center;align-items:center;"]);

var CustomModalContainer = _styledComponents["default"].div.withConfig({
  displayName: "indexstories__CustomModalContainer",
  componentId: "sc-1eu045c-1"
})(["width:100%;height:100%;display:flex;flex-direction:column;justify-content:center;align-items:center;"]);

var CustomContentContainer = _styledComponents["default"].div.withConfig({
  displayName: "indexstories__CustomContentContainer",
  componentId: "sc-1eu045c-2"
})(["padding:48px;"]);

var _default = {
  title: 'Components 1.0|Dialog/Modal',
  parameters: {
    jest: ['Modal']
  }
};
exports["default"] = _default;

var defaultStory = function defaultStory() {
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
  }, _react["default"].createElement(_GenericStyles.ModalContainer, null, _react["default"].createElement(_GenericStyles.ModalContent, null, "Content"), _react["default"].createElement(_GenericStyles.ModalButtons, null, _react["default"].createElement(_Buttons.PrimaryButton, {
    version: 2,
    onClick: function onClick() {
      setState(false);
    }
  }, "CLOSE")))));
};

exports.defaultStory = defaultStory;
defaultStory.story = {
  name: 'default'
};

var withPosition = function withPosition() {
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
};

exports.withPosition = withPosition;

var fast = function fast() {
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
  }, _react["default"].createElement(_GenericStyles.ModalContainer, null, _react["default"].createElement(_GenericStyles.ModalContent, null, "Content"), _react["default"].createElement(_GenericStyles.ModalButtons, null, _react["default"].createElement(_Buttons.PrimaryButton, {
    version: 2,
    onClick: function onClick() {
      setState(false);
    }
  }, "CLOSE")))));
};

exports.fast = fast;

var fullscreen = function fullscreen() {
  var _React$useState7 = _react["default"].useState(false),
      _React$useState8 = _slicedToArray(_React$useState7, 2),
      state = _React$useState8[0],
      setState = _React$useState8[1];

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
    },
    fullscreen: true
  }, _react["default"].createElement(CustomModalContainer, null, _react["default"].createElement(CustomContentContainer, null, "-- Content --"), _react["default"].createElement(_Buttons.PrimaryButton, {
    version: 2,
    onClick: function onClick() {
      setState(false);
    }
  }, "CLOSE"))));
};

exports.fullscreen = fullscreen;