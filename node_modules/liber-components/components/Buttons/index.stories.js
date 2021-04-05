"use strict";

var _react = _interopRequireDefault(require("react"));

var _react2 = require("@storybook/react");

var _addonActions = require("@storybook/addon-actions");

var _Icons = require("../Icons");

var _Buttons = require("./Buttons");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

(0, _react2.storiesOf)('Components 1.0|Buttons/Simple Button', module).add('default', function () {
  return _react["default"].createElement(_Buttons.Button, {
    onClick: (0, _addonActions.action)('clicked')
  }, "Default Button");
});
(0, _react2.storiesOf)('Components 2.0|Buttons/Styled Buttons/Buttons', module).addParameters({
  jest: ['StyledButtons']
}).add('flat', function () {
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
}).add('primary', function () {
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
}).add('secondary', function () {
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
}).add('success', function () {
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
}).add('alert', function () {
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
}).add('error', function () {
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
});
(0, _react2.storiesOf)('Components 2.0|Buttons/Styled Buttons/Links', module).add('flat', function () {
  return _react["default"].createElement(_react["default"].Fragment, null, _react["default"].createElement(_Buttons.Link, {
    version: 2,
    size: "small",
    href: "#link"
  }, "Flat"), _react["default"].createElement("br", null), _react["default"].createElement("br", null), _react["default"].createElement(_Buttons.Link, {
    version: 2,
    href: "#link"
  }, "Flat"), _react["default"].createElement("br", null), _react["default"].createElement("br", null), _react["default"].createElement(_Buttons.Link, {
    version: 2,
    size: "large",
    href: "#link"
  }, "Flat"), _react["default"].createElement("br", null), _react["default"].createElement("br", null), _react["default"].createElement(_Buttons.Link, {
    version: 2,
    circle: true,
    size: "large",
    href: "#link"
  }, _react["default"].createElement(_Icons.MdHelpCircle, null)));
}).add('primary', function () {
  return _react["default"].createElement(_react["default"].Fragment, null, _react["default"].createElement(_Buttons.PrimaryLink, {
    version: 2,
    size: "small",
    href: "#link"
  }, "Primary"), _react["default"].createElement("br", null), _react["default"].createElement("br", null), _react["default"].createElement(_Buttons.PrimaryLink, {
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
}).add('secondary', function () {
  return _react["default"].createElement(_react["default"].Fragment, null, _react["default"].createElement(_Buttons.SecondaryLink, {
    version: 2,
    size: "small",
    href: "#link"
  }, "Primary"), _react["default"].createElement("br", null), _react["default"].createElement("br", null), _react["default"].createElement(_Buttons.SecondaryLink, {
    version: 2,
    href: "#link"
  }, "Primary"), _react["default"].createElement("br", null), _react["default"].createElement("br", null), _react["default"].createElement(_Buttons.SecondaryLink, {
    version: 2,
    size: "large",
    href: "#link"
  }, "Primary"), _react["default"].createElement("br", null), _react["default"].createElement("br", null), _react["default"].createElement(_Buttons.SecondaryLink, {
    version: 2,
    size: "large",
    href: "#link"
  }, _react["default"].createElement(_Icons.MdHelpCircle, null)), _react["default"].createElement("br", null), _react["default"].createElement("br", null), _react["default"].createElement(_Buttons.SecondaryLink, {
    version: 2,
    circle: true,
    size: "large",
    href: "#link"
  }, _react["default"].createElement(_Icons.MdHelpCircle, null)));
}).add('success', function () {
  return _react["default"].createElement(_react["default"].Fragment, null, _react["default"].createElement(_Buttons.SuccessLink, {
    version: 2,
    size: "small",
    href: "#link"
  }, "Success"), _react["default"].createElement("br", null), _react["default"].createElement("br", null), _react["default"].createElement(_Buttons.SuccessLink, {
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
}).add('alert', function () {
  return _react["default"].createElement(_react["default"].Fragment, null, _react["default"].createElement(_Buttons.AlertLink, {
    version: 2,
    size: "small",
    href: "#link"
  }, "Alert"), _react["default"].createElement("br", null), _react["default"].createElement("br", null), _react["default"].createElement(_Buttons.AlertLink, {
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
}).add('error', function () {
  return _react["default"].createElement(_react["default"].Fragment, null, _react["default"].createElement(_Buttons.ErrorLink, {
    version: 2,
    size: "small",
    href: "#link"
  }, "Error"), _react["default"].createElement("br", null), _react["default"].createElement("br", null), _react["default"].createElement(_Buttons.ErrorLink, {
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
});
(0, _react2.storiesOf)('Components 1.0|Buttons/Action Button', module).addParameters({
  jest: ['ActionButton']
}).add('default', function () {
  return _react["default"].createElement(_Buttons.ActionButton, null, "Action Button");
}).add('with type', function () {
  return _react["default"].createElement(_Buttons.ActionButton, {
    type: "primary"
  }, "Action Button");
});
(0, _react2.storiesOf)('Components 1.0|Buttons/Styled Button', module).add('primary', function () {
  return _react["default"].createElement(_Buttons.PrimaryButton, null, "Primary Button");
}).add('secondary', function () {
  return _react["default"].createElement(_Buttons.SecondaryButton, null, "Secondary Button");
}).add('success', function () {
  return _react["default"].createElement(_Buttons.SuccessButton, null, "Success Button");
});
(0, _react2.storiesOf)('Components 1.0|Buttons/Link Button', module).add('default', function () {
  return _react["default"].createElement(_Buttons.Link, {
    href: "default"
  }, "Default Link");
}).add('primary', function () {
  return _react["default"].createElement(_Buttons.PrimaryLink, null, "Primary Link");
}).add('secondary', function () {
  return _react["default"].createElement(_Buttons.SecondaryLink, null, "Secondary Link");
}).add('success', function () {
  return _react["default"].createElement(_Buttons.SuccessLink, null, "Success Link");
});
(0, _react2.storiesOf)('Components 1.0|Buttons/Modal Button', module).add('default', function () {
  return _react["default"].createElement(_Buttons.ModalButton, null, "Default Modal Button");
}).add('primary', function () {
  return _react["default"].createElement(_Buttons.ModalPrimaryButton, null, "Modal Primary Button");
}).add('success', function () {
  return _react["default"].createElement(_Buttons.ModalSuccessButton, null, "Modal Success Button");
}).add('danger', function () {
  return _react["default"].createElement(_Buttons.ModalDangerButton, null, "Modal Danger Button");
});