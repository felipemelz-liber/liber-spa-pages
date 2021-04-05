"use strict";

require("core-js/modules/es6.object.define-property");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.error = exports.alert = exports.success = exports.secondary = exports.primary = exports.newFlat = exports.flat = exports["default"] = void 0;

var _react = _interopRequireDefault(require("react"));

var _styledComponents = _interopRequireDefault(require("styled-components"));

var _addonActions = require("@storybook/addon-actions");

var _Icons = require("../../Icons");

var _Buttons = require("../Buttons");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var _default = {
  title: 'Components 2.0|Buttons/Styled Buttons/Buttons',
  parameters: {
    jest: ['StyledButtons']
  }
};
exports["default"] = _default;

var Column = _styledComponents["default"].div.withConfig({
  displayName: "styledbuttonsstories__Column",
  componentId: "rwcw2w-0"
})(["display:flex;flex-direction:column;flex-basis:50%;align-items:flex-start;"]);

var Container = _styledComponents["default"].div.withConfig({
  displayName: "styledbuttonsstories__Container",
  componentId: "rwcw2w-1"
})(["display:flex;flex-direction:row;width:100%;padding:8px;"]);

var flat = function flat() {
  return _react["default"].createElement(_react["default"].Fragment, null, _react["default"].createElement(_Buttons.Button, {
    version: 2,
    size: "small",
    onClick: (0, _addonActions.action)('clicked')
  }, "Flat"), _react["default"].createElement("br", null), _react["default"].createElement("br", null), _react["default"].createElement(_Buttons.Button, {
    version: 2,
    size: "small",
    onClick: (0, _addonActions.action)('clicked')
  }, _react["default"].createElement(_Icons.MdHelpCircle, null), "Flat"), _react["default"].createElement("br", null), _react["default"].createElement("br", null), _react["default"].createElement(_Buttons.Button, {
    version: 2,
    onClick: (0, _addonActions.action)('clicked')
  }, "Flat"), _react["default"].createElement("br", null), _react["default"].createElement("br", null), _react["default"].createElement(_Buttons.Button, {
    version: 2,
    onClick: (0, _addonActions.action)('clicked')
  }, _react["default"].createElement(_Icons.MdHelpCircle, null), "Flat"), _react["default"].createElement("br", null), _react["default"].createElement("br", null), _react["default"].createElement(_Buttons.Button, {
    version: 2,
    size: "large",
    onClick: (0, _addonActions.action)('clicked')
  }, "Flat"), _react["default"].createElement("br", null), _react["default"].createElement("br", null), _react["default"].createElement(_Buttons.Button, {
    version: 2,
    disabled: true,
    onClick: (0, _addonActions.action)('clicked')
  }, "Flat"), _react["default"].createElement("br", null), _react["default"].createElement("br", null), _react["default"].createElement(_Buttons.Button, {
    version: 2,
    size: "large",
    onClick: (0, _addonActions.action)('clicked')
  }, _react["default"].createElement(_Icons.MdHelpCircle, null), " Flat"), _react["default"].createElement("br", null), _react["default"].createElement("br", null), _react["default"].createElement(_Buttons.Button, {
    version: 2,
    circle: true,
    size: "large",
    onClick: (0, _addonActions.action)('clicked')
  }, _react["default"].createElement(_Icons.MdHelpCircle, null)));
};

exports.flat = flat;

