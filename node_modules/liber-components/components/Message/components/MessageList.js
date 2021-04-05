"use strict";

require("core-js/modules/es6.object.define-property");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

require("core-js/modules/es6.array.map");

var _react = _interopRequireDefault(require("react"));

var _reactDom = require("react-dom");

var _reactRedux = require("react-redux");

var _actions = require("../actions");

var _Message = require("./Message.styles");

var _Message2 = _interopRequireDefault(require("./Message"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var mappedMessages = function mappedMessages(close, remove) {
  return function (message) {
    return message.message && _react["default"].createElement(_Message2["default"], {
      duration: message.duration,
      id: message.id,
      key: message.id,
      type: message.type,
      show: message.show,
      action: message.action,
      onClose: close,
      onExited: remove
    }, message.message);
  };
};

var MessageList = function MessageList(_ref) {
  var messages = _ref.messages,
      close = _ref.close,
      remove = _ref.remove;
  return (0, _reactDom.createPortal)(_react["default"].createElement(_Message.Fixed, null, messages.map(mappedMessages(close, remove))), document.getElementById('message'));
};

var mapDispatchToProps = {
  close: _actions.closeMessage,
  remove: _actions.removeMessage
};

var mapStateToProps = function mapStateToProps(state) {
  return {
    messages: state.messages
  };
};

var _default = (0, _reactRedux.connect)(mapStateToProps, mapDispatchToProps)(MessageList);

exports["default"] = _default;