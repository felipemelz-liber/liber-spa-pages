"use strict";

require("core-js/modules/es6.object.define-property");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.dispel = exports.message = exports.closeMessage = exports.removeMessage = void 0;

require("core-js/modules/es6.array.find");

require("core-js/modules/es6.promise");

require("core-js/modules/es6.regexp.to-string");

require("core-js/modules/es6.date.to-string");

require("core-js/modules/es6.object.to-string");

var _store = _interopRequireDefault(require("./store"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var genId = function genId() {
  return Math.random().toString(36).substr(2, 5);
};

var addMessage = function addMessage(type, message, action, duration, id) {
  return {
    type: 'ADD_MESSAGE',
    payload: {
      type: type,
      message: message,
      action: action || null,
      duration: duration || 1500,
      id: id,
      show: true
    }
  };
};

var removeMessage = function removeMessage(id) {
  return {
    type: 'REMOVE_MESSAGE',
    payload: id
  };
};

exports.removeMessage = removeMessage;

var closeMessage = function closeMessage(index) {
  return {
    type: 'CLOSE_MESSAGE',
    payload: index
  };
};

exports.closeMessage = closeMessage;

var makePromise = function makePromise(id) {
  return new Promise(function (resolve) {
    _store["default"].subscribe(function () {
      var state = _store["default"].getState();

      var messages = state.messages;
      var msg = messages.find(function (message) {
        return message.id === id;
      });

      if (!msg) {
        resolve();
      }
    });
  });
};

var message = function message(msg, type, duration, action) {
  var id = arguments.length > 4 && arguments[4] !== undefined ? arguments[4] : genId();

  _store["default"].dispatch(addMessage(type, msg, action, duration, id));

  return makePromise(id);
};

exports.message = message;

var basic = function basic(msg, duration, action) {
  var id = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : genId();
  return message(msg, 'basic', duration, action, id);
};

var dark = function dark(msg, duration, action) {
  var id = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : genId();
  return message(msg, 'dark', duration, action, id);
};

var primary = function primary(msg, duration, action) {
  var id = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : genId();
  return message(msg, 'primary', duration, action, id);
};

var success = function success(msg, duration, action) {
  var id = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : genId();
  return message(msg, 'success', duration, action, id);
};

var alert = function alert(msg, duration, action) {
  var id = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : genId();
  return message(msg, 'alert', duration, action, id);
};

var error = function error(msg, duration, action) {
  var id = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : genId();
  return message(msg, 'error', duration, action, id);
};

var dispel = function dispel(id) {
  _store["default"].dispatch(closeMessage(id));
};

exports.dispel = dispel;
message.dark = dark;
message.basic = basic;
message.notice = basic;
message.info = basic;
message.primary = primary;
message.success = success;
message.alert = alert;
message.warning = alert;
message.error = error;
message.dispel = dispel;