var newFlat = function newFlat() {
  return _react["default"].createElement(_react["default"].Fragment, null, _react["default"].createElement(Container, null, _react["default"].createElement(Column, null, _react["default"].createElement(_Buttons.FlatButton, {
    size: "small",
    onClick: (0, _addonActions.action)('clicked')
  }, "Flat"), _react["default"].createElement("br", null), _react["default"].createElement("br", null), _react["default"].createElement(_Buttons.FlatButton, {
    size: "small",
    onClick: (0, _addonActions.action)('clicked')
  }, _react["default"].createElement(_Icons.MdHelpCircle, null), "Flat"), _react["default"].createElement("br", null), _react["default"].createElement("br", null), _react["default"].createElement(_Buttons.FlatButton, {
    size: "small",
    onClick: (0, _addonActions.action)('clicked')
  }, _react["default"].createElement(_Icons.MdHelpCircle, null), "Flat"), _react["default"].createElement("br", null), _react["default"].createElement("br", null), _react["default"].createElement(_Buttons.FlatButton, {
    onClick: (0, _addonActions.action)('clicked')
  }, "Flat"), _react["default"].createElement("br", null), _react["default"].createElement("br", null), _react["default"].createElement(_Buttons.FlatButton, {
    onClick: (0, _addonActions.action)('clicked')
  }, _react["default"].createElement(_Icons.MdHelpCircle, null), "Flat"), _react["default"].createElement("br", null), _react["default"].createElement("br", null), _react["default"].createElement(_Buttons.FlatButton, {
    size: "large",
    onClick: (0, _addonActions.action)('clicked')
  }, "Flat"), _react["default"].createElement("br", null), _react["default"].createElement("br", null), _react["default"].createElement(_Buttons.FlatButton, {
    disabled: true,
    onClick: (0, _addonActions.action)('clicked')
  }, "Flat"), _react["default"].createElement("br", null), _react["default"].createElement("br", null), _react["default"].createElement(_Buttons.FlatButton, {
    size: "large",
    onClick: (0, _addonActions.action)('clicked')
  }, _react["default"].createElement(_Icons.MdHelpCircle, null), " Flat"), _react["default"].createElement("br", null), _react["default"].createElement("br", null), _react["default"].createElement(_Buttons.FlatButton, {
    circle: true,
    size: "large",
    onClick: (0, _addonActions.action)('clicked')
  }, _react["default"].createElement(_Icons.MdHelpCircle, null))), _react["default"].createElement(Column, null, _react["default"].createElement(_Buttons.FlatButton, {
    color: "danger",
    size: "small",
    onClick: (0, _addonActions.action)('clicked')
  }, "Flat"), _react["default"].createElement("br", null), _react["default"].createElement("br", null), _react["default"].createElement(_Buttons.FlatButton, {
    color: "danger",
    size: "small",
    onClick: (0, _addonActions.action)('clicked')
  }, _react["default"].createElement(_Icons.MdHelpCircle, null), "Flat"), _react["default"].createElement("br", null), _react["default"].createElement("br", null), _react["default"].createElement(_Buttons.FlatButton, {
    color: "danger",
    size: "small",
    onClick: (0, _addonActions.action)('clicked')
  }, _react["default"].createElement(_Icons.MdHelpCircle, null), "Flat"), _react["default"].createElement("br", null), _react["default"].createElement("br", null), _react["default"].createElement(_Buttons.FlatButton, {
    color: "danger",
    onClick: (0, _addonActions.action)('clicked')
  }, "Flat"), _react["default"].createElement("br", null), _react["default"].createElement("br", null), _react["default"].createElement(_Buttons.FlatButton, {
    color: "danger",
    onClick: (0, _addonActions.action)('clicked')
  }, _react["default"].createElement(_Icons.MdHelpCircle, null), "Flat"), _react["default"].createElement("br", null), _react["default"].createElement("br", null), _react["default"].createElement(_Buttons.FlatButton, {
    color: "danger",
    size: "large",
    onClick: (0, _addonActions.action)('clicked')
  }, "Flat"), _react["default"].createElement("br", null), _react["default"].createElement("br", null), _react["default"].createElement(_Buttons.FlatButton, {
    color: "danger",
    disabled: true,
    onClick: (0, _addonActions.action)('clicked')
  }, "Flat"), _react["default"].createElement("br", null), _react["default"].createElement("br", null), _react["default"].createElement(_Buttons.FlatButton, {
    color: "danger",
    size: "large",
    onClick: (0, _addonActions.action)('clicked')
  }, _react["default"].createElement(_Icons.MdHelpCircle, null), " Flat"), _react["default"].createElement("br", null), _react["default"].createElement("br", null), _react["default"].createElement(_Buttons.FlatButton, {
    color: "danger",
    circle: true,
    size: "large",
    onClick: (0, _addonActions.action)('clicked')
  }, _react["default"].createElement(_Icons.MdHelpCircle, null)))));
};

exports.newFlat = newFlat;

