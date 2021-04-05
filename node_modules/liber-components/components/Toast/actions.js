"use strict";

require("core-js/modules/es6.object.define-property");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.dispel = exports.toast = exports.closeToast = exports.removeToast = void 0;

require("core-js/modules/es7.symbol.async-iterator");

require("core-js/modules/es6.symbol");

require("core-js/modules/es6.regexp.to-string");

require("core-js/modules/es6.date.to-string");

require("core-js/modules/es6.object.to-string");

var _store = _interopRequireDefault(require("./store"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

var genId = function genId() {
  return Math.random().toString(36).substr(2, 5);
};

var addToast = function addToast(message, info, content) {
  var type = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : null;
  var duration = arguments.length > 4 ? arguments[4] : undefined;
  var id = arguments.length > 5 ? arguments[5] : undefined;
  return {
    type: 'ADD_TOAST',
    payload: {
      id: id,
      type: type,
      message: message,
      info: info,
      content: content,
      duration: duration,
      show: true
    }
  };
};

var removeToast = function removeToast(id) {
  return {
    type: 'REMOVE_TOAST',
    payload: id
  };
};

exports.removeToast = removeToast;

var closeToast = function closeToast(id) {
  return {
    type: 'CLOSE_TOAST',
    payload: id
  };
};

exports.closeToast = closeToast;

var otherToast = function otherToast(message, type, duration) {
  var id = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : genId();

  _store["default"].dispatch(addToast(message, '', '', type, duration, id));

  return id;
};

var objToast = function objToast() {
  var message = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : '';
  var info = arguments.length > 1 ? arguments[1] : undefined;
  var content = arguments.length > 2 ? arguments[2] : undefined;
  var type = arguments.length > 3 ? arguments[3] : undefined;
  var duration = arguments.length > 4 ? arguments[4] : undefined;
  var id = arguments.length > 5 ? arguments[5] : undefined;

  _store["default"].dispatch(addToast(message, info, content, type, duration, id));

  return id;
};

var toast = function toast(message, type, duration) {
  var id = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : genId();

  if (message && _typeof(message) === 'object' && message.constructor === Object) {
    return objToast(message.message, message.info, message.content, type, duration, id);
  }

  return otherToast(message, type, duration, id);
};

exports.toast = toast;

var dispel = function dispel(id) {
  _store["default"].dispatch(closeToast(id));
};

exports.dispel = dispel;