"use strict";

require("core-js/modules/es6.object.define-property");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.error = exports.alert = exports.success = exports.secondary = exports.primary = exports.newFlat = exports.flat = exports["default"] = void 0;

var _react = _interopRequireDefault(require("react"));

var _styledComponents = _interopRequireDefault(require("styled-components"));

var _Icons = require("../../Icons");

var _Buttons = require("../Buttons");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var _default = {
  title: 'Components 2.0|Buttons/Styled Buttons/Links'
};
exports["default"] = _default;

var Column = _styledComponents["default"].div.withConfig({
  displayName: "styledlinksstories__Column",
  componentId: "sc-1kfyo20-0"
})(["display:flex;flex-direction:column;flex-basis:50%;align-items:flex-start;"]);

var Container = _styledComponents["default"].div.withConfig({
  displayName: "styledlinksstories__Container",
  componentId: "sc-1kfyo20-1"
})(["display:flex;flex-direction:row;width:100%;padding:8px;"]);

var flat = function flat() {
  return _react["default"].createElement(_react["default"].Fragment, null, _react["default"].createElement(_Buttons.Link, {
    version: 2,
    size: "small",
    href: "#link"
  }, "Flat"), _react["default"].createElement("br", null), _react["default"].createElement("br", null), _react["default"].createElement(_Buttons.Link, {
    version: 2,
    href: "#link"
  }, "Flat"), _react["default"].createElement("br", null), _react["default"].createElement("br", null), _react["default"].createElement(_Buttons.Link, {
    version: 2,
    href: "#link",
    disabled: true
  }, "Flat Disabled"), _react["default"].createElement("br", null), _react["default"].createElement("br", null), _react["default"].createElement(_Buttons.Link, {
    version: 2,
    size: "large",
    href: "#link"
  }, "Flat"), _react["default"].createElement("br", null), _react["default"].createElement("br", null), _react["default"].createElement(_Buttons.Link, {
    version: 2,
    circle: true,
    size: "large",
    href: "#link"
  }, _react["default"].createElement(_Icons.MdHelpCircle, null)));
};

exports.flat = flat;

var newFlat = function newFlat() {
  return _react["default"].createElement(_react["default"].Fragment, null, _react["default"].createElement(Container, null, _react["default"].createElement(Column, null, _react["default"].createElement(_Buttons.FlatLink, {
    size: "small",
    href: "#link"
  }, "Flat"), _react["default"].createElement("br", null), _react["default"].createElement("br", null), _react["default"].createElement(_Buttons.FlatLink, {
    href: "#link"
  }, "Flat"), _react["default"].createElement("br", null), _react["default"].createElement("br", null), _react["default"].createElement(_Buttons.FlatLink, {
    href: "#link",
    disabled: true
  }, "Flat disabled"), _react["default"].createElement("br", null), _react["default"].createElement("br", null), _react["default"].createElement(_Buttons.FlatLink, {
    size: "large",
    href: "#link"
  }, "Flat"), _react["default"].createElement("br", null), _react["default"].createElement("br", null), _react["default"].createElement(_Buttons.FlatLink, {
    circle: true,
    size: "large",
    href: "#link"
  }, _react["default"].createElement(_Icons.MdHelpCircle, null))), _react["default"].createElement(Column, null, _react["default"].createElement(_Buttons.FlatLink, {
    color: "danger",
    size: "small",
    href: "#link"
  }, "Flat"), _react["default"].createElement("br", null), _react["default"].createElement("br", null), _react["default"].createElement(_Buttons.FlatLink, {
    color: "danger",
    href: "#link"
  }, "Flat"), _react["default"].createElement("br", null), _react["default"].createElement("br", null), _react["default"].createElement(_Buttons.FlatLink, {
    color: "danger",
    href: "#link"
  }, "Flat disabled"), _react["default"].createElement("br", null), _react["default"].createElement("br", null), _react["default"].createElement(_Buttons.FlatLink, {
    color: "danger",
    size: "large",
    href: "#link"
  }, "Flat"), _react["default"].createElement("br", null), _react["default"].createElement("br", null), _react["default"].createElement(_Buttons.FlatLink, {
    color: "danger",
    circle: true,
    size: "large",
    href: "#link"
  }, _react["default"].createElement(_Icons.MdHelpCircle, null)))));
};