var primary = function primary() {
  return _react["default"].createElement(_react["default"].Fragment, null, _react["default"].createElement(_Buttons.PrimaryButton, {
    version: 2,
    size: "small",
    onClick: (0, _addonActions.action)('clicked')
  }, "Primary"), _react["default"].createElement("br", null), _react["default"].createElement("br", null), _react["default"].createElement(_Buttons.PrimaryButton, {
    version: 2,
    size: "small",
    onClick: (0, _addonActions.action)('clicked')
  }, _react["default"].createElement(_Icons.MdHelpCircle, null), "Primary"), _react["default"].createElement("br", null), _react["default"].createElement("br", null), _react["default"].createElement(_Buttons.PrimaryButton, {
    version: 2,
    onClick: (0, _addonActions.action)('clicked')
  }, "Primary"), _react["default"].createElement("br", null), _react["default"].createElement("br", null), _react["default"].createElement(_Buttons.PrimaryButton, {
    version: 2,
    onClick: (0, _addonActions.action)('clicked')
  }, _react["default"].createElement(_Icons.MdHelpCircle, null), "Primary"), _react["default"].createElement("br", null), _react["default"].createElement("br", null), _react["default"].createElement(_Buttons.PrimaryButton, {
    outlined: true,
    version: 2,
    onClick: (0, _addonActions.action)('clicked')
  }, _react["default"].createElement(_Icons.MdHelpCircle, null), "Primary"), _react["default"].createElement("br", null), _react["default"].createElement("br", null), _react["default"].createElement(_Buttons.PrimaryButton, {
    version: 2,
    size: "large",
    onClick: (0, _addonActions.action)('clicked')
  }, "Primary"), _react["default"].createElement("br", null), _react["default"].createElement("br", null), _react["default"].createElement(_Buttons.PrimaryButton, {
    version: 2,
    disabled: true,
    onClick: (0, _addonActions.action)('clicked')
  }, "Primary"), _react["default"].createElement("br", null), _react["default"].createElement("br", null), _react["default"].createElement(_Buttons.PrimaryButton, {
    version: 2,
    size: "large",
    onClick: (0, _addonActions.action)('clicked')
  }, _react["default"].createElement(_Icons.MdHelpCircle, null), "Primary"), _react["default"].createElement("br", null), _react["default"].createElement("br", null), _react["default"].createElement(_Buttons.PrimaryButton, {
    version: 2,
    size: "large",
    onClick: (0, _addonActions.action)('clicked')
  }, _react["default"].createElement(_Icons.MdHelpCircle, null)), _react["default"].createElement("br", null), _react["default"].createElement("br", null), _react["default"].createElement(_Buttons.PrimaryButton, {
    version: 2,
    circle: true,
    size: "large",
    onClick: (0, _addonActions.action)('clicked')
  }, _react["default"].createElement(_Icons.MdHelpCircle, null)));
};

exports.primary = primary;

var secondary = function secondary() {
  return _react["default"].createElement(_react["default"].Fragment, null, _react["default"].createElement(_Buttons.SecondaryButton, {
    version: 2,
    size: "small",
    onClick: (0, _addonActions.action)('clicked')
  }, "Primary"), _react["default"].createElement("br", null), _react["default"].createElement("br", null), _react["default"].createElement(_Buttons.SecondaryButton, {
    version: 2,
    size: "small",
    onClick: (0, _addonActions.action)('clicked')
  }, _react["default"].createElement(_Icons.MdHelpCircle, null), "Primary"), _react["default"].createElement("br", null), _react["default"].createElement("br", null), _react["default"].createElement(_Buttons.SecondaryButton, {
    version: 2,
    onClick: (0, _addonActions.action)('clicked')
  }, "Primary"), _react["default"].createElement("br", null), _react["default"].createElement("br", null), _react["default"].createElement(_Buttons.SecondaryButton, {
    version: 2,
    onClick: (0, _addonActions.action)('clicked')
  }, _react["default"].createElement(_Icons.MdHelpCircle, null), "Primary"), _react["default"].createElement("br", null), _react["default"].createElement("br", null), _react["default"].createElement(_Buttons.SecondaryButton, {
    version: 2,
    size: "large",
    onClick: (0, _addonActions.action)('clicked')
  }, "Primary"), _react["default"].createElement("br", null), _react["default"].createElement("br", null), _react["default"].createElement(_Buttons.SecondaryButton, {
    version: 2,
    disabled: true,
    onClick: (0, _addonActions.action)('clicked')
  }, "Primary"), _react["default"].createElement("br", null), _react["default"].createElement("br", null), _react["default"].createElement(_Buttons.SecondaryButton, {
    version: 2,
    size: "large",
    onClick: (0, _addonActions.action)('clicked')
  }, _react["default"].createElement(_Icons.MdHelpCircle, null), "Primary"), _react["default"].createElement("br", null), _react["default"].createElement("br", null), _react["default"].createElement(_Buttons.SecondaryButton, {
    version: 2,
    size: "large",
    onClick: (0, _addonActions.action)('clicked')
  }, _react["default"].createElement(_Icons.MdHelpCircle, null)), _react["default"].createElement("br", null), _react["default"].createElement("br", null), _react["default"].createElement(_Buttons.SecondaryButton, {
    version: 2,
    circle: true,
    size: "large",
    onClick: (0, _addonActions.action)('clicked')
  }, _react["default"].createElement(_Icons.MdHelpCircle, null)));
};

