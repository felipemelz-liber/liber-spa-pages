"use strict";

require("core-js/modules/es6.object.define-property");

Object.defineProperty(exports, "__esModule", {
  value: true
});
Object.defineProperty(exports, "FlatButton", {
  enumerable: true,
  get: function get() {
    return _StyledButtons2.FlatButton;
  }
});
Object.defineProperty(exports, "FlatLink", {
  enumerable: true,
  get: function get() {
    return _StyledButtons2.FlatLink;
  }
});
Object.defineProperty(exports, "ActionButton", {
  enumerable: true,
  get: function get() {
    return _ActionButton["default"];
  }
});
Object.defineProperty(exports, "ModalButton", {
  enumerable: true,
  get: function get() {
    return _ModalButtons.ModalButton;
  }
});
Object.defineProperty(exports, "ModalPrimaryButton", {
  enumerable: true,
  get: function get() {
    return _ModalButtons.ModalPrimaryButton;
  }
});
Object.defineProperty(exports, "ModalSuccessButton", {
  enumerable: true,
  get: function get() {
    return _ModalButtons.ModalSuccessButton;
  }
});
Object.defineProperty(exports, "ModalDangerButton", {
  enumerable: true,
  get: function get() {
    return _ModalButtons.ModalDangerButton;
  }
});
exports.ErrorLink = exports.AlertLink = exports.SuccessLink = exports.SecondaryLink = exports.PrimaryLink = exports.Link = exports.ErrorButton = exports.AlertButton = exports.SuccessButton = exports.SecondaryButton = exports.PrimaryButton = exports.Button = void 0;

var _styledComponents = _interopRequireDefault(require("styled-components"));

var _VersionWrapper = require("../Util/VersionWrapper");

var _StyledButtons = require("./v1/StyledButtons");

var _StyledButtons2 = require("./v2/StyledButtons");

var _ActionButton = _interopRequireDefault(require("./v1/ActionButton"));

var _ModalButtons = require("./v1/ModalButtons");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var Button = (0, _styledComponents["default"])((0, _VersionWrapper.wrapper)([_StyledButtons.Button, _StyledButtons2.Button])).withConfig({
  displayName: "Buttons__Button",
  componentId: "u35aut-0"
})([""]);
exports.Button = Button;
var PrimaryButton = (0, _styledComponents["default"])((0, _VersionWrapper.wrapper)([_StyledButtons.PrimaryButton, _StyledButtons2.PrimaryButton])).withConfig({
  displayName: "Buttons__PrimaryButton",
  componentId: "u35aut-1"
})([""]);
exports.PrimaryButton = PrimaryButton;
var SecondaryButton = (0, _styledComponents["default"])((0, _VersionWrapper.wrapper)([_StyledButtons.SecondaryButton, _StyledButtons2.SecondaryButton])).withConfig({
  displayName: "Buttons__SecondaryButton",
  componentId: "u35aut-2"
})([""]);
exports.SecondaryButton = SecondaryButton;
var SuccessButton = (0, _styledComponents["default"])((0, _VersionWrapper.wrapper)([_StyledButtons.SuccessButton, _StyledButtons2.SuccessButton])).withConfig({
  displayName: "Buttons__SuccessButton",
  componentId: "u35aut-3"
})([""]);
exports.SuccessButton = SuccessButton;
var AlertButton = (0, _styledComponents["default"])((0, _VersionWrapper.wrapper)([_StyledButtons2.AlertButton])).withConfig({
  displayName: "Buttons__AlertButton",
  componentId: "u35aut-4"
})([""]);
exports.AlertButton = AlertButton;
var ErrorButton = (0, _styledComponents["default"])((0, _VersionWrapper.wrapper)([_StyledButtons2.ErrorButton])).withConfig({
  displayName: "Buttons__ErrorButton",
  componentId: "u35aut-5"
})([""]);
exports.ErrorButton = ErrorButton;
var Link = (0, _styledComponents["default"])((0, _VersionWrapper.wrapper)([_StyledButtons.Link, _StyledButtons2.Link])).withConfig({
  displayName: "Buttons__Link",
  componentId: "u35aut-6"
})([""]);
exports.Link = Link;
var PrimaryLink = (0, _styledComponents["default"])((0, _VersionWrapper.wrapper)([_StyledButtons.PrimaryLink, _StyledButtons2.PrimaryLink])).withConfig({
  displayName: "Buttons__PrimaryLink",
  componentId: "u35aut-7"
})([""]);
exports.PrimaryLink = PrimaryLink;
var SecondaryLink = (0, _styledComponents["default"])((0, _VersionWrapper.wrapper)([_StyledButtons.SecondaryLink, _StyledButtons2.SecondaryLink])).withConfig({
  displayName: "Buttons__SecondaryLink",
  componentId: "u35aut-8"
})([""]);
exports.SecondaryLink = SecondaryLink;
var SuccessLink = (0, _styledComponents["default"])((0, _VersionWrapper.wrapper)([_StyledButtons.SuccessLink, _StyledButtons2.SuccessLink])).withConfig({
  displayName: "Buttons__SuccessLink",
  componentId: "u35aut-9"
})([""]);
exports.SuccessLink = SuccessLink;
var AlertLink = (0, _styledComponents["default"])((0, _VersionWrapper.wrapper)([_StyledButtons2.AlertLink])).withConfig({
  displayName: "Buttons__AlertLink",
  componentId: "u35aut-10"
})([""]);
exports.AlertLink = AlertLink;
var ErrorLink = (0, _styledComponents["default"])((0, _VersionWrapper.wrapper)([_StyledButtons2.ErrorLink])).withConfig({
  displayName: "Buttons__ErrorLink",
  componentId: "u35aut-11"
})([""]);
exports.ErrorLink = ErrorLink;