exports.newFlat = newFlat;

var primary = function primary() {
  return _react["default"].createElement(_react["default"].Fragment, null, _react["default"].createElement(_Buttons.PrimaryLink, {
    version: 2,
    size: "small",
    href: "#link"
  }, "Primary"), _react["default"].createElement("br", null), _react["default"].createElement("br", null), _react["default"].createElement(_Buttons.PrimaryLink, {
    version: 2,
    href: "#link"
  }, "Primary"), _react["default"].createElement("br", null), _react["default"].createElement("br", null), _react["default"].createElement(_Buttons.PrimaryLink, {
    version: 2,
    href: "#link",
    disabled: true
  }, "Primary disabled"), _react["default"].createElement("br", null), _react["default"].createElement("br", null), _react["default"].createElement(_Buttons.PrimaryLink, {
    outlined: true,
    version: 2,
    href: "#link"
  }, "Primary"), _react["default"].createElement("br", null), _react["default"].createElement("br", null), _react["default"].createElement(_Buttons.PrimaryLink, {
    version: 2,
    size: "large",
    href: "#link"
  }, "Primary"), _react["default"].createElement("br", null), _react["default"].createElement("br", null), _react["default"].createElement(_Buttons.PrimaryLink, {
    version: 2,
    size: "large",
    href: "#link"
  }, _react["default"].createElement(_Icons.MdHelpCircle, null)), _react["default"].createElement("br", null), _react["default"].createElement("br", null), _react["default"].createElement(_Buttons.PrimaryLink, {
    version: 2,
    circle: true,
    size: "large",
    href: "#link"
  }, _react["default"].createElement(_Icons.MdHelpCircle, null)));
};

exports.primary = primary;

var secondary = function secondary() {
  return _react["default"].createElement(_react["default"].Fragment, null, _react["default"].createElement(_Buttons.SecondaryLink, {
    version: 2,
    size: "small",
    href: "#link"
  }, "Secondary"), _react["default"].createElement("br", null), _react["default"].createElement("br", null), _react["default"].createElement(_Buttons.SecondaryLink, {
    version: 2,
    href: "#link"
  }, "Secondary"), _react["default"].createElement("br", null), _react["default"].createElement("br", null), _react["default"].createElement(_Buttons.SecondaryLink, {
    version: 2,
    href: "#link",
    disabled: true
  }, "Secondary disabled"), _react["default"].createElement("br", null), _react["default"].createElement("br", null), _react["default"].createElement(_Buttons.SecondaryLink, {
    version: 2,
    size: "large",
    href: "#link"
  }, "Secondary"), _react["default"].createElement("br", null), _react["default"].createElement("br", null), _react["default"].createElement(_Buttons.SecondaryLink, {
    version: 2,
    size: "large",
    href: "#link"
  }, _react["default"].createElement(_Icons.MdHelpCircle, null)), _react["default"].createElement("br", null), _react["default"].createElement("br", null), _react["default"].createElement(_Buttons.SecondaryLink, {
    version: 2,
    circle: true,
    size: "large",
    href: "#link"
  }, _react["default"].createElement(_Icons.MdHelpCircle, null)));
};

exports.secondary = secondary;

