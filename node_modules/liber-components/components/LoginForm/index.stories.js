"use strict";

require("core-js/modules/es6.object.define-property");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.footer = exports.container = exports.formCustomLogo = exports.formCustomButton = exports.formCustomTitle = exports.form = exports["default"] = void 0;

var _react = _interopRequireDefault(require("react"));

var _addonActions = require("@storybook/addon-actions");

var _styledComponents = _interopRequireDefault(require("styled-components"));

var _LoginForm = _interopRequireDefault(require("./LoginForm"));

var _LoginForm2 = require("./LoginForm.styles");

var _Buttons = require("../Buttons");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var Footer = (0, _styledComponents["default"])(_LoginForm2.Footer).withConfig({
  displayName: "indexstories__Footer",
  componentId: "sc-1fizgg8-0"
})(["background-color:#009dff;"]);
var _default = {
  title: 'Components 2.0|LoginForm',
  parameters: {
    jest: ['LoginForm']
  }
};
exports["default"] = _default;

var form = function form() {
  return _react["default"].createElement(_LoginForm["default"], {
    onFieldChange: (0, _addonActions.action)('onFieldChange'),
    onSubmit: (0, _addonActions.action)('onSubmit')
  });
};

exports.form = form;

var formCustomTitle = function formCustomTitle() {
  return _react["default"].createElement(_LoginForm["default"], {
    title: "Formulário",
    onFieldChange: (0, _addonActions.action)('onFieldChange'),
    onSubmit: (0, _addonActions.action)('onSubmit')
  });
};

exports.formCustomTitle = formCustomTitle;
formCustomTitle.story = {
  name: 'form/custom title'
};

var formCustomButton = function formCustomButton() {
  return _react["default"].createElement(_LoginForm["default"], {
    button: _react["default"].createElement(_Buttons.Button, {
      version: 2
    }, "Enviar"),
    onFieldChange: (0, _addonActions.action)('onFieldChange'),
    onSubmit: (0, _addonActions.action)('onSubmit')
  });
};

exports.formCustomButton = formCustomButton;
formCustomButton.story = {
  name: 'form/custom button'
};

var formCustomLogo = function formCustomLogo() {
  return _react["default"].createElement(_LoginForm["default"], {
    logo: _react["default"].createElement("img", {
      src: "https://baconmockup.com/300/200",
      alt: "Bacon",
      title: "Bacon"
    }),
    onFieldChange: (0, _addonActions.action)('onFieldChange'),
    onSubmit: (0, _addonActions.action)('onSubmit')
  });
};

exports.formCustomLogo = formCustomLogo;
formCustomLogo.story = {
  name: 'form/custom logo'
};

var container = function container() {
  return _react["default"].createElement(_LoginForm2.LoginContainer, null);
};

exports.container = container;

var footer = function footer() {
  return _react["default"].createElement(Footer, null);
};

exports.footer = footer;