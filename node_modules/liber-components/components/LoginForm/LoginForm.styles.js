"use strict";

require("core-js/modules/es6.object.define-property");

require("core-js/modules/es6.string.iterator");

require("core-js/modules/es6.weak-map");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.FormSeparator = exports.Button = exports.Title = exports.Form = exports.LoginContainer = exports.Footer = exports.Logo = exports.LogoGrow = exports.WhiteLink = exports.FooterText = exports.Card = exports.Background = exports.Global = exports.User = exports.Phone = exports.Envelope = void 0;

require("core-js/modules/es6.symbol");

require("core-js/modules/es6.array.index-of");

require("core-js/modules/web.dom.iterable");

require("core-js/modules/es6.array.iterator");

require("core-js/modules/es6.object.to-string");

require("core-js/modules/es6.object.keys");

require("core-js/modules/es6.object.define-properties");

require("core-js/modules/es6.object.freeze");

require("core-js/modules/es6.string.small");

var _react = _interopRequireWildcard(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _styledComponents = _interopRequireWildcard(require("styled-components"));

var _Themes = require("../Themes");

var _Util = require("../Util");

var _Icons = require("../Icons");

var _Logo = require("../Logo");

var _Buttons = require("../Buttons");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function _getRequireWildcardCache() { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; if (obj != null) { var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _templateObject11() {
  var data = _taggedTemplateLiteral(["\n    width: 0px;\n    height: unset;\n    margin: 0px 48px;\n    border-bottom: 0px;\n    border-left: solid 1px rgba(0,0,0,0.1);\n  "]);

  _templateObject11 = function _templateObject11() {
    return data;
  };

  return data;
}

function _templateObject10() {
  var data = _taggedTemplateLiteral(["\n    margin-right: auto;\n    width: 50%;\n  "]);

  _templateObject10 = function _templateObject10() {
    return data;
  };

  return data;
}

function _templateObject9() {
  var data = _taggedTemplateLiteral(["\n    line-height: 35px;\n  "]);

  _templateObject9 = function _templateObject9() {
    return data;
  };

  return data;
}

function _templateObject8() {
  var data = _taggedTemplateLiteral(["\n    min-width: 355px;\n  "]);

  _templateObject8 = function _templateObject8() {
    return data;
  };

  return data;
}

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

function _templateObject7() {
  var data = _taggedTemplateLiteral(["\n      width: 350px;\n      height: 250px;\n    "]);

  _templateObject7 = function _templateObject7() {
    return data;
  };

  return data;
}

function _templateObject6() {
  var data = _taggedTemplateLiteral(["\n      width: 109.3px;\n      height: 88.2px;\n    "]);

  _templateObject6 = function _templateObject6() {
    return data;
  };

  return data;
}

function _templateObject5() {
  var data = _taggedTemplateLiteral(["\n      justify-content: flex-start;\n    "]);

  _templateObject5 = function _templateObject5() {
    return data;
  };

  return data;
}

function _templateObject4() {
  var data = _taggedTemplateLiteral(["\n    text-align: left;\n    min-width: 220.69px;\n    flex-grow: 0;\n  "]);

  _templateObject4 = function _templateObject4() {
    return data;
  };

  return data;
}

function _templateObject3() {
  var data = _taggedTemplateLiteral(["\n    flex-flow: row;\n    padding: 48px;\n    width: unset;\n    margin-bottom: 50px;\n    min-width: 476px;\n  "]);

  _templateObject3 = function _templateObject3() {
    return data;
  };

  return data;
}

function _templateObject2() {
  var data = _taggedTemplateLiteral(["\n    justify-content: flex-end;\n    padding: 0 50px;\n  "]);

  _templateObject2 = function _templateObject2() {
    return data;
  };

  return data;
}

function _templateObject() {
  var data = _taggedTemplateLiteral(["\n  ", " {\n    width: 100vw;\n    min-height: 100vh;\n    overflow: auto;\n    background: url('", "'),\n      linear-gradient(311deg, ", ", #63d0f8);\n    box-sizing: border-box;\n  }\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

// eslint-disable-next-line
var pattern = 'data:image/svg+xml,%3Csvg xmlns=%22http://www.w3.org/2000/svg%22 width=%22120%22 height=%22120%22 viewBox=%220 0 60 60%22%3E%3Cdefs%3E%3Cpattern id=%22pattern%22 patternUnits=%22userSpaceOnUse%22 width=%224%22 height=%224%22%3E%3Cpath d=%22M3,-1 l2,2 M0,0 l4,4 M-1,3 l2,2%22 style=%22stroke:%23ffffff; stroke-width:0.2;opacity:0.5%22 /%3E%3C/pattern%3E%3C/defs%3E%3Crect x=%220%22 y=%220%22 width=%22100%25%22 height=%22100%25%22 fill=%22url%28%23pattern%29%22/%3E%3C/svg%3E';
var icon = (0, _styledComponents.css)(["width:16px;height:16px;fill:", ";margin-right:10px;"], function (props) {
  return (0, _Themes.handleThemeFromObject)(props.theme, 'colors.white', '#ffffff');
});
var Envelope = (0, _styledComponents["default"])(_Icons.FaEnvelope).withConfig({
  displayName: "LoginFormstyles__Envelope",
  componentId: "w5bez5-0"
})(["", ""], icon);
exports.Envelope = Envelope;
var Phone = (0, _styledComponents["default"])(_Icons.FaPhone).withConfig({
  displayName: "LoginFormstyles__Phone",
  componentId: "w5bez5-1"
})(["", ""], icon);
exports.Phone = Phone;
var User = (0, _styledComponents["default"])(_Icons.FaUser).withConfig({
  displayName: "LoginFormstyles__User",
  componentId: "w5bez5-2"
})(["", ""], icon);
exports.User = User;
var Global = (0, _styledComponents.createGlobalStyle)(_templateObject(), function (_ref) {
  var container = _ref.container;
  return container;
}, pattern, function (props) {
  return (0, _Themes.handleThemeFromObject)(props.theme, 'colors.liberBlue', '#009dff');
});
exports.Global = Global;

var Background = _styledComponents["default"].div.withConfig({
  displayName: "LoginFormstyles__Background",
  componentId: "w5bez5-3"
})(["width:100%;min-height:100vh;display:flex;flex-direction:column;justify-content:flex-start;align-items:center;padding:25px;box-sizing:border-box;", ""], _Util.media.large(_templateObject2()));

exports.Background = Background;

var CenterCard = _styledComponents["default"].div.withConfig({
  displayName: "LoginFormstyles__CenterCard",
  componentId: "w5bez5-4"
})(["flex-grow:1;display:flex;flex-direction:column;justify-content:center;align-items:center;width:100%;"]);

var Card = _styledComponents["default"].div.withConfig({
  displayName: "LoginFormstyles__Card",
  componentId: "w5bez5-5"
})(["border-radius:2px;background-color:", ";box-shadow:0 10px 10px 0 rgba(0,0,0,0.1);text-align:center;display:flex;align-items:center;box-sizing:border-box;margin-top:50px;overflow:hidden;flex-flow:column-reverse;padding:24px;width:100%;margin-bottom:16px;min-width:100%;", ""], function (props) {
  return (0, _Themes.handleThemeFromObject)(props.theme, 'colors.white', '#ffffff');
}, _Util.media.large(_templateObject3()));

exports.Card = Card;

var Separator = _styledComponents["default"].div.withConfig({
  displayName: "LoginFormstyles__Separator",
  componentId: "w5bez5-6"
})(["width:100%;height:0px;opacity:0.7;border:solid 2px ", ";border-bottom:0px;margin-bottom:16px;"], function (props) {
  return (0, _Themes.handleThemeFromObject)(props.theme, 'colors.white', '#ffffff');
});

var FooterContainer = _styledComponents["default"].div.withConfig({
  displayName: "LoginFormstyles__FooterContainer",
  componentId: "w5bez5-7"
})(["width:100%;height:162px;text-align:center;position:relative;display:flex;justify-content:center;flex-wrap:wrap;flex-direction:row;"]);

var FooterText = _styledComponents["default"].ul.withConfig({
  displayName: "LoginFormstyles__FooterText",
  componentId: "w5bez5-8"
})(["list-style:none;color:", ";font-size:", ";font-weight:", ";padding:0px;margin:0px 0px 20px 0px;text-align:center;min-width:100%;flex-grow:1;", " & > li{display:flex;justify-content:center;align-items:center;", "}"], function (props) {
  return (0, _Themes.handleThemeFromObject)(props.theme, 'colors.white', '#ffffff');
}, function (props) {
  return (0, _Themes.handleThemeFromObject)(props.theme, 'font-sizes.p', '16px');
}, function (props) {
  return (0, _Themes.handleThemeFromObject)(props.theme, 'font-weights.medium', '500');
}, _Util.media.large(_templateObject4()), _Util.media.large(_templateObject5()));

exports.FooterText = FooterText;

var WhiteLink = _styledComponents["default"].a.withConfig({
  displayName: "LoginFormstyles__WhiteLink",
  componentId: "w5bez5-9"
})(["color:", "!important;text-decoration:none;"], function (props) {
  return (0, _Themes.handleThemeFromObject)(props.theme, 'colors.white', '#ffffff');
});

exports.WhiteLink = WhiteLink;

var LogoGrow = _styledComponents["default"].div.withConfig({
  displayName: "LoginFormstyles__LogoGrow",
  componentId: "w5bez5-10"
})(["flex-grow:1;"]);

exports.LogoGrow = LogoGrow;
var SmallLogo = (0, _styledComponents["default"])(_Logo.SimpleLogo).withConfig({
  displayName: "LoginFormstyles__SmallLogo",
  componentId: "w5bez5-11"
})(["display:inline-block;margin:0px 0px 20px 0px;& > svg{width:72.9px;height:58.8px;", "}& .cls-1{stroke:", ";}& .cls-2{fill:", ";}"], _Util.media.large(_templateObject6()), function (props) {
  return (0, _Themes.handleThemeFromObject)(props.theme, 'colors.white', '#ffffff');
}, function (props) {
  return (0, _Themes.handleThemeFromObject)(props.theme, 'colors.white', '#ffffff');
});
var Logo = (0, _styledComponents["default"])(_Logo.SimpleLogo).withConfig({
  displayName: "LoginFormstyles__Logo",
  componentId: "w5bez5-12"
})(["display:inline-block;background-color:#fff;margin:0px 0px 20px 0px;& > svg{width:350px;height:120px;", "}& .cls-1{stroke:", ";fill:#fff;}& .cls-2{stroke:", ";fill:", ";}"], _Util.media.medium(_templateObject7()), function (props) {
  return (0, _Themes.handleThemeFromObject)(props.theme, 'colors.liberBlue', '#009dff');
}, function (props) {
  return (0, _Themes.handleThemeFromObject)(props.theme, 'colors.liberBlue', '#009dff');
}, function (props) {
  return (0, _Themes.handleThemeFromObject)(props.theme, 'colors.liberBlue', '#009dff');
});
exports.Logo = Logo;

var Footer = function Footer(_ref2) {
  var logoUrl = _ref2.logoUrl,
      email = _ref2.email,
      phone = _ref2.phone,
      props = _objectWithoutProperties(_ref2, ["logoUrl", "email", "phone"]);

  return _react["default"].createElement(FooterContainer, props, _react["default"].createElement(FooterText, null), _react["default"].createElement(LogoGrow, null, logoUrl ? _react["default"].createElement("a", {
    href: logoUrl
  }, _react["default"].createElement(SmallLogo, null)) : _react["default"].createElement(SmallLogo, null)), _react["default"].createElement(FooterText, null, _react["default"].createElement("li", null, _react["default"].createElement(Envelope, null), _react["default"].createElement(WhiteLink, {
    href: "mailto:".concat(email)
  }, email)), _react["default"].createElement("li", null, _react["default"].createElement(Phone, null), phone)));
};

exports.Footer = Footer;
Footer.propTypes = {
  logoUrl: _propTypes["default"].string,
  email: _propTypes["default"].string,
  phone: _propTypes["default"].string
};
Footer.defaultProps = {
  logoUrl: null,
  email: 'contato@libercapital.com.br',
  phone: '+55 (11) 4858-1265'
};

var LoginContainer = function LoginContainer(_ref3) {
  var children = _ref3.children,
      container = _ref3.container,
      footer = _ref3.footer;
  return _react["default"].createElement(_react.Fragment, null, _react["default"].createElement(Global, {
    container: container
  }), _react["default"].createElement(Background, null, _react["default"].createElement(CenterCard, null, _react["default"].createElement(Card, null, children)), footer && _react["default"].createElement(Separator, null), footer));
};

exports.LoginContainer = LoginContainer;
LoginContainer.propTypes = {
  children: _propTypes["default"].oneOfType([_propTypes["default"].any]),
  container: _propTypes["default"].string,
  footer: _propTypes["default"].node
};
LoginContainer.defaultProps = {
  children: '',
  container: '#root',
  footer: _react["default"].createElement(Footer, null)
};

var Form = _styledComponents["default"].form.withConfig({
  displayName: "LoginFormstyles__Form",
  componentId: "w5bez5-13"
})(["min-width:100%;width:100%;display:flex;flex-direction:column;justify-content:flex-start;align-items:center;", ""], _Util.media.large(_templateObject8()));

exports.Form = Form;

var Title = _styledComponents["default"].h1.withConfig({
  displayName: "LoginFormstyles__Title",
  componentId: "w5bez5-14"
})(["margin:15px 0px 9px 0px;font-family:", ";font-weight:", ";margin:0px !important;line-height:25px;font-size:", ";color:", ";text-transform:uppercase;", ""], function (props) {
  return (0, _Themes.handleThemeFromObject)(props.theme, 'font-family', 'Roboto');
}, function (props) {
  return (0, _Themes.handleThemeFromObject)(props.theme, 'font-weights.medium', '500');
}, function (props) {
  return (0, _Themes.handleThemeFromObject)(props.theme, 'font-sizes.h4', '24px');
}, function (props) {
  return (0, _Themes.handleThemeFromObject)(props.theme, 'color.liberBlue', '#009DFF');
}, _Util.media.small(_templateObject9()));

exports.Title = Title;
var Button = (0, _styledComponents["default"])(_Buttons.SuccessButton).withConfig({
  displayName: "LoginFormstyles__Button",
  componentId: "w5bez5-15"
})(["margin-top:12px;margin-right:unset;width:100%;", ""], _Util.media.large(_templateObject10()));
exports.Button = Button;
Button.defaultProps = {
  version: 2,
  size: 'large'
};

var FormSeparator = _styledComponents["default"].div.withConfig({
  displayName: "LoginFormstyles__FormSeparator",
  componentId: "w5bez5-16"
})(["width:unset;height:0px;margin:24px 0px;border-bottom:solid 1px rgba(0,0,0,0.1);border-left:0px;align-self:stretch;", ""], _Util.media.large(_templateObject11()));

exports.FormSeparator = FormSeparator;