var success = function success() {
  return _react["default"].createElement(_react["default"].Fragment, null, _react["default"].createElement(_Buttons.SuccessLink, {
    version: 2,
    size: "small",
    href: "#link"
  }, "Success"), _react["default"].createElement("br", null), _react["default"].createElement("br", null), _react["default"].createElement(_Buttons.SuccessLink, {
    version: 2,
    href: "#link"
  }, "Success"), _react["default"].createElement("br", null), _react["default"].createElement("br", null), _react["default"].createElement(_Buttons.SuccessLink, {
    version: 2,
    href: "#link",
    disabled: true
  }, "Success disabled"), _react["default"].createElement("br", null), _react["default"].createElement("br", null), _react["default"].createElement(_Buttons.SuccessLink, {
    outlined: true,
    version: 2,
    href: "#link"
  }, "Success"), _react["default"].createElement("br", null), _react["default"].createElement("br", null), _react["default"].createElement(_Buttons.SuccessLink, {
    version: 2,
    size: "large",
    href: "#link"
  }, "Success"), _react["default"].createElement("br", null), _react["default"].createElement("br", null), _react["default"].createElement(_Buttons.SuccessLink, {
    version: 2,
    size: "large",
    href: "#link"
  }, _react["default"].createElement(_Icons.MdHelpCircle, null)), _react["default"].createElement("br", null), _react["default"].createElement("br", null), _react["default"].createElement(_Buttons.SuccessLink, {
    version: 2,
    circle: true,
    size: "large",
    href: "#link"
  }, _react["default"].createElement(_Icons.MdHelpCircle, null)));
};

exports.success = success;

var alert = function alert() {
  return _react["default"].createElement(_react["default"].Fragment, null, _react["default"].createElement(_Buttons.AlertLink, {
    version: 2,
    size: "small",
    href: "#link"
  }, "Alert"), _react["default"].createElement("br", null), _react["default"].createElement("br", null), _react["default"].createElement(_Buttons.AlertLink, {
    version: 2,
    href: "#link"
  }, "Alert"), _react["default"].createElement("br", null), _react["default"].createElement("br", null), _react["default"].createElement(_Buttons.AlertLink, {
    version: 2,
    href: "#link",
    disabled: true
  }, "Alert disabled"), _react["default"].createElement("br", null), _react["default"].createElement("br", null), _react["default"].createElement(_Buttons.AlertLink, {
    outlined: true,
    version: 2,
    href: "#link"
  }, "Alert"), _react["default"].createElement("br", null), _react["default"].createElement("br", null), _react["default"].createElement(_Buttons.AlertLink, {
    version: 2,
    size: "large",
    href: "#link"
  }, "Alert"), _react["default"].createElement("br", null), _react["default"].createElement("br", null), _react["default"].createElement(_Buttons.AlertLink, {
    version: 2,
    size: "large",
    href: "#link"
  }, _react["default"].createElement(_Icons.MdHelpCircle, null)), _react["default"].createElement("br", null), _react["default"].createElement("br", null), _react["default"].createElement(_Buttons.AlertLink, {
    version: 2,
    circle: true,
    size: "large",
    href: "#link"
  }, _react["default"].createElement(_Icons.MdHelpCircle, null)));
};

exports.alert = alert;

var error = function error() {
  return _react["default"].createElement(_react["default"].Fragment, null, _react["default"].createElement(_Buttons.ErrorLink, {
    version: 2,
    size: "small",
    href: "#link"
  }, "Error"), _react["default"].createElement("br", null), _react["default"].createElement("br", null), _react["default"].createElement(_Buttons.ErrorLink, {
    version: 2,
    href: "#link"
  }, "Error"), _react["default"].createElement("br", null), _react["default"].createElement("br", null), _react["default"].createElement(_Buttons.ErrorLink, {
    version: 2,
    href: "#link",
    disabled: true
  }, "Error disabled"), _react["default"].createElement("br", null), _react["default"].createElement("br", null), _react["default"].createElement(_Buttons.ErrorLink, {
    outlined: true,
    version: 2,
    href: "#link"
  }, "Error"), _react["default"].createElement("br", null), _react["default"].createElement("br", null), _react["default"].createElement(_Buttons.ErrorLink, {
    version: 2,
    size: "large",
    href: "#link"
  }, "Error"), _react["default"].createElement("br", null), _react["default"].createElement("br", null), _react["default"].createElement(_Buttons.ErrorLink, {
    version: 2,
    size: "large",
    href: "#link"
  }, _react["default"].createElement(_Icons.MdHelpCircle, null)), _react["default"].createElement("br", null), _react["default"].createElement("br", null), _react["default"].createElement(_Buttons.ErrorLink, {
    version: 2,
    circle: true,
    size: "large",
    href: "#link"
  }, _react["default"].createElement(_Icons.MdHelpCircle, null)));
};

exports.error = error;