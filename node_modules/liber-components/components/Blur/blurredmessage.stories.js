"use strict";

require("core-js/modules/es6.object.define-property");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.withOverlay = exports.transparent = exports.basic = exports["default"] = void 0;

var _react = _interopRequireDefault(require("react"));

var _styledComponents = _interopRequireDefault(require("styled-components"));

var _BlurredMessage = _interopRequireDefault(require("./BlurredMessage"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var _default = {
  title: 'Components 2.0|BlurredMessage',
  parameters: {
    jest: ['BlurredMessage']
  }
};
exports["default"] = _default;

var Container = _styledComponents["default"].div.withConfig({
  displayName: "blurredmessagestories__Container",
  componentId: "v9bdxe-0"
})(["width:400px;"]);

var MessageContainer = _styledComponents["default"].div.withConfig({
  displayName: "blurredmessagestories__MessageContainer",
  componentId: "v9bdxe-1"
})(["display:flex;align-items:center;justify-content:center;flex-direction:column;"]);

var text = "\n  Lorem ipsum dolor sit amet, consectetur adipiscing elit.\n  Duis id pretium sapien, vel vehicula dolor.\n  Vestibulum vel diam eu ante mollis eleifend.\n  In condimentum est eu finibus faucibus.\n  Nam congue urna nec tellus fringilla, quis euismod nulla tempus.\n  Aenean convallis aliquam odio, a rutrum lorem mattis in.\n  Aliquam eu eros vel ligula accumsan varius at vitae elit.\n  Nunc orci urna, feugiat at consequat et, tempus et diam.\n  Aenean ex ipsum, mattis at luctus id, suscipit quis urna.\n  Nulla facilisi. Suspendisse quis mauris nibh.\n  Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae;\n  Etiam molestie pulvinar erat id dapibus.\n  Integer sit amet lorem dapibus, pharetra neque vel, semper diam.\n  Pellentesque pharetra ipsum quis posuere sollicitudin.\n  Vivamus tempus feugiat quam, vitae eleifend justo blandit a.\n  Maecenas ipsum metus, tempus viverra ultrices eu, posuere et erat.\n";

var basic = function basic() {
  return _react["default"].createElement(Container, null, _react["default"].createElement(_BlurredMessage["default"], null, text));
};

exports.basic = basic;

var transparent = function transparent() {
  return _react["default"].createElement(Container, null, _react["default"].createElement(_BlurredMessage["default"], {
    blur: 0
  }, text, _react["default"].createElement("button", {
    type: "button"
  }, "botao habilitado pois blur = 0")));
};

exports.transparent = transparent;

var withOverlay = function withOverlay() {
  return _react["default"].createElement(Container, null, _react["default"].createElement(_BlurredMessage["default"], {
    overlay: _react["default"].createElement(MessageContainer, null, "Area desabilitada por algum motivo", _react["default"].createElement("button", {
      type: "button"
    }, "click me"))
  }, text, _react["default"].createElement("button", {
    type: "button"
  }, "botao desabilitado")));
};

exports.withOverlay = withOverlay;