exports.secondary = secondary;

var success = function success() {
  return _react["default"].createElement(_react["default"].Fragment, null, _react["default"].createElement(_Buttons.SuccessButton, {
    version: 2,
    size: "small",
    onClick: (0, _addonActions.action)('clicked')
  }, "Success"), _react["default"].createElement("br", null), _react["default"].createElement("br", null), _react["default"].createElement(_Buttons.SuccessButton, {
    version: 2,
    size: "small",
    onClick: (0, _addonActions.action)('clicked')
  }, _react["default"].createElement(_Icons.MdHelpCircle, null), "Success"), _react["default"].createElement("br", null), _react["default"].createElement("br", null), _react["default"].createElement(_Buttons.SuccessButton, {
    version: 2,
    onClick: (0, _addonActions.action)('clicked')
  }, "Success"), _react["default"].createElement("br", null), _react["default"].createElement("br", null), _react["default"].createElement(_Buttons.SuccessButton, {
    version: 2,
    onClick: (0, _addonActions.action)('clicked')
  }, _react["default"].createElement(_Icons.MdHelpCircle, null), "Success"), _react["default"].createElement("br", null), _react["default"].createElement("br", null), _react["default"].createElement(_Buttons.SuccessButton, {
    outlined: true,
    version: 2,
    onClick: (0, _addonActions.action)('clicked')
  }, _react["default"].createElement(_Icons.MdHelpCircle, null), "Success"), _react["default"].createElement("br", null), _react["default"].createElement("br", null), _react["default"].createElement(_Buttons.SuccessButton, {
    version: 2,
    size: "large",
    onClick: (0, _addonActions.action)('clicked')
  }, "Success"), _react["default"].createElement("br", null), _react["default"].createElement("br", null), _react["default"].createElement(_Buttons.SuccessButton, {
    version: 2,
    disabled: true,
    onClick: (0, _addonActions.action)('clicked')
  }, "Success"), _react["default"].createElement("br", null), _react["default"].createElement("br", null), _react["default"].createElement(_Buttons.SuccessButton, {
    version: 2,
    size: "large",
    onClick: (0, _addonActions.action)('clicked')
  }, _react["default"].createElement(_Icons.MdHelpCircle, null), "Success"), _react["default"].createElement("br", null), _react["default"].createElement("br", null), _react["default"].createElement(_Buttons.SuccessButton, {
    version: 2,
    size: "large",
    onClick: (0, _addonActions.action)('clicked')
  }, _react["default"].createElement(_Icons.MdHelpCircle, null)), _react["default"].createElement("br", null), _react["default"].createElement("br", null), _react["default"].createElement(_Buttons.SuccessButton, {
    version: 2,
    circle: true,
    size: "large",
    onClick: (0, _addonActions.action)('clicked')
  }, _react["default"].createElement(_Icons.MdHelpCircle, null)));
};

exports.success = success;

