"use strict";

require("core-js/modules/es6.object.define-property");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.messageStory = exports["default"] = void 0;

var _react = _interopRequireDefault(require("react"));

var _styledComponents = _interopRequireDefault(require("styled-components"));

var _addonActions = require("@storybook/addon-actions");

var _actions = require("./actions");

var _Buttons = require("../Buttons");

var _MessageContainer = _interopRequireDefault(require("./components/MessageContainer"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var Row = _styledComponents["default"].div.withConfig({
  displayName: "indexstories__Row",
  componentId: "wzykd1-0"
})(["margin:12px;display:flex;justify-content:flex-start;align-items:center;color:#405f71;& > button,& > span{margin-right:12px !important;}"]);

var Header = _styledComponents["default"].h3.withConfig({
  displayName: "indexstories__Header",
  componentId: "wzykd1-1"
})(["font-family:Roboto;font-size:16px;font-weight:500;line-height:22px;text-align:left;color:#405f71;margin:12px;"]);

var Messages = function Messages() {
  return _react["default"].createElement(_react["default"].Fragment, null, _react["default"].createElement(Header, null, "B\xE1sico"), _react["default"].createElement(Row, null, _react["default"].createElement(_Buttons.PrimaryButton, {
    version: "2",
    onClick: function onClick() {
      console.log(_actions.message.prototype.primary);

      _actions.message.primary('Conteúdo da informação', 8000);
    }
  }, "Notifica\xE7\xE3o"), _react["default"].createElement(_Buttons.SuccessButton, {
    version: "2",
    onClick: function onClick() {
      _actions.message.success('Conteúdo da informação', 8000);
    }
  }, "Sucesso"), _react["default"].createElement(_Buttons.AlertButton, {
    version: "2",
    onClick: function onClick() {
      _actions.message.alert('Conteúdo da informação', 8000);
    }
  }, "Alerta"), _react["default"].createElement(_Buttons.ErrorButton, {
    version: "2",
    onClick: function onClick() {
      _actions.message.error('Conteúdo da informação', 8000);
    }
  }, "Error"), _react["default"].createElement(_Buttons.Button, {
    version: "2",
    onClick: function onClick() {
      _actions.message.basic('Conteúdo da informação', 8000);
    }
  }, "Simple")), _react["default"].createElement(Header, null, "B\xE1sico with Action"), _react["default"].createElement(Row, null, _react["default"].createElement(_Buttons.PrimaryButton, {
    version: "2",
    onClick: function onClick() {
      _actions.message.primary('Conteúdo da informação', 8000, _react["default"].createElement("button", {
        type: "button",
        onClick: (0, _addonActions.action)('click')
      }, "Action"));
    }
  }, "Notifica\xE7\xE3o"), _react["default"].createElement(_Buttons.SuccessButton, {
    version: "2",
    onClick: function onClick() {
      _actions.message.success('Conteúdo da informação', 8000, _react["default"].createElement("button", {
        type: "button",
        onClick: (0, _addonActions.action)('click')
      }, "Action"));
    }
  }, "Sucesso"), _react["default"].createElement(_Buttons.AlertButton, {
    version: "2",
    onClick: function onClick() {
      _actions.message.alert('Conteúdo da informação', 8000, _react["default"].createElement("button", {
        type: "button",
        onClick: (0, _addonActions.action)('click')
      }, "Action"));
    }
  }, "Alerta"), _react["default"].createElement(_Buttons.ErrorButton, {
    version: "2",
    onClick: function onClick() {
      _actions.message.error('Conteúdo da informação', 8000, _react["default"].createElement("button", {
        type: "button",
        onClick: (0, _addonActions.action)('click')
      }, "Action"));
    }
  }, "Error"), _react["default"].createElement(_Buttons.Button, {
    version: "2",
    onClick: function onClick() {
      _actions.message.info('Conteúdo da informação', 8000, _react["default"].createElement("button", {
        type: "button",
        onClick: (0, _addonActions.action)('click')
      }, "Action"));
    }
  }, "Simple")), _react["default"].createElement(Header, null, "Large"), _react["default"].createElement(Row, null, _react["default"].createElement(_Buttons.PrimaryButton, {
    version: "2",
    onClick: function onClick() {
      _actions.message.primary("Lorem ipsum dolor sit amet, consectetur adipiscing elit.\n              Donec fringilla arcu ante, a bibendum eros maximus vitae.\n              Vestibulum aliquam mollis tempus. Donec nibh augue, mattis eu nunc id,\n              iaculis tempus justo. Donec sagittis tortor iaculis turpis luctus,\n              sed condimentum nunc hendrerit.\n              Praesent ac tellus a arcu vulputate pharetra.", 8000);
    }
  }, "Notifica\xE7\xE3o"), _react["default"].createElement(_Buttons.SuccessButton, {
    version: "2",
    onClick: function onClick() {
      _actions.message.success("Lorem ipsum dolor sit amet, consectetur adipiscing elit.\n              Donec fringilla arcu ante, a bibendum eros maximus vitae.\n              Vestibulum aliquam mollis tempus. Donec nibh augue, mattis eu nunc id,\n              iaculis tempus justo. Donec sagittis tortor iaculis turpis luctus,\n              sed condimentum nunc hendrerit.\n              Praesent ac tellus a arcu vulputate pharetra.", 8000);
    }
  }, "Sucesso"), _react["default"].createElement(_Buttons.AlertButton, {
    version: "2",
    onClick: function onClick() {
      _actions.message.alert("Lorem ipsum dolor sit amet, consectetur adipiscing elit.\n              Donec fringilla arcu ante, a bibendum eros maximus vitae.\n              Vestibulum aliquam mollis tempus. Donec nibh augue, mattis eu nunc id,\n              iaculis tempus justo. Donec sagittis tortor iaculis turpis luctus,\n              sed condimentum nunc hendrerit.\n              Praesent ac tellus a arcu vulputate pharetra.", 8000);
    }
  }, "Alerta"), _react["default"].createElement(_Buttons.ErrorButton, {
    version: "2",
    onClick: function onClick() {
      _actions.message.error("Lorem ipsum dolor sit amet, consectetur adipiscing elit.\n              Donec fringilla arcu ante, a bibendum eros maximus vitae.\n              Vestibulum aliquam mollis tempus. Donec nibh augue, mattis eu nunc id,\n              iaculis tempus justo. Donec sagittis tortor iaculis turpis luctus,\n              sed condimentum nunc hendrerit.\n              Praesent ac tellus a arcu vulputate pharetra.", 8000);
    }
  }, "Error"), _react["default"].createElement(_Buttons.Button, {
    version: "2",
    onClick: function onClick() {
      _actions.message.info("Lorem ipsum dolor sit amet, consectetur adipiscing elit.\n              Donec fringilla arcu ante, a bibendum eros maximus vitae.\n              Vestibulum aliquam mollis tempus. Donec nibh augue, mattis eu nunc id,\n              iaculis tempus justo. Donec sagittis tortor iaculis turpis luctus,\n              sed condimentum nunc hendrerit.\n              Praesent ac tellus a arcu vulputate pharetra.", 8000);
    }
  }, "Simple")), _react["default"].createElement(Header, null, "Large with action"), _react["default"].createElement(Row, null, _react["default"].createElement(_Buttons.PrimaryButton, {
    version: "2",
    onClick: function onClick() {
      _actions.message.primary("Lorem ipsum dolor sit amet, consectetur adipiscing elit.\n              Donec fringilla arcu ante, a bibendum eros maximus vitae.\n              Vestibulum aliquam mollis tempus. Donec nibh augue, mattis eu nunc id,\n              iaculis tempus justo. Donec sagittis tortor iaculis turpis luctus,\n              sed condimentum nunc hendrerit.\n              Praesent ac tellus a arcu vulputate pharetra.", 8000, _react["default"].createElement("button", {
        type: "button",
        onClick: (0, _addonActions.action)('click')
      }, "Action"));
    }
  }, "Notifica\xE7\xE3o"), _react["default"].createElement(_Buttons.SuccessButton, {
    version: "2",
    onClick: function onClick() {
      _actions.message.success("Lorem ipsum dolor sit amet, consectetur adipiscing elit.\n              Donec fringilla arcu ante, a bibendum eros maximus vitae.\n              Vestibulum aliquam mollis tempus. Donec nibh augue, mattis eu nunc id,\n              iaculis tempus justo. Donec sagittis tortor iaculis turpis luctus,\n              sed condimentum nunc hendrerit.\n              Praesent ac tellus a arcu vulputate pharetra.", 8000, _react["default"].createElement("button", {
        type: "button",
        onClick: (0, _addonActions.action)('click')
      }, "Action"));
    }
  }, "Sucesso"), _react["default"].createElement(_Buttons.AlertButton, {
    version: "2",
    onClick: function onClick() {
      _actions.message.alert("Lorem ipsum dolor sit amet, consectetur adipiscing elit.\n              Donec fringilla arcu ante, a bibendum eros maximus vitae.\n              Vestibulum aliquam mollis tempus. Donec nibh augue, mattis eu nunc id,\n              iaculis tempus justo. Donec sagittis tortor iaculis turpis luctus,\n              sed condimentum nunc hendrerit.\n              Praesent ac tellus a arcu vulputate pharetra.", 8000, _react["default"].createElement("button", {
        type: "button",
        onClick: (0, _addonActions.action)('click')
      }, "Action"));
    }
  }, "Alerta"), _react["default"].createElement(_Buttons.ErrorButton, {
    version: "2",
    onClick: function onClick() {
      _actions.message.error("Lorem ipsum dolor sit amet, consectetur adipiscing elit.\n              Donec fringilla arcu ante, a bibendum eros maximus vitae.\n              Vestibulum aliquam mollis tempus. Donec nibh augue, mattis eu nunc id,\n              iaculis tempus justo. Donec sagittis tortor iaculis turpis luctus,\n              sed condimentum nunc hendrerit.\n              Praesent ac tellus a arcu vulputate pharetra.", 8000, _react["default"].createElement("button", {
        type: "button",
        onClick: (0, _addonActions.action)('click')
      }, "Action"));
    }
  }, "Error"), _react["default"].createElement(_Buttons.Button, {
    version: "2",
    onClick: function onClick() {
      _actions.message.info("Lorem ipsum dolor sit amet, consectetur adipiscing elit.\n              Donec fringilla arcu ante, a bibendum eros maximus vitae.\n              Vestibulum aliquam mollis tempus. Donec nibh augue, mattis eu nunc id,\n              iaculis tempus justo. Donec sagittis tortor iaculis turpis luctus,\n              sed condimentum nunc hendrerit.\n              Praesent ac tellus a arcu vulputate pharetra.", 8000, _react["default"].createElement("button", {
        type: "button",
        onClick: (0, _addonActions.action)('click')
      }, "Action"));
    }
  }, "Simple")), _react["default"].createElement(Header, null, "In Sequence"), _react["default"].createElement(Row, null, _react["default"].createElement(_Buttons.SecondaryButton, {
    version: "2",
    onClick: function onClick() {
      _actions.message.info('This is the first message').then(function () {
        _actions.message.success('This is the second message').then(function () {
          _actions.message.alert('This is the third message').then(function () {
            _actions.message.error('This is the last message');
          });
        });
      });
    }
  }, "In Sequence")), _react["default"].createElement(_MessageContainer["default"], null));
};

var _default = {
  title: 'Components 2.0|Message',
  parameters: {
    jest: ['Tag']
  }
};
exports["default"] = _default;

var messageStory = function messageStory() {
  return _react["default"].createElement(Messages, null);
};

exports.messageStory = messageStory;
messageStory.story = {
  name: 'Message'
};