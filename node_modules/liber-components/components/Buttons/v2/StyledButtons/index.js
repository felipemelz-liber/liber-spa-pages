"use strict";

require("core-js/modules/es6.object.define-property");

require("core-js/modules/web.dom.iterable");

require("core-js/modules/es6.array.iterator");

require("core-js/modules/es6.object.to-string");

require("core-js/modules/es6.string.iterator");

require("core-js/modules/es6.weak-map");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.ErrorLink = exports.ErrorButton = exports.AlertLink = exports.AlertButton = exports.SuccessLink = exports.SuccessButton = exports.SecondaryLink = exports.SecondaryButton = exports.PrimaryLink = exports.PrimaryButton = exports.FlatLink = exports.FlatButton = exports.Link = exports.Button = void 0;

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _styledComponents = _interopRequireWildcard(require("styled-components"));

var _Themes = require("../../../Themes");

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function _getRequireWildcardCache() { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; if (obj != null) { var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var buttonRipple = (0, _styledComponents.keyframes)(["0%{transform:scale(0,0);opacity:0.8;}20%{transform:scale(25,25);opacity:0.8;}100%{opacity:0;transform:scale(40,40);}"]);

var buttonSize = function buttonSize() {
  var size = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 'medium';
  return {
    small: (0, _styledComponents.css)(["height:28px;min-width:28px;padding:16px 0px;"]),
    medium: (0, _styledComponents.css)(["height:36px;min-width:36px;"]),
    large: (0, _styledComponents.css)(["--icon-size:20px;height:48px;min-width:48px;font-size:", ";"], function (props) {
      return (0, _Themes.handleThemeFromObject)(props.theme, 'font-sizes.p', '16px');
    })
  }[size];
};

var defaultTypography = (0, _styledComponents.css)(["font-size:14px;font-weight:500;line-height:20px;letter-spacing:1.25;"]);

var Button = _styledComponents["default"].button.attrs(function (_ref) {
  var children = _ref.children,
      _ref$size = _ref.size,
      size = _ref$size === void 0 ? 'medium' : _ref$size;
  var sizes = {
    small: '8px',
    medium: '8px',
    large: '12px'
  };
  return {
    style: {
      '--svg-margin': _react["default"].Children.toArray(children).length > 1 ? sizes[size] : '0px'
    }
  };
}).withConfig({
  displayName: "StyledButtons__Button",
  componentId: "sc-1e7va4d-0"
})(["--inner-button-text-color:var(--button-text-color,", ");--inner-button-ripple-color:var(--button-ripple-color,", ");padding:24px 0px;", " ", " background-color:", ";color:var(--inner-button-text-color);border:", ";border-radius:", ";font-family:", ";cursor:pointer;padding:0 16px;transition:all 450ms cubic-bezier(0.23,1,0.32,1) 0ms;box-sizing:border-box;display:inline-flex;align-items:center;justify-content:center;box-sizing:border-box;position:relative;overflow:hidden;&:focus{outline:0;}&::-moz-focus-inner{border:0;}&:disabled{opacity:0.38;cursor:default;pointer-events:none;}&:after{content:'';--ripple-color:;position:absolute;top:50%;left:50%;width:5px;height:5px;background:var(--inner-button-ripple-color);opacity:0;border-radius:100%;transform:scale(1,1) translate(-50%);transform-origin:50% 50%;}&:focus:not(:active)::after{animation:", " 0.8s ease-out;}& > svg{min-width:var(--icon-size,16px)!important;max-width:var(--icon-size,16px)!important;min-height:var(--icon-size,16px)!important;max-height:var(--icon-size,16px)!important;fill:var(--inner-button-text-color);margin-right:var(--svg-margin,12px);}"], function (props) {
  return (0, _Themes.handleThemeFromObject)(props.theme, 'colors.dark-text', '#587383');
}, function (props) {
  return (0, _Themes.handleThemeFromObject)(props.theme, 'colors.dark-text25', (0, _Themes.hexToRgb)('#587383', '0.25'));
}, function (props) {
  return (0, _Themes.handleThemeFromObject)(props.theme, 'typography.button', defaultTypography);
}, function (props) {
  return buttonSize(props.size);
}, function (props) {
  return (0, _Themes.handleThemeFromObject)(props.theme, 'colors.white', '#ffffff');
}, function (_ref2) {
  var outlined = _ref2.outlined;
  return outlined ? "1px solid var(--inner-button-text-color)" : '0px';
}, function (props) {
  return props.circle ? '100%' : '4px';
}, function (props) {
  return (0, _Themes.handleThemeFromObject)(props.theme, 'font-family', 'Roboto');
}, buttonRipple);

exports.Button = Button;
var Link = (0, _styledComponents["default"])(Button).attrs(function (_ref3) {
  var disabled = _ref3.disabled;
  return disabled || {
    as: 'a'
  };
}).withConfig({
  displayName: "StyledButtons__Link",
  componentId: "sc-1e7va4d-1"
})(["text-decoration:none;&:hover{color:var(--button-text-color);}"]);
exports.Link = Link;

var getColorScheme = function getColorScheme(_ref4) {
  var color = _ref4.color,
      theme = _ref4.theme;

  switch (color) {
    case 'danger':
      return (0, _styledComponents.css)(["--button-text-color:#ff5b56;--button-ripple-color:rgba(255,91,86,0.24);&:hover{background-color:rgba(255,91,86,0.08);}"]);

    case 'primary':
    default:
      return (0, _styledComponents.css)(["--button-text-color:", ";--button-ripple-color:rgba(0,157,255,0.24);&:hover{background-color:rgba(0,157,255,0.08);}"], (0, _Themes.handleThemeFromObject)(theme, 'colors.primary', '#009dff'));
  }
};

var FlatButton = (0, _styledComponents["default"])(Button).withConfig({
  displayName: "StyledButtons__FlatButton",
  componentId: "sc-1e7va4d-2"
})(["background-color:transparent;", ""], getColorScheme);
exports.FlatButton = FlatButton;
FlatButton.propTypes = {
  color: _propTypes["default"].oneOf(['primary', 'danger'])
};
FlatButton.defaultProps = {
  color: 'primary'
};
var FlatLink = (0, _styledComponents["default"])(FlatButton).attrs(function (_ref5) {
  var disabled = _ref5.disabled;
  return disabled || {
    as: 'a'
  };
}).withConfig({
  displayName: "StyledButtons__FlatLink",
  componentId: "sc-1e7va4d-3"
})(["text-decoration:none;"]);
exports.FlatLink = FlatLink;
FlatButton.propTypes = {
  color: _propTypes["default"].oneOf(['primary', 'danger'])
};
FlatButton.defaultProps = {
  color: 'primary'
};
var PrimaryButton = (0, _styledComponents["default"])(Button).withConfig({
  displayName: "StyledButtons__PrimaryButton",
  componentId: "sc-1e7va4d-4"
})(["", ""], function (_ref6) {
  var theme = _ref6.theme,
      outlined = _ref6.outlined;
  return outlined ? (0, _styledComponents.css)(["--button-text-color:", ";--button-ripple-color:", ";&:hover{background-color:", ";}"], (0, _Themes.handleThemeFromObject)(theme, 'colors.primary', '#009dff'), (0, _Themes.handleThemeFromObject)(theme, 'colors.primary38', '#9edaff'), (0, _Themes.handleThemeFromObject)(theme, 'colors.primary6', '#f0f9ff')) : (0, _styledComponents.css)(["background-color:", ";--button-text-color:", ";--button-ripple-color:", ";&:hover{background-color:", ";}"], (0, _Themes.handleThemeFromObject)(theme, 'colors.primary', '#009dff'), (0, _Themes.handleThemeFromObject)(theme, 'colors.light-text', '#fafdff'), (0, _Themes.handleThemeFromObject)(theme, 'colors.ripple-primary', '#008de5'), (0, _Themes.handleThemeFromObject)(theme, 'colors.dark-primary', '#007ecc'));
});
exports.PrimaryButton = PrimaryButton;
var PrimaryLink = (0, _styledComponents["default"])(PrimaryButton).attrs(function (_ref7) {
  var disabled = _ref7.disabled;
  return disabled || {
    as: 'a'
  };
}).withConfig({
  displayName: "StyledButtons__PrimaryLink",
  componentId: "sc-1e7va4d-5"
})(["text-decoration:none;&:hover{color:var(--button-text-color);}"]);
exports.PrimaryLink = PrimaryLink;
var SecondaryButton = (0, _styledComponents["default"])(Button).withConfig({
  displayName: "StyledButtons__SecondaryButton",
  componentId: "sc-1e7va4d-6"
})(["background-color:", ";--button-ripple-color:", ";&:hover{background-color:", ";}"], function (props) {
  return (0, _Themes.handleThemeFromObject)(props.theme, 'colors.secondary', '#f0f2f4');
}, function (props) {
  return (0, _Themes.handleThemeFromObject)(props.theme, 'colors.ripple-secondary', '#dddfe1');
}, function (props) {
  return (0, _Themes.handleThemeFromObject)(props.theme, 'colors.dark-secondary', '#d2dbe0');
});
exports.SecondaryButton = SecondaryButton;
var SecondaryLink = (0, _styledComponents["default"])(SecondaryButton).attrs(function (_ref8) {
  var disabled = _ref8.disabled;
  return disabled || {
    as: 'a'
  };
}).withConfig({
  displayName: "StyledButtons__SecondaryLink",
  componentId: "sc-1e7va4d-7"
})(["text-decoration:none;&:hover{color:var(--button-text-color);}"]);
exports.SecondaryLink = SecondaryLink;
var SuccessButton = (0, _styledComponents["default"])(Button).withConfig({
  displayName: "StyledButtons__SuccessButton",
  componentId: "sc-1e7va4d-8"
})(["", ""], function (_ref9) {
  var theme = _ref9.theme,
      outlined = _ref9.outlined;
  return outlined ? (0, _styledComponents.css)(["--button-text-color:", ";--button-ripple-color:", ";&:hover{background-color:", ";}"], (0, _Themes.handleThemeFromObject)(theme, 'colors.success', '#13ce66'), (0, _Themes.handleThemeFromObject)(theme, 'colors.success38', '#a5ecc5'), (0, _Themes.handleThemeFromObject)(theme, 'colors.success6', '#f1fcf6')) : (0, _styledComponents.css)(["background-color:", ";--button-text-color:", ";--button-ripple-color:", ";&:hover{background-color:", ";}"], (0, _Themes.handleThemeFromObject)(theme, 'colors.success', '#13ce66'), (0, _Themes.handleThemeFromObject)(theme, 'colors.light-text', '#fafdff'), (0, _Themes.handleThemeFromObject)(theme, 'colors.ripple-success', '#11b95c'), (0, _Themes.handleThemeFromObject)(theme, 'colors.dark-success', '#0DAB53'));
});
exports.SuccessButton = SuccessButton;
var SuccessLink = (0, _styledComponents["default"])(SuccessButton).attrs(function (_ref10) {
  var disabled = _ref10.disabled;
  return disabled || {
    as: 'a'
  };
}).withConfig({
  displayName: "StyledButtons__SuccessLink",
  componentId: "sc-1e7va4d-9"
})(["text-decoration:none;&:hover{color:var(--button-text-color);}"]);
exports.SuccessLink = SuccessLink;
var AlertButton = (0, _styledComponents["default"])(Button).withConfig({
  displayName: "StyledButtons__AlertButton",
  componentId: "sc-1e7va4d-10"
})(["", ""], function (_ref11) {
  var theme = _ref11.theme,
      outlined = _ref11.outlined;
  return outlined ? (0, _styledComponents.css)(["--button-text-color:", ";--button-ripple-color:", ";&:hover{background-color:", ";}"], (0, _Themes.handleThemeFromObject)(theme, 'colors.alert', '#fabe00'), (0, _Themes.handleThemeFromObject)(theme, 'colors.alert38', '#fde69e'), (0, _Themes.handleThemeFromObject)(theme, 'colors.alert6', '#fffbf0')) : (0, _styledComponents.css)(["background-color:", ";--button-text-color:", ";--button-ripple-color:", ";&:hover{background-color:", ";}"], (0, _Themes.handleThemeFromObject)(theme, 'colors.alert', '#fabe00'), (0, _Themes.handleThemeFromObject)(theme, 'colors.light-text', '#fafdff'), (0, _Themes.handleThemeFromObject)(theme, 'colors.ripple-alert', '#e1ab00'), (0, _Themes.handleThemeFromObject)(theme, 'colors.dark-alert', '#F0B600'));
});
exports.AlertButton = AlertButton;
var AlertLink = (0, _styledComponents["default"])(AlertButton).attrs(function (_ref12) {
  var disabled = _ref12.disabled;
  return disabled || {
    as: 'a'
  };
}).withConfig({
  displayName: "StyledButtons__AlertLink",
  componentId: "sc-1e7va4d-11"
})(["text-decoration:none;&:hover{color:var(--button-text-color);}"]);
exports.AlertLink = AlertLink;
var ErrorButton = (0, _styledComponents["default"])(Button).withConfig({
  displayName: "StyledButtons__ErrorButton",
  componentId: "sc-1e7va4d-12"
})(["", ""], function (_ref13) {
  var theme = _ref13.theme,
      outlined = _ref13.outlined;
  return outlined ? (0, _styledComponents.css)(["--button-text-color:", ";--button-ripple-color:", ";&:hover{background-color:", ";}"], (0, _Themes.handleThemeFromObject)(theme, 'colors.error', '#dc3545'), (0, _Themes.handleThemeFromObject)(theme, 'colors.error38', '#f2b2b8'), (0, _Themes.handleThemeFromObject)(theme, 'colors.error6', '#fdf3f4')) : (0, _styledComponents.css)(["background-color:", ";--button-text-color:", ";--button-ripple-color:", ";&:hover{background-color:", ";}"], function (props) {
    return (0, _Themes.handleThemeFromObject)(props.theme, 'colors.error', '#dc3545');
  }, function (props) {
    return (0, _Themes.handleThemeFromObject)(props.theme, 'colors.light-text', '#fafdff');
  }, function (props) {
    return (0, _Themes.handleThemeFromObject)(props.theme, 'colors.ripple-error', '#c6303e');
  }, function (props) {
    return (0, _Themes.handleThemeFromObject)(props.theme, 'colors.dark-error', '#bd2130');
  });
});
exports.ErrorButton = ErrorButton;
var ErrorLink = (0, _styledComponents["default"])(ErrorButton).attrs(function (_ref14) {
  var disabled = _ref14.disabled;
  return disabled || {
    as: 'a'
  };
}).withConfig({
  displayName: "StyledButtons__ErrorLink",
  componentId: "sc-1e7va4d-13"
})(["text-decoration:none;&:hover{color:var(--button-text-color);}"]);
exports.ErrorLink = ErrorLink;