var alert = function alert() {
  return _react["default"].createElement(_react["default"].Fragment, null, _react["default"].createElement(_Buttons.AlertButton, {
    version: 2,
    size: "small",
    onClick: (0, _addonActions.action)('clicked')
  }, "Alert"), _react["default"].createElement("br", null), _react["default"].createElement("br", null), _react["default"].createElement(_Buttons.AlertButton, {
    version: 2,
    size: "small",
    onClick: (0, _addonActions.action)('clicked')
  }, _react["default"].createElement(_Icons.MdHelpCircle, null), "Alert"), _react["default"].createElement("br", null), _react["default"].createElement("br", null), _react["default"].createElement(_Buttons.AlertButton, {
    version: 2,
    onClick: (0, _addonActions.action)('clicked')
  }, "Alert"), _react["default"].createElement("br", null), _react["default"].createElement("br", null), _react["default"].createElement(_Buttons.AlertButton, {
    version: 2,
    onClick: (0, _addonActions.action)('clicked')
  }, _react["default"].createElement(_Icons.MdHelpCircle, null), "Alert"), _react["default"].createElement("br", null), _react["default"].createElement("br", null), _react["default"].createElement(_Buttons.AlertButton, {
    outlined: true,
    version: 2,
    onClick: (0, _addonActions.action)('clicked')
  }, _react["default"].createElement(_Icons.MdHelpCircle, null), "Alert"), _react["default"].createElement("br", null), _react["default"].createElement("br", null), _react["default"].createElement(_Buttons.AlertButton, {
    version: 2,
    size: "large",
    onClick: (0, _addonActions.action)('clicked')
  }, "Alert"), _react["default"].createElement("br", null), _react["default"].createElement("br", null), _react["default"].createElement(_Buttons.AlertButton, {
    version: 2,
    disabled: true,
    onClick: (0, _addonActions.action)('clicked')
  }, "Alert"), _react["default"].createElement("br", null), _react["default"].createElement("br", null), _react["default"].createElement(_Buttons.AlertButton, {
    version: 2,
    size: "large",
    onClick: (0, _addonActions.action)('clicked')
  }, _react["default"].createElement(_Icons.MdHelpCircle, null), "Alert"), _react["default"].createElement("br", null), _react["default"].createElement("br", null), _react["default"].createElement(_Buttons.AlertButton, {
    version: 2,
    size: "large",
    onClick: (0, _addonActions.action)('clicked')
  }, _react["default"].createElement(_Icons.MdHelpCircle, null)), _react["default"].createElement("br", null), _react["default"].createElement("br", null), _react["default"].createElement(_Buttons.AlertButton, {
    version: 2,
    circle: true,
    size: "large",
    onClick: (0, _addonActions.action)('clicked')
  }, _react["default"].createElement(_Icons.MdHelpCircle, null)));
};

exports.alert = alert;

var error = function error() {
  return _react["default"].createElement(_react["default"].Fragment, null, _react["default"].createElement(_Buttons.ErrorButton, {
    version: 2,
    size: "small",
    onClick: (0, _addonActions.action)('clicked')
  }, "Error"), _react["default"].createElement("br", null), _react["default"].createElement("br", null), _react["default"].createElement(_Buttons.ErrorButton, {
    version: 2,
    size: "small",
    onClick: (0, _addonActions.action)('clicked')
  }, _react["default"].createElement(_Icons.MdHelpCircle, null), "Error"), _react["default"].createElement("br", null), _react["default"].createElement("br", null), _react["default"].createElement(_Buttons.ErrorButton, {
    version: 2,
    onClick: (0, _addonActions.action)('clicked')
  }, "Error"), _react["default"].createElement("br", null), _react["default"].createElement("br", null), _react["default"].createElement(_Buttons.ErrorButton, {
    version: 2,
    onClick: (0, _addonActions.action)('clicked')
  }, _react["default"].createElement(_Icons.MdHelpCircle, null), "Error"), _react["default"].createElement("br", null), _react["default"].createElement("br", null), _react["default"].createElement(_Buttons.ErrorButton, {
    outlined: true,
    version: 2,
    onClick: (0, _addonActions.action)('clicked')
  }, _react["default"].createElement(_Icons.MdHelpCircle, null), "Error"), _react["default"].createElement("br", null), _react["default"].createElement("br", null), _react["default"].createElement(_Buttons.ErrorButton, {
    version: 2,
    disabled: true,
    onClick: (0, _addonActions.action)('clicked')
  }, _react["default"].createElement(_Icons.MdHelpCircle, null), "Error"), _react["default"].createElement("br", null), _react["default"].createElement("br", null), _react["default"].createElement(_Buttons.ErrorButton, {
    version: 2,
    size: "large",
    onClick: (0, _addonActions.action)('clicked')
  }, "Error"), _react["default"].createElement("br", null), _react["default"].createElement("br", null), _react["default"].createElement(_Buttons.ErrorButton, {
    version: 2,
    size: "large",
    onClick: (0, _addonActions.action)('clicked')
  }, _react["default"].createElement(_Icons.MdHelpCircle, null), "Error"), _react["default"].createElement("br", null), _react["default"].createElement("br", null), _react["default"].createElement(_Buttons.ErrorButton, {
    version: 2,
    size: "large",
    onClick: (0, _addonActions.action)('clicked')
  }, _react["default"].createElement(_Icons.MdHelpCircle, null)), _react["default"].createElement("br", null), _react["default"].createElement("br", null), _react["default"].createElement(_Buttons.ErrorButton, {
    version: 2,
    circle: true,
    size: "large",
    onClick: (0, _addonActions.action)('clicked')
  }, _react["default"].createElement(_Icons.MdHelpCircle, null)));
};

exports.error = error;